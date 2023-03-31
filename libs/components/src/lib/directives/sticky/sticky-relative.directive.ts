import { Directive, ElementRef, OnInit } from '@angular/core';
import { PrizmStickyRelativeService } from './sticky-relative.service';

@Directive({
  selector: '[prizmStickyRelative]',
  providers: [PrizmStickyRelativeService],
})
export class PrizmStickyRelativeDirective implements OnInit {
  constructor(
    private readonly stickyRelativeService: PrizmStickyRelativeService,
    private readonly elRef: ElementRef
  ) {}

  public ngOnInit(): void {
    this.stickyRelativeService.element = this.elRef.nativeElement;
  }
}
