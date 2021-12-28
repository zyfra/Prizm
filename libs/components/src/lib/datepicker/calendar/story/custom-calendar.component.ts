import { Component, Input, OnInit } from '@angular/core';
import { ZyfraTime } from '../../model/zyfra-time.model';

/**
 * This component only for example in storybook
 */
// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'zyfra-custom-calendar',
  template: `
    <zyfra-calendar
      [placeholder]="placeholder"
      [ngModel]="calendarModel"
      [showTime]="true"
      [showSeconds]="true"
      [label]="label"
    >
      <div buttons-right>
        <button class="zyfra-datepicker-control zyfra-datepicker-button" type="button">
          <zyfra-dropdown
            [options]="times"
            [ngModel]="timeModel"
            [disabled]="disabled"
            (ngModelChange)="setInputTime($event)"
            [panelStyleClass]="'zyfra-datepicker-dropdown-overlay'"
            [styleClass]="'zyfra-datepicker-dropdown'"
            [dropdownIcon]="'zyfra-icon date-update'"
            [optionLabel]="'value'"
          >
          </zyfra-dropdown>
        </button>
      </div>
    </zyfra-calendar>
  `,
})
export class CustomCalendarComponent implements OnInit {
  @Input() placeholder;
  @Input() times: ZyfraTime[];
  @Input() disabled;
  @Input() label;
  @Input() selectedTime: string;

  public timeModel: ZyfraTime;

  public calendarModel: string = '12/22/2021 18:00:00';

  public setInputTime(time: ZyfraTime): void {
    this.calendarModel = this.getDate() + ' ' + time.value;
  }

  ngOnInit(): void {
    this.timeModel = this.times.find(t => t.value === this.selectedTime);
    this.calendarModel = this.getDate() + ' ' + this.timeModel.value;
  }

  private getDate(): string {
    return this.calendarModel.split(' ')[0];
  }
}
