import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { PlansComponent } from './plans/plans.component';
import { StepsComponent } from './steps/steps.component';
import { CryptoPriceTrackerComponent } from './crypto-price-tracker/crypto-price-tracker.component';
import { PairComponent } from './crypto-price-tracker/pair/pair.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AppsComponent } from './apps/apps.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    LandingComponent,
    PlansComponent,
    StepsComponent,
    CryptoPriceTrackerComponent,
    PairComponent,
    CarouselComponent,
    AppsComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, SwiperModule],
})
export class LandingModule {}
