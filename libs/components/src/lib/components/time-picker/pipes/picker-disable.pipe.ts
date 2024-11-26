import { Pipe, PipeTransform } from '@angular/core';
import { PrizmTimePickerInternalTime } from '../types/types';
import { Compare } from '@prizm-ui/helpers';

@Pipe({
  name: `prizmPickerDisable`,
  standalone: true,
})
export class PrizmPickerDisablePipe implements PipeTransform {
  public transform(time: PrizmTimePickerInternalTime): boolean {
    return !(
      Compare.isNotNullish(time.hours) ||
      Compare.isNotNullish(time.minutes) ||
      Compare.isNotNullish(time.seconds)
    );
  }
}
