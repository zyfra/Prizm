import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  PRIZM_HINT_DEFAULT_OPTIONS,
  PrizmHintOptions,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmOverlayOutsidePlacement,
} from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-input-mask-example',
  templateUrl: './input-mask-example.component.html',
  styleUrls: ['./input-mask-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputMaskExampleComponent {
  public mask = '00:00';
  public value = '';
  public testIdPostfix!: string;

  public label = 'Заголовок';
  public placeholder = '';

  public outer!: false;

  get sizeVariants(): ReadonlyArray<PrizmInputSize> {
    return this.outer ? ['s', 'm', 'l'] : ['m', 'l'];
  }
  public size = this.sizeVariants[0];

  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];
  public border = true;

  public disabled = false;

  public forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  public forceClear = this.forceClearVariants[0];

  public hideClearButtonHint: boolean | null = null;
  public hideHintVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public prizmHintCanShow = true;
  public prizmHintDirection: PrizmHintOptions['direction'] = PRIZM_HINT_DEFAULT_OPTIONS.direction;
  public readonly prizmHintDirectionVariants: ReadonlyArray<PrizmHintOptions['direction']> = Object.values(
    PrizmOverlayOutsidePlacement
  );

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public required = false;

  public readonly zyfraInputPhoneExample: TuiDocExample = {
    TypeScript: import('./examples/input-phone-example/input-phone-example.component.ts?raw'),
    HTML: import('./examples/input-phone-example/input-phone-example.component.html?raw'),
  };

  public readonly zyfraInputMaskBasicExample: TuiDocExample = {
    TypeScript: import('./examples/input-mask-basic-example/input-mask-basic-example.component.ts?raw'),
    HTML: import('./examples/input-mask-basic-example/input-mask-basic-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
