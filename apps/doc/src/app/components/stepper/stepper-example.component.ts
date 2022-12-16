import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/taiga-ui/addon-doc';

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
    TypeScript: import('!!raw-loader!./examples/stepper-basic-example/stepper-basic-example.component'),
    HTML: import('!!raw-loader!./examples/stepper-basic-example/stepper-basic-example.component.html'),
  };

  readonly verticalExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/stepper-vertical-example/stepper-vertical-example.component'),
    HTML: import('!!raw-loader!./examples/stepper-vertical-example/stepper-vertical-example.component.html'),
  };

  readonly asyncExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/stepper-async-example/stepper-async-example.component'),
    HTML: import('!!raw-loader!./examples/stepper-async-example/stepper-async-example.component.html'),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}

