import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class JqueryService {

  constructor() { }

  init(){
    // $(window).on('load',function() {
    //   "use strict";
    //   $('#loader').fadeOut();
    // });

    /* 
   Back Top Link
   ========================================================================== */
   var offset = 200;
   $(window).scroll(()=> {
     if ($(window).scrollTop() > offset) {
       $('.goUp').fadeIn(500);
     } else {
       $('.goUp').fadeOut(500);
     }
   });

   $('.goUp').on('click',function() {
     $('html, body').animate({
       scrollTop: 0
     }, 1000);
     return false;
   })

// TypeScript
// document.addEventListener("DOMContentLoaded", () => {
//   const navLinks = document.querySelectorAll(".nav-link") ;
  
//   function updateActiveLink() {
//     const scrollPos = window.scrollY;
//     navLinks.forEach((navLink) => {
//       const targetId = navLink.getAttribute("href")!.substring(1); // Remove '#' from href
//       const targetSection = document.getElementById(targetId);
//       if (targetSection) {
//         const sectionTop = targetSection.offsetTop;
//         const sectionBottom = sectionTop + targetSection.offsetHeight;
        
//         if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
//           navLink.classList.add("active");
//         } else {
//           navLink.classList.remove("active");
//         }
//       }
//     });
//   }

//   window.addEventListener("scroll", updateActiveLink);

//   updateActiveLink();
// });

  }
}
