import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { StopDetails } from './stop-details.model';
import { TemperaturePipe } from '../../pipes/temperature.pipe';

@Component({
  selector: 'app-stop-details',
  imports: [
    TemperaturePipe,
    DecimalPipe
  ],
  templateUrl: './stop-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StopDetailsComponent {
  stopData = input.required<StopDetails>();
}
