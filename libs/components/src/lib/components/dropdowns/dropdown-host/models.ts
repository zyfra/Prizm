export type PrizmDropdownHostWidth = string | number | null;
export type PrizmDropdownHostContext = {
  custom: PrizmDropdownHostCustomContext;
};
export type PrizmDropdownHostCustomContext = Record<string, unknown>;
export type PrizmDropdownHostStyles =
  | {
      [klass: string]: unknown;
    }
  | null
  | undefined;
export type PrizmDropdownHostClasses =
  | string
  | string[]
  | Set<string>
  | {
      [klass: string]: boolean;
    }
  | null
  | undefined;
