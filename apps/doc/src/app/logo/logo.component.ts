import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { debounceTime, filter, map } from 'rxjs/operators';
import { PrizmThemeService } from '@prizm-ui/theme';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import {
  PrizmIconsSvgRegistry,
  PrizmIconSvgEnum,
  prizmIconSvgOtherGitHub,
  prizmIconSvgShapeGeometrySquareCirclePlusTriangleFill,
} from '@prizm-ui/icons';
import { PrizmLanguageSwitcher } from '@prizm-ui/i18n';
import { PolymorphComponent, PrizmDialogService } from '@prizm-ui/components';
import { ThemeTokenChanger } from '../theme-token-changer/theme-token-changer.component';

@Component({
  selector: 'prizm-doc-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
  readonly isNight$ = this.themeSwitcher.change$.pipe(
    filter(i => i.el === this.themeSwitcher.rootElement),
    map(i => i.theme === 'dark'),
    debounceTime(0)
  );

  readonly githubSvgName = PrizmIconSvgEnum.OTHER_GIT_HUB;

  constructor(
    private readonly dialogService: PrizmDialogService,
    private readonly themeSwitcher: PrizmThemeService,
    public readonly languageSwitcher: PrizmLanguageSwitcher,
    private readonly svgRegistry: PrizmIconsSvgRegistry,
    @Inject(LOCAL_STORAGE) private readonly storage: Storage
  ) {
    this.svgRegistry.registerIcons([
      prizmIconSvgOtherGitHub,
      prizmIconSvgShapeGeometrySquareCirclePlusTriangleFill,
    ]);
  }

  public onMode(isNight: boolean): void {
    this.storage.setItem(`night`, isNight ? 'true' : 'false');
    this.themeSwitcher.update(isNight ? 'dark' : 'light');
  }

  protected readonly PrizmIconSvgEnum = PrizmIconSvgEnum;

  public openThemeChanger() {
    this.dialogService
      .open(new PolymorphComponent(ThemeTokenChanger), {
        closeable: true,
        header: 'Theme changer',
        height: 800,
      })
      .subscribe();
  }
}

export const LOGO_CONTENT = 'assets/images/logo.svg';
