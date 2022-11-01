import { Directive, Input } from '@angular/core';
import { ReorderableRowHandle } from 'primeng/table';

@Directive({
  selector: '[pzmReordableRowHandler]',
})
export class PzmReordableRowHandlerDirective extends ReorderableRowHandle {
  @Input('pzmReordableRowHandler') override index: number;
}
