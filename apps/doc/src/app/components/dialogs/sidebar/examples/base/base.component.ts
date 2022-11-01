import {Component, Inject} from '@angular/core';
import { ZuiSidebarService, PzmOverlayInsidePlacement } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-sidebar-service-example',
  templateUrl: './base.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiSidebarServiceExampleComponent {
  public positionVariants: PzmOverlayInsidePlacement[] = [
    PzmOverlayInsidePlacement.LEFT,
    PzmOverlayInsidePlacement.RIGHT,
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
        width: '400px',
        closeWord: 'Продолжить',
        position: this.position,
        backdrop: this.backdrop,
        size: 'm'
      })
      .subscribe();
  }
}
