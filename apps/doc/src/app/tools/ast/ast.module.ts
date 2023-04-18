import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { AstComponent } from './ast.component';
import { PrizmButtonModule } from '@prizm-ui/components';
import { PrizmAstBaseExampleComponent } from './examples/base/base.component';
import { PrizmAstTsExampleComponent } from './examples/ts/ts.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(AstComponent)),
  ],
  declarations: [PrizmAstBaseExampleComponent, PrizmAstTsExampleComponent, AstComponent],
  exports: [AstComponent],
})
export class AstModule {}
