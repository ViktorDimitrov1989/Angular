import { Component, OnInit, Input } from '@angular/core';
import {User} from './../../models/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  public submitted: boolean = false;


  constructor() { 

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
    console.log(dataObj);
    console.log(this.user)
  }

}
