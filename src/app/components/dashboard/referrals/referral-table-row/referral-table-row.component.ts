import { Component, Input, OnInit } from '@angular/core';
import { ReferralInterface } from 'src/app/types/referral.interface';

@Component({
  selector: 'tr[app-referral-table-row]',
  templateUrl: './referral-table-row.component.html',
  styleUrls: ['./referral-table-row.component.scss'],
  host: { class: 'text-gray-700' },
})
export class ReferralTableRowComponent implements OnInit {
  @Input() rowNumber: number;
  @Input() item: ReferralInterface;

  constructor() {}

  ngOnInit(): void {}
}
