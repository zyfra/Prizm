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
  PrizmSidebarResultDefaultType,
  PrizmSidebarService,
  PrizmSize,
} from '@prizm-ui/components';
import { generatePolymorphVariants } from '../../../util';
import { prizmPure } from '@prizm-ui/core';
import { of } from 'rxjs';

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
  public canClose = true;

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

  public overscrollVariants: ReadonlyArray<PrizmOverscrollMode> = ['scroll', 'all', 'none'];
  public overscroll: PrizmOverscrollMode = this.overscrollVariants[0];
  public positionVariants: any = ['t', 'b', 'l', 'r'];
  public position: PrizmOverlayInsidePlacement = PrizmOverlayInsidePlacement.LEFT;
  public backdrop = false;
  public zIndex = 20;
  public dismissible = false;
  public height = 'auto';
  public width = '500px';
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  public size: PrizmDialogSize = 'm';
  public closeable = true;
  public hideFooter = false;
  public header = 'Static_title_h3 - 16 Medium';
  public content = 'Базовый текст для диалога';
  public footer: PolymorphContent<
    PrizmBaseDialogContext<PrizmSidebarResultDefaultType, PrizmSidebarOptions<unknown>>
  > = null;

  public readonly exampleModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBasic: TuiDocExample = {
    TypeScript: import('./examples/base/base.component.ts?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };
  public readonly exampleOnlyConfirmButton: TuiDocExample = {
    TypeScript: import('./examples/only-confirm-button/only-confirm-button.component.ts?raw'),
    HTML: import('./examples/only-confirm-button/only-confirm-button.component.html?raw'),
  };

  public readonly exampleCustomClose: TuiDocExample = {
    TypeScript: import('./examples/custom-close-guard/custom-close-guard.component.ts?raw'),
    HTML: import('./examples/custom-close-guard/custom-close-guard.component.html?raw'),
  };

  public readonly exampleHiddenFooter: TuiDocExample = {
    TypeScript: import('./examples/hidden-footer/hidden-footer.component.ts?raw'),
    HTML: import('./examples/hidden-footer/hidden-footer.component.html?raw'),
  };

  public readonly exampleTopBottom: TuiDocExample = {
    TypeScript: import('./examples/top-bottom/top-bottom.component.ts?raw'),
    HTML: import('./examples/top-bottom/top-bottom.component.html?raw'),
  };

  public readonly exampleCustomHeader: TuiDocExample = {
    TypeScript: import('./examples/custom-header-template/custom-header-template.component.ts?raw'),
    HTML: import('./examples/custom-header-template/custom-header-template.component.html?raw'),
  };

  public readonly exampleCustomButton: TuiDocExample = {
    TypeScript: import('./examples/custom-button/custom-button-template.component.ts?raw'),
    HTML: import('./examples/custom-button/custom-button-template.component.html?raw'),
  };

  public readonly exampleWithParent: TuiDocExample = {
    TypeScript: import('./examples/with-parent/with-parent.component.ts?raw'),
    HTML: import('./examples/with-parent/with-parent.component.html?raw'),
  };

  public readonly exampleCustomWrapperStyle: TuiDocExample = {
    TypeScript: import('./examples/custom-wrapper-style/custom-wrapper-style.component.ts?raw'),
    HTML: import('./examples/custom-wrapper-style/custom-wrapper-style.component.html?raw'),
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
        zIndex: this.zIndex,
        backdrop: this.backdrop,
        footer: this.footer,
        dismissible: this.dismissible,
        header: this.header,
        width: this.width,
        height: this.height,
        hideFooter: this.hideFooter,
        overscroll: this.overscroll,
        position: this.position,
        canClose: () => of(this.canClose),
        size: this.size,
      })
      .subscribe(result => console.log('result from sidebar', { result }));
  }
}
