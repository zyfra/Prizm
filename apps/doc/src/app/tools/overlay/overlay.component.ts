import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';

@Component({
  selector: 'prizm-overlay-example',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent {
  // List inputs
  styleClass: string;
  label = 'Button Name';

  // list
  readonly typeVariants: ReadonlyArray<'button' | 'submit' | 'reset'> = ['submit', 'reset', 'button'];
  type = this.typeVariants[0];

  icon: string;

  readonly iconPosVariants: ReadonlyArray<unknown> = ['left', 'right', 'top', 'bottom'];
  iconPos: unknown = this.iconPosVariants[0];
  disabled = false;
  badge: string;
  style: string;

  readonly exampleModule: RawLoaderContent = import('!!raw-loader!./examples/import-module.md');

  readonly globalExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/global/template'),
    HTML: import('!!raw-loader!./examples/global/template.html'),
  };

  readonly relativeExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/relative/template'),
    HTML: import('!!raw-loader!./examples/relative/template.html'),
  };

  readonly fullscreenExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/fullscreen/template'),
    HTML: import('!!raw-loader!./examples/fullscreen/template.html'),
  };

  readonly slideExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/slide/template'),
    HTML: import('!!raw-loader!./examples/slide/template.html'),
  };

  readonly withComponentExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-component/template'),
    HTML: import('!!raw-loader!./examples/with-component/template.html'),
  };
}
