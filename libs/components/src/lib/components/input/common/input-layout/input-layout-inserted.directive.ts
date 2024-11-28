import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'prizm-input-layout[prizmInputLayoutInserted]',
  standalone: true,
})
export class PrizmInputLayoutInsertedDirective {
  @HostBinding('class')
  elementClass = 'prizm-input-layout-inserted';

  constructor() {}
}
