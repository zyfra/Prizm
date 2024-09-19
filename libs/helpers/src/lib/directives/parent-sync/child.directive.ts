import { AfterViewInit, ChangeDetectorRef, Directive, inject } from '@angular/core';
import { PrizmSyncParentDirective } from './parent.directive';
import { PrizmDestroyService } from '../../services/destroy';
import { takeUntil } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

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
  private readonly set = new Set([this.cdRef]);

  ngAfterViewInit(): void {
    // for dynamic add element to parent
    this.syncParentDirective.sync$
      .pipe(
        tap(() => {
          this.set.forEach(cdRef => cdRef.markForCheck());
        }),
        debounceTime(0),
        tap(() => {
          this.set.forEach(cdRef => cdRef.detectChanges());
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public addCdRef(cdRef: ChangeDetectorRef) {
    this.set.add(cdRef);
  }

  public deleteCdRef(cdRef: ChangeDetectorRef) {
    this.set.delete(cdRef);
  }
}
