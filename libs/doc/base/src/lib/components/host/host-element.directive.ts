import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { PrizmDocHostElementService } from '@prizm-ui/doc';

@Directive({
  selector: '[prizmDocHostElement]',
})
export class PrizmDocHostElementDirective implements OnInit {
  @Input() prizmDocHostElement: any;
  @Input() key = 'index';

  constructor(
    private readonly el: ElementRef,
    private readonly hostElementService: PrizmDocHostElementService
  ) {}

  public ngOnInit(): void {
    this.hostElementService.setHostElement(
      this.key,
      this.prizmDocHostElement
    );
  }
}
