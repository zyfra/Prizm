import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';

@Component({
  selector: `prizm-time-picker`,
  templateUrl: `./time-picker.component.html`,
  styleUrls: [`./time-picker.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class PrizmTimePickerComponent extends PrizmAbstractTestId {
  override readonly testId_ = 'ui_time_picker';
}
