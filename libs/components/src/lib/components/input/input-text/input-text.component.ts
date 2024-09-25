import {
  afterRender,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs';
import { PrizmInputHintDirective } from '../common';
import { PrizmInputControl } from '../common/base/input-control.class';

@Component({
  selector:
    // eslint-disable-next-line @angular-eslint/component-selector
    'input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]',
  template: '',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.ng-filled]': '!empty',
    '[disabled]': 'disabled',
  },
  exportAs: 'prizmInput',
  styleUrls: ['../common/styles/input.component.less', 'input-textarea.component.less'],
  providers: [{ provide: PrizmInputControl, useExisting: PrizmInputTextComponent }, PrizmDestroyService],
  standalone: true,
})
export class PrizmInputTextComponent<VALUE extends string | number | null = string>
  extends PrizmInputControl<VALUE>
  implements DoCheck, OnInit, OnDestroy
{
  @HostBinding('attr.prizmHint') get prizmHint(): VALUE {
    return this.value;
  }

  @Input()
  get disabled(): boolean {
    return this.ngControl?.disabled ?? this._disabled;
  }
  /**
   * @deprecated
   * Disabled input
   */
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

  override hidden = false;

  private _disabled = false;

  @Input()
  @HostBinding('attr.placeholder')
  placeholder?: string;

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
  private _required: boolean | undefined;

  public invalid = false;

  override readonly testId_ = 'ui_input_text';
  /**
   * Input value input
   */
  get value(): VALUE {
    return this.ngControl ? this.ngControl.value : this._inputValue.value;
  }

  /**
   * @deprecated
   */
  @Input()
  set value(value: VALUE) {
    if (this.ngControl) {
      if (this.ngControl.value !== value) {
        this.ngControl?.control?.setValue(value);
      }
    } else {
      this.updateValue(value);
      this.updateEmptyState();
      this.stateChanges.next();
    }
  }

  private get _inputValue() {
    return this.elementRef.nativeElement as HTMLInputElement;
  }

  @Output() enter = new EventEmitter<any>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClear = new EventEmitter<MouseEvent>();

  /** @deprecated */
  @Output() valueChanged = new EventEmitter<VALUE>();
  /**
   * Empty state
   */
  @HostBinding('class.empty')
  public empty!: boolean;

  /**
   * Focus state
   */
  public focused!: boolean;

  /**
   * Touched state
   */
  public _touched!: boolean;

  get touched(): boolean {
    return !!(this.ngControl ? this.ngControl.touched : this._touched);
  }

  public hasClearButton = true;
  public nativeElementType: string;

  private readonly inputHint: PrizmInputHintDirective | null = inject(PrizmInputHintDirective, {
    optional: true,
    host: true,
  });

  private readonly renderer2_ = inject(Renderer2);

  public readonly ngControl = inject(NgControl, {
    self: true,
    optional: true,
  });
  public readonly elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement> = inject(ElementRef);
  private readonly destroy = inject(PrizmDestroyService);
  private readonly cdr = inject(ChangeDetectorRef);

  /**
   * Create instance
   */
  constructor() {
    super();
    this.nativeElementType = this.elementRef.nativeElement.type;

    afterRender({
      read: () => this.updateEmptyState(),
    });
  }

  public ngOnInit(): void {
    this.initControlListener();
    this.inputHint?.updateHint();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
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
    if (!this.ngControl?.control) {
      // Update clear button state in case of setup without `NG_CONTROL` directive applied (i.e. just native input)
      const unlisten = this.renderer2_.listen(this._inputValue, 'input', () => this.updateEmptyState());
      this.destroy.addCallback(unlisten);
      return;
    }

    this.ngControl.control.statusChanges
      .pipe(
        tap(() => {
          this.updateErrorState();
          this.cdr.markForCheck();
          this.stateChanges.next();
        }),
        takeUntil(this.destroy)
      )
      .subscribe();

    this.ngControl.control.valueChanges
      .pipe(
        tap(() => {
          this.inputHint?.updateHint();
          this.stateChanges.next();
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  private updateEmptyState(): void {
    const prev = this.empty;
    this.empty = !this.elementRef.nativeElement.value;
    // Check if value changes to prevent infinite CD loop
    if (prev !== this.empty) this.stateChanges.next();
  }

  private updateErrorState(): void {
    this.invalid = Boolean(this.ngControl && this.ngControl.invalid);
  }

  /** Update `<input>` value */
  private updateValue(value: VALUE): void {
    if (value !== this.value) this.renderer2_.setProperty(this._inputValue, 'value', value);
    this.inputHint?.updateHint();
  }

  public clear(event: MouseEvent): void {
    if (this.disabled) return;

    if (this.ngControl?.control) {
      this.ngControl.control.setValue('');
      // let `ControlValueAccessor` (e.g. it can be ngx-mask) to update <input> value
      this.ngControl.valueAccessor?.writeValue('');
    } else {
      this.updateValue(null as VALUE);
      this.updateEmptyState();
    }

    // Mark control as touched while we do not focus it (usually touched applied on blur)
    this.markControl({ touched: true, dirty: true });
    this.onClear.emit(event);

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

    if (typeof touched === 'boolean') {
      this._touched = true;
      if (touched) {
        this.ngControl?.control?.markAsTouched();
      } else {
        this.ngControl?.control?.markAsUntouched();
      }
    }

    if (typeof dirty === 'boolean') {
      if (dirty) {
        this.ngControl?.control?.markAsDirty();
      } else {
        this.ngControl?.control?.markAsPristine();
      }
    }

    this.stateChanges.next();
  }

  public markAsTouched(): void {
    this.markControl({ touched: true });
  }
}
