import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDay, PrizmTime } from '@digital-plant/zui-components';
import { addDays, addHours, addMonths } from 'date-fns';

type DateItem = {
  title: string,
  range: [
    [
        PrizmDay,
        PrizmTime
    ],
    [
      PrizmDay,
      PrizmTime
    ],
  ],
};

@Component({
  selector: 'pzm-dropdown-host-date-list-example',
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

      pzm-icon {
        font-weight: 300;
      }
    }

    .date-control {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      pzm-input-date-time ::ng-deep {
        width: 100%;

        pzm-input-layout {
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
export class PrizmDropdownHostDateListExampleComponent implements OnInit{
  open = false;
  data: DateItem[] = [
    {
      title: 'Последний час',
      range: [
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          new PrizmTime(new Date().getHours() - 1, new Date().getMinutes(), 0)
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние сутки',
      range: [
        [
          PrizmDay.fromLocalNativeDate(addDays(new Date(), -1)),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 2 часа',
      range: [
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(addHours(new Date(), -2))
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 7 дней',
      range: [
        [
          PrizmDay.fromLocalNativeDate(addDays(new Date(), -7)),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 4 часа',
      range: [
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(addHours(new Date(), -4))
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 30 дней',
      range: [
        [
          PrizmDay.fromLocalNativeDate(addDays(new Date(), -30)),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 8 часов',
      range: [
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(addHours(new Date(), -8))
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 90 дней',
      range: [
        [
          PrizmDay.fromLocalNativeDate(addDays(new Date(), -90)),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 12 часов',
      range: [
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(addHours(new Date(), -12))
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 6 месяцев',
      range: [
        [
          PrizmDay.fromLocalNativeDate(addMonths(new Date(), -6)),
          PrizmTime.fromLocalNativeDate(new Date())
        ],
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          PrizmTime.fromLocalNativeDate(new Date())
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

  ngOnInit(): void {
    this.select(null);
  }
}
