import { ErrorComponent } from './submodules/main/error/error.component';
import { TargetGuardGuard } from './services/target-guard.guard';
import { AuthGuard } from './services/auth.guard';
import { AttackComponent } from './submodules/main/attack/attack.component';
import { RedComponent } from './main/submodules/red/red.component';
import { BlueComponent } from './main/submodules/blue/blue.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/submodules/home/home.component';
import { GreenComponent } from './main/submodules/green/green.component';
import { OrangeComponent } from './main/submodules/orange/orange.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },

  {
    path: 'blue',
    pathMatch: 'full',
    canActivate: [TargetGuardGuard],
    component: BlueComponent
  },
  {
    path: 'green',
    pathMatch: 'full',
    canActivate: [TargetGuardGuard],
    component: GreenComponent
  },
  {
    path: 'orange',
    pathMatch: 'full',
    canActivate: [TargetGuardGuard],
    component: OrangeComponent
  },
  {
    path: 'red',
    pathMatch: 'full',
    canActivate: [TargetGuardGuard],
    component: RedComponent
  },
  {
    path: 'attack',
    component: AttackComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
