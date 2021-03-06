import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { RegisterUser } from '../../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { APP_KEY, APP_SECRET, BASE_URL } from './../constants';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {

  public user: Subject<any> = new Subject();
  //public redirectUrl: string;


  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  registerUser(user: RegisterUser) {

    this.http.post(`${BASE_URL}/user/${APP_KEY}`, JSON.stringify(user)).subscribe(user => {
      this.router.navigateByUrl('/');
      this.user.next(user);
    },
      err => {
        if (err.status === 409) {
          this.toastr.error('Username already exists.');
        }
      });
  }

  loginUser(loginUser) {
    this.http.post(`${BASE_URL}/user/${APP_KEY}/login`, JSON.stringify(loginUser))
      .subscribe((user) => {
        this.toastr.success('Login success');
        this.router.navigateByUrl('/');
        this.user.next(user);
      },
      err => {
        if (err.status === 401) {
          this.toastr.error('Incorrect username or password.');
        }
      });
  }

  logoutUser() {
    this.http.post(`${BASE_URL}/user/${APP_KEY}/_logout`, JSON.stringify({})).subscribe(user => {
      localStorage.clear();
      this.toastr.success('Logout success.');
      this.user.next(user);
    },
      err => {
        this.toastr.error('Something went wrong.');
      });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return token !== null;
  }

  public getToken(): string {
    return localStorage.getItem('authToken');
  }

  public getUsername(): string {
    return localStorage.getItem('username');
  }

  public isAdministrator(): boolean{
    return localStorage.getItem('userRole') === 'admin';
  }

}
