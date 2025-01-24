import { Directive, input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmTreeMultiSelectMode } from './model';

@Directive({
  selector: 'prizm-input-tree-multi-select[mode]',
  standalone: true,
  providers: [PrizmDestroyService],
  exportAs: 'prizmTreeMultiSelectMode',
})
export class PrizmTreeMultiSelectModeDirective {
  mode = input.required<PrizmTreeMultiSelectMode>();
}
