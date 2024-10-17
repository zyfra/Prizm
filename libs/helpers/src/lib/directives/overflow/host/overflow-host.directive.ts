import { Directive, ElementRef, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OverflowService } from '../overflow.service';
import { PrizmOverflowReserveSpace } from '../model';

@Directive({
  selector: '[prizmOverflowHost]',
  exportAs: 'prizmOverflowHost',
  standalone: true,
  providers: [OverflowService],
})
export class PrizmOverflowHostDirective implements OnChanges, OnInit {
  @Input() host?: HTMLElement;
  @Input() active = true;
  @Input() reserveSpace?: PrizmOverflowReserveSpace;
  readonly overflowService = inject(OverflowService);
  readonly hiddenElements$ = this.overflowService.hiddenItems$;
  readonly element = inject(ElementRef);
  get calculatedHost() {
    return this.host ?? this.element.nativeElement;
  }
  ngOnInit(): void {
    this.init();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.active) {
      if (changes['host'] || changes['reserveSpace']) this.init();
      if (changes['active']) this.overflowService.enable();
    } else this.overflowService.disable();
  }

  private init() {
    this.overflowService.init(this.calculatedHost, {
      reserveSpace: this.reserveSpace,
    });
  }
}
