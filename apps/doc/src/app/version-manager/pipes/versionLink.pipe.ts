import { Pipe, PipeTransform } from '@angular/core';
import { PrizmVersionMeta } from '../versions.constants';

@Pipe({ name: 'prizmVersionLink', standalone: true })
export class PrizmVersionLinkPipe implements PipeTransform {
  public transform(version: PrizmVersionMeta, location: Location, url: string): string {
    if (version.baseHref) {
      return `${location.origin}/${version.baseHref}${url}${location.search}`;
    } else {
      return version.link?.href;
    }
  }
}
