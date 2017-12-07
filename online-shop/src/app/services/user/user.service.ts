import { APP_KEY, BASE_URL } from '../constants';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {


    public loggedUser: Subject<any> = new Subject();

    constructor(
        private http: HttpClient,
        private router: Router,
        private toastr: ToastrService
    ) {


    }

    updateLoggedUser(user) {
        this.http.put(`${BASE_URL}/user/${APP_KEY}/${user._id}`, user).subscribe(res => {
            console.log(res);
        },
            err => {
                console.log(err);
            });
    }

    getLoggedUser(userId) {
        this.http.get(`${BASE_URL}/user/${APP_KEY}/${userId}`).subscribe(user => {
            this.loggedUser.next(user);
        },
            err => {
                console.log(err);
            });
    }

}