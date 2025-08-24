import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stop-details',
  imports: [],
  templateUrl: './stop-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StopDetailsComponent {
  protected sharedRoutes = ['1','4','9','16','21','B'];

}
