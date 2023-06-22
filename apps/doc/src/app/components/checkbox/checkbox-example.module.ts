import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { CheckboxBasicExampleComponent } from './examples/checkbox-basic-example/checkbox-basic-example.component';
import { CheckboxExampleComponent } from './checkbox-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCheckboxModule } from '@prizm-ui/components';
import { CheckboxFormExampleComponent } from './examples/checkbox-form-example/checkbox-form-example.component';
import { PrizmCheckboxGroupExampleComponent } from './examples/checkbox-group-example/checkbox-group-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmCheckboxModule,
    RouterModule.forChild(prizmDocGenerateRoutes(CheckboxExampleComponent)),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CheckboxExampleComponent,
    CheckboxBasicExampleComponent,
    PrizmCheckboxGroupExampleComponent,
    CheckboxFormExampleComponent,
  ],
  exports: [CheckboxExampleComponent],
})
export class CheckboxExampleModule {}
