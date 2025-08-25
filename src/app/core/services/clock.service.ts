import { Injectable } from '@angular/core';
import { map, shareReplay, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  public readonly time$ = timer(0, 60_000).pipe(
    map(() => {
      const now = new Date();
      return now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );
}
