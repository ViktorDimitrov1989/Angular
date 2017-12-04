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
  private isAdmin: boolean;

  constructor(private authService: AuthService) { 
  
    this.sub$ = this.authService.user.subscribe(user => {
      this.isAuthenticated = user !== null;

      if(this.isAuthenticated){
        this.username = user.username;
        this.isAdmin = user.role === 'admin';
      }else{
        this.username = null;
      }

    })
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdministrator();
    this.username = this.authService.getUsername();
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
