import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';
import { ThemeSwitcherComponent } from '@components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-admin',
  imports: [
    SvgIconComponent,
    ThemeSwitcherComponent
  ],
  templateUrl: './admin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {

}
