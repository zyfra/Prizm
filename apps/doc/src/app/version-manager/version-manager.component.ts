import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LOCATION } from '@ng-web-apis/common';

import { SELECTED_VERSION_META, VERSION_MANAGER_PROVIDERS } from './version-manager.providers';
import { ZUI_VERSIONS_META, ZuiVersionMeta } from './versions.constants';

@Component({
  selector: 'zui-version-manager',
  templateUrl: './version-manager.component.html',
  styleUrls: ['./version-manager.component.less'],
  providers: VERSION_MANAGER_PROVIDERS,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionManagerComponent {
  readonly versions = ZUI_VERSIONS_META;

  constructor(
    @Inject(SELECTED_VERSION_META) readonly initialVersion: ZuiVersionMeta | null,
    @Inject(LOCATION) private readonly locationRef: Location,
    @Inject(Router) private readonly router: Router
  ) {}

  public getVersionHref(version: ZuiVersionMeta): string {
    if (version.baseHref) {
      return `${this.locationRef.origin}/${version.baseHref}${this.router.url}${this.locationRef.search}`;
    } else {
      return version.link;
    }
  }
}
