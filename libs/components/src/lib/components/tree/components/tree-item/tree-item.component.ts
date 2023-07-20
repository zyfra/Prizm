import {
  Input,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  DoCheck,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  QueryList,
} from '@angular/core';
import { PolymorphContent } from '../../../../directives';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { PrizmTreeController } from '../../misc/tree.interfaces';
import {
  PRIZM_TREE_CONTENT,
  PRIZM_TREE_CONTROLLER,
  PRIZM_TREE_LEVEL,
  PRIZM_TREE_NODE,
} from '../../misc/tree.tokens';
import { PRIZM_TREE_ITEM_PROVIDERS } from './tree-item.providers';
import { PRIZM_EMPTY_QUERY } from '@prizm-ui/core';

@Component({
  selector: 'prizm-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: PRIZM_TREE_ITEM_PROVIDERS,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    role: 'treeitem',
  },
  exportAs: 'prizmTreeItem',
})
export class PrizmTreeItemComponent implements DoCheck {
  @ContentChildren(PRIZM_TREE_NODE as any)
  private readonly nested: QueryList<unknown> = PRIZM_EMPTY_QUERY;

  private readonly change$ = new Subject<void>();

  readonly expanded$ = this.change$.pipe(
    startWith(null),
    map(() => this.isExpanded),
    distinctUntilChanged()
  );

  readonly attached$ = this.change$.pipe(
    map(() => this.elementRef.nativeElement.isConnected),
    distinctUntilChanged()
  );

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_tree_item';

  @HostBinding('class._expandable')
  get isExpandable(): boolean {
    return !!this.nested.length;
  }

  get isExpanded(): boolean {
    return this.controller.isExpanded(this);
  }

  @HostBinding('class.use-padding-indent')
  @Input()
  usePaddingIndent: boolean;

  constructor(
    @Inject(ElementRef)
    private readonly elementRef: ElementRef<HTMLElement>,
    @Inject(forwardRef(() => PRIZM_TREE_CONTROLLER))
    private readonly controller: PrizmTreeController,
    @Inject(forwardRef(() => PRIZM_TREE_LEVEL))
    readonly level: number,
    @Inject(forwardRef(() => PRIZM_TREE_CONTENT))
    readonly content: PolymorphContent
  ) {}

  ngDoCheck(): void {
    this.change$.next();
  }
}
