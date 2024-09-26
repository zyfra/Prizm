import {
  Directive,
  inject,
  Injector,
  Input,
  OnInit,
  runInInjectionContext,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {
  PRIZM_TREE_SELECT_ITEM_CHILDREN,
  PRIZM_TREE_SELECT_ITEM_LEVEL,
  PRIZM_TREE_SELECT_ITEM_PARENTS,
} from './token';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { first, tap } from 'rxjs/operators';
import { PrizmTreeSelectGetChildrenDirective } from '../tree-select-get-children.directive';

@Directive({
  selector: 'ng-template[prizmInputTreeSelectItem]',
  standalone: true,
  providers: [PrizmDestroyService],
  hostDirectives: [],
})
export class PrizmTreeSelectItemDirective<T = any> implements OnInit {
  @Input() prizmInputTreeSelectItem!: T;

  readonly treeSelectGetChildrenDirective = inject(PrizmTreeSelectGetChildrenDirective);

  public get children() {
    return this.treeSelectGetChildrenDirective.getChildren(this.prizmInputTreeSelectItem) ?? [];
  }
  private destroy: PrizmDestroyService;
  constructor(
    readonly templateRef: TemplateRef<any>,
    readonly viewContainerRef: ViewContainerRef,
    readonly injector: Injector
  ) {
    this.destroy = injector.get(PrizmDestroyService);
    this.destroy
      .pipe(
        first(),
        tap(() => this.clear())
      )
      .subscribe();
  }

  ngOnInit() {
    this.render();
  }

  private clear() {
    this.viewContainerRef.clear();
  }

  private render() {
    this.clear();
    this.renderItem(this.viewContainerRef, this.prizmInputTreeSelectItem, 0, [], this.injector);
  }

  private renderItem(
    viewContainerRef: ViewContainerRef,
    item: T,
    level: number,
    parents: PrizmTreeSelectItemDirective<any>[],
    injector: Injector
  ) {
    const itemInjector = Injector.create({
      parent: injector,
      providers: [
        {
          provide: PrizmTreeSelectItemDirective,
          useValue: this,
        },
        {
          provide: PRIZM_TREE_SELECT_ITEM_LEVEL,
          useValue: level,
        },
        {
          provide: PRIZM_TREE_SELECT_ITEM_CHILDREN,
          useValue: this.children,
        },
        {
          provide: PRIZM_TREE_SELECT_ITEM_PARENTS,
          useValue: parents,
        },
      ],
    });

    const result = viewContainerRef.createEmbeddedView(
      this.templateRef,
      {
        item,
        level,
        parents: parents.map(i => i.prizmInputTreeSelectItem),
      },
      {
        injector: itemInjector,
      }
    );

    result.detectChanges();

    return result;
  }

  public renderChildren(
    injector: Injector,
    viewContainerRef: ViewContainerRef,
    children: T[],
    currentLevel: number,
    parents: PrizmTreeSelectItemDirective[]
  ) {
    return children.map(child => {
      return runInInjectionContext(injector, () => {
        const self = new PrizmTreeSelectItemDirective(this.templateRef, viewContainerRef, injector);

        self.prizmInputTreeSelectItem = child;

        return self.renderItem(viewContainerRef, child, currentLevel + 1, parents, injector);
      });
    });
  }
}
