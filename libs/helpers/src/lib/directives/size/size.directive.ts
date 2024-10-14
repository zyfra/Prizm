import { Directive, HostBinding, inject, Input } from '@angular/core';
import { PRIZM_DEFAULT_SIZE } from './const';

/**
 * наш ли это
 * выкидавать error
 * передавать размер потомку
 * */
@Directive({
  selector: '[prizmSize]',
  standalone: true,
})
export class PrizmSizeDirective<PrizmSize = any> {
  readonly defaultSize = inject<PrizmSize>(PRIZM_DEFAULT_SIZE, {
    self: true,
    optional: false,
  });
  @Input()
  @HostBinding('attr.data-size')
  public size?: any = this.defaultSize;
}
