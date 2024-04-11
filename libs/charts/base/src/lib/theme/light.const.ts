import { PrizmChartThemeObject } from './types';
import { PRIZM_CHART_BASE_OPTIONS } from './base-options.const';
import { merge } from 'lodash';

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

export const PRIZM_LIGHT_THEME_STROKE_HOVER_COLOR = '#20222b';

const PRIZM_CHART_LIGHT_THEME_COLOR_SCEME = {
  prizm: {
    components: {
      bar: {
        xAxis: {
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
        },
      },
      area: {
        xAxis: {
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
        },
        yAxis: {
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
        },
      },
      scatter: {
        xAxis: {
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
        },
        yAxis: {
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
        },
      },
      waterfall: {
        state: {
          active: {
            style: {
              stroke: PRIZM_LIGHT_THEME_STROKE_HOVER_COLOR,
            },
          },
        },
      },
      pie: {
        state: {
          active: {
            style: {
              stroke: PRIZM_LIGHT_THEME_STROKE_HOVER_COLOR,
            },
          },
        },
        pieStyle: {
          stroke: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
        },
      },
      'radial-bar': {
        state: {
          active: {
            style: {
              stroke: PRIZM_LIGHT_THEME_STROKE_HOVER_COLOR,
            },
          },
        },
      },
      treemap: {
        rectStyle: {
          stroke: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
        },
        state: {
          active: {
            style: {
              stroke: PRIZM_LIGHT_THEME_STROKE_HOVER_COLOR,
            },
          },
        },
      },
    },
  },
  background: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
  // TODO: reseacrh why this subColor here #dr
  subColor: 'rgba(214, 219, 231, 1)',
  semanticRed: '#CC0000',
  semanticGreen: '#006600',
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
  components: {
    axis: {
      common: {
        title: {
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        label: {
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        line: {
          style: {
            stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
          },
        },
        grid: {
          line: {
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
            },
          },
        },
      },
      circle: {
        grid: {
          line: {
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
            },
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
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        grid: {
          line: {
            style: {
              stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
            },
          },
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
        marker: {
          style: {
            fill: '#4075FF',
          },
        },
        itemName: {
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        itemStates: {
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
          },
        },
        pageNavigator: {
          marker: {
            style: {
              inactiveFill: '#f3f4f5',
              fill: '#6e778c',
            },
          },
          text: {
            style: {
              fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
            },
          },
        },
      },
      continuous: {
        rail: {
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        label: {
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        handler: {
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
            stroke: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
      },
    },
    tooltip: {
      marker: {
        stroke: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
        shadowColor: 'rgba(214, 219, 231, 1)',
      },
      crosshairs: {
        line: {
          style: {
            stroke: '#1A1C24',
          },
        },
        textBackground: {
          style: {
            fill: 'rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
    annotation: {
      arc: {
        style: {
          stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
        },
      },
      line: {
        style: {
          stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
        },
        text: {
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
      },
      text: {
        style: {
          fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
        },
      },
      region: {
        style: {
          fill: '#000',
        },
      },
      dataMarker: {
        point: {
          style: {
            stroke: '#4075FF',
          },
        },
        line: {
          style: {
            stroke: PRIZM_LIGHT_THEME_AXIS_COLOR,
          },
        },
        text: {
          style: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
      },
      dataRegion: {
        style: {
          region: {
            fill: '#000',
          },
          text: {
            fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
          },
        },
      },
    },
    slider: {
      common: {
        backgroundStyle: {
          fill: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
        },
        foregroundStyle: {
          fill: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
        },
        handlerStyle: {
          fill: PRIZM_LIGHT_THEME_BACKGROUND_COLOR_PRIMARY,
          stroke: '#6e778c',
          highLightFill: '#FFF',
        },
        textStyle: {
          fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
        },
      },
    },
    scrollbar: {
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
    style: {
      fill: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
      stroke: PRIZM_LIGHT_THEME_TEXT_COLOR_SECONDARY,
    },
    fillColorDark: '#2c3542',
    fillColorLight: '#ffffff',
  },
  innerLabels: {
    style: {
      fill: '#FFFFFF',
    },
  },
  overflowLabels: {
    style: {
      fill: '#FFFFFF',
    },
  },
  styleSheet: {
    brandColor: PRIZM_CHART_LIGHT_THEME_DATA_COLORS[0],
    paletteQualitative10: PRIZM_CHART_LIGHT_THEME_DATA_COLORS,
    paletteQualitative20: PRIZM_CHART_LIGHT_THEME_DATA_COLORS,
  },
};

export const PRIZM_CHART_LIGHT_THEME: PrizmChartThemeObject = merge(
  PRIZM_CHART_LIGHT_THEME_COLOR_SCEME,
  PRIZM_CHART_BASE_OPTIONS
);
