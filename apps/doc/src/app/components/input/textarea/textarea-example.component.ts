import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmScrollbarVisibility,
} from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-textarea-example',
  templateUrl: './textarea-example.component.html',
  styleUrls: ['./textarea-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaExampleComponent {
  public label = 'Заголовок';
  public placeholder = 'Значение';
  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly componentKey = 'PrizmInputTextareaDirective';

  public outer!: false;

  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  searchable = false;
  get sizeVariants(): ReadonlyArray<PrizmInputSize> {
    return this.outer ? ['s', 'm', 'l'] : ['m', 'l'];
  }
  size = this.sizeVariants[0];
  emptyContent = 'Ничего не найдено';
  nullContent = 'Не выбрано';
  minDropdownHeight = 0;
  maxDropdownHeight = 342;
  visibility: PrizmScrollbarVisibility = 'auto';

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public disabled = false;

  height = null;
  testIdPostfix!: string;
  width = '20rem';
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public required = false;
  public border = false;
  public inputPositions: PrizmInputPosition[] = ['left', 'center'];
  public forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  public forceClear = this.forceClearVariants[0];

  public hideClearButtonHint: boolean | null = null;
  public hideHintVariants: ReadonlyArray<boolean | null> = [null, false, true];

  public readonly textareaBasicExample: TuiDocExample = {
    TypeScript: import('./examples/textarea-basic-example/textarea-basic-example.component.ts?raw'),
    HTML: import('./examples/textarea-basic-example/textarea-basic-example.component.html?raw'),
  };

  public readonly textareaAutosizeExample: TuiDocExample = {
    TypeScript: import('./examples/textarea-autosize-example/textarea-autosize-example.component.ts?raw'),
    Module: import('./examples/textarea-autosize-example/textarea-autosize-example.module.ts?raw'),
    HTML: import('./examples/textarea-autosize-example/textarea-autosize-example.component.html?raw'),
  };

  public readonly textareaResizableExample: TuiDocExample = {
    TypeScript: import('./examples/textarea-resizable-example/textarea-resizable-example.component.ts?raw'),
    HTML: import('./examples/textarea-resizable-example/textarea-resizable-example.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
