import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-number-min-max-example',
  templateUrl: './input-number-min-max-example.component.html',
  styleUrls: ['./input-number-min-max-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberMinMaxExampleComponent {
  public minMaxInputControl = new UntypedFormControl();
  public minMaxInputControlCustom = new UntypedFormControl();

  public min = 10;
  public max = 80;
}
