import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Parallax, Pagination, Navigation } from 'swiper';
SwiperCore.use([Parallax, Pagination, Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
