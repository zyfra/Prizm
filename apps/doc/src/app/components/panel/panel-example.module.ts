import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelExampleComponent } from './panel-example.component';
import { PanelExampleBasicComponent } from './examples/panel-example-basic/panel-example-basic.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PzmButtonModule,
  PzmIconModule,
  PzmPanelModule,
  PzmBreadcrumbsModule,
  PzmTabsModule,
  PzmToggleModule,
} from '@digital-plant/zui-components';
import { PanelExampleWithTabsComponent } from './examples/panel-example-with-tabs/panel-example-with-tabs.component';
import { PanelExampleWithPagesComponent } from './examples/panel-example-with-pages/panel-example-with-pages.component';
import { PanelExampleWithBreadcrumbsComponent } from './examples/panel-example-with-breadcrumbs/panel-example-with-breadcrumbs.component';
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
    PanelExampleWithBreadcrumbsComponent,
    PanelExampleWithBackComponent,
    PanelExampleWithInstrumentsSimpleComponent,
    PanelExampleWithInstrumentsHardComponent,
  ],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(PanelExampleComponent)),
    PzmPanelModule,
    PzmButtonModule,
    PzmIconModule,
    FormsModule,
    PzmToggleModule,
    PzmBreadcrumbsModule,
    PzmTabsModule,
  ],
})
export class PanelExampleModule {}
