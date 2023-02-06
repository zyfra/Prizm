import { ChangeDetectorRef, Provider, SkipSelf } from '@angular/core';
import { PrizmTableDirective } from '../directives/table.directive';
import { PrizmTableSortPipe } from '../pipes/table-sort.pipe';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AbstractPrizmController } from '../abstract/controller';

function prizmWatch<T>(changeDetectorRef: ChangeDetectorRef): MonoTypeOperatorFunction<T> {
  return tap(() => {
    changeDetectorRef.markForCheck();
  });
}

export const PRIZM_TABLE_PROVIDER: Provider[] = [
  PrizmDestroyService,
  PrizmTableSortPipe,

  {
    provide: PrizmTableDirective,
    deps: [[new SkipSelf(), PrizmTableDirective], ChangeDetectorRef, PrizmDestroyService],
    useFactory: (
      controller: AbstractPrizmController,
      changeDetectorRef: ChangeDetectorRef,
      destroy$: Observable<void>
    ): AbstractPrizmController => {
      controller.change$.pipe(prizmWatch(changeDetectorRef), takeUntil(destroy$)).subscribe();

      return controller;
    },
  },
];
