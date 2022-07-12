import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { ZyfraMultiSelectTemplateDirective } from './zyfra-multiselect-template.directive';

export interface MultiSelectChangeEvent<T> {
  originalEvent: PointerEvent;
  value: T[];
}

@Component({
  selector: 'zyfra-multiselect',
  templateUrl: './zyfra-multiselect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraMultiSelectComponent<T>
  extends WrappedFormComponent
  implements ControlValueAccessor, AfterContentInit
{
  @Input() options: T[];
  @Input() style: any;
  @Input() styleClass: string;
  @Input() panelStyle: any;
  @Input() panelStyleClass: string;
  @Input() inputId: string;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() group: boolean;
  @Input() filter: boolean;
  @Input() filterPlaceHolder: string;
  @Input() filterLocale: string;
  @Input() filterValue: string;
  @Input() overlayVisible: boolean;
  @Input() tabindex: number;
  @Input() appendTo: any;
  @Input() dataKey: string;
  @Input() name: string;
  @Input() label: string | undefined = '';
  @Input() ariaLabelledBy: string;
  @Input() displaySelectedLabel: boolean = true;
  @Input() maxSelectedLabels: number = 3;
  @Input() selectionLimit: number;
  @Input() selectedItemsLabel: string = 'ellipsis';
  @Input() showToggleAll: boolean = true;
  @Input() emptyFilterMessage: 'No results found';
  @Input() emptyMessage: 'No records found';
  @Input() resetFilterOnHide: boolean = false;
  @Input() dropdownIcon = 'zyfra-icon chevrons-down';
  @Input() optionLabel = 'label';
  @Input() optionValue: string;
  @Input() optionDisabled = 'disabled';
  @Input() optionGroupLabel = 'label';
  @Input() optionGroupChildren = 'items';
  @Input() showHeader: boolean = true;
  @Input() autoZIndex = true;
  @Input() baseZIndex = 0;
  @Input() filterBy: string;
  @Input() virtualScroll: boolean;
  @Input() itemSize = 30;
  @Input() showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
  @Input() hideTransitionOptions = '.1s linear';
  @Input() ariaFilterLabel: string;
  @Input() filterMatchMode:
    | 'contains'
    | 'startsWith'
    | 'endsWith'
    | 'equals'
    | 'notEquals'
    | 'in'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte' = 'contains';
  @Input() tooltip: string;
  @Input() tooltipPosition = 'right';
  @Input() tooltipPositionStyle = 'absolute';
  @Input() tooltipStyleClass: string;
  @Input() autofocusFilter: boolean;
  @Input() display: string = 'comma';
  @Input() scrollHeight = '200px';
  @Input() placeholder: string;
  @Input() defaultLabel: string;

  @Output() onChange = new EventEmitter<MultiSelectChangeEvent<T>>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onClick = new EventEmitter<PointerEvent>();
  @Output() onPanelShow = new EventEmitter();
  @Output() onPanelHide = new EventEmitter();

  @ViewChild('multiselect') multiselect: MultiSelectModule;
  @ContentChildren(ZyfraMultiSelectTemplateDirective) templates: QueryList<ZyfraMultiSelectTemplateDirective>;

  itemTemplate: TemplateRef<T>;
  groupTemplate: TemplateRef<T>;
  selectedItemsTemplate: TemplateRef<T>;
  headerTemplate: TemplateRef<T>;
  emptyTemplate: TemplateRef<T>;
  emptyFilterTemplate: TemplateRef<T>;
  footerTemplate: TemplateRef<T>;

  ngAfterContentInit(): void {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;
        case 'group':
          this.groupTemplate = item.template;
          break;
        case 'selectedItems':
          this.selectedItemsTemplate = item.template;
          break;
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'empty':
          this.emptyTemplate = item.template;
          break;
        case 'emptyfilter':
          this.emptyFilterTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
      }
    });
  }
  public override setDisabledState(): void {
    // do nothing, because have `disabled` input
  }
}
