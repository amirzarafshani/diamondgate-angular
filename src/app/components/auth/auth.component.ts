import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {
  router: Router;
  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit(): void {}
}
