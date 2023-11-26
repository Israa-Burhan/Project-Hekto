import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ImageCompaniesComponent } from '../shared/components/image-companies/image-companies.component';

@NgModule({
  declarations: [ShopComponent, ImageCompaniesComponent],
  imports: [CommonModule],
})
export class ShopModule {}
