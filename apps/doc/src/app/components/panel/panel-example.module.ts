import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelExampleComponent } from './panel-example.component';
import { PanelExampleBasicComponent } from './examples/panel-example-basic/panel-example-basic.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PrizmButtonComponent,
  PrizmPanelComponent,
  PrizmTabsModule,
  PrizmToggleComponent,
} from '@prizm-ui/components';
import { PanelExampleWithTabsComponent } from './examples/panel-example-with-tabs/panel-example-with-tabs.component';
import { PanelExampleWithPagesComponent } from './examples/panel-example-with-pages/panel-example-with-pages.component';
import { PanelExampleWithBackComponent } from './examples/panel-example-with-back/panel-example-with-back.component';
import { PanelExampleWithInstrumentsSimpleComponent } from './examples/panel-example-with-instruments-simple/panel-example-with-instruments-simple.component';
import { PanelExampleWithInstrumentsHardComponent } from './examples/panel-example-with-instruments-hard/panel-example-with-instruments-hard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelExampleComponent,
    PanelExampleBasicComponent,
    PanelExampleWithTabsComponent,
    PanelExampleWithPagesComponent,
    PanelExampleWithBackComponent,
    PanelExampleWithInstrumentsSimpleComponent,
    PanelExampleWithInstrumentsHardComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PanelExampleComponent)),
    PrizmPanelComponent,
    PrizmButtonComponent,
    FormsModule,
    PrizmToggleComponent,
    PrizmTabsModule,
  ],
})
export class PanelExampleModule {}
