import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '@app/core/models/user.model';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  user!: User;
  hasExpanded = true;
  items: any[] = [
    {
      icon: 'pi pi-home',
      label: 'Template',
      routerLink: '/template',
    },
    {
      icon: 'pi pi-calendar',
      label: 'Calendar',
      routerLink: '/calendar',
    },
    {
      icon: 'pi pi-cog',
      label: 'Settings',
      routerLink: '/settings',
    },
    {
      icon: 'pi pi-home',
      label: 'Home',
      routerLink: '/home',
    },
  ];

  ngOnInit() {
    // Fetch user data from AuthService
    this.user = {
      name: 'Template',
      photo: 'account.png',
      role: 'User',
      department: 'IT',
    };
  }

  sidebarToggle() {
    this.hasExpanded = !this.hasExpanded;
  }

  logOut() {
    // Clear user session and redirect to login page
  }

  imgError(event: any) {
    event.target.src = 'account.png';
  }
}
