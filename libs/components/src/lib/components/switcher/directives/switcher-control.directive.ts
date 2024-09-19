import { AfterViewInit, ChangeDetectorRef, Directive, inject, OnInit, Optional, Self } from '@angular/core';
import {
  filterTruthy,
  PRIZM_INDEX_SELECT_FN,
  PrizmDestroyService,
  PrizmDisabledDirective,
  PrizmSelectedIndexDirective,
  PrizmStoreByIndexDirective,
  PrizmSyncParentDirective,
} from '@prizm-ui/helpers';
import { noop, ReplaySubject } from 'rxjs';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { debounceTime, switchMap, takeUntil, tap } from 'rxjs/operators';
import { SWITCHER_CONTAINER } from '../swithcer.const';
import { PrizmSwitcherItemComponent } from '@prizm-ui/components';

@Directive({
  selector: '[prizmSwitcherControl]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSwitcherControlDirective implements ControlValueAccessor, OnInit, AfterViewInit {
  onChange: (v: any) => void = noop;
  onTouched: () => void = noop;
  private destroy$ = inject(PrizmDestroyService, {
    self: true,
  });
  private selector = inject(PRIZM_INDEX_SELECT_FN);
  protected writeValue$ = new ReplaySubject<any>(1);
  private disabledDirective = inject(PrizmDisabledDirective);
  private storeByIndexDirective = inject(PrizmStoreByIndexDirective);
  protected selectedIndexDirective = inject(PrizmSelectedIndexDirective);
  private switcherContainer = inject(SWITCHER_CONTAINER);
  private readonly syncParentDirective = inject(PrizmSyncParentDirective);

  constructor(
    public readonly cdRef: ChangeDetectorRef,
    @Optional() @Self() public readonly ngControl: NgControl | null
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.selectedIndexDirective.selectedIndexChange
      .pipe(
        tap(idx => {
          const findByValue = this.storeByIndexDirective.get(idx);
          this.onChange(findByValue.value ?? idx);
        }),
        tap(() => this.cdRef.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.ngControl?.statusChanges
      ?.pipe(
        tap(() => this.syncParentDirective.sync()),
        takeUntil(this.destroy$)
      )
      .subscribe();

    // write only after get children array for right count
    this.switcherContainer
      .pipe(
        filterTruthy(),
        // wait for update all childrens
        debounceTime(0),
        switchMap(() => this.writeValue$),
        tap(idx => this.writeValue_(idx)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public writeValue(idx: any): void {
    this.writeValue$.next(idx);
  }

  private writeValue_(indexOrValue: unknown): void {
    // first search by value
    const findByValue = [...this.storeByIndexDirective.entries()].find(
      ([, item]: [number, PrizmSwitcherItemComponent<unknown>]) => {
        return item.value === indexOrValue;
      }
    );
    if (findByValue) {
      this.selector(findByValue[0]);
    } else {
      const idx = parseInt(indexOrValue as string, 10);
      if (isNaN(idx)) {
        console.warn('Cannot find by index or by value', { idx, indexOrValue });
        this.selector(-1);
        return;
      }
      this.selector(idx);
    }
    this.cdRef.markForCheck();
  }

  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabledDirective.disabled = isDisabled;
    this.syncParentDirective.sync();
    this.cdRef.markForCheck();
  }

  private isIndexValid(idx: number, switchers: any[]): boolean {
    return !!switchers[idx];
  }

  private logIndexValidationError(errorMsg: string) {
    console.warn(errorMsg);
  }
}
