import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsExampleComponent } from './tabs-example.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PrizmTabsModule } from '@prizm-ui/components';
import { TabsExampleBasicComponent } from './examples/tabs-example-basic/tabs-example-basic.component';
import { TabsExampleLinedComponent } from './examples/tabs-example-lined/tabs-example-lined.component';
import { TabsExampleContainedComponent } from './examples/tabs-example-contained/tabs-example-contained.component';
import { TabsExampleIconComponent } from './examples/tabs-example-icon/tabs-example-icon.component';
import { TabsExampleCounterComponent } from './examples/tabs-example-counter/tabs-example-counter.component';
import { TabsExampleClosableComponent } from './examples/tabs-example-closable/tabs-example-closable.component';

@NgModule({
  declarations: [
    TabsExampleComponent,
    TabsExampleBasicComponent,
    TabsExampleLinedComponent,
    TabsExampleContainedComponent,
    TabsExampleIconComponent,
    TabsExampleCounterComponent,
    TabsExampleClosableComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TabsExampleComponent)),
    PrizmTabsModule,
  ],
})
export class TabsExampleModule {}
