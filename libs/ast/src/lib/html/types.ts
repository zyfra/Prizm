export type PrizmHtmlAttr = Record<string, string | boolean | number>;

export interface PrizmHtmlComment {
  type: string;
  comment: string;
}

export type PrizmHtmlItemType = 'comment' | 'text' | 'tag';
export interface PrizmHtmlItem {
  type: PrizmHtmlItemType;
  content?: string;
  voidElement: boolean;
  name: string;
  style?: string[];
  attrs: PrizmHtmlAttr;
  children: PrizmHtmlItem[];
  comment?: string;
}

export interface PrizmHtmlOptions {
  components: Record<string, string>;
}
