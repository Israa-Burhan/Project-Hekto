import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopex-offer',
  templateUrl: './shopex-offer.component.html',
  styleUrls: ['./shopex-offer.component.scss'],
})
export class ShopexOfferComponent {
  public home: any;

  constructor(private http: HttpClient) {}

  Offer() {
    this.http.get('assets/api/home.json').subscribe((data: any) => {
      this.home = data.home;
    });
  }

  ngOnInit() {
    this.Offer();
  }
}
