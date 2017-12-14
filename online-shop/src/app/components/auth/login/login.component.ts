import { AuthService } from '../../../services/auth/auth.service';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

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
        localStorage.setItem('userId', resp._id);
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('username', resp.username);
        localStorage.setItem('userRole', resp.role);
      }

    })
  }

  ngOnInit() {
  }

  submitForm(dataObj) {
    this.authService.loginUser(dataObj);
  }

  ngOnDestroy(): void {
    if(this.sub$){
      this.sub$.unsubscribe()
    }
  }

}
