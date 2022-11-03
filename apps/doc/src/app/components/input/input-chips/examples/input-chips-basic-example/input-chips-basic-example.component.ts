import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmChipsComponent } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-chips-basic-example',
  templateUrl: './input-chips-basic-example.component.html',
  styleUrls: ['./input-chips-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChipsExampleBaseComponent {
  public deletable = true;
  public requiredInputControl = new FormControl('');
  public chipsControl = new FormControl(['Чипс 1', 'Чипс 2']);

  @ViewChild(PrizmChipsComponent, { static: true }) chipsComponent: PrizmChipsComponent;

  public onEnter(value: string): void {
    if (value === '') return;
    this.chipsComponent.addChips(value);
    this.requiredInputControl.patchValue('');
  }
}

