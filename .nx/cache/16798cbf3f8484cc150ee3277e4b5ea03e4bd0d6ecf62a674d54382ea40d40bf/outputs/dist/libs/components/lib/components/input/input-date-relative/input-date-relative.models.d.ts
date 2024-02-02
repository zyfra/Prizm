export interface RelativeDateModel {
    time: RelativeDateTimeId;
    direction: RelativeDateDirectionId;
    number: string;
    period: RelativeDatePeriodId;
}
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
export declare function getDefaultRelativeDateMenuItems(): RelativeDateMenuItems;
export type IdByGroup<TProp extends keyof RelativeDateMenuItems> = RelativeDateMenuItems[TProp][number]['id'];
export interface RelativeDateMenuItems {
    time: RelativeDateMenuItem<RelativeDateTimeId>[];
    direction: RelativeDateMenuItem<RelativeDateDirectionId>[];
    period: RelativeDateMenuItem<RelativeDatePeriodId>[];
}
declare const DefaultRelativeMenuItems: {
    readonly time: readonly [{
        readonly id: "current";
        readonly groupId: "time";
        readonly icon: "date-asterisk";
        readonly label: "Текущее время";
    }, {
        readonly id: "midnight";
        readonly groupId: "time";
        readonly icon: "date-now";
        readonly label: "Полночь текущих суток";
    }];
    readonly direction: readonly [{
        readonly id: "plus";
        readonly groupId: "direction";
        readonly icon: "add-circle";
        readonly label: "Смещение вперед";
    }, {
        readonly id: "minus";
        readonly groupId: "direction";
        readonly icon: "delete-minus-circle";
        readonly label: "Смещение назад";
    }];
    readonly period: readonly [{
        readonly id: "year";
        readonly groupId: "period";
        readonly icon: "date-year";
        readonly label: "Год";
    }, {
        readonly id: "month";
        readonly groupId: "period";
        readonly icon: "date-month";
        readonly label: "Месяц";
    }, {
        readonly id: "day";
        readonly groupId: "period";
        readonly icon: "date-day";
        readonly label: "День";
    }, {
        readonly id: "hour";
        readonly groupId: "period";
        readonly icon: "date-hour";
        readonly label: "Час";
    }, {
        readonly id: "minute";
        readonly groupId: "period";
        readonly icon: "date-minute";
        readonly label: "Минута";
    }, {
        readonly id: "second";
        readonly groupId: "period";
        readonly icon: "date-second";
        readonly label: "Секунда";
    }];
};
export {};
