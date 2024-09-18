import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmLoaderComponent, PrizmMapperPipe, PrizmTreeModule } from '@prizm-ui/components';
import { TreeTemplateLazyExampleComponent } from './tree-template-lazy-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrizmTreeModule, PrizmLoaderComponent, FormsModule, PrizmMapperPipe],
  declarations: [TreeTemplateLazyExampleComponent],
  exports: [TreeTemplateLazyExampleComponent],
})
export class TreeTemplateLazyExampleModule {}
