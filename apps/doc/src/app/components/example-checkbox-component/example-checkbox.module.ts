import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CheckboxExampleBaseComponent } from './examples/checkbox-example-base/checkbox-example-base.component';
import { ExampleCheckboxComponent } from './example-checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ZuiCheckboxModule } from '@digital-plant/zui-components';
import { CheckboxExampleFormComponent } from './examples/checkbox-example-form/checkbox-example-form.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiCheckboxModule,
    RouterModule.forChild(generateRoutes(ExampleCheckboxComponent)),
    ReactiveFormsModule,
  ],
  declarations: [ExampleCheckboxComponent, CheckboxExampleBaseComponent, CheckboxExampleFormComponent],
  exports: [ExampleCheckboxComponent],
})
export class ExampleCheckboxModule {}
