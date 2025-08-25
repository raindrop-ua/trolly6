import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef, AfterViewInit, TemplateRef, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-attention',
  imports: [NgTemplateOutlet],
  templateUrl: './attention.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttentionComponent {
  titleTemplate = input<TemplateRef<unknown>>();
  descriptionTemplate = input<TemplateRef<unknown>>();
  ctaTemplate = input<TemplateRef<unknown>>();
}
