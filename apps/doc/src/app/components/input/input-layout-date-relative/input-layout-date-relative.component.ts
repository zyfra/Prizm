import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { UntypedFormControl } from '@angular/forms';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-example',
  templateUrl: './input-layout-date-relative.component.html',
  styleUrls: ['./input-layout-date-relative.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLayoutDateRelativeRelativeComponent {
  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly controlKey = 'PrizmInputLayoutDateRelativeComponent';
  public readOnly = false;
  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public canOpen = true;
  public readonly valueControl = new UntypedFormControl();
  public label = 'Относительное';
  public testIdPostfix!: string;
  public placeholder = 'Выберите дату';
  public sizeVariants: ReadonlyArray<PrizmInputSize> = ['l', 'm', 's'];
  public size: PrizmInputSize = 'm';
  public outer = false;
  public disabled = false;
  public showClear = false;

  forceClear: boolean | null = null;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/input-layout-date-relative-base-example.component.ts?raw'),
    HTML: import('./examples/base/input-layout-date-relative-base-example.component.html?raw'),
  };
}
