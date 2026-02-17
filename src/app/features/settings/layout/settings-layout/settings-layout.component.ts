import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-settings-layout',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './settings-layout.component.html',
  styleUrl: './settings-layout.component.css',
})
export class SettingsLayoutComponent {
  items = [
    {
      label: 'Users',
      routerLink: 'users',
      icon: 'pi pi-users',
    },
  ];
}
