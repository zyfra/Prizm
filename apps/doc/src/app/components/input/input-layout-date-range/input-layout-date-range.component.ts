import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PrizmDay,
  PrizmDayRange,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-layout-date-range-example',
  templateUrl: './input-layout-date-range.component.html',
  styleUrls: ['./input-layout-date-range.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLayoutDateRangeComponent {
  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly dateKey = 'PrizmLayoutInputDateRangeComponent';
  val!: PrizmDayRange;
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

  public label = 'Период';
  public testIdPostfix!: string;
  public dateControl = new UntypedFormControl();
  public placeholder = 'Выберите период';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public hideClearButtonHint: boolean | null = null;
  public hideHintVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public minMaxVariants = [
    new PrizmDay(2015, 3, 15),
    '2018-11-18T08:04:30+00:00',
    '2022-09-06T13:56:13.757Z',
    new Date(2027, 1, 1, 30, 0, 0),
    'invalid date string',
  ];
  public min = this.minMaxVariants[0];
  public max = this.minMaxVariants[3];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-layout-date-range-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-layout-date-range-base-example.component.html?raw'),
  };

  readonly exampleDisabled: TuiDocExample = {
    TypeScript: import('./examples/disabled/input-layout-date-range-disabled-example.component.ts?raw'),
    HTML: import('./examples/disabled/input-layout-date-range-disabled-example.component.html?raw'),
  };

  readonly exampleListDate: TuiDocExample = {
    TypeScript: import('./examples/list/input-layout-date-range-list-example.component.ts?raw'),
    HTML: import('./examples/list/input-layout-date-range-list-example.component.html?raw'),
  };

  readonly exampleNativeDate: TuiDocExample = {
    TypeScript: import('./examples/native-date/input-layout-native-date-range-base-example.component.ts?raw'),
    HTML: import('./examples/native-date/input-layout-native-date-range-base-example.component.html?raw'),
  };
}
