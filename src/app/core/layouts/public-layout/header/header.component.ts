import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NAVIGATION_TOKEN } from '@core/config/navigation.config';
import { ThemeSwitcherComponent } from '@components/theme-switcher/theme-switcher.component';
import { AppRouteEnum } from '@core/enums/app-route.enum';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';
import { ClockService } from '@services/clock.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    ThemeSwitcherComponent,
    SvgIconComponent,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private router = inject(Router);
  public clockService: ClockService = inject(ClockService);
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  public navigation = inject(NAVIGATION_TOKEN);
  public readonly showSticky = signal<boolean>(false);

  public ngOnInit() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        tap((value) => {
          this.showSticky.set(value.url.includes(AppRouteEnum.Schedule));
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.cdr.markForCheck();
      });
  }

  public isLinkActive(path: string): boolean {
    return this.router.isActive(path, {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored',
    });
  }

  protected readonly AppRouteEnum = AppRouteEnum;
}
