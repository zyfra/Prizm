import {ChangeDetectorRef, Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDateTime, PrizmDay, PrizmTime } from '@prizm-ui/components';
import { formatRelative, addDays, addHours, addMonths } from 'date-fns';

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
  selector: 'prizm-dropdown-host-date-list-edit-example',
  templateUrl: './date-list-edit.component.html',
  styleUrls: [
   './date-list-edit.component.less'
  ]
})
export class PrizmDropdownHostDateListEditExampleComponent {
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
    }
  ];


  readonly startControl = new FormControl();
  readonly endControl = new FormControl();

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

  public convertDate([start, end]: DateItem['range']): [Date, Date] {
    return [
      new PrizmDateTime(
        start[0],
        start[1]
      ).toLocalNativeDate(),
      new PrizmDateTime(
        end[0],
        end[1]
      ).toLocalNativeDate()
    ]
  }

  public remove(idx: number): void {
    this.data.splice(idx, 1);
  }
}
