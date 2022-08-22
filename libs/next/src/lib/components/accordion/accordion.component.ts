import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
} from '@angular/core';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { merge } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';

@Component({
  selector: 'zui-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZuiDestroyService],
})
export class AccordionComponent implements AfterContentInit {
  @Input() public onlyOneExpanded = false;
  @ContentChildren(AccordionItemComponent) accordionItems: QueryList<AccordionItemComponent>;

  constructor(private readonly destroy$: ZuiDestroyService) {}

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
