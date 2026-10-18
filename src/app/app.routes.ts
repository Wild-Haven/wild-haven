import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'equipe',
    loadComponent: () => import('./pages/team/team.component').then((m) => m.TeamComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
