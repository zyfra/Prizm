import { NgModule } from '@angular/core';
import { PrizmDocCodeModule } from './components/code/code.module';
import { PrizmDocDemoModule } from './components/demo/demo.module';
import { PrizmDocDocumentationModule } from './components/documentation/documentation.module';
import { PrizmDocExampleModule } from './components/example/example.module';
import { PrizmDocPageModule } from './components/page/page.module';
import { PrizmDocHostModule } from './components/host';

@NgModule({
  exports: [
    PrizmDocCodeModule,
    PrizmDocDemoModule,
    PrizmDocDocumentationModule,
    PrizmDocPageModule,
    PrizmDocExampleModule,
    PrizmDocHostModule,
  ],
})
export class PrizmAddonDocModule {}
