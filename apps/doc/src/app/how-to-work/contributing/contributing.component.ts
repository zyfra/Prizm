import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RawLoaderContent } from '@prizm-ui/doc';

@Component({
  selector: `prizm-codestyle`,
  templateUrl: `contributing.component.html`,
  styleUrls: [`./contributing.component.less`],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContributingComponent {
  public readonly structure: RawLoaderContent = import('./examples/structure.md?raw');
  public readonly naming: RawLoaderContent = import('./examples/naming.md?raw');
  public readonly pureException: RawLoaderContent = import('./examples/pure-exception.md?raw');
  public readonly importing = `import {...} from "@prizm-ui/,,,"`;
}
