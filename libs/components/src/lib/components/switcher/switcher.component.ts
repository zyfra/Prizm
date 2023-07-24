import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Injector,
  Input,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from './switcher.interface';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'prizm-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class PrizmSwitcherComponent extends PrizmAbstractTestId implements ControlValueAccessor {
  onChange: (v: number) => void = noop;
  onTouched: () => void = noop;
  private selectedSwitcherIdx_ = 0;

  @Input()
  @prizmDefaultProp()
  public size: PrizmSwitcherSize = 'l';

  @Input()
  @prizmDefaultProp()
  public type: PrizmSwitcherType = 'inner';

  @Input()
  @prizmDefaultProp()
  public switchers: PrizmSwitcherItem[] = [];

  @Input()
  @prizmDefaultProp()
  public set selectedSwitcherIdx(idx: number) {
    const item = this.switchers[idx];
    if (item) this.selectSwitcher(item, idx);
  }
  get selectedSwitcherIdx() {
    return this.selectedSwitcherIdx_;
  }

  @Input()
  @HostBinding('class.full-width')
  @prizmDefaultProp()
  public fullWidth = false;

  @Output() public selectedSwitcherIdxChange: EventEmitter<number> = new EventEmitter();

  override readonly testId_ = 'ui_switcher';

  constructor(
    public readonly cdRef: ChangeDetectorRef,
    @Optional() @Self() public readonly ngControl: NgControl
  ) {
    super();
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }
  public selectSwitcher(item: PrizmSwitcherItem, idx: number): void {
    if (this.ngControl?.disabled) return;
    if (item.disabled) return;
    if (this.selectedSwitcherIdx === idx) return;
    this.selectedSwitcherIdxChange.emit((this.selectedSwitcherIdx_ = idx));
    this.onChange(this.selectedSwitcherIdx);
  }

  public writeValue(idx: string): void {
    this.selectedSwitcherIdx = parseInt(idx);
  }
  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.cdRef.markForCheck();
  }
}
