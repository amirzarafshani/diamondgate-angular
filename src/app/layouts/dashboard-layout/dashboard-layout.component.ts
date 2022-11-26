import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardLayoutComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  showSidebar: string = '-left-72';
  currnetUserEmail: string | null;
  router: Router;

  constructor(private authService: AuthService, private _router: Router) {
    this.router = _router;
    this.currnetUserEmail = authService.getUsername();
  }

  ngOnInit(): void {}

  setShowSidebar(val: string) {
    this.showSidebar = val;
  }

  toggleSidebar() {
    if (this.showSidebar === '-left-72') {
      this.setShowSidebar('left-0');
    } else {
      this.setShowSidebar('-left-72');
    }
  }

  someMethod() {
    this.trigger.openMenu();
  }

  signout(): void {
    this.authService.logout();
  }
}
