import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ZUI_ANIMATIONS_DURATION } from '../../../tokens';
import { ZUI_DIALOG_CLOSE_STREAM, ZUI_DIALOG_PROVIDERS } from '../dialog/dialog-options';
import { ZuiAnimationOptions, zuiFadeIn, zuiSlideInTop } from '../../../animations';
import { takeUntil } from 'rxjs/operators';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiBaseDialogContext, ZuiDialogSize } from '../dialog';
import { ZuiSidebarOptions, ZuiSidebarResultDefaultType } from './sidebar.models';

@Component({
    selector: 'zui-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: ZUI_DIALOG_PROVIDERS,
    animations: [zuiSlideInTop, zuiFadeIn],
})
export class ZuiSidebarComponent<DATA = unknown> {
    @Input()
    public context!: ZuiBaseDialogContext<ZuiSidebarResultDefaultType, ZuiSidebarOptions<DATA>>;

    @Input()
    public close!: () => void;

    @HostBinding('attr.zui-size')
    public get size(): ZuiDialogSize {
      return this.context.size
    };

    @HostBinding('attr.zui-sidebar-id')
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

    @HostBinding('@zuiSlideInTop')
    @HostBinding('@zuiFadeIn')
    public get slideInTop(): ZuiAnimationOptions {
      return this.animation;
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
        private readonly destroy$: ZuiDestroyService,
    ) {
        close$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.close();
        });
    }
}
