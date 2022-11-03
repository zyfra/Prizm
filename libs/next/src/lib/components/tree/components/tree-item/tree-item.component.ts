import {
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
import { PZM_TREE_CONTENT, PZM_TREE_CONTROLLER, PZM_TREE_LEVEL, PZM_TREE_NODE } from '../../misc/tree.tokens';
import { PZM_TREE_ITEM_PROVIDERS } from './tree-item.providers';
import { EMPTY_QUERY } from '../../../../constants';

@Component({
    selector: 'pzm-tree-item',
    templateUrl: './tree-item.component.html',
    styleUrls: ['./tree-item.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PZM_TREE_ITEM_PROVIDERS,
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        role: 'treeitem',
    },
})
export class PrizmTreeItemComponent implements DoCheck {
    @ContentChildren(PZM_TREE_NODE as any)
    private readonly nested: QueryList<unknown> = EMPTY_QUERY;

    private readonly change$ = new Subject<void>();

    readonly expanded$ = this.change$.pipe(
        startWith(null),
        map(() => this.isExpanded),
        distinctUntilChanged(),
    );

    readonly attached$ = this.change$.pipe(
        map(() => this.elementRef.nativeElement.isConnected),
        distinctUntilChanged(),
    );

    @HostBinding('attr.testId')
    readonly testId = 'pzm_tree_item';

    constructor(
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(forwardRef(() => PZM_TREE_CONTROLLER))
        private readonly controller: PrizmTreeController,
        @Inject(forwardRef(() => PZM_TREE_LEVEL))
        readonly level: number,
        @Inject(forwardRef(() => PZM_TREE_CONTENT))
        readonly content: PolymorphContent,
    ) {}

    @HostBinding('class._expandable')
    get isExpandable(): boolean {
        return !!this.nested.length;
    }

    get isExpanded(): boolean {
        return this.controller.isExpanded(this);
    }

    ngDoCheck(): void {
        this.change$.next();
    }
}
