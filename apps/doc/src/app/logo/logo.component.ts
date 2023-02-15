import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { PrizmThemeService } from '@prizm-ui/theme';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { PrizmIconsSvgRegistry, PrizmIconSvgEnum, prizmIconSvgOtherGitHub } from '@prizm-ui/icons';

@Component({
  selector: 'prizm-doc-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly isNight$ = this.themeSwitcher.change$.pipe(map(i => i.theme === 'dark'));

  readonly githubSvgName = PrizmIconSvgEnum.OTHER_GIT_HUB;

  constructor(
    private readonly themeSwitcher: PrizmThemeService,
    private readonly svgRegistry: PrizmIconsSvgRegistry,
    @Inject(LOCAL_STORAGE) private readonly storage: Storage
  ) {
    this.svgRegistry.registerIcons([prizmIconSvgOtherGitHub]);
  }

  public onMode(isNight: boolean): void {
    this.themeSwitcher.update(isNight ? 'dark' : 'light');
    /* update taiga doc theme */
    // this.docEl.onMode(isNight);
  }
}

export const LOGO_CONTENT = 'assets/images/logo.svg';
