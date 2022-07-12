import { Directive, Input, TemplateRef } from '@angular/core';

type MultiSelectTemplateType =
  | 'item'
  | 'group'
  | 'selectedItems'
  | 'header'
  | 'empty'
  | 'emptyfilter'
  | 'footer';

@Directive({
  selector: '[zyfraMultiSelectTemplate]',
})
export class ZyfraMultiSelectTemplateDirective {
  @Input() zyfraMultiSelectTemplate: MultiSelectTemplateType;

  constructor(public templateRef: TemplateRef<any>) {}

  get template(): TemplateRef<any> {
    return this.templateRef;
  }

  public getType(): MultiSelectTemplateType {
    return this.zyfraMultiSelectTemplate;
  }
}
