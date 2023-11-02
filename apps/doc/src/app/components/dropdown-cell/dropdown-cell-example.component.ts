import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmCounterPosition, PrizmCounterStatus } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-dropdown-cell-example',
  templateUrl: './dropdown-cell-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .container {
        display: flex;
        align-items: center;
        gap: 24px;
        padding: 16px;
        background-color: var(--prizm-v3-background-fill-secondary);
      }

      prizm-dropdown-cell {
        min-width: 200px;
      }
    `,
  ],
})
export class PrizmDropdownCellExampleComponent {
  public disabled = false;
  public selected = false;
  public contentType: 'chips' | 'flat' = 'flat';

  public contentTypeVariants: ('chips' | 'flat')[] = ['chips', 'flat'];

  public statusVariants: PrizmCounterStatus[] = ['info', 'secondary', 'success', 'warning', 'danger'];
  public positionVariants: PrizmCounterPosition[] = ['tr', 'tl', 'br', 'bl'];
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/dropdown-cell-base-example.component.ts?raw'),
    HTML: import('./examples/base/dropdown-cell-base-example.component.html?raw'),
  };

  readonly exampleWithInstruments: TuiDocExample = {
    TypeScript: import('./examples/with-instrumnets/dropdown-cell-with-instruments-example.component.ts?raw'),
    HTML: import('./examples/with-instrumnets/dropdown-cell-with-instruments-example.component.html?raw'),
  };

  readonly exampleChips: TuiDocExample = {
    TypeScript: import('./examples/chips/dropdown-cell-chips-example.component.ts?raw'),
    HTML: import('./examples/chips/dropdown-cell-chips-example.component.html?raw'),
  };
}
