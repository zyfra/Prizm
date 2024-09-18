import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {
  PrizmCallFuncPipe,
  PrizmDestroyService,
  PrizmLetDirective,
  PrizmSyncParentDirective,
} from '@prizm-ui/helpers';
import {
  PrizmInputControl,
  PrizmInputHintDirective,
  PrizmInputNgControl,
  PrizmInputTextComponent,
} from '../../input';
import {
  PrizmDataListComponent,
  PrizmDropdownControllerDirective,
  PrizmDropdownHostComponent,
  prizmIsNativeFocused,
  PrizmLifecycleDirective,
  PrizmNativeFocusableElement,
} from '@prizm-ui/components';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'prizm-input-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    PrizmCallFuncPipe,
    PrizmDropdownHostComponent,
    PrizmLetDirective,
    PrizmInputHintDirective,
    PrizmInputTextComponent,
    ReactiveFormsModule,
    PrizmDataListComponent,
    PrizmLifecycleDirective,
    NgTemplateOutlet,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputTreeSelectComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputTreeSelectComponent },
  ],
  hostDirectives: [
    // for sync state with all children
    PrizmSyncParentDirective,
    {
      directive: PrizmDropdownControllerDirective,
      inputs: ['prizmDropdownMinHeight', 'prizmDropdownMaxHeight'],
    },
  ],
})
export class PrizmInputTreeSelectComponent<T> extends PrizmInputNgControl<T> implements ControlValueAccessor {
  searchable = false;
  @Input()
  placeholder = '';
  // transformer = input((v: T): any => v);
  // searchMatcher = input<PrizmInputTreeSearchMatcher<T>>(() => true);
  // nullContent = input<PolymorphContent | null>(null);
  // children = input<(item: T) => T[]>();
  // valueTemplate = input<(item: T) => T[]>();
  public readonly opened$$ = new BehaviorSubject<boolean>(false);
  public readonly opened$ = this.opened$$.asObservable();
  @Input()
  identityMatcher = (a: T, b: T) => a == b;
  @Input()
  stringify = (item: T) => item;

  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

  override readonly nativeElementType = 'tree-select';
  override readonly hasClearButton = true;
  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }
  public override writeValue(obj: T): void {
    throw new Error('Method not implemented.');
  }
  public override registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  public override registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  public override setDisabledState(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
