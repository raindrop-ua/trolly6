import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DaySelectorComponent } from '@features/schedule/components/day-selector/day-selector.component';
import {
  DirectionSelectorComponent
} from '@features/schedule/components/direction-selector/direction-selector.component';

@Component({
  selector: 'app-selectors',
  imports: [
    DaySelectorComponent,
    DirectionSelectorComponent
  ],
  templateUrl: './selectors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorsComponent {

}
