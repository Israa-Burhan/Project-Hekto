import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HeaderComponent } from './views/shared/components/header/header.component';
import { FooterComponent } from './views/shared/components/footer/footer.component';


@NgModule({
  declarations: [AppComponent, NotFoundComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
