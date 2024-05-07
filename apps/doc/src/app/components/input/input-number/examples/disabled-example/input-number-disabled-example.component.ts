import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import { PrizmButtonComponent, PrizmInputNumberModule } from '@prizm-ui/components';
import { PrizmIfLanguageDirective, PrizmLanguagePipe } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-input-number-disabled-example',
  templateUrl: './input-number-disabled-example.component.html',
  styleUrls: ['./input-number-disabled-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PrizmLanguagePipe,
    PrizmInputNumberModule,
    ReactiveFormsModule,
    PrizmButtonComponent,
    PrizmIfLanguageDirective,
  ],
})
export class InputNumberDisabledExampleComponent {
  public requiredInputControl = new UntypedFormControl(2, Validators.required);
}
