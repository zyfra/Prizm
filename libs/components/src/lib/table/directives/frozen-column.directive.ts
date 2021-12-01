import { Directive } from '@angular/core';
import { FrozenColumn } from 'primeng/table';

@Directive({
  selector: '[zyfraFrozenColumn]'
})
export class ZyfraFrozenColumnDirective extends FrozenColumn {}
