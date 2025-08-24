import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  DirectionSelectorComponent
} from '@features/schedule/components/direction-selector/direction-selector.component';
import {
  ScheduleControlsComponent
} from '@features/schedule/components/schedule-controls/schedule-controls.component';
import { StopDetailsComponent } from '@features/schedule/components/stop-details/stop-details.component';
import { StopsSelectorComponent } from '@features/schedule/components/stops-selector/stops-selector.component';

@Component({
  selector: 'app-schedule',
  imports: [
    DirectionSelectorComponent,
    ScheduleControlsComponent,
    StopDetailsComponent,
    StopsSelectorComponent,
  ],
  templateUrl: './schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent {

}
