import { Subscription } from 'rxjs/Rx';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {User} from './../models/User';
import {UserService} from './../shared/user.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  user: User;
  public submitted: boolean = false;

  private sub: Subscription;

  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {
    this.user = {
      username: '',
      password: '',
      confirmPassword: '',
      phone: '',
      email: ''
    };

    this.sub = this.userService.user.subscribe((resp:any) => {
      let username: string = resp.username;
      let authToken: string = resp._kmd.authtoken;
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('username', resp.username);
    })
  }

  submitForm(dataObj){
    this.userService.registerUser(dataObj);
  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

}
