import {
  Directive,
  DoCheck,
  ElementRef,
  HostListener,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { ZyfraInputGroupControl } from '../input-group/zyfra-input-group-control.class';

@Directive({
  selector: 'input[zyfraInput],textarea[zyfraInput]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'p-inputtext p-component p-element',
    '[class.ng-invalid]': 'ngControl?.invalid',
    '[class.ng-valid]': 'ngControl?.valid',
    '[class.ng-dirty]': 'ngControl?.dirty',
    '[class.ng-touched]': 'ngControl?.touched',
    '[class.p-filled]': 'empty',
    '[disabled]': 'disabled',
    '[required]': 'required',
  },
  providers: [{ provide: ZyfraInputGroupControl, useExisting: ZyfraInputDirective }],
})
export class ZyfraInputDirective implements ZyfraInputGroupControl<string>, DoCheck {
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
  }

  protected _disabled = false;

  /**
   * Required input
   */
  @Input()
  get required(): boolean {
    return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
  }

  set required(value: boolean) {
    this._required = value;
  }

  protected _required: boolean | undefined;

  /**
   * Inputvalue input
   */
  @Input()
  get value(): string {
    return this._inputValue.value;
  }

  set value(value: any) {
    if (value !== this.value) {
      this._inputValue.value = value;
    }
  }
  private _inputValue: { value: any };

  /**
   * Empty state
   */
  public empty: boolean;

  /**
   * Create instance
   */
  constructor(
    @Optional() @Self() public readonly ngControl: NgControl,
    private readonly elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  ) {
    this._inputValue = elementRef.nativeElement;
  }

  ngDoCheck() {
    this.updateEmptyState();
  }

  @HostListener('input', ['$event'])
  onInput(e) {
    this.updateEmptyState();
  }

  updateEmptyState() {
    this.empty =
      (this.elementRef.nativeElement.value && this.elementRef.nativeElement.value.length) ||
      (this.ngControl && this.ngControl.value);
  }
}
