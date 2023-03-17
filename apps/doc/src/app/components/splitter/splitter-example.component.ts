import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSplitterOrientation } from '@prizm-ui/components';

import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  templateUrl: './splitter-example.component.html',
  styleUrls: ['./splitter-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterExampleComponent {
  public orientationVariants: Array<PrizmSplitterOrientation> = ['horizontal', 'vertical'];
  public orientation: PrizmSplitterOrientation = 'horizontal';

  area1Size = '30%';
  area2Size = '40%';
  area3Size = '30%';

  showArea1 = true;
  showArea2 = true;
  showArea3 = true;

  public change(): void {
    this.area1Size = '40%';
    this.area2Size = '40%';
    this.area3Size = '20%';
  }

  public change2(): void {
    this.area1Size = '50%';
    this.area2Size = null;
    this.area3Size = '50%';
  }

  readonly basic: TuiDocExample = {
    TypeScript: import('./examples/basic/basic.component?raw'),
    HTML: import('./examples/basic/basic.component.html?raw'),
  };

  readonly vertical: TuiDocExample = {
    TypeScript: import('./examples/vertical/vertical.component?raw'),
    HTML: import('./examples/vertical/vertical.component.html?raw'),
  };

  readonly nested: TuiDocExample = {
    TypeScript: import('./examples/nested/nested.component?raw'),
    HTML: import('./examples/nested/nested.component.html?raw'),
  };

  readonly limitSize: TuiDocExample = {
    TypeScript: import('./examples/limit-size/limit-size.component?raw'),
    HTML: import('./examples/limit-size/limit-size.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
