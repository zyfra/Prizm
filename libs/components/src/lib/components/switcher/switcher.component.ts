import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from './switcher.interface';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { noop } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PrizmSwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { PrizmSwitcherHintDirective } from './directives/switcher-hint.directive';
import { prizmHasChanges } from '@prizm-ui/helpers';
import { INITIAL_SWITHCER_INDEX } from './swithcer.const';

@Component({
  selector: 'prizm-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmSwitcherHintDirective, PrizmSwitcherItemComponent],
})
export class PrizmSwitcherComponent extends PrizmAbstractTestId implements ControlValueAccessor, OnChanges {
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
  public selectedSwitcherIdx: number = INITIAL_SWITHCER_INDEX;

  @Input()
  @HostBinding('class.full-width')
  @prizmDefaultProp()
  public fullWidth = false;

  @Output() public selectedSwitcherIdxChange: EventEmitter<number> = new EventEmitter();

  override readonly testId_ = 'ui_switcher';

  onChange: (v: number) => void = noop;
  onTouched: () => void = noop;

  constructor(
    public readonly cdRef: ChangeDetectorRef,
    @Optional() @Self() public readonly ngControl: NgControl
  ) {
    super();
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (prizmHasChanges(changes, 'selectedSwitcherIdx') && prizmHasChanges(changes, 'switchers')) {
      this.setActiveSwitcherOnChange();
    }
  }
  public selectSwitcher(item: PrizmSwitcherItem, idx: number): void {
    if (this.ngControl?.disabled) return;
    if (item.disabled) return;
    if (this.selectedSwitcherIdx === idx) return;
    this.selectedSwitcherIdxChange.emit((this.selectedSwitcherIdx = idx));
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

  private setActiveSwitcherOnChange(): void {
    const idx =
      this.selectedSwitcherIdx <= this.switchers.length ? this.selectedSwitcherIdx : INITIAL_SWITHCER_INDEX;
    const item = this.switchers[idx];
    if (item) this.selectSwitcher(item, idx);
  }
}
