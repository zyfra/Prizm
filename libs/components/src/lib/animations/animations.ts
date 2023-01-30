import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { PrizmDropdownAnimation } from './types';

const TRANSITION = '{{duration}}ms ease-in-out';
const DURATION = { params: { duration: 300 } };
const STAGGER = 300;

export interface PrizmDurationOptions {
  value: string;
  params: { duration: number };
}

export const prizmFadeIn = trigger('prizmFadeIn', [
  transition(':enter', [style({ opacity: 0 }), animate(TRANSITION, style({ opacity: 1 }))], DURATION),
  transition(':leave', [style({ opacity: 1 }), animate(TRANSITION, style({ opacity: 0 }))], DURATION),
]);

export const prizmHeightCollapse = trigger('prizmHeightCollapse', [
  transition(':enter', [style({ height: 0 }), animate(TRANSITION, style({ height: '*' }))], DURATION),
  transition(':leave', [style({ height: '*' }), animate(TRANSITION, style({ height: 0 }))], DURATION),
]);

export const prizmHeightCollapseList = trigger('prizmHeightCollapseList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [style({ height: 0 }), stagger(STAGGER, [animate(TRANSITION, style({ height: '*' }))])],
        {
          optional: true,
        }
      ),
      query(
        ':leave',
        [style({ height: '*' }), stagger(STAGGER, [animate(TRANSITION, style({ height: 0 }))])],
        {
          optional: true,
        }
      ),
    ],
    DURATION
  ),
]);

export const prizmWidthCollapse = trigger('prizmWidthCollapse', [
  transition(':enter', [style({ width: 0 }), animate(TRANSITION, style({ width: '*' }))], DURATION),
  transition(':leave', [style({ width: '*' }), animate(TRANSITION, style({ width: 0 }))], DURATION),
]);

export const prizmWidthCollapseList = trigger('prizmWidthCollapseList', [
  transition(
    '* => *',
    [
      query(':enter', [style({ width: 0 }), stagger(STAGGER, [animate(TRANSITION, style({ width: '*' }))])], {
        optional: true,
      }),
      query(':leave', [style({ width: '*' }), stagger(STAGGER, [animate(TRANSITION, style({ width: 0 }))])], {
        optional: true,
      }),
    ],
    DURATION
  ),
]);

export const prizmFadeInList = trigger('prizmFadeInList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [style({ opacity: 0 }), stagger(STAGGER, [animate(TRANSITION, style({ opacity: 1 }))])],
        {
          optional: true,
        }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), stagger(STAGGER, [animate(TRANSITION, style({ opacity: 0 }))])],
        {
          optional: true,
        }
      ),
    ],
    DURATION
  ),
]);

export const prizmFadeInTop = trigger('prizmFadeInTop', [
  transition(
    ':enter',
    [
      style({ transform: 'translateY(-10px)', opacity: 0 }),
      animate(TRANSITION, style({ transform: 'translateY(0)', opacity: 1 })),
    ],
    DURATION
  ),
  transition(
    ':leave',
    [
      style({ transform: 'translateY(0)', opacity: 1 }),
      animate(TRANSITION, style({ transform: 'translateY(-10px)', opacity: 0 })),
    ],
    DURATION
  ),
]);

export const prizmFadeInBottom = trigger('prizmFadeInBottom', [
  transition(
    ':enter',
    [
      style({ transform: 'translateY(10px)', opacity: 0 }),
      animate(TRANSITION, style({ transform: 'translateY(0)', opacity: 1 })),
    ],
    DURATION
  ),
  transition(
    ':leave',
    [
      style({ transform: 'translateY(0)', opacity: 1 }),
      animate(TRANSITION, style({ transform: 'translateY(10px)', opacity: 0 })),
    ],
    DURATION
  ),
]);

export const prizmDropdownAnimation = trigger('prizmDropdownAnimation', [
  transition(
    `* => ${PrizmDropdownAnimation.FadeInTop}`,
    [
      style({ transform: 'translateY(-10px)', opacity: 0 }),
      animate(TRANSITION, style({ transform: 'translateY(0)', opacity: 1 })),
    ],
    DURATION
  ),
  transition(
    `* => ${PrizmDropdownAnimation.FadeInBottom}`,
    [
      style({ transform: 'translateY(10px)', opacity: 0 }),
      animate(TRANSITION, style({ transform: 'translateY(0)', opacity: 1 })),
    ],
    DURATION
  ),
  transition(
    `${PrizmDropdownAnimation.FadeInBottom} => *`,
    [
      style({ transform: 'translateY(0)', opacity: 1 }),
      animate(TRANSITION, style({ transform: 'translateY(10px)', opacity: 0 })),
    ],
    DURATION
  ),
  transition(
    `${PrizmDropdownAnimation.FadeInTop} => *`,
    [
      style({ transform: 'translateY(0)', opacity: 1 }),
      animate(TRANSITION, style({ transform: 'translateY(-10px)', opacity: 0 })),
    ],
    DURATION
  ),
]);

