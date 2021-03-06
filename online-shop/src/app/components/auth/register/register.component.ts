import { Product } from '../../../models/Product';
import { AuthService } from '../../../services/auth/auth.service';
import { RegisterUser } from '../../../models/User';
import { Subscription } from 'rxjs/Rx';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { UserService } from '../../../services/user/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public user: RegisterUser;
  public submitted: boolean = false;
  public sub$: Subscription;

  constructor(
    private authService: AuthService
  ) {
    this.user = {
      username: '',
      password: '',
      phone: '',
      email: '',
      products: [],
      role: 'user',
      confirmPassword: ''
    };

    this.sub$ = this.authService.user.subscribe((resp: any) => {
      if (resp !== undefined) {
        let username: string = resp.username;
        let authToken: string = resp._kmd.authtoken;
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('username', resp.username);
        localStorage.setItem('userRole', resp.role);
        localStorage.setItem('userId', resp._id);
      }

    })

  }

  ngOnInit() {
  }

  submitForm(user) {
    
    // user['role'] = 'user';
    // user['products'] = [];
    this.authService.registerUser(this.user);
  }

  ngOnDestroy(): void {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }

}
