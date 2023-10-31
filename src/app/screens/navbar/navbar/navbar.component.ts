import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieManagementService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private cookieService : CookieManagementService){}
  handleLogOut(){
   this.cookieService.deleteCookie("token");
   this.router.navigate(["signin"]);
  }
}
