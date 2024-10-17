import { Directive, inject, Input } from '@angular/core';

@Directive({
  selector: 'prizm-input-tree-multi-select[checkboxPosition]',
  standalone: true,
  exportAs: 'prizmTreeMultiSelectCheckbox',
})
export class PrizmInputTreeMultiSelectCheckboxDirective {
  @Input('checkboxPosition') position?: PrizmInputTreeMultiSelectCheckboxPosition = 'after';
}

export type PrizmInputTreeMultiSelectCheckboxPosition = 'after' | 'before';

export function getPrizmLabelPosition(): PrizmInputTreeMultiSelectCheckboxPosition {
  return (
    inject(PrizmInputTreeMultiSelectCheckboxDirective, {
      optional: true,
    })?.position ?? 'after'
  );
}
