import { Subscription } from 'rxjs/Rx';
import { CommentService } from '../../../services/comment/comment.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { any } from 'codelyzer/util/function';
import { ProductService } from '../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit,OnDestroy {

  public commentForm: FormGroup;

  private focusedProduct: any;
  private sub$: Subscription;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private commentsService: CommentService) {
    this.sub$ = this.productService.focusedProduct.subscribe(focusedProduct => {
      this.focusedProduct = focusedProduct;
    })

  }

  ngOnInit() {
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]]
    })
  }

  submitComment(commentForm) {
    commentForm.value.postCreator = localStorage.getItem('username');
    commentForm.value.postedOn = new Date();
    commentForm.value.productId = this.focusedProduct._id;

    if (!this.focusedProduct.comments) {
      this.focusedProduct.comments = [];
    }

    this.commentsService.addComment(commentForm.value);
    this.commentForm.reset();
  }

  ngOnDestroy(): void {
    if(this.sub$){
      this.sub$.unsubscribe()
    }
  }

}
