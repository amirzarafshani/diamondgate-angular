import { Component, Input, OnInit } from '@angular/core';
import { AssetInterface } from 'src/app/types/asset.interface';

@Component({
  selector: 'tr[app-asset-table-row]',
  templateUrl: './asset-table-row.component.html',
  styleUrls: ['./asset-table-row.component.scss'],
  host: { class: 'cursor-pointer text-gray-700' },
})
export class AssetTableRowComponent implements OnInit {
  @Input() rowNumber: number;
  @Input() item: AssetInterface;

  constructor() {}

  ngOnInit(): void {}
}
