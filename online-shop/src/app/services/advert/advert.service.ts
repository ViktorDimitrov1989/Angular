import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { APP_KEY, APP_SECRET, BASE_URL } from './../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AdvertService {

  public adverts: Subject<any> = new Subject();

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  getAdverts() {
    this.http.get(`${BASE_URL}/appdata/${APP_KEY}/adverts`).subscribe(adverts => {
      this.adverts.next(adverts);
    },
      err => {
        console.log(err);
      });
  }


  addAdvert(advert) {
    this.http.post(`${BASE_URL}/appdata/${APP_KEY}/adverts`, advert).subscribe(advert => {
      this.getAdverts();
    },
      err => {
        console.log(err);
      });
  }


}
