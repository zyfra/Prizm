import { AfterViewInit, ChangeDetectorRef, Directive, inject, OnInit } from '@angular/core';
import { PrizmSyncParentDirective } from './parent.directive';
import { PrizmDestroyService } from '../../services/destroy';
import { takeUntil, timer } from 'rxjs';
import { debounceTime, delay, tap } from 'rxjs/operators';

@Directive({
  selector: '[prizmSyncChild]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSyncChildDirective implements AfterViewInit {
  private readonly cdRef = inject(ChangeDetectorRef, {
    self: true,
  });
  private destroy$ = inject(PrizmDestroyService);
  private readonly syncParentDirective = inject(PrizmSyncParentDirective);

  ngAfterViewInit(): void {
    // for dynamic add element to parent
    this.syncParentDirective.sync$
      .pipe(
        debounceTime(0),
        tap(() => {
          this.cdRef.detectChanges();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
