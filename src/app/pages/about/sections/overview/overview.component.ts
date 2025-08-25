import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyVideoDirective } from '@shared/directives/lazy-video.directive';

@Component({
  selector: 'app-overview',
  imports: [
    LazyVideoDirective
  ],
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {

}
