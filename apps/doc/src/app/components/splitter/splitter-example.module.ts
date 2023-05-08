import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';

import { PrizmSplitterExampleComponent } from './splitter-example.component';
import { PrizmSplitterBasicExampleComponent } from './examples/basic/basic.component';
import { PrizmSplitterVerticalExampleComponent } from './examples/vertical/vertical.component';
import { PrizmButtonModule, PrizmSplitterModule } from '@prizm-ui/components';
import { PrizmSplitterNestedExampleComponent } from './examples/nested/nested.component';
import { PrizmSplitterLimitSizeExampleComponent } from './examples/limit-size/limit-size.component';
import { PrizmSplitterAreasControlSizeExampleComponent } from './examples/areas-control-size/areas-control-size.component';
import { PrizmSplitterAreasControlDisplayNoneExampleComponent } from './examples/areas-control-display-none/areas-control-display-none.component';
import { PrizmSplitterAreasControlNgIfExampleComponent } from './examples/areas-control-ngif/areas-control-ngif.component';
import { PrizmSplitterCustomGutterExampleComponent } from './examples/custom-gutter/custom-gutter.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmSplitterModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmSplitterExampleComponent)),
    PrizmButtonModule,
  ],
  declarations: [
    PrizmSplitterExampleComponent,
    PrizmSplitterBasicExampleComponent,
    PrizmSplitterVerticalExampleComponent,
    PrizmSplitterNestedExampleComponent,
    PrizmSplitterLimitSizeExampleComponent,
    PrizmSplitterAreasControlSizeExampleComponent,
    PrizmSplitterAreasControlDisplayNoneExampleComponent,
    PrizmSplitterAreasControlNgIfExampleComponent,
    PrizmSplitterCustomGutterExampleComponent,
  ],
  exports: [PrizmSplitterExampleComponent],
})
export class PrizmSpliiterExampleModule {}
