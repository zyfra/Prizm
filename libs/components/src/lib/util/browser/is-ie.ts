export function prizmIsIE(userAgent: string): boolean {
  return userAgent.toLowerCase().includes('trident');
}
