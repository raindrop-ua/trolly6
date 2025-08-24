import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeSwitcherComponent } from '@components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    ThemeSwitcherComponent
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

}
