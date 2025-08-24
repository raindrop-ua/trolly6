import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  OptionsSelectorComponent
} from '@features/schedule/components/options-selector/options-selector.component';
import { StopsSelectorComponent } from '@features/schedule/components/stops-selector/stops-selector.component';
import { Stop } from '@features/schedule/components/stops-selector/stop.model';

@Component({
  selector: 'app-selectors-group',
  imports: [
    OptionsSelectorComponent,
    StopsSelectorComponent
  ],
  templateUrl: './selectors-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorsGroupComponent {
  public availableVehicles = 4;
  public dayOptions = [
    {
      label: 'Weekday',
      value: 'weekday',
    },
    {
      label: 'Weekend',
      value: 'weekend',
    }
  ];
  public directionOptions = [
    { label: 'Forward', value: 'forward' },
    { label: 'Backward', value: 'backward'}
  ];
  public stops: Stop[] = [
    {
      id: '1',
      name: 'Pridniprovsk',
      description: 'Residential district. Near river embankment.',
      style: 1,
    },
    {
      id: '2',
      name: 'Mechnikov Hospital',
      description: 'Regional clinical hospital hub.',
      style: 2,
    },
    {
      id: '3',
      name: 'Historical Museum',
      description: 'City center — scenic viewpoint.',
      style: 3,
    },
  ];
}
