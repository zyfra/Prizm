import { Directive, HostBinding } from '@angular/core';

/**
 *  The directive is used to manage classes for inserted to tables input layout
 *  while the styles themselves are managed directly in the component.
 *  extension for data grids is expected
 */

@Directive({
  selector: 'prizm-input-layout[prizmInputLayoutInserted]',
  standalone: true,
})
export class PrizmInputLayoutInsertedDirective {
  @HostBinding('class')
  elementClass = 'prizm-input-layout-inserted';

  constructor() {}
}
