'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [24743],
  {
    24743: (A, c, o) => {
      o.r(c), o.d(c, { CarouselExampleModule: () => oe });
      var p = o(96814),
        m = o(60095),
        C = o(75187),
        i = o(21004),
        s = o(70169),
        e = o(65879),
        P = o(8221),
        y = o(30990),
        f = o(83419),
        E = o(78905),
        T = o(63796),
        v = o(75987),
        Z = o(43015),
        D = o(56586),
        M = o(57679),
        z = o(19963),
        d = o(76153),
        x = o(18218),
        h = o(26587),
        g = o(47088),
        J = o(42227),
        I = o(19947);
      let Q = (() => {
        class t {
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
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
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
                (e.TgZ(0, 'prizm-input-layout', 0)(1, 'button', 1),
                e.NdJ('click', function () {
                  return a.prev();
                }),
                e.qZA(),
                e.TgZ(2, 'input', 2, 3),
                e.NdJ('valueChanged', function (u) {
                  return a.setValue(u);
                }),
                e.qZA(),
                e.TgZ(4, 'button', 4),
                e.NdJ('click', function () {
                  return a.next();
                }),
                e.qZA()()),
                2 & n &&
                  (e.Q6J(
                    'label',
                    '\u0418\u043d\u043f\u0443\u0442 \u043a\u0430\u043a \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u044c'
                  )('size', 'l')('outer', !0)('position', 'center'),
                  e.xp6(1),
                  e.Q6J('interactive', !0),
                  e.xp6(1),
                  e.Q6J('value', a.carouselData[a.currentIndex]),
                  e.xp6(2),
                  e.Q6J('interactive', !0));
            },
            dependencies: [d.C, J.f, I.l],
            changeDetection: 0,
          })),
          t
        );
      })();
      function U(t, r) {
        1 & t && e._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      let H = (() => {
        class t {
          constructor() {
            this.carouselContent = new s.ZKb([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n, a) => n === a);
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-carousel-basic-example']],
            decls: 7,
            vars: 10,
            consts: [
              [3, 'label', 'size', 'outer', 'position'],
              ['prizm-input-left', '', 3, 'carousel'],
              [3, 'required', 'carouselContent', 'value'],
              ['carousel', ''],
              ['prizm-input-right', '', 3, 'carousel'],
              ['prizmInputStatusText', ''],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.TgZ(0, 'prizm-input-layout', 0),
                  e._UZ(1, 'prizm-carousel-auxiliary-left', 1),
                  e.TgZ(2, 'prizm-carousel', 2, 3),
                  e._uU(4),
                  e.qZA(),
                  e._UZ(5, 'prizm-carousel-auxiliary-right', 4),
                  e.YNc(6, U, 1, 0, 'ng-template', 5),
                  e.qZA()),
                2 & n)
              ) {
                const l = e.MAs(3);
                e.Q6J('label', '\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c')('size', 'l')('outer', !0)(
                  'position',
                  'center'
                ),
                  e.xp6(1),
                  e.Q6J('carousel', l),
                  e.xp6(1),
                  e.Q6J('required', !0)('carouselContent', a.carouselContent)('value', 5),
                  e.xp6(2),
                  e.hij(' ', a.carouselContent.currentValue, ' '),
                  e.xp6(1),
                  e.Q6J('carousel', l);
              }
            },
            dependencies: [z.E, d.C, x.A, h._, g.p],
            changeDetection: 0,
          })),
          t
        );
      })();
      function V(t, r) {
        1 & t && e._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      let N = (() => {
        class t {
          constructor() {
            this.carouselContent = new s.ZKb([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n, a) => n === a);
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-carousel-light-example']],
            decls: 7,
            vars: 11,
            consts: [
              [3, 'label', 'size', 'outer', 'position'],
              ['prizm-input-left', '', 3, 'carousel'],
              [3, 'required', 'carouselContent', 'value', 'lightMode'],
              ['carousel', ''],
              ['prizm-input-right', '', 3, 'carousel'],
              ['prizmInputStatusText', ''],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.TgZ(0, 'prizm-input-layout', 0),
                  e._UZ(1, 'prizm-carousel-auxiliary-left', 1),
                  e.TgZ(2, 'prizm-carousel', 2, 3),
                  e._uU(4),
                  e.qZA(),
                  e._UZ(5, 'prizm-carousel-auxiliary-right', 4),
                  e.YNc(6, V, 1, 0, 'ng-template', 5),
                  e.qZA()),
                2 & n)
              ) {
                const l = e.MAs(3);
                e.Q6J('label', '\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c')('size', 'l')('outer', !0)(
                  'position',
                  'center'
                ),
                  e.xp6(1),
                  e.Q6J('carousel', l),
                  e.xp6(1),
                  e.Q6J('required', !0)('carouselContent', a.carouselContent)('value', 2)('lightMode', !0),
                  e.xp6(2),
                  e.hij(' ', a.carouselContent.currentValue, ' '),
                  e.xp6(1),
                  e.Q6J('carousel', l);
              }
            },
            dependencies: [z.E, d.C, x.A, h._, g.p],
            changeDetection: 0,
          })),
          t
        );
      })();
      function O(t, r) {
        1 & t && e._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      let B = (() => {
          class t {
            constructor() {
              this.arrayWithObjects = new s.ZKb(
                [
                  { id: 1, title: 'title 1', description: 'description 1' },
                  { id: 2, title: 'title 2', description: 'description 2' },
                  { id: 3, title: 'title 3', description: 'description 3' },
                ],
                (n, a) => n.id === a.id
              );
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-carousel-array-of-objects-example']],
              decls: 7,
              vars: 10,
              consts: [
                [3, 'label', 'size', 'outer', 'position'],
                ['prizm-input-left', '', 3, 'carousel'],
                [3, 'required', 'carouselContent', 'value'],
                ['carousel', ''],
                ['prizm-input-right', '', 3, 'carousel'],
                ['prizmInputStatusText', ''],
              ],
              template: function (n, a) {
                if (
                  (1 & n &&
                    (e.TgZ(0, 'prizm-input-layout', 0),
                    e._UZ(1, 'prizm-carousel-auxiliary-left', 1),
                    e.TgZ(2, 'prizm-carousel', 2, 3),
                    e._uU(4),
                    e.qZA(),
                    e._UZ(5, 'prizm-carousel-auxiliary-right', 4),
                    e.YNc(6, O, 1, 0, 'ng-template', 5),
                    e.qZA()),
                  2 & n)
                ) {
                  const l = e.MAs(3);
                  e.Q6J('label', '\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c')('size', 'l')(
                    'outer',
                    !0
                  )('position', 'center'),
                    e.xp6(1),
                    e.Q6J('carousel', l),
                    e.xp6(1),
                    e.Q6J('required', !0)('carouselContent', a.arrayWithObjects)(
                      'value',
                      a.arrayWithObjects.set[0]
                    ),
                    e.xp6(2),
                    e.hij(' ', a.arrayWithObjects.currentValue.title, ' '),
                    e.xp6(1),
                    e.Q6J('carousel', l);
                }
              },
              dependencies: [z.E, d.C, x.A, h._, g.p],
              changeDetection: 0,
            })),
            t
          );
        })(),
        K = (() => {
          class t {
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
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵpipe = e.Yjl({ name: 'prizmMonthExample', type: t, pure: !0 })),
            t
          );
        })();
      function Y(t, r) {
        if ((1 & t && (e.ynx(0), e._uU(1), e.ALo(2, 'prizmMonthExample'), e.BQk()), 2 & t)) {
          const n = r.ngIf;
          e.xp6(1), e.AsE(' ', e.lcZ(2, 2, n.month), ' ', n.year, ' ');
        }
      }
      function j(t, r) {
        1 & t && e._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      let L = (() => {
        class t {
          constructor() {
            this.carouselContent = new s.SFD();
            const n = new Date();
            this.currentValue = { year: n.getFullYear(), month: n.getMonth() + 1 };
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-carousel-year-month-example']],
            decls: 7,
            vars: 10,
            consts: [
              [3, 'label', 'size', 'outer', 'position'],
              ['prizm-input-left', '', 3, 'carousel'],
              [3, 'required', 'carouselContent', 'value'],
              ['carousel', ''],
              [4, 'ngIf'],
              ['prizm-input-right', '', 3, 'carousel'],
              ['prizmInputStatusText', ''],
            ],
            template: function (n, a) {
              if (
                (1 & n &&
                  (e.TgZ(0, 'prizm-input-layout', 0),
                  e._UZ(1, 'prizm-carousel-auxiliary-left', 1),
                  e.TgZ(2, 'prizm-carousel', 2, 3),
                  e.YNc(4, Y, 3, 4, 'ng-container', 4),
                  e.qZA(),
                  e._UZ(5, 'prizm-carousel-auxiliary-right', 5),
                  e.YNc(6, j, 1, 0, 'ng-template', 6),
                  e.qZA()),
                2 & n)
              ) {
                const l = e.MAs(3);
                e.Q6J('label', '\u041a\u0430\u0440\u0443\u0441\u0435\u043b\u044c')('size', 'l')('outer', !0)(
                  'position',
                  'center'
                ),
                  e.xp6(1),
                  e.Q6J('carousel', l),
                  e.xp6(1),
                  e.Q6J('required', !0)('carouselContent', a.carouselContent)('value', a.currentValue),
                  e.xp6(2),
                  e.Q6J('ngIf', a.carouselContent.currentValue),
                  e.xp6(1),
                  e.Q6J('carousel', l);
              }
            },
            dependencies: [p.O5, z.E, d.C, x.A, h._, g.p, K],
            changeDetection: 0,
          })),
          t
        );
      })();
      function F(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-carousel-basic-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-carousel-light-example'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-carousel-array-of-objects-example'),
            e.qZA(),
            e.TgZ(6, 'prizm-doc-example', 7),
            e._UZ(7, 'prizm-carousel-year-month-example'),
            e.qZA(),
            e.TgZ(8, 'prizm-doc-example', 8),
            e._UZ(9, 'prizm-input-as-carousel-example'),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw();
          e.Q6J('content', n.zyfraCarouselBasicExample),
            e.xp6(2),
            e.Q6J('content', n.zyfraCarouselLightExample),
            e.xp6(2),
            e.Q6J('content', n.zyfraCarouselArrayofObjectsExample),
            e.xp6(2),
            e.Q6J('content', n.zyfraCarouselYearMonthExample),
            e.xp6(2),
            e.Q6J('content', n.carouselAsInputExample);
        }
      }
      function S(t, r) {
        1 & t && e._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      function R(t, r) {
        1 & t && e._uU(0, ' Value ');
      }
      function W(t, r) {
        1 & t && e._uU(0, ' Required ');
      }
      function G(t, r) {
        1 & t && e._uU(0, ' Disabled ');
      }
      function b(t, r) {
        1 & t && e._uU(0, ' LightMode ');
      }
      function X(t, r) {
        1 & t && e._uU(0, ' Carousel Content ');
      }
      function $(t, r) {
        1 & t && e._uU(0, ' Carousel ');
      }
      function q(t, r) {
        1 & t && e._uU(0, ' Carousel ');
      }
      const _ = function () {
        return [1, 5, 10];
      };
      function w(t, r) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'prizm-input-layout', 9),
            e._UZ(2, 'prizm-carousel-auxiliary-left', 10, 11),
            e.TgZ(4, 'prizm-carousel', 12, 13),
            e._uU(6),
            e.qZA(),
            e._UZ(7, 'prizm-carousel-auxiliary-right', 14, 15),
            e.YNc(9, S, 1, 0, 'ng-template', 16),
            e.qZA()(),
            e.TgZ(10, 'prizm-doc-documentation', 17),
            e.YNc(11, R, 1, 0, 'ng-template', 18),
            e.NdJ('documentationPropertyValueChange', function (l) {
              e.CHM(n);
              const u = e.oxw();
              return e.KtG((u.value = l));
            }),
            e.YNc(12, W, 1, 0, 'ng-template', 19),
            e.NdJ('documentationPropertyValueChange', function (l) {
              e.CHM(n);
              const u = e.oxw();
              return e.KtG((u.required = l));
            }),
            e.YNc(13, G, 1, 0, 'ng-template', 20),
            e.NdJ('documentationPropertyValueChange', function (l) {
              e.CHM(n);
              const u = e.oxw();
              return e.KtG((u.disabled = l));
            }),
            e.YNc(14, b, 1, 0, 'ng-template', 21),
            e.NdJ('documentationPropertyValueChange', function (l) {
              e.CHM(n);
              const u = e.oxw();
              return e.KtG((u.lightMode = l));
            }),
            e.YNc(15, X, 1, 0, 'ng-template', 22),
            e.NdJ('documentationPropertyValueChange', function (l) {
              e.CHM(n);
              const u = e.oxw();
              return e.KtG((u.carouselContent = l));
            }),
            e.qZA(),
            e.TgZ(16, 'prizm-doc-documentation', 23),
            e.YNc(17, $, 1, 0, 'ng-template', 24),
            e.qZA(),
            e.TgZ(18, 'prizm-doc-documentation', 25),
            e.YNc(19, q, 1, 0, 'ng-template', 24),
            e.qZA();
        }
        if (2 & t) {
          const n = e.MAs(3),
            a = e.MAs(5),
            l = e.MAs(8),
            u = e.oxw();
          e.xp6(1),
            e.Q6J('label', u.label)('size', u.size)('status', u.status)('outer', u.outer)(
              'position',
              'center'
            ),
            e.xp6(1),
            e.Q6J('prizmDocHostElement', n)('carousel', a),
            e.xp6(2),
            e.Q6J('prizmDocHostElement', a)('disabled', u.disabled)('formControl', u.control)(
              'required',
              u.required
            )('carouselContent', u.carouselContent)('lightMode', u.lightMode)('value', u.value),
            e.xp6(2),
            e.hij(' ', u.carouselContent.currentValue, ' '),
            e.xp6(1),
            e.Q6J('prizmDocHostElement', l)('carousel', a),
            e.xp6(3),
            e.Q6J('control', u.control)('hasTestId', !0),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', u.value)('documentationPropertyValues', e.DdM(30, _))(
              'documentationPropertyDeprecated',
              !0
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', u.required)('documentationPropertyDeprecated', !0),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', u.disabled)('documentationPropertyDeprecated', !0),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', u.lightMode),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', u.carouselContent),
            e.xp6(1),
            e.Q6J('hasTestId', !1),
            e.xp6(2),
            e.Q6J('hasTestId', !1);
        }
      }
      function k(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 26)(1, 'li')(2, 'p'),
            e._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmCarouselModule'),
            e.qZA(),
            e._uU(
              6,
              ' \u0432 \u0442\u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 '
            ),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 27),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(7), e.Q6J('code', n.setupModule);
        }
      }
      let ee = (() => {
          class t {
            constructor() {
              (this.value = 5),
                (this.formControl = new m.p4()),
                (this.label = '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
                (this.placeholder = ''),
                (this.size = 'l'),
                (this.sizesOuter = ['l', 'm', 's']),
                (this.sizesInner = ['l', 'm']),
                (this.disabled = !1),
                (this.control = new m.p4()),
                (this.status = 'default'),
                (this.statuses = ['default', 'success', 'warning', 'danger']),
                (this.required = !1),
                (this.carouselContent = new s.ZKb([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n, a) => n === a)),
                (this.lightMode = !1),
                (this.zyfraCarouselBasicExample = {
                  TypeScript: o.e(88477).then(o.t.bind(o, 88477, 17)),
                  HTML: o.e(84124).then(o.t.bind(o, 84124, 17)),
                }),
                (this.zyfraCarouselLightExample = {
                  TypeScript: o.e(84738).then(o.t.bind(o, 84738, 17)),
                  HTML: o.e(42791).then(o.t.bind(o, 42791, 17)),
                }),
                (this.zyfraCarouselArrayofObjectsExample = {
                  TypeScript: o.e(94033).then(o.t.bind(o, 94033, 17)),
                  HTML: o.e(53086).then(o.t.bind(o, 53086, 17)),
                }),
                (this.zyfraCarouselYearMonthExample = {
                  TypeScript: o.e(70606).then(o.t.bind(o, 70606, 17)),
                  HTML: o.e(80324).then(o.t.bind(o, 80324, 17)),
                  PIPE: o.e(26712).then(o.t.bind(o, 26712, 17)),
                }),
                (this.carouselAsInputExample = {
                  Module: o.e(13441).then(o.t.bind(o, 13441, 17)),
                  Component: o.e(46960).then(o.t.bind(o, 46960, 17)),
                  HTML: o.e(86405).then(o.t.bind(o, 86405, 17)),
                }),
                (this.setupModule = o.e(42217).then(o.t.bind(o, 42217, 17)));
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-carousel-example']],
              decls: 6,
              vars: 0,
              consts: [
                ['header', 'Carousel'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'basic', 'heading', 'Basic example', 3, 'content'],
                ['id', 'light', 'heading', 'Carousel light example', 3, 'content'],
                ['id', 'objects-array', 'heading', 'Carousel array of objects example', 3, 'content'],
                ['id', 'select-month', 'heading', 'Carousel select month example', 3, 'content'],
                ['id', 'input-carousel', 'heading', 'Input carousel', 3, 'content'],
                [3, 'label', 'size', 'status', 'outer', 'position'],
                [
                  'prizmDocHostElementKey',
                  'PrizmCarouselAuxiliaryLeftComponent',
                  'prizm-input-left',
                  '',
                  3,
                  'prizmDocHostElement',
                  'carousel',
                ],
                ['PrizmCarouselAuxiliaryLeftComponent', ''],
                [
                  'prizmDocHostElementKey',
                  'PrizmCarouselComponent',
                  3,
                  'prizmDocHostElement',
                  'disabled',
                  'formControl',
                  'required',
                  'carouselContent',
                  'lightMode',
                  'value',
                ],
                ['carousel', ''],
                [
                  'prizmDocHostElementKey',
                  'PrizmCarouselAuxiliaryRightComponent',
                  'prizm-input-right',
                  '',
                  3,
                  'prizmDocHostElement',
                  'carousel',
                ],
                ['prizmCarouselAuxiliaryRight', ''],
                ['prizmInputStatusText', ''],
                [
                  'heading',
                  'PrizmCarouselComponent',
                  'hostComponentKey',
                  'PrizmCarouselComponent',
                  3,
                  'control',
                  'hasTestId',
                ],
                [
                  'documentationPropertyName',
                  'value',
                  'documentationPropertyType',
                  'string',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyDeprecated',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'required',
                  'documentationPropertyType',
                  'boolean',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyDeprecated',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'disabled',
                  'documentationPropertyType',
                  'boolean',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyDeprecated',
                  'documentationPropertyValueChange',
                ],
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
                  'PrizmCarouselContent',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'heading',
                  'PrizmCarouselAuxiliaryLeftComponent',
                  'hostComponentKey',
                  'PrizmCarouselAuxiliaryLeftComponent',
                  3,
                  'hasTestId',
                ],
                [
                  'documentationPropertyName',
                  'carousel',
                  'documentationPropertyType',
                  'PrizmCarouselComponent',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'heading',
                  'PrizmCarouselAuxiliaryRightComponent',
                  'hostComponentKey',
                  'PrizmCarouselAuxiliaryRightComponent',
                  3,
                  'hasTestId',
                ],
                [1, 'b-demo-steps'],
                ['filename', 'MyComponent.module.ts', 3, 'code'],
              ],
              template: function (n, a) {
                1 & n &&
                  (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  e._uU(
                    2,
                    ' It is a deprecated component, instead of this use PrizmInputCarouselComponent. Our multi-select '
                  ),
                  e.qZA(),
                  e.YNc(3, F, 10, 5, 'ng-template', 2),
                  e.YNc(4, w, 20, 31, 'ng-template', 3),
                  e.YNc(5, k, 8, 1, 'ng-template', 2),
                  e.qZA());
              },
              dependencies: [
                P.c,
                y.F,
                f.K,
                E.N,
                T.W,
                v.l,
                Z.a,
                D.w,
                M.k,
                m.JJ,
                m.Q7,
                m.oH,
                z.E,
                d.C,
                x.A,
                h._,
                g.p,
                Q,
                H,
                N,
                B,
                L,
              ],
              changeDetection: 0,
            })),
            t
          );
        })(),
        te = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.oAB({ type: t })),
            (t.ɵinj = e.cJS({ imports: [s.Rgy, s.Qjd] })),
            t
          );
        })(),
        oe = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.oAB({ type: t })),
            (t.ɵinj = e.cJS({ imports: [p.ez, i.Qp, C.Bz.forChild((0, i.GB)(ee)), m.UX, m.u5, s.e6U, te] })),
            t
          );
        })();
    },
    57679: (A, c, o) => {
      o.d(c, { k: () => C });
      var p = o(65879),
        m = o(45773);
      let C = (() => {
        class i {
          constructor(e) {
            (this.hostElementService = e), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const e = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              P = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const y in e) this.hostElementService.setHostElement(e[y], P[y]);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(p.Y36(m.R));
          }),
          (i.ɵdir = p.lG2({
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
    56586: (A, c, o) => {
      o.d(c, { w: () => C });
      var p = o(45773),
        m = o(65879);
      let C = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵdir = m.lG2({ type: i, selectors: [['', 'prizmDocHost', '']], features: [m._Bn([p.R])] })),
          i
        );
      })();
    },
  },
]);
