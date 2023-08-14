import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { PrizmSidebarService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';
import { of } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'prizm-sidebar-custom-button-template-example',
  templateUrl: './custom-button-template.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSidebarCustomButtonTemplateExampleComponent {
  public positionVariants: PrizmOverlayInsidePlacement[] = [
    PrizmOverlayInsidePlacement.LEFT,
    PrizmOverlayInsidePlacement.RIGHT,
  ];
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;
  public dismissible = false;
  public canClose = true;

  @ViewChild('headerTemplate') headerTemplate: TemplateRef<any>;
  @ViewChild('outerTemplate') outerTemplate: TemplateRef<any>;

  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}

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
          headerTemplate: this.headerTemplate,
          size: 'm',
        }
      )
      .subscribe();
  }
}
