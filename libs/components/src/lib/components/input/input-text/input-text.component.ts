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
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputHintDirective, PrizmInputLayoutComponent } from '../common';
import { NgxMaskDirective } from 'ngx-mask';

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
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
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

  public invalid = false;
  private _required: boolean | undefined;

  override readonly testId_ = 'ui_input_text';
  /**
   * Input value input
   */
  get value(): VALUE {
    return (this.ngControl?.value || this._inputValue.value) as VALUE;
  }

  /**
   * @deprecated
   * */
  @Input()
  set value(value: VALUE) {
    if (this.ngControl && this.ngControl.value !== value) {
      queueMicrotask(() => {
        this.ngControl?.control?.patchValue(value);
      });
    } else {
      this.updateValue(value);
      this.updateEmptyState();
      this.stateChanges.next();
    }

    this.valueChanged.next(this.value);
  }
  private get _inputValue() {
    return this.elementRef.nativeElement as HTMLInputElement;
  }

  @Output() enter = new EventEmitter<any>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClear = new EventEmitter<MouseEvent>();

  @Output() valueChanged = new EventEmitter<VALUE>();
  /**
   * Empty state
   */
  @HostBinding('class.empty')
  public empty!: boolean;

  readonly maybeMask = inject(NgxMaskDirective, {
    optional: true,
  }) as NgxMaskDirective;

  readonly parentLayout = inject(PrizmInputLayoutComponent, {
    optional: true,
  });
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

    afterRender(
      () => {
        this.updateEmptyState();
      },
      {
        injector: inject(Injector),
      }
    );
  }

  public ngOnInit(): void {
    this.initControlListener();
    this.inputHint?.updateHint();
    this.safeClearNgxMaskListener();
  }

  private safeClearNgxMaskListener() {
    // TODO: fix ngxMask bug when clear value
    this.parentLayout?.clear
      .pipe(
        tap(() => {
          this.maybeMask?.writeValue(null as any);
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
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
      // Update clear button state and hint in case of setup without `NG_CONTROL` directive applied (i.e. just native input)
      const unlisten = this.renderer2_.listen(this._inputValue, 'input', () => this.updateValue(this.value));
      this.destroy.addCallback(unlisten);
      return;
    }

    this.ngControl?.statusChanges
      ?.pipe(
        tap(() => {
          this.updateErrorState();
          this.cdr.markForCheck();
        }),
        tap(() => {
          this.stateChanges.next();
        }),
        takeUntil(this.destroy)
      )
      .subscribe();

    this.ngControl?.valueChanges
      ?.pipe(
        tap(value => {
          this.updateErrorState();
          this.updateValue(value);
        }),
        tap(() => {
          this.stateChanges.next();
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  private updateEmptyState(): void {
    this.empty = !(this.elementRef.nativeElement.value && this.elementRef.nativeElement.value.length);
  }

  private updateErrorState(): void {
    this.invalid = Boolean(this.ngControl && this.ngControl.invalid);
  }

  private updateValue(value: VALUE): void {
    if (value !== this.value) this.renderer2_.setProperty(this._inputValue, 'value', value);
    this.inputHint?.updateHint();
  }

  public clear(event: MouseEvent): void {
    if (this.disabled) return;

    this.updateValue(null as VALUE);
    this.ngControl?.control?.setValue('');
    this.updateEmptyState();
    this.updateErrorState();

    this.markControl({ touched: true, dirty: true });
    this.onClear.emit(event);
    this.valueChanged.next('' as VALUE);

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
