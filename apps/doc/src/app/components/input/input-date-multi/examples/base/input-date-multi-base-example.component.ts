import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiDateItemTemplate, PzmDay, ZuiTime } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-date-multi-base-example',
  templateUrl: './input-date-multi-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
    zui-input-date-multi {
      width: 20rem;
    }
  `]
})
export class ZuiInputDateMultiBaseExampleComponent implements OnInit {
  @ViewChild('dateTime', { static: true }) dateTime: TemplateRef<unknown>;
  @ViewChild('dateRelativeTime', { static: true }) dateRelativeTime: TemplateRef<unknown>;
  public readonly timeControl = new FormControl([new PzmDay(2017, 2, 15), new ZuiTime(12, 30)]);
  public readonly relativeControl = new FormControl();
  public items: ZuiDateItemTemplate[] = [];

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
