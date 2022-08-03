import { ChangeDetectionStrategy, Component, DoCheck, Inject, Input, Optional, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';
import { ZuiTreeChildrenDirective } from '../../directives/tree-children.directive';
import { ZUI_TREE_NODE } from '../../misc/tree.tokens';
import { ZuiTreeItemComponent } from '../tree-item/tree-item.component';
import { ZuiHandler } from '../../../../types';
import { PolymorphContent } from '../../../../directives';

@Component({
    selector: 'zui-tree[value]',
    templateUrl: 'tree.template.html',
    styleUrls: ['tree.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ZUI_TREE_NODE,
            useExisting: ZuiTreeComponent,
        },
    ],
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        role: 'tree',
    },
})
export class ZuiTreeComponent<T> implements DoCheck {
    private readonly check$ = new Subject<void>();

    @Input()
    value!: T;

    @ViewChild(ZuiTreeItemComponent)
    readonly item?: ZuiTreeItemComponent;

    @ViewChild(ZuiTreeComponent)
    readonly child?: ZuiTreeComponent<T>;

    readonly children$ = this.check$.pipe(
        startWith(null),
        map(() => this.handler(this.value)),
        tap((tree) => console.log('#mz tree', {tree})),
        distinctUntilChanged(),
    );

    constructor(
        @Optional()
        @Inject(ZuiTreeChildrenDirective)
        readonly directive: ZuiTreeChildrenDirective<T> | null,
    ) {}

  // ZuiTreeContext<T>
    @Input()
    content: PolymorphContent = ({$implicit}: any) => String($implicit);

    ngDoCheck(): void {
        this.check$.next();
        this.item?.ngDoCheck();
        this.child?.ngDoCheck();
    }

    private get handler(): ZuiHandler<T, readonly T[]> {
        return this.directive?.childrenHandler ?? ZuiTreeChildrenDirective.defaultHandler;
    }
}
