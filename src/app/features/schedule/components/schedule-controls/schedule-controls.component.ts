import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Departure, Status } from './departure.model';

@Component({
  selector: 'app-schedule-controls',
  imports: [],
  templateUrl: './schedule-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleControlsComponent {
  protected readonly departures: Departure[] = [
    {
      status: Status.Past,
      time: '6:00',
    },
    {
      status: Status.Past,
      time: '6:26',
    },
    {
      status: Status.Past,
      time: '6:52',
    },
    {
      status: Status.Past,
      time: '7:18',
    },
    {
      status: Status.Past,
      time: '7:45',
    },
    {
      status: Status.Now,
      time: '8:10',
    },
    {
      status: Status.Soon,
      time: '8:38',
    },
    {
      status: Status.Coming,
      time: '9:04',
    },
    {
      status: Status.Coming,
      time: '9:31',
    },
    {
      status: Status.Coming,
      time: '10:43',
    },
    {
      status: Status.Coming,
      time: '11:10',
    },
    {
      status: Status.Coming,
      time: '11:36',
    },
    {
      status: Status.Coming,
      time: '12:02',
    },
    {
      status: Status.Coming,
      time: '12:28',
    },
    {
      status: Status.Coming,
      time: '12:54',
    },
    {
      status: Status.Coming,
      time: '13:20',
    },
    {
      status: Status.Coming,
      time: '13:46',
    },
    {
      status: Status.Coming,
      time: '14:12',
    },
  ];
}

/*
14:38
15:04
15:30
15:56
16:22
16:48
17:14
17:41
18:08
18:35
19:02
19:25
19:52
21:07
 */
