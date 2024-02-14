export interface IconsSvgToFontSchema {
  src: string;
  dist: string;
  fontName: string;
  css?: boolean;
  locationPostfix?: string;
  separateLocation?: boolean;
  urlLocation?: string;
  changeFileNames?: string;

  fixSvgForFont?: boolean;
  pathToOutputFixedSvg?: string;
}
