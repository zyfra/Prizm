import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { PrizmSidebarService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-sidebar-custom-wrapper-style-example',
  templateUrl: './custom-wrapper-style.component.html',
})
export class PrizmSidebarCustomWrapperStyleExampleComponent {
  @ViewChild('contentExample') contentExample: TemplateRef<any>;
  public backdrop = false;
  public dismissible = false;

  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}

  public show(): void {
    this.sidebarService
      .open(this.contentExample, {
        closeable: true,
        header: 'Header',
        width: '400px',
        contentWrapperStyle: 'padding: 0',
        headerWrapperStyle: '',
        footerWrapperStyle: '',
        cancelButton: 'Закрыть',
        confirmButton: 'OK',
        backdrop: this.backdrop,
        dismissible: this.dismissible,
        size: 'm',
      })
      .subscribe();
  }
}
