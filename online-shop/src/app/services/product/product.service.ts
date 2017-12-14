import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { APP_KEY, APP_SECRET, BASE_URL } from './../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdvertService } from '../advert/advert.service';

@Injectable()
export class ProductService {

  public products: Subject<any> = new Subject();
  public focusedProduct: Subject<any> = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private advertService: AdvertService) { }

  getProducts() {
    this.http.get(`${BASE_URL}/appdata/${APP_KEY}/products`).subscribe(products => {
      this.products.next(products);
    },
      err => {
        console.log(err);
      });
  }

  getProductById(productId: string) {
    this.http.get(`${BASE_URL}/appdata/${APP_KEY}/products/${productId}`).subscribe(product => {
      this.focusedProduct.next(product);
      console.log(product);
    },
      err => {
        this.toastr.error("Product not found.")
      });
  }

  getProductsByBrand(searchStr) {

    this.http.get(`${BASE_URL}/appdata/${APP_KEY}/products?query={"brand": { "$regex": "^${searchStr}"}}`).subscribe(products => {
      this.products.next(products);
    },
      err => {

      });
  }

  updateProduct(product) {
    this.http.put(`${BASE_URL}/appdata/${APP_KEY}/products/${product._id}`, product).subscribe(focusedProduct => {
      this.focusedProduct.next(focusedProduct);
    },
      err => {
        console.log(err);
      });
  }

  addProduct(product, advert) {
    this.http.post(`${BASE_URL}/appdata/${APP_KEY}/products/`, product).subscribe(product => {
      this.getProducts();
      advert['product_id'] = product['_id'];
      if (advert.title.length() > 0) {
        this.advertService.addAdvert(advert);
      }

      this.toastr.success("Product added!");
      this.router.navigateByUrl("products");
    },
      err => {
        console.log(err);
      });
  }

}
