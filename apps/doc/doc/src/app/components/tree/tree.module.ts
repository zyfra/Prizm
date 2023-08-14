import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { TreeComponent } from './tree.component';
import {
  PrizmButtonModule,
  PrizmIconModule,
  PrizmSidebarModule,
  PrizmTreeModule,
} from '@prizm-ui/components';
import { TreeBaseExampleComponent } from './examples/base/tree-base-example.component';
import { TreeArrayExampleComponent } from './examples/array/tree-array-example.component';
import { TreeTemplateExampleComponent } from './examples/template/tree-template-example.component';
import { FoldersComponent } from './examples/component/folder.component';
import { TreeComponentExampleComponent } from './examples/component/tree-component-example.component';
import { TreeTemplateCheckboxExampleModule } from './examples/template-checkbox/tree-template-example.module';
import { TreeTemplateLazyExampleModule } from './examples/lazy/tree-template-lazy-example.module';
import { TreePaddingInputExampleComponent } from './examples/padding-indent/tree-padding-indent-example.component';
import { TreeInModalExampleComponent } from './examples/in-modal/tree-in-modal-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmTreeModule,
    TreeTemplateLazyExampleModule,
    TreeTemplateCheckboxExampleModule,
    PrizmIconModule,
    PrizmButtonModule,
    PrizmSidebarModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TreeComponent)),
  ],
  declarations: [
    TreeInModalExampleComponent,
    TreeBaseExampleComponent,
    TreeArrayExampleComponent,
    TreeTemplateExampleComponent,
    TreeComponentExampleComponent,
    TreePaddingInputExampleComponent,
    TreeComponent,
    FoldersComponent,
  ],
  exports: [TreeComponent],
})
export class TreeModule {}
