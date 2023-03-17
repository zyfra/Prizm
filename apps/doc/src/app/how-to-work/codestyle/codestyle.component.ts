import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { prizmRawLoad } from '@prizm-ui/doc';

@Component({
  selector: `prizm-codestyle`,
  templateUrl: `codestyle.component.html`,
  styleUrls: [`./codestyle.component.less`],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodestyleComponent {
  readonly text = of(import(`../../../../../../CODESTYLE.md?raw`)).pipe(switchMap(prizmRawLoad));
}
