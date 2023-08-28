import { ChangeDetectorRef, Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDateTime, PrizmDay, PrizmTime } from '@prizm-ui/components';
import { formatRelative, addDays, addHours, addMonths } from 'date-fns';

type DateRangeItem = [PrizmDay, PrizmTime];

type DateItem = {
  range: [DateRangeItem | null, DateRangeItem | null];
};

@Component({
  selector: 'prizm-dropdown-host-date-list-edit-example',
  templateUrl: './date-list-edit.component.html',
  styleUrls: ['./date-list-edit.component.less'],
})
export class PrizmDropdownHostDateListEditExampleComponent {
  open = false;
  selection: DateItem | null;
  addItem: DateItem | null;
  data: DateItem[] = [
    {
      range: [
        [
          PrizmDay.fromLocalNativeDate(new Date()),
          new PrizmTime(new Date().getHours() - 1, new Date().getMinutes(), 0),
        ],
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(new Date())],
      ],
    },
    {
      range: [
        [PrizmDay.fromLocalNativeDate(addDays(new Date(), -1)), PrizmTime.fromLocalNativeDate(new Date())],
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(new Date())],
      ],
    },
    {
      range: [
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(addHours(new Date(), -2))],
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(new Date())],
      ],
    },
    {
      range: [
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(addHours(new Date(), -4))],
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(new Date())],
      ],
    },
    {
      range: [
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(addHours(new Date(), -8))],
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(new Date())],
      ],
    },
    {
      range: [
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(addHours(new Date(), -12))],
        [PrizmDay.fromLocalNativeDate(new Date()), PrizmTime.fromLocalNativeDate(new Date())],
      ],
    },
  ];

  readonly startControl = new UntypedFormControl();
  readonly endControl = new UntypedFormControl();

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

  public convertDate([start, end]: DateItem['range']): [Date, Date] | null {
    if (!start?.[0] || !end?.[0]) return null;
    return [
      new PrizmDateTime(start[0], start[1] ?? new PrizmTime(0, 0)).toLocalNativeDate(),
      new PrizmDateTime(end[0], end[1] ?? new PrizmTime(0, 0)).toLocalNativeDate(),
    ];
  }

  public remove(idx: number): void {
    const [removedItem] = this.data.splice(idx, 1);
    if (this.selection === removedItem) {
      this.selection = null;
    }
  }
  public removeNew(): void {
    this.selection = this.addItem = null;
  }

  public editCurrent(item: DateItem, idx: number): void {
    if (this.selection === item) {
      this.data[idx].range = this.selection.range;
      this.selection = null;
      return;
    }
    this.selection = item;
  }

  public editNew(item: DateItem): void {
    if (this.selection === item) {
      this.data.push(this.selection);
      this.selection = this.addItem = null;
      return;
    }
    this.selection = item;
  }

  public changeDate(from: DateRangeItem, to: DateRangeItem): void {
    if (this.selection) this.selection.range = [from, to];
  }

  public add(): void {
    this.addItem = {
      range: [null, null],
    };
    this.selection = this.addItem;
  }

  public trackBy(i: number): number {
    return i;
  }
}
