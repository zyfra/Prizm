import { prizmSemVerParse } from './parse';
import { PrizmSemVer, PrizmSemVerUpdateCommand } from './model';

describe('prizmSemVerParse', () => {
  test('should correctly parse command version without prerelease and build metadata ', () => {
    const versionString = '*.2.up';
    const expectedVersion: PrizmSemVerUpdateCommand = {
      major: '*',
      minor: 2,
      patch: 'up',
      prerelease: null,
      prereleaseNumber: null,
      buildMetadata: null,
    } as any;
    expect(prizmSemVerParse(versionString, true)).toEqual(expectedVersion);
  });

  test('should correctly parse version without prerelease and build metadata', () => {
    const versionString = '1.2.3';
    const expectedVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: null,
      prereleaseNumber: null,
      buildMetadata: null,
    };

    expect(prizmSemVerParse(versionString)).toEqual(expectedVersion);
  });

  test('should correctly parse version without prerelease and build metadata', () => {
    const versionString = '1.2.3';
    const expectedVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: null,
      prereleaseNumber: null,
      buildMetadata: null,
    };

    expect(prizmSemVerParse(versionString)).toEqual(expectedVersion);
  });

  test('should correctly parse version with prerelease without number', () => {
    const versionString = '1.2.3-alpha';
    const expectedVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
      prereleaseNumber: null,
      buildMetadata: null,
    };

    expect(prizmSemVerParse(versionString)).toEqual(expectedVersion);
  });

  test('should correctly parse version with prerelease and number', () => {
    const versionString = '1.2.3-alpha.1';
    const expectedVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
      prereleaseNumber: 1,
      buildMetadata: null,
    };

    expect(prizmSemVerParse(versionString)).toEqual(expectedVersion);
  });

  test('should correctly parse version with build metadata', () => {
    const versionString = '1.2.3+001';
    const expectedVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      buildMetadata: '001',
      prerelease: null,
      prereleaseNumber: null,
    };
    expect(prizmSemVerParse(versionString)).toEqual(expectedVersion);
  });

  test('should correctly parse version with prerelease and build metadata', () => {
    const versionString = '1.2.3-alpha+001';
    const expectedVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
      buildMetadata: '001',
      prereleaseNumber: null,
    };

    expect(prizmSemVerParse(versionString)).toEqual(expectedVersion);
  });

  test('should correctly parse version with prerelease, number and build metadata', () => {
    const versionString = '1.2.3-alpha.1+001';
    const expectedVersion: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
      prereleaseNumber: 1,
      buildMetadata: '001',
    };

    expect(prizmSemVerParse(versionString)).toEqual(expectedVersion);
  });
});
