import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZuiBaseDialogContext,
  ZuiDialogOptions,
  ZuiDialogService,
  ZuiDialogSize,
  ZuiOverlayInsidePlacement,
  ZuiOverscrollMode,
  zuiPure,
} from '@digital-plant/zui-components';
import { generatePolymorphVariants } from '../../../util';

@Component({
  selector: 'zui-tooltip-example',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  public overscrollVariants: ReadonlyArray<ZuiOverscrollMode> = [
    'scroll',
    'all',
    'none',
  ];
  public overscroll: ZuiOverscrollMode = this.overscrollVariants[0];
  public positionVariants: ZuiOverlayInsidePlacement[] = Object.values(ZuiOverlayInsidePlacement);
  public position: ZuiOverlayInsidePlacement = ZuiOverlayInsidePlacement.CENTER;
  public backdrop = false;
  public height = 'auto';
  public width = '500px';
  public closeWord = 'Продолжить';
  public sizeVariants: ZuiDialogSize[] = ['m', 'l'];
  public size: ZuiDialogSize = 'm';
  public closeable = true;
  public header = 'Static_title_h3 - 16 Medium';
  public content = 'Базовый текст для диалога';
  public footer: PolymorphContent<ZuiBaseDialogContext<any, ZuiDialogOptions<any, any>>> = null;

  public readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  public readonly exampleBasic: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/base.component.ts'),
    HTML: import('!!raw-loader!./examples/base/base.component.html'),
  };

  constructor(
    @Inject(ZuiDialogService) private readonly dialogService: ZuiDialogService,
  ) {}

  @zuiPure
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
