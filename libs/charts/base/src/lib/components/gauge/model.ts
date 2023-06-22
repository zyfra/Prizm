import { Gauge, GaugeOptions } from '@antv/g2plot';

export type PrizmChartsGaugeOptions = Omit<GaugeOptions, 'percent'> & {
  percent?: GaugeOptions['percent'];
};
export type PrizmChartsGaugeOrigin = Gauge;
