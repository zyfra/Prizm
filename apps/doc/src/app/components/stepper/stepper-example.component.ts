import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  templateUrl: './stepper-example.component.html',
  styleUrls: ['./stepper-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmStepperExampleComponent {
  currentStep = 1;
  title = 'Stepper API';
  vertical = false;
  stepperSize = 'auto';

  readonly basicExample: TuiDocExample = {
    TypeScript: import('./examples/stepper-basic-example/stepper-basic-example.component?raw'),
    HTML: import('./examples/stepper-basic-example/stepper-basic-example.component.html?raw'),
  };

  readonly verticalExample: TuiDocExample = {
    TypeScript: import('./examples/stepper-vertical-example/stepper-vertical-example.component?raw'),
    HTML: import('./examples/stepper-vertical-example/stepper-vertical-example.component.html?raw'),
  };

  readonly asyncExample: TuiDocExample = {
    TypeScript: import('./examples/stepper-async-example/stepper-async-example.component?raw'),
    HTML: import('./examples/stepper-async-example/stepper-async-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
