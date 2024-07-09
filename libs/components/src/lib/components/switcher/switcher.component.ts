import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from './switcher.interface';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BehaviorSubject, combineLatestWith, noop, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PrizmSwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { PrizmSwitcherHintDirective } from './directives/switcher-hint.directive';
import { INITIAL_SWITHCER_INDEX } from './swithcer.const';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmSwitcherHintDirective, PrizmSwitcherItemComponent],
  providers: [PrizmDestroyService],
})
export class PrizmSwitcherComponent extends PrizmAbstractTestId implements ControlValueAccessor, OnInit {
  @Input()
  @prizmDefaultProp()
  public size: PrizmSwitcherSize = 'l';

  @Input()
  @prizmDefaultProp()
  public type: PrizmSwitcherType = 'inner';

  private swithcers$: BehaviorSubject<PrizmSwitcherItem[]> = new BehaviorSubject<PrizmSwitcherItem[]>([]);

  @Input()
  @prizmDefaultProp()
  public set switchers(value: PrizmSwitcherItem[]) {
    if (value) this.swithcers$.next(value);
  }
  get switchers(): PrizmSwitcherItem[] {
    return this.swithcers$.value;
  }

  private selectedSwitcherIdx$: BehaviorSubject<number> = new BehaviorSubject(INITIAL_SWITHCER_INDEX);
  public selectedSwitcherIdx_ = INITIAL_SWITHCER_INDEX;

  @Input()
  @prizmDefaultProp()
  public set selectedSwitcherIdx(value: number) {
    this.selectedSwitcherIdx$.next(value);
  }
  get selectedSwitcherIdx(): number {
    return this.selectedSwitcherIdx_;
  }

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
    @Optional() @Self() public readonly ngControl: NgControl,
    private readonly destroy$: PrizmDestroyService
  ) {
    super();
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.handleSwitchersUpdate();
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

  private handleSwitchersUpdate() {
    this.swithcers$
      .pipe(
        tap(switchers => {
          if (!this.isIndexValid(this.selectedSwitcherIdx_, switchers)) {
            this.selectedSwitcherIdx_ = INITIAL_SWITHCER_INDEX;
          }
        }),
        combineLatestWith(this.selectedSwitcherIdx$),
        tap(([switchers, selectedSwitcherIdx]) => {
          if (!switchers.length) return;

          if (!this.isIndexValid(selectedSwitcherIdx, switchers)) {
            console.warn('selectedSwitcherIdx out of bound');
            return;
          }

          this.selectedSwitcherIdx_ = selectedSwitcherIdx;

          this.selectSwitcher(switchers[selectedSwitcherIdx], selectedSwitcherIdx);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private isIndexValid(idx: number, switchers: PrizmSwitcherItem[]): boolean {
    return !!switchers[idx];
  }
}
