import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PrizmDay, PrizmInputSize } from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pzm-input-date-example',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateComponent {
  public readonly control = new FormControl(new PrizmDay(2017, 0, 15));

  public label = 'Абсолютное';
  public placeholder = 'Выберите дату';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = [
    'l',
    'm',
    's'
  ]
  public size: PrizmInputSize = 'm';
  public outer = false;


  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/input-date-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/input-date-base-example.component.html'),
  };

  readonly exampleNative: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/native-date/input-native-date-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/native-date/input-native-date-base-example.component.html'),
  };
}
