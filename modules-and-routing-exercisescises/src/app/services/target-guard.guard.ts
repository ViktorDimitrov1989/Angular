import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TargetGuardGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (next.routeConfig.path === localStorage.getItem('token')) {
      console.log('same team')
      this.router.navigateByUrl('error');
      return false;
    }

    return true;
  }
}
