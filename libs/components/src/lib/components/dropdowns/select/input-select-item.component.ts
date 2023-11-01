import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  inject,
  Inject,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Compare,
  PrizmCallFuncModule,
  PrizmCallFuncPipe,
  PrizmDestroyService,
  PrizmLetDirective,
  PrizmLetModule,
  PrizmToObservableModule,
  PrizmToObservablePipe,
} from '@prizm-ui/helpers';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {
  isPolymorphPrimitive,
  PolymorphContent,
  PolymorphModule,
  PolymorphOutletDirective,
} from '../../../directives/polymorph';
import {
  PRIZM_SELECT_OPTIONS,
  PrizmSelectOptions,
  PrizmSelectStringify,
  PrizmSelectValueContext,
} from './select.options';
import { PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputControl, PrizmInputTextModule } from '../../input';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { BehaviorSubject, concat, fromEvent, Observable, Subject, timer } from 'rxjs';
import {
  PrizmSelectIdentityMatcher,
  PrizmSelectSearchMatcher,
  PrizmSelectValueTransformver,
} from './select.model';
import { prizmDefaultProp } from '@prizm-ui/core';
import {
  PrizmDropdownHostClasses,
  PrizmDropdownHostComponent,
  PrizmDropdownHostModule,
  PrizmDropdownHostStyles,
} from '../dropdown-host';
import { PrizmOverlayModule, PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmInputNgControl } from '../../input/common/base/input-ng-control.class';
import { PrizmScrollbarModule, PrizmScrollbarVisibility } from '../../scrollbar';
import { PrizmInputSelectOptionDirective } from './input-select-option.directive';
import { PrizmInputSelectOptionService } from './input-select-option.service';
import { PrizmChipsModule } from '../../chips';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import {
  PrizmAutoFocusModule,
  PrizmDropdownControllerModule,
  PrizmHintDirective,
  PrizmHintModule,
  PrizmLifecycleModule,
} from '../../../directives';
import { PrizmIconModule } from '../../icon';
import { PrizmDataListModule } from '../../data-list';
import { prizmWatch } from '../../../observables';
import { PrizmSelectInputComponent } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-select-item',
  templateUrl: './input-select-item.component.html',
  styleUrls: ['./input-select-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    PrizmInputSelectOptionDirective,
    PrizmCallFuncPipe,
    PrizmLetDirective,
    PrizmHintDirective,
    PolymorphOutletDirective,
    PrizmToObservablePipe,
    AsyncPipe,
  ],
  providers: [PrizmDestroyService],
  exportAs: 'prizmSelectInputItem',
})
export class PrizmSelectInputItemComponent<T> {
  @Input() item!: T;
  readonly parent = inject(PrizmSelectInputComponent);

  constructor() {}

  public isMostRelevant(items: T[]): boolean {
    const idx = this.parent.items.findIndex(i => this.item === i);
    const wroteInputValue = this.parent.printing$.value;
    const valueFromItems = this.parent.value && this.parent.getValueFromItems(this.parent.value, items);
    const itIsNotCurrentValue =
      valueFromItems && wroteInputValue && !this.parent.searchMatcher(wroteInputValue, valueFromItems);
    const isCanSearch = this.parent.searchable;
    const hasNullValue = items[0] === null;
    const result =
      isCanSearch && itIsNotCurrentValue && ((hasNullValue && idx === 1) || (!hasNullValue && idx === 0));

    return !!result;
  }
}
