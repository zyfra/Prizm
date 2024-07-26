import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmCallFuncPipe, PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../../input';
import { PrizmInputTreeSearchMatcher } from './model';
import { PolymorphContent, PrizmDropdownHostComponent } from '@prizm-ui/components';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'prizm-input-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, PrizmCallFuncPipe, PrizmDropdownHostComponent, PrizmLetDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputTreeSelectComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputTreeSelectComponent },
  ],
})
export class PrizmInputTreeSelectComponent<T> extends PrizmInputNgControl<T> implements ControlValueAccessor {
  items = input<T[]>([]);
  searchable = input(false);
  placeholder = input<string | null>(null);
  transformer = input((v: T): any => v);
  searchMatcher = input<PrizmInputTreeSearchMatcher<T>>(() => true);
  emptyContent = input<PolymorphContent | null>(null);
  nullContent = input<PolymorphContent | null>(null);
  children = input<(item: T) => T[]>();
  valueTemplate = input<(item: T) => T[]>();
  identityMatcher = input<(item: T) => T[]>();
  stringify = input<(item: T) => T[]>();
  itemTemplate = input<(item: T) => T[]>();

  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

  override focused: boolean | Observable<boolean>;
  override readonly nativeElementType = 'tree-select';
  override readonly hasClearButton = true;

  public override writeValue(obj: T): void {
    throw new Error('Method not implemented.');
  }
  public registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  public registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
