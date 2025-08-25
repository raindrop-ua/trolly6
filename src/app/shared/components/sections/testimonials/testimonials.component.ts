import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { Testimonials } from '@components/sections/testimonials/testimonial.model';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  public readonly data: InputSignal<Testimonials> = input.required<Testimonials>();
}
