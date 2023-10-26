import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discount-item',
  templateUrl: './discount-item.component.html',
  styleUrls: ['./discount-item.component.scss'],
})
export class DiscountItemComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    dots: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  public home: any;

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
