import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { ShopexOfferComponent } from './components/shopex-offer/shopex-offer.component';
import { TrendProComponent } from './components/trend-pro/trend-pro.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent, FeaturedProductsComponent, LatestProductsComponent, ShopexOfferComponent, TrendProComponent],
  imports: [CommonModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}
