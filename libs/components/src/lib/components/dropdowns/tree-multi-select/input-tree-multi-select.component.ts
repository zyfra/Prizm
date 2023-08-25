import { AfterViewInit, ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmInputControl } from '../../input';
import { PrizmInputMultiSelectComponent } from '../multi-select/input-multi-select.component';

// TODO create abstract select component and move to abstract common logic
@Component({
  selector: 'prizm-input-tree-multi-select',
  templateUrl: './input-tree-multi-select.component.html',
  styleUrls: ['./input-tree-multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputTreeMultiSelectComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputTreeMultiSelectComponent },
  ],
})
export class PrizmInputTreeMultiSelectComponent<T>
  extends PrizmInputMultiSelectComponent<T[]>
  implements AfterViewInit
{
  override readonly nativeElementType = 'treemultiselect';
  override readonly hasClearButton = true;
}
