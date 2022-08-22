export type ZuiAppearanceWarning = 'warning';
export type ZuiAppearanceDanger = 'danger';
export type ZuiAppearanceDisabled = 'disabled';
export type ZuiAppearancePrimary = 'primary';
export type ZuiAppearanceSecondary = 'secondary';
export type ZuiAppearanceSuccess = 'success';
export type ZuiAppearance =
  ZuiAppearancePrimary
  | ZuiAppearanceSecondary
  | ZuiAppearanceSuccess
  | ZuiAppearanceWarning
  | ZuiAppearanceDanger
  | ZuiAppearanceDisabled;

export type ZuiAppearanceTypeFill = 'fill';
export type ZuiAppearanceTypeOutline = 'outline';
export type ZuiAppearanceTypeGhost = 'ghost';
export type ZuiAppearanceType = ZuiAppearanceTypeFill | ZuiAppearanceTypeOutline | ZuiAppearanceTypeGhost;
