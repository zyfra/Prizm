import {
  RelativeDateDirectionId,
  RelativeDateMenuItem,
  RelativeDateModel,
  RelativeDatePeriodId,
  RelativeDateTimeId,
} from './relative-datepicker.models';

/**
 * Check items as radio button, to active id
 */
export function UpdateActiveItem<T>(items: RelativeDateMenuItem<T>[], id: T): RelativeDateMenuItem<T>[] {
  return items.map(item => {
    const newItem = { ...item };
    newItem.active = false;

    if (item.id === id) {
      newItem.active = true;
    }

    return newItem;
  });
}

/**
 * Parse input text to model
 */
export function ParseTextInput(text: string): RelativeDateModel {
  const result: RelativeDateModel = {} as RelativeDateModel;

  const regexMatch = new RegExp(MatchPattern);
  const match = regexMatch.exec(text);

  result.time = timeMap.get(match[1]);
  result.direction = directionMap.get(match[2]);
  result.period = periodMap.get(match[4]);
  result.number = match[3] || (result.direction || result.period ? '0' : '');

  return result;
}

/**
 * Render text from RelativeDateModel
 */
export function RenderText(model: RelativeDateModel): string {
  let result = '';

  result+= renderTimeMap.get(model.time) || "";
  result+= renderDirectionMap.get(model.direction) || "";
  result+= model.number || "0";
  result+= renderPeriodMap.get(model.period) || "";
  const direction = renderDirectionMap.get(model.direction);
  const period = renderPeriodMap.get(model.period);

  result += renderTimeMap.get(model.time) || '';
  result += direction || '';
  result += model.number || (direction || period ? '0' : '');
  result += period || '';

  return result;
}

//region Private utility models to parse and render
const MatchPattern = '(T|\\*)?(\\+|\\-)?(\\d+)?(Y|M|d|h|m|s)?';

const timeMap = new Map<string, RelativeDateTimeId>([
  ['*', 'current'],
  ['T', 'midnight'],
  ['t', 'midnight'], // Can be optional
]);

const directionMap = new Map<string, RelativeDateDirectionId>([
  ['-', 'minus'],
  ['+', 'plus'],
]);

const periodMap = new Map<string, RelativeDatePeriodId>([
  ['Y', 'year'],
  ['M', 'month'],
  ['d', 'day'],
  ['h', 'hour'],
  ['m', 'minute'],
  ['s', 'second'],
]);

const renderTimeMap = new Map<RelativeDateTimeId, string>([
  ['current', '*'],
  ['midnight', 'T'],
]);

const renderDirectionMap = new Map<RelativeDateDirectionId, string>([
  ['minus', '-'],
  ['plus', '+'],
]);

const renderPeriodMap = new Map<RelativeDatePeriodId, string>([
  ['year', 'Y'],
  ['month', 'M'],
  ['day', 'd'],
  ['hour', 'h'],
  ['minute', 'm'],
  ['second', 's'],
]);
//endregion
