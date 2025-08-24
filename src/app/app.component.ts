import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Concept1Component} from './pages/concepts/concept1/concept1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Concept1Component],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
