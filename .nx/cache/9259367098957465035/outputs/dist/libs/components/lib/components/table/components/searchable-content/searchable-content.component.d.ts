import * as i0 from "@angular/core";
/**
 * @deprecated since 3.8.0
 */
export declare class SearchableContentComponent {
    searchString: string | null;
    contentString: string | null;
    focused: boolean;
    get content(): {
        substr: string;
        marked: boolean;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchableContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchableContentComponent, "prizm-searchable-content", never, { "searchString": { "alias": "searchString"; "required": false; }; "contentString": { "alias": "contentString"; "required": false; }; "focused": { "alias": "focused"; "required": false; }; }, {}, never, never, false, never>;
}
