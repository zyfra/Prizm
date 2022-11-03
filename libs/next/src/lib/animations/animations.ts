import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {PrizmDropdownAnimation} from "./types";

const TRANSITION = '{{duration}}ms ease-in-out';
const DURATION = {params: {duration: 300}};
const STAGGER = 300;

export interface PrizmDurationOptions {
  value: string;
  params: {duration: number};
}

export const pzmFadeIn = trigger('pzmFadeIn', [
  transition(
    ':enter',
    [style({opacity: 0}), animate(TRANSITION, style({opacity: 1}))],
    DURATION,
  ),
  transition(
    ':leave',
    [style({opacity: 1}), animate(TRANSITION, style({opacity: 0}))],
    DURATION,
  ),
]);


export const pzmHeightCollapse = trigger('pzmHeightCollapse', [
  transition(
    ':enter',
    [style({height: 0}), animate(TRANSITION, style({height: '*'}))],
    DURATION,
  ),
  transition(
    ':leave',
    [style({height: '*'}), animate(TRANSITION, style({height: 0}))],
    DURATION,
  ),
]);

export const pzmHeightCollapseList = trigger('pzmHeightCollapseList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({height: 0}),
          stagger(STAGGER, [animate(TRANSITION, style({height: '*'}))]),
        ],
        {
          optional: true,
        },
      ),
      query(
        ':leave',
        [
          style({height: '*'}),
          stagger(STAGGER, [animate(TRANSITION, style({height: 0}))]),
        ],
        {
          optional: true,
        },
      ),
    ],
    DURATION,
  ),
]);

export const pzmWidthCollapse = trigger('pzmWidthCollapse', [
  transition(
    ':enter',
    [style({width: 0}), animate(TRANSITION, style({width: '*'}))],
    DURATION,
  ),
  transition(
    ':leave',
    [style({width: '*'}), animate(TRANSITION, style({width: 0}))],
    DURATION,
  ),
]);

export const pzmWidthCollapseList = trigger('pzmWidthCollapseList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({width: 0}),
          stagger(STAGGER, [animate(TRANSITION, style({width: '*'}))]),
        ],
        {
          optional: true,
        },
      ),
      query(
        ':leave',
        [
          style({width: '*'}),
          stagger(STAGGER, [animate(TRANSITION, style({width: 0}))]),
        ],
        {
          optional: true,
        },
      ),
    ],
    DURATION,
  ),
]);

export const pzmFadeInList = trigger('pzmFadeInList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({opacity: 0}),
          stagger(STAGGER, [animate(TRANSITION, style({opacity: 1}))]),
        ],
        {
          optional: true,
        },
      ),
      query(
        ':leave',
        [
          style({opacity: 1}),
          stagger(STAGGER, [animate(TRANSITION, style({opacity: 0}))]),
        ],
        {
          optional: true,
        },
      ),
    ],
    DURATION,
  ),
]);

export const pzmFadeInTop = trigger('pzmFadeInTop', [
  transition(
    ':enter',
    [
      style({transform: 'translateY(-10px)', opacity: 0}),
      animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
    ],
    DURATION,
  ),
  transition(
    ':leave',
    [
      style({transform: 'translateY(0)', opacity: 1}),
      animate(TRANSITION, style({transform: 'translateY(-10px)', opacity: 0})),
    ],
    DURATION,
  ),
]);

export const pzmFadeInBottom = trigger('pzmFadeInBottom', [
  transition(
    ':enter',
    [
      style({transform: 'translateY(10px)', opacity: 0}),
      animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
    ],
    DURATION,
  ),
  transition(
    ':leave',
    [
      style({transform: 'translateY(0)', opacity: 1}),
      animate(TRANSITION, style({transform: 'translateY(10px)', opacity: 0})),
    ],
    DURATION,
  ),
]);

export const pzmDropdownAnimation = trigger('pzmDropdownAnimation', [
  transition(
    `* => ${PrizmDropdownAnimation.FadeInTop}`,
    [
      style({transform: 'translateY(-10px)', opacity: 0}),
      animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
    ],
    DURATION,
  ),
  transition(
    `* => ${PrizmDropdownAnimation.FadeInBottom}`,
    [
      style({transform: 'translateY(10px)', opacity: 0}),
      animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
    ],
    DURATION,
  ),
  transition(
    `${PrizmDropdownAnimation.FadeInBottom} => *`,
    [
      style({transform: 'translateY(0)', opacity: 1}),
      animate(TRANSITION, style({transform: 'translateY(10px)', opacity: 0})),
    ],
    DURATION,
  ),
  transition(
    `${PrizmDropdownAnimation.FadeInTop} => *`,
    [
      style({transform: 'translateY(0)', opacity: 1}),
      animate(TRANSITION, style({transform: 'translateY(-10px)', opacity: 0})),
    ],
    DURATION,
  ),
]);

export const pzmScaleIn = trigger('pzmScaleIn', [
  transition(
    ':enter',
    [
      style({transform: 'scale(0)'}),
      animate(TRANSITION, style({transform: 'scale(1)'})),
    ],
    DURATION,
  ),
  transition(
    ':leave',
    [
      style({transform: 'scale(1)'}),
      animate(TRANSITION, style({transform: 'scale(0)'})),
    ],
    DURATION,
  ),
]);

