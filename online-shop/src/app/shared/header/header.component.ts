import * as console from 'console';
import { UserService } from '../../auth/shared/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  public username: string;
  
  private sub: Subscription;

  constructor(private userService: UserService) { 

  }

  ngOnInit() {
    this.sub = this.userService.user.subscribe(user => {
      this.username = user.username;
    })

  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

}
