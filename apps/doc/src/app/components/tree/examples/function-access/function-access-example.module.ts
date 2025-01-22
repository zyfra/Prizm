import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrizmCheckboxComponent, PrizmMapperPipe, PrizmTreeModule } from '@prizm-ui/components';

import { TreeFunctionAccessExampleComponent } from './function-access-example.component';

@NgModule({
  imports: [CommonModule, PrizmTreeModule, PrizmCheckboxComponent, FormsModule, PrizmMapperPipe],
  declarations: [TreeFunctionAccessExampleComponent],
  exports: [TreeFunctionAccessExampleComponent],
})
export class TreeFunctionAccessExampleModule {}
