import { Component, Input, OnInit } from '@angular/core';
import { ReleaseInterface } from 'src/app/types/release.interface';

@Component({
  selector: 'tr[app-release-table-row]',
  templateUrl: './release-table-row.component.html',
  styleUrls: ['./release-table-row.component.scss'],
  host: { class: 'cursor-pointer text-gray-700' },
})
export class ReleaseTableRowComponent implements OnInit {
  @Input() rowNumber: number;
  @Input() item: ReleaseInterface;

  constructor() {}

  ngOnInit(): void {}
}
