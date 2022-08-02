import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ZUI_ANIMATIONS_DURATION } from '../../../tokens';
import { ZUI_DIALOG_CLOSE_STREAM, ZUI_DIALOG_PROVIDERS } from './dialog-options';
import { ZuiAnimationOptions, zuiFadeIn, zuiSlideInTop } from '../../../animations';
import { zuiPure } from '../../../decorators';
import { takeUntil } from 'rxjs/operators';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiBaseDialogContext, ZuiDialogButton, ZuiDialogOptions, ZuiDialogSize } from './dialog.models';
import { PolymorphContent } from '../../../directives';

@Component({
    selector: 'zui-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: ZUI_DIALOG_PROVIDERS,
    animations: [zuiSlideInTop, zuiFadeIn],
})
export class ZuiDialogComponent<O = unknown, DATA = unknown> {
    @Input()
    public context!: ZuiBaseDialogContext<O, ZuiDialogOptions<O, DATA>>;

    @Input()
    public close!: () => void;

    @HostBinding('attr.zui-size')
    public get size(): ZuiDialogSize {
      return this.context.size
    };

    @HostBinding('attr.zui-dialog-id')
    public get id(): string {
      return this.context.id
    };

    @HostBinding('@zuiSlideInTop')
    @HostBinding('@zuiFadeIn')
    public get slideInTop(): ZuiAnimationOptions {
      return this.animation;
    }

    @zuiPure
    public get isFooterArray(): boolean {
      return Boolean(this.footer && Array.isArray(this.footer) && this.footer.length);
    }

    @zuiPure
    public get footer(): PolymorphContent<ZuiBaseDialogContext<O, ZuiDialogOptions<O, DATA>>> | (ZuiDialogButton<O, ZuiDialogOptions<O, DATA>>[]) {
      return this.context.footer ?? [
        {
          size: this.context.size,
          action: (ctx: ZuiBaseDialogContext<O, ZuiDialogOptions<O, DATA>>): void => {
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
        @Inject(ZUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(ZUI_DIALOG_CLOSE_STREAM) readonly close$: Observable<unknown>,
        private readonly destroy$: ZuiDestroyService
    ) {
        close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.close();
        });
    }
}
