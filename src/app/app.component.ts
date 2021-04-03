import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinkI } from "src/app/interfaces";

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public routeLinks: RouterLinkI[] = [
    { label: "Current Status", link: "current-status" },
    { label: "Nested Data", link: "nested-data" },
  ];
  title = 'FSL-Angular-Task';
  currentUser:User = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
