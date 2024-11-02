import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'prizm-switcher-overflow-example',
  templateUrl: './switcher-overflow-example.component.html',
  styleUrls: ['./switcher-overflow-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOverflowExampleComponent {
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
  public readonly switchers2: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
    },
    {
      title: 'Графики',
    },
  ];
  public readonly switchers$ = new BehaviorSubject<PrizmSwitcherItem[]>(this.switchers);
  public readonly control = new FormControl(1);

  public updateValue() {
    this.control.setValue(3);
  }
  public changeItems() {
    this.switchers$.next(this.switchers$.value === this.switchers ? this.switchers2 : this.switchers);
  }
}
