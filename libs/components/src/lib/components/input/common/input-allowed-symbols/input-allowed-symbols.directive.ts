import { Directive, HostListener, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';
import { unsupportedKeyCharacters } from './const';

@Directive({
  selector: '[prizmInputAllowedSymbols]',
  providers: [PrizmDestroyService],
})
export class PrizmInputAllowedSymbolsDirective extends DefaultInputInvalidTextClass {
  @Input() prizmInputAllowedSymbols: RegExp | string | string[] | `` = ``;

  @HostListener('keydown', ['$event.key', '$event'])
  public block(data: string, event: KeyboardEvent): void | false {
    if (unsupportedKeyCharacters.includes(data)) {
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
