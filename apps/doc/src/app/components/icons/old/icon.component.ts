import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconDefs } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';

@Component({
  selector: 'prizm-icon-example',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly iconVariants = IconDefs.reduce((a, c) => a.concat(c.data), []);
  public icon = this.iconVariants[0];

  readonly iconSizes = [24, 16];
  public iconSize = 24;

  public defs = IconDefs;

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/icon-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/icon-base-example.component.html'),
  };
}
