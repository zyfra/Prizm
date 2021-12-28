import { Directive, HostListener } from '@angular/core';
import { EditableColumn } from 'primeng/table';

@Directive({
  selector: '[zyfraEditableColumn]',
  providers: [{ provide: EditableColumn, useClass: ZyfraEditableColumnDirective }]
})
export class ZyfraEditableColumnDirective extends EditableColumn {
  public override onClick(event: MouseEvent): void {
    // doing nothing, redefining parent class method
  }

  @HostListener('dblclick', ['$event'])
  public onDblClick(event: MouseEvent): void {
    super.onClick(event);
  }
}
