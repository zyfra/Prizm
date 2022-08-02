import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './toggle.component';
import { ZuiToggleBaseExampleComponent } from './examples/base/toggle-base-example.component';
import { PolymorpheusModule, ZuiToggleModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorpheusModule,
    ZuiToggleModule,
    RouterModule.forChild(generateRoutes(ToggleComponent)),
  ],
  declarations: [
    ZuiToggleBaseExampleComponent,
    ToggleComponent
  ],
  exports: [ToggleComponent],
})
export class ToggleModule {}
