import {
  Directive,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmCellService } from './cell.service';

@Directive({
  selector: `[prizmCell]`,
  exportAs: 'prizmCell',
})
export class PrizmCellDirective implements OnDestroy, OnInit {
  @Input()
  @prizmDefaultProp()
  prizmCell = ``;

  constructor(
    @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
    public readonly viewContainer: ViewContainerRef,
    @Optional() @Inject(PrizmCellService) private readonly cellService: PrizmCellService
  ) {}

  public ngOnDestroy(): void {
    this.cellService?.changes$$.next();
  }

  public ngOnInit(): void {
    this.cellService?.changes$$.next();
  }
}
