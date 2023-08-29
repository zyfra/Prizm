import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { PrizmOverlayInsidePlacement, PrizmSidebarService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-sidebar-custom-wrapper-style-example',
  templateUrl: './custom-wrapper-style.component.html',
})
export class PrizmSidebarCustomWrapperStyleExampleComponent {
  @ViewChild('contentExample') contentExample!: TemplateRef<any>;
  public backdrop = false;
  public dismissible = false;

  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}

  public show(): void {
    this.sidebarService
      .open(this.contentExample, {
        closeable: true,
        header: 'Header',
        width: '400px',
        cancelButton: 'Закрыть',
        position: PrizmOverlayInsidePlacement.LEFT,
        confirmButton: 'OK',
        backdrop: this.backdrop,
        styleVars: {
          sidebarContentPadding: 0,
        },
        dismissible: this.dismissible,
        size: 'm',
      })
      .subscribe();
  }
}
