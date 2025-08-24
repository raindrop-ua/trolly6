import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-it-just-works',
  imports: [
    RouterLink
  ],
  templateUrl: './it-just-works.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItJustWorksComponent {

}
