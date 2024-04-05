import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { PrizmAccordionContentDirective } from '../../directives/accordion-content.directive';
import { AccordionToolsDirective } from '../../directives/accordion-tools.directive';
import { expandAnimation } from '../../accordion.animation';
import { Subject } from 'rxjs';
import { PolymorphContent, PolymorphOutletDirective } from '../../../../directives/polymorph';
import { PrizmAccordionItemData } from '../../model';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { PrizmButtonComponent } from '../../../button';
import { PrizmHintDirective } from '../../../../directives';
import { prizmIsTextOverflow } from '../../../../util';
import { PrizmIconsComponent } from '@prizm-ui/icons';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsChevronsDoubleDown } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.less'],
  animations: [expandAnimation],
  standalone: true,
  imports: [
    CommonModule,
    PolymorphOutletDirective,
    PrizmButtonComponent,
    PrizmIconsComponent,
    PrizmHintDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmAccordionItemComponent extends PrizmAbstractTestId implements OnInit, OnDestroy {
  @Input() icon!: PolymorphContent<PrizmAccordionItemData>;
  @Input() title: PolymorphContent<PrizmAccordionItemData> = '';
  @Input() isExpanded = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  @ViewChild('container', { static: true }) container!: ElementRef;

  public readonly prizmIsTextOverflow = prizmIsTextOverflow;
  private _disabled = false;

  @Output() isExpandedChange = new EventEmitter<boolean>();

  get data() {
    return {
      icon: this.icon,
      title: this.title,
      isExpanded: this.isExpanded,
      disabled: this._disabled,
      focused: this.isAccordionFocused,
    };
  }

  override readonly testId_ = 'ui_accordion_item';

  @ContentChild(PrizmAccordionContentDirective, { read: TemplateRef })
  public readonly accordionContent!: TemplateRef<PrizmAccordionContentDirective>;
  @ContentChild(AccordionToolsDirective, { read: TemplateRef })
  public readonly accordionTools!: TemplateRef<AccordionToolsDirective>;

  private resizeObserver!: ResizeObserver;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(private readonly cdRef: ChangeDetectorRef) {
    super();

    this.iconsFullRegistry.registerIcons(prizmIconsChevronsDoubleDown);
  }

  public ngOnInit(): void {
    this.resizeObserver = new ResizeObserver(() => this.cdRef.markForCheck());
    this.resizeObserver.observe(this.container.nativeElement);
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
    this.resizeObserver.disconnect();
  }
}
