import {
  Attribute,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmInputControl } from '../common/base/input-control.class';

@Component({
  selector:
    // eslint-disable-next-line @angular-eslint/component-selector
    'input[prizmInput], textarea[prizmInput], input[prizmInputNumber], input[prizmInputPassword], input[prizmInput][type=number]',
  template: '',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.ng-filled]': '!empty',
    '[disabled]': 'disabled',
  },
  styleUrls: ['input-text.component.less'],
  providers: [{ provide: PrizmInputControl, useExisting: PrizmInputTextComponent }, PrizmDestroyService],
})
export class PrizmInputTextComponent extends PrizmInputControl<string> implements DoCheck, OnInit, OnDestroy {
  /**
   * @deprecated
   * Disabled input
   */
  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;

    if (this.ngControl?.control) {
      if (value === true) {
        this.ngControl.control.disable();
      } else {
        this.ngControl.control.enable();
      }
    }

    this.stateChanges.next();
  }

  @Input()
  override hidden = false;

  private _disabled = false;

  /**
   * @deprecated
   * Required input
   */
  @Input()
  get required(): boolean {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }

  set required(value: boolean) {
    this._required = value;
    this.stateChanges.next();
  }

  @HostBinding('attr.testId')
  readonly testId = 'prizm_input_text';

  private _required: boolean | undefined;

  public invalid = false;

  /**
   * Input value input
   */
  get value(): any {
    return this.ngControl?.value || this._inputValue.value;
  }

  /**
   * @deprecated
   * */
  @Input()
  set value(value: any) {
    if (this.ngControl && this.ngControl.value !== value) {
      queueMicrotask(() => {
        this.ngControl.control.patchValue(value);
      });
    } else {
      this._inputValue.value = value;
      this.updateEmptyState();
      this.stateChanges.next();
    }

    this.valueChanged.next(this.value);
  }
  private _inputValue: { value: unknown };

  @Output() enter = new EventEmitter<any>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClear = new EventEmitter<void>();

  @Output() valueChanged = new EventEmitter<any>();
  /**
   * Empty state
   */
  public empty: boolean;

  /**
   * Focus state
   */
  public focused: boolean;

  /**
   * Touched state
   */
  public _touched: boolean;

  get touched(): boolean {
    return this.ngControl ? this.ngControl.touched : this._touched;
  }

  public hasClearButton = true;
  public nativeElementType: string;

  /**
   * Create instance
   */
  constructor(
    @Optional() @Self() public readonly ngControl: NgControl,
    public readonly elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    private readonly prizmDestroyService: PrizmDestroyService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super();

    this._inputValue = elementRef.nativeElement;

    this.nativeElementType = elementRef.nativeElement.type;
  }

  public ngOnInit(): void {
    if (this.ngControl) this.initControlListener();
  }

  public ngDoCheck(): void {
    this.updateEmptyState();
    this.updateErrorState();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  @HostListener('input', ['$event'])
  private onInput(): void {
    this.updateEmptyState();
    this.stateChanges.next();
    this.valueChanged.next(this.value);
  }

  @HostListener('focus', ['$event'])
  private onFocus(): void {
    this.focused = true;
    this.stateChanges.next();
  }

  @HostListener('blur', ['$event'])
  private onBlur(): void {
    this.focused = false;
    this._touched = true;
    this.stateChanges.next();
  }

  @HostListener('keydown.enter', ['$event'])
  private onEnter(): void {
    this.enter.next(this.value);
  }

  private initControlListener(): void {
    this.ngControl?.statusChanges
      .pipe(
        tap(result => {
          this.updateEmptyState();
          this.updateErrorState();
          this.cdr.markForCheck();
        }),
        takeUntil(this.prizmDestroyService)
      )
      .subscribe();

    this.ngControl?.valueChanges
      .pipe(
        tap(() => {
          this.updateEmptyState();
          this.updateErrorState();
          this.stateChanges.next();
        }),
        takeUntil(this.prizmDestroyService)
      )
      .subscribe();

    this.ngControl.statusChanges
      .pipe(
        tap(() => {
          this.stateChanges.next();
        }),
        takeUntil(this.prizmDestroyService)
      )
      .subscribe();
  }

  private updateEmptyState(): void {
    this.empty = !(
      (this.elementRef.nativeElement.value && this.elementRef.nativeElement.value.length) ||
      (this.ngControl && this.ngControl.value)
    );
  }

  private updateErrorState(): void {
    this.invalid = this.ngControl && this.ngControl.invalid;
  }

  public clear(): void {
    if (this.disabled) return;

    this.ngControl?.control.setValue('');
    this._touched = true;

    this._inputValue.value = '';

    this.updateEmptyState();
    this.updateErrorState();

    this.focus();

    this.stateChanges.next();
    this.onClear.emit();
    this.valueChanged.next('');

    this.elementRef.nativeElement.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Backspace',
        code: 'Backspace',
      })
    );
  }

  public focus(): void {
    this.elementRef.nativeElement.focus();
  }

  public markControl(options: { touched?: boolean; dirty?: boolean }): void {
    const { touched, dirty } = options;

    if (touched) {
      this._touched = true;
      this.ngControl?.control.markAsTouched();
    }

    if (dirty) {
      this.ngControl?.control.markAsDirty();
    }

    this.stateChanges.next();
  }
}
