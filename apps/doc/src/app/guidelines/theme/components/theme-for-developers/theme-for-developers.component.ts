import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent } from '@taiga-ui/addon-doc';

@Component({
  selector: 'prizm-theme-for-developers',
  templateUrl: './theme-for-developers.component.html',
  styleUrls: ['./theme-for-developers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeForDevelopersComponent {
  public readonly setup: RawLoaderContent = import('./../examples/setup.md?raw');
  public readonly setupModule: RawLoaderContent = import('./../examples/setup-module.md?raw');
  public readonly setupStyles: RawLoaderContent = import('./../examples/setup-styles.md?raw');
  public readonly themeSwitcher: RawLoaderContent = import('./../examples/theme-switcher.md?raw');
  public readonly themeReverse: RawLoaderContent = import('./../examples/theme-reverse.md?raw');
  public readonly styleVariables: RawLoaderContent = import('./../examples/style-variables.md?raw');
  public readonly customTheme: RawLoaderContent = import('./../examples/custom-theme.md?raw');
  public readonly customThemeInverted: RawLoaderContent = import('./../examples/custom-theme.md?raw');
}
