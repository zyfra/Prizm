import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmScrollbarVisibility, PrizmSizeL, PrizmSizeM } from '@prizm-ui/components';

@Component({
  selector: 'prizm-scrollbar-example',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarComponent {
  public readonly visibilityVariants: ReadonlyArray<PrizmScrollbarVisibility> = ['auto', 'hidden', 'visible'];
  public visibility: PrizmScrollbarVisibility = this.visibilityVariants[0];

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/scrollbar-base-example.component.ts?raw'),
    HTML: import('./examples/base/scrollbar-base-example.component.html?raw'),
  };

  public readonly exampleHorizontal: TuiDocExample = {
    TypeScript: import('./examples/horizontal/scrollbar-horizontal-example.component.ts?raw'),
    HTML: import('./examples/horizontal/scrollbar-horizontal-example.component.html?raw'),
  };

  public readonly exampleHidden: TuiDocExample = {
    TypeScript: import('./examples/hidden/scrollbar-hidden-example.component.ts?raw'),
    HTML: import('./examples/hidden/scrollbar-hidden-example.component.html?raw'),
  };

  public readonly exampleVisible: TuiDocExample = {
    TypeScript: import('./examples/visible/scrollbar-visible-example.component.ts?raw'),
    HTML: import('./examples/visible/scrollbar-visible-example.component.html?raw'),
  };

  public readonly exampleAll: TuiDocExample = {
    TypeScript: import('./examples/all/scrollbar-all-example.component.ts?raw'),
    HTML: import('./examples/all/scrollbar-all-example.component.html?raw'),
  };
}
