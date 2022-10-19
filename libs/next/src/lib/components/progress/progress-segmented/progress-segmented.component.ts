import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { zuiDefaultProp } from '../../../decorators';
import { zuiIsString } from '../../../util/common/is-string';

@Component({
    selector: `zui-progress-segmented`,
    templateUrl: `./progress-segmented.component.html`,
    styleUrls: [`./progress-segmented.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiProgressSegmentedComponent {
    @Input()
    @zuiDefaultProp(
        (value: number) => Number.isInteger(value) && value >= 0,
        `Must be non-negative integer between 0 and max`,
    )
    value = 0;

    @Input()
    @zuiDefaultProp(
        (value: number) => Number.isInteger(value) && value > 0,
        `Must be positive integer`,
    )
    max = 1;

    @Input()
    @HostBinding(`attr.data-size`)
    size: "s" | "m" = `m`;

    @Input()
    @zuiDefaultProp()
    colors: string | readonly string[] = `var(--zui-primary)`;

    public getActiveColor(index: number = 0): string | null {
        return zuiIsString(this.colors)
            ? this.colors
            : this.colors[index] || this.colors[this.colors.length - 1];
    }
}
