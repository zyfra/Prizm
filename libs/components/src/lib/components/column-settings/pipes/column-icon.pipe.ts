import { Pipe, PipeTransform } from '@angular/core';
import { PrizmColumnStatus } from '../column-settings.model';

@Pipe({
  name: 'prizmColumnIcon',
  standalone: true,
})
export class PrizmColumnIconPipe implements PipeTransform {
  public transform(status: PrizmColumnStatus, isLastColumnShown: boolean): string {
    if (status === 'sticky' || (status === 'default' && isLastColumnShown)) return 'lock';
    return status === 'hidden' ? 'eye-closed' : 'eye';
  }
}
