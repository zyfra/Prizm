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
import { PrizmTreeChildrenDirective } from '../../directives/tree-children.directive';
import { PRIZM_TREE_NODE } from '../../misc/tree.tokens';
import { PrizmTreeItemComponent } from '../tree-item/tree-item.component';
import { PrizmHandler } from '../../../../types';
import { PolymorphContent } from '../../../../directives';

@Component({
  selector: 'prizm-tree[value]',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PRIZM_TREE_NODE,
      useExisting: PrizmTreeComponent,
    },
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    role: 'tree',
  },
})
export class PrizmTreeComponent<T> implements DoCheck {
  private readonly check$ = new Subject<void>();

  @Input()
  value!: T;

  @ViewChild(PrizmTreeItemComponent)
  readonly item?: PrizmTreeItemComponent;

  @ViewChild(PrizmTreeComponent)
  readonly child?: PrizmTreeComponent<T>;

  readonly children$ = this.check$.pipe(
    startWith(null),
    map(() => this.handler(this.value)),
    distinctUntilChanged()
  );

  @HostBinding('attr.testId')
  readonly testId = 'prizm_tree';

  constructor(
    @Optional()
    @Inject(PrizmTreeChildrenDirective)
    readonly directive: PrizmTreeChildrenDirective<T> | null
  ) {}

  @Input()
  content: PolymorphContent = ({ $implicit }: any) => String($implicit);

  ngDoCheck(): void {
    this.check$.next();
    this.item?.ngDoCheck();
    this.child?.ngDoCheck();
  }

  private get handler(): PrizmHandler<T, readonly T[]> {
    return this.directive?.childrenHandler ?? PrizmTreeChildrenDirective.defaultHandler;
  }
}
