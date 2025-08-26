import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';

@Component({
  selector: 'app-admin',
  imports: [
    SvgIconComponent
  ],
  templateUrl: './admin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {

}
