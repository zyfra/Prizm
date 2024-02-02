'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [45535],
  {
    45535: (K, s, n) => {
      n.r(s), n.d(s, { SkeletonModule: () => I });
      var g = n(96814),
        u = n(21004),
        S = n(75187),
        r = n(60095),
        e = n(65879),
        h = n(8221),
        x = n(30990),
        v = n(83419),
        z = n(78905),
        k = n(63796),
        y = n(75987),
        f = n(43015),
        C = n(4377),
        d = n(93428),
        c = n(7781),
        T = n(28279),
        P = n(74335),
        Z = n(76153),
        J = n(19947);
      let U = (() => {
        class o {
          constructor() {
            (this.items = []),
              (this.activeControl = new r.p4(!1)),
              (this.selectControl = new r.p4()),
              (this.toggleControl = new r.p4()),
              (this.value2Disabled = new r.p4(!1));
          }
          ngOnInit() {
            this.value2Disabled.disable();
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['prizm-skeleton-base-example']],
            decls: 19,
            vars: 13,
            consts: [
              [1, 'header'],
              [3, 'formControl'],
              [1, 'body'],
              ['label', '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a', 3, 'prizmSkeleton'],
              ['prizmInput', ''],
              [
                'label',
                '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                3,
                'outer',
                'prizmSkeleton',
              ],
              [3, 'formControl', 'items', 'prizmSkeleton'],
              [3, 'formControl', 'prizmSkeletonRounded', 'prizmSkeleton'],
              [2, 'margin-left', '6px', 3, 'prizmSkeleton', 'prizmSkeletonText'],
              [3, 'prizmSkeleton'],
            ],
            template: function (t, i) {
              1 & t &&
                (e.TgZ(0, 'div', 0),
                e._UZ(1, 'prizm-toggle', 1),
                e._uU(2, ' Active\n'),
                e.qZA(),
                e.TgZ(3, 'div', 2)(4, 'div')(5, 'prizm-input-layout', 3),
                e._UZ(6, 'input', 4),
                e.qZA()(),
                e.TgZ(7, 'div')(8, 'prizm-input-layout', 5),
                e._UZ(9, 'input', 4),
                e.qZA()(),
                e.TgZ(10, 'div'),
                e._UZ(11, 'prizm-select', 6),
                e.qZA(),
                e.TgZ(12, 'div'),
                e._UZ(13, 'prizm-toggle', 7),
                e.TgZ(14, 'span', 8),
                e._uU(15, 'Toggle'),
                e.qZA()(),
                e.TgZ(16, 'div')(17, 'prizm-card', 9),
                e._uU(
                  18,
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
                ),
                e.qZA()()()),
                2 & t &&
                  (e.xp6(1),
                  e.Q6J('formControl', i.activeControl),
                  e.xp6(4),
                  e.Q6J('prizmSkeleton', i.activeControl.value),
                  e.xp6(3),
                  e.Q6J('outer', !0)('prizmSkeleton', i.activeControl.value),
                  e.xp6(3),
                  e.Q6J('formControl', i.selectControl)('items', i.items)(
                    'prizmSkeleton',
                    i.activeControl.value
                  ),
                  e.xp6(2),
                  e.Q6J('formControl', i.toggleControl)('prizmSkeletonRounded', !0)(
                    'prizmSkeleton',
                    i.activeControl.value
                  ),
                  e.xp6(1),
                  e.Q6J('prizmSkeleton', i.activeControl.value)('prizmSkeletonText', !0),
                  e.xp6(3),
                  e.Q6J('prizmSkeleton', i.activeControl.value));
            },
            dependencies: [r.JJ, r.oH, T.K, d.w, P.W, Z.C, J.l, c.s],
            styles: [
              '.header[_ngcontent-%COMP%]{margin:8px 0;padding:8px 0;border-bottom:1px solid var(--prizm-v3-background-stroke)}.body[_ngcontent-%COMP%]{margin-top:16px;display:flex;gap:1rem;flex-direction:column}',
            ],
          })),
          o
        );
      })();
      function V(o, l) {
        if (
          (1 & o && (e.TgZ(0, 'prizm-doc-example', 3), e._UZ(1, 'prizm-skeleton-base-example'), e.qZA()),
          2 & o)
        ) {
          const t = e.oxw();
          e.Q6J('content', t.exampleBase);
        }
      }
      function A(o, l) {
        1 & o && e._uU(0, ' Active skeleton ');
      }
      function M(o, l) {
        1 & o && e._uU(0, ' Is Text ');
      }
      function Q(o, l) {
        1 & o && e._uU(0, ' Is Rounded ');
      }
      function R(o, l) {
        1 & o && e._uU(0, ' Is Short ');
      }
      function N(o, l) {
        if (1 & o) {
          const t = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'div', 4)(2, 'div')(3, 'button', 5),
            e._uU(4, ' Test Button '),
            e.qZA()(),
            e.TgZ(5, 'div')(6, 'prizm-toggle', 6),
            e._uU(7, ' Value '),
            e.qZA()(),
            e.TgZ(8, 'div')(9, 'span', 7),
            e._uU(10, 'Short Span Element'),
            e.qZA()(),
            e.TgZ(11, 'div')(12, 'div', 7),
            e._uU(13, ' Block Element '),
            e.qZA()(),
            e.TgZ(14, 'div')(15, 'p', 7),
            e._uU(
              16,
              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
            ),
            e.qZA()()()(),
            e.TgZ(17, 'prizm-doc-documentation', 8),
            e.YNc(18, A, 1, 0, 'ng-template', 9),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(t);
              const p = e.oxw();
              return e.KtG((p.active = m));
            }),
            e.YNc(19, M, 1, 0, 'ng-template', 10),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(t);
              const p = e.oxw();
              return e.KtG((p.isText = m));
            }),
            e.YNc(20, Q, 1, 0, 'ng-template', 11),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(t);
              const p = e.oxw();
              return e.KtG((p.isRounded = m));
            }),
            e.YNc(21, R, 1, 0, 'ng-template', 12),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(t);
              const p = e.oxw();
              return e.KtG((p.isShort = m));
            }),
            e.qZA();
        }
        if (2 & o) {
          const t = e.oxw();
          e.xp6(3),
            e.Q6J('prizmSkeleton', t.active)('prizmSkeletonText', t.isText)(
              'prizmSkeletonRounded',
              t.isRounded
            )('prizmSkeletonShort', t.isShort),
            e.xp6(3),
            e.Q6J('formControl', t.toggleControl)('prizmSkeleton', t.active)('prizmSkeletonText', t.isText)(
              'prizmSkeletonRounded',
              t.isRounded
            )('prizmSkeletonShort', t.isShort),
            e.xp6(3),
            e.Q6J('prizmSkeleton', t.active)('prizmSkeletonText', t.isText)(
              'prizmSkeletonRounded',
              t.isRounded
            )('prizmSkeletonShort', t.isShort),
            e.xp6(3),
            e.Q6J('prizmSkeleton', t.active)('prizmSkeletonText', t.isText)(
              'prizmSkeletonRounded',
              t.isRounded
            )('prizmSkeletonShort', t.isShort),
            e.xp6(3),
            e.Q6J('prizmSkeleton', t.active)('prizmSkeletonText', t.isText)(
              'prizmSkeletonRounded',
              t.isRounded
            )('prizmSkeletonShort', t.isShort),
            e.xp6(2),
            e.Q6J('hasTestId', !1),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.active),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.isText),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.isRounded),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.isShort);
        }
      }
      function B(o, l) {
        if (
          (1 & o &&
            (e.TgZ(0, 'ol', 13)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmSkeletonModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our directive '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 14),
            e.qZA()()),
          2 & o)
        ) {
          const t = e.oxw();
          e.xp6(7), e.Q6J('code', t.setupModule);
        }
      }
      let E = (() => {
        class o {
          constructor() {
            (this.active = !0),
              (this.isText = !1),
              (this.isRounded = !1),
              (this.isShort = !1),
              (this.toggleControl = new r.p4()),
              (this.iconVariants = [
                '',
                'selection-checkbox-marked-circle',
                'selection-checkbox-marked-circle-chanel',
                'arrows-chevron-left',
                'arrows-chevron-right',
              ]),
              (this.iconOn = this.iconVariants[0]),
              (this.iconOff = this.iconVariants[0]),
              (this.setupModule = n.e(18633).then(n.t.bind(n, 18633, 17))),
              (this.exampleBase = {
                TypeScript: n.e(41036).then(n.t.bind(n, 41036, 17)),
                HTML: n.e(42576).then(n.t.bind(n, 42576, 17)),
              });
          }
        }
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['prizm-skeleton-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Skeleton'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              [1, 'example'],
              [
                'prizmButton',
                '',
                3,
                'prizmSkeleton',
                'prizmSkeletonText',
                'prizmSkeletonRounded',
                'prizmSkeletonShort',
              ],
              [
                3,
                'formControl',
                'prizmSkeleton',
                'prizmSkeletonText',
                'prizmSkeletonRounded',
                'prizmSkeletonShort',
              ],
              [3, 'prizmSkeleton', 'prizmSkeletonText', 'prizmSkeletonRounded', 'prizmSkeletonShort'],
              [3, 'hasTestId'],
              [
                'documentationPropertyName',
                'prizmSkeleton',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'prizmSkeletonText',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'prizmSkeletonRounded',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'prizmSkeletonShort',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (t, i) {
              1 & t &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(2, ' Our skeleton component can use to show a skeleton loading state. '),
                e.qZA(),
                e.YNc(3, V, 2, 1, 'ng-template', 2),
                e.YNc(4, N, 22, 26, 'ng-template', 2),
                e.YNc(5, B, 8, 1, 'ng-template', 2),
                e.qZA());
            },
            dependencies: [h.c, x.F, v.K, z.N, k.W, y.l, f.a, r.JJ, r.oH, C.K, d.w, c.s, U],
            styles: ['.example[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}'],
            changeDetection: 0,
          })),
          o
        );
      })();
      var a = n(70169);
      let I = (() => {
        class o {}
        return (
          (o.ɵfac = function (t) {
            return new (t || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({
            imports: [
              g.ez,
              u.Qp,
              r.u5,
              r.UX,
              a.m98,
              a.KBf,
              a.pzg,
              a.kNo,
              a.VMx,
              a.Qjd,
              a.p_S,
              S.Bz.forChild((0, u.GB)(E)),
            ],
          })),
          o
        );
      })();
    },
  },
]);
