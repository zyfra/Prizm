import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmTreeComponent } from './components/tree/tree.component';
import { PzmTreeItemComponent } from './components/tree-item/tree-item.component';
import { PzmTreeItemContentComponent } from './components/tree-item-content/tree-item-content.component';
import { PzmTreeChildrenDirective } from './directives/tree-children.directive';
import { PzmTreeControllerDirective } from './directives/tree-controller.directive';
import { PzmTreeItemControllerDirective } from './directives/tree-item-controller.directive';
import { PzmTreeNodeDirective } from './directives/tree-node.directive';
import { PzmExpandModule } from '../expand';
import { PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmButtonModule } from '../button';
import { PolymorphModule } from '../../directives';

@NgModule({
    imports: [
        CommonModule,
        PolymorphModule,
        PzmExpandModule,
        PzmLetModule,
        PzmButtonModule,
    ],
    entryComponents: [PzmTreeItemContentComponent],
    declarations: [
        PzmTreeComponent,
        PzmTreeItemComponent,
        PzmTreeItemContentComponent,
        PzmTreeChildrenDirective,
        PzmTreeItemControllerDirective,
        PzmTreeControllerDirective,
        PzmTreeNodeDirective,
    ],
    exports: [
        PzmTreeComponent,
        PzmTreeItemComponent,
        PzmTreeChildrenDirective,
        PzmTreeItemControllerDirective,
        PzmTreeControllerDirective,
    ],
})
export class PzmTreeModule {}
