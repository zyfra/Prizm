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
import { PrizmSplitterSizeSettingExampleComponent } from './examples/size-setting/size-setting.component';

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
    PrizmSplitterSizeSettingExampleComponent,
  ],
  exports: [PrizmSplitterExampleComponent],
})
export class PrizmSpliiterExampleModule {}
