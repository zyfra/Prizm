import { Directive } from '@angular/core';
import { PrizmDocHostElementService } from './host-element.service';

@Directive({
  selector: `[prizmDocHost]`,
  providers: [PrizmDocHostElementService],
})
export class PrizmDocHostDirective {}
