import { Component, ElementRef, Host, HostListener, Input, OnInit, Optional, Self } from '@angular/core';
import { PrizmInputControl } from '../common';
import { AbstractControl, NgControl, Validators } from '@angular/forms';
import { prizmIsNativeFocused } from '../../../util';
import { Compare, PrizmDestroyService } from '@prizm-ui/helpers';
import { fromEvent, merge, of, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[prizmInputNumber], input[type=number][prizmInput]',
  exportAs: 'prizmInputNumber',
  styleUrls: ['input-text.component.less'],
  template: '',
  providers: [{ provide: PrizmInputControl, useExisting: PrizmInputNumberComponent }],
})
export class PrizmInputNumberComponent extends PrizmInputControl<number> implements OnInit {
  public empty = new Subject<boolean>();
  get required() {
    // for work Validators.required
    if (this.ngControl.control?.hasValidator(Validators.required)) return true;

    // for work [required] attributes
    const validator = this.ngControl?.validator;
    if (!validator) {
      return false;
    }

    const validation = validator({} as AbstractControl);
    // eslint-disable-next-line no-prototype-builtins
    return Boolean(validation && validation.hasOwnProperty('required'));
  }
  focused = merge(fromEvent(this.el.nativeElement, 'blur'), fromEvent(this.el.nativeElement, 'focus')).pipe(
    map(() => prizmIsNativeFocused(this.el.nativeElement))
  );
  get invalid(): boolean {
    return this.safeNgControlData<boolean>(({ invalid }) => invalid, false);
  }

  get valid(): boolean {
    return this.safeNgControlData<boolean>(({ valid }) => valid, false);
  }

  get touched(): boolean {
    return this.safeNgControlData<boolean>(({ touched }) => touched, false);
  }
  nativeElementType = 'number';
  hasClearButton = true;

  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() allowNegative = true;
  @Input() allowFloat = true;
  @Input() step = 1;
  get value() {
    return this.el.nativeElement.valueAsNumber;
  }

  override readonly testId_ = 'ui_input_number';

  get disabled() {
    return this.el.nativeElement.disabled;
  }

  /* block e symbol TODO think about it with another way*/
  // @HostListener('keydown', ['$event']) public stopValue(ev: KeyboardEvent) {
  //   if ((ev.ctrlKey || ev.metaKey) && ['c', 'v', 'a', 'x'].includes(ev.key)) return true;
  //   if (
  //     ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace', 'Enter', 'Space', '.'].includes(ev.key)
  //   )
  //     return true;
  //
  //   return !ev.key.match(/[^0-9 ,.-]/);
  // }

  constructor(
    @Optional() @Self() public readonly ngControl: NgControl,
    @Host() private readonly el: ElementRef<HTMLInputElement>,
    private readonly destroy$: PrizmDestroyService
  ) {
    super();
    this.el.nativeElement.type = 'number';
  }

  public clear(ev: MouseEvent): void {
    this.ngControl.control?.setValue(null);
  }

  public increment(): void {
    if (this.el.nativeElement.disabled) return;

    if (this.max === null || this.hostValue < this.max) {
      const devider = this.hostValue % this.step;
      this.hostValue = Math.min(this.max ?? Number.POSITIVE_INFINITY, this.hostValue + this.step - devider);
    }

    this.ngControl.control?.markAsTouched();
    this.ngControl.control?.markAsDirty();
  }

  public decrement(): void {
    if (this.el.nativeElement.disabled) return;

    if (this.min === null || this.hostValue > this.min) {
      const devider = this.hostValue % this.step;
      this.hostValue = Math.max(
        this.min ?? Number.NEGATIVE_INFINITY,
        this.hostValue - (devider || this.step)
      );
    }

    this.ngControl.control?.markAsTouched();
    this.ngControl.control?.markAsDirty();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('keydown.arrowdown', ['$event']) onArrowDown(event: KeyboardEvent): void {
    event.preventDefault();
    this.decrement();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('keydown.arrowup', ['$event']) onArrowUp(event: KeyboardEvent): void {
    event.preventDefault();
    this.increment();
  }

  private get hostValue(): number {
    return this.ngControl.value;
  }

  private set hostValue(value: number) {
    this.ngControl.control?.setValue(value);
  }

  private safeNgControlData<T>(
    extractor: (ngControl: NgControl) => T | null | undefined,
    defaultFieldValue: T
  ): T {
    return (this.ngControl && extractor(this.ngControl)) ?? defaultFieldValue;
  }

  public ngOnInit(): void {
    this.initEmptyListener();
  }

  private initEmptyListener(): void {
    merge(of(this.ngControl.value), this.ngControl?.valueChanges as any)
      .pipe(
        map(() => Compare.isNullish(this.ngControl.value) || isNaN(this.ngControl.value)),
        distinctUntilChanged(),
        tap(isEmpty => this.empty.next(isEmpty)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
