import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDateItemTemplate, PrizmDay, PrizmTime } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-date-multi-base-example',
  templateUrl: './input-date-multi-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
    pzm-input-date-multi {
      width: 20rem;
    }
  `]
})
export class PrizmInputDateMultiBaseExampleComponent implements OnInit {
  @ViewChild('dateTime', { static: true }) dateTime: TemplateRef<unknown>;
  @ViewChild('dateRelativeTime', { static: true }) dateRelativeTime: TemplateRef<unknown>;
  public readonly timeControl = new FormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30)]);
  public readonly relativeControl = new FormControl();
  public items: PrizmDateItemTemplate[] = [];

  public ngOnInit(): void {
    this.items = [
      {
        template: this.dateTime,
        name: 'Абсолютное время'
      },
      {
        template: this.dateRelativeTime,
        name: 'Относительное время'
      },
    ]
  }
}
