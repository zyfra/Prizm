import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PrizmDay,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmTime,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-layout-month-range-example',
  templateUrl: './input-layout-month-range.component.html',
  styleUrls: ['./input-layout-month-range.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLayoutMonthRangeRangeComponent {
  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public readOnly = false;
  val: PrizmDay;
  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly controlKey = 'PrizmInputLayoutMonthRangeComponent';
  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public readonly control = new UntypedFormControl();

  public label = 'Выберите период';
  public placeholder = 'Выберите месяц';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-layout-month-range-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-layout-month-range-base-example.component.html?raw'),
  };
}
