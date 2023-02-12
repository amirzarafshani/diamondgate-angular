import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  fileURL: string = 'https://diamond-stake.com/apps/diamond-stake.apk';
  constructor() {}

  ngOnInit(): void {}
}
