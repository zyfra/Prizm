import { PrizmSemVer, PrizmSemVerUpdateCommand } from './model';

function isSemverCommandValue(val: string | number): boolean {
  return ['*', 'up', 'down'].includes(val.toString());
}

export function prizmSemVerParse(versionString: string): PrizmSemVer;
export function prizmSemVerParse(versionString: string, getCommand: true): PrizmSemVerUpdateCommand;
export function prizmSemVerParse(
  versionString: string,
  getCommand?: true
): PrizmSemVer | PrizmSemVerUpdateCommand {
  const semVer: PrizmSemVer = {
    major: 0,
    minor: 0,
    patch: 0,
    prerelease: null,
    prereleaseNumber: null,
    buildMetadata: null,
  };

  const [versionPart, prereleaseAndBuildMetadata] = versionString.split('-');
  const [major, minor, patch] = versionPart.split('.').map(val => {
    if (getCommand && isNaN(Number(val))) {
      let result = val as any;
      if (isSemverCommandValue(val)) result = val;
      return result;
    }
    return Number(val);
  });
  semVer.major = major;
  semVer.minor = minor;
  semVer.patch = patch;

  if (prereleaseAndBuildMetadata) {
    const [prereleasePart, buildMetadata] = prereleaseAndBuildMetadata.split('+');
    semVer.buildMetadata = buildMetadata || null;

    const [prerelease, prereleaseNumber] = prereleasePart.split('.');
    semVer.prerelease = prerelease;
    if (getCommand && isSemverCommandValue(prereleaseNumber))
      semVer.prereleaseNumber = prereleaseNumber as any;
    else semVer.prereleaseNumber = prereleaseNumber ? Number(prereleaseNumber) : null;
  }

  return semVer;
}
