import { Routes } from '@angular/router';

import { PublicLayoutComponent } from '@core/layouts/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        data: {
          preload: true,
          animation: 'Home',
          seo: {
            title: 'Home | TrollySix',
            description: 'Welcome to ultimate schedule for trolleybus route number 6.',
            keywords: 'trolleybus, route 6, schedule',
          },
        },
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'schedule',
        data: {
          preload: true,
          animation: 'Home',
          seo: {
            title: 'Schedule | TrollySix',
            description: 'Ultimate schedule for trolleybus route 6.',
            keywords: 'trolleybus, route 6, schedule',
          },
        },
        loadComponent: () =>
          import('./pages/schedule/schedule.component').then((m) => m.ScheduleComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'schedule',
    pathMatch: 'full',
  },
];
