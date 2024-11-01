import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PRIZM_ANIMATIONS_DURATION } from '../../../tokens';
import { PRIZM_DIALOG_CLOSE_STREAM, PRIZM_DIALOG_PROVIDERS } from './dialog-options';
import { PrizmAnimationOptions, prizmFadeIn, prizmSlideInTop } from '../../../animations';
import { prizmPure } from '@prizm-ui/core';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import {
  PrizmBaseDialogContext,
  PrizmDialogButton,
  PrizmDialogOptions,
  PrizmDialogSize,
} from './dialog.models';
import {
  PolymorphContent,
  PolymorphModule,
  PrizmFocusTrapModule,
  PrizmHintOnOverflowDirective,
} from '../../../directives';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmTheme, PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmOverlayModule } from '../../../modules';
import { PrizmButtonModule } from '../../button';
import { PrizmInputIconButtonModule } from '../../input/common/input-icon-button/input-icon-button.module';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsXmark } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: PRIZM_DIALOG_PROVIDERS,
  animations: [prizmSlideInTop, prizmFadeIn],
  standalone: true,
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmThemeModule,
    PrizmOverlayModule,
    PrizmButtonModule,
    PrizmFocusTrapModule,
    PrizmInputIconButtonModule,
    PrizmScrollbarModule,
    PrizmHintOnOverflowDirective,
  ],
})
export class PrizmDialogComponent<O = unknown, DATA = unknown> extends PrizmAbstractTestId {
  @Input()
  public context!: PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>;

  @Input()
  public close!: () => void;

  get theme(): PrizmTheme {
    return this.context.theme!;
  }

  @HostBinding('attr.prizm-size')
  public get size(): PrizmDialogSize {
    return this.context.size;
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

  override readonly testId_ = 'ui_overlay';

  @HostBinding('style.width')
  readonly width = '100%';

  @prizmPure
  public get isFooterArray(): boolean {
    return Boolean(this.footer && Array.isArray(this.footer) && this.footer.length);
  }

  @prizmPure
  public get footer():
    | PolymorphContent<PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>>
    | PrizmDialogButton<O, PrizmDialogOptions<O, DATA>>[] {
    return (this.context.footer ?? [
      {
        size: this.context.size,
        action: (ctx: PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>): void => {
          ctx.completeWith(null as any);
        },
        text: this.context.closeWord,
      },
    ]) as any;
  }

  private readonly animation = {
    value: '',
    params: {
      start: '40px',
      duration: this.duration,
    },
  } as const;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(
    @Inject(PRIZM_ANIMATIONS_DURATION) private readonly duration: number,
    @Inject(PRIZM_DIALOG_CLOSE_STREAM) readonly close$: Observable<unknown>,
    private readonly destroy$: PrizmDestroyService
  ) {
    super();
    close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.close();
    });

    this.iconsFullRegistry.registerIcons(prizmIconsXmark);
  }
}
