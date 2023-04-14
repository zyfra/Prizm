import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  PRIZM_TREE_LOADER,
  PRIZM_TREE_LOADING,
  PRIZM_TREE_START,
  PrizmHandler,
  PrizmTreeService,
} from '@prizm-ui/components';
import { TreeTemplateLazyExampleService } from './tree-template-lazy-example.service';
import { Item } from './tree-template-lazy.model';

interface TreeNode {
  readonly text: string;
  readonly children?: readonly TreeNode[];
}
@Component({
  selector: 'prizm-tree-template-lazy-example',
  templateUrl: './tree-template-lazy-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmTreeService,
    {
      provide: PRIZM_TREE_START,
      useValue: { text: 'Topmost' },
    },
    {
      provide: PRIZM_TREE_LOADER,
      useClass: TreeTemplateLazyExampleService,
    },
  ],
})
export class TreeTemplateLazyExampleComponent {
  map = new Map<Item, boolean>();

  constructor(
    @Inject(PRIZM_TREE_LOADING) readonly loading: unknown,
    @Inject(PrizmTreeService) readonly service: PrizmTreeService<Item>
  ) {}

  public childrenHandler: PrizmHandler<Item, readonly Item[]> = item => this.service.getChildren(item);

  public onToggled(item: Item): void {
    this.service.loadChildren(item);
  }
}
