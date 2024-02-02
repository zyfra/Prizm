import { PrizmAstTemplateAttributeType } from './model';
import { PrizmAstTaskTemplate } from './abstract';
export declare function prizmAstGetTypeOfAttribute(attribute: string): PrizmAstTemplateAttributeType;
export declare function prizmAstRemoveByAttrName(attributes: Record<string, unknown>, attrName: string): typeof attributes;
export declare function prizmAstGetOutputBytAttrForTemplate(attributes: Record<string, unknown>, attrName: string): string | null;
export declare function prizmAstConvertAttrNameByType(attrName: string, type: PrizmAstTemplateAttributeType): string;
export declare function prizmAstConvertAttrNameToInputVar(attrName: string): string;
export declare function prizmAstConvertAttrNameToOutputVar(attrName: string): string;
export declare function prizmAstFindAttributeWithType(attrName: string, attributes: Record<string, unknown>, check?: PrizmAstTemplateAttributeType[]): {
    attrName: string;
    value: any;
    type: PrizmAstTemplateAttributeType;
} | null;
export declare function prizmAstHasAttribute(attrName: string, attributes: Record<string, unknown>, check?: PrizmAstTemplateAttributeType[]): boolean;
export declare function prizmAstConvertAttrNameToInputOutput(attrName: string): string;
export declare function prizmAstConvertAttrNameToOutputInput(attrName: string): string;
export declare function prizmAstGetAttrName(attrName: string): string;
export declare function prizmAstCreateActionBy<T extends PrizmAstTaskTemplate<any>>(objClass: new () => T, payload: T['payload']): ReturnType<T['create']>;
export declare function prizmAstGetTypeOfActionBy<T extends PrizmAstTaskTemplate<any>>(objClass: new () => T): ReturnType<T['type']>;
