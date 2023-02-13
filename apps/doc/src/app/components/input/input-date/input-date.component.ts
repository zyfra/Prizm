import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDay, PrizmInputSize, PrizmTime } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-date-example',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateComponent {
  public readOnly = false;
  val: PrizmDay;
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

  public readonly control = new FormControl(new PrizmDay(2017, 0, 15));

  public label = 'Абсолютное';
  public placeholder = 'Выберите дату';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-date-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-date-base-example.component.html?raw'),
  };

  readonly exampleNative: TuiDocExample = {
    TypeScript: import('./examples/native-date/input-native-date-base-example.component.ts?raw'),
    HTML: import('./examples/native-date/input-native-date-base-example.component.html?raw'),
  };

  readonly exampleDouble: TuiDocExample = {
    TypeScript: import('./examples/range-separate/input-date-range-separate-example.component.ts?raw'),
    HTML: import('./examples/range-separate/input-date-range-separate-example.component.html?raw'),
  };
}
