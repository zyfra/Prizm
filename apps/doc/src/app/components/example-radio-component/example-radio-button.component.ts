import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

type TRadioButtonSize = 'm' | 'l' | 's';

@Component({
  templateUrl: './example-radio-button.component.html',
  styleUrls: ['./example-radio-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplesRadioButtonComponent {
  public value = 'property1';
  public label = 'Свойство 1';
  public name = 'name';
  public disabled = false;

  public sizeVariants: TRadioButtonSize[] = ['m', 'l', 's'];
  public size: TRadioButtonSize = this.sizeVariants[1];

  readonly exampleBasicRadio: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/radio-button-example-base/radio-button-example-base.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/radio-button-example-base/radio-button-example-base.component.html'
    ),
    LESS: import(
      '!!raw-loader!./examples/radio-button-example-base/radio-button-example-base.component.less'
    ),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/import-module.md');
}
