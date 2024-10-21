import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'prizm-switcher-projection-value-example',
  templateUrl: './switcher-projection-value-example.component.html',
  styleUrls: ['./switcher-projection-value-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherProjectionValueExampleComponent {
  public readonly switchers = [
    {
      title: 'Таблицы',
      disabled: true,
      value: 'table',
    },
    {
      title: 'Графики',
      value: 'graphic',
    },
    {
      title: 'Мнемосхемы',
      appearanceType: 'outline',
      value: 'mnemonics',
    },
    {
      title: 'Дашборды',
      appearance: 'primary',
      value: 'dashboard',
    },
  ];
  public readonly switchers2 = [
    {
      title: 'Таблицы',
      disabled: true,
      value: 'table',
    },
    {
      title: 'Графики',
      value: 'graphic',
    },
  ];
  public readonly switchers$ = new BehaviorSubject(this.switchers);
  public readonly control = new FormControl('table');

  public updateValue() {
    this.control.setValue('dashboard');
  }
  public changeItems() {
    this.switchers$.next(this.switchers$.value === this.switchers ? this.switchers2 : this.switchers);
  }
}
