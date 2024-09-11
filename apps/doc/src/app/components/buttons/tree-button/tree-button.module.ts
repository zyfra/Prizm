import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { TreeButtonComponent } from './tree-button.component';
import { PrizmTreeButtonComponent } from '@prizm-ui/components';
import { PrizmTreeButtonsExampleComponent } from './examples/tree/tree-button-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmTreeButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(TreeButtonComponent)),
  ],
  declarations: [PrizmTreeButtonsExampleComponent, TreeButtonComponent],
  exports: [TreeButtonComponent],
})
export class TreeButtonModule {}
