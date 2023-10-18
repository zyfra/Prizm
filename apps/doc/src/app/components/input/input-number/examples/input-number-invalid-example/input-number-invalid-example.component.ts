import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'prizm-input-number-invalid-example',
  templateUrl: './input-number-invalid-example.component.html',
  styleUrls: ['./input-number-invalid-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberInvalidExampleComponent {
  form = new FormGroup({
    number: new FormControl<number | null>(null),
  });
}
