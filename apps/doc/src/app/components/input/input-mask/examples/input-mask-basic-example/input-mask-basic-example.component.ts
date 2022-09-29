import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zui-input-mask-basic-example',
  templateUrl: './input-mask-basic-example.component.html',
  styleUrls: ['./input-mask-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputMaskBasicExampleComponent {
  model;
}

