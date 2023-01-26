import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit, Optional,
  Output,
} from '@angular/core';
import { PrizmTabType } from '../tabs.interface';
import { PrizmTabsService } from '../tabs.service';
import { PolymorphContent } from '../../../directives';
import { Observable } from 'rxjs';
import { PrizmLetContextService } from '@prizm-ui/helpers';
import { PrizmTabMenuContext } from '../tabs.model';
@Component({
  selector: 'prizm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTabComponent implements OnInit, OnDestroy {
  @Input() @HostBinding('attr.tab-type') public type: PrizmTabType = 'line';
  @Input() icon: PolymorphContent = null;
  @Input() content: PolymorphContent = null;
  @Input() closeIcon: PolymorphContent = 'cancel-close';
  @Input() count = 0;
  @Input() closable: boolean;
  @Input() disabled = false;
  public get idx(): number | null {
    return this.inMenuContextService?.context?.inMenuIdx;
  }
  @Output() public closeTab = new EventEmitter<void>();

  @HostBinding('attr.testId')
  readonly testId = 'prizm_tab';
  public isActiveTab$: Observable<boolean>;

  private get tab(): PrizmTabComponent {
    return typeof this.idx === 'number'
      ? this.tabsService.getTabByIdx(this.idx)
      : this
  }

  constructor(
    @Optional()
    private readonly inMenuContextService: PrizmLetContextService<PrizmTabMenuContext>,
    public readonly tabsService: PrizmTabsService,
    public readonly el: ElementRef<HTMLElement>,
  ) {
    this.tabsService.addTab(this);
  }

  @HostListener('click')
  public onClick(): void {
    if (this.disabled) return;
    this.selectTab();
  }

  public ngOnDestroy(): void {
    if (this.tab === this) this.tabsService.removeTab(
      this.tab
    );
  }

  public ngOnInit(): void {
    this.isActiveTab$ = this.tabsService.isActiveTab(
      this.tab
    )
  }

  public selectTab(): void {
    this.tabsService?.selectTab(
      this.tab
    );
  }

  public onClose(event: MouseEvent): void {
    event.stopPropagation();
    this.tab.closeTab.emit()
    this.closeTab.emit()
  }
}
