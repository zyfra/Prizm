import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';

type TCheckboxSize = 'l' | 's';

@Component({
  templateUrl: './checkbox-example.component.html',
  styleUrls: ['./checkbox-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxExampleComponent {
  public checked = false;
  public label = 'Свойство 1';
  public disabled = false;
  public indeterminate = false;

  public sizeVariants: TCheckboxSize[] = ['l', 's'];
  public size: TCheckboxSize = this.sizeVariants[1];

  readonly exampleBasicCheckbox: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/checkbox-basic-example/checkbox-basic-example.component'),
    HTML: import('!!raw-loader!./examples/checkbox-basic-example/checkbox-basic-example.component.html'),
  };

  readonly checkboxGroup: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/checkbox-group-example/checkbox-group-example.component'),
    HTML: import('!!raw-loader!./examples/checkbox-group-example/checkbox-group-example.component.html'),
  };

  readonly exampleReactiveFormCheckbox: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/checkbox-form-example/checkbox-form-example.component'),
    HTML: import('!!raw-loader!./examples/checkbox-form-example/checkbox-form-example.component.html'),
    LESS: import('./examples/checkbox-form-example/checkbox-form-example.component.less?raw'),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
