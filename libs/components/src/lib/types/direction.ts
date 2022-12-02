export type PrizmHorizontalDirection = 'left' | 'right';

export type PrizmVerticalDirection = 'top' | 'bottom';

export type PrizmSideDirection =
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-middle'
    | 'top-left'
    | 'top-right'
    | 'top-middle';

export type PrizmDirection = PrizmHorizontalDirection | PrizmSideDirection;
