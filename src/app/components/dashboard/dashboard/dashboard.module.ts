import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AssetsChartComponent } from './assets-chart/assets-chart.component';

@NgModule({
  declarations: [DashboardComponent, AssetsChartComponent],
  imports: [CommonModule, DashboardRoutingModule, NgApexchartsModule],
})
export class DashboardModule {}
