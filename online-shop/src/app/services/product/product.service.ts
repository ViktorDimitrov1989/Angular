import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { APP_KEY, APP_SECRET, BASE_URL } from './../constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  public products: Subject<any> = new Subject();
  public focusedProduct: Subject<any> = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService) { }

  getProducts(){
    this.http.get(`${BASE_URL}/appdata/${APP_KEY}/products`).subscribe(products => {
      this.products.next(products);
    },
      err => {
        console.log(err);
      });
  }

  getProductById(productId: string){
    this.http.get(`${BASE_URL}/appdata/${APP_KEY}/products/${productId}`).subscribe(product => {
      this.focusedProduct.next(product);
    },
      err => {
        this.toastr.error("Product not found.")
      });
  }


}