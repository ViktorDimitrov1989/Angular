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

  constructor(private authService: AuthService) { 
    this.sub$ = this.authService.user.subscribe(user => {
      this.username = user.username;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if(this.sub$){
      this.sub$.unsubscribe();
    }
  }

}
