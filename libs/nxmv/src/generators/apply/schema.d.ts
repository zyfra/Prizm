export interface PrizmNxMvSchema {
  config: string;
  name: string;
}

export type PrizmNxMvConfigVersion = {
  extFolder?: string;
  extFile: string;
  rootChange: boolean;
  all: boolean;
  projects: string[];
  project: string;
};
export interface PrizmNxMvConfig {
  versions: {
    [key: string]: PrizmNxMvConfigVersion;
  };
}
