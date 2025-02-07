import { Component, DestroyRef, inject, Inject, TemplateRef, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrizmSidebarService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';

@Component({
  selector: 'prizm-sidebar-only-confirm-button-example',
  templateUrl: './only-confirm-button.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSidebarOnlyConfirmButtonExampleComponent {
  @ViewChild('contentExample') contentExample!: TemplateRef<any>;
  public positionVariants: PrizmOverlayInsidePlacement[] = [
    PrizmOverlayInsidePlacement.LEFT,
    PrizmOverlayInsidePlacement.RIGHT,
  ];
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;
  public dismissible = false;

  private readonly destroyRef = inject(DestroyRef);

  constructor(@Inject(PrizmSidebarService) private readonly sidebarService: PrizmSidebarService) {}

  public show(): void {
    this.sidebarService
      .open(this.contentExample, {
        closeable: true,
        headerTemplate: 'Header',
        width: '400px',
        cancelButton: null,
        supportButton: null,
        confirmButton: 'Закрыть',
        position: this.position,
        backdrop: this.backdrop,
        dismissible: this.dismissible,
        size: 'm',
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
