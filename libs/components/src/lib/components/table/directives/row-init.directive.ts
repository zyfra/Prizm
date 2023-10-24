import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { PrizmTableRowService } from '../service/row.service';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmTableRowContext } from '../table.types';
import { Compare } from '@prizm-ui/helpers';

@Directive({
  selector: `ng-template[prizmTableRowInit]`,
})
export class PrizmTableRowInitDirective implements OnInit, OnDestroy, OnChanges {
  @Input() context!: PrizmTableRowContext;
  @Input() template!: TemplateRef<any>;
  public embeddedRef!: EmbeddedViewRef<any>;
  private idx!: number;
  private idxFromMap!: number;
  constructor(
    public readonly viewContainer: ViewContainerRef,
    public readonly tableRowService: PrizmTableRowService,
    public readonly treeService: PrizmTableTreeService
  ) {}

  public ngOnDestroy(): void {
    this.viewContainer.clear();
  }

  public ngOnInit(): void {
    this.generateIdx();
    this.embeddedRef = this.viewContainer.createEmbeddedView(this.template, this.getContext());
    this.initChildrenVisibleStateOnce();
    this.updateContextIfCan();
  }

  private initChildrenVisibleStateOnce(): void {
    if (Compare.isNullish(this.idxFromMap)) this.treeService.init(this.idx);
  }

  private generateIdx(): void {
    let rowId: unknown;

    if (typeof this.context.getRowId === 'function' || this.context.getRowId) {
      rowId =
        typeof this.context.getRowId === 'function'
          ? this.context.getRowId(this.context.item)
          : this.context.item[this.context.getRowId];
      this.idxFromMap = this.tableRowService.getIdxById(rowId) as number;
    }

    if (Compare.isNullish(this.idxFromMap)) this.tableRowService.incrementIdx();
    this.idx = this.idxFromMap ?? this.tableRowService.getLastIncrementedIdx();

    if (Compare.isNullish(this.idxFromMap) && !Compare.isNullish(rowId)) {
      this.tableRowService.saveId(rowId, this.idx);
    }

    if ('parentIdx' in this.context) {
      this.treeService.addChildToParent(this.idx, this.context.parentIdx as number);
    }
  }

  public updateContextIfCan() {
    if (!this.embeddedRef) return;
    this.context = this.getContext();
    if (this.context !== this.embeddedRef.context) this.embeddedRef.context = this.context;
    this.embeddedRef.markForCheck();
  }

  private getContext(): PrizmTableRowContext {
    const odd = this.idx % 2 !== 0;
    return {
      ...this.context,
      index: this.idx,
      odd: odd,
      even: !odd,
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateContextIfCan();
  }
}
