import { Routes } from '@angular/router';

export const landingPageRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    // loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent,
      ),
  },
];
