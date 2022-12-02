import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PRIZM_ANIMATIONS_DURATION } from '../../../tokens';
import { PRIZM_DIALOG_CLOSE_STREAM, PRIZM_DIALOG_PROVIDERS } from './dialog-options';
import { PrizmAnimationOptions, prizmFadeIn, prizmSlideInTop } from '../../../animations';
import { prizmPure } from '@prizm-ui/core';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmBaseDialogContext, PrizmDialogButton, PrizmDialogOptions, PrizmDialogSize } from './dialog.models';
import { PolymorphContent } from '../../../directives';

@Component({
    selector: 'prizm-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PRIZM_DIALOG_PROVIDERS,
    animations: [prizmSlideInTop, prizmFadeIn],
})
export class PrizmDialogComponent<O = unknown, DATA = unknown> {
    @Input()
    public context!: PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>;

    @Input()
    public close!: () => void;

    @HostBinding('attr.prizm-size')
    public get size(): PrizmDialogSize {
      return this.context.size
    };

    @HostBinding('attr.prizm-dialog-id')
    public get id(): string {
      return this.context.id
    };

    @HostBinding('@prizmSlideInTop')
    @HostBinding('@prizmFadeIn')
    public get slideInTop(): PrizmAnimationOptions {
      return this.animation;
    }

    @HostBinding('attr.testId')
    readonly testId = 'prizm_dialog';

    @prizmPure
    public get isFooterArray(): boolean {
      return Boolean(this.footer && Array.isArray(this.footer) && this.footer.length);
    }

    @prizmPure
    public get footer(): PolymorphContent<PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>> | (PrizmDialogButton<O, PrizmDialogOptions<O, DATA>>[]) {
      return this.context.footer ?? [
        {
          size: this.context.size,
          action: (ctx: PrizmBaseDialogContext<O, PrizmDialogOptions<O, DATA>>): void => {
            ctx.completeWith(null);
          },
          text: this.context.closeWord
        }
      ] ;
    }

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
        close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.close();
        });
    }
}
