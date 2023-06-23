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

@Directive({
  selector: `ng-template[prizmTableRowInit]`,
})
export class PrizmTableRowInitDirective implements OnInit, OnDestroy, OnChanges {
  @Input() context: Record<string, unknown>;
  @Input() template: TemplateRef<any>;
  public embeddedRef: EmbeddedViewRef<any>;
  private idx: number;
  constructor(
    public readonly viewContainer: ViewContainerRef,
    public readonly tableRowService: PrizmTableRowService
  ) {}

  public ngOnDestroy(): void {
    this.viewContainer.clear();
  }

  public ngOnInit(): void {
    this.generateIdx();
    this.embeddedRef = this.viewContainer.createEmbeddedView(this.template, this.getContext());
  }

  private generateIdx(): void {
    this.tableRowService.incrementIdx();
    this.idx = this.tableRowService.getIdx();
  }

  public updateContextIfCan() {
    if (!this.embeddedRef) return;
    this.viewContainer.clear();
    this.embeddedRef = this.viewContainer.createEmbeddedView(this.template, this.getContext());
    this.context = this.getContext();
    this.embeddedRef.markForCheck();
  }

  private getContext(): Record<string, any> {
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
