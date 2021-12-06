import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
  OnDestroy,
  Injector,
  ChangeDetectorRef,
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
const ValidationPattern = '(T|\\*)(\\+|\\-)(\\d+)(Y|M|d|h|m|s)';

@Component({
  selector: 'zyfra-relative-datepicker',
  templateUrl: './zyfra-relative-datepicker.component.html',
  styleUrls: ['./zyfra-relative-datepicker.component.less'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZyfraRelativeDatepickerComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraRelativeDatepickerComponent implements ControlValueAccessor, OnDestroy {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public disabled: boolean;
  @Input() public showClear: boolean;
  @Input() public showChangeMode: boolean;

  public value = new FormControl('', Validators.pattern(ValidationPattern));
  public timeItems: RelativeDateMenuItem<RelativeDateTimeId>[] = [...MenuItems.time];
  public directionItems: RelativeDateMenuItem<RelativeDateDirectionId>[] = [...MenuItems.direction];
  public periodItems: RelativeDateMenuItem<RelativeDatePeriodId>[] = [...MenuItems.period];

  private activeTimeId: RelativeDateTimeId;
  private activeDirectionId: RelativeDateDirectionId;
  private activePeriodId: RelativeDatePeriodId;
  private activeNumber: string = '0';

  private readonly subscriptions = new Subscription();

  constructor(public readonly injector: Injector, private readonly cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const control = this.injector.get(NgControl);
    this.value.setValidators(control.validator);

    this.subscriptions.add(
      this.value.valueChanges.subscribe(() => {
        this.parseInputValue();
        this.actualizeMenu();
        this.onChangeFn(this.value.value)
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  writeValue(value: number): void {
    this.value.setValue(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    // do
  }

  onChangeFn = (_: any) => {
    // do
  };

  public clearValue(): void {
    // TODO
  }

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
    this.onChangeFn(this.value.value)

    this.cdr.detectChanges();
  }

  private parseInputValue() {
    const textInput = this.value.value;

    const model = ParseTextInput(textInput);

    this.activeTimeId = model.time;
    this.activeDirectionId = model.direction;
    this.activeNumber = model.number;
    this.activePeriodId = model.period;
  }

  private actualizeInput(): void {
    const stringValue = RenderText({
      time: this.activeTimeId,
      number: this.activeNumber,
      direction: this.activeDirectionId,
      period: this.activePeriodId,
    });

    this.value.setValue(stringValue);
  }

  private actualizeMenu() {
    this.timeItems = UpdateActiveItem(this.timeItems, this.activeTimeId);
    this.directionItems = UpdateActiveItem(this.directionItems, this.activeDirectionId);
    this.periodItems = UpdateActiveItem(this.periodItems, this.activePeriodId);
  }
}
