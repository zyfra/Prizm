import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmSelectSearchMatcher } from '@prizm-ui/components';
import { BehaviorSubject, timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'prizm-select-with-backend-search-example',
  templateUrl: './select-with-backend-search-example.component.html',
})
export class PrizmSelectWithBackendSearchExampleComponent {
  value = true;
  readonly control = new FormControl();
  readonly allItems = [
    'Андрей Сафанов',
    'Сергей Марков',
    'Аня Петрова',
    'Катя Петрова',
    'Саша Дуров',
    'Влад Константинов',
    'Костя Щербаков',
    'Рустам Гусев',
    'Филип Уваров',
  ];
  public items$ = new BehaviorSubject(this.allItems);

  public searchMatcher: PrizmSelectSearchMatcher<unknown> = () => true;

  public search(val: string): void {
    if (!val) this.items$.next(this.allItems);
    const foundItems = this.allItems.filter(i => i?.toLowerCase().includes(val?.toLowerCase()));

    timer(500)
      .pipe(tap(() => this.items$.next(foundItems)))
      .subscribe();
  }
}
