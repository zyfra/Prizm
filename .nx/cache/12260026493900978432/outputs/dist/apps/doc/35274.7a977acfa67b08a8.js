'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [35274],
  {
    35274: (C, i, t) => {
      t.r(i), t.d(i, { MigrationModule: () => s });
      var c = t(75187),
        r = t(21004),
        u = t(65879),
        p = t(8221),
        a = t(63796),
        d = t(75987);
      function m(e, n) {
        1 & e &&
          (u.TgZ(0, 'h3'),
          u._uU(
            1,
            ' \u0427\u0442\u043e \u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043d\u0430\u0448 \u043c\u0438\u0433\u0440\u0430\u0442\u043e\u0440 \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f deprecated \u0432\u0435\u0440\u0441\u0438\u0439 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u0430 2.1.0/1.2.5 \u0432\u0435\u0440\u0441\u0438\u0439 '
          ),
          u.qZA(),
          u._UZ(2, 'prizm-doc-code', 3)(3, 'prizm-doc-code', 4)(4, 'br')(5, 'hr')(6, 'br'),
          u.TgZ(7, 'h3'),
          u._uU(
            8,
            '\u0427\u0442\u043e \u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043d\u0430\u0448 \u043c\u0438\u0433\u0440\u0430\u0442\u043e\u0440 \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0434\u043b\u044f \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 \u041a\u04113'
          ),
          u.qZA(),
          u._UZ(9, 'prizm-doc-code', 3)(10, 'prizm-doc-code', 4)),
          2 & e &&
            (u.xp6(2),
            u.Q6J(
              'code',
              'nx generate @prizm-ui/nx-plugin:remove-prizm-deprecated-v1-2 --project=[YOU PROJECT NAME] '
            ),
            u.xp6(1),
            u.Q6J(
              'code',
              'nx generate @prizm-ui/nx-plugin:remove-prizm-deprecated-v1-2 --project=[YOU PROJECT NAME] --runPrettier true'
            ),
            u.xp6(6),
            u.Q6J('code', 'nx generate @prizm-ui/nx-plugin:migrate-from-cb3 --project=[YOU PROJECT NAME] '),
            u.xp6(1),
            u.Q6J(
              'code',
              'nx generate @prizm-ui/nx-plugin:migrate-from-cb3 --project=[YOU PROJECT NAME] --runPrettier true'
            ));
      }
      function g(e, n) {
        1 & e && (u.TgZ(0, 'ol', 5), u._UZ(1, 'prizm-doc-code', 6), u.qZA()),
          2 & e && (u.xp6(1), u.Q6J('code', 'npm i @prizm-ui/nx-plugin'));
      }
      let l = (() => {
          class e {}
          return (
            (e.ɵfac = function (o) {
              return new (o || e)();
            }),
            (e.ɵcmp = u.Xpm({
              type: e,
              selectors: [['prizm-migration']],
              decls: 5,
              vars: 0,
              consts: [
                ['header', 'Migration Guide'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['filename', '\u0417\u0430\u043f\u0443\u0441\u043a', 3, 'code'],
                ['filename', '\u0417\u0430\u043f\u0443\u0441\u043a c prettier', 3, 'code'],
                [1, 'b-demo-steps'],
                ['filename', '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430', 3, 'code'],
              ],
              template: function (o, M) {
                1 & o &&
                  (u.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  u._uU(2, 'Update cb3 to PRIZM using our library with plugins'),
                  u.qZA(),
                  u.YNc(3, m, 11, 4, 'ng-template', 2),
                  u.YNc(4, g, 2, 1, 'ng-template', 2),
                  u.qZA());
              },
              dependencies: [p.c, a.W, d.l],
              changeDetection: 0,
            })),
            e
          );
        })(),
        s = (() => {
          class e {}
          return (
            (e.ɵfac = function (o) {
              return new (o || e)();
            }),
            (e.ɵmod = u.oAB({ type: e })),
            (e.ɵinj = u.cJS({ imports: [r.Qp, c.Bz.forChild((0, r.GB)(l))] })),
            e
          );
        })();
    },
  },
]);
