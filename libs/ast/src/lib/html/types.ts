export type PrizmHtmlAttr = Record<string, string | boolean | number>;

export interface PrizmHtmlComment {
  type: string;
  comment: string;
}

export type PrizmHtmlItemType = 'comment' | 'text' | 'tag';
export interface PrizmAstHtmlItem {
  type: PrizmHtmlItemType;
  content?: string;
  voidElement: boolean;
  name: string;
  style?: string[];
  attrs: PrizmHtmlAttr;
  children: PrizmAstHtmlItem[];
  comment?: string;
}

export interface PrizmHtmlOptions {
  components: Record<string, string>;
}
