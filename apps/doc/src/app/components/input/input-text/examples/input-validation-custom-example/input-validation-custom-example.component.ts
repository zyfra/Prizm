import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PrizmInputValidationTexts } from '@prizm-ui/components';
import { InputValidationCustomTextsService } from './input-validation-custom-texts.service';

@Component({
  selector: 'prizm-input-validation-custom-example',
  templateUrl: './input-validation-custom-example.component.html',
  styleUrls: ['./input-validation-custom-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PrizmInputValidationTexts,
      useClass: InputValidationCustomTextsService,
    },
  ],
})
export class InputValidationCustomExampleComponent {
  public requiredInputControl = new FormControl('', Validators.required);
}
