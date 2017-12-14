import { any } from 'codelyzer/util/function';
import { UserService } from '../../../services/user/user.service';
import { ProductService } from '../../../services/product/product.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { CommentService } from '../../../services/comment/comment.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public product: any;
  public isCommentFormShowed: boolean;
  
  private sub$ = new Subscription();
  private currentUserSub$ = new Subscription();
  private loggedUser: any;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ) {  
    this.isCommentFormShowed = false;
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
    this.loggedUser.products.push(this.product);
    this.userService.updateLoggedUser(this.loggedUser);
    this.router.navigateByUrl('cart');
  }


  manageCommentForm(){
    this.isCommentFormShowed = !this.isCommentFormShowed;
    //this.commentService.getFocusedProductComments(this.product._id);
  }

  ngOnDestroy(): void {
    if(this.sub$){
      this.sub$.unsubscribe();
    }

    if(this.currentUserSub$){
      this.currentUserSub$.unsubscribe();
    }

  }

}
