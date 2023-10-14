import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent {
  public home: any;
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin: 20,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
    nav: false,
  };

  constructor(private http: HttpClient) {}

  createfeaturedPro() {
    this.http.get('assets/api/home.json').subscribe((data: any) => {
      this.home = data.home;
    });
  }
  ngOnInit() {
    this.createfeaturedPro();
  }
}
