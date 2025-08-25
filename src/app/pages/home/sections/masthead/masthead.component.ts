import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRouteEnum } from '@core/enums/app-route.enum';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-masthead',
  imports: [
    RouterLink,
    SvgIconComponent
  ],
  templateUrl: './masthead.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MastheadComponent {

  protected readonly AppRouteEnum = AppRouteEnum;
}
