export function isEqual(a: any, b: any): boolean {
  const toString: (obj: any) => string = Object.prototype.toString,
    getPrototypeOf: (obj: any) => any = Object.getPrototypeOf,
    getOwnProperties: (obj: any) => string[] = Object.getOwnPropertySymbols
      ? (obj: any): string[] => Object.keys(obj).concat(Object.getOwnPropertySymbols(obj) as any)
      : Object.keys;

  const refs: any[] = [];

  function checkEquality(a: any, b: any, refs: any[]): boolean {
    let aElements: string[], bElements: string[], element: any;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const aType: string = toString.call(a),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bType: string = toString.call(b);

    if (a === b) return true;

    if (a == null || b == null) return false;

    if (refs.indexOf(a) > -1 && refs.indexOf(b) > -1) return true;

    refs.push(a, b);

    if (aType !== bType) return false;

    aElements = getOwnProperties(a);
    bElements = getOwnProperties(b);
    if (
      aElements.length !== bElements.length ||
      aElements.some(key => !checkEquality(a[key], b[key], refs))
    ) {
      return false;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    switch (aType.slice(8, -1)) {
      case 'Symbol':
        return a.valueOf() === b.valueOf();
      case 'Date':
      case 'Number':
        return +a === +b || (+a !== +a && +b !== +b);
      case 'RegExp':
      case 'Function':
      case 'String':
      case 'Boolean':
        return '' + a === '' + b;
      case 'Set':
      case 'Map': {
        aElements = Array.from(a.entries());
        bElements = Array.from(b.entries());
        for (let i = 0; i < aElements.length; i++) {
          if (!checkEquality(aElements[i], bElements[i], refs)) {
            return false;
          }
        }
        return true;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line no-fallthrough
      case 'ArrayBuffer':
        a = new Uint8Array(a);
        b = new Uint8Array(b);
      // falls through to be handled as an Array

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line no-fallthrough
      case 'DataView':
        a = new Uint8Array(a.buffer);
        b = new Uint8Array(b.buffer);
      // FALLS THROUGH to 2
      case 'Float32Array':
      case 'Float64Array':
      case 'Int8Array':
      case 'Int16Array':
      case 'Int32Array':
      case 'Uint8Array':
      case 'Uint16Array':
      case 'Uint32Array':
      case 'Uint8ClampedArray':
      case 'Array':
        if (a.length !== b.length) return false;
        for (element = 0; element < a.length; element++) {
          if (!(element in a) && !(element in b)) continue;
          if (!(element in a) !== !(element in b) || !checkEquality(a[element], b[element], refs))
            return false;
        }
        return true;
      case 'Object':
        return checkEquality(getPrototypeOf(a), getPrototypeOf(b), refs);
      default:
        return false;
    }
  }

  return checkEquality(a, b, refs);
}
