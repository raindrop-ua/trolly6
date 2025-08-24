import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Metric {
  title: string;
  description?: string;
}

@Component({
  selector: 'app-metrics',
  imports: [],
  templateUrl: './metrics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricsComponent {
  protected readonly metrics: Metric[] = [
    {
      title: '97%',
      description: 'on-time clarity',
    },
    {
      title: '3',
      description: 'key stops',
    },
    {
      title: '2',
      description: 'directions',
    }
  ]
}
