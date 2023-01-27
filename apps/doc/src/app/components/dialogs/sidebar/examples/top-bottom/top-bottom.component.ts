import { Component, Inject } from '@angular/core';
import { PrizmOverlayInsidePlacement, PrizmSidebarService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-sidebar-top-bottom-example',
  templateUrl: './top-bottom.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSidebarTopBottomExampleComponent {
  public positionVariants: PrizmOverlayInsidePlacement[] = [
    PrizmOverlayInsidePlacement.TOP,
    PrizmOverlayInsidePlacement.BOTTOM,
  ];
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;

  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}

  public show(): void {
    this.sidebarService
      .open(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        {
          closeable: true,
          header: 'Header',
          height: 'auto',
          closeWord: 'Продолжить',
          position: this.position,
          backdrop: this.backdrop,
          size: 'm',
        }
      )
      .subscribe();
  }
}
