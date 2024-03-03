import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [ShopComponent, ShoplistComponent, FilterPipe, SortPipe],
  imports: [CommonModule, FormsModule],
})
export class ShopModule {}
