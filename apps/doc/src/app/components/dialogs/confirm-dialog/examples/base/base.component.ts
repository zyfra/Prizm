import { Component } from '@angular/core';
import { PzmConfirmDialogService, PzmOverlayInsidePlacement } from '@digital-plant/zui-components';
import { takeUntil } from 'rxjs/operators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';

@Component({
  selector: 'pzm-dialog-service-example',
  templateUrl: './base.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `],
  providers: [
    PzmDestroyService
  ]
})
export class PzmDialogServiceExampleComponent {
  public positionVariants: PzmOverlayInsidePlacement[] = Object.values(PzmOverlayInsidePlacement);
  public position: PzmOverlayInsidePlacement = PzmOverlayInsidePlacement.CENTER;
  public backdrop = true;

  constructor(
    private readonly confirmDialogService: PzmConfirmDialogService,
    private readonly destroy$: PzmDestroyService,
  ) {}

  public show(): void {
    this.confirmDialogService
      .open(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        {
          width: '500px',
          position: this.position,
          backdrop: this.backdrop,
          size: 'm'
        }
      ).pipe(
        takeUntil(this.destroy$)
    ).subscribe();
  }
}
