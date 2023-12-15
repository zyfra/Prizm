import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prizmStickyColumn',
})
export class PrizmStickyColumnPipe implements PipeTransform {
  public transform(id: string, stickyList: string[]): boolean {
    return stickyList.includes(id);
  }
}
