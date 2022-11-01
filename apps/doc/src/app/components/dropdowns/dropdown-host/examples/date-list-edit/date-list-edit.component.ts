import {ChangeDetectorRef, Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmDateTime, PzmDay, PzmTime } from '@digital-plant/zui-components';
import { formatRelative, addDays, addHours, addMonths } from 'date-fns';

type DateItem = {
  title: string,
  range: [
    [
        PzmDay,
        PzmTime
    ],
    [
      PzmDay,
      PzmTime
    ],
  ],
};

@Component({
  selector: 'pzm-dropdown-host-date-list-edit-example',
  templateUrl: './date-list-edit.component.html',
  styleUrls: [
   './date-list-edit.component.less'
  ]
})
export class PzmDropdownHostDateListEditExampleComponent {
  open = false;
  data: DateItem[] = [
    {
      title: 'Последний час',
      range: [
        [
          PzmDay.fromLocalNativeDate(new Date()),
          new PzmTime(new Date().getHours() - 1, new Date().getMinutes(), 0)
        ],
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние сутки',
      range: [
        [
          PzmDay.fromLocalNativeDate(addDays(new Date(), -1)),
          PzmTime.fromLocalNativeDate(new Date())
        ],
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 2 часа',
      range: [
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(addHours(new Date(), -2))
        ],
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 4 часа',
      range: [
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(addHours(new Date(), -4))
        ],
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 8 часов',
      range: [
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(addHours(new Date(), -8))
        ],
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(new Date())
        ],
      ],
    },
    {
      title: 'Последние 12 часов',
      range: [
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(addHours(new Date(), -12))
        ],
        [
          PzmDay.fromLocalNativeDate(new Date()),
          PzmTime.fromLocalNativeDate(new Date())
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
      new PzmDateTime(
        start[0],
        start[1]
      ).toLocalNativeDate(),
      new PzmDateTime(
        end[0],
        end[1]
      ).toLocalNativeDate()
    ]
  }

  public remove(idx: number): void {
    this.data.splice(idx, 1);
  }
}
