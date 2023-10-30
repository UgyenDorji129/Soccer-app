// cookie.service.ts
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookieManagementService {
  constructor(private cookieService: CookieService) {}

  setCookie(name: string, value: string) {
    this.cookieService.set(name, value);
  }

  getCookie(name: string): string {
    return this.cookieService.get(name);
  }

  deleteCookie(name: string) {
    this.cookieService.delete(name);
  }
}
