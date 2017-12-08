import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { APP_KEY, APP_SECRET, BASE_URL } from './../constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService {

  public focusedComments: Subject<any> = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService) { }

  addComment(comment) {
    this.http.post(`${BASE_URL}/appdata/${APP_KEY}/comments`, comment).subscribe(comment => {
      this.getFocusedProductComments(comment['productId']);
    },
      err => {
        console.log(err);
      });
  }

  getFocusedProductComments(productId) {
    this.http.get(`${BASE_URL}/appdata/${APP_KEY}/comments?query={"productId": "${productId}"}`, ).subscribe(comments => {
      this.focusedComments.next(comments);
    },
      err => {
        console.log(err);
      });
  }

}
