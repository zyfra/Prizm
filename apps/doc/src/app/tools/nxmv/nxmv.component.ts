import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-plugin-example',
  templateUrl: './nxmv.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxmvComponent {
  readonly exampleOfJson: TuiDocExample = {
    JSON: import('./files/nxmv.json.md?raw'),
  };
  readonly exampleOfIgnore: TuiDocExample = {
    JSON: import('./files/nxmv.ignore.md?raw'),
  };
  readonly exampleOfTemplates: TuiDocExample = {
    TypeScript: import('./files/ts.const.ts?raw'),
    PackageJson: import('./files/package.json.md?raw'),
  };
}
