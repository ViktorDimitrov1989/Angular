import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.css']
})
export class ProductsCartComponent implements OnInit {
  public products: Object[];
  public overallPrice: number;

  private sub$ = new Subscription();
  private loggedUser: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.getLoggedUser(localStorage.getItem('userId'));
    this.sub$ = this.userService.loggedUser.subscribe(loggedUser => {
      this.loggedUser = loggedUser;
      this.products = loggedUser.products;
    
      if (this.products.length > 0) {
        this.overallPrice = this.calculateOverallPrice(this.products);
      } else {
        this.overallPrice = 0;
      }

    })
  }

  ngOnInit() {

  }

  calculateOverallPrice(products): number {
    return products.
      map(function (product) { return product.price; }).
      reduce(function (a, b) { return a + b; })
  }

  removeProduct(productToRemove) {
    let index = this.products.indexOf(productToRemove);

    if (index !== -1) {
      this.products.splice(index, 1);
    }

    this.loggedUser.products = this.products;
    if(this.products.length == 0){
      this.overallPrice = 0;
    }
    this.userService.updateLoggedUser(this.loggedUser);
  }

  purchaseProducts() {
    this.products = [];
    this.overallPrice = 0;
    this.loggedUser.products = this.products;
    this.userService.updateLoggedUser(this.loggedUser);
    this.router.navigateByUrl('products');
  }

}
