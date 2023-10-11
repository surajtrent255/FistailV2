import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appActiveLink]'
})
export class ActiveLinkDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.checkActive();
  }

  ngAfterViewInit() {
    this.checkActive();
  }

  private checkActive() {
    const section = this.el.nativeElement.getAttribute('href').substring(1);
    const element = document.getElementById(section);

    if (element !== null && this.isElementInViewport(element)) {
      this.renderer.addClass(this.el.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'active');
    }
  }

  private isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    // let status : boolean = (
    //   rect.top >= 0 &&
    //   rect.left >= 0 &&
    //   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // )
    // return status;
        const scrollOffset = window.innerHeight / 2;
    // for (const section of this.sections) {
    //   const element = this.elementRef.nativeElement.querySelector(`#${section.id}`);
    //   if (element) {
    //     const rect = element.getBoundingClientRect();
    //     if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
    //       const activeElement = this.elementRef.nativeElement.querySelector('.active');
    //       if (activeElement) {
    //         activeElement.classList.remove('active');
    //       }
    //       // Add the "active" class to the current active link
    //       this.currentSection = section.id;
    //     }
    //   }
    // }
      let status: boolean = (rect.top <= scrollOffset && rect.bottom >= scrollOffset);
    return status;
  }
  
}
