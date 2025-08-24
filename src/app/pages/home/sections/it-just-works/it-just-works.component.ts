import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRouteEnum } from '@core/enums/app-route.enum';

@Component({
  selector: 'app-it-just-works',
  imports: [
    RouterLink
  ],
  templateUrl: './it-just-works.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItJustWorksComponent {

  protected readonly AppRouteEnum = AppRouteEnum;
}
