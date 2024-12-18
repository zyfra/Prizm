import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitcherExampleComponent } from './switcher-example.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { SwitcherBasicExampleComponent } from './examples/switcher-basic-example/switcher-basic-example.component';
import {
  PrizmButtonComponent,
  PrizmDataListComponent,
  PrizmDropdownHostComponent,
  PrizmListingItemComponent,
  PrizmSwitcherComponent,
  PrizmSwitcherItemComponent,
} from '@prizm-ui/components';
import { SwitcherInnerLExampleComponent } from './examples/switcher-inner-l-example/switcher-inner-l-example.component';
import { SwitcherInnerMExampleComponent } from './examples/switcher-inner-m-example/switcher-inner-m-example.component';
import { SwitcherOuterMExampleComponent } from './examples/switcher-outer-m-example/switcher-outer-m-example.component';
import { SwitcherOuterLExampleComponent } from './examples/switcher-outer-l-example/switcher-outer-l-example.component';
import { SwitcherOuterSExampleComponent } from './examples/switcher-outer-s-example/switcher-outer-s-example.component';
import { SwitcherWithIconExampleComponent } from './examples/switcher-with-icon-example/switcher-with-icon-example.component';
import { SwitcherOnlyIconExampleComponent } from './examples/switcher-only-icon-example/switcher-only-icon-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SwitcherAsyncExampleComponent } from './examples/switcher-async-example/switcher-async-example.component';
import { SwitcherProjectionExampleComponent } from './examples/switcher-projection-example/switcher-projection-example.component';
import { SwitcherProjectionValueExampleComponent } from './examples/switcher-projection-value-example/switcher-projection-value-example.component';
import { SwitcherBasicValueExampleComponent } from './examples/switcher-basic-value-example/switcher-basic-value-example.component';
import { SwitcherOverflowExampleComponent } from './examples/switcher-overflow-example/switcher-overflow-example.component';
import { PrizmOverflowHostDirective, PrizmOverflowItemDirective } from '@prizm-ui/helpers';

@NgModule({
  declarations: [
    SwitcherExampleComponent,
    SwitcherBasicValueExampleComponent,
    SwitcherProjectionValueExampleComponent,
    SwitcherBasicExampleComponent,
    SwitcherInnerLExampleComponent,
    SwitcherInnerMExampleComponent,
    SwitcherOuterMExampleComponent,
    SwitcherOuterLExampleComponent,
    SwitcherOuterSExampleComponent,
    SwitcherWithIconExampleComponent,
    SwitcherOnlyIconExampleComponent,
    SwitcherProjectionExampleComponent,
    SwitcherAsyncExampleComponent,
    SwitcherOverflowExampleComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SwitcherExampleComponent)),
    PrizmSwitcherComponent,
    ReactiveFormsModule,
    PrizmButtonComponent,
    PrizmSwitcherItemComponent,
    PrizmOverflowHostDirective,
    PrizmOverflowItemDirective,
    PrizmDropdownHostComponent,
    PrizmDataListComponent,
    PrizmListingItemComponent,
  ],
})
export class SwitcherExampleModule {}
