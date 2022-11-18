import { Component } from '@angular/core';
import { PrizmConfirmDialogService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-dialog-horizontal-example',
  templateUrl: './horizontal.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `],
  providers: [
    PrizmDestroyService
  ]
})
export class PrizmDialogHorizontalExampleComponent {
  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);
  public position: PrizmOverlayInsidePlacement = PrizmOverlayInsidePlacement.CENTER;
  public backdrop = true;

  constructor(
    private readonly confirmDialogService: PrizmConfirmDialogService,
    private readonly destroy$: PrizmDestroyService,
  ) {}

  public show(): void {
    this.confirmDialogService
      .open(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        {
          position: this.position,
          backdrop: this.backdrop,
          width: '500px',
          size: 'm',
          showByVertical: false
        }
      ).pipe(
        takeUntil(this.destroy$)
    ).subscribe();
  }
}
