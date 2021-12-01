export const generateKey = (): string => window.crypto.getRandomValues(new Uint32Array(1))[0].toString();
