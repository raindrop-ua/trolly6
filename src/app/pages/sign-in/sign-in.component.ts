import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    NgIf,
    SvgIconComponent,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  isSubmitting = false;

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      console.log('Sign in', this.form.getRawValue());
    }, 600);
  }
}
