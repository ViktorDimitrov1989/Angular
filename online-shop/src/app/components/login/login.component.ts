import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUser;
  public submitted: boolean = false;
  public sub$: Subscription;

  constructor(
    private authService: AuthService
  ) {
    this.loginUser = {
      username: '',
      password: ''
    }

    this.sub$ = this.authService.user.subscribe((resp: any) => {
      
      if (resp != undefined) {
        let username: string = resp.username;
        let authToken: string = resp._kmd.authtoken;
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('username', resp.username);
      }

    })
  }

  ngOnInit() {
  }

  submitForm(dataObj) {
    this.authService.loginUser(dataObj);
  }

}
