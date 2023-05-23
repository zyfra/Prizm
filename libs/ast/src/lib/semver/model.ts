export type PrizmSemVerUpdateCommand = Partial<{
  major: '*' | 'up' | 'down' | number;
  minor: '*' | 'up' | 'down' | number;
  patch: '*' | 'up' | 'down' | number;
  prereleaseNumber: 'up' | 'down' | number;
  buildMetadata: string;
  prerelease: string;
}>;

export type PrizmSemVer = {
  major: number;
  minor: number;
  patch: number;
  prerelease?: string | null;
  prereleaseNumber?: number | null;
  buildMetadata?: string | null;
};
