import { PrizmChartThemeObject } from './types';

export const PRIZM_CHART_LIGHT_THEME_DATA_COLORS = [
  '#336666',
  '#9933FF',
  '#3366CC',
  '#606580',
  '#996600',
  '#CC3366',
  '#003300',
  '#990099',
  '#6633FF',
  '#663333',
  '#666600',
];

export const PRIZM_LIGHT_THEME_AXIS_COLOR = '#c3c7cf';

export const PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY = '#3f4759';

export const PRIZM_LIGHT_THEME_TEXT_COLOR_DISABLE = '#a7acb8';

export const PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY = '#ffffff';

export const PRIZM_CHART_LIGHT_THEME: PrizmChartThemeObject = {
  prizm: {
    components: {
      bar: {
        xAxis: {
          minTickInterval: 10,
          grid: {
            line: {
              style: {
                stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
            },
          },
          range: [0, 1],
        },
      },
      area: {
        xAxis: {
          minTickInterval: 10,
          grid: {
            line: {
              style: {
                stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
            },
          },
          range: [0, 1],
        },
        yAxis: {
          minTickInterval: 10,
          grid: {
            line: {
              style: {
                stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
            },
          },
          range: [0, 1],
        },
      },
      scatter: {
        xAxis: {
          minTickInterval: 10,
          grid: {
            line: {
              style: {
                stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
            },
          },
          range: [0, 1],
        },
        yAxis: {
          minTickInterval: 10,
          grid: {
            line: {
              style: {
                stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
            },
          },
          range: [0, 1],
        },
      },
    },
  },
  background: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
  // TODO: reseacrh why this subColor here #dr
  subColor: 'rgba(214, 219, 231, 1)',
  semanticRed: '#CC0000',
  semanticGreen: '#006600',
  padding: 'auto',
  fontFamily:
    '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
  columnWidthRatio: 0.5,
  maxColumnWidth: null,
  minColumnWidth: null,
  roseWidthRatio: 0.9999999,
  multiplePieWidthRatio: 0.7692307692307692,
  // TODO: reseacrh why this colors here #dr
  sequenceColors: [
    '#B8E1FF',
    '#9AC5FF',
    '#7DAAFF',
    '#5B8FF9',
    '#3D76DD',
    '#085EC0',
    '#0047A5',
    '#00318A',
    '#001D70',
  ],
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
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
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
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
            fontSize: 12,
            lineHeight: 12,
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
          },
        },
        line: {
          style: {
            lineWidth: 1,
            stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
          },
        },
        grid: {
          line: {
            type: 'line',
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
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
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
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
        tickLine: {
          style: {
            stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
          },
        },
      },
      radius: {
        title: {
          style: {
            fontSize: 0,
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        grid: {
          line: {
            type: 'circle',
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
              lineWidth: 1,
              lineDash: null,
            },
          },
          alignTick: true,
          animate: true,
        },
        label: {
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
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
            fill: '#4075FF',
          },
        },
        itemName: {
          spacing: 5,
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
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
          unchecked: {
            nameStyle: {
              fill: PRIZM_LIGHT_THEME_TEXT_COLOR_DISABLE,
            },
            markerStyle: {
              fill: PRIZM_LIGHT_THEME_TEXT_COLOR_DISABLE,
              stroke: PRIZM_LIGHT_THEME_TEXT_COLOR_DISABLE,
            },
          },
          inactive: {
            nameStyle: {
              fill: PRIZM_LIGHT_THEME_TEXT_COLOR_DISABLE,
            },
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
              inactiveFill: '#f3f4f5',
              inactiveOpacity: 12,
              fill: '#6e778c',
              opacity: 1,
            },
          },
          text: {
            style: {
              fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
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
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
            stroke: null,
            lineWidth: 0,
          },
        },
        label: {
          align: 'rail',
          spacing: 12,
          formatter: null,
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
            fontSize: 12,
            lineHeight: 16,
            textBaseline: 'middle',
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
          },
        },
        handler: {
          size: 8,
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
            stroke: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
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
        stroke: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(214, 219, 231, 1)',
        lineWidth: 1,
        r: 4,
      },
      crosshairs: {
        line: {
          style: {
            stroke: '#1A1C24',
            lineWidth: 1,
          },
        },
        text: null,
        textBackground: {
          padding: 2,
          style: {
            fill: 'rgba(0, 0, 0, 0.25)',
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
          boxShadow: 'var(--prizm-shadow-big-bottom)',
          transition:
            'left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s',
          backgroundColor: 'var(--prizm-background-fill-overlay)',
          color: 'var(--prizm-text-icon-primary)',
          overflow: 'hidden',
          fontFamily: 'Inter',
          opacity: 0.95,
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
          color: 'var(--prizm-text-icon-secondary)',
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
          stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
          lineWidth: 1,
        },
        animate: true,
      },
      line: {
        style: {
          stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
          lineDash: null,
          lineWidth: 1,
        },
        text: {
          position: 'start',
          autoRotate: true,
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
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
          fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
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
          fill: '#000',
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
            stroke: '#4075FF',
            lineWidth: 2,
          },
        },
        line: {
          style: {
            stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
            lineWidth: 1,
          },
          length: 16,
        },
        text: {
          style: {
            textAlign: 'start',
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
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
            fill: '#000',
            fillOpacity: 0.06,
          },
          text: {
            textAlign: 'center',
            textBaseline: 'bottom',
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
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
          fill: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
          opacity: 0.5,
        },
        foregroundStyle: {
          fill: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
          opacity: 0.25,
        },
        handlerStyle: {
          width: 8,
          height: 24,
          fill: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
          opacity: 1,
          stroke: '#6e778c',
          lineWidth: 1,
          radius: 2,
          highLightFill: '#FFF',
        },
        textStyle: {
          fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
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
      default: {
        style: {
          trackColor: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
          thumbColor: '#c3c7cf',
        },
      },
      hover: {
        style: {
          thumbColor: '#9ba1af',
        },
      },
    },
  },
  labels: {
    offset: 12,
    style: {
      fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
      fontSize: 12,
      fontFamily:
        '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
      stroke: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
      lineWidth: null,
    },
    fillColorDark: '#2c3542',
    fillColorLight: '#ffffff',
    autoRotate: true,
  },
  innerLabels: {
    style: {
      fill: '#FFFFFF',
      fontSize: 12,
      fontFamily:
        '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
      stroke: null,
      lineWidth: 0,
    },
    autoRotate: true,
  },
  overflowLabels: {
    style: {
      fill: '#FFFFFF',
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
  styleSheet: {
    brandColor: PRIZM_CHART_LIGHT_THEME_DATA_COLORS[0],
    paletteQualitative10: PRIZM_CHART_LIGHT_THEME_DATA_COLORS,
    paletteQualitative20: PRIZM_CHART_LIGHT_THEME_DATA_COLORS,
  },
};
