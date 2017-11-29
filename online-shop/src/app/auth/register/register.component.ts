import { Component, OnInit, Input } from '@angular/core';
import {User} from './../models/User';
import {UserService} from './../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  user: User;
  public submitted: boolean = false;

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
  }

  submitForm(dataObj){
    this.userService.registerUser(dataObj).subscribe(resp => {
      console.log(resp);
    })
  }

}
