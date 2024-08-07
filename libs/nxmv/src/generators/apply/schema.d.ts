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
  remove?: string[];
  project: string;
  vars?: Record<string, string | number>;
};
export interface PrizmNxMvConfig {
  versions: {
    [key: string]: PrizmNxMvConfigVersion;
  };
}
