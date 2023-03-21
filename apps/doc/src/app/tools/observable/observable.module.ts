import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ObservableComponent } from './observable.component';
import { PrizmButtonModule } from '@prizm-ui/components';
import { PrizmObservableBaseExampleComponent } from './examples/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ObservableComponent)),
  ],
  declarations: [PrizmObservableBaseExampleComponent, ObservableComponent],
  exports: [ObservableComponent],
})
export class ObservableModule {}
