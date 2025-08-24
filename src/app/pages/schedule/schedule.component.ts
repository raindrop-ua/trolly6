import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Concept1Component} from "../concepts/concept1/concept1.component";

@Component({
  selector: 'app-schedule',
  imports: [
      Concept1Component
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent {

}
