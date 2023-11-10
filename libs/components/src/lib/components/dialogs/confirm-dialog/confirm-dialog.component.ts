import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PRIZM_ANIMATIONS_DURATION } from '../../../tokens';
import { PRIZM_DIALOG_CLOSE_STREAM, PRIZM_DIALOG_PROVIDERS } from '../dialog/dialog-options';
import { PrizmAnimationOptions, prizmFadeIn, prizmSlideInTop } from '../../../animations';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService, PrizmToObservableModule } from '@prizm-ui/helpers';
import { PrizmBaseDialogContext, PrizmDialogSize } from '../dialog';
import { PrizmConfirmDialogOptions, PrizmConfirmDialogResultDefaultType } from './confirm-dialog.models';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PolymorphModule, PrizmFocusTrapModule } from '../../../directives';
import { PrizmOverlayModule } from '../../../modules';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmButtonModule } from '../../button';
import { PrizmScrollbarModule } from '../../scrollbar';

@Component({
  selector: 'prizm-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: PRIZM_DIALOG_PROVIDERS,
  standalone: true,
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmOverlayModule,
    PrizmThemeModule,
    PrizmToObservableModule,
    PrizmButtonModule,
    PrizmFocusTrapModule,
    PrizmScrollbarModule,
  ],
  animations: [prizmSlideInTop, prizmFadeIn],
})
export class PrizmDialogConfirmComponent<DATA = unknown> extends PrizmAbstractTestId {
  @Input()
  public context!: PrizmBaseDialogContext<
    PrizmConfirmDialogResultDefaultType,
    PrizmConfirmDialogOptions<DATA>
  >;

  @Input()
  public close!: () => void;

  @HostBinding('attr.prizm-size')
  public get size(): PrizmDialogSize {
    return this.context.size as PrizmDialogSize;
  }

  @HostBinding('attr.prizm-dialog-id')
  public get id(): string {
    return this.context.id as string;
  }

  @HostBinding('@prizmSlideInTop')
  @HostBinding('@prizmFadeIn')
  public get slideInTop(): PrizmAnimationOptions {
    return this.animation;
  }

  @HostBinding('style.width')
  readonly width = '100%';

  override readonly testId_ = 'ui_form_submit';

  private readonly animation = {
    value: '',
    params: {
      start: '40px',
      duration: this.duration,
    },
  } as const;

  constructor(
    @Inject(PRIZM_ANIMATIONS_DURATION) private readonly duration: number,
    @Inject(PRIZM_DIALOG_CLOSE_STREAM) readonly close$: Observable<unknown>,
    private readonly destroy$: PrizmDestroyService,
    private readonly elRef: ElementRef
  ) {
    super();
    close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.close();
    });
  }
}
