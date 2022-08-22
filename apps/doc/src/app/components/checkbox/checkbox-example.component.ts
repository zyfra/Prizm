import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { TZuiCheckboxState } from '@digital-plant/zui-components';

type TCheckboxSize = 'l' | 's';

@Component({
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxExampleComponent {
  public value = 'property1';
  public label = 'Свойство 1';
  public disabled = false;

  public sizeVariants: TCheckboxSize[] = ['l', 's'];
  public stateVariants: TZuiCheckboxState[] = ['unselected', 'selected', 'indeterminate'];
  public state: TZuiCheckboxState = this.stateVariants[0];
  public size: TCheckboxSize = this.sizeVariants[1];

  readonly exampleBasicCheckbox: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/checkbox-basic-example/checkbox-basic-example.component'),
    HTML: import('!!raw-loader!./examples/checkbox-basic-example/checkbox-basic-example.component.html'),
    LESS: import('!!raw-loader!./examples/checkbox-basic-example/checkbox-basic-example.component.less'),
  };

  readonly exampleReactiveFormCheckbox: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/checkbox-form-example/checkbox-form-example.component'),
    HTML: import('!!raw-loader!./examples/checkbox-form-example/checkbox-form-example.component.html'),
    LESS: import('!!raw-loader!./examples/checkbox-form-example/checkbox-form-example.component.less'),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
