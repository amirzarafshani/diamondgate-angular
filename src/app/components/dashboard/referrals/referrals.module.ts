import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralsRoutingModule } from './referrals-routing.module';
import { ReferralsComponent } from './referrals.component';
import { ReferralTableRowComponent } from './referral-table-row/referral-table-row.component';

@NgModule({
  declarations: [ReferralsComponent, ReferralTableRowComponent],
  imports: [CommonModule, ReferralsRoutingModule],
})
export class ReferralsModule {}
