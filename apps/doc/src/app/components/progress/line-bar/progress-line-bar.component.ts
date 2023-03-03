import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmSizeM, PrizmSizeS } from '@prizm-ui/components';

@Component({
  selector: 'prizm-progress-example',
  templateUrl: './progress-line-bar.component.html',
  styleUrls: ['./progress-line-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressLineBarComponent {
  public max = 100;
  public value = 50;

  readonly sizeVariants: ReadonlyArray<PrizmSizeS | PrizmSizeM> = ['s', 'm'];
  size: PrizmSizeS | PrizmSizeM = this.sizeVariants[1];

  readonly colorVariants: ReadonlyArray<string | null> = [
    null,
    'transparent',
    'var(--prizm-index-danger)',
    'var(--prizm-index-warning)',
    'var(--prizm-index-plan)',
    'var(--prizm-index-good)',
    'lightblue',
  ];
  color: string | null = this.colorVariants[0];

  readonly trackColorVariants: ReadonlyArray<string | null> = [
    null,
    'transparent',
    'var(--prizm-index-danger)',
    'var(--prizm-index-warning)',
    'lightblue',
    'gray',
    'green',
  ];
  trackColor: string | null = this.trackColorVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/progress-base-example.component.ts?raw'),
    HTML: import('./examples/base/progress-base-example.component.html?raw'),
  };
}
