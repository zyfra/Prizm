import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { prizmRawLoad } from '@prizm-ui/doc';

@Component({
  selector: `prizm-changelog`,
  templateUrl: `changelog.component.html`,
  styleUrls: [`./changelog.component.less`],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangelogComponent {
  readonly changelog = of(import(`./CHANGELOG.md?raw`)).pipe(switchMap(prizmRawLoad));
}
