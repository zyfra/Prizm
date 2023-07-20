import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { PrizmTabType } from '../tabs.interface';
import { PrizmTabsService } from '../tabs.service';
import { PolymorphContent } from '../../../directives';
import { combineLatest, Observable } from 'rxjs';
import { PrizmDestroyService, PrizmLetContextService } from '@prizm-ui/helpers';
import { PrizmTabContext, PrizmTabMenuContext } from '../tabs.model';
import { filter, first, map, takeUntil, tap } from 'rxjs/operators';
import { AbstractPrizmTestId } from '../../../abstract/interactive';

@Component({
  selector: 'prizm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmTabComponent extends AbstractPrizmTestId implements OnInit, OnDestroy {
  @Input() @HostBinding('attr.tab-type') public type: PrizmTabType = 'line';
  @Input() icon: PolymorphContent<PrizmTabContext> = null;
  @Input() content: PolymorphContent<PrizmTabContext> = null;
  @Input() closeIcon: PolymorphContent<PrizmTabContext> = 'cancel-close';
  @Input() count = 0;
  @Input() closable: boolean;
  @Input() disabled = false;
  private idx_: number | null = null;
  public readonly idx$ = this.tabsService.tabs$.pipe(
    map(() => this.inMenuContextService?.context?.inMenuIdx ?? this.tabsService?.findTabIdx?.(this)),
    tap(idx => (this.idx_ = idx))
  );
  public get idx(): number | null {
    return this.idx_;
  }
  @Output() public closeTab = new EventEmitter<void>();

  override readonly testId_ = 'ui_tab';
  readonly isActiveTab$: Observable<boolean> = combineLatest([
    this.idx$,
    this.tabsService.activeTabIdx$,
  ]).pipe(map(([current, active]) => current === active));

  readonly tab$ = this.idx$.pipe(
    map(idx => (typeof idx === 'number' ? this.tabsService.getTabByIdx(idx) : this))
  );

  constructor(
    @Optional()
    private readonly inMenuContextService: PrizmLetContextService<PrizmTabMenuContext>,
    public readonly tabsService: PrizmTabsService,
    public readonly destroy: PrizmDestroyService,
    public readonly el: ElementRef<HTMLElement>
  ) {
    super();
  }

  @HostListener('click')
  public onClick(): void {
    if (this.disabled) return;
    this.selectTab();
  }

  public ngOnDestroy(): void {
    this.tab$
      .pipe(
        first(),
        tap(tab => {
          if (tab === this) this.tabsService.removeTab(tab);
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  private isFromMenuTab(): boolean {
    return !!this.inMenuContextService?.context?.inMenuIdx;
  }

  private isMainProjectedTab(): boolean {
    return !this.isFromMenuTab();
  }

  public ngOnInit(): void {
    this.tabsService.tabs$
      .pipe(
        filter(() => this.isMainProjectedTab()),
        tap(() => {
          const currentDomIdx = Array.from(this.el.nativeElement.parentElement.children).indexOf(
            this.el.nativeElement
          );
          this.tabsService.updateTab(this, currentDomIdx);
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  public selectTab(): void {
    this.tab$
      .pipe(
        tap(tab => {
          this.tabsService?.selectTab(tab);
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  public onClose(event: MouseEvent): void {
    event.stopPropagation();
    this.tab$.pipe(
      first(),
      tap(tab => {
        tab.closeTab.emit();
      }),
      takeUntil(this.destroy)
    );

    this.closeTab.emit();
  }
}
