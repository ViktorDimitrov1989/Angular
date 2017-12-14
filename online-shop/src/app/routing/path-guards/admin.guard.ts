import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {


  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (!this.authService.isAdministrator()) {
      this.router.navigateByUrl('');
      this.toastr.warning('You need administrator permition for this resources.');
    }

    return this.authService.isAdministrator();
  }
}
