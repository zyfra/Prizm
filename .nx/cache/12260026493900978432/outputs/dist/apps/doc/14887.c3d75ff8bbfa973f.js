'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [14887],
  {
    14887: (f, d, a) => {
      a.r(d), a.d(d, { TabsExampleModule: () => st });
      var m = a(96814),
        l = a(70169),
        b = a(22096),
        t = a(65879),
        x = a(8221),
        s = a(30990),
        g = a(83419),
        C = a(78905),
        h = a(63796),
        y = a(75987),
        _ = a(43015),
        E = a(56586),
        z = a(57679),
        r = a(77973),
        u = a(85122);
      function v(e, i) {
        1 & e && t._UZ(0, 'prizm-tab', 3), 2 & e && t.Q6J('content', i.$implicit.title)('type', 'line');
      }
      let M = (() => {
          class e {
            constructor() {
              (this.activeTabIndex = 0),
                (this.tabs = [
                  { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 1' },
                  { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 2' },
                  { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 3' },
                  { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 4' },
                ]);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-tabs-example-basic']],
              decls: 5,
              vars: 3,
              consts: [
                [1, 'container'],
                [3, 'activeTabIndex', 'activeTabIndexChange'],
                [3, 'content', 'type', 4, 'ngFor', 'ngForOf'],
                [3, 'content', 'type'],
              ],
              template: function (n, o) {
                1 & n &&
                  (t.TgZ(0, 'div', 0)(1, 'prizm-tabs', 1),
                  t.NdJ('activeTabIndexChange', function (p) {
                    return (o.activeTabIndex = p);
                  }),
                  t.YNc(2, v, 1, 2, 'prizm-tab', 2),
                  t.qZA()(),
                  t.ynx(3),
                  t._uU(4),
                  t.BQk()),
                  2 & n &&
                    (t.xp6(1),
                    t.Q6J('activeTabIndex', o.activeTabIndex),
                    t.xp6(1),
                    t.Q6J('ngForOf', o.tabs),
                    t.xp6(2),
                    t.hij(
                      ' \u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u0442\u0430\u0431 #',
                      o.activeTabIndex + 1,
                      ' '
                    ));
              },
              dependencies: [m.sg, r.m, u.e],
              styles: ['[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:44px;display:flex}'],
              changeDetection: 0,
            })),
            e
          );
        })(),
        V = (() => {
          class e {
            constructor(n) {
              this.context = n;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(t.Y36(l.z9F));
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-tabs-example-component-content']],
              decls: 1,
              vars: 1,
              template: function (n, o) {
                1 & n && t._uU(0), 2 & n && t.Oqu(o.context.idx + 1);
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })();
      function O(e, i) {
        if ((1 & e && t._UZ(0, 'prizm-tab', 3), 2 & e)) {
          const n = t.oxw();
          t.Q6J('content', n.content)('type', 'line');
        }
      }
      let I = (() => {
        class e {
          constructor() {
            (this.activeTabIndex = 0),
              (this.content = new l.O$$(V)),
              (this.tabs = [
                { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 1' },
                { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 2' },
                { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 3' },
                { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 4' },
              ]);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-tabs-example-component']],
            decls: 5,
            vars: 3,
            consts: [
              [1, 'container'],
              [3, 'activeTabIndex', 'activeTabIndexChange'],
              [3, 'content', 'type', 4, 'ngFor', 'ngForOf'],
              [3, 'content', 'type'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'div', 0)(1, 'prizm-tabs', 1),
                t.NdJ('activeTabIndexChange', function (p) {
                  return (o.activeTabIndex = p);
                }),
                t.YNc(2, O, 1, 2, 'prizm-tab', 2),
                t.qZA()(),
                t.ynx(3),
                t._uU(4),
                t.BQk()),
                2 & n &&
                  (t.xp6(1),
                  t.Q6J('activeTabIndex', o.activeTabIndex),
                  t.xp6(1),
                  t.Q6J('ngForOf', o.tabs),
                  t.xp6(2),
                  t.hij(
                    ' \u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u0442\u0430\u0431 #',
                    o.activeTabIndex + 1,
                    ' '
                  ));
            },
            dependencies: [m.sg, r.m, u.e],
            styles: ['[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:44px;display:flex}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      function Z(e, i) {
        if ((1 & e && t._UZ(0, 'prizm-tab', 2), 2 & e)) {
          const n = i.$implicit;
          t.Q6J('disabled', !!n.disabled)('content', n.title)('type', 'line');
        }
      }
      let J = (() => {
        class e {
          constructor() {
            this.tabs = [
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 1' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 2' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 3', disabled: !0 },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 4' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 5' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 6' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 7' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 8' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 9' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 10' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 11' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 12' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 13' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 14' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 15' },
            ];
          }
          tabCancelClick() {}
          tabClick() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-tabs-example-lined']],
            decls: 3,
            vars: 1,
            consts: [
              [1, 'container'],
              [3, 'disabled', 'content', 'type', 4, 'ngFor', 'ngForOf'],
              [3, 'disabled', 'content', 'type'],
            ],
            template: function (n, o) {
              1 & n && (t.TgZ(0, 'div', 0)(1, 'prizm-tabs'), t.YNc(2, Z, 1, 3, 'prizm-tab', 1), t.qZA()()),
                2 & n && (t.xp6(2), t.Q6J('ngForOf', o.tabs));
            },
            dependencies: [m.sg, r.m, u.e],
            styles: ['[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:44px;display:flex}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      function N(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-tab', 3),
            t.NdJ('closeTab', function () {
              const p = t.CHM(n).$implicit,
                T = t.oxw();
              return t.KtG(T.removeTab(p));
            }),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit;
          t.Q6J('closable', !0)('disabled', !!n.disabled)('content', n.title)('type', 'contained');
        }
      }
      let D = (() => {
        class e {
          constructor() {
            this.tabs = [
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 1' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 2' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 3' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 4' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 5' },
            ];
          }
          removeTab(n) {
            this.tabs.length < 2 || (this.tabs = this.tabs.filter(o => o !== n));
          }
          tabClick() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-tabs-example-contained']],
            decls: 3,
            vars: 1,
            consts: [
              [1, 'container'],
              ['type', 'contained', 3, 'activeTabIndexChange'],
              [3, 'closable', 'disabled', 'content', 'type', 'closeTab', 4, 'ngFor', 'ngForOf'],
              [3, 'closable', 'disabled', 'content', 'type', 'closeTab'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'div', 0)(1, 'prizm-tabs', 1),
                t.NdJ('activeTabIndexChange', function () {
                  return o.tabClick();
                }),
                t.YNc(2, N, 1, 4, 'prizm-tab', 2),
                t.qZA()()),
                2 & n && (t.xp6(2), t.Q6J('ngForOf', o.tabs));
            },
            dependencies: [m.sg, r.m, u.e],
            styles: ['[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:44px;display:flex}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      function H(e, i) {
        if ((1 & e && t._UZ(0, 'prizm-tab', 3), 2 & e)) {
          const n = i.$implicit;
          t.Q6J('count', n.count)('icon', n.icon)('closable', !!n.closable)('disabled', !!n.disabled);
        }
      }
      let A = (() => {
        class e {
          constructor() {
            this.tabs = [
              { icon: 'view-menu-arrow-right' },
              { icon: 'view-menu-arrow-left' },
              { icon: 'view-menu-arrow-down', disabled: !0 },
              { icon: 'view-menu-arrow-up' },
            ];
          }
          tabCancelClick() {}
          tabClick() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-tabs-example-icon']],
            decls: 3,
            vars: 1,
            consts: [
              [1, 'container'],
              ['type', 'contained', 3, 'activeTabIndexChange'],
              [3, 'count', 'icon', 'closable', 'disabled', 4, 'ngFor', 'ngForOf'],
              [3, 'count', 'icon', 'closable', 'disabled'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'div', 0)(1, 'prizm-tabs', 1),
                t.NdJ('activeTabIndexChange', function () {
                  return o.tabClick();
                }),
                t.YNc(2, H, 1, 4, 'prizm-tab', 2),
                t.qZA()()),
                2 & n && (t.xp6(2), t.Q6J('ngForOf', o.tabs));
            },
            dependencies: [m.sg, r.m, u.e],
            styles: ['[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:44px;display:flex}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      function Q(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-tab', 3),
            t.NdJ('closeTab', function () {
              const p = t.CHM(n).$implicit,
                T = t.oxw();
              return t.KtG(T.removeTab(p));
            }),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit;
          let o;
          t.Q6J('count', null !== (o = n.count) && void 0 !== o ? o : 0)('counterOptions', n.counterOptions)(
            'content',
            n.title
          )('closable', n.closable)('disabled', !!n.disabled);
        }
      }
      let F = (() => {
        class e {
          constructor() {
            this.tabs = [
              {
                title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 1',
                count: 10,
                counterOptions: { status: 'info', disabled: !1, maxValue: 2500 },
              },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 2', count: 0 },
              {
                title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 3',
                count: 3999,
                closable: !0,
                counterOptions: { status: 'danger', disabled: !1, maxValue: 2500 },
              },
              {
                title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 4',
                count: 4,
                counterOptions: { status: 'success', disabled: !1, maxValue: 2500 },
              },
              {
                title:
                  '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 5 \u0441 \u043e\u0447\u0435\u043d\u044c, \u043e\u0447\u0435\u043d\u044c, \u043e\u0447\u0435\u043d\u044c \u0434\u043b\u0438\u043d\u043d\u044b\u043c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0443\u0445\u043e\u0434\u0438\u0442 \u043f\u043e\u0434 \u0442\u0440\u0438 \u0442\u043e\u0447\u043a\u0438',
                count: 432,
                closable: !0,
                counterOptions: { status: 'warning', disabled: !1, maxValue: 2500 },
              },
            ];
          }
          removeTab(n) {
            this.tabs.length < 2 || (this.tabs = this.tabs.filter(o => o !== n));
          }
          tabClick() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-tabs-example-counter']],
            decls: 3,
            vars: 1,
            consts: [
              [1, 'container'],
              ['type', 'contained', 3, 'activeTabIndexChange'],
              [
                3,
                'count',
                'counterOptions',
                'content',
                'closable',
                'disabled',
                'closeTab',
                4,
                'ngFor',
                'ngForOf',
              ],
              [3, 'count', 'counterOptions', 'content', 'closable', 'disabled', 'closeTab'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'div', 0)(1, 'prizm-tabs', 1),
                t.NdJ('activeTabIndexChange', function () {
                  return o.tabClick();
                }),
                t.YNc(2, Q, 1, 5, 'prizm-tab', 2),
                t.qZA()()),
                2 & n && (t.xp6(2), t.Q6J('ngForOf', o.tabs));
            },
            dependencies: [m.sg, r.m, u.e],
            styles: ['[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:44px;display:flex}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      function U(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-tab', 3),
            t.NdJ('closeTab', function () {
              const p = t.CHM(n).$implicit,
                T = t.oxw();
              return t.KtG(T.removeTab(p));
            }),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit;
          t.Q6J('closable', !0)('disabled', !!n.disabled)('content', n.title)('type', 'line');
        }
      }
      let K = (() => {
        class e {
          constructor() {
            (this.activeTabIndex = 0),
              (this.tabs = [
                { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 1' },
                { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 2' },
                { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 3' },
                { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 4' },
                { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 5' },
              ]);
          }
          tabCancelClick() {}
          tabClick() {}
          removeTab(n) {
            this.tabs.length < 2 || (this.tabs = this.tabs.filter(o => o !== n));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-tabs-example-closable']],
            decls: 5,
            vars: 3,
            consts: [
              [1, 'container'],
              ['type', 'contained', 3, 'activeTabIndex', 'activeTabIndexChange'],
              [3, 'closable', 'disabled', 'content', 'type', 'closeTab', 4, 'ngFor', 'ngForOf'],
              [3, 'closable', 'disabled', 'content', 'type', 'closeTab'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'div', 0)(1, 'prizm-tabs', 1),
                t.NdJ('activeTabIndexChange', function (p) {
                  return (o.activeTabIndex = p);
                }),
                t.YNc(2, U, 1, 4, 'prizm-tab', 2),
                t.qZA()(),
                t.TgZ(3, 'div'),
                t._uU(4),
                t.qZA()),
                2 & n &&
                  (t.xp6(1),
                  t.Q6J('activeTabIndex', o.activeTabIndex),
                  t.xp6(1),
                  t.Q6J('ngForOf', o.tabs),
                  t.xp6(2),
                  t.hij('activeTabIndex: [', o.activeTabIndex, ']'));
            },
            dependencies: [m.sg, r.m, u.e],
            styles: ['[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{height:44px;display:flex}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      var B = a(39568);
      function Y(e, i) {
        if ((1 & e && t._UZ(0, 'prizm-tab', 5), 2 & e)) {
          const n = i.$implicit;
          t.Q6J('disabled', !!n.disabled)('icon', n.icon)('content', n.title)('type', 'line');
        }
      }
      let S = (() => {
        class e {
          constructor() {
            this.tabs = [
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 1', icon: 'charts-donut' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 2', icon: 'selection-radio-off' },
              { title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 3', icon: 'location-person-pin-circle' },
              {
                title: '\u0412\u043a\u043b\u0430\u0434\u043a\u0430 4',
                icon: 'editor-format-textdirection-l-to-r',
              },
            ];
          }
          tabCancelClick() {}
          activeTabIndexChange() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-tabs-in-panel']],
            decls: 8,
            vars: 1,
            consts: [
              [1, 'container'],
              ['header', '', 1, 'tabs'],
              [3, 'activeTabIndexChange', 'closeClick'],
              [3, 'disabled', 'icon', 'content', 'type', 4, 'ngFor', 'ngForOf'],
              [1, 'content'],
              [3, 'disabled', 'icon', 'content', 'type'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'div', 0)(1, 'prizm-panel')(2, 'div', 1)(3, 'prizm-tabs', 2),
                t.NdJ('activeTabIndexChange', function () {
                  return o.activeTabIndexChange();
                })('closeClick', function () {
                  return o.tabCancelClick();
                }),
                t.YNc(4, Y, 1, 4, 'prizm-tab', 3),
                t.qZA()()(),
                t.TgZ(5, 'div', 4)(6, 'span'),
                t._uU(
                  7,
                  ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur delectus dolores magnam quibusdam reiciendis, reprehenderit sapiente sequi sit sunt tempora tenetur vel veritatis? Incidunt modi perferendis quas? Accusantium aut exercitationem id pariatur quisquam, sequi suscipit. A aspernatur atque cum cumque error exercitationem hic id, in ipsa magni nesciunt quam qui, quidem quod ratione rem repudiandae sint sunt suscipit, vitae. '
                ),
                t.qZA()()()),
                2 & n && (t.xp6(4), t.Q6J('ngForOf', o.tabs));
            },
            dependencies: [m.sg, r.m, u.e, B.y],
            styles: [
              '[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;border-radius:2px;border:1px solid var(--prizm-v3-background-stroke)}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;overflow:hidden}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:16px;background:var(--prizm-v3-background-fill-primary);color:var(--prizm-v3-text-icon-secondary);flex:1}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function G(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 4),
            t._UZ(1, 'prizm-tabs-example-basic'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 5),
            t._UZ(3, 'prizm-tabs-example-component'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 6),
            t._UZ(5, 'prizm-tabs-example-lined'),
            t.qZA(),
            t.TgZ(6, 'prizm-doc-example', 7),
            t._UZ(7, 'prizm-tabs-example-contained'),
            t.qZA(),
            t.TgZ(8, 'prizm-doc-example', 8),
            t._UZ(9, 'prizm-tabs-example-icon'),
            t.qZA(),
            t.TgZ(10, 'prizm-doc-example', 9),
            t._UZ(11, 'prizm-tabs-example-counter'),
            t.qZA(),
            t.TgZ(12, 'prizm-doc-example', 10),
            t._UZ(13, 'prizm-tabs-example-closable'),
            t.qZA(),
            t.TgZ(14, 'prizm-doc-example', 11),
            t._UZ(15, 'prizm-tabs-in-panel'),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.Q6J('content', n.tabsExampleBasic),
            t.xp6(2),
            t.Q6J('content', n.tabsExampleComponent),
            t.xp6(2),
            t.Q6J('content', n.tabsLinedExample),
            t.xp6(2),
            t.Q6J('content', n.tabsContainedExample),
            t.xp6(2),
            t.Q6J('content', n.tabsIconExample),
            t.xp6(2),
            t.Q6J('content', n.tabsWithCounterExample),
            t.xp6(2),
            t.Q6J('content', n.tabsClosableExample),
            t.xp6(2),
            t.Q6J('content', n.panelWithTabsExample);
        }
      }
      function L(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-tab', 32, 33),
            t.NdJ('closeTab', function () {
              t.CHM(n);
              const c = t.oxw(2);
              return t.KtG(c.removeTab());
            }),
            t.qZA();
        }
        if (2 & e) {
          const n = t.MAs(1),
            o = t.oxw(2);
          t.Udp('--prizm-tab-button-max-width', o.prizmTabButtonMaxWidth),
            t.Q6J('prizmDocHostElement', n)('icon', o.icon)('content', o.content)('closable', o.closable)(
              'type',
              o.type
            )('disabled', o.disabled)('count', o.count)('counterOptions', o.counterOptions);
        }
      }
      function W(e, i) {
        1 & e && t._uU(0, ' Tab button maximum width ');
      }
      function $(e, i) {
        1 & e && t._uU(0, ' Size ');
      }
      function X(e, i) {
        1 & e && t._uU(0, ' Can Show Menu ');
      }
      function R(e, i) {
        1 & e && t._uU(0, ' Can Open Tab ');
      }
      function j(e, i) {
        1 & e && t._uU(0, ' Active Tab Index ');
      }
      function w(e, i) {
        1 & e && t._uU(0, ' PolymorhContent ');
      }
      function q(e, i) {
        1 & e && t._uU(0, ' Tab title ');
      }
      function k(e, i) {
        1 & e && t._uU(0, ' Tab counter ');
      }
      function tt(e, i) {
        1 & e && t._uU(0, ' Tab counter options ');
      }
      function et(e, i) {
        1 & e && t._uU(0, ' Is tab closable ');
      }
      function nt(e, i) {
        1 & e && t._uU(0, ' Is tab disabled ');
      }
      function ot(e, i) {
        1 & e && t._uU(0, ' Tab icon ');
      }
      function at(e, i) {
        1 & e && t._uU(0, ' Close Icon ');
      }
      function it(e, i) {
        1 & e && t._uU(0, ' Close Icon ');
      }
      function ct(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'div')(2, 'prizm-tabs', 12, 13),
            t.NdJ('activeTabIndexChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.activeTabIndex = c));
            }),
            t.YNc(4, L, 2, 10, 'prizm-tab', 14),
            t._UZ(5, 'prizm-tab', 15),
            t.qZA()()(),
            t.TgZ(6, 'prizm-doc-documentation', 16),
            t.YNc(7, W, 1, 0, 'ng-template', 17),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.prizmTabButtonMaxWidth = c));
            }),
            t.YNc(8, $, 1, 0, 'ng-template', 18),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.size = c));
            }),
            t.YNc(9, X, 1, 0, 'ng-template', 19),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.canShowMenu = c));
            }),
            t.YNc(10, R, 1, 0, 'ng-template', 20),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.canOpen = c));
            }),
            t.YNc(11, j, 1, 0, 'ng-template', 21),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.activeTabIndex = c));
            }),
            t.qZA(),
            t.TgZ(12, 'prizm-doc-documentation', 22),
            t.YNc(13, w, 1, 0, 'ng-template', 23),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.content = c));
            }),
            t.YNc(14, q, 1, 0, 'ng-template', 24),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.type = c));
            }),
            t.YNc(15, k, 1, 0, 'ng-template', 25),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.count = c));
            }),
            t.YNc(16, tt, 1, 0, 'ng-template', 26),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.counterOptions = c));
            }),
            t.YNc(17, et, 1, 0, 'ng-template', 27),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.closable = c));
            }),
            t.YNc(18, nt, 1, 0, 'ng-template', 28),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.disabled = c));
            }),
            t.YNc(19, ot, 1, 0, 'ng-template', 29),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.icon = c));
            }),
            t.YNc(20, at, 1, 0, 'ng-template', 30),
            t.NdJ('documentationPropertyValueChange', function (c) {
              t.CHM(n);
              const p = t.oxw();
              return t.KtG((p.closeIcon = c));
            }),
            t.YNc(21, it, 1, 0, 'ng-template', 31),
            t.qZA();
        }
        if (2 & e) {
          const n = t.MAs(3),
            o = t.oxw();
          t.xp6(1),
            t.Gre('container container__', o.size, ''),
            t.xp6(1),
            t.Q6J('activeTabIndex', o.activeTabIndex)('prizmDocHostElement', n)('size', o.size)(
              'canOpen',
              o.canOpen
            )('canShowMenu', o.canShowMenu),
            t.xp6(2),
            t.Q6J('ngIf', !o.removed),
            t.xp6(1),
            t.Udp('--prizm-tab-button-max-width', o.prizmTabButtonMaxWidth),
            t.Q6J('icon', o.icon)('closable', o.closable)('type', o.type)('closeIcon', o.closeIcon)(
              'disabled',
              o.disabled
            )('count', o.count)('counterOptions', o.counterOptions),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', o.prizmTabButtonMaxWidth),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.size)('documentationPropertyValues', o.sizeVariants),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.canShowMenu),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.canOpen)('documentationPropertyValues', o.canOpenVariants),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.activeTabIndex),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', o.content),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.type)('documentationPropertyValues', o.typeVariants),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.count),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.counterOptions)(
              'documentationPropertyValues',
              o.counterOptionsVariants
            ),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.closable),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.disabled),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.icon)('documentationPropertyValues', o.iconVariants),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.closeIcon);
        }
      }
      function pt(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 34)(1, 'li')(2, 'p'),
            t._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmTabsModule'),
            t.qZA(),
            t._uU(
              6,
              ' \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 '
            ),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 35),
            t.qZA()()),
          2 & e)
        ) {
          const n = t.oxw();
          t.xp6(7), t.Q6J('code', n.setupModule);
        }
      }
      let mt = (() => {
        class e {
          constructor() {
            (this.type = 'line'),
              (this.activeTabIndex = 0),
              (this.removed = !1),
              (this.typeVariants = ['line', 'contained']),
              (this.size = 'adaptive'),
              (this.canOpenVariants = [n => (0, b.of)(!0), n => (0, b.of)(1 !== n.idx)]),
              (this.canOpen = this.canOpenVariants[0]),
              (this.sizeVariants = ['s', 'adaptive']),
              (this.content = 'Big Tab #1'),
              (this.iconVariants = ['', ...l.$xS.reduce((n, o) => n.concat(o.data), [])]),
              (this.icon = this.iconVariants[0]),
              (this.closeIcon = null),
              (this.closable = !1),
              (this.disabled = !1),
              (this.canShowMenu = !0),
              (this.count = 0),
              (this.counterOptions = { status: 'info', maxValue: 99, disabled: !1 }),
              (this.prizmTabButtonMaxWidth = 'unset'),
              (this.counterOptionsVariants = [
                this.counterOptions,
                { status: 'danger', maxValue: 99, disabled: !1 },
                { status: 'warning', maxValue: 99, disabled: !1 },
                { status: 'success' },
                { status: 'warning', disabled: !0 },
              ]),
              (this.tabsExampleBasic = {
                TypeScript: a.e(96125).then(a.t.bind(a, 96125, 17)),
                HTML: a.e(72331).then(a.t.bind(a, 72331, 17)),
              }),
              (this.tabsExampleComponent = {
                TypeScript: a.e(73318).then(a.t.bind(a, 73318, 17)),
                HTML: a.e(42646).then(a.t.bind(a, 42646, 17)),
              }),
              (this.tabsLinedExample = {
                TypeScript: a.e(79673).then(a.t.bind(a, 79673, 17)),
                HTML: a.e(29765).then(a.t.bind(a, 29765, 17)),
              }),
              (this.tabsContainedExample = {
                TypeScript: a.e(94968).then(a.t.bind(a, 94968, 17)),
                HTML: a.e(98640).then(a.t.bind(a, 98640, 17)),
              }),
              (this.tabsIconExample = {
                TypeScript: a.e(75478).then(a.t.bind(a, 75478, 17)),
                HTML: a.e(27713).then(a.t.bind(a, 27713, 17)),
              }),
              (this.tabsWithCounterExample = {
                TypeScript: a.e(54164).then(a.t.bind(a, 54164, 17)),
                HTML: a.e(79785).then(a.t.bind(a, 79785, 17)),
              }),
              (this.tabsClosableExample = {
                TypeScript: a.e(82241).then(a.t.bind(a, 82241, 17)),
                HTML: a.e(93301).then(a.t.bind(a, 93301, 17)),
              }),
              (this.panelWithTabsExample = {
                TypeScript: a.e(46045).then(a.t.bind(a, 46045, 17)),
                HTML: a.e(54857).then(a.t.bind(a, 54857, 17)),
                LESS: a.e(16547).then(a.t.bind(a, 16547, 17)),
              }),
              (this.setupModule = a.e(26486).then(a.t.bind(a, 26486, 17)));
          }
          removeTab() {
            this.removed = !0;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-tabs-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Tabs'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              ['id', 'component', 'heading', 'Component', 3, 'content'],
              ['id', 'line', 'heading', 'Lined tabs', 3, 'content'],
              ['id', 'contained', 'heading', 'Contained tabs', 3, 'content'],
              ['id', 'icon', 'heading', 'Icon tabs', 3, 'content'],
              ['id', 'counter', 'heading', 'Tabs with counter', 3, 'content'],
              ['id', 'closable', 'heading', 'Closable tabs', 3, 'content'],
              ['id', 'withTabs', 'heading', 'Panel with tabs', 3, 'content'],
              [
                'prizmDocHostElementKey',
                'PrizmTabsComponent',
                3,
                'activeTabIndex',
                'prizmDocHostElement',
                'size',
                'canOpen',
                'canShowMenu',
                'activeTabIndexChange',
              ],
              ['elementTabs', ''],
              [
                'prizmDocHostElementKey',
                'PrizmTabComponent',
                3,
                'prizmDocHostElement',
                'icon',
                'content',
                'closable',
                'type',
                'disabled',
                'count',
                'counterOptions',
                '--prizm-tab-button-max-width',
                'closeTab',
                4,
                'ngIf',
              ],
              [
                'content',
                'Big Tab 2',
                3,
                'icon',
                'closable',
                'type',
                'closeIcon',
                'disabled',
                'count',
                'counterOptions',
              ],
              ['heading', 'PrizmTabsComponent', 'hostComponentKey', 'PrizmTabsComponent'],
              [
                'documentationPropertyName',
                'prizm-tab-button-max-width',
                'documentationPropertyType',
                'string',
                'documentationPropertyMode',
                'css-var',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'size',
                'documentationPropertyType',
                'PrizmTabSize',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'canShowMenu',
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
                'canOpen',
                'documentationPropertyType',
                'PrizmTabCanOpen',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'activeTabIndex',
                'documentationPropertyType',
                'number',
                'documentationPropertyMode',
                'input-output',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              ['heading', 'PrizmTabComponent', 'hostComponentKey', 'PrizmTabComponent'],
              [
                'documentationPropertyName',
                'content',
                'documentationPropertyMode',
                'input',
                'documentationPropertyType',
                'PolymorhContent',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'type',
                'documentationPropertyType',
                'TabType',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'count',
                'documentationPropertyType',
                'number',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'counterOptions',
                'documentationPropertyType',
                'Partial<PrizmTabCounterOptions>',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'closable',
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
                'icon',
                'documentationPropertyType',
                'PolymorhContent',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'closeIcon',
                'documentationPropertyType',
                'PolymorhContent',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'closeTab',
                'documentationPropertyType',
                'void',
                'documentationPropertyMode',
                'output',
              ],
              [
                'prizmDocHostElementKey',
                'PrizmTabComponent',
                3,
                'prizmDocHostElement',
                'icon',
                'content',
                'closable',
                'type',
                'disabled',
                'count',
                'counterOptions',
                'closeTab',
              ],
              ['elementTab', ''],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                t._uU(2, ' Our tabs component is a simple way to organize content on a page. '),
                t.qZA(),
                t.YNc(3, G, 16, 8, 'ng-template', 2),
                t.YNc(4, ct, 22, 36, 'ng-template', 3),
                t.YNc(5, pt, 8, 1, 'ng-template', 2),
                t.qZA());
            },
            dependencies: [
              m.O5,
              x.c,
              s.F,
              g.K,
              C.N,
              h.W,
              y.l,
              _.a,
              E.w,
              z.k,
              r.m,
              u.e,
              M,
              I,
              J,
              D,
              A,
              F,
              K,
              S,
            ],
            styles: [
              '[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .container__adaptive[_ngcontent-%COMP%]{height:48px}[_nghost-%COMP%]   .container__s[_ngcontent-%COMP%]{height:40px}prizm-tabs[_ngcontent-%COMP%]{width:100%;display:block}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var P = a(21004),
        lt = a(75187);
      let st = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [m.ez, P.Qp, lt.Bz.forChild((0, P.GB)(mt)), l.qDW, l.cRT] })),
          e
        );
      })();
    },
    57679: (f, d, a) => {
      a.d(d, { k: () => b });
      var m = a(65879),
        l = a(45773);
      let b = (() => {
        class t {
          constructor(s) {
            (this.hostElementService = s), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const s = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              g = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const C in s) this.hostElementService.setHostElement(s[C], g[C]);
          }
        }
        return (
          (t.ɵfac = function (s) {
            return new (s || t)(m.Y36(l.R));
          }),
          (t.ɵdir = m.lG2({
            type: t,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          t
        );
      })();
    },
    56586: (f, d, a) => {
      a.d(d, { w: () => b });
      var m = a(45773),
        l = a(65879);
      let b = (() => {
        class t {}
        return (
          (t.ɵfac = function (s) {
            return new (s || t)();
          }),
          (t.ɵdir = l.lG2({ type: t, selectors: [['', 'prizmDocHost', '']], features: [l._Bn([m.R])] })),
          t
        );
      })();
    },
  },
]);
