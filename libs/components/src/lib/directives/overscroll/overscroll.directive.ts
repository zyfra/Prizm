import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmOverscrollMode } from './overscroll.model';
import { PrizmOverscrollService } from './overscroll.service';
import { takeUntil } from 'rxjs/operators';

/**
 * Directive to isolate scrolling, i.e. prevent body scroll behind modal dialog
 */
@Directive({
    selector: '[prizmOverscroll]',
    providers: [PrizmDestroyService],
})
export class PrizmOverscrollDirective implements OnInit {
  @Input('prizmOverscroll')
  public mode: PrizmOverscrollMode | '' = 'scroll';

  public get enabled(): boolean {
    return this.mode !== 'none';
  }

  @HostBinding('style.overscrollBehavior')
  public get overscrollBehavior(): 'contain' | null {
    return this.enabled ? 'contain' : null;
  }

  constructor(
      private readonly elRef: ElementRef<HTMLElement>,
      private readonly overscrollService: PrizmOverscrollService,
      private readonly destroy$: PrizmDestroyService,
  ) {}

  public ngOnInit(): void {
    this.overscrollService.run(
      this.mode,
      this.elRef.nativeElement
    ).pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
