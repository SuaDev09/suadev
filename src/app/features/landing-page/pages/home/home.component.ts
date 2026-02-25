// Angular imports
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

// Third-party imports
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  NgxTimelineComponent,
  NgxTimelineEntryComponent,
} from '@omnedia/ngx-timeline';

import { getProvidedIcons } from '@app/core/helpers/home-icons.helper';
import { HomeService } from '../../services/home/home.service';
@Component({
  selector: 'app-home',
  imports: [
    NgIcon,
    RouterLink,
    NgxTimelineComponent,
    NgxTimelineEntryComponent,
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  viewProviders: [provideIcons(getProvidedIcons())],
})
export class HomeComponent implements OnInit {
  skills: any = [];
  projects: any = [];
  private _homeService = inject(HomeService);

  ngOnInit(): void {
    this.skills = this._homeService.getSkills() || [];
    this.projects = this._homeService.getProjects() || [];
  }
}
