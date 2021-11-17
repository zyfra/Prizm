import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

export interface DropdownChangeEvent<T> {
  originalEvent: PointerEvent;
  value: T;
}

type FilterMatchModeType =
  | 'contains'
  | 'startsWith'
  | 'endsWith'
  | 'equals'
  | 'notEquals'
  | 'in'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte';

@Component({
  selector: 'zyfra-dropdown',
  templateUrl: './zyfra-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraDropdownComponent<T = unknown> {
  @Input() value: T;
  @Input() options: T[];
  @Input() optionLabel = 'label';
  @Input() optionValue;
  @Input() optionDisabled = 'disabled';
  @Input() optionGroupLabel = 'label';
  @Input() optionGroupChildren = 'items';
  @Input() name: string;
  @Input() scrollHeight = '200px';
  @Input() style: string;
  @Input() panelStyle: string;
  @Input() styleClass: string;
  @Input() panelStyleClass: string;
  @Input() filter: boolean;
  @Input() filterValue: string;
  @Input() filterBy: string;
  @Input() filterMatchMode: FilterMatchModeType = 'contains';
  @Input() filterPlaceholder: string;
  @Input() filterLocale: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() emptyMessage = 'No records found';
  @Input() emptyFilterMessage = 'No results found';
  @Input() ariaLabelledBy: string;
  @Input() editable: boolean;
  @Input() maxlength: number;
  @Input() appendTo: any;
  @Input() tabindex: number;
  @Input() placeholder: string;
  @Input() inputId: string;
  @Input() dataKey: string;
  @Input() autofocus: boolean;
  @Input() autofocusFilter: boolean;
  @Input() resetFilterOnHide: boolean;
  @Input() dropdownIcon = 'zyfra-icon chevrons-down';
  @Input() autoDisplayFirst = true;
  @Input() group: boolean;
  @Input() groupTemplateClass: string;
  @Input() showClear: boolean;
  @Input() baseZIndex = 0;
  @Input() autoZIndex = true;
  @Input() showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
  @Input() hideTransitionOptions = '.1s linear';
  @Input() ariaFilterLabel: string;
  @Input() tooltip: string;
  @Input() tooltipStyleClass: string;
  @Input() tooltipPosition = 'top';
  @Input() tooltipPositionStyle = 'absolute';
  @Input() itemSize = 30;
  @Input() label = '';
  @Input() virtualScroll: boolean;

  @Output() onChange = new EventEmitter<DropdownChangeEvent<T>>();
  @Output() onClick = new EventEmitter<PointerEvent>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onShow = new EventEmitter<AnimationEvent>();
  @Output() onHide = new EventEmitter<AnimationEvent>();
  @Output() valueChange = new EventEmitter<T>();
}
