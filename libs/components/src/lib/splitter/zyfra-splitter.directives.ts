import { Directive, Host, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ZyfraSplitterTemplatesService } from './zyfra-splitter-templates.service';

@Directive({
  selector: '[zyfraSplitterTemplate]',
})
export class ZyfraSplitterTemplateDirective implements OnChanges, OnDestroy {
  @Input() type: string;
  @Input() visible: boolean = true;

  constructor(
    public readonly template: TemplateRef<unknown>,
    @Host() private readonly zyfraSplitterService: ZyfraSplitterTemplatesService
  ) {
    this.zyfraSplitterService.add(this);
  }

  ngOnChanges(_changes: SimpleChanges): void {
    if (this.visible) this.zyfraSplitterService.add(this); else this.zyfraSplitterService.remove(this);
  }

  ngOnDestroy(): void {
    this.zyfraSplitterService.remove(this);
  }
}