export const prizmScaleIn = trigger('prizmScaleIn', [
  transition(
    ':enter',
    [style({ transform: 'scale(0)' }), animate(TRANSITION, style({ transform: 'scale(1)' }))],
    DURATION
  ),
  transition(
    ':leave',
    [style({ transform: 'scale(1)' }), animate(TRANSITION, style({ transform: 'scale(0)' }))],
    DURATION
  ),
]);

export const prizmScaleInList = trigger('prizmScaleInList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({ transform: 'scale(0)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'scale(1)' }))]),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'scale(1)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'scale(0)' }))]),
        ],
        { optional: true }
      ),
    ],
    DURATION
  ),
]);

export const prizmSlideIn = trigger('prizmSlideIn', [
  transition(
    `* => left`,
    [style({ transform: 'translateX(-100%)' }), animate(TRANSITION, style({ transform: 'translateX(0)' }))],
    DURATION
  ),
  transition(
    'left => *',
    [style({ transform: 'translateX(0)' }), animate(TRANSITION, style({ transform: 'translateX(-100%)' }))],
    DURATION
  ),
  transition(
    '* => right',
    [style({ transform: 'translateX(100%)' }), animate(TRANSITION, style({ transform: 'translateX(0)' }))],
    DURATION
  ),
  transition(
    'right => *',
    [style({ transform: 'translateX(0)' }), animate(TRANSITION, style({ transform: 'translateX(100%)' }))],
    DURATION
  ),
]);

export const prizmSlideInLeft = trigger('prizmSlideInLeft', [
  transition(
    ':enter',
    [style({ transform: 'translateX(-100%)' }), animate(TRANSITION, style({ transform: 'translateX(0)' }))],
    DURATION
  ),
  transition(
    ':leave',
    [style({ transform: 'translateX(0)' }), animate(TRANSITION, style({ transform: 'translateX(-100%)' }))],
    DURATION
  ),
]);

export const prizmSlideInLeftList = trigger('prizmSlideInLeftList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'translateX(0)' }))]),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'translateX(-100%)' }))]),
        ],
        { optional: true }
      ),
    ],
    DURATION
  ),
]);

export const prizmSlideInRight = trigger('prizmSlideInRight', [
  transition(
    ':enter',
    [style({ transform: 'translateX(100%)' }), animate(TRANSITION, style({ transform: 'translateX(0)' }))],
    DURATION
  ),
  transition(
    ':leave',
    [style({ transform: 'translateX(0)' }), animate(TRANSITION, style({ transform: 'translateX(100%)' }))],
    DURATION
  ),
]);

export const prizmSlideInRightList = trigger('prizmSlideInRightList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'translateX(0)' }))]),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'translateX(100%)' }))]),
        ],
        { optional: true }
      ),
    ],
    DURATION
  ),
]);

export const prizmSlideInTop = trigger('prizmSlideInTop', [
  transition(
    ':enter',
    [
      style({ transform: 'translate3d(0,{{start}},0)' }),
      animate(TRANSITION, style({ transform: 'translate3d(0,{{end}},0)' })),
    ],
    { params: { end: 0, start: '100%', duration: 300 } }
  ),
  transition(
    ':leave',
    [
      style({ transform: 'translate3d(0,{{end}},0)' }),
      animate(TRANSITION, style({ transform: 'translate3d(0,{{start}},0)' })),
    ],
    { params: { end: 0, start: '100%', duration: 300 } }
  ),
]);

export const prizmSlideInTopList = trigger('prizmSlideInTopList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'translateY(0)' }))]),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'translateY(100%)' }))]),
        ],
        { optional: true }
      ),
    ],
    DURATION
  ),
]);

export const prizmSlideInBottom = trigger('prizmSlideInBottom', [
  transition(
    ':enter',
    [style({ transform: 'translateY(-100%)' }), animate(TRANSITION, style({ transform: 'translateY(0)' }))],
    DURATION
  ),
  transition(
    ':leave',
    [style({ transform: 'translateY(0)' }), animate(TRANSITION, style({ transform: 'translateY(-100%)' }))],
    DURATION
  ),
]);

export const prizmSlideInBottomList = trigger('prizmSlideInBottomList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({ transform: 'translateY(-100%)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'translateY(0)' }))]),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0)' }),
          stagger(STAGGER, [animate(TRANSITION, style({ transform: 'translateY(-100%)' }))]),
        ],
        { optional: true }
      ),
    ],
    DURATION
  ),
]);
