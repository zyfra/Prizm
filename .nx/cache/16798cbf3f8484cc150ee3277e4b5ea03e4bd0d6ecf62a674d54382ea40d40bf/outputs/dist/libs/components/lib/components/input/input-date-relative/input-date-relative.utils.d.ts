import { RelativeDateMenuItem, RelativeDateModel } from './input-date-relative.models';
/**
 * Check items as radio button, to active id
 */
export declare function UpdateActiveItem<T>(items: RelativeDateMenuItem<T>[], id: T): RelativeDateMenuItem<T>[];
type ExtendedRelativeDateModel = RelativeDateModel & {
    wrongFormat?: boolean;
};
/**
 * Parse input text to model
 */
export declare function ParseTextInput(text: string): ExtendedRelativeDateModel;
/**
 * Render text from RelativeDateModel
 */
export declare function RenderText(model: RelativeDateModel): string;
export {};
