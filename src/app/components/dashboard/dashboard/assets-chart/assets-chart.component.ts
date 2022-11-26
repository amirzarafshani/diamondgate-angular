import { Component, ViewChild, Input, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
} from 'ng-apexcharts';
import { assetsChartDataInterface } from 'src/app/types/asset.interface';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-assets-chart',
  templateUrl: './assets-chart.component.html',
  styleUrls: ['./assets-chart.component.scss'],
})
export class AssetsChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  @Input() assetsChartData: assetsChartDataInterface;

  public chartOptions: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: 'Asset Amount',
          data: this.assetsChartData.amounts,
        },
        {
          name: 'Profit',
          data: this.assetsChartData.profits,
        },
        {
          name: 'Penalty',
          data: this.assetsChartData.penalty,
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        foreColor: '#fff',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          // endingShape: "rounded"
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: this.assetsChartData.labels,
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val;
          },
        },
      },
    };
  }

  constructor() {}
}
