import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import{ CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private loginService: LoginService, private cookeService: CookieService) { }

<<<<<<< HEAD
  public username = `${this.cookeService.get('firstName')} ${this.cookeService.get('lastName')}`;
=======
  showCustomer: boolean = false;
  showManager: boolean = true;

  constructor() { }
>>>>>>> 8441b7882f9762ba5a329fdeef736ee330e46e3c

  logoutUser() {
    this.loginService.logoutUser();
  }
  
  ngOnInit(): void {
  }

}
