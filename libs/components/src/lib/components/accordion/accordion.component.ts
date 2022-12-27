import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input, HostBinding,
} from '@angular/core';
import { PrizmAccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { merge } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmAccordionComponent implements AfterContentInit {
  @Input() public onlyOneExpanded = false;
  @ContentChildren(PrizmAccordionItemComponent) accordionItems: QueryList<PrizmAccordionItemComponent>;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_accordion';

  constructor(private readonly destroy$: PrizmDestroyService) {}

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
