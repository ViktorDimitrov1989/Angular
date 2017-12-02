import { AuthGuard } from './path-guards/auth.guard';
import { RegisterComponent } from '../components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomePageComponent} from './../components/home-page/home-page.component';
import { LoginComponent } from '../components/login/login.component';
import { NotAuthGuard } from './path-guards/not-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[NotAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[NotAuthGuard]
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