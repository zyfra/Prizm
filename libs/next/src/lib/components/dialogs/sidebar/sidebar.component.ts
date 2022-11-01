import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PZM_ANIMATIONS_DURATION } from '../../../tokens';
import { PZM_DIALOG_CLOSE_STREAM, PZM_DIALOG_PROVIDERS } from '../dialog/dialog-options';
import { PzmAnimationOptions, pzmFadeIn, pzmSlideInTop } from '../../../animations';
import { takeUntil } from 'rxjs/operators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { PzmBaseDialogContext, PzmDialogSize } from '../dialog';
import { PzmSidebarOptions, PzmSidebarResultDefaultType } from './sidebar.models';

@Component({
    selector: 'pzm-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PZM_DIALOG_PROVIDERS,
    animations: [pzmSlideInTop, pzmFadeIn],
})
export class PzmSidebarComponent<DATA = unknown> {
    @Input()
    public context!: PzmBaseDialogContext<PzmSidebarResultDefaultType, PzmSidebarOptions<DATA>>;

    @Input()
    public close!: () => void;

    @HostBinding('attr.pzm-size')
    public get size(): PzmDialogSize {
      return this.context.size
    };

    @HostBinding('attr.pzm-sidebar-id')
    public get id(): string {
      return this.context.id
    };

    @HostBinding('class.full-width')
    public get fullWidth(): boolean {
      return ['b', 't'].includes(this.context.position)
    };

    @HostBinding('style.height')
    public get fullHeight(): boolean {
      return ['l', 'r'].includes(this.context.position)
       ? '100%'
       : (this.context.height as any ?? '200px');
    };

    @HostBinding('@pzmSlideInTop')
    @HostBinding('@pzmFadeIn')
    public get slideInTop(): PzmAnimationOptions {
      return this.animation;
    }

    @HostBinding('attr.testId')
    readonly testId = 'pzm_sidebar';

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
        private readonly destroy$: PzmDestroyService,
    ) {
        close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.close();
        });
    }
}
