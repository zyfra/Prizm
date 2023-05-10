import { Type } from '@angular/core';

interface PrizmDirectiveInfo {
  className: string;
  selector: string | null;
  inputs: string[];
  outputs: string[];
}

export function prizmGetListDirectiveInputsOutputs<T>(classRef: Type<T>): PrizmDirectiveInfo | null {
  const inputs: string[] = [];
  const outputs: string[] = [];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const metadata = classRef['ɵcmp'] || classRef['ɵdir'];
  let selector = '';
  if (metadata) {
    const className = classRef.name;
    const selectors = [...(metadata.selectors?.[0] ?? [])];
    if (selectors?.[0]) selector += metadata.selectors?.[0].shift();
    if (selectors?.[1])
      selector += metadata.selectors?.[0]
        .filter(Boolean)
        .map((i: string) => `[${i}]`)
        .join();
    const inputProperties = metadata.inputs;
    const outputProperties = metadata.outputs;

    for (const input in inputProperties) {
      inputs.push(inputProperties[input]);
    }

    for (const output in outputProperties) {
      outputs.push(outputProperties[output]);
    }

    const result: PrizmDirectiveInfo = {
      className,
      selector,
      inputs,
      outputs,
    };

    return result;
  } else {
    console.error('The provided class is not an Angular component or directive.');
    return null;
  }
}
