import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiTreeComponent } from './components/tree/tree.component';
import { ZuiTreeItemComponent } from './components/tree-item/tree-item.component';
import { ZuiTreeItemContentComponent } from './components/tree-item-content/tree-item-content.component';
import { ZuiTreeChildrenDirective } from './directives/tree-children.directive';
import { ZuiTreeControllerDirective } from './directives/tree-controller.directive';
import { ZuiTreeItemControllerDirective } from './directives/tree-item-controller.directive';
import { ZuiTreeNodeDirective } from './directives/tree-node.directive';
import { ZuiExpandModule } from '../expand';
import { PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmButtonModule } from '../button';
import { PolymorphModule } from '../../directives';

@NgModule({
    imports: [
        CommonModule,
        PolymorphModule,
        ZuiExpandModule,
        PzmLetModule,
        PzmButtonModule,
    ],
    entryComponents: [ZuiTreeItemContentComponent],
    declarations: [
        ZuiTreeComponent,
        ZuiTreeItemComponent,
        ZuiTreeItemContentComponent,
        ZuiTreeChildrenDirective,
        ZuiTreeItemControllerDirective,
        ZuiTreeControllerDirective,
        ZuiTreeNodeDirective,
    ],
    exports: [
        ZuiTreeComponent,
        ZuiTreeItemComponent,
        ZuiTreeChildrenDirective,
        ZuiTreeItemControllerDirective,
        ZuiTreeControllerDirective,
    ],
})
export class ZuiTreeModule {}
