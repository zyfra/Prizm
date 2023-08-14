import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDay, PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-layout-month-example',
  templateUrl: './input-layout-month.component.html',
  styleUrls: ['./input-layout-month.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLayoutMonthComponent {
  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly controlKey = 'PrizmInputLayoutMonthComponent';
  public readOnly = false;
  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  val: PrizmDay;
  public pseudoInvalid = false;
  public pseudoHovered = false;
  public readonly = false;
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
  public testIdPostfix: string;
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-layout-month-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-layout-month-base-example.component.html?raw'),
  };
}
