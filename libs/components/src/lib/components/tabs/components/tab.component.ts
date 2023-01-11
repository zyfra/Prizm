import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  OnInit,
  OnDestroy, Optional, HostListener,
} from '@angular/core';
import { PrizmTabType } from '../tabs.interface';
import { PrizmTabsService } from '../tabs.service';
import { map } from 'lodash';
import { PolymorphContent } from '../../../directives';
import { Observable } from 'rxjs';

@Component({
  selector: 'prizm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTabComponent implements OnInit, OnDestroy {
  @Input() @HostBinding('attr.tab-type') public type: PrizmTabType = 'line';
  @Input() icon: PolymorphContent = null;
  @Input() closeIcon: PolymorphContent = 'cancel-close';
  @Input() count = 0;
  @Input() closable: boolean;
  @Input() disabled = false;
  @Output() public closeTab = new EventEmitter<void>();
  @HostBinding('attr.testId')
  readonly testId = 'prizm_tab';
  public isActiveTab$: Observable<boolean>;

  constructor(
    public readonly tabsService: PrizmTabsService,
  ) {
    this.tabsService.addTab(this);
  }

  @HostListener('click')
  public onClick(): void {
    this.selectTab();
  }

  public ngOnDestroy(): void {
    this.tabsService.removeTab(this);
  }

  public ngOnInit(): void {
    this.isActiveTab$ = this.tabsService.isActiveTab(this)
  }

  public selectTab(): void {
    this.tabsService?.selectTab(this);
  }

  public onClose(event: MouseEvent): void {
    event.stopPropagation();
    this.closeTab.emit()
  }
}
