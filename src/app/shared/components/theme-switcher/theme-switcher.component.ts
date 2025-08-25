import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import {SvgIconComponent} from "@components/svg-icon/svg-icon.component";

@Component({
  selector: 'app-theme-switcher',
  imports: [
      SvgIconComponent
  ],
  templateUrl: './theme-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {
  private readonly theme = inject(ThemeService);

  themeSignal = this.theme.theme;

  toggleTheme() {
    this.theme.toggle();
  }
}
