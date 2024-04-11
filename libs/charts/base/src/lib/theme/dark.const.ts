import { merge } from 'lodash';
import { PRIZM_CHART_BASE_OPTIONS } from './base-options.const';
import { PrizmChartThemeObject } from './types';

export const PRIZM_CHART_DARK_THEME_DATA_COLORS = [
  '#339999',
  '#9966FF',
  '#33CCFF',
  '#8D91A4',
  '#CC9933',
  '#FF99CC',
  '#99CC99',
  '#CC66FF',
  '#9999FF',
  '#CC9999',
  '#669900',
];

export const PRIZM_DARK_THEME_AXIS_COLOR = '#2c313d';

export const PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY = '#a7acb8';

export const PRIZM_DARK_THEME_TEXT_COLOR_DISABLE = '#545f77';

export const PRIZM_DARK_THEME_BACKGROUND_COLOR_PRIMARY = '#1e222a';

export const PRIZM_DARK_THEME_STROKE_HOVER_COLOR = '#ffffff';

const PRIZM_CHART_DARK_THEME_COLOR_SCEME = {
  prizm: {
    components: {
      bar: {
        xAxis: {
          grid: {
            line: {
              style: {
                stroke: PRIZM_DARK_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_DARK_THEME_AXIS_COLOR,
            },
          },
        },
      },
      area: {
        xAxis: {
          grid: {
            line: {
              style: {
                stroke: PRIZM_DARK_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_DARK_THEME_AXIS_COLOR,
            },
          },
        },
        yAxis: {
          grid: {
            line: {
              style: {
                stroke: PRIZM_DARK_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_DARK_THEME_AXIS_COLOR,
            },
          },
        },
      },
      scatter: {
        xAxis: {
          grid: {
            line: {
              style: {
                stroke: PRIZM_DARK_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_DARK_THEME_AXIS_COLOR,
            },
          },
        },
        yAxis: {
          grid: {
            line: {
              style: {
                stroke: PRIZM_DARK_THEME_AXIS_COLOR,
              },
            },
          },
          line: {
            style: {
              stroke: PRIZM_DARK_THEME_AXIS_COLOR,
            },
          },
        },
      },
      waterfall: {
        state: {
          active: {
            style: {
              stroke: PRIZM_DARK_THEME_STROKE_HOVER_COLOR,
            },
          },
        },
      },
      pie: {
        state: {
          active: {
            style: {
              stroke: PRIZM_DARK_THEME_STROKE_HOVER_COLOR,
            },
          },
        },
        pieStyle: {
          stroke: PRIZM_DARK_THEME_BACKGROUND_COLOR_PRIMARY,
        },
      },
      'radial-bar': {
        state: {
          active: {
            style: {
              stroke: PRIZM_DARK_THEME_STROKE_HOVER_COLOR,
            },
          },
        },
      },
      treemap: {
        rectStyle: {
          stroke: PRIZM_DARK_THEME_BACKGROUND_COLOR_PRIMARY,
        },
        state: {
          active: {
            style: {
              stroke: PRIZM_DARK_THEME_STROKE_HOVER_COLOR,
            },
          },
        },
      },
    },
  },
  background: PRIZM_DARK_THEME_BACKGROUND_COLOR_PRIMARY,
  // TODO: reseacrh why this subColor here #dr
  subColor: 'rgba(48, 51, 64, 1)',
  semanticRed: '#FF0033',
  semanticGreen: '#009900',
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
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        label: {
          style: {
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        line: {
          style: {
            stroke: PRIZM_DARK_THEME_AXIS_COLOR,
          },
        },
        grid: {
          line: {
            style: {
              stroke: PRIZM_DARK_THEME_AXIS_COLOR,
            },
          },
        },
      },
      circle: {
        grid: {
          line: {
            style: {
              stroke: PRIZM_DARK_THEME_AXIS_COLOR,
            },
          },
        },
        tickLine: {
          style: {
            stroke: PRIZM_DARK_THEME_AXIS_COLOR,
          },
        },
      },
      radius: {
        title: {
          style: {
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        grid: {
          line: {
            style: {
              stroke: PRIZM_DARK_THEME_AXIS_COLOR,
            },
          },
        },
        label: {
          style: {
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
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
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        itemStates: {
          unchecked: {
            nameStyle: {
              fill: PRIZM_DARK_THEME_TEXT_COLOR_DISABLE,
            },
            markerStyle: {
              fill: PRIZM_DARK_THEME_TEXT_COLOR_DISABLE,
              stroke: PRIZM_DARK_THEME_TEXT_COLOR_DISABLE,
            },
          },
          inactive: {
            nameStyle: {
              fill: PRIZM_DARK_THEME_TEXT_COLOR_DISABLE,
            },
          },
        },
        pageNavigator: {
          marker: {
            style: {
              inactiveFill: '#2c313d',
              fill: '#6e778c',
            },
          },
          text: {
            style: {
              fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
            },
          },
        },
      },
      continuous: {
        rail: {
          style: {
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        label: {
          style: {
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
        handler: {
          style: {
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
            stroke: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
      },
    },
    tooltip: {
      marker: {
        stroke: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
        shadowColor: 'rgba(48, 51, 64, 1)',
      },
      crosshairs: {
        line: {
          style: {
            stroke: 'rgba(244, 246, 251, 1)',
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
          stroke: PRIZM_DARK_THEME_AXIS_COLOR,
        },
      },
      line: {
        style: {
          stroke: PRIZM_DARK_THEME_AXIS_COLOR,
        },
        text: {
          style: {
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
      },
      text: {
        style: {
          fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
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
            stroke: PRIZM_DARK_THEME_AXIS_COLOR,
          },
        },
        text: {
          style: {
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
      },
      dataRegion: {
        style: {
          region: {
            fill: '#000',
          },
          text: {
            fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
          },
        },
      },
    },
    slider: {
      common: {
        backgroundStyle: {
          fill: PRIZM_DARK_THEME_BACKGROUND_COLOR_PRIMARY,
        },
        foregroundStyle: {
          fill: PRIZM_DARK_THEME_BACKGROUND_COLOR_PRIMARY,
        },
        handlerStyle: {
          fill: PRIZM_DARK_THEME_BACKGROUND_COLOR_PRIMARY,
          stroke: '#6e778c',
          highLightFill: '#FFF',
        },
        textStyle: {
          fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
        },
      },
    },
    scrollbar: {
      default: {
        style: {
          trackColor: PRIZM_DARK_THEME_BACKGROUND_COLOR_PRIMARY,
          thumbColor: '#545f77',
        },
      },
      hover: {
        style: {
          thumbColor: '#7e8799',
        },
      },
    },
  },
  labels: {
    style: {
      fill: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
      stroke: PRIZM_DARK_THEME_TEXT_COLOR_SECONDARY,
    },
    fillColorDark: '#ffffff',
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
    brandColor: PRIZM_CHART_DARK_THEME_DATA_COLORS[0],
    paletteQualitative10: PRIZM_CHART_DARK_THEME_DATA_COLORS,
    paletteQualitative20: PRIZM_CHART_DARK_THEME_DATA_COLORS,
  },
};

export const PRIZM_CHART_DARK_THEME: PrizmChartThemeObject = merge(
  PRIZM_CHART_DARK_THEME_COLOR_SCEME,
  PRIZM_CHART_BASE_OPTIONS
);
