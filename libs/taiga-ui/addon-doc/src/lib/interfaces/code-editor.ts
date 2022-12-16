export interface PrizmCodeEditor {
    readonly name: string;
    edit(component: string, id: string, files: Record<string, string>): Promise<void>;
}
