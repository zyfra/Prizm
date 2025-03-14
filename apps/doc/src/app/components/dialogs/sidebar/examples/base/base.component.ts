import { Component, DestroyRef, inject, Inject, TemplateRef, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrizmSidebarService, PrizmOverlayInsidePlacement } from '@prizm-ui/components';
import { PrizmDocDocumentationComponent } from '@prizm-ui/doc';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'prizm-sidebar-service-example',
  templateUrl: './base.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSidebarServiceExampleComponent {
  @ViewChild('contentExample') contentExample!: TemplateRef<any>;
  @ViewChild('doc') doc!: PrizmDocDocumentationComponent;

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
        header: 'Header',
        width: '400px',
        cancelButton: 'Закрыть',
        confirmButton: 'OK',
        position: this.position,
        backdrop: this.backdrop,
        dismissible: this.dismissible,
        size: 'm',
        testId: this.doc.testIdPostfix,
      })
      .pipe(
        tap({
          complete: () => {
            console.log('COMPLETE');
          },
          next: () => {
            console.log('NEXT');
          },
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
