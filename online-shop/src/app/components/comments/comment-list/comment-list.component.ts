import { Subscription } from 'rxjs/Rx';
import { CommentService } from '../../../services/comment/comment.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { ProductService } from '../../../services/product/product.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {

  public comments: any[];

  private commentsSub$: Subscription;
  private focusedProdSub$: Subscription;

  constructor(
    private commentService: CommentService,
    private productService: ProductService
  ) {

    this.focusedProdSub$ = this.productService.focusedProduct.subscribe(focusedProduct => {
      this.commentService.getFocusedProductComments(focusedProduct._id);
    })

    this.commentsSub$ = this.commentService.focusedComments.subscribe(focusedComments => {
      this.comments = focusedComments;
    })

  }

  ngOnDestroy(): void {
    if(this.commentsSub$){
      this.commentsSub$.unsubscribe();
    }

    if(this.focusedProdSub$){
      this.focusedProdSub$.unsubscribe();
    }
  }

  ngOnInit() {

  }

}
