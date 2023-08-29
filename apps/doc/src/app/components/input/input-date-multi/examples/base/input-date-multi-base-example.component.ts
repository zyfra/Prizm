import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDateItemTemplate, PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-multi-base-example',
  templateUrl: './input-date-multi-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
      prizm-input-date-multi {
        width: 20rem;
      }
    `,
  ],
})
export class PrizmInputDateMultiBaseExampleComponent implements OnInit {
  @ViewChild('dateTime', { static: true }) dateTime!: TemplateRef<unknown>;
  @ViewChild('dateRelativeTime', { static: true }) dateRelativeTime!: TemplateRef<unknown>;
  public readonly timeControl = new UntypedFormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30)]);
  public readonly relativeControl = new UntypedFormControl();
  public items: PrizmDateItemTemplate[] = [];

  public ngOnInit(): void {
    this.items = [
      {
        template: this.dateTime,
        name: 'Абсолютное время',
      },
      {
        template: this.dateRelativeTime,
        name: 'Относительное время',
      },
    ];
  }
}
