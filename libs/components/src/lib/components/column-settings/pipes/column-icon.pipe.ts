import { Pipe, PipeTransform } from '@angular/core';
import { PrizmColumnStatus } from '../column-settings.model';

@Pipe({
  name: 'prizmColumnIcon',
})
export class PrizmColumnIconPipe implements PipeTransform {
  public transform(status: PrizmColumnStatus): string {
    let icon = 'sort-eye';
    switch (status) {
      case 'hidden':
        icon = 'sort-eye-off-2';
        break;

      case 'sticky':
        icon = 'account-lock';
        break;
    }
    return icon;
  }
}
