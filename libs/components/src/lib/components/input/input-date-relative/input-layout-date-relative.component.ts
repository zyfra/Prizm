import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
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
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmDateButton } from '../../../types/date-button';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { PrizmInputStatusTextDirective } from '../common';
import { PRIZM_INPUT_LAYOUT_DATE_RELATIVE } from '../../../tokens';
import { PrizmLanguageInputLayoutDateRelative } from '@prizm-ui/i18n';

const MenuItems: RelativeDateMenuItems = getDefaultRelativeDateMenuItems();

@Component({
  selector: 'prizm-input-layout-date-relative',
  templateUrl: './input-layout-date-relative.component.html',
  styleUrls: ['./input-layout-date-relative.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutDateRelativeComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateRelativeComponent },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmInputLayoutDateRelativeComponent
  extends PrizmInputNgControl<string>
  implements OnInit, OnDestroy
{
  readonly nativeElementType = 'input-layout-date-relative';
  readonly hasClearButton = true;

  @ViewChild(PrizmInputStatusTextDirective, { static: true })
  override statusText: PrizmInputStatusTextDirective;

  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  public placeholder = 'Выберите относительное время';

  @Input()
  @prizmDefaultProp()
  public canOpen = true;

  @Input()
  @prizmDefaultProp()
  extraButtonInjector: Injector = this.injector;

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_input_date_relative';

  public isOpen = false;

  // public value = new UntypedFormControl('', Validators.pattern(ValidationPattern));
  public timeItems: RelativeDateMenuItem<RelativeDateTimeId>[] = [...MenuItems.time];
  public directionItems: RelativeDateMenuItem<RelativeDateDirectionId>[] = [...MenuItems.direction];
  public periodItems: RelativeDateMenuItem<RelativeDatePeriodId>[] = [...MenuItems.period];

  private activeTimeId: RelativeDateTimeId;
  private activeDirectionId: RelativeDateDirectionId;
  private activePeriodId: RelativeDatePeriodId;
  private activeNumber = '';

  private readonly subscriptions = new Subscription();

  public rightButtons$: BehaviorSubject<PrizmDateButton[]>;

  constructor(
    @Inject(Injector) injector: Injector,
    @Inject(PRIZM_INPUT_LAYOUT_DATE_RELATIVE)
    public readonly dictionary$: Observable<PrizmLanguageInputLayoutDateRelative['inputLayoutDateRelative']>
  ) {
    super(injector);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
  }

  public valueChange(value: string) {
    this.parseInputValue(value);
    this.actualizeMenu();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Parses control input value
   */
  private parseInputValue(value: string): void {
    const textInput = value;

    const model = ParseTextInput(textInput);

    this.activeTimeId = model.time;
    this.activeDirectionId = model.direction;
    this.activeNumber = model.number;
    this.activePeriodId = model.period;
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement?.nativeElement
      ? (this.focusableElement?.nativeElement as HTMLInputElement)
      : null;
  }

  public get focused(): boolean {
    return (
      this.focusableElement?.nativeElement && prizmIsNativeFocusedIn(this.focusableElement?.nativeElement)
    );
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

    this.updateValue(stringValue);
  }

  public override clear(ev: MouseEvent): void {
    this.parseInputValue('');
    this.updateValue(null);
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
    if (!this.isOpen && !this.disabled) {
      this.isOpen = true;
      this.changeDetectorRef.markForCheck();
    }
  }
}
