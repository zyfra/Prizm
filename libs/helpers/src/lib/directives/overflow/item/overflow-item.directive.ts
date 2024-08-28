import { Directive, ElementRef, inject, OnDestroy } from '@angular/core';
import { OverflowService } from '../overflow.service';

@Directive({
  selector: '[prizmOverflowItem]',
  exportAs: 'prizmOverflowItem',
  standalone: true,
  providers: [],
})
export class PrizmOverflowItemDirective implements OnDestroy {
  private readonly elementRef = inject(ElementRef);
  readonly overflowService = inject(OverflowService);

  constructor() {
    this.overflowService.add(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.overflowService.delete(this.elementRef.nativeElement);
  }
}
