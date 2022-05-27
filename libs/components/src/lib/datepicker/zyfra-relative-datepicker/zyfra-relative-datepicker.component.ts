import {
  Component,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
  OnDestroy,
  Injector,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  getDefaultRelativeDateMenuItems,
  IdByGroup,
  RelativeDateDirectionId,
  RelativeDateMenuItem,
  RelativeDateMenuItems,
  RelativeDatePeriodId,
  RelativeDateTimeId,
} from './relative-datepicker.models';
import { ParseTextInput, RenderText, UpdateActiveItem } from './relative-datepicker.utils';

const MenuItems: RelativeDateMenuItems = getDefaultRelativeDateMenuItems();
const ValidationPattern = '(T|\\*)((\\+|\\-)(\\d+)(Y|M|d|h|m|s))?';

@Component({
  selector: 'zyfra-relative-datepicker',
  templateUrl: './zyfra-relative-datepicker.component.html',
  styleUrls: ['./zyfra-relative-datepicker.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZyfraRelativeDatepickerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraRelativeDatepickerComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public disabled: boolean;
  @Input() public showClear: boolean;

  public value = new FormControl('', Validators.pattern(ValidationPattern));
  public timeItems: RelativeDateMenuItem<RelativeDateTimeId>[] = [...MenuItems.time];
  public directionItems: RelativeDateMenuItem<RelativeDateDirectionId>[] = [...MenuItems.direction];
  public periodItems: RelativeDateMenuItem<RelativeDatePeriodId>[] = [...MenuItems.period];

  private activeTimeId: RelativeDateTimeId;
  private activeDirectionId: RelativeDateDirectionId;
  private activePeriodId: RelativeDatePeriodId;
  private activeNumber: string = '';

  onChangeFn: (_: unknown) => unknown;
  onTouched: VoidFunction;

  private readonly subscriptions = new Subscription();

  constructor(public readonly injector: Injector, private readonly cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const control = this.injector.get(NgControl);
    this.value.addValidators(control.validator);

    this.subscriptions.add(
      this.value.valueChanges.subscribe(() => {
        this.parseInputValue();
        this.actualizeMenu();
        this.onChangeFn(this.value.value);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public writeValue(value: number): void {
    this.value.markAsDirty();
    this.value.setValue(value);
  }

  public registerOnChange(fn: (_: unknown) => void): void {
    this.onChangeFn = fn;
  }

  public registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  public clearValue(): void {
    this.value.setValue('');
  }

  /**
   * Action click item menu
   */
  public onMenuItemClick(item: RelativeDateMenuItem): void {
    switch (item.groupId) {
      case 'time':
        this.activeTimeId = <IdByGroup<'time'>>item.id;
        break;

      case 'direction':
        this.activeDirectionId = <IdByGroup<'direction'>>item.id;
        break;

      case 'period':
        this.activePeriodId = <IdByGroup<'period'>>item.id;
        break;
    }

    this.actualizeMenu();
    this.actualizeInput();
    this.onChangeFn(this.value.value);

    this.cdr.detectChanges();
  }

  /**
   * Parses control input value
   */
  private parseInputValue(): void {
    const textInput = this.value.value;

    const model = ParseTextInput(textInput);

    this.activeTimeId = model.time;
    this.activeDirectionId = model.direction;
    this.activeNumber = model.number;
    this.activePeriodId = model.period;
  }

  /**
   * Set control input as text
   */
  private actualizeInput(): void {
    const stringValue = RenderText({
      time: this.activeTimeId,
      number: this.activeNumber,
      direction: this.activeDirectionId,
      period: this.activePeriodId,
    });

    this.value.setValue(stringValue);
  }

  /**
   * Actualize menu items, as radio group button
   */
  private actualizeMenu(): void {
    this.timeItems = UpdateActiveItem(this.timeItems, this.activeTimeId);
    this.directionItems = UpdateActiveItem(this.directionItems, this.activeDirectionId);
    this.periodItems = UpdateActiveItem(this.periodItems, this.activePeriodId);
  }
}
