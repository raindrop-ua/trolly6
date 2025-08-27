import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRouteEnum } from '@core/enums/app-route.enum';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';
import { NgOptimizedImage } from '@angular/common';
import { RevealOnScrollDirective } from '@shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-masthead',
  imports: [
    RouterLink,
    SvgIconComponent,
    NgOptimizedImage,
    RevealOnScrollDirective
  ],
  templateUrl: './masthead.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MastheadComponent {

  protected readonly AppRouteEnum = AppRouteEnum;
}
