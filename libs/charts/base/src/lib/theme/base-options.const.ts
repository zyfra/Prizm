import { PrizmChartBaseOptions } from './types';

export const PRIZM_DEFAULT_AXIS_OPTIONS = {
  minTickInterval: 10,
  range: [0, 1],
};

export const PRIZM_CHART_BASE_OPTIONS: PrizmChartBaseOptions = {
  prizm: {
    components: {
      bar: {
        xAxis: PRIZM_DEFAULT_AXIS_OPTIONS,
        barStyle: {
          fillOpacity: 1,
        },
      },
      column: {
        columnStyle: {
          fillOpacity: 1,
        },
      },
      area: {
        xAxis: PRIZM_DEFAULT_AXIS_OPTIONS,
        yAxis: PRIZM_DEFAULT_AXIS_OPTIONS,
        areaStyle: {
          lineOpacity: 1,
        },
      },
      scatter: {
        xAxis: PRIZM_DEFAULT_AXIS_OPTIONS,
        yAxis: PRIZM_DEFAULT_AXIS_OPTIONS,
        pointStyle: {
          stroke: null,
        },
      },
      waterfall: {
        interactions: [{ type: 'element-active' }],
        state: {
          active: {
            animate: { duration: 100, easing: 'easeLinear' },
          },
        },
        waterfallStyle: {
          fillOpacity: 1,
        },
      },
      pie: {
        interactions: [{ type: 'element-active' }],
        state: {
          active: {
            animate: { duration: 100, easing: 'easeLinear' },
          },
        },
        pieStyle: {
          lineWidth: 1,
          fillOpacity: 1,
        },
      },
      'radial-bar': {
        interactions: [{ type: 'element-active' }],
        state: {
          active: {
            animate: { duration: 100, easing: 'easeLinear' },
          },
        },
        barStyle: {
          fillOpacity: 1,
        },
      },
      treemap: {
        interactions: [{ type: 'element-active' }],
        state: {
          active: {
            animate: { duration: 100, easing: 'easeLinear' },
          },
        },
        rectStyle: {
          fillOpacity: 1,
        },
      },
    },
  },
  padding: 'auto',
  fontFamily:
    '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
  columnWidthRatio: 0.5,
  maxColumnWidth: null,
  minColumnWidth: null,
  roseWidthRatio: 0.9999999,
  multiplePieWidthRatio: 0.7692307692307692,
  shapes: {
    point: [
      'hollow-circle',
      'hollow-square',
      'hollow-bowtie',
      'hollow-diamond',
      'hollow-hexagon',
      'hollow-triangle',
      'hollow-triangle-down',
      'circle',
      'square',
      'bowtie',
      'diamond',
      'hexagon',
      'triangle',
      'triangle-down',
      'cross',
      'tick',
      'plus',
      'hyphen',
      'line',
    ],
    line: ['line', 'dash', 'dot', 'smooth'],
    area: ['area', 'smooth', 'line', 'smooth-line'],
    interval: ['rect', 'hollow-rect', 'line', 'tick'],
  },
  sizes: [1, 10],
  components: {
    axis: {
      common: {
        title: {
          autoRotate: true,
          position: 'center',
          spacing: 12,
          style: {
            fontSize: 12,
            lineHeight: 12,
            textBaseline: 'middle',
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
          },
        },
        label: {
          autoRotate: false,
          autoEllipsis: false,
          autoHide: {
            type: 'equidistance',
            cfg: {
              minGap: 6,
            },
          },
          offset: 8,
          style: {
            fontSize: 12,
            lineHeight: 12,
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
          },
        },
        line: {
          style: {
            lineWidth: 1,
          },
        },
        grid: {
          line: {
            type: 'line',
            style: {
              lineWidth: 1,
              lineDash: null,
            },
          },
          alignTick: true,
          animate: true,
        },
        tickLine: null,
        subTickLine: null,
        animate: true,
      },
      top: {
        position: 'top',
        grid: null,
        title: {
          style: {
            fontSize: 12,
          },
        },
        verticalLimitLength: 0.5,
      },
      bottom: {
        position: 'bottom',
        grid: null,
        title: {
          style: {
            fontSize: 12,
          },
        },
        verticalLimitLength: 0.5,
      },
      left: {
        position: 'left',
        title: {
          style: {
            fontSize: 12,
          },
        },
        line: null,
        tickLine: null,
        verticalLimitLength: 0.3333333333333333,
      },
      right: {
        position: 'right',
        title: {
          style: {
            fontSize: 12,
          },
        },
        line: null,
        tickLine: null,
        verticalLimitLength: 0.3333333333333333,
      },
      circle: {
        title: null,
        grid: {
          line: {
            type: 'line',
            style: {
              lineWidth: 1,
              lineDash: null,
            },
          },
          alignTick: true,
          animate: true,
        },
        line: {
          style: {
            lineWidth: 0,
          },
        },
      },
      radius: {
        title: {
          style: {
            fontSize: 0,
          },
        },
        grid: {
          line: {
            type: 'circle',
            style: {
              lineWidth: 1,
              lineDash: null,
            },
          },
          alignTick: true,
          animate: true,
        },
      },
    },
    legend: {
      common: {
        title: null,
        marker: {
          symbol: 'circle',
          spacing: 4,
          style: {
            r: 4,
          },
        },
        itemName: {
          spacing: 5,
          style: {
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
            fontSize: 12,
            lineHeight: 12,
            fontWeight: 'normal',
            textAlign: 'start',
            textBaseline: 'middle',
          },
        },
        itemStates: {
          active: {
            nameStyle: {
              opacity: 0.8,
            },
          },
          inactive: {
            markerStyle: {
              opacity: 0.2,
            },
          },
        },
        flipPage: true,
        pageNavigator: {
          marker: {
            style: {
              size: 12,
              inactiveOpacity: 12,
              opacity: 1,
            },
          },
          text: {
            style: {
              fontSize: 12,
            },
          },
        },
        animate: false,
        maxItemWidth: 200,
        itemSpacing: 16,
        itemMarginBottom: 12,
        padding: [8, 8, 8, 8],
        legendItemMarginBottom: 16,
      },
      right: {
        layout: 'vertical',
        padding: [0, 8, 0, 8],
      },
      left: {
        layout: 'vertical',
        padding: [0, 8, 0, 8],
      },
      top: {
        layout: 'horizontal',
        padding: [8, 0, 8, 0],
      },
      bottom: {
        layout: 'horizontal',
        padding: [8, 0, 8, 0],
      },
      continuous: {
        title: null,
        background: null,
        track: {},
        rail: {
          type: 'color',
          size: 12,
          defaultLength: 100,
          style: {
            stroke: null,
            lineWidth: 0,
          },
        },
        label: {
          align: 'rail',
          spacing: 12,
          formatter: null,
          style: {
            fontSize: 12,
            lineHeight: 16,
            textBaseline: 'middle',
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
          },
        },
        handler: {
          size: 10,
        },
        slidable: true,
        padding: [8, 8, 8, 8],
      },
    },
    tooltip: {
      showContent: true,
      follow: true,
      showCrosshairs: false,
      showMarkers: true,
      shared: false,
      enterable: false,
      position: 'auto',
      marker: {
        symbol: 'circle',
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        r: 4,
      },
      crosshairs: {
        line: {
          style: {
            lineWidth: 1,
          },
        },
        text: null,
        textBackground: {
          padding: 2,
          style: {
            lineWidth: 0,
            stroke: null,
          },
        },
        follow: false,
      },
      domStyles: {
        'g2-tooltip': {
          position: 'absolute',
          visibility: 'hidden',
          zIndex: 8,
          transition:
            'left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s',
          backgroundColor: 'var(--prizm-v3-background-fill-overlay)',
          color: 'var(--prizm-v3-text-icon-primary)',
          fontFamily: 'Inter',
          overflow: 'hidden',
          opacity: 0.95,
          boxShadow: 'var(--prizm-v3-shadow-big-bottom)',
          borderRadius: '2px',
          fontSize: 14,
          lineHeight: '12px',
          padding: '0 12px 0 12px',
        },
        'g2-tooltip-title': {
          marginBottom: '12px',
          marginTop: '12px',
        },
        'g2-tooltip-list': {
          margin: 0,
          listStyleType: 'none',
          padding: 0,
        },
        'g2-tooltip-list-item': {
          listStyleType: 'none',
          padding: 0,
          marginBottom: '12px',
          marginTop: '12px',
          marginLeft: 0,
          marginRight: 0,
          color: 'var(--prizm-v3-text-icon-secondary)',
        },
        'g2-tooltip-marker': {
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          display: 'inline-block',
          marginRight: '8px',
        },
        'g2-tooltip-value': {
          display: 'inline-block',
          float: 'right',
          marginLeft: '30px',
        },
      },
    },
    annotation: {
      arc: {
        style: {
          lineWidth: 1,
        },
        animate: true,
      },
      line: {
        style: {
          lineDash: null,
          lineWidth: 1,
        },
        text: {
          position: 'start',
          autoRotate: true,
          style: {
            stroke: null,
            lineWidth: 0,
            fontSize: 12,
            textAlign: 'start',
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
            textBaseline: 'bottom',
          },
        },
        animate: true,
      },
      text: {
        style: {
          stroke: null,
          lineWidth: 0,
          fontSize: 12,
          textBaseline: 'middle',
          textAlign: 'start',
          fontFamily:
            '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
        },
        animate: true,
      },
      region: {
        top: false,
        style: {
          lineWidth: 0,
          stroke: null,
          fillOpacity: 0.06,
        },
        animate: true,
      },
      image: {
        top: false,
        animate: true,
      },
      dataMarker: {
        top: true,
        point: {
          style: {
            r: 3,
            lineWidth: 2,
          },
        },
        line: {
          style: {
            lineWidth: 1,
          },
          length: 16,
        },
        text: {
          style: {
            textAlign: 'start',
            stroke: null,
            lineWidth: 0,
            fontSize: 12,
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
          },
        },
        direction: 'upward',
        autoAdjust: true,
        animate: true,
      },
      dataRegion: {
        style: {
          region: {
            fillOpacity: 0.06,
          },
          text: {
            textAlign: 'center',
            textBaseline: 'bottom',
            stroke: null,
            lineWidth: 0,
            fontSize: 12,
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
          },
        },
        animate: true,
      },
    },
    slider: {
      common: {
        padding: [8, 8, 8, 8],
        backgroundStyle: {
          opacity: 0.5,
        },
        foregroundStyle: {
          opacity: 0.25,
        },
        handlerStyle: {
          width: 8,
          height: 24,
          opacity: 1,
          stroke: '#6e778c',
          lineWidth: 1,
          radius: 2,
          highLightFill: '#FFF',
        },
        textStyle: {
          opacity: 1,
          fontSize: 12,
          lineHeight: 12,
          fontWeight: 'normal',
          stroke: null,
          lineWidth: 0,
        },
      },
    },
    scrollbar: {
      common: {
        padding: [8, 8, 8, 8],
      },
    },
  },
  labels: {
    offset: 12,
    style: {
      fontSize: 12,
      fontFamily:
        '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
      lineWidth: 0,
    },
    autoRotate: true,
  },
  innerLabels: {
    style: {
      fontSize: 12,
      fontFamily:
        '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
      lineWidth: 0,
    },
    autoRotate: true,
  },
  overflowLabels: {
    style: {
      fontSize: 12,
      fontFamily:
        '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
      stroke: null,
      lineWidth: 1,
    },
  },
  pieLabels: {
    labelHeight: 14,
    offset: 8,
    labelLine: {
      style: {
        lineWidth: 1,
      },
    },
    autoRotate: true,
  },
  'bottom-axis-subTick-line': false,
  'circle-axis-subTick-line': false,
  'radius-axis-subTick-line': false,
};
