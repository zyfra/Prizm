import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  PzmBaseDialogContext,
  PzmDialogOptions,
  PzmDialogService,
  PzmDialogSize,
  PzmOverlayInsidePlacement,
  PzmOverscrollMode,
  pzmPure,
} from '@digital-plant/zui-components';
import { generatePolymorphVariants } from '../../../util';

@Component({
  selector: 'pzm-tooltip-example',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  public overscrollVariants: ReadonlyArray<PzmOverscrollMode> = [
    'scroll',
    'all',
    'none',
  ];
  public overscroll: PzmOverscrollMode = this.overscrollVariants[0];
  public positionVariants: PzmOverlayInsidePlacement[] = Object.values(PzmOverlayInsidePlacement);
  public position: PzmOverlayInsidePlacement = PzmOverlayInsidePlacement.CENTER;
  public backdrop = false;
  public height = 'auto';
  public width = '500px';
  public closeWord = 'Продолжить';
  public sizeVariants: PzmDialogSize[] = ['m', 'l'];
  public size: PzmDialogSize = 'm';
  public closeable = true;
  public header = 'Static_title_h3 - 16 Medium';
  public content = 'Базовый текст для диалога';
  public footer: PolymorphContent<PzmBaseDialogContext<any, PzmDialogOptions<any, any>>> = null;

  public readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  public readonly exampleBasic: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/base.component.ts'),
    HTML: import('!!raw-loader!./examples/base/base.component.html'),
  };

  constructor(
    @Inject(PzmDialogService) private readonly dialogService: PzmDialogService,
  ) {}

  @pzmPure
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
