import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { PrizmCallFuncPipe, PrizmDestroyService, PrizmToObservablePipe } from '@prizm-ui/helpers';
import { PolymorphOutletDirective } from '../../../directives/polymorph';
import { PrizmComboboxOptionDirective } from './combobox-option.directive';
import { AsyncPipe, NgIf } from '@angular/common';
import { PrizmHintDirective } from '../../../directives';
import { PrizmComboboxComponent } from './combobox.component';

@Component({
  selector: 'prizm-combobox-item',
  templateUrl: './combobox-item.component.html',
  styleUrls: ['./combobox-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    PrizmComboboxOptionDirective,
    PrizmCallFuncPipe,
    PrizmHintDirective,
    PolymorphOutletDirective,
    PrizmToObservablePipe,
    AsyncPipe,
  ],
  providers: [PrizmDestroyService],
  exportAs: 'prizmComboboxItem',
})
export class PrizmComboboxItemComponent<T> {
  @Input() item!: T;
  readonly parent = inject(PrizmComboboxComponent);
}
