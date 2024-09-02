import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PrizmSwitcherSize } from './switcher.interface';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { ControlValueAccessor } from '@angular/forms';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PrizmSwitcherHintDirective } from './directives/switcher-hint.directive';
import { SWITCHER_CONTAINER, SWITCHER_VIEW_CONTAINER } from './swithcer.const';
import {
  PrizmDestroyService,
  PrizmDisabledDirective,
  PrizmSelectedIndexDirective,
  prizmSetDefaultSize,
  PrizmSizeDirective,
  PrizmSyncParentDirective,
} from '@prizm-ui/helpers';
import { PrizmSwitcherItemsDirective } from './directives/items';
import { PrizmSwitcherTypeDirective } from './directives/switcher-type.directive';
import { PrizmSwitcherFullWidthDirective } from './directives/switcher-full-width.directive';
import { PrizmSwitcherControlDirective } from './directives/switcher-control.directive';

@Component({
  selector: 'prizm-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmSwitcherHintDirective, PrizmDisabledDirective],
  providers: [
    prizmSetDefaultSize('l'),
    PrizmDestroyService,
    {
      provide: SWITCHER_VIEW_CONTAINER,
      useFactory() {
        return new BehaviorSubject(null);
      },
    },
    {
      provide: SWITCHER_CONTAINER,
      useFactory() {
        return new BehaviorSubject(null);
      },
    },
  ],
  hostDirectives: [
    PrizmSyncParentDirective,
    PrizmSwitcherControlDirective,
    {
      directive: PrizmSizeDirective,
      inputs: ['size'],
    },
    {
      directive: PrizmSwitcherTypeDirective,
      inputs: ['type'],
    },
    {
      directive: PrizmSwitcherItemsDirective,
      inputs: ['switchers'],
    },
    {
      directive: PrizmSwitcherFullWidthDirective,
      inputs: ['fullWidth'],
    },
    {
      directive: PrizmSelectedIndexDirective,
      inputs: ['selectedIndex: selectedSwitcherIdx'],
      outputs: ['selectedIndexChange: selectedSwitcherIdxChange'],
    },
    {
      directive: PrizmDisabledDirective,
    },
  ],
})
export class PrizmSwitcherComponent extends PrizmAbstractTestId {
  @ViewChild('container', { read: ElementRef }) container?: ElementRef<HTMLDivElement>;
  @ViewChild('viewRef', { read: ViewContainerRef }) viewRef?: ViewContainerRef;

  @Input()
  public size: PrizmSwitcherSize = 'l';

  // protected writeValue$ = new ReplaySubject<number>(1);
  // private disabledDirective = inject(PrizmDisabledDirective);
  // private switchersDirective = inject(PrizmSwitcherItemsDirective);
  private switcherViewContainer = inject(SWITCHER_VIEW_CONTAINER);
  private switcherContainer = inject(SWITCHER_CONTAINER);
  protected selectedIndexDirective = inject(PrizmSelectedIndexDirective);
  // private destroy$ = inject(PrizmDestroyService, {
  //   self: true
  // });

  override readonly testId_ = 'ui_switcher';

  constructor(
    public readonly cdRef: ChangeDetectorRef // @Optional() @Self() public readonly ngControl: NgControl,
  ) {
    super();
    // if (this.ngControl != null) {
    //   this.ngControl.valueAccessor = this;
    // }
  }

  // ngOnInit() {
  //   this.selectedIndexDirective.selectedIndexChange.pipe(
  //     tap(
  //       (idx) => {
  //         this.onChange(idx);
  //       }
  //     ),
  //     takeUntil(this.destroy$)
  //   ).subscribe()
  // }

  ngAfterViewInit(): void {
    this.switcherViewContainer.next(this.viewRef!);
    this.switcherContainer.next(this.container!);
    // this.writeValue$.pipe(
    //   tap(
    //     (idx) => this.writeValue_(idx)
    //   ),
    //   takeUntil(this.destroy$)
    // ).subscribe()
  }

  // public selectSwitcher(item: PrizmSwitcherItem, idx: number): void {
  //   if (this.ngControl?.disabled) return;
  //   if (item.disabled) return;
  //   if (this.selectedIndexDirective.selectedIndex === idx) return;
  //   this.selectedIndexDirective.selectedIndexChange.emit((this.selectedIndexDirective.selectedIndex = idx));
  //   this.onChange(this.selectedIndexDirective.selectedIndex);
  // }

  // public writeValue(idx: string): void {
  //   const selectedSwitcherIdx = parseInt(idx);
  //   this.writeValue$.next(selectedSwitcherIdx);
  // }

  // private writeValue_(selectedSwitcherIdx: number): void {
  //   if (!this.isIndexValid(selectedSwitcherIdx, Array.from(this.container?.nativeElement?.childNodes ?? []))) {
  //     this.logIndexValidationError("value is out of bound and can't be set");
  //     return;
  //   }
  //
  //   this.selectedIndexDirective.selectedIndex = selectedSwitcherIdx;
  //
  //   this.cdRef.markForCheck();
  // }
  // public registerOnChange(fn: (value: number) => void): void {
  //   this.onChange = fn;
  // }
  // public registerOnTouched(fn: () => void): void {
  //   this.onTouched = fn;
  // }

  // public setDisabledState(isDisabled: boolean): void {
  //   this.disabledDirective.disabled = isDisabled;
  //   this.cdRef.markForCheck();
  // }

  // private isIndexValid(idx: number, switchers: any[]): boolean {
  //   return !!switchers[idx];
  // }
  //
  // private logIndexValidationError(errorMsg: string) {
  //   console.warn(errorMsg);
  // }
}
