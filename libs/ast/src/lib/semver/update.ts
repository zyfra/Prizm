import { PrizmSemVer, PrizmSemVerUpdateCommand } from './model';

export function prizmSemVerUpdate(
  currentVersion: Partial<PrizmSemVer>,
  change: PrizmSemVerUpdateCommand
): PrizmSemVer {
  const newVersion: Partial<PrizmSemVer> = { ...currentVersion };
  const keys = ['major', 'minor', 'patch', 'prereleaseNumber'] as const;
  keys.forEach(key => {
    switch (change[key]) {
      case '*':
        break;

      case 'up': {
        const version = (newVersion[key] ?? -1) as number;
        newVersion[key] = version + 1;

        break;
      }
      case 'down':
        if (newVersion[key] === 0) {
          throw new Error(`Can't decrement ${key} below 0.`);
        }
        newVersion[key] = (newVersion[key] || 1) - 1;
        break;
      default:
        if (typeof change[key] === 'number') {
          newVersion[key] = change[key] as number;
        }
    }
  });

  if (change.buildMetadata) {
    newVersion.buildMetadata = change.buildMetadata;
  }

  if (change.prerelease) {
    newVersion.prerelease = change.prerelease;
  }

  return newVersion as PrizmSemVer;
}
