import {
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
  Optional,
  Output,
  Self,
} from '@angular/core';
import { NgControl, NgModel, UntypedFormControl, Validators } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmHintDirective } from '../../../directives';
import { PrizmInputHintDirective } from '../common';

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
  exportAs: 'prizmInput',
  styleUrls: ['input-text.component.less', 'input-textarea.component.less'],
  providers: [{ provide: PrizmInputControl, useExisting: PrizmInputTextComponent }, PrizmDestroyService],
})
export class PrizmInputTextComponent<VALUE extends string | number | null = string>
  extends PrizmInputControl<VALUE>
  implements DoCheck, OnInit, OnDestroy
{
  readonly prizmHint_ = new PrizmHintDirective();

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

  override readonly testId_ = 'ui_input_text';

  private _required: boolean | undefined;

  public invalid = false;

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
        this.ngControl.control?.patchValue(value);
      });
    } else {
      this._inputValue.value = value as string;
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

  /**
   * Create instance
   */
  constructor(
    @Optional() @Self() public readonly ngControl: NgControl,
    public readonly elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    private readonly destroy: PrizmDestroyService,
    private readonly cdr: ChangeDetectorRef
  ) {
    super();
    this.nativeElementType = elementRef.nativeElement.type;
  }

  public ngOnInit(): void {
    if (this.ngControl) this.initControlListener();
    this.prizmHint_.ngOnInit();
    this.inputHint?.updateHint();
  }

  public ngDoCheck(): void {
    this.updateEmptyState();
    this.updateErrorState();
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this.prizmHint_.ngOnDestroy();
  }

  @HostListener('input', ['$event'])
  private onInput(): void {
    this.updateEmptyState();
    this.stateChanges.next();
    this.updateValue(this.value);
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
      ?.pipe(
        tap(result => {
          this.updateEmptyState();
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
          this.updateEmptyState();
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
    this.empty = !(
      (this.elementRef.nativeElement.value && this.elementRef.nativeElement.value.length) ||
      (this.ngControl && this.ngControl.value) ||
      (this.ngControl instanceof NgModel && this.ngControl.model)
    );
  }

  private updateErrorState(): void {
    this.invalid = Boolean(this.ngControl && this.ngControl.invalid);
  }

  private updateValue(value: VALUE): void {
    if (value !== this.ngControl?.value) this.ngControl?.control?.setValue(value);
    if (value !== this.value) this._inputValue.value = value as string;
    this.inputHint?.updateHint();
  }

  public clear(event: MouseEvent): void {
    if (this.disabled) return;

    this.updateValue(null as VALUE);

    this.ngControl?.control?.markAsDirty();

    this.updateEmptyState();
    this.updateErrorState();

    this.focus();

    this.stateChanges.next();
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

    if (touched) {
      this._touched = true;
      this.ngControl?.control?.markAsTouched();
    }

    if (dirty) {
      this.ngControl?.control?.markAsDirty();
    }

    this.stateChanges.next();
  }

  public markAsTouched(): void {
    if (this.ngControl?.control instanceof UntypedFormControl) this.ngControl.control.markAsTouched();
    else this._touched = true;
  }
}
