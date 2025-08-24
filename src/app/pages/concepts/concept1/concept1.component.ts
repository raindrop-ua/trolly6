import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-concept1',
  imports: [
    ThemeSwitcherComponent,
    RouterLink
  ],
  templateUrl: './concept1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Concept1Component {
  private readonly theme = inject(ThemeService);

  themeSignal = this.theme.theme;

  toggleTheme() {
    this.theme.toggle();
  }
}
