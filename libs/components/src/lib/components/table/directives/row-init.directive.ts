import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmTableRowService } from '../service/row.service';

@Directive({
  selector: `ng-template[prizmTableRowInit]`,
})
export class PrizmTableRowInitDirective implements OnInit {
  @Input() context: Record<string, unknown>;
  @Input() template: TemplateRef<any>;
  constructor(
    public readonly viewContainer: ViewContainerRef,
    public readonly tableRowService: PrizmTableRowService
  ) {}

  public ngOnDestroy(): void {
    this.viewContainer.clear();
  }

  public ngOnInit(): void {
    this.tableRowService.incrementIdx();
    const idx = this.tableRowService.getIdx();
    const odd = idx % 2 !== 0;
    this.viewContainer.createEmbeddedView(this.template, {
      ...this.context,
      index: idx,
      odd: odd,
      even: !odd,
    });
  }
}
