import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.scss']
})
export class TrendingProductsComponent {
  public home: any;
  constructor(private http: HttpClient) { }

  createtrendingPro() {
    this.http.get('assets/api/home.json').subscribe((data: any) => {
      this.home = data.home;
    });
  }
  ngOnInit() {
    this.createtrendingPro();
  }
}
