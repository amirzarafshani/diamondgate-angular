import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../helpers/auth.guard';
import { ReferralsComponent } from './referrals.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard/referrals',
        component: ReferralsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferralsRoutingModule {}
