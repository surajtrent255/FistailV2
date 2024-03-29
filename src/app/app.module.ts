import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActiveLinkDirective } from './active-link.directive';
import { ReviewComponent } from './review/review.component';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingComponent } from './star-rating/star-rating.component';
// import { CarouselModule } from '@coreui/angular';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ContactusComponent,
    AboutusComponent,
    ActiveLinkDirective,
    ReviewComponent,
    StarRatingComponent,

  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
    // CarouselModule
  ],
  providers: [    provideAnimations(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
