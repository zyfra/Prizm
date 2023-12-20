import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PrizmIconModule,
  PrizmLoaderComponent,
  PrizmMapperPipeModule,
  PrizmTreeModule,
} from '@prizm-ui/components';
import { TreeTemplateLazyExampleComponent } from './tree-template-lazy-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrizmTreeModule,
    PrizmLoaderComponent,
    FormsModule,
    PrizmMapperPipeModule,
    PrizmIconModule,
  ],
  declarations: [TreeTemplateLazyExampleComponent],
  exports: [TreeTemplateLazyExampleComponent],
})
export class TreeTemplateLazyExampleModule {}
