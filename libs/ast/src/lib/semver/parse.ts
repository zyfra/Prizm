import { PrizmSemVer, PrizmSemVerUpdateCommand } from './model';

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
      if (['*', 'up', 'down'].includes(val)) result = val;
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
    semVer.prereleaseNumber = prereleaseNumber ? Number(prereleaseNumber) : null;
  }

  return semVer;
}
