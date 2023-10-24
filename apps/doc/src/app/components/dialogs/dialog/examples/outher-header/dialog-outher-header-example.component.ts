import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { PrizmDialogService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';

@Component({
  selector: 'prizm-dialog-outer-header-example',
  templateUrl: './dialog-outher-header-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }

      .header {
        border-bottom: 1px solid var(--prizm-border-widget);
        padding: var(--prizm-dialog-header-padding, 14px 16px);
        display: flex;
        justify-content: space-between;
        font-style: var(--prizm-dialog-header-font-style, normal);
        font-weight: var(--prizm-dialog-header-font-weight, 600);
        font-size: var(--prizm-dialog-header-font-size, var(--prizm-dialog-font-size, 14px));
        color: var(--prizm-dialog-header-text, var(--prizm-text-contrast));
      }
    `,
  ],
})
export class PrizmDialogOuterHeaderExampleComponent {
  @ViewChild('outerHeaderTemp', { read: TemplateRef }) outerHeaderTemp!: TemplateRef<any>;
  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;
  public dismissible = true;

  constructor(@Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService) {}

  public show(): void {
    this.dialogService
      .open(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        {
          closeable: true,
          outerHeader: this.outerHeaderTemp,
          width: 500,
          header: 'Окно',
          closeWord: 'Закрыть',
          context: {
            customNumber: 1,
          },
          position: this.position,
          dismissible: this.dismissible,
          backdrop: this.backdrop,
          size: 'm',
        }
      )
      .subscribe();
  }
}
