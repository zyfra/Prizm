import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmTreeComponent } from './components/tree/tree.component';
import { PrizmTreeItemComponent } from './components/tree-item/tree-item.component';
import { PrizmTreeItemContentComponent } from './components/tree-item-content/tree-item-content.component';
import { PrizmTreeChildrenDirective } from './directives/tree-children.directive';
import { PrizmTreeControllerDirective } from './directives/tree-controller.directive';
import { PrizmTreeItemControllerDirective } from './directives/tree-item-controller.directive';
import { PrizmTreeNodeDirective } from './directives/tree-node.directive';
import { PrizmExpandModule } from '../expand';
import { PrizmLetModule } from '@digital-plant/zyfra-helpers';
import { PrizmButtonModule } from '../button';
import { PolymorphModule } from '../../directives';

@NgModule({
    imports: [
        CommonModule,
        PolymorphModule,
        PrizmExpandModule,
        PrizmLetModule,
        PrizmButtonModule,
    ],
    entryComponents: [PrizmTreeItemContentComponent],
    declarations: [
        PrizmTreeComponent,
        PrizmTreeItemComponent,
        PrizmTreeItemContentComponent,
        PrizmTreeChildrenDirective,
        PrizmTreeItemControllerDirective,
        PrizmTreeControllerDirective,
        PrizmTreeNodeDirective,
    ],
    exports: [
        PrizmTreeComponent,
        PrizmTreeItemComponent,
        PrizmTreeChildrenDirective,
        PrizmTreeItemControllerDirective,
        PrizmTreeControllerDirective,
    ],
})
export class PrizmTreeModule {}
