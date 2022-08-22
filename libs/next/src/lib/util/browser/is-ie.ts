export function zuiIsIE(userAgent: string): boolean {
    return userAgent.toLowerCase().includes('trident');
}
