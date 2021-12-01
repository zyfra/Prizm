import { Directive, Input } from '@angular/core';
import { ReorderableRowHandle } from 'primeng/table';

@Directive({
  selector: '[zyfraReordableRowHandler]'
})
export class ZyfraReordableRowHandlerDirective extends ReorderableRowHandle {
  @Input('zyfraReordableRowHandler') index: number;
}
