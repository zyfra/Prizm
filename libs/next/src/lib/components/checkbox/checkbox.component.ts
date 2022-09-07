import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'zui-checkbox',
  templateUrl: 'checkbox.component.html',
  styleUrls: ['checkbox.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'zui-checkbox',
    '[attr.tabindex]': "disabled ? null : '0'",
  },
})
export class ZuiCheckboxComponent implements ControlValueAccessor {
  @Input() @HostBinding('attr.data-size') public size: 's' | 'l' = 's';

  @Input() indeterminate = false;
  @Input() @HostBinding('class.zui-checkbox--disabled') disabled = false;
  @Input() @HostBinding('class.zui-checkbox--required') required = false;

  private _checked = false;
  get checked(): boolean {
    return this._checked;
  }
  @Input() set checked(val: boolean) {
    if (this.ngControl) return;
    this.setValue(val);
  }

  @Output() changed = new EventEmitter<boolean>();

  changeFn: (value: boolean) => void;
  touchedFn: () => void;

  public writeValue(value: boolean): void {
    this.setValue(value);
  }

  public registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touchedFn = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @HostListener('click', ['$event'])
  @HostListener('keydown.space', ['$event'])
  public onClick(event: Event): void {
    event.preventDefault();

    if (this.disabled) {
      return;
    }

    this._checked = !this._checked;
    this.indeterminate = false;

    if (this.ngControl) {
      this.touchedFn();
      this.changeFn(this._checked);
    }

    this.changed.next(this._checked);
  }

  private setValue(value: boolean): void {
    this.indeterminate = false;
    this._checked = value;
    this.cdr.markForCheck();
  }

  constructor(@Optional() @Self() private ngControl: NgControl, private cdr: ChangeDetectorRef) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
}

