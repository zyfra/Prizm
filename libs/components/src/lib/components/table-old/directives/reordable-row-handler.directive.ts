import { Directive, Input } from '@angular/core';
import { ReorderableRowHandle } from 'primeng/table';

@Directive({
  selector: '[prizmReordableRowHandler]',
})
export class PrizmReordableRowHandlerDirective extends ReorderableRowHandle {
  @Input('prizmReordableRowHandler') override index: number;
}
