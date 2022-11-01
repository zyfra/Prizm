import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmChipsComponent } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-chips-outer-example',
  templateUrl: './input-chips-outer-example.component.html',
  styleUrls: ['./input-chips-outer-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChipsOuterExampleComponent {
  public deletable = true;
  public requiredInputControl = new FormControl('');
  public chipsControl = new FormControl(['Чипс 1', 'Чипс 2', 'Чипс 3']);

  @ViewChild(PzmChipsComponent, { static: true }) chipsComponent: PzmChipsComponent;

  public onEnter(value: string): void {
    if (value === '') return;
    this.chipsComponent.addChips(value);
    this.requiredInputControl.patchValue('');
  }
}

