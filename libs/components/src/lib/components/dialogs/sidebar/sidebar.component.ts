import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PRIZM_ANIMATIONS_DURATION } from '../../../tokens';
import { PRIZM_DIALOG_CLOSE_STREAM, PRIZM_DIALOG_PROVIDERS } from '../dialog/dialog-options';
import { PrizmAnimationOptions, prizmFadeIn, prizmSlideInTop } from '../../../animations';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService, PrizmToObservableModule } from '@prizm-ui/helpers';
import { PrizmBaseDialogContext, PrizmDialogSize } from '../dialog';
import { PrizmSidebarOptions, PrizmSidebarResultDefaultType } from './sidebar.models';
import { invokeIfCanCloseSidebar } from './util';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PolymorphModule, PrizmFocusTrapModule } from '../../../directives';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmOverlayModule } from '../../../modules';
import { PrizmInputIconButtonModule } from '../../input';
import { PrizmButtonModule } from '../../button';
import { PrizmScrollbarModule } from '../../scrollbar';

@Component({
  selector: 'prizm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: PRIZM_DIALOG_PROVIDERS,
  animations: [prizmSlideInTop, prizmFadeIn],
  standalone: true,
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmThemeModule,
    PrizmToObservableModule,
    PrizmOverlayModule,
    PrizmInputIconButtonModule,
    PrizmButtonModule,
    PrizmFocusTrapModule,
    PrizmScrollbarModule,
  ],
})
export class PrizmSidebarComponent<DATA = unknown> extends PrizmAbstractTestId {
  @Input()
  public context!: PrizmBaseDialogContext<PrizmSidebarResultDefaultType, PrizmSidebarOptions<DATA>>;

  @Input()
  public close!: () => void;

  @HostBinding('attr.prizm-size')
  public get size(): PrizmDialogSize {
    return this.context.size as PrizmDialogSize;
  }

  @HostBinding('attr.prizm-sidebar-id')
  public get id(): string {
    return this.context.id as string;
  }

  @HostBinding('class.full-width')
  public get fullWidth(): boolean {
    return ['b', 't'].includes(this.context.position);
  }

  @HostBinding('style.full-height')
  public get fullHeight(): boolean {
    return true;
  }

  @HostBinding('@prizmSlideInTop')
  @HostBinding('@prizmFadeIn')
  public get slideInTop(): PrizmAnimationOptions {
    return this.animation;
  }

  override readonly testId_ = 'ui_area--sidebar';

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
    private readonly destroy$: PrizmDestroyService
  ) {
    super();
    close$
      .pipe(takeUntil(this.destroy$))
      .pipe(
        tap(() => this.closeSidebar()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public closeSidebar(): void {
    invokeIfCanCloseSidebar(() => this.close(), this.context.canClose)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
