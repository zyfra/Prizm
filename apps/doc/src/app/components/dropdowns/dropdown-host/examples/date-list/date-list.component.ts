import {ChangeDetectorRef, Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiDay, ZuiTime } from '@digital-plant/zui-components';
import { formatRelative, addDays, addHours, addMonths } from 'date-fns';

type DateItem = {
  title: string,
  range: [
    [
        ZuiDay,
        ZuiTime
    ],
    [
      ZuiDay,
      ZuiTime
    ],
  ],
};

@Component({
  selector: 'zui-dropdown-host-date-list-example',
  templateUrl: './date-list.component.html',
  styles: [`
    .box {
      padding: 16px;
    }

    .list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px 24px;
    }

    .header {
      display: flex;
      gap: 8px;
      color: black;
      align-items: center;

      zui-icon {
        font-weight: 300;
      }
    }

    .date-control {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      zui-input-date-time ::ng-deep {
        width: 100%;

        zui-input-layout {
          width: 100%;
        }
      }
    }

    .footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
  `]
})
export class ZuiDropdownHostDateListExampleComponent {
  open = false;
  data: DateItem[] = [
    {
      title: 'Последний час',
      range: [
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          new ZuiTime(new Date().getHours() - 1, new Date().getMinutes(), 0)
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние сутки',
      range: [
        [
          ZuiDay.fromLocalNativeDate(addDays(new Date(), -1)),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 2 часа',
      range: [
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(addHours(new Date(), -2))
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 7 дней',
      range: [
        [
          ZuiDay.fromLocalNativeDate(addDays(new Date(), -7)),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 4 часа',
      range: [
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(addHours(new Date(), -4))
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 30 дней',
      range: [
        [
          ZuiDay.fromLocalNativeDate(addDays(new Date(), -30)),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 8 часов',
      range: [
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(addHours(new Date(), -8))
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 90 дней',
      range: [
        [
          ZuiDay.fromLocalNativeDate(addDays(new Date(), -90)),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 12 часов',
      range: [
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(addHours(new Date(), -12))
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 6 месяцев',
      range: [
        [
          ZuiDay.fromLocalNativeDate(addMonths(new Date(), -6)),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
        [
          ZuiDay.fromLocalNativeDate(new Date()),
          ZuiTime.fromLocalNativeDate(new Date())
        ],
      ],
    }
  ];


  readonly startControl = new FormControl('');
  readonly endControl = new FormControl('');

  constructor(public readonly cdRef: ChangeDetectorRef) {}

  public select(item: DateItem | null): void {
    if (!item) {
      this.startControl.enable();
      this.endControl.enable();
      return;
    }
    this.startControl.disable();
    this.endControl.disable();

    this.startControl.setValue(item.range[0]);
    this.endControl.setValue(item.range[1]);
  }
}
