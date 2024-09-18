import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { BehaviorSubject, switchMap, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'prizm-switcher-async-example',
  templateUrl: './switcher-async-example.component.html',
  styleUrls: ['./switcher-async-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class SwitcherAsyncExampleComponent {
  public selectedIndex = 1;
  public testIndex = this.selectedIndex;
  public readonly switchersSetA: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
    },
    {
      title: 'Графики',
      appearance: 'danger',
    },
    {
      title: 'Мнемосхемы',
      disabled: true,
    },
    {
      title: 'Дашборды',
      appearance: 'success',
    },
  ];

  public readonly switchersSetB: PrizmSwitcherItem[] = [
    {
      title: 'Москва',
      disabled: true,
    },
    {
      title: 'Санкт-Петербург',
      appearanceType: 'fill',
    },
  ];

  public switchers: PrizmSwitcherItem[] = this.switchersSetA;

  public readonly switchers$ = timer(100).pipe(
    switchMap(() => this.switchers$$),
    tap(value => (this.switchers = value)),
    takeUntil(this.destroy$)
  );

  private readonly switchers$$: BehaviorSubject<PrizmSwitcherItem[]> = new BehaviorSubject<
    PrizmSwitcherItem[]
  >(this.switchersSetA);

  constructor(private readonly destroy$: PrizmDestroyService) {}

  public toggleIndex(): void {
    this.selectedIndex === 1 ? (this.selectedIndex = 2) : (this.selectedIndex = 1);
  }

  public toggleSwitchers(): void {
    this.switchers === this.switchersSetA
      ? this.switchers$$.next(this.switchersSetB)
      : this.switchers$$.next(this.switchersSetA);
  }

  public updateIdx(idx: number) {
    this.selectedIndex = idx;
  }
}
