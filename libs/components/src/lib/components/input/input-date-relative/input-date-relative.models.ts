// Global
export interface RelativeDateModel {
  time: RelativeDateTimeId;
  direction: RelativeDateDirectionId;
  number: string;
  period: RelativeDatePeriodId;
}

// Menu
export interface RelativeDateMenuItem<T = unknown> {
  id: T;
  groupId: keyof RelativeDateMenuItems;
  active?: boolean;
  icon: string;
  label: string;
}

export type RelativeDateTimeId = (typeof DefaultRelativeMenuItems.time)[number]['id'];
export type RelativeDateDirectionId = (typeof DefaultRelativeMenuItems.direction)[number]['id'];
export type RelativeDatePeriodId = (typeof DefaultRelativeMenuItems.period)[number]['id'];

export function getDefaultRelativeDateMenuItems(): RelativeDateMenuItems {
  return DefaultRelativeMenuItems as any;
}

export type IdByGroup<TProp extends keyof RelativeDateMenuItems> = RelativeDateMenuItems[TProp][number]['id'];

export interface RelativeDateMenuItems {
  time: RelativeDateMenuItem<RelativeDateTimeId>[];
  direction: RelativeDateMenuItem<RelativeDateDirectionId>[];
  period: RelativeDateMenuItem<RelativeDatePeriodId>[];
}

const DefaultRelativeMenuItems = {
  time: [
    {
      id: 'current',
      groupId: 'time',
      icon: 'sumbol-asterisk',
      label: 'Текущее время',
    },
    {
      id: 'midnight',
      groupId: 'time',
      icon: 'letter-time',
      label: 'Полночь текущих суток',
    },
  ],

  direction: [
    { id: 'plus', groupId: 'direction', icon: 'circle-plus', label: 'Смещение вперед' },
    {
      id: 'minus',
      groupId: 'direction',
      icon: 'minus-circle',
      label: 'Смещение назад',
    },
  ],

  period: [
    {
      id: 'year',
      groupId: 'period',
      icon: 'letter-year',
      label: 'Год',
    },
    {
      id: 'month',
      groupId: 'period',
      icon: 'letter-month',
      label: 'Месяц',
    },
    {
      id: 'day',
      groupId: 'period',
      icon: 'letter-day',
      label: 'День',
    },
    {
      id: 'hour',
      groupId: 'period',
      icon: 'letter-hour',
      label: 'Час',
    },
    {
      id: 'minute',
      groupId: 'period',
      icon: 'letter-minute',
      label: 'Минута',
    },
    {
      id: 'second',
      groupId: 'period',
      icon: 'letter-second',
      label: 'Секунда',
    },
  ],
} as const;
