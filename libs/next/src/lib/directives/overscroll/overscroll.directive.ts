import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { PzmOverscrollMode } from './overscroll.model';
import { PzmOverscrollService } from './overscroll.service';
import { takeUntil } from 'rxjs/operators';

/**
 * Directive to isolate scrolling, i.e. prevent body scroll behind modal dialog
 */
@Directive({
    selector: '[pzmOverscroll]',
    providers: [PzmDestroyService],
})
export class PzmOverscrollDirective implements OnInit {
  @Input('pzmOverscroll')
  public mode: PzmOverscrollMode | '' = 'scroll';

  public get enabled(): boolean {
    return this.mode !== 'none';
  }

  @HostBinding('style.overscrollBehavior')
  public get overscrollBehavior(): 'contain' | null {
    return this.enabled ? 'contain' : null;
  }

  constructor(
      private readonly elRef: ElementRef<HTMLElement>,
      private readonly overscrollService: PzmOverscrollService,
      private readonly destroy$: PzmDestroyService,
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
