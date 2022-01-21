export interface HtmlInputEvent<T extends HTMLElement = HTMLElement> extends InputEvent {
  target: T;
}

export interface CustomInputEvent<T> {
  originalEvent: HtmlInputEvent<HTMLInputElement>;
  value: T;
}
