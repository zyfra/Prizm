import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'zyfra-input',
  templateUrl: './zyfra-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ZyfraInputComponent
  implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
  @Input() model: string;
  @Input() type: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() iClass: string;
  @Input() spanClass: string;
  @Input() inputClass:  string | string[] | Set<string> | {
    [klass: string]: any;
  };
  @Input() disabled: boolean;
  @Input() required: boolean;
  @Input() tooltip: string;
  @Input() tooltipPosition = 'right';

  @Output() onBlur = new EventEmitter<unknown>();

  public controlRequired: boolean;

  private destroyed$: Subject<void> = new Subject<void>();

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    private cdr: ChangeDetectorRef
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  onChange = (value: string) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: string): void {
    this.model = outsideValue;
    if (!this.model) {
      this.cdr.detectChanges();
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  ngOnInit(): void {
    if (this.ngControl) {
      this.getValidatorRequiredControl(this.ngControl);
    }
  }

  ngAfterViewInit(): void {
    if (this.ngControl) {
      this.ngControl.statusChanges
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => this.getValidatorRequiredControl(this.ngControl));
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  changeModel(value: string): void {
    this.onChange(value);
  }

  private getValidatorRequiredControl(ngControl: NgControl): void {
    if (ngControl.control && ngControl.control.validator && this.label) {
      const validators = ngControl.control.validator({} as AbstractControl);
      this.controlRequired = validators && validators.required;
    } else {
      this.controlRequired = false;
    }

    this.cdr.markForCheck();
  }
}
