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
import { ZuiTreeController } from '../../misc/tree.interfaces';
import { ZUI_TREE_CONTENT, ZUI_TREE_CONTROLLER, ZUI_TREE_LEVEL, ZUI_TREE_NODE } from '../../misc/tree.tokens';
import { ZUI_TREE_ITEM_PROVIDERS } from './tree-item.providers';
import { EMPTY_QUERY } from '../../../../constants';

@Component({
    selector: 'zui-tree-item',
    templateUrl: './tree-item.template.html',
    styleUrls: ['./tree-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: ZUI_TREE_ITEM_PROVIDERS,
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        role: 'treeitem',
    },
})
export class ZuiTreeItemComponent implements DoCheck {
    @ContentChildren(ZUI_TREE_NODE as any)
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

    constructor(
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(forwardRef(() => ZUI_TREE_CONTROLLER))
        private readonly controller: ZuiTreeController,
        @Inject(forwardRef(() => ZUI_TREE_LEVEL))
        readonly level: number,
        @Inject(forwardRef(() => ZUI_TREE_CONTENT))
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
