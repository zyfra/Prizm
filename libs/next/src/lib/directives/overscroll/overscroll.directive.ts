import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiOverscrollMode } from './overscroll.model';
import { ZuiOverscrollService } from './overscroll.service';
import { takeUntil } from 'rxjs/operators';

/**
 * Directive to isolate scrolling, i.e. prevent body scroll behind modal dialog
 */
@Directive({
    selector: '[zuiOverscroll]',
    providers: [ZuiDestroyService],
})
export class ZuiOverscrollDirective implements OnInit {
  @Input('zuiOverscroll')
  public mode: ZuiOverscrollMode | '' = 'scroll';

  public get enabled(): boolean {
    return this.mode !== 'none';
  }

  @HostBinding('style.overscrollBehavior')
  public get overscrollBehavior(): 'contain' | null {
    return this.enabled ? 'contain' : null;
  }

  constructor(
      private readonly elRef: ElementRef<HTMLElement>,
      private readonly overscrollService: ZuiOverscrollService,
      private readonly destroy$: ZuiDestroyService,
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
