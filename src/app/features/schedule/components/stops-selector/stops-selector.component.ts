import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { Stop } from '@features/schedule/components/stops-selector/stop.model';

@Component({
  selector: 'app-stops-selector',
  imports: [],
  templateUrl: './stops-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StopsSelectorComponent implements OnInit {
  public readonly preselected = input<string>();
  public readonly selectedStopId = signal<string | null>(null);
  public readonly stops = input.required<Stop[]>();

  ngOnInit() {
    this.selectedStopId.set(this.preselected() ?? this.stops()[0].id);
  }

  public selectStop(stopId: string) {
    this.selectedStopId.set(stopId);
  }
}
