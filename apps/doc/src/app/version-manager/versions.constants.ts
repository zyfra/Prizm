export interface ZuiVersionMeta {
    label: string;
    baseHref: string;
}

export const ZUI_VERSIONS_META: readonly ZuiVersionMeta[] = [
    // {
    //     label: 'next',
    //     baseHref: 'next',
    // },
    {
        label: `latest (v1.0.0)`,
        baseHref: '',
    },
];
