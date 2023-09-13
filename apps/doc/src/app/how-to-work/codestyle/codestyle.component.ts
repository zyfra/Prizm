import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RawLoaderContent } from '@prizm-ui/doc';

@Component({
  selector: `prizm-codestyle`,
  templateUrl: `codestyle.component.html`,
  styleUrls: [`./codestyle.component.less`],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodestyleComponent {
  public readonly linters: RawLoaderContent = import('./examples/linters.md?raw');
  public readonly structure: RawLoaderContent = import('./examples/structure.md?raw');
  public readonly styles: RawLoaderContent = import('./examples/styles.md?raw');
  public readonly stylesVariableHtml: RawLoaderContent = import('./examples/styles-variables-html.md?raw');
  public readonly stylesVariableCss: RawLoaderContent = import('./examples/styles-variables-css.md?raw');
  public readonly pureClass: RawLoaderContent = import('./examples/pure-class.md?raw');
  public readonly privateVariables: RawLoaderContent = import('./examples/private-variables.md?raw');
}
