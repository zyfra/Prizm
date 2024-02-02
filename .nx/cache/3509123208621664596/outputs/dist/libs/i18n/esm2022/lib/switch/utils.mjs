import { from, of } from 'rxjs';
export function prizmAsyncLoadLanguage(language, loader, fallback) {
    return language && loader ? prizmLoadLanguage(language, loader) : of(fallback);
}
export function prizmLoadLanguage(language, loader) {
    return from(loader(language));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2kxOG4vc3JjL2xpYi9zd2l0Y2gvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJNUMsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxRQUFrQyxFQUNsQyxNQUFrQyxFQUNsQyxRQUF1QjtJQUV2QixPQUFPLFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pGLENBQUM7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLFFBQTJCLEVBQzNCLE1BQTJCO0lBRTNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBOEIsQ0FBQztBQUM3RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptTGFuZ3VhZ2UsIFByaXptTGFuZ3VhZ2VMb2FkZXIsIFByaXptTGFuZ3VhZ2VOYW1lIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUFzeW5jTG9hZExhbmd1YWdlKFxuICBsYW5ndWFnZTogUHJpem1MYW5ndWFnZU5hbWUgfCBudWxsLFxuICBsb2FkZXI6IFByaXptTGFuZ3VhZ2VMb2FkZXIgfCBudWxsLFxuICBmYWxsYmFjazogUHJpem1MYW5ndWFnZVxuKTogT2JzZXJ2YWJsZTxQcml6bUxhbmd1YWdlPiB7XG4gIHJldHVybiBsYW5ndWFnZSAmJiBsb2FkZXIgPyBwcml6bUxvYWRMYW5ndWFnZShsYW5ndWFnZSwgbG9hZGVyKSA6IG9mKGZhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaXptTG9hZExhbmd1YWdlKFxuICBsYW5ndWFnZTogUHJpem1MYW5ndWFnZU5hbWUsXG4gIGxvYWRlcjogUHJpem1MYW5ndWFnZUxvYWRlclxuKTogT2JzZXJ2YWJsZTxQcml6bUxhbmd1YWdlPiB7XG4gIHJldHVybiBmcm9tKGxvYWRlcihsYW5ndWFnZSkpIGFzIE9ic2VydmFibGU8UHJpem1MYW5ndWFnZT47XG59XG4iXX0=