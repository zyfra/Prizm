import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { prizmRawLoad } from '@prizm-ui/doc';
import { prizmIconsAgendaFill } from '@prizm-ui/icons/set/lib/icons/prizmIcons-agenda-fill.icon';
@Component({
  selector: `prizm-changelog`,
  templateUrl: `changelog.component.html`,
  styleUrls: [`./changelog.component.less`],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangelogComponent implements OnInit {
  ngOnInit(): void {
    console.log('#mz prizmIconsAgendaFill', prizmIconsAgendaFill);
  }
  readonly changelog = of(import(`./CHANGELOG.md?raw`)).pipe(switchMap(prizmRawLoad));
}
