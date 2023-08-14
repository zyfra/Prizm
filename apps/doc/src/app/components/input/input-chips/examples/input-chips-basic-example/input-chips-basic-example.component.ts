import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmChipsComponent } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-chips-basic-example',
  templateUrl: './input-chips-basic-example.component.html',
  styleUrls: ['./input-chips-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChipsExampleBaseComponent {
  public deletable = true;
  public requiredInputControl = new UntypedFormControl('');
  public chipsControl = new UntypedFormControl(['Чипс 1', 'Чипс 2']);

  @ViewChild(PrizmChipsComponent, { static: true }) chipsComponent: PrizmChipsComponent;

  public onEnter(value: string): void {
    if (value === '') return;
    this.chipsComponent.addChips(value);
    this.requiredInputControl.patchValue('');
  }
}
