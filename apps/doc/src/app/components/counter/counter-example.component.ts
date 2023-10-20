import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmCounterStatus } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-counter-example',
  templateUrl: './counter-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterExampleComponent {
  public status: PrizmCounterStatus = 'info';
  public disabled = false;
  public value: number | string = 0;

  public statusVariants: PrizmCounterStatus[] = ['info', 'secondary', 'success', 'warning', 'danger'];
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/counter-base-example.component.ts?raw'),
    HTML: import('./examples/base/counter-base-example.component.html?raw'),
  };
}
