import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCATION } from '@ng-web-apis/common';

import { SELECTED_VERSION_META, VERSION_MANAGER_PROVIDERS } from './version-manager.providers';
import {
  PRIZM_LANGUAGES_META,
  PRIZM_VERSIONS_META,
  PrizmLanguageMeta,
  PrizmVersionMeta,
} from './versions.constants';
import { PRIZM_CURRENT_VERSION } from './current.const';
import { LanguageManagerService } from './language-manager.service';
import { PrizmLanguageSwitcher } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-version-manager',
  templateUrl: './version-manager.component.html',
  styleUrls: ['./version-manager.component.less'],
  providers: VERSION_MANAGER_PROVIDERS,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionManagerComponent {
  readonly versions = PRIZM_VERSIONS_META;
  readonly languages = PRIZM_LANGUAGES_META;

  constructor(
    public readonly languageSwitcher: PrizmLanguageSwitcher,
    public readonly languageManager: LanguageManagerService,
    @Inject(SELECTED_VERSION_META) public initialVersion: PrizmVersionMeta | null,
    @Inject(LOCATION) public readonly locationRef: Location,
    @Inject(Router) public readonly router: Router
  ) {
    this.initByVersion();
    this.initIfItIsNotLocal();
  }

  private initByVersion(): void {
    this.initialVersion = this.versions.find(i => i.version === PRIZM_CURRENT_VERSION) ?? null;
  }

  private initIfItIsNotLocal(): void {
    if (this.locationRef.hostname !== 'localhost') {
      this.initialVersion =
        this.versions.find(version =>
          [version.link, ...version.otherLinks].find(
            i => this.locationRef.hostname === i.hostname || version.cb?.(this.locationRef.hostname, version)
          )
        ) ?? null;
    }
  }

  public languageIdentityMatcher(a: PrizmLanguageMeta, b: PrizmLanguageMeta) {
    return a?.code === b?.code;
  }
}
