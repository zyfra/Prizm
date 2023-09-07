export interface TuiDocPageBase {
  readonly section?: string;
  readonly title: string;
}

export interface PrizmDocPage extends TuiDocPageBase {
  readonly route?: string;
  readonly keywords?: string;
  readonly deprecated?: boolean;
  readonly new?: boolean;
  readonly target?: string;
  readonly link?: string;
}

export interface PrizmDocPageGroup extends TuiDocPageBase {
  readonly subPages: readonly PrizmDocPage[];
}

export type RawLoaderContent = Promise<{ default: string }> | string;

export const TUI_EXAMPLE_PRIMARY_FILE_NAME = {
  TS: `TypeScript`,
  LESS: `LESS`,
  MODULE: `MODULE`,
  HTML: `HTML`,
} as const;

export type TuiDocExample =
  | Record<string, RawLoaderContent>
  | {
      [TUI_EXAMPLE_PRIMARY_FILE_NAME.TS]?: RawLoaderContent;
      [TUI_EXAMPLE_PRIMARY_FILE_NAME.HTML]?: RawLoaderContent;
      [TUI_EXAMPLE_PRIMARY_FILE_NAME.LESS]?: RawLoaderContent;
      [TUI_EXAMPLE_PRIMARY_FILE_NAME.MODULE]?: RawLoaderContent;
    };
