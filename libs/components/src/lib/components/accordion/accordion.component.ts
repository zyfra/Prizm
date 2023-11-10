import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
} from '@angular/core';
import { PrizmAccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { merge } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';

@Component({
  selector: 'prizm-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
  standalone: true,
})
export class PrizmAccordionComponent extends PrizmAbstractTestId implements AfterContentInit {
  @Input() public onlyOneExpanded = false;
  @ContentChildren(PrizmAccordionItemComponent, { descendants: false })
  accordionItems!: QueryList<PrizmAccordionItemComponent>;

  override readonly testId_ = 'ui_accordion';

  constructor(private readonly destroy$: PrizmDestroyService) {
    super();
  }

  public ngAfterContentInit(): void {
    const accordionItemsToggleStreams = this.accordionItems.map((item, idx) => item.toggle$.pipe(mapTo(idx)));
    merge(...accordionItemsToggleStreams)
      .pipe(takeUntil(this.destroy$))
      .subscribe(toggledAccordionIdx => {
        const accordionItems = [...this.accordionItems];

        if (accordionItems[toggledAccordionIdx].isExpanded && this.onlyOneExpanded) {
          accordionItems.forEach((accordionItem, accordionIdx) => {
            if (accordionIdx !== toggledAccordionIdx) {
              accordionItem.close();
            }
          });
        }
      });
  }
}
