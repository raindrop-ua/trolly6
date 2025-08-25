import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { Metric } from '@components/sections/metrics/metrics.model';

@Component({
  selector: 'app-metrics',
  imports: [],
  templateUrl: './metrics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricsComponent {
  public readonly data: InputSignal<readonly Metric[]> = input.required<readonly Metric[]>();
}
