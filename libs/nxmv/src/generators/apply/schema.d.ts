export type PrizmNxMvVarName = string;

export type PrizmNxMvVarNameWithPrefix = `var${PrizmNxMvVarName}`;

export interface PrizmNxMvSchema {
  config: string;
  name: string;
  [varName: PrizmNxMvVarNameWithPrefix]: string;
}

export type PrizmNxMvConfigVersion = {
  extFolder?: string;
  extFile: string;
  check?: string[];
  rootChange: boolean;
  all: boolean;
  projects: string[];
  remove?: string[];
  project: string;
  consts?: Record<string, string | number>;
};
export interface PrizmNxMvConfig {
  versions: {
    [key: string]: PrizmNxMvConfigVersion;
  };
}
