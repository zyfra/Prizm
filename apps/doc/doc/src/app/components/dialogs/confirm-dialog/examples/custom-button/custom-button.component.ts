import { Component } from '@angular/core';
import { PrizmConfirmDialogService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';
import { delay, startWith, takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { of } from 'rxjs';

@Component({
  selector: 'prizm-dialog-custom-button-example',
  templateUrl: './custom-button.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
  providers: [PrizmDestroyService],
})
export class PrizmDialogCustomButtonExampleComponent {
  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);
  public position: PrizmOverlayInsidePlacement = PrizmOverlayInsidePlacement.CENTER;
  public backdrop = true;

  constructor(
    private readonly confirmDialogService: PrizmConfirmDialogService,
    private readonly destroy$: PrizmDestroyService
  ) {}

  public show(): void {
    this.confirmDialogService
      .open(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        {
          width: '500px',
          position: this.position,
          backdrop: this.backdrop,
          confirmButton: {
            text: 'ПОДТВЕДИТЬ',
            appearance: 'success',
            disabled: of(false).pipe(delay(5000), startWith(true)),
            showLoader: of(false).pipe(delay(5000), startWith(true)),
            action: context => {
              console.log('CLICK ON CONFIRM BUTTON');
              context.completeWith('SUCCESS');
            },
          },
          size: 'm',
        }
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
