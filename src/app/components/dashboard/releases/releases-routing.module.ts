import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../helpers/auth.guard';
import { ReleasesComponent } from './releases.component';

const routes: Routes = [
  {
    path: '',
    component: ReleasesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard/releases',
        component: ReleasesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasesRoutingModule {}
