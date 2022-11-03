import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PZM_ANIMATIONS_DURATION } from '../../../tokens';
import { PZM_DIALOG_CLOSE_STREAM, PZM_DIALOG_PROVIDERS } from '../dialog/dialog-options';
import { PrizmAnimationOptions, pzmFadeIn, pzmSlideInTop } from '../../../animations';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { PrizmBaseDialogContext, PrizmDialogSize } from '../dialog';
import { PrizmSidebarOptions, PrizmSidebarResultDefaultType } from './sidebar.models';

@Component({
    selector: 'pzm-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PZM_DIALOG_PROVIDERS,
    animations: [pzmSlideInTop, pzmFadeIn],
})
export class PrizmSidebarComponent<DATA = unknown> {
    @Input()
    public context!: PrizmBaseDialogContext<PrizmSidebarResultDefaultType, PrizmSidebarOptions<DATA>>;

    @Input()
    public close!: () => void;

    @HostBinding('attr.pzm-size')
    public get size(): PrizmDialogSize {
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
    public get slideInTop(): PrizmAnimationOptions {
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
        private readonly destroy$: PrizmDestroyService,
    ) {
        close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.close();
        });
    }
}
