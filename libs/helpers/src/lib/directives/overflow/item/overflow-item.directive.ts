import { Directive, ElementRef, inject, OnDestroy } from '@angular/core';
import { OverflowService } from '../overflow.service';
import { PrizmOverflowItem } from '../model';

@Directive({
  selector: '[prizmOverflowItem]',
  exportAs: 'prizmOverflowItem',
  standalone: true,
})
export class PrizmOverflowItemDirective implements OnDestroy, PrizmOverflowItem {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  readonly overflowService = inject(OverflowService);
  public readonly html = this.elementRef.nativeElement;

  private hidden_ = false;

  get hidden() {
    return this.hidden_;
  }

  constructor() {
    this.overflowService.add(this);
  }

  ngOnDestroy(): void {
    this.overflowService.delete(this);
  }
}
