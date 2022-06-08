import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {TZyfraButtonIconPosision} from "@digital-plant/zyfra-components";

@Component({
  selector: 'zyfra-toggle-example',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  value = true;
  readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/import-module.md'
    );

  readonly example1: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/1/template.ts'),
    HTML: import('!!raw-loader!./examples/1/template.html'),
  };
}
