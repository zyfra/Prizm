"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[56264],{56264:e=>{e.exports="import { Component } from '@angular/core';\nimport { PrizmChartsPieItem, PrizmChartsPieOptions } from '@prizm-ui/charts';\nimport { PrizmThemeService } from '@prizm-ui/theme';\n\n@Component({\n  selector: 'prizm-charts-pie-example',\n  templateUrl: './prizm-charts-pie-example.component.html',\n  styles: [\n    `\n      .block {\n        width: 100%;\n        height: 300px;\n      }\n    `,\n  ],\n})\nexport class PrizmChartsPieExampleComponent {\n  data: PrizmChartsPieItem[] = [\n    { type: '\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043e\u0434\u0438\u043d', value: 27 },\n    { type: '\u0432\u0442\u043e\u0440\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f', value: 25 },\n    { type: '\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0442\u0440\u0438', value: 18 },\n    { type: '\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f', value: 15 },\n    { type: '\u043f\u044f\u0442\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f', value: 10 },\n    { type: '\u0434\u0440\u0443\u0433\u043e\u0435', value: 5 },\n  ];\n  colorField = 'type';\n  angleField = 'value';\n  interactions: PrizmChartsPieOptions['interactions'] = [{ type: 'element-active' }];\n  label: PrizmChartsPieOptions['label'] = {\n    type: 'inner',\n    offset: '-30%',\n    content: ({ percent }): any => `${(percent * 100).toFixed(0)}%`,\n    style: {\n      fontSize: 14,\n      textAlign: 'center',\n    },\n  };\n\n  options: Partial<PrizmChartsPieOptions> = {\n    appendPadding: 10,\n    radius: 0.9,\n  };\n\n  constructor(public readonly prizmTheme: PrizmThemeService) {}\n}\n"}}]);