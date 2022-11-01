export type PzmHorizontalDirection = 'left' | 'right';

export type PzmVerticalDirection = 'top' | 'bottom';

export type PzmSideDirection =
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-middle'
    | 'top-left'
    | 'top-right'
    | 'top-middle';

export type PzmDirection = PzmHorizontalDirection | PzmSideDirection;
