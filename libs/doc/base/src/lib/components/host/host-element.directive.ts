import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { PrizmDocHostElementService } from '@prizm/doc-base';

@Directive({
  selector: '[prizmDocHostElement]',
})
export class PrizmDocHostElementDirective implements OnInit {
  @Input() prizmDocHostElement: any;
  constructor(
    private readonly el: ElementRef,
    private readonly hostElementService: PrizmDocHostElementService
  ) {}

  public ngOnInit(): void {
    this.hostElementService.setHostElement(this.prizmDocHostElement);
  }
}
