import { Inject, Injectable, Optional } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { BehaviorSubject, of } from 'rxjs';
import { PRIZM_LANGUAGE_STORAGE_KEY } from '../tokens';
import { PRIZM_LANGUAGE_LOADER } from '../tokens/language-loader';
import { PRIZM_DEFAULT_LANGUAGE } from '../tools';
import { prizmAsyncLoadLanguage } from './utils';
import * as i0 from "@angular/core";
export class PrizmLanguageSwitcher extends BehaviorSubject {
    constructor(fallback, key, storage, loader) {
        super(prizmAsyncLoadLanguage(storage.getItem(key), loader, fallback));
        this.fallback = fallback;
        this.key = key;
        this.storage = storage;
        this.loader = loader;
    }
    get language() {
        return this.storage.getItem(this.key) || this.fallback.name;
    }
    setLanguage(language) {
        this.storage.setItem(this.key, language);
        this.next(prizmAsyncLoadLanguage(language, this.loader, this.fallback));
    }
    clear() {
        this.storage.removeItem(this.key);
        this.next(of(this.fallback));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmLanguageSwitcher, deps: [{ token: PRIZM_DEFAULT_LANGUAGE }, { token: PRIZM_LANGUAGE_STORAGE_KEY }, { token: LOCAL_STORAGE }, { token: PRIZM_LANGUAGE_LOADER, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmLanguageSwitcher, providedIn: `root` }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmLanguageSwitcher, decorators: [{
            type: Injectable,
            args: [{ providedIn: `root` }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_DEFAULT_LANGUAGE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_LANGUAGE_STORAGE_KEY]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCAL_STORAGE]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_LANGUAGE_LOADER]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc3dpdGNoZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvaTE4bi9zcmMvbGliL3N3aXRjaC9sYW5ndWFnZS1zd2l0Y2hlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBR2pELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxlQUEwQztJQUNuRixZQUVtQixRQUF1QixFQUV2QixHQUFXLEVBRVgsT0FBNkIsRUFHN0IsTUFBa0M7UUFFbkQsS0FBSyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFUckQsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUV2QixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBRVgsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7UUFHN0IsV0FBTSxHQUFOLE1BQU0sQ0FBNEI7SUFHckQsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM5RCxDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQTJCO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOzhHQTdCVSxxQkFBcUIsa0JBRXRCLHNCQUFzQixhQUV0QiwwQkFBMEIsYUFFMUIsYUFBYSxhQUdiLHFCQUFxQjtrSEFUcEIscUJBQXFCLGNBRFIsTUFBTTs7MkZBQ25CLHFCQUFxQjtrQkFEakMsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQUc3QixNQUFNOzJCQUFDLHNCQUFzQjs7MEJBRTdCLE1BQU07MkJBQUMsMEJBQTBCOzswQkFFakMsTUFBTTsyQkFBQyxhQUFhOzswQkFFcEIsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMT0NBTF9TVE9SQUdFIH0gZnJvbSAnQG5nLXdlYi1hcGlzL2NvbW1vbic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bUxhbmd1YWdlLCBQcml6bUxhbmd1YWdlTG9hZGVyLCBQcml6bUxhbmd1YWdlTmFtZSwgUHJpem1MYW5ndWFnZVN0b3JhZ2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFBSSVpNX0xBTkdVQUdFX1NUT1JBR0VfS0VZIH0gZnJvbSAnLi4vdG9rZW5zJztcbmltcG9ydCB7IFBSSVpNX0xBTkdVQUdFX0xPQURFUiB9IGZyb20gJy4uL3Rva2Vucy9sYW5ndWFnZS1sb2FkZXInO1xuaW1wb3J0IHsgUFJJWk1fREVGQVVMVF9MQU5HVUFHRSB9IGZyb20gJy4uL3Rvb2xzJztcblxuaW1wb3J0IHsgcHJpem1Bc3luY0xvYWRMYW5ndWFnZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46IGByb290YCB9KVxuZXhwb3J0IGNsYXNzIFByaXptTGFuZ3VhZ2VTd2l0Y2hlciBleHRlbmRzIEJlaGF2aW9yU3ViamVjdDxPYnNlcnZhYmxlPFByaXptTGFuZ3VhZ2U+PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUFJJWk1fREVGQVVMVF9MQU5HVUFHRSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZhbGxiYWNrOiBQcml6bUxhbmd1YWdlLFxuICAgIEBJbmplY3QoUFJJWk1fTEFOR1VBR0VfU1RPUkFHRV9LRVkpXG4gICAgcHJpdmF0ZSByZWFkb25seSBrZXk6IHN0cmluZyxcbiAgICBASW5qZWN0KExPQ0FMX1NUT1JBR0UpXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdG9yYWdlOiBQcml6bUxhbmd1YWdlU3RvcmFnZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUFJJWk1fTEFOR1VBR0VfTE9BREVSKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9hZGVyOiBQcml6bUxhbmd1YWdlTG9hZGVyIHwgbnVsbFxuICApIHtcbiAgICBzdXBlcihwcml6bUFzeW5jTG9hZExhbmd1YWdlKHN0b3JhZ2UuZ2V0SXRlbShrZXkpLCBsb2FkZXIsIGZhbGxiYWNrKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxhbmd1YWdlKCk6IFByaXptTGFuZ3VhZ2VOYW1lIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpIHx8IHRoaXMuZmFsbGJhY2submFtZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMYW5ndWFnZShsYW5ndWFnZTogUHJpem1MYW5ndWFnZU5hbWUpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgbGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5uZXh0KHByaXptQXN5bmNMb2FkTGFuZ3VhZ2UobGFuZ3VhZ2UsIHRoaXMubG9hZGVyLCB0aGlzLmZhbGxiYWNrKSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXkpO1xuXG4gICAgdGhpcy5uZXh0KG9mKHRoaXMuZmFsbGJhY2spKTtcbiAgfVxufVxuIl19