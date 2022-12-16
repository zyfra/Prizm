import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/taiga-ui/addon-doc';
import {
  PolymorphContent,
  PrizmBaseDialogContext,
  PrizmDialogOptions,
  PrizmDialogService,
  PrizmDialogSize,
  PrizmOverlayInsidePlacement,
  PrizmOverscrollMode,
} from '@prizm-ui/components';
import { generatePolymorphVariants } from '../../../util';
import { prizmPure } from '@prizm-ui/core';

@Component({
  selector: 'prizm-tooltip-example',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  public overscrollVariants: ReadonlyArray<PrizmOverscrollMode> = [
    'scroll',
    'all',
    'none',
  ];
  public overscroll: PrizmOverscrollMode = this.overscrollVariants[0];
  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);
  public position: PrizmOverlayInsidePlacement = PrizmOverlayInsidePlacement.CENTER;
  public backdrop = false;
  public height = 'auto';
  public width = '500px';
  public closeWord = 'Продолжить';
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  public size: PrizmDialogSize = 'm';
  public closeable = true;
  public header = 'Static_title_h3 - 16 Medium';
  public content = 'Базовый текст для диалога';
  public footer: PolymorphContent<PrizmBaseDialogContext<any, PrizmDialogOptions<any, any>>> = null;

  public readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  public readonly exampleBasic: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/base.component.ts'),
    HTML: import('!!raw-loader!./examples/base/base.component.html'),
  };

  constructor(
    @Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService,
  ) {}

  @prizmPure
  public generatePolymorphVariants(...content: PolymorphContent[]): any[] {
    return generatePolymorphVariants(...content)
  };

  public show(): void {
    this.dialogService
      .open(this.content, {
        closeable: this.closeable,
        backdrop: this.backdrop,
        header: this.header,
        width: this.width,
        footer: this.footer,
        height: this.height,
        overscroll: this.overscroll,
        position: this.position,
        closeWord: this.closeWord,
        size: this.size
      })
      .subscribe(
        (result) => console.log('result from dialog', {result})
      );
  }
}
