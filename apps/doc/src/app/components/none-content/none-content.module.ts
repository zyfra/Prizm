import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmNoneContentBaseExampleComponent } from './examples/base/none-content-base-example.component';
import { PrizmNoneContentExampleComponent } from './none-content-example.component';
import { PrizmNoneContentComponent } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmNoneContentExampleComponent)),
    PrizmNoneContentComponent,
  ],
  declarations: [PrizmNoneContentBaseExampleComponent, PrizmNoneContentExampleComponent],
  exports: [PrizmNoneContentExampleComponent],
})
export class NoneContentExampleModule {}
