import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {TZyfraButtonIconPosision} from "@digital-plant/zyfra-components";

@Component({
  selector: 'zui-button-example',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  // List inputs
  styleClass: string;
  label = 'Button Name';


  // list
  readonly typeVariants: ReadonlyArray<'button' | 'submit' | 'reset'> = [
    'submit',
    'reset',
    'button',
  ];
  type = this.typeVariants[0];

  icon: string;

  readonly iconPosVariants: ReadonlyArray<TZyfraButtonIconPosision> = [
    'left',
    'right',
    'top',
    'bottom'
  ];
  iconPos: TZyfraButtonIconPosision = this.iconPosVariants[0];
  disabled = false;
  badge: string;
  style: string;

  readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/import-module.md'
    );

  readonly example2: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/1/template.ts'),
    HTML: import('!!raw-loader!./examples/1/template.html'),
  };

  readonly example1: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/2/template.ts'),
    HTML: import('!!raw-loader!./examples/2/template.html'),
  };
}
