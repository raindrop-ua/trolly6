import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MastheadComponent } from './sections/masthead/masthead.component';
import { PromoStripsComponent } from './sections/promo-strips/promo-strips.component';
import { ValuePropsComponent } from './sections/value-props/value-props.component';
import { BigClaimsComponent } from './sections/big-claims/big-claims.component';
import { ThisIsTrollysixComponent } from './sections/this-is-trollysix/this-is-trollysix.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ReadyForRouteSixComponent } from './sections/ready-for-route-six/ready-for-route-six.component';
import { MetricsComponent } from '@components/sections/metrics/metrics.component';
import { Metric } from '@components/sections/metrics/metrics.model';
import { AttentionComponent } from '@components/sections/attention/attention.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MastheadComponent,
    PromoStripsComponent,
    ValuePropsComponent,
    BigClaimsComponent,
    ThisIsTrollysixComponent,
    TestimonialsComponent,
    ReadyForRouteSixComponent,
    MetricsComponent,
    AttentionComponent,
    RouterLink
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
