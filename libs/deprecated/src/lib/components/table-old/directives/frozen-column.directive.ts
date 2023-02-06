import { Directive } from '@angular/core';
import { FrozenColumn } from 'primeng/table';

@Directive({
  selector: '[prizmFrozenColumn]',
})
export class PrizmFrozenColumnDirective extends FrozenColumn {}
