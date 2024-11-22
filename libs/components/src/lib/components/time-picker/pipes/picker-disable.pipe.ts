import { Pipe, PipeTransform } from '@angular/core';
import { PrizmTimePickerTime } from '../types/types';

@Pipe({
  name: `prizmPikcerDisable`,
  standalone: true,
})
export class PrizmPikcerDisablePipe implements PipeTransform {
  public transform(time: PrizmTimePickerTime): boolean {
    return !(
      time.hour ||
      time.hour === 0 ||
      time.minute ||
      time.minute === 0 ||
      time.second ||
      time.second === 0
    );
  }
}
