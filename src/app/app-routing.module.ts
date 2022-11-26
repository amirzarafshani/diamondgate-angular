import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

const routes: Routes = [
  // Landing Routes
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full',
      },
      {
        path: 'landing',
        loadChildren: () =>
          import('./components/landing/landing.module').then(
            (m) => m.LandingModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./components/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./components/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  // Dashboard Routes
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/dashboard/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'dashboard/assets',
        loadChildren: () =>
          import('./components/dashboard/assets/assets.module').then(
            (m) => m.AssetsModule
          ),
      },
      {
        path: 'dashboard/referrals',
        loadChildren: () =>
          import('./components/dashboard/referrals/referrals.module').then(
            (m) => m.ReferralsModule
          ),
      },
      {
        path: 'dashboard/releases',
        loadChildren: () =>
          import('./components/dashboard/releases/releases.module').then(
            (m) => m.ReleasesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