export const pzmScaleInList = trigger('pzmScaleInList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({transform: 'scale(0)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'scale(1)'})),
          ]),
        ],
        {optional: true},
      ),
      query(
        ':leave',
        [
          style({transform: 'scale(1)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'scale(0)'})),
          ]),
        ],
        {optional: true},
      ),
    ],
    DURATION,
  ),
]);

export const pzmSlideIn = trigger('pzmSlideIn', [
  transition(
    `* => left`,
    [
      style({transform: 'translateX(-100%)'}),
      animate(TRANSITION, style({transform: 'translateX(0)'})),
    ],
    DURATION,
  ),
  transition(
    'left => *',
    [
      style({transform: 'translateX(0)'}),
      animate(TRANSITION, style({transform: 'translateX(-100%)'})),
    ],
    DURATION,
  ),
  transition(
    '* => right',
    [
      style({transform: 'translateX(100%)'}),
      animate(TRANSITION, style({transform: 'translateX(0)'})),
    ],
    DURATION,
  ),
  transition(
    'right => *',
    [
      style({transform: 'translateX(0)'}),
      animate(TRANSITION, style({transform: 'translateX(100%)'})),
    ],
    DURATION,
  ),
]);

export const pzmSlideInLeft = trigger('pzmSlideInLeft', [
  transition(
    ':enter',
    [
      style({transform: 'translateX(-100%)'}),
      animate(TRANSITION, style({transform: 'translateX(0)'})),
    ],
    DURATION,
  ),
  transition(
    ':leave',
    [
      style({transform: 'translateX(0)'}),
      animate(TRANSITION, style({transform: 'translateX(-100%)'})),
    ],
    DURATION,
  ),
]);

export const pzmSlideInLeftList = trigger('pzmSlideInLeftList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({transform: 'translateX(-100%)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'translateX(0)'})),
          ]),
        ],
        {optional: true},
      ),
      query(
        ':leave',
        [
          style({transform: 'translateX(0)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'translateX(-100%)'})),
          ]),
        ],
        {optional: true},
      ),
    ],
    DURATION,
  ),
]);

export const pzmSlideInRight = trigger('pzmSlideInRight', [
  transition(
    ':enter',
    [
      style({transform: 'translateX(100%)'}),
      animate(TRANSITION, style({transform: 'translateX(0)'})),
    ],
    DURATION,
  ),
  transition(
    ':leave',
    [
      style({transform: 'translateX(0)'}),
      animate(TRANSITION, style({transform: 'translateX(100%)'})),
    ],
    DURATION,
  ),
]);

export const pzmSlideInRightList = trigger('pzmSlideInRightList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({transform: 'translateX(100%)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'translateX(0)'})),
          ]),
        ],
        {optional: true},
      ),
      query(
        ':leave',
        [
          style({transform: 'translateX(0)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'translateX(100%)'})),
          ]),
        ],
        {optional: true},
      ),
    ],
    DURATION,
  ),
]);

export const pzmSlideInTop = trigger('pzmSlideInTop', [
  transition(
    ':enter',
    [
      style({transform: 'translate3d(0,{{start}},0)'}),
      animate(TRANSITION, style({transform: 'translate3d(0,{{end}},0)'})),
    ],
    {params: {end: 0, start: '100%', duration: 300}},
  ),
  transition(
    ':leave',
    [
      style({transform: 'translate3d(0,{{end}},0)'}),
      animate(TRANSITION, style({transform: 'translate3d(0,{{start}},0)'})),
    ],
    {params: {end: 0, start: '100%', duration: 300}},
  ),
]);

export const pzmSlideInTopList = trigger('pzmSlideInTopList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({transform: 'translateY(100%)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'translateY(0)'})),
          ]),
        ],
        {optional: true},
      ),
      query(
        ':leave',
        [
          style({transform: 'translateY(0)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'translateY(100%)'})),
          ]),
        ],
        {optional: true},
      ),
    ],
    DURATION,
  ),
]);

export const pzmSlideInBottom = trigger('pzmSlideInBottom', [
  transition(
    ':enter',
    [
      style({transform: 'translateY(-100%)'}),
      animate(TRANSITION, style({transform: 'translateY(0)'})),
    ],
    DURATION,
  ),
  transition(
    ':leave',
    [
      style({transform: 'translateY(0)'}),
      animate(TRANSITION, style({transform: 'translateY(-100%)'})),
    ],
    DURATION,
  ),
]);

export const pzmSlideInBottomList = trigger('pzmSlideInBottomList', [
  transition(
    '* => *',
    [
      query(
        ':enter',
        [
          style({transform: 'translateY(-100%)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'translateY(0)'})),
          ]),
        ],
        {optional: true},
      ),
      query(
        ':leave',
        [
          style({transform: 'translateY(0)'}),
          stagger(STAGGER, [
            animate(TRANSITION, style({transform: 'translateY(-100%)'})),
          ]),
        ],
        {optional: true},
      ),
    ],
    DURATION,
  ),
]);
