import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherExampleComponent } from './switcher-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { SwitcherBasicExampleComponent } from './examples/switcher-basic-example/switcher-basic-example.component';
import { PrizmSwitcherModule } from '@prizm-ui/components';
import { SwitcherInnerLExampleComponent } from './examples/switcher-inner-l-example/switcher-inner-l-example.component';
import { SwitcherInnerMExampleComponent } from './examples/switcher-inner-m-example/switcher-inner-m-example.component';
import { SwitcherOuterMExampleComponent } from './examples/switcher-outer-m-example/switcher-outer-m-example.component';
import { SwitcherOuterLExampleComponent } from './examples/switcher-outer-l-example/switcher-outer-l-example.component';
import { SwitcherOuterSExampleComponent } from './examples/switcher-outer-s-example/switcher-outer-s-example.component';
import { SwitcherWithIconExampleComponent } from './examples/switcher-with-icon-example/switcher-with-icon-example.component';
import { SwitcherOnlyIconExampleComponent } from './examples/switcher-only-icon-example/switcher-only-icon-example.component';

@NgModule({
  declarations: [
    SwitcherExampleComponent,
    SwitcherBasicExampleComponent,
    SwitcherInnerLExampleComponent,
    SwitcherInnerMExampleComponent,
    SwitcherOuterMExampleComponent,
    SwitcherOuterLExampleComponent,
    SwitcherOuterSExampleComponent,
    SwitcherWithIconExampleComponent,
    SwitcherOnlyIconExampleComponent,
  ],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(SwitcherExampleComponent)),
    PrizmSwitcherModule,
  ],
})
export class SwitcherExampleModule {}
