import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-input-password-example',
  templateUrl: './input-password-example.component.html',
  styleUrls: ['./input-password-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordExampleComponent {
  public label = 'Заголовок';
  public control = new UntypedFormControl();
  public placeholder = '';
  public value = '';
  public testIdPostfix!: string;

  public outer!: false;

  get sizeVariants(): ReadonlyArray<PrizmInputSize> {
    return this.outer ? ['s', 'm', 'l'] : ['m', 'l'];
  }
  public size = this.sizeVariants[0];

  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  public forceClear = this.forceClearVariants[0];

  public hideClearButtonHint: boolean | null = null;
  public hideHintVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public disabled = false;

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];
  public border = true;

  public required = false;

  public readonly zyfraInputPasswordBasicExample: TuiDocExample = {
    TypeScript: import(
      './examples/input-password-basic-example/input-password-basic-example.component.ts?raw'
    ),
    HTML: import('./examples/input-password-basic-example/input-password-basic-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
