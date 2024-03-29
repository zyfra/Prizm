import { PrizmSemVer } from './model';

export function prizmSemVerStringify(version: PrizmSemVer): string {
  let result = `${version.major}.${version.minor}.${version.patch}`;

  if (version.prerelease || version.prereleaseNumber) {
    result += `-${version.prerelease}${
      typeof version.prereleaseNumber === 'number' ? '.' + version.prereleaseNumber : ''
    }`;
  }

  if (version.buildMetadata) {
    result += `+${version.buildMetadata}`;
  }

  return result;
}
