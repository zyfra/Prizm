import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'prizm-switcher-projection-example',
  templateUrl: './switcher-projection-example.component.html',
  styleUrls: ['./switcher-projection-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherProjectionExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
      disabled: true,
    },
    {
      title: 'Графики',
    },
    {
      title: 'Мнемосхемы',
      appearanceType: 'outline',
    },
    {
      title: 'Дашборды',
      appearance: 'primary',
    },
  ];
  public readonly switchers2: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
      disabled: true,
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
