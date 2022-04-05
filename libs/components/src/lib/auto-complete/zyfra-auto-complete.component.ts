import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { ControlValueAccessor } from '@angular/forms';
import { ZyfraTemplateDirective } from '../@core/shared/zyfra-template.module';
import { WrappedFormComponent } from '../@core/value-accessor/wrapped-form.component';

@Component({
  selector: 'zyfra-auto-complete',
  templateUrl: './zyfra-auto-complete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZyfraAutoCompleteComponent<T = unknown>
  extends WrappedFormComponent
  implements ControlValueAccessor, AfterContentInit
{
  @Input() suggestions: T[];
  @Input() field: string;
  @Input() scrollHeight = '200px';
  @Input() dropdown: boolean;
  @Input() multiple: boolean;
  @Input() dropdownIcon = 'zyfra-icon chevrons-down';
  @Input() minLength = 1;
  @Input() delay = 300;
  @Input() completeOnFocus: boolean;
  @Input() style: string;
  @Input() inputStyle: string;
  @Input() panelStyle: string;
  @Input() styleClass: string;
  @Input() inputStyleClass: string;
  @Input() panelStyleClass: string;
  @Input() inputId: string;
  @Input() name: string;
  @Input() optionGroupLabel: string;
  @Input() group: boolean;
  @Input() optionGroupChildren = 'items';
  @Input() placeholder: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() maxlength: number;
  @Input() size: number;
  @Input() appendTo: any;
  @Input() tabindex: number;
  @Input() dataKey: string;
  @Input() autoHighlight: boolean;
  @Input() type = 'text';
  @Input() showEmptyMessage: boolean;
  @Input() emptyMessage = 'No records found.';
  @Input() immutable = true;
  @Input() required: boolean;
  @Input() autofocus: boolean;
  @Input() forceSelection: boolean;
  @Input() dropdownMode = 'blank';
  @Input() baseZIndex = 0;
  @Input() autoZIndex = true;
  @Input() showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
  @Input() hideTransitionOptions = '.1s linear';
  @Input() ariaLabel: string;
  @Input() ariaLabelledBy: string;
  @Input() unique = true;
  @Input() autocomplete: string;
  @Input() virtualScroll: boolean;
  @Input() itemSize: number;
  @Input() label = '';

  @Output() completeMethod = new EventEmitter<{ originalEvent: InputEvent | PointerEvent; query: string }>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onKeyUp = new EventEmitter<KeyboardEvent>();
  @Output() onSelect = new EventEmitter<T>();
  @Output() onUnselect = new EventEmitter<unknown>();
  @Output() onDropdownClick = new EventEmitter<PointerEvent>();
  @Output() onClear = new EventEmitter<InputEvent>();
  @Output() onShow = new EventEmitter<AnimationEvent>();
  @Output() onHide = new EventEmitter<void>();

  itemTemplate: TemplateRef<unknown>;
  selectedItemTemplate: TemplateRef<unknown>;

  @ContentChildren(ZyfraTemplateDirective) templates: QueryList<ZyfraTemplateDirective>;

  ngAfterContentInit(): void {
    this.templates.forEach((template) => {
      if (template.zyfraTemplate === 'item') {
        this.itemTemplate = template.templateRef;
      } else if (template.zyfraTemplate === 'selectedItem') {
        this.selectedItemTemplate = template.templateRef;
      }
    });
  }

  public override setDisabledState(isDisabled: boolean): void {
    // do nothing
  }
}
