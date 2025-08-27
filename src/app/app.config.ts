import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
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

import { InMemoryCache } from '@apollo/client/core';
import { NAVIGATION, NAVIGATION_TOKEN } from '@core/config/navigation.config';
import { SeoService } from '@core/services/seo.service';
import { AfterFirstPaintPreloadingStrategy } from '@core/strategies/after-first-paint-preloading.strategy';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: NAVIGATION_TOKEN, useValue: NAVIGATION },
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptorsFromDi()),
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
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      return {
        link: httpLink.create({
          uri: environment.apiUrl,
        }),
        cache: new InMemoryCache(),
      };
    }),
  ],
};
