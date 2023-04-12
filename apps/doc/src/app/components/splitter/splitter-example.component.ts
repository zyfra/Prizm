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

  area1Size = 50;
  area2Size = 50;
  area3Size = 70;

  showArea1 = true;
  showArea2 = true;
  showArea3 = true;

  public change(): void {
    this.showArea1 = true;
    this.showArea2 = true;
    this.showArea3 = true;
    this.area1Size = 10;
    this.area2Size = 20;
    this.area3Size = 70;
  }

  public change2(): void {
    this.showArea1 = true;
    this.showArea2 = true;
    this.showArea3 = true;
    this.area2Size = 10;
  }

  public change3(): void {
    this.showArea1 = false;
    this.area2Size = 50;
    this.area3Size = 50;
  }

  public change4(): void {
    this.showArea1 = false;
    this.showArea2 = false;
    this.showArea3 = false;
  }

  public change5(): void {
    this.showArea1 = true;
    this.showArea2 = true;
    this.showArea3 = true;
  }

  runCD() {}

  test() {}

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
