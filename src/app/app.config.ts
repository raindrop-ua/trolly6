import {
  ApplicationConfig,
  inject,
  isDevMode,
  provideEnvironmentInitializer,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling, withPreloading } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { AfterFirstPaintPreloadingStrategy } from '@core/strategies/after-first-paint-preloading.strategy';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { SeoService } from '@services/seo.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withPreloading(AfterFirstPaintPreloadingStrategy),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
    provideClientHydration(withEventReplay()),
    provideEnvironmentInitializer(() => {
      inject(SeoService);
    }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      autoPause: true,
      logOnly: !isDevMode(),
      trace: true,
      traceLimit: 75,
    }),
    provideEffects(),
    provideRouterStore(),
  ],
};
