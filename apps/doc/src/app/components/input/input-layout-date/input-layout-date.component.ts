import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDay, PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-layout-date-example',
  templateUrl: './input-layout-date.component.html',
  styleUrls: ['./input-layout-date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLayoutDateComponent {
  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly dateKey = 'PrizmInputLayoutDateComponent';
  public readOnly = false;
  val!: PrizmDay;
  public pseudoInvalid = false;
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public focusable = true;
  public pseudoState = '';
  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));

  public label = 'Абсолютное';
  public placeholder = 'Выберите дату';
  public testIdPostfix!: string;
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  public minMaxVariants = [
    new PrizmDay(2015, 3, 15),
    '2018-11-18T08:04:30+00:00',
    '2022-09-06T13:56:13.757Z',
    new Date(2027, 1, 1, 30, 0, 0),
    'invalid date string',
  ];
  public min = this.minMaxVariants[0];
  public max = this.minMaxVariants[3];

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public hideClearButtonHint: boolean | null = null;
  public hideHintVariants: ReadonlyArray<boolean | null> = [null, false, true];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-layout-date-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-layout-date-base-example.component.html?raw'),
  };

  readonly exampleNative: TuiDocExample = {
    TypeScript: import('./examples/native-date/input-native-date-base-example.component.ts?raw'),
    HTML: import('./examples/native-date/input-native-date-base-example.component.html?raw'),
  };

  readonly exampleDateProvider: TuiDocExample = {
    TypeScript: import('./examples/date-provider/input-date-provider-example.component.ts?raw'),
    HTML: import('./examples/date-provider/input-date-provider-example.component.html?raw'),
  };

  readonly exampleDouble: TuiDocExample = {
    TypeScript: import('./examples/range-separate/input-layout-date-range-separate-example.component.ts?raw'),
    HTML: import('./examples/range-separate/input-layout-date-range-separate-example.component.html?raw'),
  };
}
