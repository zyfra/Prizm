import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  IconDefs,
  PolymorphContent,
  PrizmAppearance,
  PrizmAppearanceType,
  PrizmBaseDialogContext,
  PrizmContent,
  PrizmDialogSize,
  PrizmOverlayInsidePlacement,
  PrizmOverscrollMode,
  PrizmSidebarOptions,
  PrizmSidebarService,
} from '@prizm-ui/components';
import { generatePolymorphVariants } from '../../../util';
import { prizmPure } from '@prizm-ui/core';

@Component({
  selector: 'prizm-tooltip-example',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public pseudoState = '';
  public focusable = false;

  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  iconVariants: ReadonlyArray<PrizmContent> = ['', ...IconDefs.reduce((a, c) => a.concat(c.data), [])];
  icon: PrizmContent = this.iconVariants[0];
  iconRight: PrizmContent = this.iconVariants[0];
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

  public overscrollVariants: ReadonlyArray<PrizmOverscrollMode> = ['scroll', 'all', 'none'];
  public overscroll: PrizmOverscrollMode = this.overscrollVariants[0];
  public positionVariants: any = ['t', 'b', 'l', 'r'];
  public position: PrizmOverlayInsidePlacement = PrizmOverlayInsidePlacement.LEFT;
  public backdrop = false;
  public height = 'auto';
  public width = '500px';
  public closeWord = '????????????????????';
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  public size: PrizmDialogSize = 'm';
  public closeable = true;
  public header = 'Static_title_h3 - 16 Medium';
  public content = '?????????????? ?????????? ?????? ??????????????';
  public footer: PolymorphContent<PrizmBaseDialogContext<PrizmSidebarOptions<any>>> = null;

  public readonly exampleModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBasic: TuiDocExample = {
    TypeScript: import('./examples/base/base.component.ts?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };

  public readonly exampleTopBottom: TuiDocExample = {
    TypeScript: import('./examples/top-bottom/top-bottom.component.ts?raw'),
    HTML: import('./examples/top-bottom/top-bottom.component.html?raw'),
  };

  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}

  @prizmPure
  public generatePolymorphVariants(...content: PolymorphContent[]): any[] {
    return generatePolymorphVariants(...content);
  }

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
        size: this.size,
      })
      .subscribe(result => console.log('result from sidebar', { result }));
  }
}
