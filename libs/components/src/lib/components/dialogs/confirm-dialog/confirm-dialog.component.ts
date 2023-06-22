import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PRIZM_ANIMATIONS_DURATION } from '../../../tokens';
import { PRIZM_DIALOG_CLOSE_STREAM, PRIZM_DIALOG_PROVIDERS } from '../dialog/dialog-options';
import { PrizmAnimationOptions, prizmFadeIn, prizmSlideInTop } from '../../../animations';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmBaseDialogContext, PrizmDialogSize } from '../dialog';
import { PrizmConfirmDialogOptions, PrizmConfirmDialogResultDefaultType } from './confirm-dialog.models';

@Component({
  selector: 'prizm-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: PRIZM_DIALOG_PROVIDERS,
  animations: [prizmSlideInTop, prizmFadeIn],
})
export class PrizmDialogConfirmComponent<DATA = unknown> {
  @Input()
  public context!: PrizmBaseDialogContext<
    PrizmConfirmDialogResultDefaultType,
    PrizmConfirmDialogOptions<DATA>
  >;

  @Input()
  public close!: () => void;

  @HostBinding('attr.prizm-size')
  public get size(): PrizmDialogSize {
    return this.context.size;
  }

  @HostBinding('attr.prizm-dialog-id')
  public get id(): string {
    return this.context.id;
  }

  @HostBinding('@prizmSlideInTop')
  @HostBinding('@prizmFadeIn')
  public get slideInTop(): PrizmAnimationOptions {
    return this.animation;
  }

  @HostBinding('style.width')
  readonly width = '100%';

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_form_submit';

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
    close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.close();
    });
  }
}
