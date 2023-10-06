import { Component, ElementRef, Inject, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PrizmDialogService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';

@Component({
  selector: 'prizm-dialog-service-with-parent-example',
  templateUrl: './dialog-with-parent-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmDialogServiceWithParentExampleComponent {
  @ViewChild('contentExample') contentExample!: TemplateRef<never>;
  @ViewChild('parentPanel') parentPanel!: ElementRef<never>;
  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;
  public dismissible = true;

  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly control = new FormControl(this.items[1], [Validators.required]);

  constructor(@Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService) {}

  public show(): void {
    this.dialogService
      .open(this.contentExample, {
        closeable: true,
        header: 'Header',
        width: 500,
        closeWord: 'Продолжить',
        position: this.position,
        dismissible: this.dismissible,
        parentContainer: this.parentPanel.nativeElement,
        backdrop: this.backdrop,
        size: 'm',
        styleVars: {
          dialogContentPadding: '5px 10px 25px 20px',
        },
      })
      .subscribe();
  }
}
