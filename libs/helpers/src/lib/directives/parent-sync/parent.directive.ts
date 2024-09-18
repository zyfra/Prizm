import { ChangeDetectorRef, Directive, inject, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PrizmDestroyService } from '../../services/destroy';
import { debounceTime, tap } from 'rxjs/operators';

@Directive({
  selector: '[prizmSyncParent]',
  standalone: true,
  providers: [PrizmDestroyService],
})
export class PrizmSyncParentDirective implements OnInit {
  private readonly sync$$ = new Subject<void>();
  public readonly sync$ = this.sync$$.asObservable();
  private destroy$ = inject(PrizmDestroyService);
  readonly cdRef = inject(ChangeDetectorRef, {
    host: true,
  });

  ngOnInit(): void {
    this.sync$$
      .pipe(
        debounceTime(0),
        tap(() => {
          this.detectChanges();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public detectChanges() {
    this.cdRef.detectChanges();
  }

  public markForCheck() {
    this.cdRef.markForCheck();
  }

  public sync() {
    this.sync$$.next();
  }
}
