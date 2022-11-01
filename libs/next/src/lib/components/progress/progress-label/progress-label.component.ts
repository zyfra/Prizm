import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: `label[pzmProgressLabel]`,
    templateUrl: `./progress-label.component.html`,
    styleUrls: [`./progress-label.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PzmProgressLabelComponent {
}
