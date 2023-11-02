import { Pipe, PipeTransform, QueryList } from '@angular/core';
import { PrizmTabComponent } from '../components/tab.component';

@Pipe({
  name: `prizmIconTabs`,
  pure: false,
})
export class PrizmIconTabsPipe implements PipeTransform {
  public transform(tabs: QueryList<PrizmTabComponent>): boolean {
    return tabs.some(el => !!el.icon);
  }
}
