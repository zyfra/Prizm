import { Directive, EventEmitter, HostListener, inject, Input, Output, TemplateRef } from '@angular/core';
import { PrizmInputSelectOptionService } from './input-select-option.service';

@Directive({
  selector: 'ng-template[prizmInputSelectDataList]',
  exportAs: 'prizmInputSelectDataList',
  standalone: true,
})
export class PrizmInputSelectDataListDirective<T = any> {
  constructor(public readonly template: TemplateRef<any>) {}
}
