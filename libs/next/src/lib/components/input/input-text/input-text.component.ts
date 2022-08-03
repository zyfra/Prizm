import {
  Attribute,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { ZuiInputControl } from '../common/base/input-control.class';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input[zuiInput], textarea[zuiInput], input[zuiInputNumber], input[zuiInputPassword]',
  template: '',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.ng-filled]': '!empty',
    '[disabled]': 'disabled',
  },
  styleUrls: ['input-text.component.less'],
  providers: [{ provide: ZuiInputControl, useExisting: ZuiInputTextComponent }, ZuiDestroyService],
})
export class ZuiInputTextComponent extends ZuiInputControl<string> implements DoCheck, OnInit, OnDestroy {
  /**
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
    this.stateChanges.next();
  }

  private _disabled = false;

  /**
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

  /**
   * Input value input
   */
  get value(): string {
    return this.ngControl?.value || this._inputValue.value;
  }

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
  }
  private _inputValue: { value: unknown };

  @Output() enter = new EventEmitter<any>();
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
  public touched: boolean;

  hasClearButton = true;
  /**
   * Create instance
   */
  constructor(
    @Optional() @Self() public readonly ngControl: NgControl,
    private readonly elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    private readonly zuiDestroyService: ZuiDestroyService,
    private readonly cdr: ChangeDetectorRef,
    @Optional() @Attribute('mask') private maskAttr: string
  ) {
    super();
    this._inputValue = elementRef.nativeElement;
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

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('input', ['$event'])
  public onInput(): void {
    this.updateEmptyState();
    this.stateChanges.next();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('focus', ['$event'])
  public onFocus(): void {
    this.focused = true;
    this.stateChanges.next();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('blur', ['$event'])
  public onBlur(): void {
    this.focused = false;
    this.touched = true;
    this.stateChanges.next();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @HostListener('keydown.enter', ['$event'])
  onEnter(): void {
    this.enter.next(this.value);
  }

  private initControlListener(): void {
    this.ngControl.statusChanges
      .pipe(
        tap(() => {
          this.updateEmptyState();
          this.updateErrorState();
          this.cdr.markForCheck();
        }),
        takeUntil(this.zuiDestroyService)
      )
      .subscribe();

    this.ngControl.valueChanges
      .pipe(
        tap(() => {
          this.updateEmptyState();
          this.updateErrorState();
          this.stateChanges.next();
        }),
        takeUntil(this.zuiDestroyService)
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

    this.ngControl?.reset();
    this.touched = true;

    this._inputValue.value = '';

    this.updateEmptyState();
    this.updateErrorState();

    this.focus();

    // Нужно для input-mask
    if (this.maskAttr) {
      this.elementRef.nativeElement.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'Backspace',
          code: 'Backspace',
        })
      );
    }

    this.stateChanges.next();
  }

  public focus(): void {
    this.elementRef.nativeElement.focus();
  }

  public markControl(options: { touched?: boolean; dirty?: boolean }): void {
    const { touched, dirty } = options;

    if (touched) {
      this.touched = true;
      this.ngControl?.control.markAsTouched();
    }

    if (dirty) {
      this.ngControl?.control.markAsDirty();
    }

    this.stateChanges.next();
  }
}

