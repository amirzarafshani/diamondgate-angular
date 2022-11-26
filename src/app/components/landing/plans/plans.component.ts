import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/services/landing.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  plans: any

  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.landingService.getPlans()
    .subscribe((data: any) => {
      this.plans = data
    }); 
  }

}
