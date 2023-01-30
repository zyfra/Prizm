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
      icon: 'date-asterisk',
      label: 'Текущее время',
    },
    {
      id: 'midnight',
      groupId: 'time',
      icon: 'date-now',
      label: 'Полночь текущих суток',
    },
  ],

  direction: [
    { id: 'plus', groupId: 'direction', icon: 'add-circle', label: 'Смещение вперед' },
    {
      id: 'minus',
      groupId: 'direction',
      icon: 'delete-minus-circle',
      label: 'Смещение назад',
    },
  ],

  period: [
    {
      id: 'year',
      groupId: 'period',
      icon: 'date-year',
      label: 'Год',
    },
    {
      id: 'month',
      groupId: 'period',
      icon: 'date-month',
      label: 'Месяц',
    },
    {
      id: 'day',
      groupId: 'period',
      icon: 'date-day',
      label: 'День',
    },
    {
      id: 'hour',
      groupId: 'period',
      icon: 'date-hour',
      label: 'Час',
    },
    {
      id: 'minute',
      groupId: 'period',
      icon: 'date-minute',
      label: 'Минута',
    },
    {
      id: 'second',
      groupId: 'period',
      icon: 'date-second',
      label: 'Секунда',
    },
  ],
} as const;
