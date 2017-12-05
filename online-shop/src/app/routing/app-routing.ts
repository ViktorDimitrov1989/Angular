import { ProductsListComponent } from '../components/products-list/products-list.component';
import { AuthGuard } from './path-guards/auth.guard';
import { RegisterComponent } from '../components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './../components/home-page/home-page.component';
import { LoginComponent } from '../components/login/login.component';
import { NotAuthGuard } from './path-guards/not-auth.guard';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';

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