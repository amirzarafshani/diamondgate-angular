import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  fileURL: string = 'https://diamond-stake.com/apps/Diamond-Stake-1.0.4.apk';
  constructor() {}

  ngOnInit(): void {}
}
