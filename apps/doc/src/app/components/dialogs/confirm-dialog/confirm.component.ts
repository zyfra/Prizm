import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  IconDefs,
  PolymorphContent,
  PrizmAppearance,
  PrizmAppearanceType,
  PrizmBaseDialogContext,
  PrizmConfirmDialogOptions,
  PrizmConfirmDialogResultDefaultType,
  PrizmConfirmDialogService,
  PrizmContent,
  PrizmDialogSize,
  PrizmOverlayInsidePlacement,
  PrizmOverscrollMode,
  PrizmSidebarOptions,
  PrizmSize,
} from '@prizm-ui/components';
import { prizmPure } from '@prizm-ui/core';
import { generatePolymorphVariants } from '../../../util';

@Component({
  selector: 'prizm-tooltip-example',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmComponent {
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public pseudoState = '';
  public focusable = false;

  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  iconVariants: ReadonlyArray<PolymorphContent<{ size: PrizmSize }>> = [
    '',
    ...IconDefs.reduce((a, c) => a.concat(c.data), []),
  ];
  icon: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
  iconRight: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
  appearanceVariants: ReadonlyArray<PrizmAppearance> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];
  appearance: PrizmAppearance = this.appearanceVariants[0];

  appearanceTypeVariants: ReadonlyArray<PrizmAppearanceType> = ['fill', 'outline', 'ghost'];
  appearanceType: PrizmAppearanceType = this.appearanceTypeVariants[0];
  disabled = false;
  showLoader = false;
  public closeWord = 'Продолжить';
  public header = 'Static_title_h3 - 16 Medium';
  public content = 'Базовый текст для диалога';

  public overscrollVariants: ReadonlyArray<PrizmOverscrollMode> = ['scroll', 'all', 'none'];
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
  public title: PolymorphContent<
    PrizmBaseDialogContext<PrizmConfirmDialogResultDefaultType, PrizmConfirmDialogOptions>
  > = this.defaultTitle;
  public description: PolymorphContent<
    PrizmBaseDialogContext<PrizmConfirmDialogResultDefaultType, PrizmConfirmDialogOptions>
  > = this.defaultDescription;

  public confirmButton = 'Перейти на следующий этап';
  public cancelButton = 'Вернуться к текущему этапу';
  public supportButton: string | null = null;
  public showByVertical = true;

  readonly items = ['One', 'Two', 'Three'];

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/base.component.ts?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };

  public readonly exampleHorizontal: TuiDocExample = {
    TypeScript: import('./examples/horizontal/horizontal.component.ts?raw'),
    HTML: import('./examples/horizontal/horizontal.component.html?raw'),
  };
  public readonly exampleFull: TuiDocExample = {
    TypeScript: import('./examples/full/full.component.ts?raw'),
    HTML: import('./examples/full/full.component.html?raw'),
    MODULE: import('./examples/full/full.module?raw'),
  };

  constructor(
    @Inject(PrizmConfirmDialogService) private readonly dialogConfirmService: PrizmConfirmDialogService
  ) {}

  @prizmPure
  public generatePolymorphVariants(...content: PolymorphContent[]): any[] {
    return generatePolymorphVariants(...content);
  }

  public show(): void {
    this.dialogConfirmService
      .open(this.title, {
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
        size: this.size,
      })
      .subscribe(result => console.log('result from dialog', { result }));
  }
}
