import { Component, ElementRef, Inject, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PrizmOverlayInsidePlacement, PrizmSidebarService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-sidebar-with-parent-example',
  templateUrl: './with-parent.component.html',
})
export class PrizmSidebarWithParentExampleComponent {
  @ViewChild('contentExample') contentExample!: TemplateRef<never>;
  @ViewChild('parentPanel') parentPanel!: ElementRef<never>;
  public positionVariants: PrizmOverlayInsidePlacement[] = [
    PrizmOverlayInsidePlacement.LEFT,
    PrizmOverlayInsidePlacement.RIGHT,
    PrizmOverlayInsidePlacement.TOP,
    PrizmOverlayInsidePlacement.BOTTOM,
  ];
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;
  public dismissible = false;

  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly control = new FormControl(this.items[1], [Validators.required]);

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
        styleVars: {
          sidebarContentPadding: '5px 10px',
        },
      })
      .subscribe();
  }
}
