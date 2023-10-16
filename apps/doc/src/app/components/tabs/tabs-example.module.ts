import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsExampleComponent } from './tabs-example.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmPanelModule, PrizmTabsModule } from '@prizm-ui/components';
import { TabsExampleBasicComponent } from './examples/tabs-example-basic/tabs-example-basic.component';
import { TabsExampleLinedComponent } from './examples/tabs-example-lined/tabs-example-lined.component';
import { TabsExampleContainedComponent } from './examples/tabs-example-contained/tabs-example-contained.component';
import { TabsExampleIconComponent } from './examples/tabs-example-icon/tabs-example-icon.component';
import { TabsExampleCounterComponent } from './examples/tabs-example-counter/tabs-example-counter.component';
import { TabsExampleClosableComponent } from './examples/tabs-example-closable/tabs-example-closable.component';
import { TabsExampleComponentContentComponent } from './examples/tabs-example-component/tabs-example-content-component.component';
import { TabsExampleComponentComponent } from './examples/tabs-example-component/tabs-example-component.component';
import { TabsExampleInPanelComponent } from './examples/tabs-example-in-panel/tabs-example-in-panel.component';
@NgModule({
  declarations: [
    TabsExampleComponent,
    TabsExampleBasicComponent,
    TabsExampleComponentContentComponent,
    TabsExampleComponentComponent,
    TabsExampleLinedComponent,
    TabsExampleContainedComponent,
    TabsExampleIconComponent,
    TabsExampleCounterComponent,
    TabsExampleClosableComponent,
    TabsExampleInPanelComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TabsExampleComponent)),
    PrizmTabsModule,
    PrizmPanelModule,
  ],
})
export class TabsExampleModule {}
