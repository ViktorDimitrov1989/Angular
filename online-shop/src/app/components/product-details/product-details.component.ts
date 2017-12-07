import { any } from 'codelyzer/util/function';
import { UserService } from '../../services/user/user.service';
import { ProductService } from '../../services/product/product.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private sub$ = new Subscription();
  private currentUserSub$ = new Subscription();
  private product: any;
  private loggedUser: any;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    let id = this.route.snapshot.params.id;
    this.productService.getProductById(id);

    this.sub$ = productService.focusedProduct.subscribe(focusedProd => {
      this.product = focusedProd;
    })

    this.currentUserSub$ = this.userService.loggedUser.subscribe(loggedUser => {
      this.loggedUser = loggedUser;
    })

  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.productService.getProductById(id);
    this.userService.getLoggedUser(localStorage.getItem('userId'));
    
  }

  purchase(){
    console.log(this.product);
    this.loggedUser.products.push(this.product);
    this.userService.updateLoggedUser(this.loggedUser);
    this.router.navigateByUrl('cart');
  }




}
