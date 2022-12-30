import { PrizmChartThemeObject } from './types';

export const PRIZM_CHART_DARK_THEME: PrizmChartThemeObject = {

  prizm: {
    components: {
      bar: {
        color: ['#AD52BC', '#00BCD4', '#337EFF'],
        xAxis: {
          minTickInterval: 10,
          grid: {
            line:{
              style: {
                stroke: '#50546B'
              }
            }
          },
          line: {
            style: {
              stroke: '#50546b'
            }
          },
          range: [0, 1],
        },
      },
      scatter: {
        xAxis: {
          minTickInterval: 10,
          grid: {
            line:{
              style: {
                stroke: '#50546B'
              }
            }
          },
          line: {
            style: {
              stroke: '#50546b'
            }
          },
          range: [0, 1],
        },
        yAxis: {
          minTickInterval: 10,
          grid: {
            line:{
              style: {
                stroke: '#50546B'
              }
            }
          },
          line: {
            style: {
              stroke: '#50546b'
            }
          },
          range: [0, 1],
        },
      },
      area: {
        xAxis: {
          minTickInterval: 10,
          grid: {
            line:{
              style: {
                stroke: '#50546B'
              }
            }
          },
          line: {
            style: {
              stroke: '#50546b'
            }
          },
          range: [0, 1],
        },
        yAxis: {
          minTickInterval: 10,
          grid: {
            line:{
              style: {
                stroke: '#50546B'
              }
            }
          },
          line: {
            style: {
              stroke: '#50546b'
            }
          },
          range: [0, 1],
        },
      }
    }
  },
  background: 'rgba(32, 34, 43, 1)',
  subColor: 'rgba(48, 51, 64, 1)',
  semanticRed: 'rgba(241, 65, 65, 1)',
  semanticGreen: 'rgba(73, 171, 77, 1)',
  padding: 'auto',
  fontFamily:
    '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
  columnWidthRatio: 0.5,
  maxColumnWidth: null,
  minColumnWidth: null,
  roseWidthRatio: 0.9999999,
  multiplePieWidthRatio: 0.7692307692307692,
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
            fill: '#595959',
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
            fill: 'rgba(161, 165, 183, 1)',
            fontSize: 12,
            lineHeight: 12,
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
          },
        },
        line: {
          style: {
            lineWidth: 1,
            stroke: 'rgba(80, 84, 107, 1)',
          },
        },
        grid: {
          line: {
            type: 'line',
            style: {
              stroke: '#50546B',
              lineWidth: 1,
              lineDash: null,
            },
          },
          alignTick: true,
          animate: true,
        },
        tickLine: {
          style: {
            lineWidth: 1,
            stroke: 'rgba(80, 84, 107, 1)',
          },
          alignTick: true,
          length: 4,
        },
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
              stroke: 'rgba(161, 165, 183, 1)',
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
            stroke: 'rgba(161, 165, 183, 1)',
          },
        },
      },
      radius: {
        title: {
          style: {
            fontSize: 0,
            fill: 'rgba(161, 165, 183, 1)',
          },
        },
        grid: {
          line: {
            type: 'circle',
            style: {
              stroke: 'rgba(161, 165, 183, 1)',
              lineWidth: 1,
              lineDash: null,
            },
          },
          alignTick: true,
          animate: true,
        },
        label: {
          style: {
            fill: 'rgba(161, 165, 183, 1)',
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
            fill: '#5B8FF9',
          },
        },
        itemName: {
          spacing: 5,
          style: {
            fill: 'rgba(244, 246, 251, 1)',
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
              fill: '#D8D8D8',
            },
            markerStyle: {
              fill: '#D8D8D8',
              stroke: '#D8D8D8',
            },
          },
          inactive: {
            nameStyle: {
              fill: '#D8D8D8',
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
              inactiveFill: 'rgba(119, 123, 146, 0.3)',
              inactiveOpacity: 12,
              fill: 'rgba(119, 123, 146, 1)',
              opacity: 1,
            },
          },
          text: {
            style: {
              fill: 'rgba(191, 198, 215, 1)',
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
            fill: 'rgba(191, 198, 215, 1)',
            stroke: null,
            lineWidth: 0,
          },
        },
        label: {
          align: 'rail',
          spacing: 12,
          formatter: null,
          style: {
            fill: 'rgba(191, 198, 215, 1)',
            fontSize: 12,
            lineHeight: 16,
            textBaseline: 'middle',
            fontFamily:
              '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
          },
        },
        handler: {
          size: 10,
          style: {
            fill: 'rgba(191, 198, 215, 1)',
            stroke: 'rgba(191, 198, 215, 1)',
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
        stroke: 'rgba(244, 246, 251, 1)',
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(48, 51, 64, 1)',
        lineWidth: 1,
        r: 4,
      },
      crosshairs: {
        line: {
          style: {
            stroke: 'rgba(244, 246, 251, 1)',
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
          transition:
            'left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s',
          backgroundColor: 'rgb(255, 255, 255)',
          opacity: 0.95,
          boxShadow: '0px 0px 10px #aeaeae',
          borderRadius: 2,
          color: 'rgba(48, 51, 64, 1)',
          fontSize: 14,
          fontFamily:
            '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
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
          stroke: '#D9D9D9',
          lineWidth: 1,
        },
        animate: true,
      },
      line: {
        style: {
          stroke: '#BFBFBF',
          lineDash: null,
          lineWidth: 1,
        },
        text: {
          position: 'start',
          autoRotate: true,
          style: {
            fill: '#595959',
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
          fill: '#595959',
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
            stroke: '#5B8FF9',
            lineWidth: 2,
          },
        },
        line: {
          style: {
            stroke: '#BFBFBF',
            lineWidth: 1,
          },
          length: 16,
        },
        text: {
          style: {
            textAlign: 'start',
            fill: '#595959',
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
            fill: '#595959',
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
          fill: 'rgba(19, 21, 28, 1)',
          opacity: 0.5,
        },
        foregroundStyle: {
          fill: 'rgba(19, 21, 28, 1)',
          opacity: 0.25,
        },
        handlerStyle: {
          width: 8,
          height: 24,
          fill: 'rgba(19, 21, 28, 1)',
          opacity: 1,
          stroke: 'rgba(80, 84, 107, 1)',
          lineWidth: 1,
          radius: 2,
          highLightFill: '#FFF',
        },
        textStyle: {
          fill: 'rgba(119, 123, 146, 1)',
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
          trackColor: 'rgba(19, 21, 28, 1)',
          thumbColor: 'rgba(80, 84, 107, 1)',
        },
      },
      hover: {
        style: {
          thumbColor: 'rgba(119, 123, 146, 1)',
        },
      },
    },
  },
  labels: {
    offset: 12,
    style: {
      fill: 'rgba(244, 246, 251, 1)',
      fontSize: 12,
      fontFamily:
        '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
      stroke: 'rgba(19, 21, 28, 1)',
      lineWidth: 0,
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
      fill: '#595959',
      fontSize: 12,
      fontFamily:
        '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
      stroke: '#FFFFFF',
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
    brandColor: 'rgba(51, 126, 255, 1)',
    paletteQualitative10: [
      'rgba(51, 126, 255, 1)',
      'rgba(241, 65, 65, 1)',
      'rgba(73, 171, 77, 1)',
      'rgba(255, 124, 10, 1)',
      'rgba(192, 90, 255, 1)',
      'rgba(162, 226, 255, 1)',
      'rgba(130, 253, 231, 1)',
      'rgba(255, 208, 41, 1)',
      'rgba(161, 165, 183, 1)',
      'rgba(255, 140, 188, 1)',
    ],
    paletteQualitative20: [
      '#5B8FF9',
      '#CDDDFD',
      '#5AD8A6',
      '#CDF3E4',
      '#5D7092',
      '#CED4DE',
      '#F6BD16',
      '#FCEBB9',
      '#6F5EF9',
      '#D3CEFD',
      '#6DC8EC',
      '#D3EEF9',
      '#945FB9',
      '#DECFEA',
      '#FF9845',
      '#FFE0C7',
      '#1E9493',
      '#BBDEDE',
      '#FF99C3',
      '#FFE0ED',
    ],
  },
};
