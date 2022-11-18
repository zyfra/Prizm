import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ShadowComponent } from './shadow.component';
import { PrizmShadowBaseExampleComponent } from './examples/base/shadow-base-example.component';
import { PrizmShadowModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PrizmShadowModule,
    RouterModule.forChild(generateRoutes(ShadowComponent)),
  ],
  declarations: [
    PrizmShadowBaseExampleComponent,
    ShadowComponent
  ],
  exports: [ShadowComponent],
})
export class ShadowModule {}
