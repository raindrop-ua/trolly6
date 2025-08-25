import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';
import { ClockService } from '@services/clock.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { ScheduleMockService } from '@features/schedule/services/schedule-mock.service';
import { map } from 'rxjs';
import { Status } from '@features/schedule/components/schedule-controls/departure.model';

@Component({
  selector: 'app-schedule-controls',
  imports: [
    SvgIconComponent,
    AsyncPipe,
    DatePipe,
  ],
  templateUrl: './schedule-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleControlsComponent {
  public clockService: ClockService = inject(ClockService);
  private readonly schedule = inject(ScheduleMockService);

  readonly departures$ = this.schedule.departures$;

  readonly next$ = this.departures$.pipe(
    map(list => list.find(d => d.status === Status.Now) ?? list.find(d => d.status !== Status.Past) ?? null)
  );
}
