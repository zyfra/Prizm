export type PrizmAppearanceWarning = 'warning';
export type PrizmAppearanceDanger = 'danger';
export type PrizmAppearanceDisabled = 'disabled';
export type PrizmAppearancePrimary = 'primary';
export type PrizmAppearanceSecondary = 'secondary';
export type PrizmAppearanceSuccess = 'success';
export type PrizmAppearance =
  | PrizmAppearancePrimary
  | PrizmAppearanceSecondary
  | PrizmAppearanceSuccess
  | PrizmAppearanceWarning
  | PrizmAppearanceDanger
  | PrizmAppearanceDisabled;

export type PrizmAppearanceTypeFill = 'fill';
export type PrizmAppearanceTypeOutline = 'outline';
export type PrizmAppearanceTypeGhost = 'ghost';
export type PrizmAppearanceType =
  | PrizmAppearanceTypeFill
  | PrizmAppearanceTypeOutline
  | PrizmAppearanceTypeGhost;
