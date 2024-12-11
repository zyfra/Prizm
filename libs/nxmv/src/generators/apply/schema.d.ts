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
  rootChange: boolean;
  all: boolean;
  projects: string[];
  remove?: string[];
  project: string;
  /* constants cannot be replaced with from command line */
  consts?: Record<string, string | number>;
  /* variables may be replaced with from command line */
  vars?: Record<string, string | number>;
};
export interface PrizmNxMvConfig {
  versions: {
    [key: string]: PrizmNxMvConfigVersion;
  };
}
