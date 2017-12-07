import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if(!this.authService.isAuthenticated()){
      this.router.navigateByUrl('login');
      this.toastr.warning('Login/Register to load this resources!');
    }
    
    return this.authService.isAuthenticated();
  }
}
