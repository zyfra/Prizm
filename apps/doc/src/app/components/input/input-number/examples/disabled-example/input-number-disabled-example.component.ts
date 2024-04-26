import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { PrizmButtonComponent, PrizmInputNumberModule } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-number-disabled-example',
  templateUrl: './input-number-disabled-example.component.html',
  styleUrls: ['./input-number-disabled-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PrizmInputNumberModule, ReactiveFormsModule, PrizmButtonComponent],
})
export class InputNumberDisabledExampleComponent {
  public requiredInputControl = new UntypedFormControl(2, Validators.required);
}
