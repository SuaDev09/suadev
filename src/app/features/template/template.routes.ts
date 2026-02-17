import { Routes } from '@angular/router';

export const templateRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/template/template.component').then(
        (m) => m.TemplateComponent
      ),
    // loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  },
];
