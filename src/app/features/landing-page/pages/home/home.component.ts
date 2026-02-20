import { Component } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorGithubLogoBold,
  phosphorLinkedinLogoBold,
  phosphorPaperPlaneTiltBold,
  phosphorPhoneBold,
  phosphorMapPinBold,
  phosphorEnvelopeSimpleBold,
} from '@ng-icons/phosphor-icons/bold';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgIcon, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  viewProviders: [
    provideIcons({
      phosphorGithubLogoBold,
      phosphorLinkedinLogoBold,
      phosphorPaperPlaneTiltBold,
      phosphorPhoneBold,
      phosphorMapPinBold,
      phosphorEnvelopeSimpleBold,
    }),
  ],
})
export class HomeComponent {}
