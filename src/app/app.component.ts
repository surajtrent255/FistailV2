import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { JqueryService } from './jquery.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fistail';
  sections: { id: string; label: string }[] = [
    { id: 'services', label: 'Section 1' },
    { id: 'aboutUs', label: 'Section 2' },
    { id: 'contact', label: 'Section 3'},
    { id: 'slider-area', label: 'Section 4'}
    // Add more sections as needed
  ];
  currentSection: string = 'slider-area';


  @ViewChild("nextCarousel") viewCarousel !: ElementRef;

  constructor(private jqueryService: JqueryService, private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    setInterval(() => {
      this.viewCarousel.nativeElement.click();
    }, 3000);// 
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // this.updateActiveLink();

  }

  ngAfterViewInit() {
    this.jqueryService.init();
    this.navScroll();

  }


  updateActiveLink(){
    const scrollOffset = window.innerHeight / 2;
    for (const section of this.sections) {
      const element = this.elementRef.nativeElement.querySelector(`#${section.id}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
          const activeElement = this.elementRef.nativeElement.querySelector('.active');
          if (activeElement) {
            activeElement.classList.remove('active');
          }
          // Add the "active" class to the current active link
          this.currentSection = section.id;
        }
      }
    }
  }

  navScroll() {
    const links = this.elementRef.nativeElement.querySelectorAll('a.page-scroll');
    links.forEach((link: any) => {
      this.renderer.listen(link, 'click', (event: Event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          const offset = targetElement.getBoundingClientRect().top;
          const duration = 1000;
          const easing = this.easeInOutExpo;

          this.scrollTo(offset, duration, easing);
        }
      });
    });
  }

  scrollTo(offset: number, duration: number, easing: (t: number) => number) {
    const start = window.scrollY;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    const endTime = startTime + duration;

    const scroll = (currentTime: number) => {
      if (currentTime <= endTime) {
        const elapsedTime = currentTime - startTime;
        const scrollTo = easing(elapsedTime / duration) * offset + start;
        window.scrollTo(0, scrollTo);
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  }

  easeInOutExpo(t: number) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
    return 0.5 * (-Math.pow(2, -10 * --t) + 2);
  }

}
