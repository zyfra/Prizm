export interface ZuiVersionMeta {
    label: string;
    baseHref: string;
}

export const ZUI_VERSIONS_META: readonly ZuiVersionMeta[] = [
    // TODO later add next version
    // {
    //     label: 'next',
    //     baseHref: 'next',
    // },
    {
        label: `latest (v0.8.0)`,
        baseHref: '',
    },
];
