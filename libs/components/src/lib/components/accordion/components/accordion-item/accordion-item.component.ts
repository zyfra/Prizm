import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  TemplateRef,
  OnDestroy,
  ChangeDetectorRef,
  HostBinding,
  EventEmitter,
  Output,
} from '@angular/core';
import { AccordionContentDirective } from '../../directives/accordion-content.directive';
import { AccordionToolsDirective } from '../../directives/accordion-tools.directive';
import { expandAnimation } from '../../accordion.animation';
import { Subject } from 'rxjs';
import { PolymorphContent } from '../../../../directives/polymorph';

@Component({
  selector: 'prizm-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.less'],
  animations: [expandAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmAccordionItemComponent implements OnDestroy {
  @Input() icon: string;
  @Input() title: PolymorphContent = '';
  @Input() isExpanded = false;
  @Input() disabled = false;
  @Output() isExpandedChange = new EventEmitter<boolean>();

  @HostBinding('attr.testId')
  readonly testId = 'prizm_accordion_item';

  @ContentChild(AccordionContentDirective, { read: TemplateRef })
  public readonly accordionContent: TemplateRef<AccordionContentDirective>;
  @ContentChild(AccordionToolsDirective, { read: TemplateRef })
  public readonly accordionTools: TemplateRef<AccordionToolsDirective>;

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  public toggle$: Subject<void> = new Subject<void>();
  public isAccordionFocused = false;

  public toggle(): void {
    if (this.disabled) return;
    this.isExpanded = !this.isExpanded;
    this.isExpandedChange.emit(this.isExpanded);
    this.toggle$.next();
  }

  public close(): void {
    if (this.disabled) return;
    this.isExpanded = false;
    this.isExpandedChange.emit(this.isExpanded);
    this.cdRef.markForCheck();
  }

  public stopProp($event: Event): void {
    $event.stopPropagation();
  }

  public ngOnDestroy(): void {
    this.toggle$.complete();
  }
}
