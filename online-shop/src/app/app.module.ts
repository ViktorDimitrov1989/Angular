//Modules
import { FooterComponent } from './components/shared/footer/footer.component';
import { ServiceModule } from './services/services.module';
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
import {HomePageComponent} from './components/home/home-page/home-page.component';
import { AppRoutingModule } from './routing/app-routing';
import { HeaderComponent } from './components/shared/header/header.component';
import { MainComponent } from './components/main/main.component';

//Services
// import { UserService } from './services/user/user.service';
// import { ProductService } from './services/product/product.service';

//Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';

//path guards
import { AuthGuard } from './routing/path-guards/auth.guard';
import { NotAuthGuard } from './routing/path-guards/not-auth.guard';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductsCartComponent } from './components/products/products-cart/products-cart.component';
import { SearchComponent } from './components/shared/search/search.component';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { CommentListComponent } from './components/comments/comment-list/comment-list.component';
import { CommentComponent } from './components/comments/comment/comment.component';
import { CommentPageComponent } from './components/comments/comment-page/comment-page.component';
import { AdvertListComponent } from './components/adverts/advert-list/advert-list.component';
import { AdvertComponent } from './components/adverts/advert/advert.component';
import { ManageProductsPageComponent } from './components/products/manage-products-page/manage-products-page.component';
import { AddProductFormComponent } from './components/products/add-product-form/add-product-form.component';
import { AdminGuard } from './routing/path-guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MainComponent,
    ProductsListComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductsCartComponent,
    FooterComponent,
    SearchComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent,
    CommentPageComponent,
    AdvertListComponent,
    AdvertComponent,
    ManageProductsPageComponent,
    AddProductFormComponent
  ],
  imports: [
    AuthModule,
    ServiceModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    AdminGuard,
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
