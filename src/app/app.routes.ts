import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects', // Redirect to a default route if needed
  },
  {
    path: 'template',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/template/template.routes').then(
        (m) => m.templateRoutes,
      ),
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/landing-page/landing-page.routes').then(
        (m) => m.landingPageRoutes,
      ),
  },
  {
    path: 'settings',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/settings/settings.routes').then(
        (m) => m.settingsRoutes,
      ),
  },
  {
    path: '***',
    loadComponent: () =>
      import('../app/features/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent,
      ),
  },
];
