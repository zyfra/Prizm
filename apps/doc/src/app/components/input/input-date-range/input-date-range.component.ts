import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDayRange, PrizmInputSize, PrizmTime } from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-date-range-example',
  templateUrl: './input-date-range.component.html',
  styleUrls: ['./input-date-range.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateRangeComponent {
  public readOnly = false;
  val: any; // PrizmDayRange;
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
  public dateControl = new UntypedFormControl();
  public placeholder = 'Выберите период';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;
  public testIdPostfix!: string;

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-date-range-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-date-range-base-example.component.html?raw'),
  };

  readonly exampleDisabled: TuiDocExample = {
    TypeScript: import('./examples/disabled/input-date-range-disabled-example.component.ts?raw'),
    HTML: import('./examples/disabled/input-date-range-disabled-example.component.html?raw'),
  };

  readonly exampleListDate: TuiDocExample = {
    TypeScript: import('./examples/list/input-date-range-list-example.component.ts?raw'),
    HTML: import('./examples/list/input-date-range-list-example.component.html?raw'),
  };

  readonly exampleNativeDate: TuiDocExample = {
    TypeScript: import('./examples/native-date/input-native-date-range-base-example.component.ts?raw'),
    HTML: import('./examples/native-date/input-native-date-range-base-example.component.html?raw'),
  };
}
