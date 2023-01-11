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

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/scrollbar-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/scrollbar-base-example.component.html'),
  };

  public readonly exampleHorizontal: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/horizontal/scrollbar-horizontal-example.component.ts'),
    HTML: import('!!raw-loader!./examples/horizontal/scrollbar-horizontal-example.component.html'),
  };

  public readonly exampleHidden: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/hidden/scrollbar-hidden-example.component.ts'),
    HTML: import('!!raw-loader!./examples/hidden/scrollbar-hidden-example.component.html'),
  };

  public readonly exampleVisible: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/visible/scrollbar-visible-example.component.ts'),
    HTML: import('!!raw-loader!./examples/visible/scrollbar-visible-example.component.html'),
  };

  public readonly exampleAll: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/all/scrollbar-all-example.component.ts'),
    HTML: import('!!raw-loader!./examples/all/scrollbar-all-example.component.html'),
  };
}
