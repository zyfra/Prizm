import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PrizmCheckboxModule,
  PrizmIconModule,
  PrizmLoaderModule,
  PrizmMapperPipeModule,
  PrizmTreeModule,
} from '@prizm-ui/components';
import { TreeTemplateLazyExampleComponent } from './tree-template-lazy-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrizmTreeModule,
    PrizmLoaderModule,
    FormsModule,
    PrizmMapperPipeModule,
    PrizmIconModule,
  ],
  declarations: [TreeTemplateLazyExampleComponent],
  exports: [TreeTemplateLazyExampleComponent],
})
export class TreeTemplateLazyExampleModule {}
