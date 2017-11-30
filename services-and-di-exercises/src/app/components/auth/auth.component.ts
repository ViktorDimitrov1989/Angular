import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  sub$;

  payload: any ={
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  collectAuthData(e){
    this.payload[e.target.name] = e.target.value;
  }

  login(){
    this.sub$ = this.authService.authFunc(this.payload).subscribe(resp => {
      if(sessionStorage.getItem('authToken')){
        sessionStorage.setItem('authToken', resp.authtoken);
      }
     
    })
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
