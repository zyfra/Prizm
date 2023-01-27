export type PrizmFileValidationErrors = {
  accept?: { expect: string; current: string };
  size?: { max: number; current: number };
};

export type PrizmFilesProgress = {
  [filename: string]: {
    progress?: number;
    error?: boolean;
  };
};
