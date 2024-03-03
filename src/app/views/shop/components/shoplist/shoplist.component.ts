import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss'],
})
export class ShoplistComponent {
  public shop: any;
  searchText: any;
  public sortType: string = 'asc';
  constructor(private http: HttpClient) {}

  createshop_list() {
    this.http.get('assets/api/shop.json').subscribe((data: any) => {
      this.shop = data.shop;
    });
  }
  ngOnInit() {
    this.createshop_list();
  }
  // sort(event: any) {
  //   switch (event.target.value) {
  //     case 'Low': {
  //       this.shop = this.shop.sort(
  //         (low, high) => low.Price_new - high.Price_new
  //       );
  //       break;
  //     }

  //     case 'High': {
  //       this.shop = this.shop.sort(
  //         (low, high) => high.Price_new - low.Price_new
  //       );
  //       break;
  //     }

  //     // case 'Name': {
  //     //   this.shop = this.shop.sort(function (low, high) {
  //     //     if (low.prd_name < high.prd_name) {
  //     //       return -1;
  //     //     } else if (low.prd_name > high.prd_name) {
  //     //       return 1;
  //     //     } else {
  //     //       return 0;
  //     //     }
  //     //   });
  //     //   break;
  //     // }

  //     default: {
  //       this.shop = this.shop.sort(
  //         (low, high) => low.Price_new - high.Price_new
  //       );
  //       break;
  //     }
  //   }
  //   return this.createshop_list();
  // }

  sort(event: any) {
    this.sortType = event.target.value;
  }
}
