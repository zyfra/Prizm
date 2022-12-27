import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmInputPosition, PrizmInputSize, PrizmInputStatus } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';

@Component({
  selector: 'prizm-textarea-example',
  templateUrl: './textarea-example.component.html',
  styleUrls: ['./textarea-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaExampleComponent {
  public label = 'Заголовок';
  public placeholder = '';

  public outer: false;

  public size: PrizmInputSize = 'l';
  public sizesOuter: PrizmInputSize[] = ['l', 'm', 's'];
  public sizesInner: PrizmInputSize[] = ['l', 'm'];

  public disabled = false;

  height = null;
  width = '20rem';

  public required = false;
  public border = false;
  public status: PrizmInputStatus = 'default';
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositions: PrizmInputPosition[] = ['left', 'center'];
  public forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  public forceClear = this.forceClearVariants[0];

  public readonly zyfraTextareaBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/textarea-basic-example/textarea-basic-example.component.ts'),
    HTML: import('!!raw-loader!./examples/textarea-basic-example/textarea-basic-example.component.html'),
  };

  public readonly zyfraTextareaAutosizeExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/textarea-autosize-example/textarea-autosize-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/textarea-autosize-example/textarea-autosize-example.component.html'
    ),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
