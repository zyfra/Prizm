import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZuiBaseDialogContext,
  ZuiConfirmDialogOptions,
  ZuiConfirmDialogResultDefaultType,
  ZuiConfirmDialogService,
  ZuiDialogSize,
  ZuiOverlayInsidePlacement,
  ZuiOverscrollMode,
  zuiPure,
} from '@digital-plant/zui-components';
import { generatePolymorphVariants } from '../../../util';

@Component({
  selector: 'zui-tooltip-example',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent {
  public overscrollVariants: ReadonlyArray<ZuiOverscrollMode> = [
    'scroll',
    'all',
    'none',
  ];
  public overscroll: ZuiOverscrollMode = this.overscrollVariants[0];
  public positionVariants: ZuiOverlayInsidePlacement[] = Object.values(ZuiOverlayInsidePlacement);
  public position: ZuiOverlayInsidePlacement = ZuiOverlayInsidePlacement.CENTER;
  public backdrop = true;
  public height = 'auto';
  public width = '500px';
  public sizeVariants: ZuiDialogSize[] = ['m', 'l'];
  public size: ZuiDialogSize = 'm';

  public readonly defaultTitle = 'Вы уверены, что хотите перейти на следующий этап?';
  public readonly defaultDescription = `Дальнейшее редактирование этого раздела
будет недоступно`;
  public title: PolymorphContent<ZuiBaseDialogContext<ZuiConfirmDialogResultDefaultType,ZuiConfirmDialogOptions>> = this.defaultTitle;
  public description: PolymorphContent<ZuiBaseDialogContext<ZuiConfirmDialogResultDefaultType,ZuiConfirmDialogOptions>> = this.defaultDescription;

  public confirmButton = 'Перейти на следующий этап'
  public cancelButton = 'Вернуться к текущему этапу'
  public supportButton: string | null = null
  public showByVertical = true;

  public readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/base.component.ts'),
    HTML: import('!!raw-loader!./examples/base/base.component.html'),
  };

  public readonly exampleHorizontal: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/base.component.ts'),
    HTML: import('!!raw-loader!./examples/base/base.component.html'),
  };


  constructor(
    @Inject(ZuiConfirmDialogService) private readonly dialogConfirmService: ZuiConfirmDialogService,
  ) {}

  @zuiPure
  public generatePolymorphVariants(...content: PolymorphContent[]): any[] {
    return generatePolymorphVariants(...content)
  };

  public show(): void {
    this.dialogConfirmService
      .open(
        this.title,
        {
          backdrop: this.backdrop,
          description: this.description,
          confirmButton: this.confirmButton,
          cancelButton: this.cancelButton,
          supportButton: this.supportButton,
          showByVertical: this.showByVertical,
          height: this.height,
          overscroll: this.overscroll,
          width: this.width,
          position: this.position,
          size: this.size
        }
      ).subscribe(
        (result) => console.log('result from dialog', {result})
      );
  }
}
