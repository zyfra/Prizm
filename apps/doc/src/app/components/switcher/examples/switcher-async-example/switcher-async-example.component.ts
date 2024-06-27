import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { map, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'prizm-switcher-async-example',
  templateUrl: './switcher-async-example.component.html',
  styleUrls: ['./switcher-async-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class SwitcherAsyncExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
    },
    {
      title: 'Графики',
    },
    {
      title: 'Мнемосхемы',
    },
    {
      title: 'Дашборды',
    },
  ];

  public readonly switchers$ = timer(100).pipe(
    map(() => this.switchers),
    takeUntil(this.destroy$)
  );
  constructor(private readonly destroy$: PrizmDestroyService) {}
}
