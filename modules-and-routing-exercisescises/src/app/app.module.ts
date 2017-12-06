import { AuthGuard } from './services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './main/submodules/home/home.component';
import { GreenComponent } from './main/submodules/green/green.component';
import { RedComponent } from './main/submodules/red/red.component';
import { OrangeComponent } from './main/submodules/orange/orange.component';
import { BlueComponent } from './main/submodules/blue/blue.component';
import { AttackComponent } from './submodules/main/attack/attack.component';
import { TargetGuardGuard } from './services/target-guard.guard';
import { ErrorComponent } from './submodules/main/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreenComponent,
    RedComponent,
    OrangeComponent,
    BlueComponent,
    AttackComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    TargetGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
