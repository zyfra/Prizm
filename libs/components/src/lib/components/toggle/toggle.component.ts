import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { PRIZM_TOGGLE_OPTIONS, PrizmToggleOptions } from './toggle-options';
import { prizmDefaultProp } from '@prizm-ui/core';
import { AbstractPrizmControl } from '../../abstract/control';
import { prizmIsNativeFocused, PrizmSize, PrizmSizeL, PrizmSizeM } from '../../util';
import { PrizmNativeFocusableElement } from '../../types/focusable-element-accessor';
import { PrizmAppearance } from '../../types/appearance.types';
import { CommonModule } from '@angular/common';
import {
  PolymorphModule,
  PrizmCheckedDirective,
  PrizmFocusableDirective,
  PrizmFocusedDirective,
  PrizmFocusVisibleDirective,
  PrizmHoveredDirective,
  PrizmPressedDirective,
  PrizmWrapperComponent,
} from '../../directives';
import { PrizmLoaderComponent } from '../loader';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

@Component({
  selector: 'prizm-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PrizmFocusedDirective,
    PrizmFocusableDirective,
    PrizmFocusVisibleDirective,
    PrizmHoveredDirective,
    PrizmPressedDirective,
    PrizmCheckedDirective,
    PrizmWrapperComponent,
    PrizmLoaderComponent,
    PolymorphModule,
    PrizmIconsFullComponent,
  ],
})
export class PrizmToggleComponent extends AbstractPrizmControl<boolean> {
  @ViewChild('focusableElement')
  private readonly focusableElement?: ElementRef<PrizmNativeFocusableElement>;

  @Input()
  @prizmDefaultProp()
  singleColor = this.options.singleColor;

  @Input()
  @prizmDefaultProp()
  iconOn = this.options.icons.toggleOn;

  @Input()
  @prizmDefaultProp()
  iconOff = this.options.icons.toggleOff;

  @Input()
  @HostBinding('class._loading')
  @prizmDefaultProp()
  showLoader = false;

  @Input()
  @HostBinding('attr.data-size')
  @prizmDefaultProp()
  size: PrizmSizeL | PrizmSizeM = this.options.size;

  override readonly testId_ = 'ui_checkbox';

  constructor(
    @Optional()
    @Self()
    @Inject(NgControl)
    control: NgControl | null,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Optional()
    @Inject(PRIZM_TOGGLE_OPTIONS)
    readonly options: PrizmToggleOptions
  ) {
    super(control, changeDetectorRef);
  }

  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  get appearance(): PrizmAppearance {
    return this.singleColor || this.checked ? 'primary' : 'secondary';
  }

  get sizeM(): boolean {
    return this.size === 'm';
  }

  @HostBinding('class._checked')
  get checked(): boolean {
    return this.value;
  }

  get loaderSize(): PrizmSize {
    return this.sizeM ? 'xs' : 's';
  }

  public onChecked(checked: boolean): void {
    this.updateValue(checked);
  }

  public onFocused(focused: boolean): void {
    this.updateFocused(focused);
  }

  public onHovered(hovered: boolean): void {
    this.updateHovered(hovered);
  }

  public onPressed(pressed: boolean): void {
    this.updatePressed(pressed);
  }

  public onFocusVisible(focusVisible: boolean): void {
    this.updateFocusVisible(focusVisible);
  }

  protected getFallbackValue(): boolean {
    return false;
  }
}
