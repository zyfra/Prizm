import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  inject,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from './switcher.interface';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BehaviorSubject, combineLatestWith, filter, noop, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PrizmSwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { PrizmSwitcherHintDirective } from './directives/switcher-hint.directive';
import { INITIAL_SWITHCER_INDEX, SWITCHER_VIEW_CONTAINER } from './swithcer.const';
import {
  PrizmDestroyService,
  PrizmDisabledDirective,
  prizmSetDefaultSize,
  PrizmSizeDirective,
} from '@prizm-ui/helpers';
import { PrizmSwitcherItemsDirective } from './directives/items';

@Component({
  selector: 'prizm-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmSwitcherHintDirective, PrizmDisabledDirective, PrizmSwitcherItemComponent],
  providers: [
    prizmSetDefaultSize('l'),
    PrizmDestroyService,
    {
      provide: SWITCHER_VIEW_CONTAINER,
      useFactory() {
        return new BehaviorSubject(null);
      },
    },
  ],
  hostDirectives: [
    {
      directive: PrizmSizeDirective,
      inputs: ['size'],
    },
    {
      directive: PrizmSwitcherItemsDirective,
      inputs: ['switchers'],
    },
    {
      directive: PrizmDisabledDirective,
    },
  ],
})
export class PrizmSwitcherComponent
  extends PrizmAbstractTestId
  implements ControlValueAccessor, OnInit, AfterViewInit
{
  @ViewChild('viewRef', { read: ViewContainerRef }) viewRef?: ViewContainerRef;

  @Input()
  public size: PrizmSwitcherSize = 'l';

  @Input()
  @prizmDefaultProp()
  public type: PrizmSwitcherType = 'inner';

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
  private disabledDirective = inject(PrizmDisabledDirective);
  private switchersDirective = inject(PrizmSwitcherItemsDirective);
  private switcherViewContainer = inject(SWITCHER_VIEW_CONTAINER);

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

  ngAfterViewInit(): void {
    this.switcherViewContainer.next(this.viewRef!);
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
    const selectedSwitcherIdx = parseInt(idx);
    if (!this.isIndexValid(selectedSwitcherIdx, this.switchersDirective.switchers)) {
      this.logIndexValidationError("value is out of bound and can't be set");
      return;
    }

    this.selectedSwitcherIdx_ = selectedSwitcherIdx;
    this.cdRef.markForCheck();
  }
  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabledDirective.disabled = isDisabled;
    this.cdRef.markForCheck();
  }

  private handleSwitchersUpdate() {
    this.switchersDirective.switchers$$
      .pipe(
        filter((switchers: PrizmSwitcherItem[]) => !!switchers.length),
        tap(switchers => {
          if (!this.isIndexValid(this.selectedSwitcherIdx_, switchers)) {
            this.selectSwitcher(switchers[INITIAL_SWITHCER_INDEX], INITIAL_SWITHCER_INDEX);
            this.logIndexValidationError(
              `selectedSwitcherIdx out of bound. Index has been reset to ${INITIAL_SWITHCER_INDEX}`
            );
          }
        }),
        combineLatestWith(this.selectedSwitcherIdx$),
        tap(([switchers, selectedSwitcherIdx]) => {
          if (!this.isIndexValid(selectedSwitcherIdx, switchers)) {
            this.logIndexValidationError('selectedSwitcherIdx out of bound');
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

  private logIndexValidationError(errorMsg: string) {
    console.warn(errorMsg);
  }
}
