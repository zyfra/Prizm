'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [57037],
  {
    57037: (A, l, o) => {
      o.r(l), o.d(l, { SideMenuExampleModule: () => T });
      var d = o(96814),
        n = o(65879),
        a = o(63796),
        m = o(75987),
        g = o(43015),
        r = o(83482),
        M = o(39568),
        C = o(76153),
        x = o(19947),
        _ = o(4377),
        O = o(78255);
      function P(e, i) {
        if (1 & e) {
          const t = n.EpF();
          n.TgZ(0, 'prizm-listing-item', 8),
            n.NdJ('click', function () {
              const B = n.CHM(t).index,
                Z = n.oxw();
              return n.KtG(Z.toggleElementState(B));
            }),
            n._uU(1),
            n.qZA();
        }
        if (2 & e) {
          const t = i.$implicit,
            c = i.index,
            u = n.oxw();
          n.Q6J('selected', c === u.selectedElementIdx), n.xp6(1), n.hij(' ', t, ' ');
        }
      }
      function h(e, i) {
        if (
          (1 & e && (n.TgZ(0, 'div', 20)(1, 'prizm-input-layout', 21), n._UZ(2, 'input', 22), n.qZA()()),
          2 & e)
        ) {
          const t = n.oxw(2);
          n.xp6(1),
            n.Udp('width', 100, '%'),
            n.Q6J(
              'label',
              '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a ' + (t.selectedElementIdx + 1)
            );
        }
      }
      function f(e, i) {
        1 & e &&
          (n.TgZ(0, 'div', 23)(1, 'span', 24),
          n._uU(
            2,
            '\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f'
          ),
          n.qZA(),
          n.TgZ(3, 'span', 25),
          n._uU(
            4,
            '\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0432 \u044d\u0442\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043d\u0443\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.'
          ),
          n.qZA()());
      }
      function v(e, i) {
        if (1 & e) {
          const t = n.EpF();
          n.TgZ(0, 'div', 9)(1, 'div', 10)(2, 'prizm-panel', 11)(3, 'div', 12)(4, 'div', 13)(
            5,
            'prizm-icon',
            14
          ),
            n.NdJ('click', function () {
              n.CHM(t);
              const u = n.oxw();
              return n.KtG(u.changeSideMenuType());
            }),
            n.qZA()(),
            n.TgZ(6, 'div', 13),
            n._UZ(7, 'prizm-icon', 15)(8, 'prizm-icon', 16),
            n.qZA()()()(),
            n.TgZ(9, 'div', 17),
            n.YNc(10, h, 3, 3, 'div', 18),
            n.YNc(11, f, 5, 0, 'div', 19),
            n.qZA()();
        }
        if (2 & e) {
          const t = n.oxw();
          n.xp6(5),
            n.Q6J('size', 16),
            n.xp6(2),
            n.Q6J('size', 16),
            n.xp6(1),
            n.Q6J('size', 16),
            n.xp6(1),
            n.ekj('side-menu__content_empty', -1 === t.selectedElementIdx),
            n.xp6(1),
            n.Q6J('ngIf', t.selectedElementIdx > -1),
            n.xp6(1),
            n.Q6J('ngIf', -1 === t.selectedElementIdx);
        }
      }
      let E = (() => {
        class e {
          constructor() {
            (this.elementList = [
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 1',
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 2',
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 3',
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 4',
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 5',
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 6',
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 7',
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 8',
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 9',
              '\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u043e\u043c\u0435\u0440 10',
            ]),
              (this.isSideMenuOpened = !1),
              (this.selectedElementIdx = -1),
              (this.sideMenuType = 'line');
          }
          toggleElementState(t) {
            this.selectedElementIdx = this.selectedElementIdx === t ? -1 : t;
          }
          changeSideMenuType() {
            this.sideMenuType = 'line' === this.sideMenuType ? 'col' : 'line';
          }
          toggleSideMenu() {
            this.isSideMenuOpened = !this.isSideMenuOpened;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = n.Xpm({
            type: e,
            selectors: [['prizm-side-menu-example-basic']],
            decls: 8,
            vars: 6,
            consts: [
              [1, 'container'],
              ['header', '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'],
              ['instruments', '', 1, 'toggle-container'],
              [
                'prizmIconButton',
                '',
                'appearanceType',
                'ghost',
                'appearance',
                'secondary',
                'size',
                'm',
                3,
                'icon',
                'pseudoPressed',
                'click',
              ],
              [1, 'content'],
              [1, 'content__inner'],
              [3, 'selected', 'click', 4, 'ngFor', 'ngForOf'],
              ['class', 'side-menu', 4, 'ngIf'],
              [3, 'selected', 'click'],
              [1, 'side-menu'],
              [1, 'header'],
              ['header', 'Side Menu'],
              ['instruments', '', 1, 'instruments'],
              [1, 'instruments__group'],
              ['iconClass', 'editor-down-1', 1, 'instruments__icon', 3, 'size', 'click'],
              ['iconClass', 'cancel-delete-content', 1, 'instruments__icon', 3, 'size'],
              ['iconClass', 'tools-content-save', 1, 'instruments__icon', 3, 'size'],
              [1, 'side-menu__content'],
              ['class', 'input', 4, 'ngIf'],
              ['class', 'empty-message', 4, 'ngIf'],
              [1, 'input'],
              [3, 'label'],
              ['prizmInput', '', 'value', '\u041a\u043e\u043d\u0442\u0435\u043d\u0442'],
              [1, 'empty-message'],
              [1, 'empty-message__main'],
              [1, 'empty-message__sub'],
            ],
            template: function (t, c) {
              1 & t &&
                (n.TgZ(0, 'div', 0)(1, 'prizm-panel', 1)(2, 'div', 2)(3, 'button', 3),
                n.NdJ('click', function () {
                  return c.toggleSideMenu();
                }),
                n.qZA()()(),
                n.TgZ(4, 'div', 4)(5, 'div', 5),
                n.YNc(6, P, 2, 2, 'prizm-listing-item', 6),
                n.qZA(),
                n.YNc(7, v, 12, 7, 'div', 7),
                n.qZA()()),
                2 & t &&
                  (n.xp6(3),
                  n.Q6J('icon', 'editor-panel-right')('pseudoPressed', c.isSideMenuOpened),
                  n.xp6(1),
                  n.ekj('content_column', 'col' === c.sideMenuType),
                  n.xp6(2),
                  n.Q6J('ngForOf', c.elementList),
                  n.xp6(1),
                  n.Q6J('ngIf', c.isSideMenuOpened));
            },
            dependencies: [d.sg, d.O5, r.b, M.y, C.C, x.l, _.K, O.W],
            styles: [
              '[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .toggle-container[_ngcontent-%COMP%]{padding:0 24px;display:flex;align-items:center}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:8px;display:flex;gap:8px;flex:1;background:var(--prizm-v3-background-fill-primary);overflow:hidden}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content__inner[_ngcontent-%COMP%]{flex:1;border:1px solid var(--prizm-v3-background-stroke);border-radius:2px;filter:drop-shadow(0 2px 4px var(--prizm-v3-shadow-color));overflow:hidden}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]{height:auto;width:400px;display:flex;flex-direction:column;border:1px solid var(--prizm-v3-background-stroke);background:var(--prizm-v3-background-fill-secondary)}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:48px;width:100%}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu__content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex:1;overflow:hidden}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu__content_empty[_ngcontent-%COMP%]{padding:40px}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu__content[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{height:100%;padding:8px;display:flex;flex:1}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu__content[_ngcontent-%COMP%]   .empty-message[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:16px;font-size:14px;line-height:20px;text-align:center}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu__content[_ngcontent-%COMP%]   .empty-message__main[_ngcontent-%COMP%]{font-weight:600;color:var(--prizm-v3-text-icon-primary);text-align:center}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu__content[_ngcontent-%COMP%]   .empty-message__sub[_ngcontent-%COMP%]{font-weight:400;color:var(--prizm-v3-text-icon-tertiary)}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .instruments[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .instruments__group[_ngcontent-%COMP%]{min-height:24px;padding:0 15px;display:flex;gap:10px;border-right:1px solid var(--prizm-v3-background-stroke)}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .instruments__group[_ngcontent-%COMP%]:last-child{border:none}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .instruments__icon[_ngcontent-%COMP%]{height:24px;width:24px;display:flex;align-items:center;justify-content:center;font-size:16px;line-height:16px;color:#8d91a4;cursor:pointer}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]   .instruments__icon[_ngcontent-%COMP%]:hover{color:#337eff}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content_column[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .content_column[_ngcontent-%COMP%]   .side-menu[_ngcontent-%COMP%]{height:200px;width:100%}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function y(e, i) {
        if (
          (1 & e && (n.TgZ(0, 'prizm-doc-example', 3), n._UZ(1, 'prizm-side-menu-example-basic'), n.qZA()),
          2 & e)
        ) {
          const t = n.oxw();
          n.Q6J('content', t.sideMenuBasicExample);
        }
      }
      let z = (() => {
        class e {
          constructor() {
            this.sideMenuBasicExample = {
              TypeScript: o.e(40583).then(o.t.bind(o, 40583, 17)),
              HTML: o.e(74588).then(o.t.bind(o, 74588, 17)),
              LESS: o.e(42134).then(o.t.bind(o, 42134, 17)),
            };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = n.Xpm({
            type: e,
            selectors: [['prizm-side-menu-example']],
            decls: 4,
            vars: 0,
            consts: [
              ['header', 'Side menu'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
            ],
            template: function (t, c) {
              1 & t &&
                (n.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                n._uU(
                  2,
                  ' Our side menu component is a vertical list of links that can be used to navigate between pages. '
                ),
                n.qZA(),
                n.YNc(3, y, 2, 1, 'ng-template', 2),
                n.qZA());
            },
            dependencies: [a.W, m.l, g.a, E],
            changeDetection: 0,
          })),
          e
        );
      })();
      var p = o(21004),
        S = o(75187),
        s = o(70169);
      let T = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = n.oAB({ type: e })),
          (e.ɵinj = n.cJS({
            imports: [d.ez, p.Qp, s.pqj, S.Bz.forChild((0, p.GB)(z)), s.cRT, s.Qjd, s.KSn, s.WQS],
          })),
          e
        );
      })();
    },
  },
]);
