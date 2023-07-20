import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
} from '@angular/core';
import { AccordionContentDirective } from '../../directives/accordion-content.directive';
import { AccordionToolsDirective } from '../../directives/accordion-tools.directive';
import { expandAnimation } from '../../accordion.animation';
import { Subject } from 'rxjs';
import { PolymorphContent } from '../../../../directives/polymorph';
import { PrizmAccordionItemData } from '../../model';
import { AbstractPrizmTestId } from '../../../../abstract/interactive';

@Component({
  selector: 'prizm-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.less'],
  animations: [expandAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmAccordionItemComponent extends AbstractPrizmTestId implements OnDestroy {
  @Input() icon: PolymorphContent<PrizmAccordionItemData>;
  @Input() title: PolymorphContent<PrizmAccordionItemData> = '';
  @Input() isExpanded = false;
  @Input() disabled = false;
  @Output() isExpandedChange = new EventEmitter<boolean>();

  get data() {
    return {
      icon: this.icon,
      title: this.title,
      isExpanded: this.isExpanded,
      disabled: this.disabled,
      focused: this.isAccordionFocused,
    };
  }

  override readonly testId_ = 'ui_accordion_item';

  @ContentChild(AccordionContentDirective, { read: TemplateRef })
  public readonly accordionContent: TemplateRef<AccordionContentDirective>;
  @ContentChild(AccordionToolsDirective, { read: TemplateRef })
  public readonly accordionTools: TemplateRef<AccordionToolsDirective>;

  constructor(private readonly cdRef: ChangeDetectorRef) {
    super();
  }

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
