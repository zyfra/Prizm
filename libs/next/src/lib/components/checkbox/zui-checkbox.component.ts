import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  ViewEncapsulation,
  Output,
  EventEmitter,
  forwardRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ZuiCheckboxFormDirective } from './directives/zui-checkbox-form.directive';
import { ICheckbox, TZuiCheckboxState } from './interfaces/zui-checkbox.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'zui-checkbox',
  templateUrl: './zui-checkbox.component.html',
  styleUrls: ['./zui-checkbox.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZuiCheckboxComponent),
      multi: true,
    },
  ],
})
export class ZuiCheckboxComponent extends ZuiCheckboxFormDirective implements OnInit, OnDestroy {
  @Input() @HostBinding('attr.data-size') public size: 's' | 'l' = 's';
  @HostBinding('attr.disabled') get isDisabled(): boolean {
    return this.accessorIsDisabled;
  }

  @Input() set label(text: string) {
    this.labelFormControl.patchValue(text ?? '');
  }
  @Input() set disabled(isDisabled: boolean) {
    this.accessorIsDisabled = isDisabled;
  }
  @Input() set children(data: ICheckbox[]) {
    this.setChildren(data);
  }
  @Input() set value(data: unknown) {
    this.valueFormControl.patchValue(data ?? '');
  }

  @Input() set state(data: TZuiCheckboxState) {
    if (this.childrenList.length !== 0) return;
    this.stateFormControl.patchValue(data ?? 'unselected');
  }

  @Output() public clickEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public changeEvent: EventEmitter<Event> = new EventEmitter();
  @Output() public focusEvent: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() public focusOutEvent: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() public blurEvent: EventEmitter<FocusEvent> = new EventEmitter();

  public childrenList: ICheckbox[] = [];

  public form: FormGroup = new FormGroup({
    state: new FormControl('unselected'),
    value: new FormControl(''),
    label: new FormControl(''),
    child: new FormArray([]),
  });

  private subscription: Subscription = new Subscription();

  public get childrenFormArray(): FormArray {
    return this.form.controls['child'] as FormArray;
  }

  public get stateFormControl(): FormControl {
    return this.form.controls['state'] as FormControl;
  }

  public get valueFormControl(): FormControl {
    return this.form.controls?.['value'] as FormControl;
  }

  public get labelFormControl(): FormControl {
    return this.form.controls?.['label'] as FormControl;
  }

  public ngOnInit(): void {
    this.subscription = this.childrenFormArray.valueChanges.subscribe(children => {
      this.setParentState(children);
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onClickEventHandler(event: MouseEvent): void {
    if (!this.accessorIsDisabled) {
      this.clickEvent.emit(event);
    }
  }

  public onFocusEventHandler(event: FocusEvent): void {
    if (!this.accessorIsDisabled) {
      this.focusEvent.emit(event);
    }
  }

  public onFocusOutEventHandler(event: FocusEvent): void {
    if (!this.accessorIsDisabled) {
      this.focusOutEvent.emit(event);
    }
  }

  public onChangeEventHandler(event: Event): void {
    this.changeEvent.emit(event);
    const currentVal: TZuiCheckboxState = this.stateFormControl.value;
    switch (currentVal) {
      case 'indeterminate':
      case 'unselected':
        if (this.childrenList.length !== 0) {
          this.setChildrenState('selected');
        } else {
          this.stateFormControl.patchValue('selected');
        }
        break;
      case 'selected':
        if (this.childrenList.length !== 0) {
          this.setChildrenState('unselected');
        } else {
          this.stateFormControl.patchValue('unselected');
        }
        break;
    }
    this.onChange(this.form.value);
  }

  public setChildren(data: ICheckbox[]): void {
    this.childrenList = data;

    this.childrenList.forEach((child, i) => {
      if (!!child?.child && child?.child?.length !== 0) {
        const allSelected = child.child.every(item => item?.state === 'selected');
        const allUnselected = child.child.every(item => item?.state === 'unselected');
        child.state = this.setSelectionState(allSelected, allUnselected);
      }
      this.childrenFormArray.setControl(
        i,
        new FormControl({
          value: child?.value ?? '',
          state: child?.state ?? 'unselected',
          child: child?.child ?? [],
          label: child?.label ?? '',
        })
      );
    });
    this.setParentState(data);
  }

  public setParentState(childrenData: ICheckbox[]): void {
    if (childrenData.length === 0) return;
    const allSelected = childrenData.every(item => item?.state === 'selected');
    const allUnselected = childrenData.every(item => item?.state === 'unselected');

    const state = this.setSelectionState(allSelected, allUnselected);
    this.stateFormControl.patchValue(state);
    this.onChange(this.form.value);
  }

  public setChildrenState(state: TZuiCheckboxState): void {
    const childrenVal = this.childrenFormArray.value as ICheckbox[];
    const newChildrenVal = childrenVal.map(item => ({ ...item, state: state }));
    this.childrenList = newChildrenVal;
    this.childrenFormArray.patchValue(newChildrenVal);
  }

  public override onTouched(event: FocusEvent): void {
    this.blurEvent.emit(event);
  }

  public override writeValue(data: ICheckbox): void {
    if (!data.state) {
      if (!!data?.child && data?.child?.length !== 0) {
        const allSelected = data.child.every(item => item?.state === 'selected');
        const allUnselected = data.child.every(item => item?.state === 'unselected');
        data.state = this.setSelectionState(allSelected, allUnselected);
      } else {
        data.state = 'unselected';
      }
    } else {
      if (!!data?.child && data?.child?.length !== 0) {
        data.child = data.child.map(item => ({
          ...item,
          state: data.state === 'indeterminate' ? item.state : data.state,
        }));
      }
    }
    this.form.patchValue(data);
    this.setChildren(data?.child ?? []);
  }

  public setSelectionState(isAllSelected: boolean, isAllUnselected: boolean): TZuiCheckboxState {
    if (isAllSelected) {
      return 'selected';
    }

    if (isAllUnselected) {
      return 'unselected';
    }

    return 'indeterminate';
  }
}
