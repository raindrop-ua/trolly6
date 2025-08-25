import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { Stop } from '@features/schedule/components/stops-selector/stop.model';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-stops-selector',
  imports: [
    SvgIconComponent
  ],
  templateUrl: './stops-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StopsSelectorComponent implements OnInit {
  public readonly preselected = input<string>();
  public readonly selectedStopId = signal<string | null>(null);
  public readonly stops = input.required<Stop[]>();
  public readonly showDescriptions = input<boolean>(true);

  ngOnInit() {
    this.selectedStopId.set(this.preselected() ?? this.stops()[0].id);
  }

  public selectStop(stopId: string) {
    this.selectedStopId.set(stopId);
  }
}
