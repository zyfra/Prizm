import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PZM_ANIMATIONS_DURATION } from '../../../tokens';
import { PZM_DIALOG_CLOSE_STREAM, PZM_DIALOG_PROVIDERS } from '../dialog/dialog-options';
import { PrizmAnimationOptions, pzmFadeIn, pzmSlideInTop } from '../../../animations';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { PrizmBaseDialogContext, PrizmDialogSize } from '../dialog';
import { PrizmConfirmDialogOptions, PrizmConfirmDialogResultDefaultType } from './confirm-dialog.models';

@Component({
    selector: 'pzm-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PZM_DIALOG_PROVIDERS,
    animations: [pzmSlideInTop, pzmFadeIn],
})
export class PrizmDialogConfirmComponent<DATA = unknown> {
    @Input()
    public context!: PrizmBaseDialogContext<PrizmConfirmDialogResultDefaultType, PrizmConfirmDialogOptions<DATA>>;

    @Input()
    public close!: () => void;

    @HostBinding('attr.pzm-size')
    public get size(): PrizmDialogSize {
      return this.context.size
    };

    @HostBinding('attr.pzm-dialog-id')
    public get id(): string {
      return this.context.id
    };

    @HostBinding('@pzmSlideInTop')
    @HostBinding('@pzmFadeIn')
    public get slideInTop(): PrizmAnimationOptions {
      return this.animation;
    }

    @HostBinding('attr.testId')
    readonly testId = 'pzm_confirm_dialog';

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
        private readonly destroy$: PrizmDestroyService,
        private readonly elRef: ElementRef,
    ) {
        close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.close();
        });
    }
}
