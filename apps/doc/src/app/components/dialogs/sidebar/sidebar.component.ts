import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZuiBaseDialogContext, ZuiDialogSize,
  PzmOverlayInsidePlacement,
  PzmOverscrollMode,
  pzmPure,
  ZuiSidebarOptions,
  ZuiSidebarService,
} from '@digital-plant/zui-components';
import { generatePolymorphVariants } from '../../../util';

@Component({
  selector: 'zui-tooltip-example',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  public overscrollVariants: ReadonlyArray<PzmOverscrollMode> = [
    'scroll',
    'all',
    'none',
  ];
  public overscroll: PzmOverscrollMode = this.overscrollVariants[0];
  public positionVariants: any = ['t', 'b' , 'l', 'r'];
  public position: PzmOverlayInsidePlacement = PzmOverlayInsidePlacement.LEFT;
  public backdrop = false;
  public height = 'auto';
  public width = '500px';
  public closeWord = 'Продолжить';
  public sizeVariants: ZuiDialogSize[] = ['m', 'l'];
  public size: ZuiDialogSize = 'm';
  public closeable = true;
  public header = 'Static_title_h3 - 16 Medium';
  public content = 'Базовый текст для диалога';
  public footer: PolymorphContent<ZuiBaseDialogContext<ZuiSidebarOptions<any>>> = null;

  public readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  public readonly exampleBasic: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/base.component.ts'),
    HTML: import('!!raw-loader!./examples/base/base.component.html'),
  };

  public readonly exampleTopBottom: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/top-bottom/top-bottom.component.ts'),
    HTML: import('!!raw-loader!./examples/top-bottom/top-bottom.component.html'),
  };

  constructor(
    @Inject(ZuiSidebarService) private readonly sidebarService: ZuiSidebarService,
  ) {}

  @pzmPure
  public generatePolymorphVariants(...content: PolymorphContent[]): any[] {
    return generatePolymorphVariants(...content)
  };

  public show(): void {
    this.sidebarService
      .open(this.content, {
        closeable: this.closeable,
        backdrop: this.backdrop,
        header: this.header,
        width: this.width,
        height: this.height,
        overscroll: this.overscroll,
        position: this.position,
        closeWord: this.closeWord,
        size: this.size
      })
      .subscribe(
        (result) => console.log('result from sidebar', {result})
      );
  }
}
