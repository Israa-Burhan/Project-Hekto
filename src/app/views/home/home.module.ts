import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { TrendingProductsComponent } from './components/trending-products/trending-products.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent, SliderComponent, FeaturedProductsComponent, LatestProductsComponent, TrendingProductsComponent],
  imports: [CommonModule, HomeRoutingModule, CarouselModule,],

})
export class HomeModule {}
