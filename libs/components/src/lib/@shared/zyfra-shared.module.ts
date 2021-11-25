import { NgModule } from '@angular/core';
import { ZyfraTemplateDirective } from './zyfra-template.directives';

@NgModule({
  declarations: [ZyfraTemplateDirective],
  exports: [ZyfraTemplateDirective],
})
export class ZyfraSharedModule {}
