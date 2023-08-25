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
export class VersionManagerComponent implements OnInit {
  readonly versions = PRIZM_VERSIONS_META;

  constructor(
    @Inject(SELECTED_VERSION_META) readonly initialVersion: PrizmVersionMeta | null,
    @Inject(LOCATION) private readonly locationRef: Location,
    @Inject(Router) private readonly router: Router
  ) {
    this.initialVersion = this.versions.find(i => i.version === PRIZM_CURRENT_VERSION);
  }

  public getVersionHref(version: PrizmVersionMeta): string {
    if (version.baseHref) {
      return `${this.locationRef.origin}/${version.baseHref}${this.router.url}${this.locationRef.search}`;
    } else {
      return version.link;
    }
  }

  ngOnInit(): void {
    console.log('#mz initialVersion', {
      i: this.initialVersion,
      cv: PRIZM_CURRENT_VERSION,
      v: this.versions,
    });
  }
}
