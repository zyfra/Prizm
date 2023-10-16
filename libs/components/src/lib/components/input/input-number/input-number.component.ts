import {
  Component,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
  Self,
} from '@angular/core';
import { PrizmInputControl, PrizmInputHintDirective } from '../common';
import { AbstractControl, NgControl, Validators } from '@angular/forms';
import { prizmIsNativeFocused } from '../../../util';
import { PrizmDestroyService, prizmFormatNumber } from '@prizm-ui/helpers';
import { fromEvent, merge, Subject } from 'rxjs';
import { debounceTime, map, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { PrizmDecimal } from '@prizm-ui/core';
import { PrizmHintDirective } from '../../../directives';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[prizmInputNumber], input[type=number][prizmInput]',
  exportAs: 'prizmInputNumber',
  styleUrls: ['../common/styles/input.component.less'],
  template: '',
  providers: [PrizmDestroyService, { provide: PrizmInputControl, useExisting: PrizmInputNumberComponent }],
})
export class PrizmInputNumberComponent extends PrizmInputControl<number> implements OnInit {
  public get empty() {
    return this.el.nativeElement.value == '' && !this.hasSymbol;
  }
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

  readonly prizmHint_ = new PrizmHintDirective();

  private readonly inputHint: PrizmInputHintDirective | null = inject(PrizmInputHintDirective, {
    optional: true,
    host: true,
  });

  public focused = merge(
    fromEvent(this.el.nativeElement, 'blur'),
    fromEvent(this.el.nativeElement, 'focus')
  ).pipe(map(() => prizmIsNativeFocused(this.el.nativeElement)));
  get invalid(): boolean {
    return this.safeNgControlData<boolean>(({ invalid }) => invalid, false);
  }

  get valid(): boolean {
    return this.safeNgControlData<boolean>(({ valid }) => valid, false);
  }

  get touched(): boolean {
    return this.safeNgControlData<boolean>(({ touched }) => touched, false);
  }
  public nativeElementType = 'number';
  public hasClearButton = true;

  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() decimal: PrizmDecimal = 'not-zero';
  @Input() precision = 2;

  @Input() step = 1;
  get value() {
    return this.el.nativeElement.valueAsNumber;
  }

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClear = new EventEmitter<MouseEvent>();

  override readonly testId_ = 'ui_input_number';
  private readonly input$$ = new Subject<string>();

  get disabled() {
    return this.el.nativeElement.disabled;
  }

  /* block e symbol */
  @HostListener('keydown', ['$event']) public stopValue(ev: KeyboardEvent) {
    return ev.key !== 'e';
  }

  /* detect minus */
  @HostListener('input', ['$event.data'])
  @HostListener('paste', ['$event.clipboardData.getData("Text")'])
  public onInput(data: string) {
    this.input$$.next(data);
  }

  private hasSymbol = false;

  destroy$ = inject(PrizmDestroyService);
  constructor(
    @Self() public readonly ngControl: NgControl,
    @Host() private readonly el: ElementRef<HTMLInputElement>
  ) {
    super();
    this.el.nativeElement.type = 'number';
  }

  private detectSymbols(value: boolean): void {
    this.hasSymbol = value;
    this.stateChanges.next();
  }

  public clear(ev: MouseEvent): void {
    this.ngControl.control?.setValue(null);
    this.markAsTouched();
    this.onClear.emit(ev);
  }

  private markAsTouched(): void {
    this.ngControl.control?.markAsTouched();
    this.ngControl.control?.markAsDirty();
  }

  public increment(): void {
    if (this.el.nativeElement.disabled) return;

    if (this.max === null || this.hostValue < this.max) {
      this.hostValue = Math.min(this.max ?? Number.POSITIVE_INFINITY, this.hostValue + this.step);
    }

    this.markAsTouched();
  }

  public decrement(): void {
    if (this.el.nativeElement.disabled) return;

    if (this.min === null || this.hostValue > this.min) {
      this.hostValue = Math.max(this.min ?? Number.NEGATIVE_INFINITY, this.hostValue - this.step);
    }

    this.markAsTouched();
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
    this.overrideSetValueMethod();
    this.prizmHint_.ngOnInit();
    this.inputHint?.updateHint();

    this.input$$
      .pipe(
        throttleTime(1000 / 60),
        tap(data => {
          this.detectSymbols(!!data);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.stateChanges.complete();
    this.prizmHint_.ngOnDestroy();
  }

  // TODO change overriding later
  private overrideSetValueMethod(): void {
    if (this.ngControl.control) {
      const self = this;
      const originFunc = this.ngControl.control.setValue;
      this.ngControl.control.setValue = function (value, object) {
        originFunc.call(
          this,
          typeof value === 'number'
            ? parseFloat(prizmFormatNumber(value, self.precision, self.decimal))
            : value,
          object
        );
        self.inputHint?.updateHint();
        self.stateChanges.next();
      };
    }
  }
}
