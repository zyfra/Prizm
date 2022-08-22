export type TZuiCheckboxState = 'selected' | 'unselected' | 'indeterminate';

export interface ICheckbox {
  state?: TZuiCheckboxState;
  label?: string;
  value?: unknown;
  child?: ICheckbox[];
}
