import { Pipe, PipeTransform } from '@angular/core';
import { prizmGetNumberWithZero } from '@prizm-ui/core';

@Pipe({
  name: `prizmNumberWithZero`,
  standalone: true,
})
export class PrizmNumberWithZeroPipe implements PipeTransform {
  public transform(value: number | undefined): string | null {
    if (value === undefined) return null;
    return prizmGetNumberWithZero(value);
  }
}
