import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zyfra-input-switch',
  templateUrl: './zyfra-input-switch.component.html',
  styles: [],
})
export class ZyfraInputSwitchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() checked: boolean;
  @Input() style: string;
  @Input() styleClass: string;
  @Input() tabindex: number;
  @Input() inputId: string;
  @Input() name: string;
  @Input() ariaLabelledBy: string;
  @Input() disabled: boolean;
  @Input() readonly: boolean;

  /* onChange */
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  onChangeHandler(event) {
    this.checked = event.checked;
    this.onChange.emit(this.checked);
  }
}
