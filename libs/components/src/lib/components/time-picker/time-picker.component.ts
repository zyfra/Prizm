import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmPrimitiveTimePickerComponent } from '../internal/primitive-time-picker';
import { PrizmPrimitiveTimePaginationComponent } from '../internal/primitive-time-pagination';

@Component({
  selector: `prizm-time-picker`,
  templateUrl: `./time-picker.component.html`,
  styleUrls: [`./time-picker.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PrizmPrimitiveTimePaginationComponent, PrizmPrimitiveTimePickerComponent],
})
export class PrizmTimePickerComponent extends PrizmAbstractTestId {
  override readonly testId_ = 'ui_time_picker';
}
