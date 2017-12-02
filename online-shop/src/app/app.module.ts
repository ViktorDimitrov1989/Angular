//Modules
import { AuthService } from './services/auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Components
import { AppComponent } from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import { AppRoutingModule } from './routing/app-routing';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';

//Services
import { UserService } from './services/user/user.service';

//Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';

//Validators
import { EqualValidator } from './services/user/equal-validator-directive';
import { AuthGuard } from './routing/path-guards/auth.guard';
import { NotAuthGuard } from './routing/path-guards/not-auth.guard';

//path guards


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EqualValidator,
    HeaderComponent,
    HomePageComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    NotAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
