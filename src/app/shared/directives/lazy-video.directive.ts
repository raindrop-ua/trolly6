import { Directive, ElementRef, OnDestroy, OnInit, inject, NgZone } from '@angular/core';

@Directive({
  selector: 'video[appLazyVideo]',
  standalone: true,
})
export class LazyVideoDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLVideoElement>).nativeElement;
  private zone = inject(NgZone);
  private io?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    this.zone.runOutsideAngular(() => {
      this.io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            this.el.load();
            this.el.play().catch(() => {});
            this.io?.disconnect();
          }
        }
      }, { threshold: 0.25 });
      this.io.observe(this.el);
    });
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}
