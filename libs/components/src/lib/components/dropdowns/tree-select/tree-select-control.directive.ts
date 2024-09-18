import { Directive, ElementRef, forwardRef, inject, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService, PrizmDisabledDirective } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../../input';
import { prizmIsNativeFocused, PrizmNativeFocusableElement } from '@prizm-ui/components';

@Directive({
  selector: '[prizmInputTreeSelectControl]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmTreeSelectControlDirective),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmTreeSelectControlDirective },
  ],
  hostDirectives: [
    {
      directive: PrizmDisabledDirective,
      inputs: ['disabled'],
      outputs: ['disabledChange'],
    },
  ],
})
export class PrizmTreeSelectControlDirective<T>
  extends PrizmInputNgControl<T>
  implements ControlValueAccessor
{
  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

  private disabledDirective = inject(PrizmDisabledDirective);

  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  override readonly nativeElementType = 'tree-select';
  override readonly hasClearButton = true;

  public override writeValue(obj: T): void {
    this.focused;
  }
}
