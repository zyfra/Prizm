export function zuiIsString(value: unknown): value is string {
    return typeof value === `string`;
}
