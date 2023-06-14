import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-zone-event-example',
  templateUrl: './zone-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneEventComponent {
  readonly exampleModule: RawLoaderContent = import('./examples/import-module.md?raw');

  readonly baseExample: TuiDocExample = {
    TypeScript: import('./examples/base/base.component?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };
}
