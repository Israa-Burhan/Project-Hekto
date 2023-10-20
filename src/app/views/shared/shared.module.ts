import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserModule,
    RouterModule,
    HttpClientModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    BrowserModule
  ]
})
export class SharedModule { }
