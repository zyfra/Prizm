import { Pipe, PipeTransform } from '@angular/core';
import { prizmGetNumberWithZero } from '@prizm-ui/core';

@Pipe({
  name: `prizmTimeWithZero`,
  standalone: true,
})
export class PrizmTimeWithZeroPipe implements PipeTransform {
  public transform(time?: number): string | null {
    if (!time) return null;
    return prizmGetNumberWithZero(time);
  }
}
