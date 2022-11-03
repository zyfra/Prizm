import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  HostBinding,
  Inject,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';
import { PzmTreeChildrenDirective } from '../../directives/tree-children.directive';
import { PZM_TREE_NODE } from '../../misc/tree.tokens';
import { PzmTreeItemComponent } from '../tree-item/tree-item.component';
import { PzmHandler } from '../../../../types';
import { PolymorphContent } from '../../../../directives';

@Component({
    selector: 'pzm-tree[value]',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: PZM_TREE_NODE,
            useExisting: PzmTreeComponent,
        },
    ],
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        role: 'tree',
    },
})
export class PzmTreeComponent<T> implements DoCheck {
    private readonly check$ = new Subject<void>();

    @Input()
    value!: T;

    @ViewChild(PzmTreeItemComponent)
    readonly item?: PzmTreeItemComponent;

    @ViewChild(PzmTreeComponent)
    readonly child?: PzmTreeComponent<T>;

    readonly children$ = this.check$.pipe(
        startWith(null),
        map(() => this.handler(this.value)),
        distinctUntilChanged(),
    );

    @HostBinding('attr.testId')
    readonly testId = 'pzm_tree';

    constructor(
        @Optional()
        @Inject(PzmTreeChildrenDirective)
        readonly directive: PzmTreeChildrenDirective<T> | null,
    ) {}

    @Input()
    content: PolymorphContent = ({$implicit}: any) => String($implicit);

    ngDoCheck(): void {
        this.check$.next();
        this.item?.ngDoCheck();
        this.child?.ngDoCheck();
    }

    private get handler(): PzmHandler<T, readonly T[]> {
        return this.directive?.childrenHandler ?? PzmTreeChildrenDirective.defaultHandler;
    }
}
