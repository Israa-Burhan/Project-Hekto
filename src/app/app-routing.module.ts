import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './views/home/home.module';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ShopModule } from './views/shop/shop.module';
import { ShopComponent } from './views/shop/shop.component';
import { BlogModule } from './views/blog/blog.module';
import { BlogComponent } from './views/blog/blog.component';
import { PagesModule } from './views/pages/pages.module';
import { PagesComponent } from './views/pages/pages.component';
import { ProductsModule } from './views/products/products.module';
import { ProductsComponent } from './views/products/products.component';
import { MyAccountModule } from './views/my-account/my-account.module';
import { MyAccountComponent } from './views/my-account/my-account.component';
import { ContactModule } from './views/contact/contact.module';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then(() => HomeModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./views/shop/shop.module').then(() => ShopModule),
    component: ShopComponent,
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./views/blog/blog.module').then(() => BlogModule),
    component: BlogComponent,
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./views/pages/pages.module').then(() => PagesModule),
    component: PagesComponent,
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./views/products/products.module').then(() => ProductsModule),
    component: ProductsComponent,
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./views/contact/contact.module').then(() => ContactModule),
    component: ContactComponent,
  },
  {
    path: 'my-account',
    loadChildren: () =>
      import('./views/my-account/my-account.module').then(() => MyAccountModule),
    component: MyAccountComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
