export declare class PrizmTemplateTaskStorage {
    private readonly storageByType;
    setByType(type: string, value: Record<string, unknown>): void;
    get obj(): Record<string, unknown>;
    updateByType(type: string, value: Record<string, unknown>): void;
    getByType(type: string): Record<string, unknown> | null;
    clear(): void;
}
