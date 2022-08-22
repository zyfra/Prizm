import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { ZuiScrollbarVisibility, ZuiSizeL, ZuiSizeM } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-scrollbar-example',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollbarComponent {

  public readonly visibilityVariants: ReadonlyArray<ZuiScrollbarVisibility> = [
    'auto',
    'hidden',
    'visible'
  ];
  public visibility: ZuiScrollbarVisibility = this.visibilityVariants[0];

  public readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

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
