import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScheduleControlsComponent
} from '@features/schedule/components/schedule-controls/schedule-controls.component';
import { StopDetailsComponent } from '@features/schedule/components/stop-details/stop-details.component';
import { NoticeComponent } from '@components/notice/notice.component';
import { SelectorsGroupComponent } from '@features/schedule/components/selectors-group/selectors-group.component';

@Component({
  selector: 'app-schedule',
  imports: [
    ScheduleControlsComponent,
    StopDetailsComponent,
    NoticeComponent,
    SelectorsGroupComponent,
  ],
  templateUrl: './schedule.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent {}
