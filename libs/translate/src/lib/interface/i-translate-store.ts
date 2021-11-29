export interface ITranslateStore {
    [key: string]: ITranslations;
}

export type ITranslations = string | ITranslateStore;