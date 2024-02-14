import { Pipe, PipeTransform } from '@angular/core';
import { PrizmColumnStatus } from '../column-settings.model';

@Pipe({
  name: 'prizmColumnIcon',
  standalone: true,
})
export class PrizmColumnIconPipe implements PipeTransform {
  public transform(status: PrizmColumnStatus): string {
    let icon = 'eye';
    switch (status) {
      case 'hidden':
        icon = 'eye-closed';
        break;

      case 'sticky':
        icon = 'lock';
        break;
    }
    return icon;
  }
}
