import { NgModule } from '@angular/core';
import { PolymorphOutletDirective } from './directives/outlet';
import { PolymorphTemplate } from './directives/template';

@NgModule({
  declarations: [PolymorphOutletDirective, PolymorphTemplate],
  exports: [PolymorphOutletDirective, PolymorphTemplate],
})
export class PolymorphModule {}
