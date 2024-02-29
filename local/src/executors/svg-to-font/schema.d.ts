export interface IconsSvgToFontSchema {
  src: string;
  dist: string;
  fontName: string;
  tag?: string;
  css?: boolean;
  locationPostfix?: string;
  separateLocation?: boolean;
  urlLocation?: string;
  changeFileNames?: string;

  fixSvgForFont?: boolean;
  pathToOutputFixedSvg?: string;
}
