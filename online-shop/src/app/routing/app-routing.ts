import { ManageProductsPageComponent } from '../components/products/manage-products-page/manage-products-page.component';
import { ProductsCartComponent } from '../components/products/products-cart/products-cart.component';
import { ProductsListComponent } from '../components/products/products-list/products-list.component';
import { AuthGuard } from './path-guards/auth.guard';
import { RegisterComponent } from '../components/auth/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './../components/home/home-page/home-page.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { NotAuthGuard } from './path-guards/not-auth.guard';
import { ProductDetailsComponent } from '../components/products/product-details/product-details.component';
import { AdminGuard } from './path-guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'products',
    component: ProductsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: ProductsCartComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'manageProducts',
    component: ManageProductsPageComponent,
    canActivate: [AdminGuard]
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }