import { PrizmAstTemplateAttributeType } from './model';
import { PrizmAstTaskTemplate } from './abstract';

export function prizmAstGetTypeOfAttribute(attribute: string): PrizmAstTemplateAttributeType {
  attribute = attribute.trim();
  if (attribute.startsWith('[')) return PrizmAstTemplateAttributeType.inputVar;
  else if (attribute.startsWith('([') || attribute.startsWith('[('))
    return PrizmAstTemplateAttributeType.inputOutput;
  else if (attribute.startsWith('(')) return PrizmAstTemplateAttributeType.output;

  return PrizmAstTemplateAttributeType.input;
}

// export function prizmAstGetOutputBytAttrForTemplate (
//   attrName: string,
//   attributes: Record<string, unknown>
// ) {
//   const name = prizmAstCheckAndGetAttrName(
//     attributes,
//     attrName
//   )
//   if (!name) return null;
//
//   const type = prizmAstGetTypeOfAttribute(
//     name
//   );
//
//   if (type === PrizmAstTemplateAttributeType.input) return name;
//   if (type === PrizmAstTemplateAttributeType.inputVar) return `{{${attrName}}`;
//   if (type === PrizmAstTemplateAttributeType.inputOutput) return `{{${attrName}}`;
//
//   return null;
// }

export function prizmAstRemoveByAttrName(
  attributes: Record<string, unknown>,
  attrName: string
): typeof attributes {
  attrName = prizmAstGetAttrName(attrName);
  const inputName = prizmAstConvertAttrNameToInputVar(attrName);
  const outputName = prizmAstConvertAttrNameToOutputVar(attrName);
  const inputOutputName = prizmAstConvertAttrNameToInputOutput(attrName);
  const outputInputName = prizmAstConvertAttrNameToOutputInput(attrName);

  delete attributes[attrName];
  delete attributes[inputName];
  delete attributes[outputName];
  delete attributes[inputOutputName];
  delete attributes[outputInputName];

  return attributes;
}

export function prizmAstGetOutputBytAttrForTemplate(
  attributes: Record<string, unknown>,
  attrName: string
): string | null {
  attrName = prizmAstGetAttrName(attrName);

  const data = prizmAstFindAttributeWithType(attrName, attributes);
  const type = data?.type;
  const value = data?.value;

  switch (type) {
    case PrizmAstTemplateAttributeType.input:
      return value;
    case PrizmAstTemplateAttributeType.inputVar:
    case PrizmAstTemplateAttributeType.inputOutput:
      return `{{${value}}}`;

    default:
      return null;
  }
}

export function prizmAstConvertAttrNameByType(attrName: string, type: PrizmAstTemplateAttributeType): string {
  switch (type) {
    case PrizmAstTemplateAttributeType.inputOutput:
      return prizmAstConvertAttrNameToInputOutput(attrName);
    case PrizmAstTemplateAttributeType.output:
      return prizmAstConvertAttrNameToOutputVar(attrName);
    case PrizmAstTemplateAttributeType.inputVar:
      return prizmAstConvertAttrNameToInputVar(attrName);

    default:
    case PrizmAstTemplateAttributeType.input:
      return attrName;
  }
}
export function prizmAstConvertAttrNameToInputVar(attrName: string): string {
  return `[${attrName}]`;
}

export function prizmAstConvertAttrNameToOutputVar(attrName: string): string {
  return `(${attrName})`;
}

export function prizmAstFindAttributeWithType(
  attrName: string,
  attributes: Record<string, unknown>,
  check: PrizmAstTemplateAttributeType[] = [
    PrizmAstTemplateAttributeType.inputOutput,
    PrizmAstTemplateAttributeType.input,
    PrizmAstTemplateAttributeType.output,
    PrizmAstTemplateAttributeType.inputVar,
  ]
): {
  attrName: string;
  value: any;
  type: PrizmAstTemplateAttributeType;
} | null {
  if (!attributes || !attrName) return null;

  const originAttrName = prizmAstGetAttrName(attrName);

  const searchAttribute = (
    name: string,
    type: PrizmAstTemplateAttributeType
  ): { attrName: string; value: any; type: PrizmAstTemplateAttributeType } | null => {
    if (name in attributes) {
      return {
        attrName: name,
        value: attributes[name],
        type: type,
      };
    }
    return null;
  };

  const searchInputOutputAttribute = (
    name: string
  ): { attrName: string; value: any; type: PrizmAstTemplateAttributeType } | null => {
    const attrNameInputOutput = prizmAstConvertAttrNameToInputOutput(name);
    const attrNameOutputInput = prizmAstConvertAttrNameToOutputInput(name);
    return (
      searchAttribute(attrNameInputOutput, PrizmAstTemplateAttributeType.inputOutput) ??
      searchAttribute(attrNameOutputInput, PrizmAstTemplateAttributeType.inputOutput)
    );
  };

  if (check.includes(PrizmAstTemplateAttributeType.input)) {
    const result = searchAttribute(originAttrName, PrizmAstTemplateAttributeType.input);
    if (result) return result;
  }

  if (check.includes(PrizmAstTemplateAttributeType.inputVar)) {
    const result = searchAttribute(
      prizmAstConvertAttrNameToInputVar(originAttrName),
      // originAttrName,
      PrizmAstTemplateAttributeType.inputVar
    );
    if (result) return result;
  }

  if (check.includes(PrizmAstTemplateAttributeType.output)) {
    const result = searchAttribute(
      prizmAstConvertAttrNameToOutputVar(originAttrName),
      // originAttrName,
      PrizmAstTemplateAttributeType.output
    );
    if (result) return result;
  }

  return searchInputOutputAttribute(originAttrName);
}

