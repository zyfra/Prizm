import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input, HostBinding,
} from '@angular/core';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { merge } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';

@Component({
  selector: 'pzm-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PzmDestroyService],
})
export class AccordionComponent implements AfterContentInit {
  @Input() public onlyOneExpanded = false;
  @ContentChildren(AccordionItemComponent) accordionItems: QueryList<AccordionItemComponent>;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_accordion';

  constructor(private readonly destroy$: PzmDestroyService) {}

  public ngAfterContentInit(): void {
    const accordionItemsToggleStreams = this.accordionItems.map((item, idx) => item.toggle$.pipe(mapTo(idx)));
    merge(...accordionItemsToggleStreams)
      .pipe(takeUntil(this.destroy$))
      .subscribe(toggledAccordionIdx => {
        const accordionItems = [...this.accordionItems];
        if (accordionItems[toggledAccordionIdx].isExpanded && this.onlyOneExpanded) {
          accordionItems.forEach((accordionItem, accordionIdx) => {
            if (accordionIdx !== toggledAccordionIdx) {
              accordionItem.close()
            }
          });
        }
      });
  }
}
