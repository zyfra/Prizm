import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Injector,
  Input,
  OnChanges,
  Self,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PrizmSwitcherSize } from './switcher.interface';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SWITCHER_CONTAINER, SWITCHER_VIEW_CONTAINER } from './swithcer.const';
import {
  filterNotNullish,
  PRIZM_ALL_INDEXES_READY,
  PRIZM_INDEX_SELECT_FN,
  PrizmDestroyService,
  PrizmDisabledDirective,
  PrizmSelectedIndexDirective,
  prizmSetDefaultSize,
  PrizmSizeDirective,
  PrizmStoreByIndexDirective,
  PrizmSyncParentDirective,
} from '@prizm-ui/helpers';
import { PrizmSwitcherItemsDirective } from './directives/items';
import { PrizmSwitcherTypeDirective } from './directives/switcher-type.directive';
import { PrizmSwitcherFullWidthDirective } from './directives/switcher-full-width.directive';
import { PrizmSwitcherControlDirective } from './directives/switcher-control.directive';
import { PrizmSwitcherItemComponent } from './components/switcher-item/switcher-item.component';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'prizm-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmDisabledDirective],
  providers: [
    prizmSetDefaultSize('l'),
    PrizmDestroyService,
    PrizmStoreByIndexDirective,
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
    {
      provide: PRIZM_ALL_INDEXES_READY,
      useFactory(switcher: BehaviorSubject<null | HTMLElement>) {
        return switcher.pipe(
          filterNotNullish(),
          // start time for load all nested items
          debounceTime(100)
        );
      },
      deps: [[SWITCHER_CONTAINER]],
    },
    {
      provide: PRIZM_INDEX_SELECT_FN,
      useFactory(store: PrizmStoreByIndexDirective<PrizmSwitcherItemComponent>, injector: Injector) {
        return (idx: number) => {
          const selected = store.get(idx)?.select();
          if (selected) return true;

          const items = [...store.entries()];
          const defaultValue = items.find(([, i]) => !i.isDisabled);

          if (defaultValue) {
            console.warn(`Can not select by idx ${idx}, selected default ${defaultValue[0]}`);
            return defaultValue[1].select();
          }

          console.error(`Can not select by idx ${idx} and can not get default value`, {
            items,
            defaultValue,
          });
          injector.get(PrizmSelectedIndexDirective)?.setIndex(-1);
          return false;
        };
      },
      deps: [
        [new Self(), PrizmStoreByIndexDirective<PrizmSwitcherItemComponent>],
        [new Self(), Injector],
      ],
    },
  ],
  hostDirectives: [
    // for sync state with all children
    PrizmSyncParentDirective,
    // for work with form controls
    PrizmSwitcherControlDirective,
    {
      directive: PrizmSizeDirective,
      inputs: ['size'],
    },
    {
      directive: PrizmSwitcherTypeDirective,
      inputs: ['type'],
    },
    // for easy add from switchers array to control
    {
      directive: PrizmSwitcherItemsDirective,
      inputs: ['switchers'],
    },
    {
      directive: PrizmSwitcherFullWidthDirective,
      inputs: ['fullWidth'],
    },
    // for control index from children and parent
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
export class PrizmSwitcherComponent extends PrizmAbstractTestId implements AfterViewInit, OnChanges {
  @ViewChild('container', { read: ElementRef }) container?: ElementRef<HTMLDivElement>;
  @ViewChild('viewRef', { read: ViewContainerRef }) viewRef?: ViewContainerRef;

  // for set type PrizmSwitcherSize for directive PrizmSizeDirective
  @Input()
  public size: PrizmSwitcherSize = 'l';
  private readonly allIndexesReady$ = inject(PRIZM_ALL_INDEXES_READY, { self: true });
  // view container for dynamic add for items
  private readonly switcherViewContainer = inject(SWITCHER_VIEW_CONTAINER);
  private readonly selectFn = inject(PRIZM_INDEX_SELECT_FN);
  // container html for count children length
  private readonly switcherContainer = inject(SWITCHER_CONTAINER);

  override readonly testId_ = 'ui_switcher';
  private readonly syncParentDirective = inject(PrizmSyncParentDirective);

  public ngAfterViewInit(): void {
    this.switcherViewContainer.next(this.viewRef!);
    this.switcherContainer.next(this.container!);
  }

  /**
   * @public
   * safe select switcher by index
   */
  public selectSwitcher(idx: number): boolean {
    return this.selectFn(idx);
  }

  ngOnChanges(): void {
    this.syncParentDirective.sync();
  }
}
