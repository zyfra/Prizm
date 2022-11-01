export function pzmIsIE(userAgent: string): boolean {
    return userAgent.toLowerCase().includes('trident');
}
