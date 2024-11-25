import { Pipe, PipeTransform } from '@angular/core';
import { PrizmTimePickerInternalTime } from '../types/types';

@Pipe({
  name: `prizmPickerDisable`,
  standalone: true,
})
export class PrizmPickerDisablePipe implements PipeTransform {
  public transform(time: PrizmTimePickerInternalTime): boolean {
    // TODO: add check for min max validity if partially set
    return !(
      time.hours ||
      time.hours === 0 ||
      time.minutes ||
      time.minutes === 0 ||
      time.seconds ||
      time.seconds === 0
    );
  }
}
