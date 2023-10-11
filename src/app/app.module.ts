import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActiveLinkDirective } from './active-link.directive';
// import { CarouselModule } from '@coreui/angular';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ContactusComponent,
    AboutusComponent,
    ActiveLinkDirective,

  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // CarouselModule
  ],
  providers: [    provideAnimations(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
