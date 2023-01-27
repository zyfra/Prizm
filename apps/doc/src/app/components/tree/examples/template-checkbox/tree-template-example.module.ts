import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmCheckboxModule, PrizmIconModule, PrizmMapperPipeModule, PrizmTreeModule } from '@prizm-ui/components';
import { TreeTemplateExampleComponent } from './tree-template-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrizmTreeModule,
    PrizmCheckboxModule,
    FormsModule,
    PrizmMapperPipeModule,
    PrizmIconModule,
  ],
  declarations: [
    TreeTemplateExampleComponent
  ],
  exports: [TreeTemplateExampleComponent],
})
export class TreeTemplateCheckboxExampleModule {}
