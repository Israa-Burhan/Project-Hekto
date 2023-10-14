import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss'],
})
export class LatestProductsComponent {
  public home: any;
  public productType: string = 'newArrivals';
  constructor(private http: HttpClient) {}

  createproduct() {
    this.http.get('assets/api/home.json').subscribe((data: any) => {
      this.home = data.home;
    });
  }

  ngOnInit() {
    this.createproduct();
  }
  setProductType(type: string) {
    this.productType = type;
  }
}
