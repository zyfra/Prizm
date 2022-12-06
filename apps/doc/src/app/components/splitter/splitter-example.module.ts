import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';

import { PrizmSplitterExampleComponent } from './splitter-example.component';
import { PrizmSplitterBasicExampleComponent } from './examples/basic/basic.component';
import { PrizmSplitterVerticalExampleComponent } from './examples/vertical/vertical.component';
import { PrizmSplitterModule } from '@prizm-ui/components';
import { PrizmSplitterNestedExampleComponent } from './examples/nested/nested.component';
import { PrizmSplitterLimitSizeExampleComponent } from './examples/limit-size/limit-size.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmSplitterModule,
    RouterModule.forChild(generateRoutes(PrizmSplitterExampleComponent)),
  ],
  declarations: [
    PrizmSplitterExampleComponent,
    PrizmSplitterBasicExampleComponent,
    PrizmSplitterVerticalExampleComponent,
    PrizmSplitterNestedExampleComponent,
    PrizmSplitterLimitSizeExampleComponent,
  ],
  exports: [PrizmSplitterExampleComponent],
})
export class PrizmSpliiterExampleModule {}

