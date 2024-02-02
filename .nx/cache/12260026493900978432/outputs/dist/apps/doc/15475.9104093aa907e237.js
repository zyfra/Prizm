'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [15475],
  {
    15475: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport {\n  PRIZM_ICONS_SVG_SET,\n  prizmIconSvgDateTimeCalendarPlus,\n  PrizmIconSvgEnum,\n  prizmIconSvgProductionIndustrySnakeCup,\n  prizmIconSvgSettingsToolsBan,\n  PrizmIconsSvgRegistry,\n} from '@prizm-ui/icons';\n\n@Component({\n  selector: 'prizm-widget-with-templates-example',\n  templateUrl: './widget-with-templates-example.component.html',\n  styles: [\n    `\n      prizm-widget {\n        color: var(--prizm-v3-text-icon-secondary);\n        font-style: normal;\n        font-weight: 400;\n        font-size: 14px;\n      }\n    `,\n  ],\n})\nexport class PrizmWidgetWithTemplatesExampleComponent {\n  readonly PrizmIconSvgEnum = PrizmIconSvgEnum;\n  constructor(private readonly iconRegistry: PrizmIconsSvgRegistry) {\n    /** \u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u0438\u043a\u043e\u043d\u043a\u0443 */\n    this.iconRegistry.registerIcons([\n      prizmIconSvgSettingsToolsBan,\n      prizmIconSvgProductionIndustrySnakeCup,\n      prizmIconSvgDateTimeCalendarPlus,\n    ]);\n\n    /** \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u0435\u0442\u0430 \u043d\u0430\u0448\u0438\u0445 \u0438\u043a\u043e\u043d\u043e\u043a\n     * \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 PRIZM_ICONS_SVG_SET\n     * */\n    // this.iconRegistry.registerIcons([\n    //   ...PRIZM_ICONS_SVG_SET\n    // ]);\n  }\n}\n";
    },
  },
]);
