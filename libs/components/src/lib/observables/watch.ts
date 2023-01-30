import { ChangeDetectorRef } from '@angular/core';
import { MonoTypeOperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';

export function prizmWatch<T>(changeDetectorRef: ChangeDetectorRef): MonoTypeOperatorFunction<T> {
  return tap(() => {
    changeDetectorRef.markForCheck();
  });
}
