import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PolymorphComponent } from './polymorph.component';
import { PolymorphModule, PrizmButtonComponent } from '@prizm-ui/components';
import { PrizmPolymorphNumberModule } from './examples/number/number.module';
import { PrizmPolymorphFunctionModule } from './examples/function/function.module';
import { PrizmPolymorphBaseModule } from './examples/base/base.module';
import { PrizmPolymorphTemplateModule } from './examples/template/template.module';
import { PrizmPolymorphComponentModule } from './examples/component/component.module';
import { PrizmPolymorphInjectorComponentModule } from './examples/injector/injector.module';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    PolymorphModule,
    PrizmPolymorphNumberModule,
    PrizmPolymorphFunctionModule,
    PrizmPolymorphBaseModule,
    PrizmPolymorphComponentModule,
    PrizmPolymorphTemplateModule,
    PrizmPolymorphInjectorComponentModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PolymorphComponent)),
  ],
  declarations: [PolymorphComponent],
  exports: [PolymorphComponent],
})
export class ExamplePolymorphModule {}
