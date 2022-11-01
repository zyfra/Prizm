import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmDateItemTemplate, PzmDay, PzmTime } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-date-multi-four-example',
  templateUrl: './input-date-multi-four-example.component.html',
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
export class PzmInputDateMultiFourExampleComponent implements OnInit {
  @ViewChild('dateTime', { static: true }) dateTime: TemplateRef<unknown>;
  @ViewChild('dateRelativeTime', { static: true }) dateRelativeTime: TemplateRef<unknown>;
  @ViewChild('time', { static: true }) time: TemplateRef<unknown>;
  @ViewChild('date', { static: true }) date: TemplateRef<unknown>;
  public readonly dateTimeControl = new FormControl([new PzmDay(2017, 2, 15), new PzmTime(12, 30)]);
  public readonly relativeControl = new FormControl();
  public readonly dateControl = new FormControl(new PzmDay(2017, 0, 15));
  public readonly timeControl = new FormControl(new PzmTime(12, 30, 25));
  public items: PzmDateItemTemplate[] = [];

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
      {
        template: this.time,
        name: 'Только время'
      },
      {
        template: this.date,
        name: 'Только дата'
      },
    ]
  }
}
