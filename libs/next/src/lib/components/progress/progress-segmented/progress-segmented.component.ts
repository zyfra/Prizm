import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { pzmDefaultProp } from '../../../decorators';
import { pzmIsString } from '../../../util/common/is-string';

@Component({
    selector: `pzm-progress-segmented`,
    templateUrl: `./progress-segmented.component.html`,
    styleUrls: [`./progress-segmented.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmProgressSegmentedComponent {
    @Input()
    @pzmDefaultProp(
        (value: number) => Number.isInteger(value) && value >= 0,
        `Must be non-negative integer between 0 and max`,
    )
    value = 0;

    @Input()
    @pzmDefaultProp(
        (value: number) => Number.isInteger(value) && value > 0,
        `Must be positive integer`,
    )
    max = 1;

    @Input()
    @HostBinding(`attr.data-size`)
    size: "s" | "m" = `m`;

    @Input()
    @pzmDefaultProp()
    colors: string | readonly string[] = `var(--pzm-primary)`;

    public getActiveColor(index: number = 0): string | null {
        return pzmIsString(this.colors)
            ? this.colors
            : this.colors[index] || this.colors[this.colors.length - 1];
    }
}
