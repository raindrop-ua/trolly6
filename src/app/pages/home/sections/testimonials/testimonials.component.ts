import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Testimonial {
  name: string;
  place: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  protected readonly testimonials: Testimonial[] = [
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
      place: 'City Center',
      text: 'Route 6 - like a Swiss watch. Thanks for the simplicity and precision.',
    },
  ]
}
