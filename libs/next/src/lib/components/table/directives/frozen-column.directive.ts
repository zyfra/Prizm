import { Directive } from '@angular/core';
import { FrozenColumn } from 'primeng/table';

@Directive({
  selector: '[zuiFrozenColumn]',
})
export class ZuiFrozenColumnDirective extends FrozenColumn {}
