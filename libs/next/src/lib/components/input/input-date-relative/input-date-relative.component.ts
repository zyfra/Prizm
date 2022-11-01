import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef, HostBinding,
  Inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { pzmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { PzmInputSize } from '../common/models/zui-input.models';
import {
  getDefaultRelativeDateMenuItems,
  IdByGroup,
  RelativeDateDirectionId,
  RelativeDateMenuItem,
  RelativeDateMenuItems,
  RelativeDatePeriodId,
  RelativeDateTimeId,
} from './input-date-relative.models';
import { ParseTextInput, RenderText, UpdateActiveItem } from './input-date-relative.utils';
import { pzmIsNativeFocused } from '../../../util';
import { ZUI_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { ZuiDateButton } from '../../../types/date-button';

const MenuItems: RelativeDateMenuItems = getDefaultRelativeDateMenuItems();
const ValidationPattern = '(T|\\*)((\\+|\\-)(\\d+)(Y|M|d|h|m|s))?';

@Component({
  selector: 'zui-input-date-relative',
  templateUrl: './input-date-relative.component.html',
  styleUrls: ['./input-date-relative.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZuiInputDateRelativeComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiInputDateRelativeComponent implements AfterViewInit, OnInit, ControlValueAccessor, OnDestroy {
  @ViewChild('focusableElementRef', {read: ElementRef})
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @pzmDefaultProp()
  public label = 'Относительное';

  @Input()
  @pzmDefaultProp()
  public placeholder = 'Выберите относительное время';

  @Input()
  @pzmDefaultProp()
  public disabled: boolean;

  @Input()
  @pzmDefaultProp()
  public showClear: boolean;

  @Input()
  @pzmDefaultProp()
  public canOpen = true;

  @Input()
  @pzmDefaultProp()
  public outer = false;

  @Input()
  @pzmDefaultProp()
  public size: PzmInputSize = 'm';

  @Input()
  @pzmDefaultProp()
  extraButtonInjector: Injector = this.injector;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_input_date_relative';

  public isOpen = false;

  public value = new FormControl('', Validators.pattern(ValidationPattern));
  public timeItems: RelativeDateMenuItem<RelativeDateTimeId>[] = [...MenuItems.time];
  public directionItems: RelativeDateMenuItem<RelativeDateDirectionId>[] = [...MenuItems.direction];
  public periodItems: RelativeDateMenuItem<RelativeDatePeriodId>[] = [...MenuItems.period];

  private activeTimeId: RelativeDateTimeId;
  private activeDirectionId: RelativeDateDirectionId;
  private activePeriodId: RelativeDatePeriodId;
  private activeNumber = '';

  public onChangeFn: (_: unknown) => unknown;
  public onTouched: VoidFunction;

  private readonly subscriptions = new Subscription();

  public rightButtons$: BehaviorSubject<ZuiDateButton[]>;

  constructor(
    public readonly injector: Injector,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.rightButtons$ = this.extraButtonInjector.get(ZUI_DATE_RIGHT_BUTTONS);
  }

  public ngAfterViewInit(): void {
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

  public ngOnDestroy(): void {
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

  public onMenuItemClick(event: MouseEvent, item: RelativeDateMenuItem): void {
    event.stopImmediatePropagation();
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

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
  }

  public get focused(): boolean {
    return pzmIsNativeFocusedIn(this.focusableElement.nativeElement);
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

  public onClear(): void {
    this.activeTimeId = null;
    this.actualizeMenu();
  }

  /**
   * Actualize menu items, as radio group button
   */
  private actualizeMenu(): void {
    this.timeItems = UpdateActiveItem(this.timeItems, this.activeTimeId);
    this.directionItems = UpdateActiveItem(this.directionItems, this.activeDirectionId);
    this.periodItems = UpdateActiveItem(this.periodItems, this.activePeriodId);
  }

  public onOpenChange(state: boolean): void {
    this.isOpen = state;
  }

  public safeOpenModal(): void {
    const inputElement = this.focusableElement.nativeElement;
    if (
      !this.isOpen &&
      !this.disabled &&
      inputElement &&
      pzmIsNativeFocused(inputElement)
    ) {
      this.isOpen = true;
      this.cdr.markForCheck();
    }
  }
}
