import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaySelectorComponent } from '@features/schedule/components/day-selector/day-selector.component';
import {
  DirectionSelectorComponent
} from '@features/schedule/components/direction-selector/direction-selector.component';
import { StopsSelectorComponent } from '@features/schedule/components/stops-selector/stops-selector.component';

@Component({
  selector: 'app-selectors-group',
  imports: [
    DaySelectorComponent,
    DirectionSelectorComponent,
    StopsSelectorComponent
  ],
  templateUrl: './selectors-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorsGroupComponent {

}
