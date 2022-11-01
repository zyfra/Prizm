import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PZM_ANIMATIONS_DURATION } from '../../../tokens';
import { PZM_DIALOG_CLOSE_STREAM, PZM_DIALOG_PROVIDERS } from './dialog-options';
import { PzmAnimationOptions, pzmFadeIn, pzmSlideInTop } from '../../../animations';
import { pzmPure } from '../../../decorators';
import { takeUntil } from 'rxjs/operators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { PzmBaseDialogContext, PzmDialogButton, PzmDialogOptions, PzmDialogSize } from './dialog.models';
import { PolymorphContent } from '../../../directives';

@Component({
    selector: 'pzm-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PZM_DIALOG_PROVIDERS,
    animations: [pzmSlideInTop, pzmFadeIn],
})
export class PzmDialogComponent<O = unknown, DATA = unknown> {
    @Input()
    public context!: PzmBaseDialogContext<O, PzmDialogOptions<O, DATA>>;

    @Input()
    public close!: () => void;

    @HostBinding('attr.pzm-size')
    public get size(): PzmDialogSize {
      return this.context.size
    };

    @HostBinding('attr.pzm-dialog-id')
    public get id(): string {
      return this.context.id
    };

    @HostBinding('@pzmSlideInTop')
    @HostBinding('@pzmFadeIn')
    public get slideInTop(): PzmAnimationOptions {
      return this.animation;
    }

    @HostBinding('attr.testId')
    readonly testId = 'pzm_dialog';

    @pzmPure
    public get isFooterArray(): boolean {
      return Boolean(this.footer && Array.isArray(this.footer) && this.footer.length);
    }

    @pzmPure
    public get footer(): PolymorphContent<PzmBaseDialogContext<O, PzmDialogOptions<O, DATA>>> | (PzmDialogButton<O, PzmDialogOptions<O, DATA>>[]) {
      return this.context.footer ?? [
        {
          size: this.context.size,
          action: (ctx: PzmBaseDialogContext<O, PzmDialogOptions<O, DATA>>): void => {
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
        @Inject(PZM_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(PZM_DIALOG_CLOSE_STREAM) readonly close$: Observable<unknown>,
        private readonly destroy$: PzmDestroyService
    ) {
        close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.close();
        });
    }
}
