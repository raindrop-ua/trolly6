import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { StopDetails } from './stop-details.model';
import { TemperaturePipe } from '../../pipes/temperature.pipe';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-stop-details',
  imports: [
    TemperaturePipe,
    DecimalPipe,
    SvgIconComponent
  ],
  templateUrl: './stop-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StopDetailsComponent {
  stopData = input.required<StopDetails>();
}
