import { PrizmSemVer, PrizmSemVerUpdateCommand } from './model';
import { prizmSemVerUpdate } from './update';

describe('prizmSemVerUpdate', () => {
  test('should correctly increment versions', () => {
    const currentVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
      prereleaseNumber: 1,
      buildMetadata: '001',
    };

    const change: PrizmSemVerUpdateCommand = {
      major: 'up',
      minor: 'down',
      patch: 5,
      prereleaseNumber: 'up',
    };

    const expectedVersion: PrizmSemVer = {
      major: 2,
      minor: 1,
      patch: 5,
      prerelease: 'alpha',
      prereleaseNumber: 2,
      buildMetadata: '001',
    };

    expect(prizmSemVerUpdate(currentVersion, change)).toEqual(expectedVersion);
  });

  test('should throw error when trying to decrement version below 0', () => {
    const currentVersion: PrizmSemVer = {
      major: 0,
      minor: 0,
      patch: 0,
    };

    const change: PrizmSemVerUpdateCommand = {
      major: 'down',
      minor: '*',
    };

    expect(() => prizmSemVerUpdate(currentVersion, change)).toThrowError("Can't decrement major below 0.");
  });

  test('should correctly set prerelease and build metadata', () => {
    const currentVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
    };

    const change: PrizmSemVerUpdateCommand = {
      prerelease: 'beta',
      buildMetadata: '002',
    };

    const expectedVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'beta',
      buildMetadata: '002',
    };

    expect(prizmSemVerUpdate(currentVersion, change)).toEqual(expectedVersion);
  });
});
