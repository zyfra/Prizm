import { Directive, ElementRef, inject, Input, OnChanges, OnInit } from '@angular/core';
import { OverflowService } from '../overflow.service';

@Directive({
  selector: '[prizmOverflowHost]',
  exportAs: 'prizmOverflowHost',
  standalone: true,
  providers: [OverflowService],
})
export class PrizmOverflowHostDirective implements OnChanges, OnInit {
  @Input() host?: HTMLElement;
  @Input() active = true;
  readonly overflowService = inject(OverflowService);
  readonly element = inject(ElementRef);
  get calculatedHost() {
    return this.host ?? this.element.nativeElement;
  }
  ngOnInit(): void {
    this.overflowService.init(this.calculatedHost);
  }
  ngOnChanges(): void {
    this.overflowService.init(this.calculatedHost);
    if (!this.active) this.overflowService.disable();
  }
}
