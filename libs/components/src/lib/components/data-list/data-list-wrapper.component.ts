import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PrizmDataListComponent } from './data-list.component';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmScrollbarVisibility } from '../scrollbar';
import { PRIZM_DATALIST_OPTIONS, PrizmDataListOptions } from './data-list-options';

@Component({
  selector: 'prizm-data-list-wrapper',
  templateUrl: './data-list-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
  standalone: true,
  imports: [PrizmDataListComponent],
})
export class PrizmDataListWrapperComponent extends PrizmAbstractTestId {
  public readonly options = inject(PRIZM_DATALIST_OPTIONS) as PrizmDataListOptions;

  override testId_ = 'ui_data_list_wrapper';

  @Input() defaultStyle = true;

  @Input()
  @prizmDefaultProp()
  iconOff = this.options.empty;

  @Input()
  minHeight?: number;

  @Input()
  maxHeight?: number;

  @Input()
  scroll: PrizmScrollbarVisibility | 'none' = 'auto';

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public readonly viewContainerRef?: ViewContainerRef;
}
