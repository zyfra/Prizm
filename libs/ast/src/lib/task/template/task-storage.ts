export class PrizmTemplateTaskStorage {
  private readonly storageByType = new Map<string, Record<string, unknown>>();
  public setByType(type: string, value: Record<string, unknown>): void {
    this.storageByType.set(type, value);
  }
  public updateByType(type: string, value: Record<string, unknown>): void {
    const old = this.getByType(type) ?? {};
    this.setByType(type, {
      ...old,
      ...value,
    });
  }
  public getByType(type: string): Record<string, unknown> | null {
    return this.storageByType.get(type) ?? null;
  }
}
