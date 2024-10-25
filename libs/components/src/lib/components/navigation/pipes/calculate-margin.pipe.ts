import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: `prizmCalculateNavMargin`, standalone: true })
export class PrizmCalculateNavMarginPipe implements PipeTransform {
  public transform(deep: number, expandable?: boolean): number {
    if (expandable) {
      return deep > 0 ? 8 + 16 * deep : 0;
    }
    return deep > 0 ? (deep - 1) * 12 : 0;
  }
}
