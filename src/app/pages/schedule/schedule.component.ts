import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScheduleControlsComponent
} from '@features/schedule/components/schedule-controls/schedule-controls.component';
import { StopDetailsComponent } from '@features/schedule/components/stop-details/stop-details.component';
import { StopsSelectorComponent } from '@features/schedule/components/stops-selector/stops-selector.component';
import { SelectorsComponent } from '@features/schedule/components/selectors/selectors.component';
import { NoticeComponent } from '@components/notice/notice.component';

@Component({
  selector: 'app-schedule',
  imports: [
    ScheduleControlsComponent,
    StopDetailsComponent,
    StopsSelectorComponent,
    SelectorsComponent,
    NoticeComponent,
  ],
  templateUrl: './schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent {}
