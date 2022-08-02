import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { TreeComponent } from './tree.component';
import { ZuiIconModule, ZuiTreeModule } from '@digital-plant/zui-components';
import { TreeBaseExampleComponent } from './examples/base/tree-base-example.component';
import { TreeArrayExampleComponent } from './examples/array/tree-array-example.component';
import { TreeTemplateExampleComponent } from './examples/template/tree-template-example.component';
import { FoldersComponent } from './examples/component/folder.component';
import { TreeComponentExampleComponent } from './examples/component/tree-component-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiTreeModule,
    ZuiIconModule,
    RouterModule.forChild(generateRoutes(TreeComponent)),
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
