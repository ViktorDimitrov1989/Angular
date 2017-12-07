import { PasswordValidation } from './validatePass';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DubCheck } from './services/validateName';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  register: FormGroup;

  constructor(private fb: FormBuilder,
  private validateName: DubCheck) {

  }

  //Validators.pattern(new RegExp())

  public ngOnInit(): void {
    this.register = this.fb.group({
      email: ['', [Validators.required, this.checkMail.bind(this)]],
      name: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(2)]],
      auth: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]] 
      }, {
        validator: PasswordValidation.MatchPassword
      }),
      adress: ['', [Validators.required]],
      city: ['', []],
      country: ['', []],
      zipCode: ['', []]
    })
  }

  checkMail(e){
    console.log(this.validateName.isEmailValid(e.value))
    this.validateName.isEmailValid(e.value) ? {dublicate: true} : null;
  }



  submit(data){
    console.log(data);
  }
}
