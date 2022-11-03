import { Directive } from '@angular/core';
import { FrozenColumn } from 'primeng/table';

@Directive({
  selector: '[pzmFrozenColumn]',
})
export class PzmFrozenColumnDirective extends FrozenColumn {}
