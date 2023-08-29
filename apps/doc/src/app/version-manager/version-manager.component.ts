import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCATION } from '@ng-web-apis/common';

import { SELECTED_VERSION_META, VERSION_MANAGER_PROVIDERS } from './version-manager.providers';
import { PRIZM_VERSIONS_META, PrizmVersionMeta } from './versions.constants';
import { PRIZM_CURRENT_VERSION } from './current.const';

@Component({
  selector: 'prizm-version-manager',
  templateUrl: './version-manager.component.html',
  styleUrls: ['./version-manager.component.less'],
  providers: VERSION_MANAGER_PROVIDERS,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionManagerComponent {
  readonly versions = PRIZM_VERSIONS_META;

  constructor(
    @Inject(SELECTED_VERSION_META) public initialVersion: PrizmVersionMeta | null,
    @Inject(LOCATION) private readonly locationRef: Location,
    @Inject(Router) private readonly router: Router
  ) {
    this.initByVersion();
    this.initIfItIsNotLocal();
  }

  private initByVersion(): void {
    this.initialVersion = this.versions.find(i => i.version === PRIZM_CURRENT_VERSION);
  }

  private initIfItIsNotLocal(): void {
    if (this.locationRef.hostname !== 'localhost') {
      this.initialVersion = this.versions.find(i =>
        [i.link, ...i.otherLinks].find(i => this.locationRef.hostname === i.hostname)
      );
    }
  }

  public getVersionHref(version: PrizmVersionMeta): string {
    if (version.baseHref) {
      return `${this.locationRef.origin}/${version.baseHref}${this.router.url}${this.locationRef.search}`;
    } else {
      return version.link?.href;
    }
  }

  public openStackblitz(version: PrizmVersionMeta): string {
    if (version.baseHref) {
      return `${this.locationRef.origin}/${version.baseHref}${this.router.url}${this.locationRef.search}`;
    } else {
      return version.link?.href;
    }
  }
}
