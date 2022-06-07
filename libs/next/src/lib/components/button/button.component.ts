import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input, TemplateRef,
} from '@angular/core';
import {ZUI_BUTTON_OPTIONS, ZuiButtonOptions, ZuiContent} from "./button-options";
import {AbstractZuiInteractive} from "../../abstract/interactive";
import {zuiIsNativeFocused} from "../../util/zui-is-native-focused";
import {ZuiSize} from "../../util/zui-size-bigger";
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {takeUntil, tap} from "rxjs/operators";
import {zuiPressedObservable} from "../../observables/pressed-observable";
import {ZuiAppearance, ZuiAppearanceType} from "../../types/appearance.types";
import {zuiWatch} from '../../observables/watch';
import {zuiDefaultProp} from "../../decorators";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[zuiButton], button[zuiIconButton], a[zuiButton], a[zuiIconButton]',
  styleUrls: ['./button.component.less'],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ZuiDestroyService,
  ],
})
export class ZuiButtonComponent extends AbstractZuiInteractive {
  @Input()
  @HostBinding('attr.data-size')
  @zuiDefaultProp()
  size: ZuiSize = this.options.size;

  /** can pass template or icon class */
  @Input()
  icon: ZuiContent;

  /** can pass template or icon class */
  @Input()
  iconRight: ZuiContent;

  @Input()
  @HostBinding('attr.data-appearance')
  @zuiDefaultProp()
  appearance: ZuiAppearance = this.options.appearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  @zuiDefaultProp()
  appearanceType: ZuiAppearanceType = this.options.appearanceType;

  @Input()
  @zuiDefaultProp()
  disabled = false;

  @Input()
  @HostBinding('class._loading')
  @zuiDefaultProp()
  showLoader = false;

  readonly TemplateRef = TemplateRef;

  get focused(): boolean {
    return !this.showLoader && zuiIsNativeFocused(this.elementRef.nativeElement);
  }

  constructor(
    @Inject(ZUI_BUTTON_OPTIONS) private readonly options: ZuiButtonOptions,
    private readonly elementRef: ElementRef,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly destroy$: ZuiDestroyService,
  ) {
    super();

    zuiPressedObservable(elementRef.nativeElement, {
      onlyTrusted: true,
    })
      .pipe(
        tap(pressed => {this.updatePressed(pressed)}),
        zuiWatch(changeDetectorRef),
        takeUntil(destroy$)
      ).subscribe();
  }

  public isTemplateRef(icon: ZuiContent): icon is TemplateRef<unknown> {
    return icon instanceof TemplateRef;
  }

  get loaderSize(): ZuiSize {
    return this.size === 'l' || this.size === 'xl' ? 'm' : 's';
  }
}
