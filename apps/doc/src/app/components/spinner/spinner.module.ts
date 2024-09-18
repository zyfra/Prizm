import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner.component';
import { PrizmSpinnerBaseExampleComponent } from './examples/base/spinner-base-example.component';
import { PrizmSpinnerComponent } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmSpinnerComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(SpinnerComponent)),
  ],
  declarations: [PrizmSpinnerBaseExampleComponent, SpinnerComponent],
  exports: [SpinnerComponent],
})
export class SpinnerModule {}
