import { Pipe, PipeTransform } from '@angular/core';
import { PrizmTimePaginationState } from '../../internal/primitive-time-pagination/types/types';
import { getArrWithStringNumbers } from '../../../util/common/get-arr-string-numbers';
import { PrizmPrimitiveTimePickerItem } from '../../internal/primitive-time-picker/types/types';

const HOURS_COUNT = 24;
const MINUTES_AND_SECONDS_COUNT = 60;

@Pipe({
  name: `prizmTimeSheet`,
  standalone: true,
})
export class PrizmTimeSheetPipe implements PipeTransform {
  public transform(mode: PrizmTimePaginationState): PrizmPrimitiveTimePickerItem[] {
    const timeCount = mode === 'hours' ? HOURS_COUNT : MINUTES_AND_SECONDS_COUNT;
    return getArrWithStringNumbers(timeCount, 0, true).map((i, idx) => ({
      key: i,
      value: idx,
    }));
  }
}
