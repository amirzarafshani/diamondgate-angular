import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingLayoutComponent implements OnInit {
  router: Router;

  constructor(private _router: Router) {
    this.router = _router;
    console.log(this.router.url);
  }

  showMobileMenu: boolean = false;
  currentPosition = window.pageYOffset;

  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e: any) {
    let scroll = e.scrollingElement.scrollTop;
    this.currentPosition = scroll;
  }

  toggleMobileButton(e: Event) {
    e.preventDefault();
    console.log(e);

    this.showMobileMenu = !this.showMobileMenu;
  }

  ngOnInit(): void {}
}
