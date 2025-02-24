import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UntypedFormControl } from '@angular/forms';
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'prizm-combobox-with-backend-search-example',
  templateUrl: './combobox-with-backend-search-example.component.html',
})
export class PrizmComboboxWithBackendSearchExampleComponent implements OnInit {
  value = true;
  readonly control = new UntypedFormControl();
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

  public showLoader = false;
  public search$$ = new Subject<string[]>();

  private readonly destroyRef = inject(DestroyRef);

  public ngOnInit() {
    this.search$$
      .pipe(
        debounceTime(500),
        tap(foundItems => this.items$.next(foundItems)),
        tap(() => (this.showLoader = false))
      )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  public search(val: string | null): void {
    if (!val) this.items$.next(this.allItems);
    const foundItems = val
      ? this.allItems.filter(i => i?.toLowerCase().includes(val.toLowerCase()))
      : this.allItems;
    this.showLoader = true;
    this.search$$.next(foundItems);
  }
}
