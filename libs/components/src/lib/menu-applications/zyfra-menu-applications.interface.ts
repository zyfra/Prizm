interface ZyfraMenuAppTransition {
  delay: number;
  duration: number;
  timingFunction: string;
}

export interface ZyfraMenuAppTransitionSettings {
  open: ZyfraMenuAppTransition;
  close: ZyfraMenuAppTransition;
}

export interface ZyfraMenuAppItem {
  title: string;
  icon: string;
  description?: string;
}
