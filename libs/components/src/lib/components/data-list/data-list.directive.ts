import { Directive, inject, Provider, TemplateRef, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'ng-template[prizmDataList]',
  standalone: true,
})
export class PrizmDataListDirective {
  public readonly template = inject(TemplateRef<any>);
  public readonly viewContainer = inject(ViewContainerRef);
}

export function prizmAsDataList(useExisting: Type<PrizmDataListDirective>): Provider {
  return {
    provide: PrizmDataListDirective,
    useExisting,
  };
}
