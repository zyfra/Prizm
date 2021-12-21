import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { Accordion } from 'primeng/accordion';
import { ZyfraAccordionTabComponent } from '../zyfra-accordion-tab/zyfra-accordion-tab.component';
import { Subscription } from 'rxjs';

export interface ZyfraAccordionOpenClose {
  originalEvent: PointerEvent;
  index: number;
}

@Component({
  selector: 'zyfra-accordion',
  templateUrl: './zyfra-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: Accordion,
      useFactory: (zyfraAccordion: ZyfraAccordionComponent) => zyfraAccordion.accordion,
      deps: [ZyfraAccordionComponent],
    },
  ],
})
export class ZyfraAccordionComponent implements AfterViewInit, OnDestroy, OnInit {
  /** allow multiple tabs be active at the same time. */
  @Input() multiple = false;
  /** inline style */
  @Input() style: { [key: string]: string | number | null };
  /** css class */
  @Input() styleClass: string;
  /** expand icon class */
  @Input() expandIcon = 'zyfra-icon chevrons-double-up';
  /** collapse icon class */
  @Input() collapseIcon = 'zyfra-icon chevrons-double-down';

  /** EventEmitter  */
  @Output() activeIndexChange: EventEmitter<number | number[]> = new EventEmitter();
  /** EventEmitter on closing tab */
  @Output() onClose: EventEmitter<ZyfraAccordionOpenClose> = new EventEmitter();
  /** EventEmitter on opening tab */
  @Output() onOpen: EventEmitter<ZyfraAccordionOpenClose> = new EventEmitter();

  /** primeng Accordion component */
  @ViewChild(Accordion, { static: true }) accordion: Accordion;
  /** zyfra AccordionTab component */
  @ContentChildren(ZyfraAccordionTabComponent) tabs: QueryList<ZyfraAccordionTabComponent>;

  private tabs$: Subscription;

  ngOnInit(): void {
    // Иначе в group-panels работает не корректно
    this.accordion.collapseIcon = this.collapseIcon;
    this.accordion.expandIcon = this.expandIcon;
  }
  
  ngAfterViewInit(): void {
    this.tabs$ = this.tabs.changes.subscribe(() => this.reInitTab());
    this.reInitTab();
  }

  reInitTab(): void {
    const primengAccordionTabs = this.tabs.toArray().map((t) => t.tab);
    this.accordion.tabList.reset(primengAccordionTabs);
    this.accordion.tabList.notifyOnChanges();
  }

  ngOnDestroy(): void {
    this.tabs$?.unsubscribe();
  }
}
