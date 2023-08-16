import { Component, ElementRef, Inject, TemplateRef, ViewChild } from '@angular/core';
import { PrizmOverlayInsidePlacement, PrizmSidebarService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-sidebar-with-parent-example',
  templateUrl: './with-parent.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSidebarWithParentExampleComponent {
  @ViewChild('contentExample') contentExample: TemplateRef<any>;
  @ViewChild('parentPanel') parentPanel: ElementRef<any>;
  public positionVariants: PrizmOverlayInsidePlacement[] = [
    PrizmOverlayInsidePlacement.LEFT,
    PrizmOverlayInsidePlacement.RIGHT,
    PrizmOverlayInsidePlacement.TOP,
    PrizmOverlayInsidePlacement.BOTTOM,
  ];
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;
  public dismissible = false;

  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}

  public show(): void {
    this.sidebarService
      .open(this.contentExample, {
        closeable: true,
        header: 'Header',
        width: '400px',
        height: '200px',
        cancelButton: 'Закрыть',
        confirmButton: 'OK',
        position: this.position,
        backdrop: this.backdrop,
        dismissible: this.dismissible,
        size: 'm',
        parentContainer: this.parentPanel.nativeElement,
        styleVars: (
          [
            PrizmOverlayInsidePlacement.TOP,
            PrizmOverlayInsidePlacement.BOTTOM,
          ] as Array<PrizmOverlayInsidePlacement>
        ).includes(this.position)
          ? {
              sidebarContentPadding: '5px 10px',
            }
          : undefined,
      })
      .subscribe();
  }
}
