import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PRIZM_FIRST_DAY,
  PRIZM_LAST_DAY,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmYear,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-layout-year-example',
  templateUrl: './input-layout-year-example.component.html',
  styleUrls: ['./input-layout-year-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLayoutYearExampleComponent {
  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly controlKey = 'PrizmInputLayoutYearComponent';

  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public hideClearButtonHint: boolean | null = null;
  public hideHintVariants: ReadonlyArray<boolean | null> = [null, false, true];

  readonly minVariants = [PRIZM_FIRST_DAY, new PrizmYear(2019), new PrizmYear(2007)];

  readonly maxVariants = [PRIZM_LAST_DAY, new PrizmYear(2020), new PrizmYear(2023), new PrizmYear(2015)];

  min = this.minVariants[0];
  max = this.maxVariants[0];

  public readonly control = new UntypedFormControl(new PrizmYear(2017));

  public label = 'Год';
  public placeholder = 'Выберите год';
  public testIdPostfix!: string;
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-layout-year-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-layout-year-base-example.component.html?raw'),
  };
}
