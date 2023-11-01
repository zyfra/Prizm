import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-overlay-example',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent {
  // List inputs
  styleClass!: string;
  label = 'Button Name';

  // list
  readonly typeVariants: ReadonlyArray<'button' | 'submit' | 'reset'> = ['submit', 'reset', 'button'];
  type = this.typeVariants[0];

  icon!: string;

  readonly iconPosVariants: ReadonlyArray<unknown> = ['left', 'right', 'top', 'bottom'];
  iconPos: unknown = this.iconPosVariants[0];
  disabled = false;
  badge!: string;
  style!: string;

  readonly exampleModule: RawLoaderContent = import('./examples/import-module.md?raw');

  readonly globalExample: TuiDocExample = {
    TypeScript: import('./examples/global/template?raw'),
    HTML: import('./examples/global/template.html?raw'),
  };

  readonly relativeExample: TuiDocExample = {
    TypeScript: import('./examples/relative/template?raw'),
    HTML: import('./examples/relative/template.html?raw'),
  };

  readonly customContextExample: TuiDocExample = {
    TypeScript: import('./examples/custom-context/custom-context.component?raw'),
    HTML: import('./examples/custom-context/custom-context.component.html?raw'),
  };

  readonly fullscreenExample: TuiDocExample = {
    TypeScript: import('./examples/fullscreen/template?raw'),
    HTML: import('./examples/fullscreen/template.html?raw'),
  };

  readonly slideExample: TuiDocExample = {
    TypeScript: import('./examples/slide/template?raw'),
    HTML: import('./examples/slide/template.html?raw'),
  };

  readonly withComponentExample: TuiDocExample = {
    TypeScript: import('./examples/with-component/template?raw'),
    HTML: import('./examples/with-component/template.html?raw'),
  };
}
