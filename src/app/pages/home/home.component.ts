import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MastheadComponent } from './sections/masthead/masthead.component';
import { PromoStripsComponent } from './sections/promo-strips/promo-strips.component';
import { ValuePropsComponent } from './sections/value-props/value-props.component';
import { BigClaimsComponent } from './sections/big-claims/big-claims.component';
import { DesignedWithPrecisionComponent } from './sections/designed-with-precision/designed-with-precision.component';
import { ThisIsTrollysixComponent } from './sections/this-is-trollysix/this-is-trollysix.component';
import { ItJustWorksComponent } from './sections/it-just-works/it-just-works.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ReadyForRouteSixComponent } from './sections/ready-for-route-six/ready-for-route-six.component';
import { MetricsComponent } from '@components/sections/metrics/metrics.component';
import { Metric } from '@components/sections/metrics/metrics.model';

@Component({
  selector: 'app-home',
  imports: [
    MastheadComponent,
    PromoStripsComponent,
    ValuePropsComponent,
    BigClaimsComponent,
    DesignedWithPrecisionComponent,
    ThisIsTrollysixComponent,
    ItJustWorksComponent,
    TestimonialsComponent,
    ReadyForRouteSixComponent,
    MetricsComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public readonly metrics: Metric[] = [
    {
      title: '97%',
      description: 'on-time clarity',
    },
    {
      title: '3',
      description: 'key stops',
    },
    {
      title: '2',
      description: 'directions',
    }
  ];
}
