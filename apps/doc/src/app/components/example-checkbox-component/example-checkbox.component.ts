import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { TZuiCheckboxState } from '@digital-plant/zui-components';

type TCheckboxSize = 'l' | 's';

@Component({
  templateUrl: './example-checkbox.component.html',
  styleUrls: ['./example-checkbox.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleCheckboxComponent {
  public value = 'property1';
  public label = 'Свойство 1';
  public disabled = false;

  public sizeVariants: TCheckboxSize[] = ['l', 's'];
  public stateVariants: TZuiCheckboxState[] = ['unselected', 'selected', 'indeterminate'];
  public state: TZuiCheckboxState = this.stateVariants[0];
  public size: TCheckboxSize = this.sizeVariants[1];

  readonly exampleBasicCheckbox: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/checkbox-example-base/checkbox-example-base.component'),
    HTML: import('!!raw-loader!./examples/checkbox-example-base/checkbox-example-base.component.html'),
    LESS: import('!!raw-loader!./examples/checkbox-example-base/checkbox-example-base.component.less'),
  };

  readonly exampleReactiveFormCheckbox: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/checkbox-example-form/checkbox-example-form.component'),
    HTML: import('!!raw-loader!./examples/checkbox-example-form/checkbox-example-form.component.html'),
    LESS: import('!!raw-loader!./examples/checkbox-example-form/checkbox-example-form.component.less'),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/import-module.md');
}
