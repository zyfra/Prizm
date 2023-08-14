import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-for-developers',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternationalizationComponent {
  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
  public readonly updateDictionaryModule: RawLoaderContent = import(
    './examples/update-dictionary-module.md?raw'
  );
}
