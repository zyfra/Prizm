import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'zyfra-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public requiredInputControl = new FormControl('', Validators.required);
  public disabledInputControl = new FormControl({ value: 'Задизайблено', disabled: true });
}
