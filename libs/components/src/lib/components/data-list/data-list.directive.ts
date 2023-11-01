import { Directive, Provider, Type } from '@angular/core';

@Directive({
  selector: 'ng-template[prizmDataList]',
  standalone: true,
})
export class PrizmDataListDirective {}

export function prizmAsDataList(useExisting: Type<PrizmDataListDirective>): Provider {
  return {
    provide: PrizmDataListDirective,
    useExisting,
  };
}
