'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [40423],
  {
    40423: (f, c, o) => {
      o.r(c), o.d(c, { InputCarouselExampleModule: () => rt });
      var s = o(96814),
        l = o(60095),
        C = o(75187),
        i = o(21004),
        m = o(70169),
        t = o(65879),
        g = o(8221),
        P = o(30990),
        z = o(83419),
        x = o(78905),
        E = o(63796),
        I = o(75987),
        T = o(43015),
        M = o(56586),
        A = o(57679),
        y = o(21039),
        d = o(76153),
        h = o(18218),
        V = o(42227),
        v = o(19947);
      let D = (() => {
        class e {
          constructor() {
            (this.currentIndex = 2), (this.carouselData = ['prizm1', 'prizm2', 'prizm3', 'prizm4', 'prizm5']);
          }
          prev() {
            0 === this.currentIndex
              ? (this.currentIndex = this.carouselData.length - 1)
              : this.currentIndex--;
          }
          next() {
            this.currentIndex === this.carouselData.length - 1
              ? (this.currentIndex = 0)
              : this.currentIndex++;
          }
          setValue(n) {
            this.carouselData[this.currentIndex] = n;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-input-as-carousel-example']],
            decls: 5,
            vars: 7,
            consts: [
              [3, 'label', 'size', 'outer', 'position'],
              ['prizmInputIconButton', 'chevrons-left', 'prizm-input-left', '', 3, 'interactive', 'click'],
              ['prizmInput', '', 3, 'value', 'valueChanged'],
              ['input', ''],
              ['prizmInputIconButton', 'chevrons-right', 'prizm-input-right', '', 3, 'interactive', 'click'],
            ],
            template: function (n, a) {
              1 & n &&
                (t.TgZ(0, 'prizm-input-layout', 0)(1, 'button', 1),
                t.NdJ('click', function () {
                  return a.prev();
                }),
                t.qZA(),
                t.TgZ(2, 'input', 2, 3),
                t.NdJ('valueChanged', function (p) {
                  return a.setValue(p);
                }),
                t.qZA(),
                t.TgZ(4, 'button', 4),
                t.NdJ('click', function () {
                  return a.next();
                }),
                t.qZA()()),
                2 & n &&
                  (t.Q6J(
                    'label',
                    '\u0418\u043d\u043f\u0443\u0442 \u043a\u0430\u043a \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u044c'
                  )('size', 'l')('outer', !0)('position', 'center'),
                  t.xp6(1),
                  t.Q6J('interactive', !0),
                  t.xp6(1),
                  t.Q6J('value', a.carouselData[a.currentIndex]),
                  t.xp6(2),
                  t.Q6J('interactive', !0));
            },
            dependencies: [d.C, V.f, v.l],
            changeDetection: 0,
          })),
          e
        );
      })();
      function J(e, r) {
        1 & e && t._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      let Z = (() => {
        class e {
          constructor() {
            (this.control = new l.NI(5, [l.kI.required])),
              (this.carouselContent = new m.Ejf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n, a) => n === a));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-carousel-basic-example']],
            decls: 5,
            vars: 7,
            consts: [
              [3, 'label', 'size', 'outer', 'position'],
              [3, 'carouselContent', 'formControl'],
              ['carousel', ''],
              ['prizmInputStatusText', ''],
            ],
            template: function (n, a) {
              1 & n &&
                (t.TgZ(0, 'prizm-input-layout', 0)(1, 'prizm-input-carousel', 1, 2),
                t._uU(3),
                t.qZA(),
                t.YNc(4, J, 1, 0, 'ng-template', 3),
                t.qZA()),
                2 & n &&
                  (t.Q6J('label', '\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c')('size', 'l')(
                    'outer',
                    !0
                  )('position', 'center'),
                  t.xp6(1),
                  t.Q6J('carouselContent', a.carouselContent)('formControl', a.control),
                  t.xp6(2),
                  t.hij(' ', a.carouselContent.currentValue, ' '));
            },
            dependencies: [l.JJ, l.oH, y.h, d.C, h.A],
            changeDetection: 0,
          })),
          e
        );
      })();
      function N(e, r) {
        1 & e && t._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      let H = (() => {
        class e {
          constructor() {
            this.carouselContent = new m.Ejf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n, a) => n === a);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-carousel-light-example']],
            decls: 5,
            vars: 9,
            consts: [
              [3, 'label', 'size', 'outer', 'position'],
              [3, 'required', 'carouselContent', 'ngModel', 'lightMode'],
              ['carousel', ''],
              ['prizmInputStatusText', ''],
            ],
            template: function (n, a) {
              1 & n &&
                (t.TgZ(0, 'prizm-input-layout', 0)(1, 'prizm-input-carousel', 1, 2),
                t._uU(3),
                t.qZA(),
                t.YNc(4, N, 1, 0, 'ng-template', 3),
                t.qZA()),
                2 & n &&
                  (t.Q6J('label', '\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c')('size', 'l')(
                    'outer',
                    !0
                  )('position', 'center'),
                  t.xp6(1),
                  t.Q6J('required', !0)('carouselContent', a.carouselContent)('ngModel', 2)('lightMode', !0),
                  t.xp6(2),
                  t.hij(' ', a.carouselContent.currentValue, ' '));
            },
            dependencies: [l.JJ, l.Q7, l.On, y.h, d.C, h.A],
            changeDetection: 0,
          })),
          e
        );
      })();
      function _(e, r) {
        1 & e && t._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      let K = (() => {
          class e {
            constructor() {
              this.arrayWithObjects = new m.Ejf(
                [
                  { id: 1, title: 'title 1', description: 'description 1' },
                  { id: 2, title: 'title 2', description: 'description 2' },
                  { id: 3, title: 'title 3', description: 'description 3' },
                ],
                (n, a) => n?.id === a?.id
              );
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-carousel-array-of-objects-example']],
              decls: 4,
              vars: 8,
              consts: [
                [3, 'label', 'size', 'outer', 'position'],
                [3, 'required', 'carouselContent', 'ngModel'],
                ['prizmInputStatusText', ''],
              ],
              template: function (n, a) {
                1 & n &&
                  (t.TgZ(0, 'prizm-input-layout', 0)(1, 'prizm-input-carousel', 1),
                  t._uU(2),
                  t.qZA(),
                  t.YNc(3, _, 1, 0, 'ng-template', 2),
                  t.qZA()),
                  2 & n &&
                    (t.Q6J('label', '\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c')('size', 'l')(
                      'outer',
                      !0
                    )('position', 'center'),
                    t.xp6(1),
                    t.Q6J('required', !0)('carouselContent', a.arrayWithObjects)(
                      'ngModel',
                      a.arrayWithObjects.set[0]
                    ),
                    t.xp6(1),
                    t.hij(
                      ' ',
                      null == a.arrayWithObjects.currentValue ? null : a.arrayWithObjects.currentValue.title,
                      ' '
                    ));
              },
              dependencies: [l.JJ, l.Q7, l.On, y.h, d.C, h.A],
              changeDetection: 0,
            })),
            e
          );
        })(),
        Q = (() => {
          class e {
            constructor() {
              this.defaultMonthNames = [
                '\u044f\u043d\u0432\u0430\u0440\u044c',
                '\u0444\u0435\u0432\u0440\u0430\u043b\u044c',
                '\u043c\u0430\u0440\u0442',
                '\u0430\u043f\u0440\u0435\u043b\u044c',
                '\u043c\u0430\u0439',
                '\u0438\u044e\u043d\u044c',
                '\u0438\u044e\u043b\u044c',
                '\u0430\u0432\u0433\u0443\u0441\u0442',
                '\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c',
                '\u043e\u043a\u0442\u044f\u0431\u0440\u044c',
                '\u043d\u043e\u044f\u0431\u0440\u044c',
                '\u0434\u0435\u043a\u0430\u0431\u0440\u044c',
              ];
            }
            transform(n) {
              return this.defaultMonthNames[n - 1];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵpipe = t.Yjl({ name: 'prizmMonthExample', type: e, pure: !0 })),
            e
          );
        })();
      function U(e, r) {
        if ((1 & e && (t.ynx(0), t._uU(1), t.ALo(2, 'prizmMonthExample'), t.BQk()), 2 & e)) {
          const n = r.ngIf;
          t.xp6(1), t.AsE(' ', t.lcZ(2, 2, n.month), ' ', n.year, ' ');
        }
      }
      function Y(e, r) {
        1 & e && t._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      let O = (() => {
        class e {
          constructor() {
            this.carouselContent = new m.frd();
            const n = new Date();
            this.currentValue = { year: n.getFullYear(), month: n.getMonth() + 1 };
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-carousel-year-month-example']],
            decls: 4,
            vars: 8,
            consts: [
              [3, 'label', 'size', 'outer', 'position'],
              [3, 'required', 'carouselContent', 'ngModel'],
              [4, 'ngIf'],
              ['prizmInputStatusText', ''],
            ],
            template: function (n, a) {
              1 & n &&
                (t.TgZ(0, 'prizm-input-layout', 0)(1, 'prizm-input-carousel', 1),
                t.YNc(2, U, 3, 4, 'ng-container', 2),
                t.qZA(),
                t.YNc(3, Y, 1, 0, 'ng-template', 3),
                t.qZA()),
                2 & n &&
                  (t.Q6J('label', '\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c')('size', 'l')(
                    'outer',
                    !0
                  )('position', 'center'),
                  t.xp6(1),
                  t.Q6J('required', !0)('carouselContent', a.carouselContent)('ngModel', a.currentValue),
                  t.xp6(1),
                  t.Q6J('ngIf', a.carouselContent.currentValue));
            },
            dependencies: [s.O5, l.JJ, l.Q7, l.On, y.h, d.C, h.A, Q],
            changeDetection: 0,
          })),
          e
        );
      })();
      function B(e, r) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 3),
            t._UZ(1, 'prizm-carousel-basic-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 4),
            t._UZ(3, 'prizm-carousel-light-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 5),
            t._UZ(5, 'prizm-carousel-array-of-objects-example'),
            t.qZA(),
            t.TgZ(6, 'prizm-doc-example', 6),
            t._UZ(7, 'prizm-carousel-year-month-example'),
            t.qZA(),
            t.TgZ(8, 'prizm-doc-example', 7),
            t._UZ(9, 'prizm-input-as-carousel-example'),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.Q6J('content', n.zyfraCarouselBasicExample),
            t.xp6(2),
            t.Q6J('content', n.zyfraCarouselLightExample),
            t.xp6(2),
            t.Q6J('content', n.zyfraCarouselArrayofObjectsExample),
            t.xp6(2),
            t.Q6J('content', n.zyfraCarouselYearMonthExample),
            t.xp6(2),
            t.Q6J('content', n.carouselAsInputExample);
        }
      }
      function j(e, r) {
        1 & e && t._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      function L(e, r) {
        1 & e && t._uU(0, ' Show clear button ');
      }
      function S(e, r) {
        1 & e && t._uU(0, ' Clear Button (icon or template) ');
      }
      function F(e, r) {
        1 & e && t._uU(0, ' Outer ');
      }
      function b(e, r) {
        1 & e && t._uU(0, ' Size ');
      }
      function G(e, r) {
        1 & e && t._uU(0, ' Label ');
      }
      function W(e, r) {
        1 & e && t._uU(0, ' Clear ');
      }
      function R(e, r) {
        1 & e && t._uU(0, ' Border ');
      }
      function X(e, r) {
        1 & e && t._uU(0, ' Status ');
      }
      function $(e, r) {
        1 & e && t._uU(0, ' Position ');
      }
      function w(e, r) {
        1 & e && t._uU(0, ' LightMode ');
      }
      function q(e, r) {
        1 & e && t._uU(0, ' Carousel Content ');
      }
      function k(e, r) {
        1 & e && t._uU(0, ' Carousel ');
      }
      function tt(e, r) {
        1 & e && t._uU(0, ' Carousel ');
      }
      function et(e, r) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'prizm-input-layout', 8, 9)(3, 'prizm-input-carousel', 10, 11),
            t._uU(5),
            t.qZA(),
            t.YNc(6, j, 1, 0, 'ng-template', 12),
            t.qZA()(),
            t.TgZ(7, 'prizm-doc-documentation', 13),
            t.YNc(8, L, 1, 0, 'ng-template', 14),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.forceClear = u));
            }),
            t.YNc(9, S, 1, 0, 'ng-template', 15),
            t.YNc(10, F, 1, 0, 'ng-template', 16),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.outer = u));
            }),
            t.YNc(11, b, 1, 0, 'ng-template', 17),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.size = u));
            }),
            t.YNc(12, G, 1, 0, 'ng-template', 18),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.label = u));
            }),
            t.YNc(13, W, 1, 0, 'ng-template', 19),
            t.YNc(14, R, 1, 0, 'ng-template', 20),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.border = u));
            }),
            t.YNc(15, X, 1, 0, 'ng-template', 21),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.status = u));
            }),
            t.YNc(16, $, 1, 0, 'ng-template', 22),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.inputPosition = u));
            }),
            t.qZA(),
            t.TgZ(17, 'prizm-doc-documentation', 23),
            t.YNc(18, w, 1, 0, 'ng-template', 24),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.lightMode = u));
            }),
            t.YNc(19, q, 1, 0, 'ng-template', 25),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.carouselContent = u));
            }),
            t.qZA(),
            t.TgZ(20, 'prizm-doc-documentation', 26),
            t.YNc(21, k, 1, 0, 'ng-template', 27),
            t.qZA(),
            t.TgZ(22, 'prizm-doc-documentation', 28),
            t.YNc(23, tt, 1, 0, 'ng-template', 27),
            t.qZA();
        }
        if (2 & e) {
          const n = t.MAs(2),
            a = t.MAs(4),
            u = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', n)('prizmDocHostElementKey', u.layoutKey)('size', u.size)(
              'label',
              u.label
            )('outer', u.outer)('border', u.border)('position', u.inputPosition)('status', u.status)(
              'forceClear',
              u.forceClear
            ),
            t.xp6(2),
            t.Q6J('prizmDocHostElement', a)('prizmDocHostElementKey', u.controlKey)('disabled', u.disabled)(
              'formControl',
              u.control
            )('required', u.required)('carouselContent', u.carouselContent)('lightMode', u.lightMode)(
              'ngModel',
              u.value
            ),
            t.xp6(2),
            t.hij(' ', u.carouselContent.currentValue, ' '),
            t.xp6(2),
            t.Q6J('heading', u.layoutKey)('hostComponentKey', u.layoutKey)('hasTestId', !0),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', u.forceClear)(
              'documentationPropertyValues',
              u.forceClearVariants
            ),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', u.outer),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', u.size)('documentationPropertyValues', u.sizeVariants),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', u.label),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', u.border),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', u.status)('documentationPropertyValues', u.statuses),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', u.inputPosition)(
              'documentationPropertyValues',
              u.inputPositionVariants
            ),
            t.xp6(1),
            t.Q6J('control', u.control)('heading', u.controlKey)('hostComponentKey', u.controlKey),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', u.lightMode),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', u.carouselContent);
        }
      }
      function nt(e, r) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 29)(1, 'li')(2, 'p'),
            t._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmInputCarouselModule'),
            t.qZA(),
            t._uU(
              6,
              ' \u0432 \u0442\u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 '
            ),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 30),
            t.qZA()()),
          2 & e)
        ) {
          const n = t.oxw();
          t.xp6(7), t.Q6J('code', n.setupModule);
        }
      }
      let ot = (() => {
          class e {
            constructor() {
              (this.border = !1),
                (this.inputPosition = 'left'),
                (this.inputPositionVariants = ['left', 'center']),
                (this.forceClear = null),
                (this.forceClearVariants = [null, !1, !0]),
                (this.sizeVariants = ['l', 'm', 's']),
                (this.status = 'default'),
                (this.statuses = ['default', 'success', 'warning', 'danger']),
                (this.layoutKey = 'PrizmInputLayoutComponent'),
                (this.controlKey = 'PrizmInputCarouselComponent'),
                (this.value = 5),
                (this.formControl = new l.p4()),
                (this.label = '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
                (this.placeholder = ''),
                (this.size = 'l'),
                (this.sizesOuter = ['l', 'm', 's']),
                (this.sizesInner = ['l', 'm']),
                (this.disabled = !1),
                (this.control = new l.p4()),
                (this.required = !1),
                (this.carouselContent = new m.ZKb([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n, a) => n === a)),
                (this.lightMode = !1),
                (this.zyfraCarouselBasicExample = {
                  TypeScript: o.e(62443).then(o.t.bind(o, 62443, 17)),
                  HTML: o.e(54150).then(o.t.bind(o, 54150, 17)),
                }),
                (this.zyfraCarouselLightExample = {
                  TypeScript: o.e(97540).then(o.t.bind(o, 97540, 17)),
                  HTML: o.e(33531).then(o.t.bind(o, 33531, 17)),
                }),
                (this.zyfraCarouselArrayofObjectsExample = {
                  TypeScript: o.e(21391).then(o.t.bind(o, 21391, 17)),
                  HTML: o.e(15815).then(o.t.bind(o, 15815, 17)),
                }),
                (this.zyfraCarouselYearMonthExample = {
                  TypeScript: o.e(45941).then(o.t.bind(o, 45941, 17)),
                  HTML: o.e(72829).then(o.t.bind(o, 72829, 17)),
                  PIPE: o.e(62022).then(o.t.bind(o, 62022, 17)),
                }),
                (this.carouselAsInputExample = {
                  Module: o.e(83333).then(o.t.bind(o, 83333, 17)),
                  Component: o.e(45203).then(o.t.bind(o, 45203, 17)),
                  HTML: o.e(61769).then(o.t.bind(o, 61769, 17)),
                }),
                (this.setupModule = o.e(20248).then(o.t.bind(o, 20248, 17)));
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-carousel-example']],
              decls: 4,
              vars: 0,
              consts: [
                ['header', 'InputCarousel'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'basic', 'heading', 'Basic example', 3, 'content'],
                ['id', 'light', 'heading', 'Carousel light example', 3, 'content'],
                ['id', 'objects-array', 'heading', 'Carousel array of objects example', 3, 'content'],
                ['id', 'select-month', 'heading', 'Carousel select month example', 3, 'content'],
                ['id', 'input-carousel', 'heading', 'Input carousel', 3, 'content'],
                [
                  3,
                  'prizmDocHostElement',
                  'prizmDocHostElementKey',
                  'size',
                  'label',
                  'outer',
                  'border',
                  'position',
                  'status',
                  'forceClear',
                ],
                ['inputElement', ''],
                [
                  'prizmDocHostElementKey',
                  'PrizmInputCarouselComponent',
                  3,
                  'prizmDocHostElement',
                  'prizmDocHostElementKey',
                  'disabled',
                  'formControl',
                  'required',
                  'carouselContent',
                  'lightMode',
                  'ngModel',
                ],
                ['carousel', ''],
                ['prizmInputStatusText', ''],
                [3, 'heading', 'hostComponentKey', 'hasTestId'],
                [
                  'documentationPropertyName',
                  'forceClear',
                  'documentationPropertyType',
                  'boolean | null',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'clearButton',
                  'documentationPropertyType',
                  'PolymorphContent<PrizmInputLayoutClearButtonContext>',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'outer',
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
                  'size',
                  'documentationPropertyType',
                  'PrizmInputSize',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'label',
                  'documentationPropertyType',
                  'string',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'clear',
                  'documentationPropertyType',
                  'MouseEvent',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'border',
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
                  'status',
                  'documentationPropertyType',
                  'PrizmInputStatus',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'position',
                  'documentationPropertyType',
                  'PrizmInputPosition',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [3, 'control', 'heading', 'hostComponentKey'],
                [
                  'documentationPropertyName',
                  'lightMode',
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
                  'carouselContent',
                  'documentationPropertyType',
                  'PrizmInputCarouselContent',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'heading',
                  'PrizmInputCarouselAuxiliaryLeftComponent',
                  'hostComponentKey',
                  'PrizmInputCarouselAuxiliaryLeftComponent',
                ],
                [
                  'documentationPropertyName',
                  'carousel',
                  'documentationPropertyType',
                  'PrizmInputCarouselComponent',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'heading',
                  'PrizmInputCarouselAuxiliaryRightComponent',
                  'hostComponentKey',
                  'PrizmInputCarouselAuxiliaryRightComponent',
                ],
                [1, 'b-demo-steps'],
                ['filename', 'MyComponent.module.ts', 3, 'code'],
              ],
              template: function (n, a) {
                1 & n &&
                  (t.TgZ(0, 'prizm-doc-page', 0),
                  t.YNc(1, B, 10, 5, 'ng-template', 1),
                  t.YNc(2, et, 24, 37, 'ng-template', 2),
                  t.YNc(3, nt, 8, 1, 'ng-template', 1),
                  t.qZA());
              },
              dependencies: [
                g.c,
                P.F,
                z.K,
                x.N,
                E.W,
                I.l,
                T.a,
                M.w,
                A.k,
                l.JJ,
                l.Q7,
                l.oH,
                y.h,
                d.C,
                h.A,
                D,
                Z,
                H,
                K,
                O,
              ],
              changeDetection: 0,
            })),
            e
          );
        })(),
        ut = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = t.oAB({ type: e })),
            (e.ɵinj = t.cJS({ imports: [m.Rgy, m.Qjd] })),
            e
          );
        })(),
        rt = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = t.oAB({ type: e })),
            (e.ɵinj = t.cJS({ imports: [s.ez, i.Qp, C.Bz.forChild((0, i.GB)(ot)), l.UX, l.u5, m.gMS, ut] })),
            e
          );
        })();
    },
    57679: (f, c, o) => {
      o.d(c, { k: () => C });
      var s = o(65879),
        l = o(45773);
      let C = (() => {
        class i {
          constructor(t) {
            (this.hostElementService = t), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const t = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              g = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const P in t) this.hostElementService.setHostElement(t[P], g[P]);
          }
        }
        return (
          (i.ɵfac = function (t) {
            return new (t || i)(s.Y36(l.R));
          }),
          (i.ɵdir = s.lG2({
            type: i,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          i
        );
      })();
    },
    56586: (f, c, o) => {
      o.d(c, { w: () => C });
      var s = o(45773),
        l = o(65879);
      let C = (() => {
        class i {}
        return (
          (i.ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵdir = l.lG2({ type: i, selectors: [['', 'prizmDocHost', '']], features: [l._Bn([s.R])] })),
          i
        );
      })();
    },
  },
]);
