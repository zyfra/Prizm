import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmIsString } from '../../../util/common/is-string';

@Component({
    selector: `prizm-progress-segmented`,
    templateUrl: `./progress-segmented.component.html`,
    styleUrls: [`./progress-segmented.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmProgressSegmentedComponent {
    @Input()
    @prizmDefaultProp(
        (value: number) => Number.isInteger(value) && value >= 0,
        `Must be non-negative integer between 0 and max`,
    )
    value = 0;

    @Input()
    @prizmDefaultProp(
        (value: number) => Number.isInteger(value) && value > 0,
        `Must be positive integer`,
    )
    max = 1;

    @Input()
    @HostBinding(`attr.data-size`)
    size: "s" | "m" = `m`;

    @Input()
    @prizmDefaultProp()
    colors: string | readonly string[] = `var(--prizm-primary)`;

    public getActiveColor(index: number = 0): string | null {
        return prizmIsString(this.colors)
            ? this.colors
            : this.colors[index] || this.colors[this.colors.length - 1];
    }
}
