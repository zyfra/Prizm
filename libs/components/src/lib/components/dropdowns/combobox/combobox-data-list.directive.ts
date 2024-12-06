import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ng-template[prizmComboboxDataList]',
  exportAs: 'prizmComboboxDataList',
  standalone: true,
})
export class PrizmComboboxDataListDirective<T = any> {
  constructor(public readonly template: TemplateRef<any>) {}
}
