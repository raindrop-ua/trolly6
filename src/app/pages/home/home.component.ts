import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MastheadComponent } from './sections/masthead/masthead.component';
import { PromoStripsComponent } from './sections/promo-strips/promo-strips.component';
import { ValuePropsComponent } from './sections/value-props/value-props.component';
import { BigClaimsComponent } from './sections/big-claims/big-claims.component';
import { ThisIsTrollysixComponent } from './sections/this-is-trollysix/this-is-trollysix.component';
import { TestimonialsComponent } from '@components/sections/testimonials/testimonials.component';
import { ReadyForRouteSixComponent } from './sections/ready-for-route-six/ready-for-route-six.component';
import { MetricsComponent } from '@components/sections/metrics/metrics.component';
import { Metric } from '@components/sections/metrics/metrics.model';
import { AttentionComponent } from '@components/sections/attention/attention.component';
import { RouterLink } from '@angular/router';
import { Testimonials } from '@components/sections/testimonials/testimonial.model';

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
      title: '4',
      description: 'key stops',
    },
    {
      title: '2',
      description: 'directions',
    }
  ];
  public readonly testimonials: Testimonials = {
    title: 'Loved by everyday riders',
    description: 'No advertising. No noise. Just what helps you get things done.',
    testimonials: [
      {
        name: 'Dmytro',
        place: 'Pridniprovsk',
        text: 'Stop being late for work. Time is money, and TrollySix is my alarm clock on wheels.',
      },
      {
        name: 'Marina',
        place: 'Pridniprovsk',
        text: 'No tables or PDFs. Just open and go. It\'s like Apple, only for trolleybuses.',
      },
      {
        name: 'Oleh',
        place: 'Pridniprovsk',
        text: 'Route 6 - like a Swiss watch. Thanks for the simplicity and precision.',
      },
    ]
  }
}
