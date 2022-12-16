import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { TreeComponent } from './tree.component';
import { PrizmIconModule, PrizmTreeModule } from '@prizm-ui/components';
import { TreeBaseExampleComponent } from './examples/base/tree-base-example.component';
import { TreeArrayExampleComponent } from './examples/array/tree-array-example.component';
import { TreeTemplateExampleComponent } from './examples/template/tree-template-example.component';
import { FoldersComponent } from './examples/component/folder.component';
import { TreeComponentExampleComponent } from './examples/component/tree-component-example.component';


@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmTreeModule,
    PrizmIconModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TreeComponent)),
  ],
  declarations: [
    TreeBaseExampleComponent,
    TreeArrayExampleComponent,
    TreeTemplateExampleComponent,
    TreeComponentExampleComponent,
    FoldersComponent,
    TreeComponent
  ],
  exports: [TreeComponent],
})
export class TreeModule {}
