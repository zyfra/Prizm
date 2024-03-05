import { Pipe, PipeTransform } from '@angular/core';
import { Compare } from '@prizm-ui/helpers';

@Pipe({
  name: 'prizmStickyHeader',
})
export class PrizmStickyHeaderPipe implements PipeTransform {
  public transform(value: boolean | undefined): boolean {
    return Compare.isNullish(value) ? false : !value;
  }
}
