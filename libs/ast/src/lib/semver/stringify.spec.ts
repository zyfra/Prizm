import { PrizmSemVer } from './model';
import { prizmSemVerStringify } from './stingify';

describe('prizmSemVerStringify', () => {
  test('should correctly stringify version without prerelease and build metadata', () => {
    const version: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
    };

    expect(prizmSemVerStringify(version)).toEqual('1.2.3');
  });

  test('should correctly stringify version with prerelease without number', () => {
    const version: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
    };

    expect(prizmSemVerStringify(version)).toEqual('1.2.3-alpha');
  });

  test('should correctly stringify version with prerelease and number', () => {
    const version: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
      prereleaseNumber: 1,
    };

    expect(prizmSemVerStringify(version)).toEqual('1.2.3-alpha.1');
  });

  test('should correctly stringify version with build metadata', () => {
    const version: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
      buildMetadata: '001',
    };

    expect(prizmSemVerStringify(version)).toEqual('1.2.3-alpha+001');
  });

  test('should correctly stringify version with prerelease and build metadata', () => {
    const version: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
      buildMetadata: '001',
    };

    expect(prizmSemVerStringify(version)).toEqual('1.2.3-alpha+001');
  });

  test('should correctly stringify version without prerelease and with build metadata', () => {
    const version: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      buildMetadata: '001',
    };

    expect(prizmSemVerStringify(version)).toEqual('1.2.3+001');
  });

  test('should correctly stringify version with prerelease, number and build metadata', () => {
    const version: PrizmSemVer = {
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: 'alpha',
      prereleaseNumber: 1,
      buildMetadata: '001',
    };

    expect(prizmSemVerStringify(version)).toEqual('1.2.3-alpha.1+001');
  });
});
