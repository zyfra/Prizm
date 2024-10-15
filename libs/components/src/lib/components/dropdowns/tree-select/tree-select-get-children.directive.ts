import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[prizmInputTreeSelectGetChildren]',
  standalone: true,
})
export class PrizmTreeSelectGetChildrenDirective<T> {
  @Input() getChildren = (item: any): any[] => (item && 'children' in item && item.children) || [];
}
