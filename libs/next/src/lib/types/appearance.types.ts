export type PzmAppearanceWarning = 'warning';
export type PzmAppearanceDanger = 'danger';
export type PzmAppearanceDisabled = 'disabled';
export type PzmAppearancePrimary = 'primary';
export type PzmAppearanceSecondary = 'secondary';
export type PzmAppearanceSuccess = 'success';
export type PzmAppearance =
  PzmAppearancePrimary
  | PzmAppearanceSecondary
  | PzmAppearanceSuccess
  | PzmAppearanceWarning
  | PzmAppearanceDanger
  | PzmAppearanceDisabled;

export type PzmAppearanceTypeFill = 'fill';
export type PzmAppearanceTypeOutline = 'outline';
export type PzmAppearanceTypeGhost = 'ghost';
export type PzmAppearanceType = PzmAppearanceTypeFill | PzmAppearanceTypeOutline | PzmAppearanceTypeGhost;
