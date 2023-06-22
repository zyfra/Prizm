import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { PrizmDocHostElementService } from './host-element.service';

@Directive({
  selector: '[prizmDocHostElement]',
})
export class PrizmDocHostElementDirective implements OnInit {
  @Input() prizmDocHostElement: any;
  @Input() prizmDocHostElementKey = 'index';

  constructor(
    private readonly el: ElementRef,
    private readonly hostElementService: PrizmDocHostElementService
  ) {}

  public ngOnInit(): void {
    this.hostElementService.setHostElement(this.prizmDocHostElementKey, this.prizmDocHostElement);
  }
}
