import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { StickyComponent } from './sticky.component';
import { PrizmStickyBaseExampleComponent } from './examples/base/sticky-base-example.component';
import { PrizmScrollbarModule, PrizmStickyModule, PrizmTableModule } from '@prizm-ui/components';
import { StickyTableExampleComponent } from './examples/table/sticky-table-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmScrollbarModule,
    PrizmTableModule,
    PrizmStickyModule,
    RouterModule.forChild(prizmDocGenerateRoutes(StickyComponent)),
  ],
  declarations: [PrizmStickyBaseExampleComponent, StickyTableExampleComponent, StickyComponent],
  exports: [StickyComponent],
})
export class StickyModule {}
