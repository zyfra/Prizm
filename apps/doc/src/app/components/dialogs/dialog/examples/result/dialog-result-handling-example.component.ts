import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDialogService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';

@Component({
  selector: 'prizm-dialog-service-result-handling-example',
  templateUrl: './dialog-result-handling-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmDialogServiceResultHandlingExampleComponent {
  @ViewChild('footerTemp', { read: TemplateRef }) footerTemp!: TemplateRef<any>;
  @ViewChild('content', { read: TemplateRef }) content!: TemplateRef<any>;
  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(PrizmOverlayInsidePlacement);
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public control = new UntypedFormControl('');
  public result: unknown;

  constructor(@Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService) {}

  public show(): void {
    this.dialogService
      .open(this.content, {
        closeable: true,
        header: 'Header',
        width: 500,
        footer: this.footerTemp,
        position: this.position,
        backdrop: false,
        size: 'm',
      })
      .subscribe(result => {
        this.result = result;
      });
  }
}
