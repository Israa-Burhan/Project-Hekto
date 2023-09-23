import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './views/home/home.module';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ShopModule } from './views/shop/shop.module';
import { ShopComponent } from './views/shop/shop.component';
import { BlogModule } from './views/blog/blog.module';
import { BlogComponent } from './views/blog/blog.component';
import { ContactUsModule } from './views/contact-us/contact-us.module';
import { PagesModule } from './views/pages/pages.module';
import { PagesComponent } from './views/pages/pages.component';

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
    path: 'contact',
    loadChildren: () =>
      import('./views/contact-us/contact-us.module').then(() => ContactUsModule),
    component: ContactUsModule,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
