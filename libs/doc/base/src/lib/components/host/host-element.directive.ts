import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { PrizmDocHostElementService } from './host-element.service';

@Directive({
  selector: '[prizmDocHostElement]',
})
export class PrizmDocHostElementDirective implements OnInit {
  @Input() prizmDocHostElement: any | any[];
  @Input() prizmDocHostElementKey: string | string[] = 'index';

  constructor(private readonly hostElementService: PrizmDocHostElementService) {}

  public ngOnInit(): void {
    const elementsKeys = Array.isArray(this.prizmDocHostElementKey)
      ? this.prizmDocHostElementKey
      : [this.prizmDocHostElementKey];

    const elementsHost = Array.isArray(this.prizmDocHostElement)
      ? this.prizmDocHostElement
      : [this.prizmDocHostElement];

    for (const idx in elementsKeys) {
      const hostElement = elementsHost[idx];
      const key = elementsKeys[idx];
      this.hostElementService.setHostElement(key, hostElement);
    }
  }
}
