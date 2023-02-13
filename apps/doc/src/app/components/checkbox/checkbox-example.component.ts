import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

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
    TypeScript: import('./examples/checkbox-basic-example/checkbox-basic-example.component?raw'),
    HTML: import('./examples/checkbox-basic-example/checkbox-basic-example.component.html?raw'),
  };

  readonly checkboxGroup: TuiDocExample = {
    TypeScript: import('./examples/checkbox-group-example/checkbox-group-example.component?raw'),
    HTML: import('./examples/checkbox-group-example/checkbox-group-example.component.html?raw'),
  };

  readonly exampleReactiveFormCheckbox: TuiDocExample = {
    TypeScript: import('./examples/checkbox-form-example/checkbox-form-example.component?raw'),
    HTML: import('./examples/checkbox-form-example/checkbox-form-example.component.html?raw'),
    LESS: import('./examples/checkbox-form-example/checkbox-form-example.component.less?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
