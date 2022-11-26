import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../helpers/auth.guard';
import { AssetsComponent } from './assets.component';

const routes: Routes = [
  {
    path: '',
    component: AssetsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'assets',
        component: AssetsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetsRoutingModule {}
