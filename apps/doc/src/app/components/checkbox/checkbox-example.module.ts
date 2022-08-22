import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CheckboxBasicExampleComponent } from './examples/checkbox-basic-example/checkbox-basic-example.component';
import { CheckboxExampleComponent } from './checkbox-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZuiCheckboxModule } from '@digital-plant/zui-components';
import { CheckboxFormExampleComponent } from './examples/checkbox-form-example/checkbox-form-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiCheckboxModule,
    RouterModule.forChild(generateRoutes(CheckboxExampleComponent)),
    ReactiveFormsModule,
  ],
  declarations: [CheckboxExampleComponent, CheckboxBasicExampleComponent, CheckboxFormExampleComponent],
  exports: [CheckboxExampleComponent],
})
export class CheckboxExampleModule {}
