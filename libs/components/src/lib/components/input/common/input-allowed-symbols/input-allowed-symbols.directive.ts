import { Directive, HostListener, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';

@Directive({
  selector: '[prizmInputAllowedSymbols]',
  providers: [PrizmDestroyService],
})
export class PrizmInputAllowedSymbolsDirective extends DefaultInputInvalidTextClass {
  @Input() prizmInputAllowedSymbols: RegExp | string | string[] | `` = ``;

  @HostListener('keydown', ['$event.key', '$event'])
  block(data: string, event: KeyboardEvent): void | false {
    if (['Meta', 'Control', 'Alt'].includes(data)) {
      return void 0;
    }
    if (
      this.prizmInputAllowedSymbols &&
      ((this.prizmInputAllowedSymbols instanceof RegExp && !data.match(this.prizmInputAllowedSymbols)) ||
        (!(this.prizmInputAllowedSymbols instanceof RegExp) &&
          !(Array.isArray(data) ? data : [data]).find(i => i === data)))
    ) {
      return false;
    }
  }
}
