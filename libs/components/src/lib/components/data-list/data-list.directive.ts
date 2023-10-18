import { Directive, TemplateRef } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Directive({
  selector: 'ng-template[prizmDataList]',
  providers: [PrizmDestroyService],
})
export class PrizmDataListDirective {
  constructor(public readonly temp: TemplateRef<any>) {}
}
