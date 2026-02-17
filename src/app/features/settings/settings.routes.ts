import { Routes } from '@angular/router';
import { SettingsLayoutComponent } from './layout/settings-layout/settings-layout.component';

export const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsLayoutComponent,
    children: [],
  },
];
