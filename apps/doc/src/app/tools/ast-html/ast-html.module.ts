import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { AstHtmlComponent } from './ast-html.component';
import { PrizmButtonComponent, PrizmInputTextModule } from '@prizm-ui/components';
import { PrizmParseBaseExampleComponent } from './examples/base/base.component';
import { FormsModule } from '@angular/forms';
import { PrizmStringifyBaseExampleComponent } from './examples/stringify/stringify.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    PrizmInputTextModule,
    RouterModule.forChild(prizmDocGenerateRoutes(AstHtmlComponent)),
    FormsModule,
  ],
  declarations: [PrizmParseBaseExampleComponent, AstHtmlComponent, PrizmStringifyBaseExampleComponent],
  exports: [AstHtmlComponent],
})
export class AstHtmlModule {}
