import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiTabsModule, TuiTagModule } from '@taiga-ui/kit';

import { PrizmDocSeeAlsoModule } from '../../internal/see-also/see-also.module';
import { TuiDocSourceCodeModule } from '../../internal/source-code/source-code.module';
import { PrizmDocPageComponent } from './page.component';
import { PrizmDocPageTabConnectorDirective } from './page-tab.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PrizmDocSeeAlsoModule,
    TuiTabsModule,
    TuiTagModule,
    TuiDocSourceCodeModule,
  ],
  declarations: [PrizmDocPageComponent, PrizmDocPageTabConnectorDirective],
  exports: [PrizmDocPageComponent, PrizmDocPageTabConnectorDirective],
})
export class PrizmDocPageModule {}
