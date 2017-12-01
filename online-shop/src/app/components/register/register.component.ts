import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/User';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register', 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public user: User;
  public submitted: boolean = false;
  public sub$: Subscription;

  constructor(
    private authService: AuthService
  ) {
    this.user = {
      username: '',
      password: '',
      confirmPassword: '',
      phone: '',
      email: ''
    };

    this.sub$ = this.authService.user.subscribe((resp: any) => {
      let username: string = resp.username;
      let authToken: string = resp._kmd.authtoken;
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('username', resp.username);
    })

  }

  ngOnInit() {
  }

  submitForm(dataObj) {
    this.authService.registerUser(dataObj);
  }

  ngOnDestroy(): void {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }

  }

}
