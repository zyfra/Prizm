import { Component, DestroyRef, Inject, TemplateRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrizmSidebarService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsCircleXmarkFill } from '@prizm-ui/icons/full/source';
import { of } from 'rxjs';

@Component({
  selector: 'prizm-sidebar-custom-header-template-example',
  templateUrl: './custom-header-template.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSidebarCustomHeaderTemplateExampleComponent {
  public positionVariants: PrizmOverlayInsidePlacement[] = [
    PrizmOverlayInsidePlacement.LEFT,
    PrizmOverlayInsidePlacement.RIGHT,
  ];
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;
  public dismissible = false;
  public canClose = true;

  private readonly destroyRef = inject(DestroyRef);

  @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;
  @ViewChild('outerTemplate') outerTemplate!: TemplateRef<any>;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {
    this.iconsFullRegistry.registerIcons(prizmIconsCircleXmarkFill);
  }

  public show(): void {
    this.sidebarService
      .open(
        `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        {
          zIndex: 20,
          outerContent: this.outerTemplate,
          closeable: true,
          width: '400px',
          canClose: () => of(this.canClose),
          position: this.position,
          dismissible: this.dismissible,
          backdrop: this.backdrop,
          headerTemplate: this.headerTemplate,
          size: 'm',
        }
      )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
