import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmTabComponent } from '@prizm-ui/components';

@Directive({
  selector: '[prizmTabMenuItem]',
})
export class PrizmTabMenuItemDirective implements OnInit {
  constructor(
    private readonly templateRef: TemplateRef<PrizmTabComponent>,
    private readonly viewContainer: ViewContainerRef,
  ) {
  }

  public ngOnInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
