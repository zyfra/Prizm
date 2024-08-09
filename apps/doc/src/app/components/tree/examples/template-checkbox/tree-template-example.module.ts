import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmCheckboxComponent, PrizmMapperPipe, PrizmTreeModule } from '@prizm-ui/components';
import { TreeTemplateExampleComponent } from './tree-template-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrizmTreeModule, PrizmCheckboxComponent, FormsModule, PrizmMapperPipe],
  declarations: [TreeTemplateExampleComponent],
  exports: [TreeTemplateExampleComponent],
})
export class TreeTemplateCheckboxExampleModule {}
