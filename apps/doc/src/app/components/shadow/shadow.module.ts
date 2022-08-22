import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ShadowComponent } from './shadow.component';
import { ZuiShadowBaseExampleComponent } from './examples/base/shadow-base-example.component';
import { ZuiShadowModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    ZuiShadowModule,
    RouterModule.forChild(generateRoutes(ShadowComponent)),
  ],
  declarations: [
    ZuiShadowBaseExampleComponent,
    ShadowComponent
  ],
  exports: [ShadowComponent],
})
export class ShadowModule {}
