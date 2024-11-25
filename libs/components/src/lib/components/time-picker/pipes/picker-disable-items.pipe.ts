import { Pipe, PipeTransform } from '@angular/core';
import { PrizmPrimitiveTimePickerItem } from '../../internal/primitive-time-picker/types/types';
import { PrizmTime } from '../../../@core';
import { PrizmTimePaginationState } from '../../internal/primitive-time-pagination/types/types';
import { PrizmTimePickerInternalTime } from '../types/types';

@Pipe({
  name: `prizmTimeDisabledItems`,
  standalone: true,
})
export class PrizmTimePickerDisabledItemsPipe implements PipeTransform {
  public transform(
    timeSheet: PrizmPrimitiveTimePickerItem[],
    sheetState: PrizmTimePaginationState,
    currentTime: PrizmTimePickerInternalTime,
    minTime?: PrizmTime,
    maxTime?: PrizmTime
  ): PrizmPrimitiveTimePickerItem[] {
    if (!minTime && !maxTime) return [];
    if (sheetState === 'minutes' && !currentTime.hours) return [];
    if (sheetState === 'seconds' && !currentTime.minutes) return [];

    const result: PrizmPrimitiveTimePickerItem[] = [];

    timeSheet.forEach(el => {
      const compareTo = { ...currentTime };
      compareTo[sheetState] = el.value;
      const tempTime = new PrizmTime(compareTo.hours ?? 0, compareTo.minutes ?? 0, compareTo.seconds ?? 0);

      if (sheetState === 'hours') {
        if (minTime && tempTime.hours < minTime.hours) {
          result.push(el);
        }

        if (maxTime && tempTime.hours > maxTime.hours) {
          result.push(el);
        }
      }

      if (sheetState === 'minutes') {
        if (minTime && tempTime.hours <= minTime.hours && tempTime.minutes < minTime.minutes) {
          result.push(el);
        }

        if (maxTime && tempTime.hours >= maxTime.hours && tempTime.minutes > maxTime.minutes) {
          result.push(el);
        }
      }

      if (sheetState === 'seconds') {
        if (
          minTime &&
          tempTime.hours <= minTime.hours &&
          tempTime.minutes <= minTime.minutes &&
          tempTime.seconds < minTime.seconds
        ) {
          result.push(el);
        }

        if (
          maxTime &&
          tempTime.hours >= maxTime.hours &&
          tempTime.minutes >= maxTime.minutes &&
          tempTime.seconds > maxTime.seconds
        ) {
          result.push(el);
        }
      }
    });

    return result;
  }
}
