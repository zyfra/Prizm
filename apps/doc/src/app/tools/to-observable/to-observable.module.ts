import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ToObservableComponent } from './to-observable.component';
import { PrizmToObservableBaseExampleComponent } from './examples/base/to-obsrvable-base-example.component';
import { PrizmToObservableModule } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmToObservableModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ToObservableComponent)),
  ],
  declarations: [PrizmToObservableBaseExampleComponent, ToObservableComponent],
  exports: [ToObservableComponent],
})
export class ToObservableModule {}
