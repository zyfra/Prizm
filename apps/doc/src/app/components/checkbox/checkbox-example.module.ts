import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CheckboxBasicExampleComponent } from './examples/checkbox-basic-example/checkbox-basic-example.component';
import { CheckboxExampleComponent } from './checkbox-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmCheckboxModule } from '@digital-plant/zui-components';
import { CheckboxFormExampleComponent } from './examples/checkbox-form-example/checkbox-form-example.component';
import { PzmCheckboxGroupExampleComponent } from './examples/checkbox-group-example/checkbox-group-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmCheckboxModule,
    RouterModule.forChild(generateRoutes(CheckboxExampleComponent)),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CheckboxExampleComponent,
    CheckboxBasicExampleComponent,
    PzmCheckboxGroupExampleComponent,
    CheckboxFormExampleComponent,
  ],
  exports: [CheckboxExampleComponent],
})
export class CheckboxExampleModule {}

