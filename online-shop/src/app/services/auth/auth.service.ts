import { Subscription } from 'rxjs/Rx';
import { User } from '../../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {APP_KEY, APP_SECRET, BASE_URL} from './../constants';


@Injectable()
export class AuthService {

  public user: Subject<any> = new Subject();
  public redirectUrl: string;


  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User) {

    delete user['confirmPassword'];
    user['role'] = 'user';

    this.http.post(`${BASE_URL}/user/${APP_KEY}`, JSON.stringify(user)).subscribe(user => {
      //next send "user" to the subscribers
      this.user.next(user)
    });
  }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('authToken');

    return token !== null;
  }

  public getToken(): string {
    return localStorage.getItem('authToken');
  }

}
