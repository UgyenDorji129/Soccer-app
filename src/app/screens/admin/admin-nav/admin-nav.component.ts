import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieManagementService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  constructor(private router: Router, private cookieService : CookieManagementService){}
  handleLogOut(){
   this.cookieService.deleteCookie("adminToken");
   this.router.navigate(["signin"]);
  }
}
