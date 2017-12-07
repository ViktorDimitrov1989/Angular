//Modules
import { AuthModule } from './modules/auth.module';
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
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

//Services
import { UserService } from './services/user/user.service';

//Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ProductService } from './services/product/product.service';

//path guards
import { AuthGuard } from './routing/path-guards/auth.guard';
import { NotAuthGuard } from './routing/path-guards/not-auth.guard';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsCartComponent } from './components/products-cart/products-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MainComponent,
    ProductsListComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductsCartComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    UserService,
    ProductService,
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
