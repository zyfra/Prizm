import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {ZuiDropdownAnimation} from "./types";

const TRANSITION = '{{duration}}ms ease-in-out';
const DURATION = {params: {duration: 300}};
const STAGGER = 300;

export interface ZuiDurationOptions {
  value: string;
  params: {duration: number};
}

export const pzmFadeIn = trigger('zuiFadeIn', [
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


export const zuiHeightCollapse = trigger('zuiHeightCollapse', [
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

export const zuiHeightCollapseList = trigger('zuiHeightCollapseList', [
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

export const zuiWidthCollapse = trigger('zuiWidthCollapse', [
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

export const zuiWidthCollapseList = trigger('zuiWidthCollapseList', [
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

export const zuiFadeInList = trigger('zuiFadeInList', [
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

export const zuiFadeInTop = trigger('zuiFadeInTop', [
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

export const zuiFadeInBottom = trigger('zuiFadeInBottom', [
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

export const zuiDropdownAnimation = trigger('zuiDropdownAnimation', [
  transition(
    `* => ${ZuiDropdownAnimation.FadeInTop}`,
    [
      style({transform: 'translateY(-10px)', opacity: 0}),
      animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
    ],
    DURATION,
  ),
  transition(
    `* => ${ZuiDropdownAnimation.FadeInBottom}`,
    [
      style({transform: 'translateY(10px)', opacity: 0}),
      animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
    ],
    DURATION,
  ),
  transition(
    `${ZuiDropdownAnimation.FadeInBottom} => *`,
    [
      style({transform: 'translateY(0)', opacity: 1}),
      animate(TRANSITION, style({transform: 'translateY(10px)', opacity: 0})),
    ],
    DURATION,
  ),
  transition(
    `${ZuiDropdownAnimation.FadeInTop} => *`,
    [
      style({transform: 'translateY(0)', opacity: 1}),
      animate(TRANSITION, style({transform: 'translateY(-10px)', opacity: 0})),
    ],
    DURATION,
  ),
]);

export const zuiScaleIn = trigger('zuiScaleIn', [
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

export const zuiScaleInList = trigger('zuiScaleInList', [
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

export const zuiSlideIn = trigger('zuiSlideIn', [
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

export const zuiSlideInLeft = trigger('zuiSlideInLeft', [
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

export const zuiSlideInLeftList = trigger('zuiSlideInLeftList', [
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

export const zuiSlideInRight = trigger('zuiSlideInRight', [
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

export const zuiSlideInRightList = trigger('zuiSlideInRightList', [
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

export const zuiSlideInTop = trigger('zuiSlideInTop', [
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

export const zuiSlideInTopList = trigger('zuiSlideInTopList', [
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

export const zuiSlideInBottom = trigger('zuiSlideInBottom', [
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

export const zuiSlideInBottomList = trigger('zuiSlideInBottomList', [
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
