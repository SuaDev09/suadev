import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrentThemeService } from '@app/shared/services/current-theme/current-theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [FormsModule],

  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.css',
})
export class ThemeSwitcherComponent {
  private readonly _currentThemeService = inject(CurrentThemeService);

  themeSelected = 'light'; // Default theme
  toggleTheme(event: Event) {
    console.log('toggling theme', event);
    const element = document.documentElement;
    const checkbox = event.target as HTMLInputElement;
    const theme = checkbox.checked ? 'customDark' : 'customLight';
    document.documentElement.setAttribute('data-theme', theme);

    if (checkbox.checked) {
      element.classList.add('dark');
      element.setAttribute('data-theme', 'customDark');
      this._currentThemeService.setCurrentTheme('dark-theme'); // Set the dark theme
    } else {
      this._currentThemeService.setCurrentTheme('light-theme'); // Set the light theme
      element.setAttribute('data-theme', 'customLight');
    }
  }
}
