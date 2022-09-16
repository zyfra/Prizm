import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ZUI_ANIMATIONS_DURATION } from '../../../tokens';
import { ZUI_DIALOG_CLOSE_STREAM, ZUI_DIALOG_PROVIDERS } from '../dialog/dialog-options';
import { ZuiAnimationOptions, zuiFadeIn, zuiSlideInTop } from '../../../animations';
import { takeUntil } from 'rxjs/operators';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiBaseDialogContext, ZuiDialogSize } from '../dialog';
import { ZuiConfirmDialogOptions, ZuiConfirmDialogResultDefaultType } from './confirm-dialog.models';

@Component({
    selector: 'zui-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: ZUI_DIALOG_PROVIDERS,
    animations: [zuiSlideInTop, zuiFadeIn],
})
export class ZuiDialogConfirmComponent<DATA = unknown> {
    @Input()
    public context!: ZuiBaseDialogContext<ZuiConfirmDialogResultDefaultType, ZuiConfirmDialogOptions<DATA>>;

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

    @HostBinding('attr.testId')
    readonly testId = 'zui_confirm_dialog';

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
        private readonly destroy$: ZuiDestroyService,
        private readonly elRef: ElementRef,
    ) {
        close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.close();
        });
    }
}
