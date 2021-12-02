import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, OnDestroy, Injector } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'zyfra-relative-datepicker',
  templateUrl: './zyfra-relative-datepicker.component.html',
  styleUrls: ['./zyfra-relative-datepicker.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraRelativeDatepickerComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public disabled: boolean;
  @Input() public showClear: boolean;
  @Input() public showChangeMode: boolean;

  public value = new FormControl();

  private readonly subscriptions = new Subscription();

  constructor(public readonly injector: Injector) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.subscriptions.add(
      this.value.valueChanges.subscribe((x) => {
        this.onChangeFn(x);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  writeValue(value: number): void {
    this.value.setValue(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    // do
  }

  onChangeFn = (_: any) => {
    // do
  };

  public clearValue(): void {
    // TODO
  }
}
