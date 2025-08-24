import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./pages/schedule/schedule.component').then((m) => m.ScheduleComponent),
  },
  {
    path: '**',
    redirectTo: 'schedule',
    pathMatch: 'full',
  },
];
