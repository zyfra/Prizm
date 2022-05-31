import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input, TemplateRef,
} from '@angular/core';
import {ZUI_BUTTON_OPTIONS, ZuiAppearance, ZuiAppearanceType, ZuiButtonOptions, ZuiContent} from "./button-options";
import {AbstractZuiInteractive} from "../../abstract/interactive";
import {zuiIsNativeFocused} from "../../util/zui-is-native-focused";
import {ZuiSize} from "../../util/zui-size-bigger";
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {watch} from "@taiga-ui/cdk";
import {takeUntil, tap} from "rxjs/operators";
import {zuiPressedObservable} from "../../directives/observables/zui-pressed-observable";

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
  size: ZuiSize = this.options.size;

  /** can pass template or icon class */
  @Input()
  icon: ZuiContent;

  /** can pass template or icon class */
  @Input()
  iconRight: ZuiContent;

  @Input()
  @HostBinding('attr.data-appearance')
  appearance: ZuiAppearance = this.options.appearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  appearanceType: ZuiAppearanceType = this.options.appearanceType;

  @Input()
  disabled = false;

  @Input()
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
        watch(changeDetectorRef),
        takeUntil(destroy$)
      ).subscribe();
  }

  public isTemplateRef(icon: ZuiContent): icon is TemplateRef<unknown> {
    return icon instanceof TemplateRef;
  }
}
