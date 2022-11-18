import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { rawLoad } from '@taiga-ui/addon-doc';

@Component({
    selector: `prizm-changelog`,
    templateUrl: `changelog.component.html`,
    styleUrls: [`./changelog.component.less`],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangelogComponent {
    readonly changelog = of(import(`!!raw-loader!./CHANGELOG.md`)).pipe(
        switchMap(rawLoad),
    );
}