// export function prizmAstFindAttributeWithType(
//   attrName: string,
//   attributes: Record<string, unknown>,
//   check: PrizmAstTemplateAttributeType[] = [
//     PrizmAstTemplateAttributeType.inputOutput,
//     PrizmAstTemplateAttributeType.input,
//     PrizmAstTemplateAttributeType.output,
//     PrizmAstTemplateAttributeType.inputVar,
//   ]
// ): {
//   attrName: string;
//   value: any;
//   type: PrizmAstTemplateAttributeType;
// } | null {
//   if (!attributes) return null;
//   const originAttrName = attrName;
//   if (
//     check.includes(PrizmAstTemplateAttributeType.input) ||
//     check.includes(PrizmAstTemplateAttributeType.inputOutput)
//   ) {
//     if (attrName in attributes)
//       return {
//         attrName: attrName,
//         value: attributes[attrName],
//         type: PrizmAstTemplateAttributeType.input,
//       };
//
//     attrName = prizmAstConvertAttrNameToInputOutput(originAttrName);
//     const attrNameOutputInput = prizmAstConvertAttrNameToOutputInput(originAttrName);
//     if (attrName in attributes || attrNameOutputInput in attributes)
//       return {
//         attrName: attrName ?? attrNameOutputInput,
//         value: attributes[attrName] ?? attributes[attrNameOutputInput],
//         type: PrizmAstTemplateAttributeType.inputOutput,
//       };
//   }
//
//   if (
//     check.includes(PrizmAstTemplateAttributeType.inputVar) ||
//     check.includes(PrizmAstTemplateAttributeType.inputOutput)
//   ) {
//     attrName = prizmAstConvertAttrNameToInputOutput(originAttrName);
//     const attrNameOutputInput = prizmAstConvertAttrNameToOutputInput(originAttrName);
//     if (attrName in attributes || attrNameOutputInput in attributes)
//       return {
//         attrName: attrName ?? attrNameOutputInput,
//         value: attributes[attrName] ?? attributes[attrNameOutputInput],
//         type: PrizmAstTemplateAttributeType.inputOutput,
//       };
//
//     attrName = prizmAstConvertAttrNameToInputVar(originAttrName);
//     if (attrName in attributes)
//       return {
//         attrName: attrName,
//         value: attributes[attrName],
//         type: PrizmAstTemplateAttributeType.inputVar,
//       };
//   }
//
//   if (
//     check.includes(PrizmAstTemplateAttributeType.output) ||
//     check.includes(PrizmAstTemplateAttributeType.inputOutput)
//   ) {
//     attrName = prizmAstConvertAttrNameToOutputVar(originAttrName);
//     if (attrName in attributes)
//       return {
//         attrName: attrName,
//         value: attributes[attrName],
//         type: PrizmAstTemplateAttributeType.output,
//       };
//   }
//
//   return null;
// }

export function prizmAstHasAttribute(
  attrName: string,
  attributes: Record<string, unknown>,
  check: PrizmAstTemplateAttributeType[] = [
    PrizmAstTemplateAttributeType.inputOutput,
    PrizmAstTemplateAttributeType.input,
    PrizmAstTemplateAttributeType.output,
    PrizmAstTemplateAttributeType.inputVar,
  ]
): boolean {
  if (!attributes) return false;

  if (
    (check.includes(PrizmAstTemplateAttributeType.input) ||
      check.includes(PrizmAstTemplateAttributeType.inputOutput)) &&
    (attrName in attributes ||
      prizmAstConvertAttrNameToInputOutput(attrName) in attributes ||
      prizmAstConvertAttrNameToOutputInput(attrName) in attributes)
  )
    return true;

  if (
    (check.includes(PrizmAstTemplateAttributeType.inputVar) ||
      check.includes(PrizmAstTemplateAttributeType.inputOutput)) &&
    (prizmAstConvertAttrNameToInputVar(attrName) in attributes ||
      prizmAstConvertAttrNameToInputOutput(attrName) in attributes ||
      prizmAstConvertAttrNameToOutputInput(attrName) in attributes)
  )
    return true;

  if (
    (check.includes(PrizmAstTemplateAttributeType.output) ||
      check.includes(PrizmAstTemplateAttributeType.inputOutput)) &&
    (prizmAstConvertAttrNameToOutputVar(attrName) in attributes ||
      prizmAstConvertAttrNameToInputOutput(attrName) in attributes ||
      prizmAstConvertAttrNameToOutputInput(attrName) in attributes)
  )
    return true;

  return false;
}

export function prizmAstConvertAttrNameToInputOutput(attrName: string): string {
  return `[(${attrName})]`;
}

export function prizmAstConvertAttrNameToOutputInput(attrName: string): string {
  return `([${attrName}])`;
}

export function prizmAstGetAttrName(attrName: string): string {
  return attrName.replace(/[[(\]) ]/g, '');
}

export function prizmAstCreateActionBy<T extends PrizmAstTaskTemplate<any>>(
  objClass: new () => T,
  payload: T['payload']
): ReturnType<T['create']> {
  return new objClass().create(payload);
}
export function prizmAstGetTypeOfActionBy<T extends PrizmAstTaskTemplate<any>>(
  objClass: new () => T
): ReturnType<T['type']> {
  return new objClass().type;
}
