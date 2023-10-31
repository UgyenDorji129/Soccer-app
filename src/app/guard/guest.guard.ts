// guest.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { CookieManagementService } from '../services/cookie.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  constructor(
    private cookieService: CookieManagementService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.cookieService.getCookie('token')) {
      return this.router.createUrlTree(['/home']);
    } else if (this.cookieService.getCookie('adminToken')) {
      return this.router.createUrlTree(['/admin']);
    } else {
      return true;
    }
  }
}
