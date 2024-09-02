import { AfterViewInit, ChangeDetectorRef, Directive, inject, OnInit, Optional, Self } from '@angular/core';
import { PrizmSwitcherItem } from '../switcher.interface';
import {
  filterTruthy,
  PrizmDestroyService,
  PrizmDisabledDirective,
  PrizmSelectedIndexDirective,
} from '@prizm-ui/helpers';
import { noop, ReplaySubject } from 'rxjs';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { SWITCHER_CONTAINER } from '../swithcer.const';

@Directive({
  selector: '[prizmSwitcherControl]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSwitcherControlDirective implements ControlValueAccessor, OnInit, AfterViewInit {
  onChange: (v: number) => void = noop;
  onTouched: () => void = noop;
  private destroy$ = inject(PrizmDestroyService, {
    self: true,
  });
  protected writeValue$ = new ReplaySubject<number>(1);
  private disabledDirective = inject(PrizmDisabledDirective);
  protected selectedIndexDirective = inject(PrizmSelectedIndexDirective);
  private switcherContainer = inject(SWITCHER_CONTAINER);

  constructor(
    public readonly cdRef: ChangeDetectorRef,
    @Optional() @Self() public readonly ngControl: NgControl
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.selectedIndexDirective.selectedIndexChange
      .pipe(
        tap(idx => {
          this.onChange(idx);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngAfterViewInit(): void {
    this.switcherContainer
      .pipe(
        filterTruthy(),
        switchMap(() => this.writeValue$),
        tap(idx => this.writeValue_(idx)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public selectSwitcher(item: PrizmSwitcherItem, idx: number): void {
    if (this.ngControl?.disabled) return;
    if (item.disabled) return;
    if (this.selectedIndexDirective.selectedIndex === idx) return;
    this.selectedIndexDirective.selectedIndexChange.emit((this.selectedIndexDirective.selectedIndex = idx));
    this.onChange(this.selectedIndexDirective.selectedIndex);
  }

  public writeValue(idx: string): void {
    const selectedSwitcherIdx = parseInt(idx);
    this.writeValue$.next(selectedSwitcherIdx);
  }

  private writeValue_(selectedSwitcherIdx: number): void {
    if (
      !this.isIndexValid(
        selectedSwitcherIdx,
        Array.from(this.switcherContainer?.value?.nativeElement?.childNodes ?? [])
      )
    ) {
      this.logIndexValidationError("value is out of bound and can't be set");
      return;
    }

    this.selectedIndexDirective.selectedIndex = selectedSwitcherIdx;

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
    this.cdRef.markForCheck();
  }

  private isIndexValid(idx: number, switchers: any[]): boolean {
    return !!switchers[idx];
  }

  private logIndexValidationError(errorMsg: string) {
    console.warn(errorMsg);
  }
}
