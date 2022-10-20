import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: `label[zuiProgressLabel]`,
    templateUrl: `./progress-label.component.html`,
    styleUrls: [`./progress-label.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiProgressLabelComponent {
}
