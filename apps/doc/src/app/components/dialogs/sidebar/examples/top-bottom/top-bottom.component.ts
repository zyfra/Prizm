import { Component, Inject } from '@angular/core';
import { PzmOverlayInsidePlacement, ZuiSidebarService } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-sidebar-top-bottom-example',
  templateUrl: './top-bottom.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiSidebarTopBottomExampleComponent {
  public positionVariants: PzmOverlayInsidePlacement[] = [
    PzmOverlayInsidePlacement.TOP,
    PzmOverlayInsidePlacement.BOTTOM,
  ];
  public position: PzmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;

  constructor(
    @Inject(ZuiSidebarService) private readonly sidebarService: ZuiSidebarService,
  ) {}

  public show(): void {
    this.sidebarService
      .open(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, {
        closeable: true,
        header: 'Header',
        height: 'auto',
        closeWord: 'Продолжить',
        position: this.position,
        backdrop: this.backdrop,
        size: 'm'
      })
      .subscribe();
  }
}
