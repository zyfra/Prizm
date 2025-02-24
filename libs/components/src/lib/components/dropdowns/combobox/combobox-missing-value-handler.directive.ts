import { DestroyRef, Directive, inject, Input } from '@angular/core';
import { defer, isObservable, of, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { type PrizmComboboxComponent } from './combobox.component';
import {
  PRIZM_COMBOBOX_SELECT_MISSING_HANDLER,
  PRIZM_COMBOBOX_SHOW_DROPDOWN_ON_EMPTY,
} from './combobox.options';
import { PrizmComboboxMissingValueHandler, PrizmComboboxMissingValueHandlerToken } from './combobox.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: 'prizm-combobox[missingValueHandler]',
  standalone: true,
  providers: [
    {
      provide: PRIZM_COMBOBOX_SELECT_MISSING_HANDLER,
      useFactory() {
        return {
          handler: null,
        };
      },
    },
  ],
})
export class PrizmComboboxMissingValueHandlerDirective<T> {
  private _missingValueHandler!: PrizmComboboxMissingValueHandler<T>;

  @Input({
    required: true,
  })
  set missingValueHandler(handler: PrizmComboboxMissingValueHandler<T>) {
    this._missingValueHandler = handler;
    this.handler.handler = (search: string, combobox: PrizmComboboxComponent<T>) => {
      if (typeof this._missingValueHandler !== 'function') return combobox.updateValue(null);
      this.addFromMissingValueHandler(search, combobox);
    };
  }
  get missingValueHandler(): PrizmComboboxMissingValueHandler<T> {
    return this._missingValueHandler;
  }

  private handler = inject(PRIZM_COMBOBOX_SELECT_MISSING_HANDLER, {
    self: true,
  }) as PrizmComboboxMissingValueHandlerToken<T>;

  private readonly destroyPrevious$ = new Subject<void>();

  private readonly destroyRef = inject(DestroyRef);

  private addFromMissingValueHandler(searchValue: string, comboboxComponent: PrizmComboboxComponent<T>) {
    const missingValueHandler = this.missingValueHandler;

    const value = missingValueHandler(searchValue);

    this.destroyPrevious$.next();

    const flow$ = isObservable(value) ? value : of(value);

    flow$
      .pipe(
        tap(item => {
          comboboxComponent.onlySelect(item);
        })
      )
      .pipe(takeUntil(this.destroyPrevious$), takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
