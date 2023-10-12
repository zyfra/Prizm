import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from 'lodash';

@Pipe({
  name: 'prizmStickyHeader',
})
export class PrizmStickyHeaderPipe implements PipeTransform {
  public transform(value: boolean | undefined): boolean {
    return isNil(value) ? false : !value;
  }
}
