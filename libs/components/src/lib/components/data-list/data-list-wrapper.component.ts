import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PrizmDataListComponent } from './data-list.component';

@Component({
  selector: 'prizm-data-list-wrapper',
  templateUrl: './data-list-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
  standalone: true,
  imports: [PrizmDataListComponent],
})
export class PrizmDataListWrapperComponent extends PrizmAbstractTestId {
  override testId_ = 'ui_data_list_wrapper';
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  public readonly viewContainerRef?: ViewContainerRef;
}
