import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImageCompaniesComponent } from './components/image-companies/image-companies.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ImageCompaniesComponent],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    BrowserModule,
    ImageCompaniesComponent,
  ],
})
export class SharedModule {}
