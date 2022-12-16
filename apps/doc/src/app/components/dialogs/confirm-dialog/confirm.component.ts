import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/taiga-ui/addon-doc';
import {
  PolymorphContent,
  PrizmBaseDialogContext,
  PrizmConfirmDialogOptions,
  PrizmConfirmDialogResultDefaultType,
  PrizmConfirmDialogService,
  PrizmDialogSize,
  PrizmOverlayInsidePlacement,
  PrizmOverscrollMode,
} from '@prizm-ui/components';
import { prizmPure } from '@prizm-ui/core';
import { generatePolymorphVariants } from '../../../util';

@Component({
  selector: 'prizm-tooltip-example',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmComponent {
  public overscrollVariants: ReadonlyArray<PrizmOverscrollMode> = [
    'scroll',
    'all',
    'none',
  ];
  public overscroll: PrizmOverscrollMode = this.overscrollVariants[0];
  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);
  public position: PrizmOverlayInsidePlacement = PrizmOverlayInsidePlacement.CENTER;
  public backdrop = true;
  public height = 'auto';
  public width = '500px';
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  public size: PrizmDialogSize = 'm';

  public readonly defaultTitle = 'Вы уверены, что хотите перейти на следующий этап?';
  public readonly defaultDescription = `Дальнейшее редактирование этого раздела
будет недоступно`;
  public title: PolymorphContent<PrizmBaseDialogContext<PrizmConfirmDialogResultDefaultType,PrizmConfirmDialogOptions>> = this.defaultTitle;
  public description: PolymorphContent<PrizmBaseDialogContext<PrizmConfirmDialogResultDefaultType,PrizmConfirmDialogOptions>> = this.defaultDescription;

  public confirmButton = 'Перейти на следующий этап'
  public cancelButton = 'Вернуться к текущему этапу'
  public supportButton: string | null = null
  public showByVertical = true;

  readonly items = [
    'One',
    'Two',
    'Three',
  ]

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
    @Inject(PrizmConfirmDialogService) private readonly dialogConfirmService: PrizmConfirmDialogService,
  ) {}

  @prizmPure
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
