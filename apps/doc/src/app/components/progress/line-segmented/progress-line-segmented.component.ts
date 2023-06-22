import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmSizeM, PrizmSizeS } from '@prizm-ui/components';

@Component({
  selector: 'prizm-progress-example',
  templateUrl: './progress-line-segmented.component.html',
  styleUrls: ['./progress-line-segmented.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressLineSegmentedComponent {
  public max = 10;
  public value = 3;

  readonly sizeVariants: ReadonlyArray<PrizmSizeS | PrizmSizeM> = ['s', 'm'];
  size: PrizmSizeS | PrizmSizeM = this.sizeVariants[1];

  readonly colorsVariants: ReadonlyArray<string | string[]> = [
    [],
    'transparent',
    ['var(--prizm-index-danger)', 'var(--prizm-index-warning)', 'lightblue'],
    ['black', 'gray'],
    'var(--prizm-index-danger)',
    'var(--prizm-index-warning)',
    'lightblue',
    'green',
  ];
  colors: string | string[] = this.colorsVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/progress-base-example.component.ts?raw'),
    HTML: import('./examples/base/progress-base-example.component.html?raw'),
  };
}
