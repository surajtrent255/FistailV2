import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  contactForm !: FormGroup;

  ngOnInit() {
    this.buildContactForm();
  }


  constructor(private formBuilder: FormBuilder) { }


  buildContactForm() {
    this.contactForm = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.minLength(2), ForbiddenNameValidator(/password/)]],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, [Validators.required, Validators.minLength(2)]],
      message: [null, [Validators.required, Validators.minLength(10)]]
    })
  }

  get fullName() {
    return this.contactForm.get('fullName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }

  isFieldInvalid(field: string): boolean {
    const formControl = this.contactForm.get(field);
    return formControl! && formControl.touched && formControl.invalid;
  }


  async submitForm() {
    emailjs.init("l8QqzTBv8L4YqkZnK");
    emailjs.send("service_yp72q7e", "template_5levj19", {
      from_name: `${this.fullName?.value}- (${this.email?.value})`  ,
      to_name: "Dear ",
      subject: this.subject?.value,
      message: this.message?.value,
      reply_to: "thankreplay_to",
    });

    alert("message has been sent");
    this.contactForm.reset();
  }
}

import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ForbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  };
}