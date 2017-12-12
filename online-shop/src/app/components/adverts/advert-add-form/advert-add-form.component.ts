import { Subscription } from 'rxjs/Rx';
import { CommentService } from '../../../services/comment/comment.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { any } from 'codelyzer/util/function';
import { ProductService } from '../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advert-add-form',
  templateUrl: './advert-add-form.component.html',
  styleUrls: ['./advert-add-form.component.css']
})
export class AdvertAddFormComponent implements OnInit {

  public advertForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.advertForm = this.fb.group({
      title: [''],
      description: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]]
    })
  }

  submitAdvert(advertForm){
    console.log(advertForm.value);
  }

}
