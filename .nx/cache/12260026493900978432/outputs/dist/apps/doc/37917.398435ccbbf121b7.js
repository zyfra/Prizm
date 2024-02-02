'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [37917],
  {
    37917: (Q, n, e) => {
      e.r(n), e.d(n, { ThemeGuideModule: () => H });
      var l = e(96814),
        E = e(75187),
        u = e(65879),
        d = e(63796),
        D = e(75987),
        a = e(70169),
        c = e(73864),
        p = e(70342),
        s = e(8221),
        v = e(95333),
        B = e(34271),
        C = e(22531),
        A = e(33593),
        F = e(75539),
        Z = e(42749),
        g = e(9537),
        h = e(9715),
        z = e(37408),
        b = e(28279);
      function T(i, o) {
        if (
          (1 & i &&
            (u.ynx(0),
            u.TgZ(1, 'tr', 10)(2, 'td', 11),
            u._uU(3),
            u.qZA(),
            u.TgZ(4, 'td', 11),
            u._uU(5),
            u.qZA()(),
            u.BQk()),
          2 & i)
        ) {
          const t = o.$implicit;
          u.xp6(3), u.hij(' ', t.name, ' '), u.xp6(2), u.hij(' ', t.description, ' ');
        }
      }
      function U(i, o) {
        if (1 & i) {
          const t = u.EpF();
          u.ynx(0),
            u.TgZ(1, 'tr', 10)(2, 'td', 11)(3, 'strong'),
            u._uU(4),
            u.qZA()(),
            u.TgZ(5, 'td', 11),
            u._uU(6),
            u.qZA(),
            u.TgZ(7, 'td', 11),
            u._uU(8),
            u.qZA(),
            u.TgZ(9, 'td', 12),
            u.NdJ('click', function () {
              const q = u.CHM(t).$implicit,
                M = u.oxw();
              return u.KtG(M.copy(q.variable));
            }),
            u._uU(10),
            u.qZA()(),
            u.BQk();
        }
        if (2 & i) {
          const t = o.$implicit;
          u.xp6(4),
            u.Oqu(t.groupName),
            u.xp6(2),
            u.hij(' ', t.name, ' '),
            u.xp6(2),
            u.hij(' ', t.description, ' '),
            u.xp6(2),
            u.hij(' ', t.variable, ' ');
        }
      }
      let f = (() => {
          class i {
            constructor(t, r) {
              (this.clipboard = t),
                (this.toastService = r),
                (this.hex = e.e(9803).then(e.t.bind(e, 9803, 17))),
                (this.style = e.e(69492).then(e.t.bind(e, 69492, 17))),
                (this.token = e.e(96288).then(e.t.bind(e, 96288, 17))),
                (this.libs = [
                  {
                    name: '\u{1f3a8} Prizm. Variable Palette',
                    description:
                      '\u041f\u0430\u043b\u0438\u0442\u0440\u0430 \u0434\u043b\u044f \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043a \u0442\u043e\u043a\u0435\u043d\u0430\u043c',
                  },
                  {
                    name: '\u{1f3a8} Prizm. Variable Colors',
                    description: '\u0422\u043e\u043a\u0435\u043d\u044b',
                  },
                ]),
                (this.tokens = [
                  {
                    groupName: 'Text-Icon',
                    name: 'Primary',
                    description: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                    variable: '--prizm-v3-text-icon-primary',
                  },
                  {
                    name: 'Secondary',
                    description:
                      '\u041f\u0430\u0440\u0430\u0433\u0440\u0430\u0444 \u0442\u0435\u043a\u0441\u0442\u0430',
                    variable: '--prizm-v3-text-icon-secondary',
                  },
                  {
                    name: 'Tertiary',
                    description: '\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435',
                    variable: '--prizm-v3-text-icon-tertiary',
                  },
                  {
                    name: 'Disable',
                    description:
                      '\u0426\u0432\u0435\u0442 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u0431\u043b\u043e\u043a\u043e\u0432',
                    variable: '--prizm-v3-text-icon-disable',
                  },
                  {
                    name: 'Revers',
                    description:
                      '\u0414\u043b\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0432 \u0445\u0438\u043d\u0442\u0430\u0445 \u0438 \u0442\u0443\u0442\u0438\u043f\u0430\u0445',
                    variable: '--prizm-v3-text-icon-reverse',
                  },
                  {
                    name: 'Link',
                    description: '\u0421\u0441\u044b\u043b\u043a\u0430',
                    variable: '--prizm-v3-text-icon-link',
                  },
                  {
                    name: 'Link-Hover',
                    description:
                      '\u0426\u0432\u0435\u0442 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0441\u044b\u043b\u043a\u0443',
                    variable: '--prizm-v3-text-icon-link-hover',
                  },
                  {
                    name: 'Link-Visited',
                    description:
                      '\u0426\u0432\u0435\u0442 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0438',
                    variable: '--prizm-v3-text-icon-link-visited',
                  },
                  {
                    groupName: 'Background',
                    name: 'Fill-Primary',
                    description: '\u0422\u0435\u043b\u043e \u0432\u0438\u0434\u0436\u0435\u0442\u0430',
                    variable: '--prizm-v3-background-fill-primary',
                  },
                  {
                    name: 'Fill-Secondary',
                    description:
                      '\u041f\u043e\u0434\u043b\u043e\u0436\u043a\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0430',
                    variable: '--prizm-v3-background-fill-secondary',
                  },
                  {
                    name: 'Fill-Revers',
                    description:
                      '\u0422\u0435\u043b\u043e \u0445\u0438\u043d\u0442\u0430 \u0438 \u0442\u0443\u043b\u0442\u0438\u043f\u0430',
                    variable: '--prizm-v3-background-fill-reverse',
                  },
                  {
                    name: 'Stroke',
                    description:
                      '\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u0432\u0438\u0434\u0436\u0435\u0442\u0430',
                    variable: '--prizm-v3-background-stroke',
                  },
                  {
                    name: 'Overlay',
                    description:
                      '\u0417\u0430\u043b\u0438\u0432\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u044f\u0432\u043b\u0435\u043d\u0438\u0438 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430',
                    variable: '--prizm-v3-background-fill-overlay',
                  },
                  {
                    name: 'Focus',
                    description:
                      '\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u0444\u043e\u043a\u0443\u0441\u0430 \u0434\u043b\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0441 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b',
                    variable: '--prizm-v3-background-stroke-focus',
                  },
                  {
                    name: 'Fill-Overlay',
                    description:
                      '\u0426\u0432\u0435\u0442 \u0432\u0441\u0435\u0445 \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0438\u0445 \u043e\u043a\u043e\u043d',
                    variable: '--prizm-v3-background-fill-overlay',
                  },
                  {
                    name: 'Fill-Blanket',
                    description:
                      '\u041f\u043e\u0434\u043b\u043e\u0436\u043a\u0430 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u043a\u043e\u043d',
                    variable: '--prizm-v3-background-fill-blanket',
                  },
                  {
                    name: 'Fill-Panel',
                    description:
                      '\u0417\u0430\u043b\u0438\u0432\u043a\u0430 \u043f\u0430\u043d\u0435\u043b\u0438 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u043a\u0440\u0430\u0441\u043a\u0438 \u0432 \u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0435\u043c\u0435',
                    variable: '--prizm-v3-background-fill-panel',
                  },
                  {
                    groupName: 'Status',
                    name: 'Info-Primary-Default',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-info-primary-default',
                  },
                  {
                    name: 'Info-Secondary-Default',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-info-secondary-defaul',
                  },
                  {
                    name: 'None-Primary-Default',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-none-primary-default',
                  },
                  {
                    name: 'None-Secondary-Default',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-none-secondary-default',
                  },
                  {
                    name: 'Success-Primary-Default',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-success-primary-default',
                  },
                  {
                    name: 'Success-Secondary-Default',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-success-secondary-default',
                  },
                  {
                    name: 'Attention-Primary-Default',
                    description:
                      '\u26a0\ufe0f \u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f ??? \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-attention-primary-default',
                  },
                  {
                    name: 'Attention-Secondary-Default',
                    description:
                      '\u26a0\ufe0f \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f ??? \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-attention-secondary-default',
                  },
                  {
                    name: 'Warning-Primary-Default',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-warning-primary-default',
                  },
                  {
                    name: 'Warning-Secondary-Default',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-warning-secondary-default',
                  },
                  {
                    name: 'Alarm-Primary-Default',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0442\u0440\u0435\u0432\u043e\u0436\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '-prizm-v3-status-alarm-primary-default',
                  },
                  {
                    name: 'Alarm-Secondary-Default',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0442\u0440\u0435\u0432\u043e\u0436\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430',
                    variable: '--prizm-v3-status-alarm-secondary-default',
                  },
                  {
                    groupName: 'Index',
                    name: 'Plan',
                    description:
                      '\u041f\u043b\u0430\u043d\u043e\u0432\u044b\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438',
                    variable: '--prizm-v3-index-plan',
                  },
                  {
                    name: 'Fact',
                    description:
                      '\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438',
                    variable: '--prizm-v3-index-fact',
                  },
                  {
                    name: 'Success',
                    description:
                      '\u26a0\ufe0f \u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438',
                    variable: '',
                  },
                  {
                    name: 'Danger',
                    description:
                      '\u26a0\ufe0f ??? \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438',
                    variable: '',
                  },
                  {
                    name: 'Warning',
                    description:
                      '\u26a0\ufe0f \u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438',
                    variable: '',
                  },
                  {
                    name: 'Alarm',
                    description:
                      '\u26a0\ufe0f \u0422\u0440\u0435\u0432\u043e\u0436\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u044b',
                    variable: '',
                  },
                  {
                    groupName: 'Table',
                    name: 'Fill-Row-Zebra_Default',
                    description:
                      '\u0417\u0435\u0431\u0440\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435',
                    variable: '--prizm-v3-table-fill-row-zebra_default',
                  },
                  {
                    name: 'Fill-Header-Default',
                    description:
                      '\u0428\u0430\u043f\u043a\u0430 \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b',
                    variable: '--prizm-v3-table-fill-header-default',
                  },
                  {
                    name: 'Stroke-Cell-Default',
                    description:
                      '\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u044f\u0447\u0435\u0435\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b',
                    variable: '--prizm-v3-table-stroke-cell-default',
                  },
                  {
                    name: 'Fill-Header-Hover',
                    description:
                      '\u0428\u0430\u043f\u043a\u0430 \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '-prizm-v3-table-fill-header-hover',
                  },
                  {
                    name: 'Fill-Row-Hover',
                    description:
                      '\u0421\u0442\u0440\u043e\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-table-fill-row-hover',
                  },
                  {
                    name: 'Fill-Row-Active',
                    description:
                      '\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b',
                    variable: '--prizm-v3-table-fill-row-active',
                  },
                  {
                    name: 'Fill-Cell-Disable',
                    description:
                      '\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b',
                    variable: '--prizm-v3-table-fill-cell-disable',
                  },
                  {
                    name: 'Stroke-Cell-Hover',
                    description:
                      '\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u044f\u0447\u0435\u0439\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-table-stroke-cell-hover',
                  },
                  {
                    name: 'Stroke-Cell-Active',
                    description:
                      '\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b',
                    variable: '--prizm-v3-table-stroke-cell-active',
                  },
                  {
                    groupName: 'Status',
                    name: 'Info-Primary-Hover',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-info-primary-hover',
                  },
                  {
                    name: 'Info-Secondary-Hover',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-info-secondary-hover',
                  },
                  {
                    name: 'None-Primary-Hover',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-none-primary-hover:',
                  },
                  {
                    name: 'None-Secondary-Hover',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044f \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-none-secondary-hover:',
                  },
                  {
                    name: 'Success-Primary-Hover',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-success-primary-hover',
                  },
                  {
                    name: 'Success-Secondary-Hover',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-success-secondary-hover',
                  },
                  {
                    name: 'Attention-Primary-Hover',
                    description:
                      '\u26a0\ufe0f \u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f ??? \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-attention-primary-hover',
                  },
                  {
                    name: 'Attention-Secondary-Hover',
                    description:
                      '\u26a0\ufe0f \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f ??? \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-attention-secondary-hover',
                  },
                  {
                    name: 'Warning-Primary-Hover',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-warning-primary-hover',
                  },
                  {
                    name: 'Warning-Secondary-Hover',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-warning-secondary-hover',
                  },
                  {
                    name: 'Alarm-Primary-Hover',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0442\u0440\u0435\u0432\u043e\u0436\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-alarm-primary-hover',
                  },
                  {
                    name: 'Alarm-Secondary-Hover',
                    description:
                      '\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0442\u0440\u0435\u0432\u043e\u0436\u043d\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-status-alarm-secondary-hover',
                  },
                  {
                    groupName: 'Form',
                    name: 'Fill-Default',
                    description:
                      '\u0417\u0430\u043b\u0438\u0432\u043a\u0430 \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u043e\u0440\u043c',
                    variable: '--prizm-v3-form-fill-default',
                  },
                  {
                    name: 'Fill-Disable',
                    description:
                      '\u0417\u0430\u043b\u0438\u0432\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u043e\u0440\u043c',
                    variable: '--prizm-v3-form-fill-disable',
                  },
                  {
                    name: 'Stroke-Default',
                    description:
                      '\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u043e\u0440\u043c',
                    variable: '--prizm-v3-form-stroke-default',
                  },
                  {
                    name: 'Stroke-Hover',
                    description:
                      '\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u0434\u043b\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u043e\u0440\u043c \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-form-stroke-hover',
                  },
                  {
                    name: 'Stroke-Disable',
                    description:
                      '\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u043e\u0440\u043c',
                    variable: '--prizm-v3-form-stroke-disable',
                  },
                  {
                    name: 'Active',
                    description:
                      '\u0417\u0430\u043b\u0438\u0432\u043a\u0430/\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u043e\u0440\u043c',
                    variable: '--prizm-v3-form-active',
                  },
                  {
                    name: 'Active-Hover',
                    description:
                      '\u0417\u0430\u043b\u0438\u0432\u043a\u0430/\u041e\u0431\u0432\u043e\u0434\u043a\u0430 \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u043e\u0440\u043c \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-form-active-hover',
                  },
                  {
                    name: 'Active-Disable',
                    description:
                      '\u2753\u0417\u0430\u043b\u0438\u0432\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u043e\u0440\u043c',
                    variable: '--prizm-v3-form-active-disable',
                  },
                  {
                    groupName: 'Button',
                    name: 'Primary-Solid-Default',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430',
                    variable: '--prizm-v3-button-primary-solid-default',
                  },
                  {
                    name: 'Primary-Solid-Hover',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '-prizm-v3-button-primary-solid-hover',
                  },
                  {
                    name: 'Primary-Solid-Active',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-primary-solid-active',
                  },
                  {
                    name: 'Primary-Ghost-Active',
                    description:
                      '\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-primary-ghost-active',
                  },
                  {
                    name: 'Secondary-Solid-Hover',
                    description:
                      '\u0412\u0442\u043e\u0440\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-button-secondary-solid-hover',
                  },
                  {
                    name: 'Secondary-Solid-Active',
                    description:
                      '\u0412\u0442\u043e\u0440\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-secondary-solid-active',
                  },
                  {
                    name: 'Secondary-Ghost-Active',
                    description:
                      '\u0412\u0442\u043e\u0440\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u0430\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-secondary-ghost-active',
                  },
                  {
                    name: 'Success-Solid-Default',
                    description:
                      '\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430',
                    variable: '--prizm-v3-button-success-solid-default',
                  },
                  {
                    name: 'Success-Solid-Hover',
                    description:
                      '\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-button-success-solid-hover',
                  },
                  {
                    name: 'Success-Solid-Active',
                    description:
                      '\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-success-solid-active',
                  },
                  {
                    name: 'Success-Ghost-Active',
                    description:
                      '\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-success-ghost-active',
                  },
                  {
                    name: 'Warning-Solid-Default',
                    description:
                      '\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430',
                    variable: '--prizm-v3-button-warning-solid-default',
                  },
                  {
                    name: 'Warning-Solid-Hover',
                    description:
                      '\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '-prizm-v3-button-warning-solid-hover',
                  },
                  {
                    name: 'Warning-Solid-Active',
                    description:
                      '\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-warning-solid-active',
                  },
                  {
                    name: 'Warning-Ghost-Active',
                    description:
                      '\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-warning-ghost-active',
                  },
                  {
                    name: 'Alarm-Solid-Default',
                    description:
                      '\u0422\u0440\u0435\u0432\u043e\u0436\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430',
                    variable: '--prizm-v3-button-alarm-solid-default',
                  },
                  {
                    name: 'Alarm-Solid-Hover',
                    description:
                      '\u0422\u0440\u0435\u0432\u043e\u0436\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-button-alarm-solid-hover',
                  },
                  {
                    name: 'Alarm-Solid-Active',
                    description:
                      '\u0422\u0440\u0435\u0432\u043e\u0436\u043d\u0430\u044f \u0437\u0430\u043b\u0438\u0442\u0430\u044f/\u043a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-alarm-solid-active',
                  },
                  {
                    name: 'Alarm-Ghost-Active',
                    description:
                      '\u0422\u0440\u0435\u0432\u043e\u0436\u043d\u0430\u044f \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438/\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438',
                    variable: '--prizm-v3-button-alarm-ghost-active',
                  },
                  {
                    name: 'Ghost-Hover',
                    description:
                      '\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438',
                    variable: '--prizm-v3-button-ghost-hover',
                  },
                  {
                    name: '\tDisable\u2753',
                    description:
                      '\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430',
                    variable: '--prizm-v3-button-disable',
                  },
                ]);
            }
            copy(t) {
              (0, c.v)(t, this.clipboard, this.toastService);
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(u.Y36(p.TU), u.Y36(a.hGm));
            }),
            (i.ɵcmp = u.Xpm({
              type: i,
              selectors: [['prizm-theme-for-designers']],
              decls: 116,
              vars: 7,
              consts: [
                [1, 'prizm-space_top-0'],
                ['type', 'icon', 'status', 'warning'],
                [3, 'code'],
                ['prizmTable', '', 'size', 'l', 1, 'table'],
                ['prizmThGroup', ''],
                ['prizmTh', ''],
                ['prizmTbody', '', 3, 'data'],
                [4, 'prizmRow', 'prizmRowOf'],
                [1, 'prizm-space_top-0', 'note'],
                [1, 'disc'],
                ['prizmTr', ''],
                ['prizmTd', ''],
                ['prizmTd', '', 1, 'clickable', 3, 'click'],
              ],
              template: function (t, r) {
                1 & t &&
                  (u.TgZ(0, 'div')(1, 'h2', 0),
                  u._uU(2, '\u0422\u043e\u043a\u0435\u043d\u044b \u0441\u0442\u0438\u043b\u0435\u0439'),
                  u.qZA()(),
                  u.TgZ(3, 'div')(4, 'h4'),
                  u._uU(
                    5,
                    '\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0442\u043e\u043a\u0435\u043d\u044b'
                  ),
                  u.qZA(),
                  u.TgZ(6, 'p', 0),
                  u._uU(
                    7,
                    ' \u0414\u0438\u0437\u0430\u0439\u043d-\u0442\u043e\u043a\u0435\u043d\u044b \u2014 \u044d\u0442\u043e \u043d\u0430\u0431\u043e\u0440 \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430 \u2014 \u043e\u0442\u0441\u0442\u0443\u043f\u044b, \u0446\u0432\u0435\u0442\u0430, \u0442\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0438\u043a\u0430, \u0441\u0442\u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u2014 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432 \u0432\u0438\u0434\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412 \u043d\u0438\u0445 \u0446\u0432\u0435\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 RGB, \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u043a\u0430\u043a \u0447\u0438\u0441\u043b\u043e, \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f \u043a\u0430\u043a \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0411\u0435\u0437\u044c\u0435. \u0422\u043e\u043a\u0435\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u0436\u0435\u0441\u0442\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u043b\u043e \u043b\u0435\u0433\u043a\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0442\u0438\u043b\u0435\u043c \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0442\u044c \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u043e \u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u0445. '
                  ),
                  u.qZA(),
                  u.TgZ(8, 'prizm-card')(9, 'div'),
                  u._UZ(10, 'prizm-indicator', 1),
                  u.TgZ(11, 'strong'),
                  u._uU(12, '\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!'),
                  u.qZA(),
                  u._uU(
                    13,
                    ' \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f! '
                  ),
                  u.qZA()()(),
                  u.TgZ(14, 'div')(15, 'h4'),
                  u._uU(16, '\u041f\u0440\u0438\u043c\u0435\u0440'),
                  u.qZA(),
                  u.TgZ(17, 'p', 0),
                  u._uU(
                    18,
                    '\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 Button.'
                  ),
                  u.qZA(),
                  u.TgZ(19, 'div'),
                  u._UZ(20, 'prizm-doc-code', 2),
                  u.TgZ(21, 'p', 0),
                  u._uU(
                    22,
                    ' \u0426\u0432\u0435\u0442 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d \u0432 \u043a\u043e\u0434 \u0447\u0435\u0440\u0435\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435 HEX. \u041d\u0435\u0442 \u0433\u0438\u0431\u043a\u043e\u0439 \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f. '
                  ),
                  u.qZA()(),
                  u._UZ(23, 'br'),
                  u.TgZ(24, 'div'),
                  u._UZ(25, 'prizm-doc-code', 2),
                  u.TgZ(26, 'p', 0),
                  u._uU(
                    27,
                    ' HEX \u0432\u044b\u043d\u0435\u0441\u0435\u043d \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u0433\u0434\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a \u0441\u0442\u0438\u043b\u044e. \u0421\u0442\u0438\u043b\u044c \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043a\u043e\u0434\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430. '
                  ),
                  u._UZ(28, 'br'),
                  u._uU(
                    29,
                    ' \u0414\u043b\u044f \u0437\u0430\u043c\u0435\u043d\u044b \u0441\u0442\u0438\u043b\u044f \u043d\u0443\u0436\u043d\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043a\u043e\u0434. \u041d\u0435\u043b\u044c\u0437\u044f \u0438\u043c\u0435\u0442\u044c \u043d\u0430\u0431\u043e\u0440\u044b \u0446\u0432\u0435\u0442\u043e\u0432\u044b\u0445 \u0442\u0435\u043c. '
                  ),
                  u.qZA()(),
                  u._UZ(30, 'br'),
                  u.TgZ(31, 'div'),
                  u._UZ(32, 'prizm-doc-code', 2),
                  u.TgZ(33, 'p', 0),
                  u._uU(
                    34,
                    ' HEX \u0432\u044b\u043d\u0435\u0441\u0435\u043d \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u0433\u0434\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a \u0441\u0442\u0438\u043b\u044e. \u0421\u0442\u0438\u043b\u044c \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0442\u043e\u043a\u0435\u043d\u0430. \u0422\u043e\u043a\u0435\u043d \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043a\u043e\u0434\u0435. '
                  ),
                  u._UZ(35, 'br'),
                  u._uU(
                    36,
                    ' \u041c\u043e\u0436\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u043d\u0430\u0431\u043e\u0440\u044b \u0446\u0432\u0435\u0442\u043e\u0432\u044b\u0445 \u0442\u0435\u043c \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u0431\u0435\u0441\u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0442\u0438\u043b\u0438 \u0438 HEX \u0431\u0435\u0437 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043a\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430. '
                  ),
                  u._UZ(37, 'br'),
                  u._uU(
                    38,
                    ' \u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u043d\u0438\u0439. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0447\u0435\u0442\u043a\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0441\u0432\u044f\u0437\u0435\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0442\u0438\u043b\u0435\u043c. HEX \u0432\u044b\u043d\u0435\u0441\u0435\u043d \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u0433\u0434\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043a \u0441\u0442\u0438\u043b\u044e. \u0421\u0442\u0438\u043b\u044c \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043a\u043e\u0434\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430. \u0445 \u0442\u0435\u043c. '
                  ),
                  u.qZA()(),
                  u._UZ(39, 'br'),
                  u.qZA(),
                  u.TgZ(40, 'div')(41, 'h4'),
                  u._uU(
                    42,
                    '\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443'
                  ),
                  u.qZA(),
                  u.TgZ(43, 'p', 0),
                  u._uU(
                    44,
                    ' \u0414\u0438\u0437\u0430\u0439\u043d-\u0442\u043e\u043a\u0435\u043d\u044b \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432 \u043d\u0430\u0448\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432. \u041e\u043d\u0438 \u043e\u0445\u0432\u0430\u0442\u044b\u0432\u0430\u044e\u0442 \u0440\u0430\u0437\u043d\u044b\u0435 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b, \u0446\u0432\u0435\u0442\u043e\u0432\u044b\u0435 \u0442\u0435\u043c\u044b, \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435. \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u043e\u0432 \u0438 \u0442\u0438\u043f\u043e\u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0432 \u043d\u0430\u0448\u0438\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u0445 \u0432 Figma \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u0442\u043e\u043a\u0435\u043d\u0430 \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438. \u042d\u0442\u043e \u0443\u043f\u0440\u043e\u0449\u0430\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443: \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0446\u0432\u0435\u0442 \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438, \u043e\u043d \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u0445. '
                  ),
                  u.qZA()(),
                  u.TgZ(45, 'div')(46, 'h4'),
                  u._uU(
                    47,
                    '\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f'
                  ),
                  u.qZA(),
                  u.TgZ(48, 'p', 0),
                  u._uU(
                    49,
                    '\u0426\u0432\u0435\u0442\u043e\u0432\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u044b \u043d\u0430 2 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439.'
                  ),
                  u.qZA(),
                  u.TgZ(50, 'table', 3)(51, 'thead')(52, 'tr', 4)(53, 'th', 5),
                  u._uU(
                    54,
                    '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438'
                  ),
                  u.qZA(),
                  u.TgZ(55, 'th', 5),
                  u._uU(56, '\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435'),
                  u.qZA()()(),
                  u.TgZ(57, 'tbody', 6),
                  u.YNc(58, T, 6, 2, 'ng-container', 7),
                  u.qZA()()(),
                  u.TgZ(59, 'div')(60, 'h4'),
                  u._uU(61, '\u0421\u043e\u0441\u0442\u0430\u0432'),
                  u.qZA(),
                  u.TgZ(62, 'table', 3)(63, 'thead')(64, 'tr', 4),
                  u._UZ(65, 'th', 5),
                  u.TgZ(66, 'th', 5),
                  u._uU(67, '\u0422\u043e\u043a\u0435\u043d'),
                  u.qZA(),
                  u.TgZ(68, 'th', 5),
                  u._uU(69, '\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435'),
                  u.qZA(),
                  u.TgZ(70, 'th', 5),
                  u._uU(71, '\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f*'),
                  u.qZA()()(),
                  u.TgZ(72, 'tbody', 6),
                  u.YNc(73, U, 11, 4, 'ng-container', 7),
                  u.qZA()(),
                  u._UZ(74, 'br'),
                  u.TgZ(75, 'p', 8),
                  u._uU(76, ' * \u041f\u0440\u0435\u0444\u0438\u043a\u0441 '),
                  u.TgZ(77, 'code'),
                  u._uU(78, 'v3-'),
                  u.qZA(),
                  u._uU(
                    79,
                    ' \u0432 \u0438\u043c\u0435\u043d\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d \u043f\u0440\u0438 \u043e\u043a\u043d\u043e\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435 \u043d\u0430 \u043d\u043e\u0432\u0443\u044e \u0446\u0432\u0435\u0442\u043e\u0432\u0443\u044e \u0441\u0445\u0435\u043c\u0443. '
                  ),
                  u.qZA(),
                  u._UZ(80, 'br')(81, 'br')(82, 'br'),
                  u.qZA(),
                  u.TgZ(83, 'div')(84, 'h4'),
                  u._uU(
                    85,
                    '\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445 (\u0412 \u0440\u0430\u0431\u043e\u0442\u0435)'
                  ),
                  u.qZA(),
                  u.TgZ(86, 'prizm-card')(87, 'div'),
                  u._uU(
                    88,
                    '\u0426\u0432\u0435\u0442 \u043e\u0431\u0432\u043e\u0434\u043a\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u043d\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0433\u0440\u0443\u043f\u043f\u0435 Status.'
                  ),
                  u.qZA()()(),
                  u.TgZ(89, 'div')(90, 'h4'),
                  u._uU(
                    91,
                    'FAQ. \u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0442\u0432\u0435\u0442\u044b'
                  ),
                  u.qZA(),
                  u.TgZ(92, 'h5'),
                  u._uU(
                    93,
                    '\u041c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u043e\u0432?'
                  ),
                  u.qZA(),
                  u.TgZ(94, 'p', 0),
                  u._uU(
                    95,
                    ' \u041d\u0435\u0442. \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u044b. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0438\u0445 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0442\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u041a\u0411. \u0421\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f '
                  ),
                  u.qZA(),
                  u._UZ(96, 'br'),
                  u.TgZ(97, 'h5'),
                  u._uU(
                    98,
                    '\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u044e \u0446\u0432\u0435\u0442\u043e\u0432\u0443\u044e \u0442\u0435\u043c\u0443?'
                  ),
                  u.qZA(),
                  u.TgZ(99, 'p', 0),
                  u._uU(
                    100,
                    '\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0434\u0432\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430:'
                  ),
                  u.qZA(),
                  u.TgZ(101, 'ol', 9)(102, 'li'),
                  u._uU(
                    103,
                    '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439 \u0441 \u043d\u043e\u0432\u044b\u043c\u0438 HEX'
                  ),
                  u.qZA(),
                  u.TgZ(104, 'li'),
                  u._uU(
                    105,
                    '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0430\u0439\u043b \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0441 \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u043e\u0439 \u043a \u0441\u0442\u0438\u043b\u044f\u043c'
                  ),
                  u.qZA()(),
                  u._UZ(106, 'br'),
                  u.TgZ(107, 'h5'),
                  u._uU(
                    108,
                    '\u041a\u0430\u043a \u043f\u0435\u0440\u0435\u043a\u0440\u0430\u0441\u0438\u0442\u044c \u043c\u0430\u043a\u0435\u0442 \u0432 \u0434\u0440\u0443\u0433\u0443\u044e \u0442\u0435\u043c\u0443? (\u0412 \u0440\u0430\u0431\u043e\u0442\u0435)'
                  ),
                  u.qZA(),
                  u.TgZ(109, 'p', 0),
                  u._uU(
                    110,
                    '\u0415\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432:'
                  ),
                  u.qZA(),
                  u.TgZ(111, 'ol', 9)(112, 'li'),
                  u._uU(
                    113,
                    '\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u043c\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 Figma (\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435/variables)'
                  ),
                  u.qZA(),
                  u.TgZ(114, 'li'),
                  u._uU(115, '\u041f\u043b\u0430\u0433\u0438\u043d\u044b'),
                  u.qZA()()()),
                  2 & t &&
                    (u.xp6(20),
                    u.Q6J('code', r.hex),
                    u.xp6(5),
                    u.Q6J('code', r.style),
                    u.xp6(7),
                    u.Q6J('code', r.token),
                    u.xp6(25),
                    u.Q6J('data', r.libs),
                    u.xp6(1),
                    u.Q6J('prizmRowOf', r.libs),
                    u.xp6(14),
                    u.Q6J('data', r.tokens),
                    u.xp6(1),
                    u.Q6J('prizmRowOf', r.tokens));
              },
              dependencies: [s.c, v.Y, B.o, C.N, A.z, F.B, Z.e, g.e, h.F, z.s, b.K],
              styles: [
                '[_nghost-%COMP%]   prizm-card[_ngcontent-%COMP%]{padding:16px;font-style:normal;font-weight:400;font-size:16px}[_nghost-%COMP%]   prizm-card[_ngcontent-%COMP%]   prizm-indicator[_ngcontent-%COMP%]{margin-right:16px}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]{font-size:12px;color:var(--prizm-v3-text-icon-tertiary)}[_nghost-%COMP%]   .clickable[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .clickable[_ngcontent-%COMP%]:hover{color:var(--prizm-v3-text-icon-link-hover)}',
              ],
              changeDetection: 0,
            })),
            i
          );
        })(),
        y = (() => {
          class i {
            constructor() {
              (this.setup = e.e(72320).then(e.t.bind(e, 72320, 17))),
                (this.setupModule = e.e(41626).then(e.t.bind(e, 41626, 17))),
                (this.setupStyles = e.e(46018).then(e.t.bind(e, 46018, 17))),
                (this.themeSwitcher = e.e(56643).then(e.t.bind(e, 56643, 17))),
                (this.themeReverse = e.e(87576).then(e.t.bind(e, 87576, 17))),
                (this.styleVariables = e.e(17598).then(e.t.bind(e, 17598, 17))),
                (this.customTheme = e.e(34538).then(e.t.bind(e, 34538, 17))),
                (this.customThemePalette = e.e(71582).then(e.t.bind(e, 71582, 17))),
                (this.customThemeCss = e.e(79652).then(e.t.bind(e, 79652, 17))),
                (this.customThemeInverted = e.e(95432).then(e.t.bind(e, 95432, 17))),
                (this.customThemeSetup = e.e(14455).then(e.t.bind(e, 14455, 17))),
                (this.updatedPalette = e.e(32191).then(e.t.bind(e, 32191, 17)));
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵcmp = u.Xpm({
              type: i,
              selectors: [['prizm-theme-for-developers']],
              decls: 132,
              vars: 12,
              consts: [
                [1, 'prizm-space_top-0'],
                [3, 'code'],
                ['href', '/tools/theme'],
                ['href', '/tools/theme-service'],
                [1, 'prizm-space_top-0', 'note'],
                [1, 'disc'],
                ['href', '/guidelines/theme/For_Designers'],
              ],
              template: function (t, r) {
                1 & t &&
                  (u.TgZ(0, 'div')(1, 'h2', 0),
                  u._uU(2, '\u0422\u0435\u043c\u044b \u0432 Prizm'),
                  u.qZA()(),
                  u.TgZ(3, 'div')(4, 'h4'),
                  u._uU(
                    5,
                    '\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0442\u0435\u043c\u044b \u0438 \u043a\u0430\u043a \u043e\u043d\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442'
                  ),
                  u.qZA(),
                  u.TgZ(6, 'p'),
                  u._uU(
                    7,
                    ' \u0422\u0435\u043c\u0430 \u2014 \u044d\u0442\u043e \u043e\u0441\u043d\u043e\u0432\u0430, \u043d\u0430\u0431\u043e\u0440 \u043f\u0440\u0430\u0432\u0438\u043b \u0432 CSS, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u043a\u0430\u043a \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043f\u0440\u043e\u0435\u043a\u0442, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0438\u0437\u0430\u0439\u043d-\u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u041e\u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0432\u0435\u0442\u0430, \u043d\u043e \u0435\u0449\u0451 \u0448\u0440\u0438\u0444\u0442\u044b, \u0440\u0430\u0437\u043c\u0435\u0440 \u0442\u0435\u043a\u0441\u0442\u0430, \u043e\u0442\u0441\u0442\u0443\u043f\u044b, \u0441\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0438 \u0442\u0435\u043d\u0438. \u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u043c \u0432 \u043e\u0434\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435: \xab\u0434\u043d\u0435\u0432\u043d\u0443\u044e\xbb \u0438 \xab\u043d\u043e\u0447\u043d\u0443\u044e\xbb \u0434\u043b\u044f \u0432\u0441\u0435\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0438\u043b\u0438 \u0440\u0430\u0437\u043d\u044b\u0435 \u0442\u0435\u043c\u044b \u0434\u043b\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0431\u043b\u043e\u043a\u043e\u0432. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0432 \u044d\u0442\u043e\u043c \u0433\u0430\u0439\u0434\u0435. '
                  ),
                  u.qZA(),
                  u.TgZ(8, 'p', 0),
                  u._uU(
                    9,
                    ' \u0412 Prizm \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u0432\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0442\u0435\u043c\u044b: '
                  ),
                  u.TgZ(10, 'code'),
                  u._uU(11, 'light'),
                  u.qZA(),
                  u._uU(12, ' \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438 '),
                  u.TgZ(13, 'code'),
                  u._uU(14, 'dark'),
                  u.qZA(),
                  u._uU(
                    15,
                    '. \u0414\u043b\u044f \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0432\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0442\u0430\u043c \u0433\u0434\u0435 \u044d\u0442\u043e \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0434\u0438\u0437\u0430\u0439\u043d-\u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435. \u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0442\u043e\u043a\u0435\u043d\u044b \u0438\u0437 \u043f\u0430\u043b\u0438\u0442\u0440\u044b \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f. '
                  ),
                  u.qZA(),
                  u.TgZ(16, 'div'),
                  u._UZ(17, 'prizm-doc-code', 1),
                  u.qZA()(),
                  u._UZ(18, 'br')(19, 'br'),
                  u.TgZ(20, 'div')(21, 'h4'),
                  u._uU(
                    22,
                    '\u041a\u0430\u043a \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0435\u043c\u0443'
                  ),
                  u.qZA(),
                  u.TgZ(23, 'p', 0),
                  u._uU(
                    24,
                    ' \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0435\u043c\u0443 \u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0430\u0442\u0440\u0438\u0431\u0443\u0442 '
                  ),
                  u.TgZ(25, 'code'),
                  u._uU(26, 'data-prizm-theme'),
                  u.qZA(),
                  u._uU(
                    27,
                    '. \u0415\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0442\u0435\u043c\u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043c\u044b \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c, \u0434\u043b\u044f \u0432\u0441\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c '
                  ),
                  u.TgZ(28, 'code'),
                  u._uU(29, 'body'),
                  u.qZA()(),
                  u.TgZ(30, 'div'),
                  u._UZ(31, 'prizm-doc-code', 1),
                  u.qZA(),
                  u._UZ(32, 'br'),
                  u.TgZ(33, 'p', 0),
                  u._uU(
                    34,
                    ' \u0412 \u043f\u0440\u043e\u0435\u043a\u0442 \u0442\u0435\u043c\u044b Prizm \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e '
                  ),
                  u.TgZ(35, 'a', 2),
                  u._uU(36, 'PrizmThemeModule'),
                  u.qZA()(),
                  u.TgZ(37, 'div'),
                  u._UZ(38, 'prizm-doc-code', 1),
                  u.qZA(),
                  u._UZ(39, 'br'),
                  u.TgZ(40, 'p', 0),
                  u._uU(
                    41,
                    ' \u0422\u0430\u043a \u0436\u0435 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0442\u0438\u043b\u0438 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0443: \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 '
                  ),
                  u.TgZ(42, 'code'),
                  u._uU(43, 'angular.json'),
                  u.qZA(),
                  u._uU(
                    44,
                    ', \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0441\u0442\u0438\u043b\u0435\u0432\u043e\u0439 \u0444\u0430\u0439\u043b \u043f\u0440\u043e\u0435\u043a\u0442\u0430. '
                  ),
                  u.qZA(),
                  u.TgZ(45, 'div'),
                  u._UZ(46, 'prizm-doc-code', 1),
                  u.qZA()(),
                  u._UZ(47, 'br')(48, 'br'),
                  u.TgZ(49, 'div')(50, 'h4'),
                  u._uU(
                    51,
                    '\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0442\u0435\u043c'
                  ),
                  u.qZA(),
                  u.TgZ(52, 'p', 0),
                  u._uU(
                    53,
                    ' \u0414\u043b\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0442\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f '
                  ),
                  u.TgZ(54, 'a', 3),
                  u._uU(55, 'PrizmThemeService'),
                  u.qZA(),
                  u._uU(
                    56,
                    '. \u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0442\u0435\u043c \u043a\u0430\u043a \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e, \u0442\u0430\u043a \u0438 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. '
                  ),
                  u.qZA(),
                  u.TgZ(57, 'div'),
                  u._UZ(58, 'prizm-doc-code', 1),
                  u.qZA(),
                  u._UZ(59, 'br'),
                  u.TgZ(60, 'p', 0),
                  u._uU(
                    61,
                    ' \u0422\u0430\u043a \u0436\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0440\u0435\u0432\u0435\u0440\u0441\u0438\u0432\u043d\u044b\u0435 \u0442\u0435\u043c\u044b \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c '
                  ),
                  u.TgZ(62, 'code'),
                  u._uU(63, 'themeInvertedDirective'),
                  u.qZA(),
                  u._uU(
                    64,
                    '. \u042d\u0442\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0430 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0442\u0435\u043c\u0443, \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0442\u0435\u043c\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0412 \u0434\u0438\u0437\u0430\u0439\u043d-\u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 '
                  ),
                  u.TgZ(65, 'code'),
                  u._uU(66, 'PrizmHint'),
                  u.qZA(),
                  u._uU(67, ', '),
                  u.TgZ(68, 'code'),
                  u._uU(69, 'PrizmTooltip'),
                  u.qZA(),
                  u._uU(70, ' \u0438 '),
                  u.TgZ(71, 'code'),
                  u._uU(72, 'PrizmConfirmPopup'),
                  u.qZA(),
                  u._uU(
                    73,
                    ' \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432\u0435\u0441\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u044d\u0442\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0435\u043c\u0435, \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043b\u043e\u0436\u043d\u043e\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439. \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0440\u0435\u0432\u0435\u0440\u0441\u0438\u0432\u043d\u044b\u0445 \u0442\u0435\u043c \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0447\u0435\u0440\u0435\u0437 '
                  ),
                  u.TgZ(74, 'code'),
                  u._uU(75, 'PrizmThemeInvertedValuesService'),
                  u.qZA(),
                  u._uU(76, '. '),
                  u.qZA(),
                  u.TgZ(77, 'div'),
                  u._UZ(78, 'prizm-doc-code', 1),
                  u.qZA()(),
                  u._UZ(79, 'br')(80, 'br'),
                  u.TgZ(81, 'div')(82, 'h4'),
                  u._uU(
                    83,
                    '\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u044e \u0442\u0435\u043c\u0443'
                  ),
                  u.qZA(),
                  u.TgZ(84, 'p', 4),
                  u._uU(
                    85,
                    '*\u0420\u0430\u0437\u0434\u0435\u043b \u0434\u043e\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f'
                  ),
                  u.qZA(),
                  u.TgZ(86, 'div')(87, 'p', 0),
                  u._uU(
                    88,
                    ' \u0423 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0434\u0438\u0437\u0430\u0439\u043d-\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0442\u0435\u043c: '
                  ),
                  u.qZA(),
                  u.TgZ(89, 'ol', 5)(90, 'li'),
                  u._uU(
                    91,
                    '\u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u0441\u0432\u0435\u0442\u043b\u043e\u0439 \u0438 \u0442\u0435\u043c\u043d\u043e\u0439 \u0442\u0435\u043c\u044b'
                  ),
                  u.qZA(),
                  u.TgZ(92, 'li'),
                  u._uU(
                    93,
                    '\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u043e\u0439 \u0442\u0435\u043c\u044b'
                  ),
                  u.qZA(),
                  u.TgZ(94, 'li'),
                  u._uU(
                    95,
                    '\u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0438\u0445 \u043f\u0430\u043b\u0438\u0442\u0440'
                  ),
                  u.qZA(),
                  u.TgZ(96, 'li'),
                  u._uU(
                    97,
                    '\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043f\u0430\u043b\u0438\u0442\u0440\u044b'
                  ),
                  u.qZA()()(),
                  u.TgZ(98, 'div')(99, 'p', 0),
                  u._uU(
                    100,
                    ' \u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0442\u043e\u043a\u0435\u043d\u043e\u0432, \u043f\u0430\u043b\u0438\u0442\u0440\u044b \u0438\u043b\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0442\u0435\u043c\u044b, \u0444\u0430\u0439\u043b \u0441 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0430\u0432\u0438\u0442\u044c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442, \u0430 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0441\u0442\u0438\u043b\u0435\u0432\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u044b\u0437\u043e\u0432 css-\u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u043e\u0432\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0441\u043e \u0441\u0442\u0438\u043b\u044f\u043c\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d \u043f\u043e\u0441\u043b\u0435 \u0444\u0430\u0439\u043b\u043e\u0432 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438. '
                  ),
                  u.qZA(),
                  u._UZ(101, 'prizm-doc-code', 1),
                  u.qZA(),
                  u._UZ(102, 'br'),
                  u.TgZ(103, 'div')(104, 'p', 0),
                  u._uU(
                    105,
                    ' \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u0442\u0435\u043c\u0443 \u0432 Prizm. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442 \u0444\u0430\u0439\u043b\u044b \u0441 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0442\u043e\u043a\u0435\u043d\u0430\u043c\u0438 \u0438 \u043f\u0430\u043b\u0438\u0442\u0440\u0430\u043c\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u0430\u043b\u0438\u0442\u0440 \u0438 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u0443\u0437\u043d\u0430\u0442\u044c \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 '
                  ),
                  u.TgZ(106, 'a', 6),
                  u._uU(107, '\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0430\u043c'),
                  u.qZA(),
                  u._uU(108, '. '),
                  u.qZA(),
                  u._UZ(109, 'br')(110, 'prizm-doc-code', 1)(111, 'br'),
                  u.TgZ(112, 'p', 0),
                  u._uU(
                    113,
                    ' \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u044b, \u0442\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0442\u0435\u043c\u044b \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0442\u0430\u043a. '
                  ),
                  u.qZA(),
                  u._UZ(114, 'br')(115, 'prizm-doc-code', 1)(116, 'br'),
                  u.TgZ(117, 'p', 0),
                  u._uU(
                    118,
                    '\u0417\u0430\u0442\u0435\u043c, \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0441\u0442\u0438\u043b\u0435\u0432\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0434:'
                  ),
                  u.qZA(),
                  u._UZ(119, 'prizm-doc-code', 1)(120, 'br'),
                  u.TgZ(121, 'p', 0),
                  u._uU(
                    122,
                    ' \u0427\u0442\u043e\u0431\u044b \u0441\u0432\u043e\u044f \u0442\u0435\u043c\u0430 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u043a\u0430\u043a \u0438 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u0442\u0435\u043c\u0430\u043c\u0438, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0435\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e '
                  ),
                  u.TgZ(123, 'a', 3),
                  u._uU(124, 'PrizmThemeService'),
                  u.qZA(),
                  u._uU(125, '. '),
                  u.qZA(),
                  u._UZ(126, 'prizm-doc-code', 1)(127, 'br'),
                  u.TgZ(128, 'p', 0),
                  u._uU(
                    129,
                    ' \u0415\u0441\u043b\u0438 \u0432 \u0441\u0432\u043e\u0438\u0445 \u0442\u0435\u043c\u0430\u0445 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0432\u0435\u0440\u0441\u0438\u0432\u043d\u044b\u0435 (\u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435) \u0442\u0435\u043c\u044b, \u0442\u043e \u043e\u043f\u0438\u0441\u0430\u0442\u044c \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u0441\u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0442\u043e\u043a\u0435\u043d\u0430. '
                  ),
                  u.qZA(),
                  u._UZ(130, 'prizm-doc-code', 1),
                  u.qZA(),
                  u._UZ(131, 'br'),
                  u.qZA()),
                  2 & t &&
                    (u.xp6(17),
                    u.Q6J('code', r.styleVariables),
                    u.xp6(14),
                    u.Q6J('code', r.setup),
                    u.xp6(7),
                    u.Q6J('code', r.setupModule),
                    u.xp6(8),
                    u.Q6J('code', r.setupStyles),
                    u.xp6(12),
                    u.Q6J('code', r.themeSwitcher),
                    u.xp6(20),
                    u.Q6J('code', r.themeReverse),
                    u.xp6(23),
                    u.Q6J('code', r.updatedPalette),
                    u.xp6(9),
                    u.Q6J('code', r.customThemeCss),
                    u.xp6(5),
                    u.Q6J('code', r.customThemePalette),
                    u.xp6(4),
                    u.Q6J('code', r.customTheme),
                    u.xp6(7),
                    u.Q6J('code', r.customThemeSetup),
                    u.xp6(4),
                    u.Q6J('code', r.customThemeInverted));
              },
              dependencies: [s.c],
              styles: [
                '[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{font-size:24px}[_nghost-%COMP%]   .note[_ngcontent-%COMP%]{font-size:12px;font-style:italic}',
              ],
              changeDetection: 0,
            })),
            i
          );
        })();
      function S(i, o) {
        1 & i && u._UZ(0, 'prizm-theme-for-developers');
      }
      function P(i, o) {
        1 & i && u._UZ(0, 'prizm-theme-for-designers');
      }
      let x = (() => {
        class i {}
        return (
          (i.ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵcmp = u.Xpm({
            type: i,
            selectors: [['prizm-theme-guide']],
            decls: 3,
            vars: 0,
            consts: [
              ['header', 'Theme guide', 'type', 'guidelines', 1, 'info-page'],
              ['prizmDocPageTab', 'For Developers'],
              ['prizmDocPageTab', 'For Designers'],
            ],
            template: function (t, r) {
              1 & t &&
                (u.TgZ(0, 'prizm-doc-page', 0),
                u.YNc(1, S, 1, 0, 'ng-template', 1),
                u.YNc(2, P, 1, 0, 'ng-template', 2),
                u.qZA());
            },
            dependencies: [d.W, D.l, f, y],
            changeDetection: 0,
          })),
          i
        );
      })();
      var m = e(21004);
      let H = (() => {
        class i {}
        return (
          (i.ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵmod = u.oAB({ type: i })),
          (i.ɵinj = u.cJS({ imports: [l.ez, m.Qp, a.r1t, a.Kqr, E.Bz.forChild((0, m.GB)(x)), E.Bz] })),
          i
        );
      })();
    },
  },
]);
