import { Directive, Input } from '@angular/core';
import { ReorderableRowHandle } from 'primeng/table';

@Directive({
  selector: '[zuiReordableRowHandler]',
})
export class ZuiReordableRowHandlerDirective extends ReorderableRowHandle {
  @Input('zuiReordableRowHandler') override index: number;
}
