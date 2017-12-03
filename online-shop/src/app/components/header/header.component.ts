import { UserService } from '../../services/user/user.service';


import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  public username: string;
  
  private sub$: Subscription;
  private isAuthenticated: boolean;

  constructor(private authService: AuthService) { 
  
    this.sub$ = this.authService.user.subscribe(user => {
      //console.log(user)
      this.isAuthenticated = user !== null;

      if(this.isAuthenticated){
        this.username = user.username;
      }else{
        this.username = null;
      }

    })
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logoutUser();
  }

  ngOnDestroy(): void {
    if(this.sub$){
      this.sub$.unsubscribe();
    }
  }

}
