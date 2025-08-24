import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeadComponent } from '@pages/about/sections/head/head.component';
import { OverviewComponent } from '@pages/about/sections/overview/overview.component';
import { KeyFactsComponent } from '@pages/about/sections/key-facts/key-facts.component';
import { InfrastructureComponent } from '@pages/about/sections/infrastructure/infrastructure.component';
import { MediaComponent } from '@pages/about/sections/media/media.component';

@Component({
  selector: 'app-about',
  imports: [
    HeadComponent,
    OverviewComponent,
    KeyFactsComponent,
    InfrastructureComponent,
    MediaComponent
  ],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {

}
