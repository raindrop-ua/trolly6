import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-claims',
  imports: [
    RouterLink
  ],
  templateUrl: './big-claims.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigClaimsComponent {

}
