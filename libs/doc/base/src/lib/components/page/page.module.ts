import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiTabsModule, TuiTagModule } from '@taiga-ui/kit';

import { PrizmDocSeeAlsoComponent } from '../../internal/see-also/see-also.component';
import { PrizmDocSourceCodeComponent } from '../../internal/source-code/source-code.component';
import { PrizmDocPageComponent } from './page.component';
import { PrizmDocPageTabConnectorDirective } from './page-tab.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PrizmDocSeeAlsoComponent,
    TuiTabsModule,
    TuiTagModule,
    PrizmDocSourceCodeComponent,
  ],
  declarations: [PrizmDocPageComponent, PrizmDocPageTabConnectorDirective],
  exports: [PrizmDocPageComponent, PrizmDocPageTabConnectorDirective],
})
export class PrizmDocPageModule {}
