import { Pipe, PipeTransform } from '@angular/core';
import { getArrWithStringNumbers } from '../../../util/common/get-arr-string-numbers';

@Pipe({
  name: `prizmTimeSheet`,
  standalone: true,
})
export class PrizmTimeSheetPipe implements PipeTransform {
  public transform(timeCount: number): { key: string; value: string }[] {
    return getArrWithStringNumbers(timeCount, 0, true).map((i, idx) => ({
      key: i,
      value: idx.toString(),
    }));
  }
}
