'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [42301],
  {
    42301: (C, g, p) => {
      p.r(g), p.d(g, { DialogExampleModule: () => We });
      var _ = p(96814),
        d = p(21004),
        P = p(75187),
        l = p(70169),
        m = p(60095),
        u = p(97582),
        f = p(73864),
        V = p(95102),
        e = p(65879),
        T = p(8221),
        v = p(30990),
        h = p(83419),
        y = p(78905),
        D = p(63796),
        b = p(75987),
        E = p(43015),
        z = p(56586),
        c = p(4377);
      const N = ['outerHeaderTemp'];
      function J(t, r) {
        1 & t && e._uU(0, ' Position ');
      }
      function H(t, r) {
        1 & t && e._uU(0, ' Dismissible ');
      }
      function M(t, r) {
        1 & t && e._uU(0, ' Backdrop ');
      }
      function S(t, r) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'div', 7)(1, 'div'),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, 'button', 8),
            e.NdJ('click', function () {
              const o = e.CHM(n).completeWith;
              return e.KtG(o(!0));
            }),
            e._uU(4),
            e.qZA()();
        }
        if (2 & t) {
          const n = r.context,
            i = r.closeWord,
            a = r.header;
          e.xp6(2), e.AsE('', a, ' #', n.customNumber, ''), e.xp6(2), e.Oqu(i);
        }
      }
      let U = (() => {
        class t {
          constructor(n) {
            (this.dialogService = n),
              (this.positionVariants = Object.values(l.tA)),
              (this.position = this.positionVariants[1]),
              (this.backdrop = !1),
              (this.dismissible = !0);
          }
          show() {
            this.dialogService
              .open(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                {
                  closeable: !0,
                  outerHeader: this.outerHeaderTemp,
                  width: 500,
                  header: '\u041e\u043a\u043d\u043e',
                  closeWord: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c',
                  context: { customNumber: 1 },
                  position: this.position,
                  dismissible: this.dismissible,
                  backdrop: this.backdrop,
                  size: 'm',
                }
              )
              .subscribe();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.Y36(l.UYw));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-dialog-outer-header-example']],
            viewQuery: function (n, i) {
              if ((1 & n && e.Gf(N, 5, e.Rgc), 2 & n)) {
                let a;
                e.iGM((a = e.CRH())) && (i.outerHeaderTemp = a.first);
              }
            },
            decls: 9,
            vars: 5,
            consts: [
              ['type', 'button', 'prizmButton', '', 3, 'click'],
              [2, 'margin-top', '16px'],
              [3, 'hasTestId'],
              [
                'documentationPropertyName',
                'position',
                'documentationPropertyType',
                'PrizmOverlayInsidePlacement',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'dismissible',
                'documentationPropertyType',
                'boolean',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'backdrop',
                'documentationPropertyType',
                'boolean',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              ['outerHeaderTemp', ''],
              [1, 'header'],
              ['prizmButton', '', 'appearance', 'primary', 'size', 's', 3, 'click'],
            ],
            template: function (n, i) {
              1 & n &&
                (e.TgZ(0, 'button', 0),
                e.NdJ('click', function () {
                  return i.show();
                }),
                e._uU(1, 'Show Dialog'),
                e.qZA(),
                e.TgZ(2, 'div', 1)(3, 'prizm-doc-documentation', 2),
                e.YNc(4, J, 1, 0, 'ng-template', 3),
                e.NdJ('documentationPropertyValueChange', function (o) {
                  return (i.position = o);
                }),
                e.YNc(5, H, 1, 0, 'ng-template', 4),
                e.NdJ('documentationPropertyValueChange', function (o) {
                  return (i.dismissible = o);
                }),
                e.YNc(6, M, 1, 0, 'ng-template', 5),
                e.NdJ('documentationPropertyValueChange', function (o) {
                  return (i.backdrop = o);
                }),
                e.qZA()(),
                e.YNc(7, S, 5, 3, 'ng-template', null, 6, e.W1O)),
                2 & n &&
                  (e.xp6(3),
                  e.Q6J('hasTestId', !1),
                  e.xp6(1),
                  e.Q6J('documentationPropertyValue', i.position)(
                    'documentationPropertyValues',
                    i.positionVariants
                  ),
                  e.xp6(1),
                  e.Q6J('documentationPropertyValue', i.dismissible),
                  e.xp6(1),
                  e.Q6J('documentationPropertyValue', i.backdrop));
            },
            dependencies: [h.K, y.N, c.K],
            styles: [
              '.box[_ngcontent-%COMP%]{display:flex;gap:1rem}.header[_ngcontent-%COMP%]{border-bottom:1px solid var(--prizm-v3-background-stroke);padding:var(--prizm-dialog-header-padding, 14px 16px);display:flex;justify-content:space-between;font-style:var(--prizm-dialog-header-font-style, normal);font-weight:var(--prizm-dialog-header-font-weight, 600);font-size:var(--prizm-dialog-header-font-size, var(--prizm-dialog-font-size, 14px));color:var(--prizm-dialog-header-text, var(--prizm-v3-text-icon-primary))}',
            ],
          })),
          t
        );
      })();
      function Z(t, r) {
        1 & t && e._uU(0, ' Position ');
      }
      function w(t, r) {
        1 & t && e._uU(0, ' Dismissible ');
      }
      function W(t, r) {
        1 & t && e._uU(0, ' Backdrop ');
      }
      let A = (() => {
        class t {
          constructor(n) {
            (this.dialogService = n),
              (this.positionVariants = Object.values(l.tA)),
              (this.position = this.positionVariants[1]),
              (this.backdrop = !1),
              (this.dismissible = !0);
          }
          show() {
            this.dialogService
              .open(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                {
                  closeable: !0,
                  header: 'Header',
                  width: 500,
                  closeWord: '\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c',
                  position: this.position,
                  dismissible: this.dismissible,
                  backdrop: this.backdrop,
                  size: 'm',
                }
              )
              .subscribe();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.Y36(l.UYw));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-dialog-service-example']],
            decls: 7,
            vars: 5,
            consts: [
              ['type', 'button', 'prizmButton', '', 3, 'click'],
              [2, 'margin-top', '16px'],
              [3, 'hasTestId'],
              [
                'documentationPropertyName',
                'position',
                'documentationPropertyType',
                'PrizmOverlayInsidePlacement',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'dismissible',
                'documentationPropertyType',
                'boolean',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'backdrop',
                'documentationPropertyType',
                'boolean',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
            ],
            template: function (n, i) {
              1 & n &&
                (e.TgZ(0, 'button', 0),
                e.NdJ('click', function () {
                  return i.show();
                }),
                e._uU(1, 'Show Dialog'),
                e.qZA(),
                e.TgZ(2, 'div', 1)(3, 'prizm-doc-documentation', 2),
                e.YNc(4, Z, 1, 0, 'ng-template', 3),
                e.NdJ('documentationPropertyValueChange', function (o) {
                  return (i.position = o);
                }),
                e.YNc(5, w, 1, 0, 'ng-template', 4),
                e.NdJ('documentationPropertyValueChange', function (o) {
                  return (i.dismissible = o);
                }),
                e.YNc(6, W, 1, 0, 'ng-template', 5),
                e.NdJ('documentationPropertyValueChange', function (o) {
                  return (i.backdrop = o);
                }),
                e.qZA()()),
                2 & n &&
                  (e.xp6(3),
                  e.Q6J('hasTestId', !1),
                  e.xp6(1),
                  e.Q6J('documentationPropertyValue', i.position)(
                    'documentationPropertyValues',
                    i.positionVariants
                  ),
                  e.xp6(1),
                  e.Q6J('documentationPropertyValue', i.dismissible),
                  e.xp6(1),
                  e.Q6J('documentationPropertyValue', i.backdrop));
            },
            dependencies: [h.K, y.N, c.K],
            styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
          })),
          t
        );
      })();
      const Q = ['footerTemp'];
      function Y(t, r) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'button', 2),
            e.NdJ('click', function () {
              const o = e.CHM(n).completeWith;
              return e.KtG(o(!0));
            }),
            e._uU(1, '\u0417\u0430\u043a\u0440\u044b\u0442\u044c'),
            e.qZA();
        }
      }
      let O = (() => {
        class t {
          constructor(n) {
            (this.dialogService = n),
              (this.positionVariants = Object.values(l.tA)),
              (this.position = this.positionVariants[1]),
              (this.backdrop = !1);
          }
          show() {
            this.dialogService
              .open(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                {
                  closeable: !0,
                  header: 'Header',
                  width: 500,
                  footer: this.footerTemp,
                  closeWord: '\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c',
                  position: this.position,
                  backdrop: this.backdrop,
                  size: 'm',
                }
              )
              .subscribe();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.Y36(l.UYw));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-dialog-service-with-buttons-example']],
            viewQuery: function (n, i) {
              if ((1 & n && e.Gf(Q, 5, e.Rgc), 2 & n)) {
                let a;
                e.iGM((a = e.CRH())) && (i.footerTemp = a.first);
              }
            },
            decls: 4,
            vars: 0,
            consts: [
              ['type', 'button', 'prizmButton', '', 3, 'click'],
              ['footerTemp', ''],
              ['prizmButton', '', 'appearance', 'primary', 'size', 'xl', 3, 'click'],
            ],
            template: function (n, i) {
              1 & n &&
                (e.TgZ(0, 'button', 0),
                e.NdJ('click', function () {
                  return i.show();
                }),
                e._uU(1, 'Show Dialog'),
                e.qZA(),
                e.YNc(2, Y, 2, 0, 'ng-template', null, 1, e.W1O));
            },
            dependencies: [c.K],
            styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
          })),
          t
        );
      })();
      var x = p(76153),
        B = p(18218),
        G = p(22137);
      const K = ['contentExample'],
        R = ['parentPanel'];
      function F(t, r) {
        1 & t && e._uU(0, 'dddd');
      }
      function I(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'h4'),
            e._uU(1, 'Check Dropdown Host Parent Container And Position'),
            e.qZA(),
            e.TgZ(2, 'prizm-input-layout', 9),
            e._UZ(3, 'prizm-input-select', 10, 11),
            e.YNc(5, F, 1, 0, 'ng-template', 12),
            e.qZA()),
          2 & t)
        ) {
          const n = e.MAs(4),
            i = e.oxw();
          e.xp6(3), e.Q6J('formControl', i.control)('items', i.items), e.xp6(2), e.Q6J('control', n);
        }
      }
      function k(t, r) {
        1 & t && e._uU(0, ' Position ');
      }
      function L(t, r) {
        1 & t && e._uU(0, ' Dismissible ');
      }
      function j(t, r) {
        1 & t && e._uU(0, ' Backdrop ');
      }
      let X = (() => {
        class t {
          constructor(n) {
            (this.dialogService = n),
              (this.positionVariants = Object.values(l.tA)),
              (this.position = this.positionVariants[1]),
              (this.backdrop = !1),
              (this.dismissible = !0),
              (this.items = [
                'One',
                'Two',
                'Three',
                'Very long text with a lot of characters and spaces and other stuff and things',
              ]),
              (this.control = new m.NI(this.items[1], [m.kI.required]));
          }
          show() {
            this.dialogService
              .open(this.contentExample, {
                closeable: !0,
                header: 'Header',
                width: 500,
                closeWord: '\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c',
                position: this.position,
                dismissible: this.dismissible,
                parentContainer: this.parentPanel.nativeElement,
                backdrop: this.backdrop,
                size: 'm',
                styleVars: { dialogContentPadding: '5px 10px 25px 20px' },
              })
              .subscribe();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.Y36(l.UYw));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-dialog-service-with-parent-example']],
            viewQuery: function (n, i) {
              if ((1 & n && (e.Gf(K, 5), e.Gf(R, 5)), 2 & n)) {
                let a;
                e.iGM((a = e.CRH())) && (i.contentExample = a.first),
                  e.iGM((a = e.CRH())) && (i.parentPanel = a.first);
              }
            },
            decls: 11,
            vars: 5,
            consts: [
              ['type', 'button', 'prizmButton', '', 3, 'click'],
              [
                2,
                'height',
                '400px',
                'margin',
                '10px 0',
                'position',
                'relative',
                'border',
                '1px solid var(--tui-base-03)',
                'border-radius',
                'var(--tui-radius-m)',
              ],
              ['parentPanel', ''],
              ['contentExample', ''],
              [2, 'margin-top', '16px'],
              [3, 'hasTestId'],
              [
                'documentationPropertyName',
                'position',
                'documentationPropertyType',
                'PrizmOverlayInsidePlacement',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'dismissible',
                'documentationPropertyType',
                'boolean',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'backdrop',
                'documentationPropertyType',
                'boolean',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              ['label', 'Validators'],
              [3, 'formControl', 'items'],
              ['input', ''],
              ['prizmInputStatusText', '', 3, 'control'],
            ],
            template: function (n, i) {
              1 & n &&
                (e.TgZ(0, 'button', 0),
                e.NdJ('click', function () {
                  return i.show();
                }),
                e._uU(1, 'Show Dialog'),
                e.qZA(),
                e._UZ(2, 'div', 1, 2),
                e.YNc(4, I, 6, 3, 'ng-template', null, 3, e.W1O),
                e.TgZ(6, 'div', 4)(7, 'prizm-doc-documentation', 5),
                e.YNc(8, k, 1, 0, 'ng-template', 6),
                e.NdJ('documentationPropertyValueChange', function (o) {
                  return (i.position = o);
                }),
                e.YNc(9, L, 1, 0, 'ng-template', 7),
                e.NdJ('documentationPropertyValueChange', function (o) {
                  return (i.dismissible = o);
                }),
                e.YNc(10, j, 1, 0, 'ng-template', 8),
                e.NdJ('documentationPropertyValueChange', function (o) {
                  return (i.backdrop = o);
                }),
                e.qZA()()),
                2 & n &&
                  (e.xp6(7),
                  e.Q6J('hasTestId', !1),
                  e.xp6(1),
                  e.Q6J('documentationPropertyValue', i.position)(
                    'documentationPropertyValues',
                    i.positionVariants
                  ),
                  e.xp6(1),
                  e.Q6J('documentationPropertyValue', i.dismissible),
                  e.xp6(1),
                  e.Q6J('documentationPropertyValue', i.backdrop));
            },
            dependencies: [h.K, y.N, m.JJ, m.oH, x.C, B.A, c.K, G.$],
            styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
          })),
          t
        );
      })();
      var $ = p(19947);
      const q = ['footerTemp'],
        ee = ['content'];
      function te(t, r) {
        if ((1 & t && (e.TgZ(0, 'div'), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw();
          e.xp6(1), e.hij(' ', '\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: ' + n.result, '\n');
        }
      }
      function oe(t, r) {
        if (
          (1 & t && (e.TgZ(0, 'div', 4)(1, 'prizm-input-layout', 5), e._UZ(2, 'input', 6, 7), e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(2), e.Q6J('formControl', n.control);
        }
      }
      function ne(t, r) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'div', 8)(1, 'button', 9),
            e.NdJ('click', function () {
              const o = e.CHM(n).completeWith;
              return e.KtG(o(null));
            }),
            e._uU(2, '\u0417\u0430\u043a\u0440\u044b\u0442\u044c'),
            e.qZA(),
            e.TgZ(3, 'button', 9),
            e.NdJ('click', function () {
              const o = e.CHM(n).completeWith,
                Ae = e.oxw();
              return e.KtG(o(Ae.control.value));
            }),
            e._uU(4, ' \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c '),
            e.qZA()();
        }
      }
      let ae = (() => {
        class t {
          constructor(n) {
            (this.dialogService = n),
              (this.positionVariants = Object.values(l.tA)),
              (this.position = this.positionVariants[1]),
              (this.control = new m.p4(''));
          }
          show() {
            this.dialogService
              .open(this.content, {
                closeable: !0,
                header: 'Header',
                width: 500,
                footer: this.footerTemp,
                position: this.position,
                backdrop: !1,
                size: 'm',
              })
              .subscribe(n => {
                (this.result = n), this.control.reset();
              });
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.Y36(l.UYw));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-dialog-service-result-handling-example']],
            viewQuery: function (n, i) {
              if ((1 & n && (e.Gf(q, 5, e.Rgc), e.Gf(ee, 5, e.Rgc)), 2 & n)) {
                let a;
                e.iGM((a = e.CRH())) && (i.footerTemp = a.first),
                  e.iGM((a = e.CRH())) && (i.content = a.first);
              }
            },
            decls: 9,
            vars: 1,
            consts: [
              ['type', 'button', 'prizmButton', '', 3, 'click'],
              [4, 'ngIf'],
              ['content', ''],
              ['footerTemp', ''],
              [1, 'content'],
              ['label', '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'],
              [
                'prizmInput',
                '',
                'placeholder',
                '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442',
                3,
                'formControl',
              ],
              ['input', ''],
              [1, 'box'],
              ['prizmButton', '', 'appearance', 'primary', 'size', 'xl', 3, 'click'],
            ],
            template: function (n, i) {
              1 & n &&
                (e.TgZ(0, 'button', 0),
                e.NdJ('click', function () {
                  return i.show();
                }),
                e._uU(1, '\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433'),
                e.qZA(),
                e._UZ(2, 'br')(3, 'br'),
                e.YNc(4, te, 2, 1, 'div', 1),
                e.YNc(5, oe, 4, 1, 'ng-template', null, 2, e.W1O),
                e.YNc(7, ne, 5, 0, 'ng-template', null, 3, e.W1O)),
                2 & n && (e.xp6(4), e.Q6J('ngIf', i.result));
            },
            dependencies: [_.O5, m.Fj, m.JJ, m.oH, x.C, $.l, c.K],
            styles: [
              '.content[_ngcontent-%COMP%]{padding:8px}.box[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:1rem}',
            ],
          })),
          t
        );
      })();
      function ie(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-dialog-service-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-dialog-outer-header-example'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-dialog-service-with-buttons-example'),
            e.qZA(),
            e.TgZ(6, 'prizm-doc-example', 7),
            e._UZ(7, 'prizm-dialog-service-with-parent-example'),
            e.qZA(),
            e.TgZ(8, 'prizm-doc-example', 8),
            e._UZ(9, 'prizm-dialog-service-result-handling-example'),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw();
          e.Q6J('content', n.exampleBasic),
            e.xp6(2),
            e.Q6J('content', n.exampleBasic),
            e.xp6(2),
            e.Q6J('content', n.exampleWithButtons),
            e.xp6(2),
            e.Q6J('content', n.exampleWithParent),
            e.xp6(2),
            e.Q6J('content', n.exampleResulthandling);
        }
      }
      function re(t, r) {
        1 & t &&
          (e._uU(0, ' Header \u0438\u0437 '),
          e.TgZ(1, 'a', 40),
          e._uU(2, '\u0448\u0430\u0431\u043b\u043e\u043d\u0430'),
          e.qZA());
      }
      function pe(t, r) {
        1 & t &&
          (e._uU(0, ' Content \u0438\u0437 '),
          e.TgZ(1, 'a', 40),
          e._uU(2, '\u0448\u0430\u0431\u043b\u043e\u043d\u0430'),
          e.qZA(),
          e.TgZ(3, 'button', 41),
          e._uU(4, '\u041a\u043d\u043e\u043f\u043a\u0430'),
          e.qZA());
      }
      function le(t, r) {
        if (1 & t) {
          const n = e.EpF();
          e._uU(0, ' Footer \u0438\u0437 '),
            e.TgZ(1, 'i', 42),
            e.NdJ('click', function () {
              const o = e.CHM(n).$implicit;
              return e.KtG(o.next(1));
            }),
            e._uU(2, '\u0448\u0430\u0431\u043b\u043e\u043d\u0430'),
            e.qZA();
        }
      }
      function me(t, r) {
        1 & t && e._uU(0, ' Position ');
      }
      function ue(t, r) {
        1 & t && e._uU(0, ' Size ');
      }
      function ce(t, r) {
        1 & t && e._uU(0, ' Scrollbar Visibility ');
      }
      function se(t, r) {
        1 & t && e._uU(0, ' Backdrop ');
      }
      function de(t, r) {
        1 & t && e._uU(0, ' Height ');
      }
      function ge(t, r) {
        1 & t && e._uU(0, ' Overscroll ');
      }
      function _e(t, r) {
        1 & t && e._uU(0, ' Width ');
      }
      function he(t, r) {
        1 & t && e._uU(0, ' Close Word ');
      }
      function ye(t, r) {
        1 & t && e._uU(0, ' Header ');
      }
      function Pe(t, r) {
        1 & t && e._uU(0, ' Content ');
      }
      function xe(t, r) {
        1 & t &&
          e._uU(
            0,
            " Footer template or button array (PrizmDialogButton) If pass empty string '', footer will not be showed "
          );
      }
      function Ce(t, r) {
        1 & t && e._uU(0, ' Appearance ');
      }
      function fe(t, r) {
        1 & t && e._uU(0, ' AppearanceType ');
      }
      function Ve(t, r) {
        1 & t && e._uU(0, ' Icon ');
      }
      function Te(t, r) {
        1 & t && e._uU(0, ' Right Icon ');
      }
      function ve(t, r) {
        1 & t && e._uU(0, ' Disabled ');
      }
      function De(t, r) {
        1 & t && e._uU(0, ' Show Loader ');
      }
      function be(t, r) {
        1 & t && e._uU(0, ' Pseudo Hovered ');
      }
      function Ee(t, r) {
        1 & t && e._uU(0, ' Pseudo Pressed ');
      }
      function ze(t, r) {
        1 & t && e._uU(0, ' Pseudo Focused ');
      }
      function Ne(t, r) {
        1 & t && e._uU(0, ' Focusable ');
      }
      function Je(t, r) {
        1 & t && e._uU(0, ' Pseudo State ');
      }
      function He(t, r) {
        1 & t && e._uU(0, ' Focused Change ');
      }
      function Me(t, r) {
        1 & t && e._uU(0, ' Pressed Change ');
      }
      function Se(t, r) {
        1 & t && e._uU(0, ' Hovered Change ');
      }
      function Ue(t, r) {
        1 & t && e._uU(0, ' Focus Visible Change ');
      }
      function Ze(t, r) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'button', 9),
            e.NdJ('click', function () {
              e.CHM(n);
              const a = e.oxw();
              return e.KtG(a.show());
            }),
            e._uU(2, ' Show Dialog '),
            e.qZA()(),
            e.YNc(3, re, 3, 0, 'ng-template', null, 10, e.W1O),
            e.YNc(5, pe, 5, 0, 'ng-template', null, 11, e.W1O),
            e.YNc(7, le, 3, 0, 'ng-template', null, 12, e.W1O),
            e.TgZ(9, 'prizm-doc-documentation', 13),
            e.YNc(10, me, 1, 0, 'ng-template', 14),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.position = a));
            }),
            e.YNc(11, ue, 1, 0, 'ng-template', 15),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.size = a));
            }),
            e.YNc(12, ce, 1, 0, 'ng-template', 16),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.visibility = a));
            }),
            e.YNc(13, se, 1, 0, 'ng-template', 17),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.backdrop = a));
            }),
            e.YNc(14, de, 1, 0, 'ng-template', 18),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.height = a));
            }),
            e.YNc(15, ge, 1, 0, 'ng-template', 19),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.overscroll = a));
            }),
            e.YNc(16, _e, 1, 0, 'ng-template', 20),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.width = a));
            }),
            e.YNc(17, he, 1, 0, 'ng-template', 21),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.closeWord = a));
            }),
            e.YNc(18, ye, 1, 0, 'ng-template', 22),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.header = a));
            }),
            e.YNc(19, Pe, 1, 0, 'ng-template', 23),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.content = a));
            }),
            e.YNc(20, xe, 1, 0, 'ng-template', 24),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.footer = a));
            }),
            e.YNc(21, Ce, 1, 0, 'ng-template', 25),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.appearance = a));
            }),
            e.YNc(22, fe, 1, 0, 'ng-template', 26),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.appearanceType = a));
            }),
            e.YNc(23, Ve, 1, 0, 'ng-template', 27),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.icon = a));
            }),
            e.YNc(24, Te, 1, 0, 'ng-template', 28),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.iconRight = a));
            }),
            e.YNc(25, ve, 1, 0, 'ng-template', 29),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.disabled = a));
            }),
            e.YNc(26, De, 1, 0, 'ng-template', 30),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.showLoader = a));
            }),
            e.YNc(27, be, 1, 0, 'ng-template', 31),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.pseudoHovered = a));
            }),
            e.YNc(28, Ee, 1, 0, 'ng-template', 32),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.pseudoPressed = a));
            }),
            e.YNc(29, ze, 1, 0, 'ng-template', 33),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.pseudoFocused = a));
            }),
            e.YNc(30, Ne, 1, 0, 'ng-template', 34),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.focusable = a));
            }),
            e.YNc(31, Je, 1, 0, 'ng-template', 35),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.pseudoState = a));
            }),
            e.YNc(32, He, 1, 0, 'ng-template', 36),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.focusedChange = a));
            }),
            e.YNc(33, Me, 1, 0, 'ng-template', 37),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.pressedChange = a));
            }),
            e.YNc(34, Se, 1, 0, 'ng-template', 38),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.hoveredChange = a));
            }),
            e.YNc(35, Ue, 1, 0, 'ng-template', 39),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(n);
              const o = e.oxw();
              return e.KtG((o.focusVisibleChange = a));
            }),
            e.qZA();
        }
        if (2 & t) {
          const n = e.MAs(4),
            i = e.MAs(6),
            a = e.MAs(8),
            o = e.oxw();
          e.xp6(1),
            e.Q6J('size', o.size)('icon', o.icon)('iconRight', o.iconRight)(
              'appearanceType',
              o.appearanceType
            )('appearance', o.appearance)('disabled', o.disabled)('showLoader', o.showLoader)(
              'focusable',
              o.focusable
            )('pseudoState', o.pseudoState),
            e.xp6(8),
            e.Q6J('hasTestId', !1),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.position)(
              'documentationPropertyValues',
              o.positionVariants
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.size)('documentationPropertyValues', o.sizeVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.visibility)(
              'documentationPropertyValues',
              o.visibilityVariants
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.backdrop),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.height),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.overscroll)(
              'documentationPropertyValues',
              o.overscrollVariants
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.width),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.closeWord),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.header)(
              'documentationPropertyValues',
              o.generatePolymorphVariants(n)
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.content)(
              'documentationPropertyValues',
              o.generatePolymorphVariants(i)
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.footer)(
              'documentationPropertyValues',
              o.generatePolymorphVariants(a, '')
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.appearance)(
              'documentationPropertyValues',
              o.appearanceVariants
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.appearanceType)(
              'documentationPropertyValues',
              o.appearanceTypeVariants
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.icon)('documentationPropertyValues', o.iconVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.iconRight)('documentationPropertyValues', o.iconVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.disabled),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.showLoader),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.pseudoHovered),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.pseudoPressed),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.pseudoFocused),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.focusable),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.pseudoState),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.focusedChange),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.pressedChange),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.hoveredChange),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.focusVisibleChange);
        }
      }
      function we(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 43)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmDialogModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 44),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(7), e.Q6J('code', n.exampleModule);
        }
      }
      class s {
        constructor(r) {
          (this.dialogService = r),
            (this.pseudoHovered = !1),
            (this.pseudoPressed = !1),
            (this.pseudoFocused = !1),
            (this.pseudoState = ''),
            (this.focusable = !1),
            (this.focusedChange = !1),
            (this.pressedChange = !1),
            (this.hoveredChange = !1),
            (this.focusVisibleChange = !1),
            (this.visibilityVariants = ['auto', 'hidden', 'visible']),
            (this.visibility = this.visibilityVariants[0]),
            (this.iconVariants = ['', ...l.$xS.reduce((n, i) => n.concat(i.data), [])]),
            (this.icon = this.iconVariants[0]),
            (this.iconRight = this.iconVariants[0]),
            (this.appearanceVariants = ['primary', 'secondary', 'success', 'warning', 'danger']),
            (this.appearance = this.appearanceVariants[0]),
            (this.appearanceTypeVariants = ['fill', 'outline', 'ghost']),
            (this.appearanceType = this.appearanceTypeVariants[0]),
            (this.disabled = !1),
            (this.showLoader = !1),
            (this.overscrollVariants = ['scroll', 'all', 'none']),
            (this.overscroll = this.overscrollVariants[0]),
            (this.positionVariants = Object.values(l.tA)),
            (this.position = l.tA.CENTER),
            (this.backdrop = !1),
            (this.height = 'auto'),
            (this.width = '500px'),
            (this.closeWord = '\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c'),
            (this.sizeVariants = ['m', 'l']),
            (this.size = 'm'),
            (this.closeable = !0),
            (this.header = 'Static_title_h3 - 16 Medium'),
            (this.content =
              '\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u0434\u0438\u0430\u043b\u043e\u0433\u0430'),
            (this.footer = null),
            (this.exampleModule = p.e(73403).then(p.t.bind(p, 73403, 17))),
            (this.exampleBasic = {
              TypeScript: p.e(72757).then(p.t.bind(p, 72757, 17)),
              HTML: p.e(6408).then(p.t.bind(p, 6408, 17)),
            }),
            (this.exampleWithButtons = {
              TypeScript: p.e(25407).then(p.t.bind(p, 25407, 17)),
              HTML: p.e(5919).then(p.t.bind(p, 5919, 17)),
            }),
            (this.exampleWithParent = {
              TypeScript: p.e(50688).then(p.t.bind(p, 50688, 17)),
              HTML: p.e(20635).then(p.t.bind(p, 20635, 17)),
            }),
            (this.exampleResulthandling = {
              TypeScript: p.e(70416).then(p.t.bind(p, 70416, 17)),
              HTML: p.e(44365).then(p.t.bind(p, 44365, 17)),
            });
        }
        generatePolymorphVariants(...r) {
          return (0, f.X)(...r);
        }
        show() {
          this.dialogService
            .open(this.content, {
              closeable: this.closeable,
              backdrop: this.backdrop,
              header: this.header,
              width: this.width,
              footer: this.footer,
              height: this.height,
              overscroll: this.overscroll,
              scrollbarVisibility: this.visibility,
              position: this.position,
              closeWord: this.closeWord,
              size: this.size,
            })
            .subscribe(r => console.log('result from dialog', { result: r }));
        }
      }
      (s.ɵfac = function (r) {
        return new (r || s)(e.Y36(l.UYw));
      }),
        (s.ɵcmp = e.Xpm({
          type: s,
          selectors: [['prizm-dialog-example']],
          decls: 6,
          vars: 0,
          consts: [
            ['header', 'Dialog'],
            ['description', '', 1, 'page-description'],
            ['prizmDocPageTab', ''],
            ['prizmDocPageTab', '', 'prizmDocHost', ''],
            ['id', 'base', 'heading', 'Base', 3, 'content'],
            ['id', 'outer-header', 'heading', 'Outer Header With Context', 3, 'content'],
            ['id', 'with-buttons', 'heading', 'With Footer', 3, 'content'],
            ['id', 'with-parent', 'heading', 'With Parent', 3, 'content'],
            ['id', 'result-handling', 'heading', 'Result Handling', 3, 'content'],
            [
              'type',
              'button',
              'prizmButton',
              '',
              3,
              'size',
              'icon',
              'iconRight',
              'appearanceType',
              'appearance',
              'disabled',
              'showLoader',
              'focusable',
              'pseudoState',
              'click',
            ],
            ['headerTemp', ''],
            ['contentTemp', ''],
            ['footerTemp', ''],
            [3, 'hasTestId'],
            [
              'documentationPropertyName',
              'position',
              'documentationPropertyType',
              'PrizmOverlayInsidePlacement',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'size',
              'documentationPropertyType',
              'PrizmDialogSize',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'scrollbarVisibility',
              'documentationPropertyType',
              'PrizmScrollbarVisibility',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'backdrop',
              'documentationPropertyType',
              'boolean',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'height',
              'documentationPropertyType',
              'string',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'overscroll',
              'documentationPropertyType',
              'PrizmOverscrollMode',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'width',
              'documentationPropertyType',
              'string',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'closeWord',
              'documentationPropertyType',
              'string',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'header',
              'documentationPropertyType',
              'PolymorphContent<PrizmBaseDialogContext>',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'content',
              'documentationPropertyType',
              'PolymorphContent<PrizmBaseDialogContext>',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'footer',
              'documentationPropertyType',
              'PolymorphContent<PrizmBaseDialogContext> |  | PrizmDialogButton[]',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'appearance',
              'documentationPropertyType',
              'PrizmAppearance',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'appearanceType',
              'documentationPropertyType',
              'PrizmAppearanceType',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'icon',
              'documentationPropertyType',
              'PrizmContent',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'iconRight',
              'documentationPropertyType',
              'PrizmContent',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
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
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'showLoader',
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
              'pseudoHovered',
              'documentationPropertyType',
              'boolean | null',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'pseudoPressed',
              'documentationPropertyType',
              'boolean | null',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'pseudoFocused',
              'documentationPropertyType',
              'boolean | null',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'focusable',
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
              'pseudoState',
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
              'focusedChange',
              'documentationPropertyType',
              'boolean',
              'documentationPropertyMode',
              'output',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'pressedChange',
              'documentationPropertyType',
              'boolean',
              'documentationPropertyMode',
              'output',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'hoveredChange',
              'documentationPropertyType',
              'boolean',
              'documentationPropertyMode',
              'output',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'focusVisibleChange',
              'documentationPropertyType',
              'boolean',
              'documentationPropertyMode',
              'output',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            ['href', '#'],
            ['prizmButton', '', 2, 'margin-top', '10px'],
            [3, 'click'],
            [1, 'b-demo-steps'],
            ['filename', 'custom.module.ts', 3, 'code'],
          ],
          template: function (r, n) {
            1 & r &&
              (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
              e._uU(
                2,
                ' Our dialog component is a modal window that can be used to display information or ask for user input. '
              ),
              e.qZA(),
              e.YNc(3, ie, 10, 5, 'ng-template', 2),
              e.YNc(4, Ze, 36, 47, 'ng-template', 3),
              e.YNc(5, we, 8, 1, 'ng-template', 2),
              e.qZA());
          },
          dependencies: [T.c, v.F, h.K, y.N, D.W, b.l, E.a, z.w, c.K, U, A, O, X, ae],
          changeDetection: 0,
        })),
        (0, u.gn)(
          [
            V.zn,
            (0, u.w6)('design:type', Function),
            (0, u.w6)('design:paramtypes', [Object]),
            (0, u.w6)('design:returntype', Array),
          ],
          s.prototype,
          'generatePolymorphVariants',
          null
        );
      let We = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({
            imports: [
              _.ez,
              d.Qp,
              m.u5,
              m.UX,
              l.Qjd,
              l.m98,
              l.KBf,
              l.W0r,
              l.l81,
              P.Bz.forChild((0, d.GB)(s)),
              l.Rgy,
              l.ymp,
            ],
          })),
          t
        );
      })();
    },
    56586: (C, g, p) => {
      p.d(g, { w: () => P });
      var _ = p(45773),
        d = p(65879);
      let P = (() => {
        class l {}
        return (
          (l.ɵfac = function (u) {
            return new (u || l)();
          }),
          (l.ɵdir = d.lG2({ type: l, selectors: [['', 'prizmDocHost', '']], features: [d._Bn([_.R])] })),
          l
        );
      })();
    },
  },
]);
