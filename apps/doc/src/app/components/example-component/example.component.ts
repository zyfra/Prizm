import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { TZyfraButtonIconPosision } from '@digital-plant/zyfra-components';

@Component({
  selector: 'zui-example-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {
  // List inputs
  public styleClass: string;
  public label = 'Button Name';


  // list
  public readonly typeVariants: ReadonlyArray<'button' | 'submit' | 'reset'> = [
    'submit',
    'reset',
    'button',
  ];
  public type = this.typeVariants[0];

  public icon: string;

  public readonly iconPosVariants: ReadonlyArray<TZyfraButtonIconPosision> = [
    'left',
    'right',
    'top',
    'bottom'
  ];
  public iconPos: TZyfraButtonIconPosision = this.iconPosVariants[0];
  public disabled = false;
  public badge: string;
  public style: string;

  public readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/import-module.md'
    );

  public readonly example2: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/1/template.ts'),
    HTML: import('!!raw-loader!./examples/1/template.html'),
  };

  public readonly example1: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/2/template.ts'),
    HTML: import('!!raw-loader!./examples/2/template.html'),
  };
}
