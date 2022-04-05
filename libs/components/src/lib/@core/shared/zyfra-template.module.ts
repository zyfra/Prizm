import { NgModule,Directive, Input, TemplateRef  } from '@angular/core';

@Directive({
  selector: '[zyfraTemplate]',
})
export class ZyfraTemplateDirective {
  @Input() zyfraTemplate: string;

  constructor(public templateRef: TemplateRef<unknown>) {}
}

@NgModule({
  declarations: [ZyfraTemplateDirective],
  exports: [ZyfraTemplateDirective],
})
export class ZyfraTemplateModule {}
