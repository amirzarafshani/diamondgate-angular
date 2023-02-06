import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/services/landing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  plans: any;

  constructor(
    private landingService: LandingService,
    private scroller: ViewportScroller,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.landingService.getPlans().subscribe((data: any) => {
      this.plans = data;
    });
  }

  goToAppsSection() {
    this.scroller.scrollToAnchor('apps');
    // document.getElementById("targetGreen").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest"
    // });
  }
}
