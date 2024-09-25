import { Directive, inject, Injector, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PRIZM_TREE_SELECT_ITEM_CHILDREN, PRIZM_TREE_SELECT_ITEM_LEVEL } from './token';

@Directive({
  selector: 'ng-template[prizmInputTreeSelectItem]',
  standalone: true,
  providers: [],
  hostDirectives: [],
})
export class PrizmTreeSelectItemDirective<T> implements OnInit {
  @Input() prizmInputTreeSelectItem!: T;
  @Input() prizmInputTreeSelectItemGetChildren = (item: any): T[] =>
    (item && 'children' in item && (item.children as T[])) || [];
  @Input() prizmInputTreeSelectItemIsOpened = (item: T): boolean => false;

  readonly templateRef = inject(TemplateRef);
  readonly viewContainerRef = inject(ViewContainerRef);
  readonly injector = inject(Injector);

  ngOnInit() {
    this.render();
  }

  private render() {
    this.viewContainerRef.clear();

    this.renderItem(this.viewContainerRef, this.prizmInputTreeSelectItem, 0);
  }

  private renderItem(viewContainerRef: ViewContainerRef, item: T, level: number) {
    const children = this.prizmInputTreeSelectItemGetChildren(item) ?? [];

    const itemInjector = Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: PRIZM_TREE_SELECT_ITEM_LEVEL,
          useValue: level,
        },
        {
          provide: PRIZM_TREE_SELECT_ITEM_CHILDREN,
          useValue: children,
        },
      ],
    });

    return viewContainerRef.createEmbeddedView(
      this.templateRef,
      {
        item,
        level,
      },
      {
        injector: itemInjector,
      }
    );
  }

  public renderChildren(viewContainerRef: ViewContainerRef, children: T[], currentLevel: number) {
    return children.map(child => {
      return this.renderItem(viewContainerRef, child, currentLevel + 1);
    });
  }
}
