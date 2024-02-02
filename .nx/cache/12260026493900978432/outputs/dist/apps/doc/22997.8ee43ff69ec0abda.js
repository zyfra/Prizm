'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [22997],
  {
    22997: (K, Q, a) => {
      a.r(Q), a.d(Q, { TableExampleModule: () => Ki });
      var E = a(96814),
        b = a(34421),
        t = a(65879),
        S = a(8221),
        M = a(30990),
        U = a(83419),
        V = a(78905),
        X = a(63796),
        W = a(75987),
        tt = a(43015),
        et = a(56586),
        m = a(95333),
        s = a(34271),
        d = a(22531),
        x = a(33593),
        T = a(75539),
        g = a(42749),
        h = a(9537),
        Z = a(64955),
        _ = a(9715),
        C = a(55426),
        p = a(70169);
      function nt(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.ynx(0),
            t.TgZ(1, 'tr', 6),
            t.NdJ('click', function (u) {
              const c = t.CHM(n).$implicit,
                r = t.oxw();
              return t.KtG(r.onTrClick(u, c));
            }),
            t.TgZ(2, 'td', 7),
            t._uU(3),
            t.qZA(),
            t.TgZ(4, 'td', 7),
            t._uU(5),
            t.qZA(),
            t.TgZ(6, 'td', 7),
            t._uU(7),
            t.qZA(),
            t.TgZ(8, 'td', 7),
            t._uU(9),
            t.qZA(),
            t.TgZ(10, 'td', 7),
            t._uU(11),
            t.qZA()(),
            t.BQk();
        }
        if (2 & e) {
          const n = i.$implicit;
          t.xp6(3),
            t.hij(' ', n.code, ' '),
            t.xp6(2),
            t.hij(' ', n.name, ' '),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', n.count, ' '),
            t.xp6(2),
            t.Oqu(n.active);
        }
      }
      let ot = (() => {
        class e {
          constructor(n) {
            (this.overlay = n),
              (this.columns = ['code', 'name', 'category', 'count']),
              (this.products = [
                { id: 1, name: 'aaa', code: 'aaa', category: 'aaa', count: 1, active: !1 },
                { id: 2, name: 'bbb', code: 'bbb', category: 'bbb', count: 2, active: !1 },
                { id: 3, name: 'ccc', code: 'ccc', category: 'ccc', count: 3, active: !1 },
                { id: 4, name: 'ddd', code: 'ddd', category: 'ddd', count: 4, active: !1 },
                { id: 5, name: 'eee', code: 'eee', category: 'eee', count: 5, active: !1 },
              ]);
          }
          onTrClick(n, o) {
            this.products = this.products.map(u => ({ ...u, active: u.id === o.id }));
          }
          trackByFn(n, o) {
            return n;
          }
          trackByFn2(n, o) {
            return n;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(t.Y36(p.xpd));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-track-by-example']],
            decls: 15,
            vars: 3,
            consts: [
              [1, 'scrollable'],
              ['prizmTable', '', 'size', 'l', 1, 'table'],
              ['prizmThGroup', ''],
              ['prizmTh', ''],
              ['prizmTbody', '', 3, 'data'],
              [4, 'prizmRow', 'prizmRowOf', 'prizmRowTrackBy'],
              ['prizmTr', '', 3, 'click'],
              ['prizmTd', ''],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'prizm-scrollbar', 0)(1, 'table', 1)(2, 'thead')(3, 'tr', 2)(4, 'th', 3),
                t._uU(5, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(6, 'th', 3),
                t._uU(7, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(8, 'th', 3),
                t._uU(9, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(10, 'th', 3),
                t._uU(11, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA(),
                t._UZ(12, 'th', 3),
                t.qZA()(),
                t.TgZ(13, 'tbody', 4),
                t.YNc(14, nt, 12, 5, 'ng-container', 5),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(13),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products)('prizmRowTrackBy', o.trackByFn));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, _.F, C.n],
            styles: [
              '[_nghost-%COMP%]   .table[_ngcontent-%COMP%]{width:100%;background:#f0f0f0}[_nghost-%COMP%]   .table--simple[_ngcontent-%COMP%]{background-color:#7fffd4}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{height:100px}[_nghost-%COMP%]   .overlay-tpl[_ngcontent-%COMP%]{width:200px;height:200px;background-color:#ff0}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var w = a(22096),
        Y = a(37547),
        N = a(73584),
        B = a(93428),
        k = a(63339),
        it = a(28029),
        y = a(65911),
        f = a(60095),
        H = a(92090),
        J = a(4377),
        z = a(82212);
      function at(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 15),
            t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.Q6J('sorter', n.sorter);
        }
      }
      function ut(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 12), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA());
      }
      function lt(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 12),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA());
      }
      function ct(e, i) {
        1 & e && (t.ynx(0), t.YNc(1, lt, 2, 0, 'th', 7), t.BQk()),
          2 & e && (t.xp6(1), t.Q6J('prizmHead', 'amount'));
      }
      function rt(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'button', 25),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.oxw(3);
              return t.KtG(u.updateProduct(!1));
            }),
            t.qZA();
        }
      }
      function pt(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'button', 26),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.oxw(3);
              return t.KtG(u.updateProduct(!0));
            }),
            t.qZA();
        }
      }
      function mt(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'td', 19)(1, 'div', 20)(2, 'prizm-tree-button', 21, 22),
            t.NdJ('openChange', function (u) {
              t.CHM(n);
              const l = t.oxw().index,
                c = t.MAs(2);
              return t.KtG(u ? c.showChildren(l) : c.hideChildren(l));
            }),
            t.qZA(),
            t.YNc(4, rt, 1, 0, 'button', 23),
            t.TgZ(5, 'span'),
            t._uU(6),
            t.qZA(),
            t.YNc(7, pt, 1, 0, 'button', 24),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw(),
            o = n.$implicit,
            u = n.index,
            l = n.deepLevel,
            c = t.MAs(2);
          let r;
          t.xp6(2),
            t.Q6J('visibilityIcon', !(null == o.children || !o.children.length))(
              'open',
              c.isChildrenOpened(u)
            )('level', null !== (r = l) && void 0 !== r ? r : 0),
            t.xp6(2),
            t.Q6J('ngIf', '1_1_2' === o.code && '* Name 1_1_2' === o.name),
            t.xp6(2),
            t.Oqu(o.name),
            t.xp6(1),
            t.Q6J('ngIf', '1_1_2' === o.code && 'Name 1_1_2' === o.name);
        }
      }
      function st(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 19), t._uU(1), t._UZ(2, 'br'), t._uU(3), t.qZA()), 2 & e)) {
          const n = t.oxw(),
            o = n.$implicit,
            u = n.index,
            l = n.rowIdx,
            c = n.odd,
            r = n.first,
            A = n.last;
          t.xp6(1),
            t.hij(' ', o.category, ''),
            t.xp6(2),
            t.xDo(
              ' #idx:',
              u,
              ' #rowIdx:',
              l,
              ' ',
              c ? '#odd' : '#even',
              ' ',
              r ? '#first' : '',
              ' ',
              A ? '#last' : '',
              ' '
            );
        }
      }
      function dt(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 28), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw(2).$implicit;
          t.xp6(1), t.hij(' ', t.xi3(2, 1, n.count, '0.0-0'), ' ');
        }
      }
      function xt(e, i) {
        1 & e && (t.ynx(0), t.YNc(1, dt, 3, 4, 'td', 27), t.BQk()),
          2 & e && (t.xp6(1), t.Q6J('prizmCell', 'amount'));
      }
      function Tt(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 16, 17),
            t.YNc(3, mt, 8, 6, 'td', 18),
            t.YNc(4, st, 4, 6, 'td', 18),
            t.YNc(5, xt, 2, 1, 'ng-container', 8),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const n = t.oxw();
          t.xp6(3),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('ngIf', n.showFormatNumber);
        }
      }
      function gt(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.ynx(0),
            t.TgZ(1, 'tr', 29, 17),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.MAs(6);
              return t.KtG(u.toggle());
            }),
            t.TgZ(3, 'td', 19)(4, 'div', 20)(5, 'prizm-tree-button', 30, 22),
            t.NdJ('openChange', function (u) {
              const c = t.CHM(n).index,
                r = t.MAs(2);
              return t.KtG(u ? r.showChildren(c) : r.hideChildren(c));
            }),
            t.qZA(),
            t.TgZ(7, 'span'),
            t._uU(8),
            t.qZA()()(),
            t.TgZ(9, 'td', 19),
            t._uU(10),
            t.qZA(),
            t.TgZ(11, 'td', 28),
            t._uU(12),
            t.ALo(13, 'spaceNumber'),
            t.qZA()(),
            t.BQk();
        }
        if (2 & e) {
          const n = i.$implicit,
            o = i.index,
            u = i.deepLevel,
            l = t.MAs(2);
          t.xp6(5),
            t.Q6J('manualChange', !0)('visibilityIcon', !(null == n.children || !n.children.length))(
              'open',
              l.isChildrenOpened(o)
            )('level', u),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', t.xi3(13, 7, n.count, '0.0-0'), ' ');
        }
      }
      function ht(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr')(1, 'td', 31)(2, 'div', 32)(3, 'prizm-loader', 33),
          t._uU(4, ' Loading... '),
          t.qZA()()()()),
          2 & e && (t.xp6(3), t.Q6J('showLoader', !0)('overlay', !0));
      }
      function _t(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.ynx(0),
            t.TgZ(1, 'tr', 16, 17)(3, 'td', 19)(4, 'div', 20)(5, 'prizm-tree-button', 34),
            t.NdJ('openChange', function (u) {
              const c = t.CHM(n).index,
                r = t.MAs(2);
              return t.KtG(u ? r.showChildren(c) : r.hideChildren(c));
            }),
            t.qZA(),
            t.TgZ(6, 'span'),
            t._uU(7),
            t.qZA()()(),
            t.TgZ(8, 'td', 19),
            t._uU(9),
            t.qZA(),
            t.TgZ(10, 'td', 28),
            t._uU(11),
            t.ALo(12, 'spaceNumber'),
            t.qZA()(),
            t.BQk();
        }
        if (2 & e) {
          const n = i.$implicit,
            o = i.index,
            u = i.deepLevel,
            l = t.MAs(2);
          let c;
          t.xp6(5),
            t.Q6J('removeIcon', !(null != n.children && n.children.length))('open', l.isChildrenOpened(o))(
              'level',
              null !== (c = u) && void 0 !== c ? c : 0
            ),
            t.xp6(2),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', t.xi3(12, 6, n.count, '0.0-0'), ' ');
        }
      }
      const q = function () {
        return { standalone: !0 };
      };
      let bt = (() => {
        class e {
          constructor() {
            (this.sorter = p.A6e),
              (this.showFormatNumber = !0),
              (this.columns = ['name', 'category', 'amount']),
              (this.products = (0, N.Z)(b.$N)),
              (this.getTableChildrenWithLazy = n => (0, w.of)(n.children ?? []).pipe((0, Y.g)(2e3))),
              (this.getTableChildren = n => (0, w.of)(n.children ?? [])),
              (this.getRowId = n => n.code);
          }
          updateProducts() {
            this.products = (0, N.Z)(b.$N);
          }
          updateProduct(n) {
            const o = (0, N.Z)(this.products);
            (o[0].children[0].children[1].name = n
              ? '* ' + o[0].children[0].children[1].name
              : o[0].children[0].children[1].name.replace('* ', '')),
              (this.products = o);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-tree-example']],
            decls: 54,
            vars: 23,
            consts: [
              ['prizmButton', '', 'size', 's', 3, 'click'],
              ['size', 'm', 3, 'ngModel', 'ngModelOptions', 'ngModelChange'],
              [1, 'scrollable'],
              ['prizmTable', '', 'size', 's', 1, 'table', 3, 'columns'],
              ['prizmTableElement', 'prizmTable'],
              ['prizmThGroup', ''],
              ['prizmTh', '', 3, 'sorter', 4, 'prizmHead'],
              ['prizmTh', '', 4, 'prizmHead'],
              [4, 'ngIf'],
              ['prizmTbody', '', 3, 'data'],
              [4, 'prizmRow', 'prizmRowOf', 'prizmRowGetChildren', 'prizmRowGetRowId'],
              ['prizmTable', '', 'size', 's', 1, 'table'],
              ['prizmTh', ''],
              [4, 'prizmRow', 'prizmRowOf', 'prizmRowGetChildren'],
              [4, 'prizmTableTreeLoading'],
              ['prizmTh', '', 3, 'sorter'],
              ['prizmTr', ''],
              ['trElement', ''],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', ''],
              [1, 'col-tree'],
              [3, 'visibilityIcon', 'open', 'level', 'openChange'],
              ['treeButton', ''],
              [
                'appearance',
                'danger',
                'size',
                's',
                'appearanceType',
                'ghost',
                'prizmIconButton',
                '',
                'icon',
                'account-remove',
                3,
                'click',
                4,
                'ngIf',
              ],
              [
                'appearance',
                'secondary',
                'size',
                's',
                'appearanceType',
                'ghost',
                'prizmIconButton',
                '',
                'icon',
                'account-plus',
                3,
                'click',
                4,
                'ngIf',
              ],
              [
                'appearance',
                'danger',
                'size',
                's',
                'appearanceType',
                'ghost',
                'prizmIconButton',
                '',
                'icon',
                'account-remove',
                3,
                'click',
              ],
              [
                'appearance',
                'secondary',
                'size',
                's',
                'appearanceType',
                'ghost',
                'prizmIconButton',
                '',
                'icon',
                'account-plus',
                3,
                'click',
              ],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTr', '', 3, 'click'],
              [3, 'manualChange', 'visibilityIcon', 'open', 'level', 'openChange'],
              ['colspan', '5'],
              [
                2,
                'display',
                'flex',
                'justify-content',
                'center',
                'align-items',
                'center',
                'padding',
                '2px 0',
              ],
              [3, 'showLoader', 'overlay'],
              [3, 'removeIcon', 'open', 'level', 'openChange'],
            ],
            template: function (n, o) {
              if (1 & n) {
                const u = t.EpF();
                t.TgZ(0, 'h3'),
                  t._uU(1, 'Base example'),
                  t.qZA(),
                  t.TgZ(2, 'div')(3, 'button', 0),
                  t.NdJ('click', function () {
                    return o.updateProducts();
                  }),
                  t._uU(4, 'Refresh'),
                  t.qZA()(),
                  t.TgZ(5, 'div'),
                  t._uU(6, ' show amount column '),
                  t.TgZ(7, 'prizm-toggle', 1),
                  t.NdJ('ngModelChange', function (c) {
                    return (o.showFormatNumber = c);
                  }),
                  t.qZA()(),
                  t.TgZ(8, 'div'),
                  t._uU(9, ' show/hide all rows '),
                  t.TgZ(10, 'prizm-toggle', 1),
                  t.NdJ('ngModelChange', function (c) {
                    t.CHM(u);
                    const r = t.MAs(17);
                    return t.KtG(c ? r.tree.showAllChildren() : r.tree.hideAllChildren());
                  }),
                  t.qZA()(),
                  t.TgZ(11, 'div'),
                  t._uU(12, ' show/hide row by idx 0 '),
                  t.TgZ(13, 'prizm-toggle', 1),
                  t.NdJ('ngModelChange', function (c) {
                    t.CHM(u);
                    const r = t.MAs(17);
                    return t.KtG(c ? r.tree.showAllChildren(0) : r.tree.hideAllChildren(0));
                  }),
                  t.qZA()(),
                  t._UZ(14, 'br'),
                  t.TgZ(15, 'prizm-scrollbar', 2)(16, 'table', 3, 4)(18, 'thead')(19, 'tr', 5),
                  t.YNc(20, at, 2, 1, 'th', 6),
                  t.YNc(21, ut, 2, 0, 'th', 7),
                  t.YNc(22, ct, 2, 1, 'ng-container', 8),
                  t.qZA()(),
                  t.TgZ(23, 'tbody', 9),
                  t.YNc(24, Tt, 6, 3, 'ng-container', 10),
                  t.qZA()()(),
                  t.TgZ(25, 'h3'),
                  t._uU(26, 'Tree open on row click'),
                  t.qZA(),
                  t.TgZ(27, 'prizm-scrollbar', 2)(28, 'table', 11)(29, 'thead')(30, 'tr', 5)(31, 'th', 12),
                  t._uU(32, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                  t.qZA(),
                  t.TgZ(33, 'th', 12),
                  t._uU(34, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                  t.qZA(),
                  t.TgZ(35, 'th', 12),
                  t._uU(36, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                  t.qZA()()(),
                  t.TgZ(37, 'tbody', 9),
                  t.YNc(38, gt, 14, 10, 'ng-container', 13),
                  t.qZA()()(),
                  t.TgZ(39, 'h3'),
                  t._uU(40, 'With lazy load and custom loading template'),
                  t.qZA(),
                  t.TgZ(41, 'prizm-scrollbar', 2)(42, 'table', 11)(43, 'thead')(44, 'tr', 5)(45, 'th', 12),
                  t._uU(46, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                  t.qZA(),
                  t.TgZ(47, 'th', 12),
                  t._uU(48, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                  t.qZA(),
                  t.TgZ(49, 'th', 12),
                  t._uU(50, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                  t.qZA()()(),
                  t.TgZ(51, 'tbody', 9),
                  t.YNc(52, ht, 5, 2, 'tr', 14),
                  t.YNc(53, _t, 13, 9, 'ng-container', 13),
                  t.qZA()()();
              }
              2 & n &&
                (t.xp6(7),
                t.Q6J('ngModel', o.showFormatNumber)('ngModelOptions', t.DdM(20, q)),
                t.xp6(3),
                t.Q6J('ngModel', !1)('ngModelOptions', t.DdM(21, q)),
                t.xp6(3),
                t.Q6J('ngModel', !1)('ngModelOptions', t.DdM(22, q)),
                t.xp6(3),
                t.Q6J('columns', o.columns),
                t.xp6(4),
                t.Q6J('prizmHead', 'name'),
                t.xp6(1),
                t.Q6J('prizmHead', 'category'),
                t.xp6(1),
                t.Q6J('ngIf', o.showFormatNumber),
                t.xp6(1),
                t.Q6J('data', o.products),
                t.xp6(1),
                t.Q6J('prizmRowOf', o.products)('prizmRowGetChildren', o.getTableChildren)(
                  'prizmRowGetRowId',
                  o.getRowId
                ),
                t.xp6(13),
                t.Q6J('data', o.products),
                t.xp6(1),
                t.Q6J('prizmRowOf', o.products)('prizmRowGetChildren', o.getTableChildren),
                t.xp6(13),
                t.Q6J('data', o.products),
                t.xp6(2),
                t.Q6J('prizmRowOf', o.products)('prizmRowGetChildren', o.getTableChildrenWithLazy));
            },
            dependencies: [
              E.O5,
              B.w,
              m.Y,
              k.y,
              it.f,
              s.o,
              d.N,
              x.z,
              T.B,
              g.e,
              h.e,
              Z.j,
              y.R,
              _.F,
              f.JJ,
              f.On,
              H.L,
              C.n,
              J.K,
              z.C,
            ],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}.col-tree[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:1rem;justify-content:space-between}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function Ct(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.ynx(0),
            t.TgZ(1, 'tr', 8)(2, 'td', 9),
            t._uU(3),
            t.qZA(),
            t.TgZ(4, 'td', 9),
            t._uU(5),
            t.ALo(6, 'spaceNumber'),
            t.qZA(),
            t.TgZ(7, 'td', 10),
            t._uU(8),
            t._UZ(9, 'br'),
            t._uU(10),
            t.qZA(),
            t.TgZ(11, 'td', 10),
            t._uU(12),
            t.qZA(),
            t.TgZ(13, 'td', 9),
            t._uU(14),
            t.ALo(15, 'spaceNumber'),
            t.qZA(),
            t.TgZ(16, 'td')(17, 'button', 11),
            t.NdJ('click', function () {
              const l = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.remove(l));
            }),
            t._uU(18, '\u0423\u0434\u0430\u043b\u0438\u0442\u044c'),
            t.qZA()()(),
            t.BQk();
        }
        if (2 & e) {
          const n = i.$implicit,
            o = i.rowIdx,
            u = i.odd,
            l = i.first,
            c = i.last;
          t.xp6(3),
            t.hij(' ', o + 1, ' '),
            t.xp6(2),
            t.hij(' ', t.xi3(6, 8, n.code, '0.0-0'), ' '),
            t.xp6(3),
            t.hij(' ', n.name, ''),
            t.xp6(2),
            t.lnq(' ', u ? '#odd' : '#even', ' ', l ? '#first' : '', ' ', c ? '#last' : '', ' '),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.Oqu(t.xi3(15, 11, n.count, '0.0-0'));
        }
      }
      let zt = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']), (this.products = [...b.WL]);
          }
          remove(n) {
            this.products = this.products.filter(o => o !== n);
          }
          add() {
            const n = this.products.length;
            this.products = [
              ...this.products,
              {
                code: n.toString(),
                name: `Name ${n}`,
                category: n % 2 == 0 ? 'Active' : 'Sport',
                count: Math.random(),
                status: 'success',
              },
            ];
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-index-example']],
            decls: 23,
            vars: 2,
            consts: [
              [1, 'buttons'],
              ['prizmButton', '', 'size', 's', 'appearanceType', 'outline', 3, 'click'],
              [1, 'scrollable'],
              ['prizmTable', '', 'size', 'l', 1, 'table'],
              ['prizmThGroup', ''],
              ['prizmTh', ''],
              ['prizmTbody', '', 3, 'data'],
              [4, 'prizmRow', 'prizmRowOf'],
              ['prizmTr', ''],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
              ['prizmButton', '', 'size', 's', 'appearanceType', 'ghost', 3, 'click'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'div', 0)(1, 'button', 1),
                t.NdJ('click', function () {
                  return o.add();
                }),
                t._uU(2, '+'),
                t.qZA()(),
                t.TgZ(3, 'h3'),
                t._uU(4, 'Row index'),
                t.qZA(),
                t.TgZ(5, 'prizm-scrollbar', 2)(6, 'table', 3)(7, 'thead')(8, 'tr', 4)(9, 'th', 5),
                t._uU(10, '\u2116'),
                t.qZA(),
                t.TgZ(11, 'th', 5),
                t._uU(12, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(13, 'th', 5),
                t._uU(14, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(15, 'th', 5),
                t._uU(16, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(17, 'th', 5),
                t._uU(18, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA(),
                t.TgZ(19, 'th', 5),
                t._uU(20, '\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435'),
                t.qZA()()(),
                t.TgZ(21, 'tbody', 6),
                t.YNc(22, Ct, 19, 14, 'ng-container', 7),
                t.qZA()()()),
                2 & n && (t.xp6(21), t.Q6J('data', o.products), t.xp6(1), t.Q6J('prizmRowOf', o.products));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, _.F, C.n, J.K, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}.buttons[_ngcontent-%COMP%]{margin:8px 0}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var v = a(65619),
        R = a(37398);
      function ft(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 8),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA());
      }
      function Zt(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'td', 12)(1, 'div', 13)(2, 'prizm-tree-button', 14, 15),
            t.NdJ('openChange', function (u) {
              t.CHM(n);
              const l = t.oxw().index,
                c = t.MAs(2);
              return t.KtG(u ? c.showChildren(l) : c.hideChildren(l));
            }),
            t.qZA(),
            t.TgZ(4, 'span'),
            t._uU(5),
            t.qZA()()();
        }
        if (2 & e) {
          const n = t.oxw(),
            o = n.$implicit,
            u = n.index,
            l = n.deepLevel,
            c = t.MAs(2);
          let r;
          t.xp6(2),
            t.Q6J('visibilityIcon', !(null == o.children || !o.children.length))(
              'open',
              c.isChildrenOpened(u)
            )('level', null !== (r = l) && void 0 !== r ? r : 0),
            t.xp6(3),
            t.Oqu(o.name);
        }
      }
      function yt(e, i) {
        1 & e && (t.ynx(0), t.TgZ(1, 'tr', 9, 10), t.YNc(3, Zt, 6, 4, 'td', 11), t.qZA(), t.BQk()),
          2 & e && (t.xp6(3), t.Q6J('prizmCell', 'name'));
      }
      const Et = function () {
        return ['name'];
      };
      function At(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'table', 2, 3)(3, 'thead')(4, 'tr', 4),
            t.YNc(5, ft, 2, 0, 'th', 5),
            t.qZA()(),
            t.TgZ(6, 'tbody', 6),
            t.YNc(7, yt, 4, 1, 'ng-container', 7),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.ngIf,
            o = t.oxw();
          t.xp6(1),
            t.Q6J('columns', t.DdM(7, Et)),
            t.xp6(4),
            t.Q6J('prizmHead', 'name'),
            t.xp6(1),
            t.Q6J('data', n),
            t.xp6(1),
            t.Q6J('prizmRowOf', n)('prizmRowGetChildren', o.getTableChildren)('prizmRowGetRowId', 'id')(
              'prizmRowTrackBy',
              o.trackBy
            );
        }
      }
      let St = (() => {
        class e {
          constructor() {
            (this.activeFirstPage$ = new v.X(!0)),
              (this.entities$ = this.activeFirstPage$.pipe(
                (0, R.U)(
                  n => (
                    console.log('activeFirstPage', n),
                    n
                      ? [
                          { id: '1', name: 'test1' },
                          {
                            id: '2',
                            name: 'test2',
                            children: [
                              { id: '4', name: 'test4' },
                              {
                                id: '5',
                                name: 'test5',
                                children: [
                                  { id: '7', name: 'test7' },
                                  { id: '8', name: 'test8' },
                                  { id: '9', name: 'test9' },
                                ],
                              },
                              { id: '6', name: 'test6' },
                            ],
                          },
                          { id: '3', name: 'test3' },
                        ]
                      : [
                          { id: '10', name: 'test10' },
                          {
                            id: '11',
                            name: 'test11',
                            children: [
                              { id: '13', name: 'test13' },
                              {
                                id: '14',
                                name: 'test14',
                                children: [
                                  { id: '16', name: 'test16' },
                                  { id: '17', name: 'test17' },
                                  { id: '18', name: 'test18' },
                                ],
                              },
                              { id: '15', name: 'test15' },
                            ],
                          },
                          { id: '12', name: 'test12' },
                        ]
                  )
                )
              )),
              (this.getTableChildren = n => (0, w.of)(n.children ?? []));
          }
          toggleActiveFirstPage() {
            this.activeFirstPage$.next(!this.activeFirstPage$.value);
          }
          getRowId(n) {
            return n.id;
          }
          trackBy(n, o) {
            return o.id;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-tree-pagination-example']],
            decls: 5,
            vars: 4,
            consts: [
              ['prizmButton', '', 3, 'click'],
              [4, 'ngIf'],
              ['prizmTable', '', 'size', 's', 1, 'table', 3, 'columns'],
              ['prizmTableElement', 'prizmTable'],
              ['prizmThGroup', ''],
              ['prizmTh', '', 4, 'prizmHead'],
              ['prizmTbody', '', 3, 'data'],
              [4, 'prizmRow', 'prizmRowOf', 'prizmRowGetChildren', 'prizmRowGetRowId', 'prizmRowTrackBy'],
              ['prizmTh', ''],
              ['prizmTr', ''],
              ['trElement', ''],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', ''],
              [1, 'col-tree'],
              [3, 'visibilityIcon', 'open', 'level', 'openChange'],
              ['treeButton', ''],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'button', 0),
                t.NdJ('click', function () {
                  return o.toggleActiveFirstPage();
                }),
                t._uU(1),
                t.qZA(),
                t._UZ(2, 'br'),
                t.YNc(3, At, 8, 8, 'ng-container', 1),
                t.ALo(4, 'async')),
                2 & n &&
                  (t.xp6(1),
                  t.hij(
                    ' ',
                    '\u043d\u0430 ' +
                      (o.activeFirstPage$.value
                        ? '\u0432\u0442\u043e\u0440\u0443\u044e'
                        : '\u043f\u0435\u0440\u0432\u0443\u044e') +
                      ' \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443',
                    '\n'
                  ),
                  t.xp6(2),
                  t.Q6J('ngIf', t.lcZ(4, 2, o.entities$)));
            },
            dependencies: [E.O5, m.Y, k.y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, J.K, E.Ov],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}.col-tree[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:1rem;justify-content:space-between}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function Ot(e, i) {
        1 & e && (t.TgZ(0, 'th', 6), t._uU(1, 'Head 1'), t.qZA());
      }
      function Jt(e, i) {
        1 & e && (t.TgZ(0, 'th', 6), t._uU(1, 'Head 2'), t.qZA());
      }
      function Qt(e, i) {
        1 & e && (t.TgZ(0, 'td', 9), t._uU(1), t.qZA()), 2 & e && (t.xp6(1), t.Oqu('value 1'));
      }
      function wt(e, i) {
        1 & e && (t.TgZ(0, 'td', 9), t._uU(1), t.qZA()), 2 & e && (t.xp6(1), t.Oqu('value 2'));
      }
      function Pt(e, i) {
        1 & e &&
          (t.ynx(0),
          t.TgZ(1, 'tr', 7),
          t.YNc(2, Qt, 2, 1, 'td', 8),
          t.YNc(3, wt, 2, 1, 'td', 8),
          t.qZA(),
          t.BQk()),
          2 & e && (t.xp6(2), t.Q6J('prizmCell', 'c1'), t.xp6(1), t.Q6J('prizmCell', 'c2'));
      }
      const Mt = function () {
          return {};
        },
        Ut = function (e) {
          return [e];
        };
      let Nt = (() => {
        class e {
          constructor() {
            this.columns = ['c2', 'c1'];
          }
          changeOrder() {
            this.columns = [...this.columns].reverse();
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-inherit-cols-basic-example']],
            decls: 11,
            vars: 7,
            consts: [
              ['prizmButton', '', 'size', 's', 'appearanceType', 'ghost', 3, 'click'],
              ['prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['prizmTh', '', 4, 'prizmHead'],
              ['prizmTbody', '', 3, 'data'],
              [4, 'prizmRow'],
              ['prizmTh', ''],
              ['prizmTr', ''],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', ''],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'button', 0),
                t.NdJ('click', function () {
                  return o.changeOrder();
                }),
                t._uU(
                  1,
                  '\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a'
                ),
                t.qZA(),
                t._UZ(2, 'br')(3, 'br'),
                t.TgZ(4, 'table', 1)(5, 'thead')(6, 'tr', 2),
                t.YNc(7, Ot, 2, 0, 'th', 3),
                t.YNc(8, Jt, 2, 0, 'th', 3),
                t.qZA()(),
                t.TgZ(9, 'tbody', 4),
                t.YNc(10, Pt, 4, 2, 'ng-container', 5),
                t.qZA()()),
                2 & n &&
                  (t.xp6(4),
                  t.Q6J('columns', o.columns),
                  t.xp6(3),
                  t.Q6J('prizmHead', 'c1'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'c2'),
                  t.xp6(1),
                  t.Q6J('data', t.VKq(5, Ut, t.DdM(4, Mt))));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, J.K],
            changeDetection: 0,
          })),
          e
        );
      })();
      function qt(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 9)(2, 'td', 10),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA(),
            t.TgZ(5, 'td', 11),
            t._uU(6),
            t._UZ(7, 'br'),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, 'td', 11),
            t._uU(10),
            t.qZA(),
            t.TgZ(11, 'td', 10),
            t._uU(12),
            t.ALo(13, 'spaceNumber'),
            t.qZA(),
            t.TgZ(14, 'td', 11),
            t._uU(15),
            t.qZA(),
            t.TgZ(16, 'td', 11),
            t._uU(17),
            t.qZA(),
            t.TgZ(18, 'td', 10),
            t._uU(19),
            t.ALo(20, 'spaceNumber'),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit,
            o = i.odd,
            u = i.first,
            l = i.last;
          t.xp6(3),
            t.hij(' ', t.xi3(4, 10, n.code, '0.0-0'), ' '),
            t.xp6(3),
            t.hij(' ', n.name, ''),
            t.xp6(2),
            t.lnq(' ', o ? '#odd' : '#even', ' ', u ? '#first' : '', ' ', l ? '#last' : '', ' '),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.Oqu(t.xi3(13, 13, n.count, '0.0-0')),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.Oqu(t.xi3(20, 16, n.count, '0.0-0'));
        }
      }
      function vt(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 9)(2, 'td', 10),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA(),
            t.TgZ(5, 'td', 11),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, 'td', 11),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, 'td', 10),
            t._uU(10),
            t.ALo(11, 'spaceNumber'),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit;
          t.xp6(3),
            t.Oqu(t.xi3(4, 4, n.code, '0.0-0')),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', t.xi3(11, 7, n.count, '0.0-0'), ' ');
        }
      }
      function Rt(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 9)(2, 'td', 10),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA(),
            t.TgZ(5, 'td', 11),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, 'td', 11),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, 'td', 10),
            t._uU(10),
            t.ALo(11, 'spaceNumber'),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit;
          t.xp6(3),
            t.Oqu(t.xi3(4, 4, n.code, '0.0-0')),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', t.xi3(11, 7, n.count, '0.0-0'), ' ');
        }
      }
      function Lt(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 9)(2, 'td', 10),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA(),
            t.TgZ(5, 'td', 11),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, 'td', 11),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, 'td', 10),
            t._uU(10),
            t.ALo(11, 'spaceNumber'),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit;
          t.xp6(3),
            t.Oqu(t.xi3(4, 4, n.code, '0.0-0')),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', t.xi3(11, 7, n.count, '0.0-0'), ' ');
        }
      }
      let Dt = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']), (this.products = b.WL);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-basic-example']],
            decls: 70,
            vars: 8,
            consts: [
              [1, 'scrollable'],
              ['prizmTable', '', 'size', 'l', 1, 'table'],
              ['prizmThGroup', ''],
              ['prizmTh', ''],
              ['prizmTbody', '', 3, 'data'],
              [4, 'prizmRow', 'prizmRowOf'],
              ['prizmTable', '', 'size', 'm', 1, 'table'],
              ['prizmTable', '', 'size', 's', 1, 'table'],
              ['prizmTable', '', 'size', 'xs', 1, 'table'],
              ['prizmTr', ''],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'h3'),
                t._uU(1, 'Size L'),
                t.qZA(),
                t.TgZ(2, 'prizm-scrollbar', 0)(3, 'table', 1)(4, 'thead')(5, 'tr', 2)(6, 'th', 3),
                t._uU(7, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(8, 'th', 3),
                t._uU(9, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(10, 'th', 3),
                t._uU(11, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(12, 'th', 3),
                t._uU(13, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA(),
                t.TgZ(14, 'th', 3),
                t._uU(15, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 2'),
                t.qZA(),
                t.TgZ(16, 'th', 3),
                t._uU(17, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2'),
                t.qZA(),
                t.TgZ(18, 'th', 3),
                t._uU(19, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 2'),
                t.qZA()()(),
                t.TgZ(20, 'tbody', 4),
                t.YNc(21, qt, 21, 19, 'ng-container', 5),
                t.qZA()()(),
                t.TgZ(22, 'h3'),
                t._uU(23, 'Size M'),
                t.qZA(),
                t.TgZ(24, 'prizm-scrollbar', 0)(25, 'table', 6)(26, 'thead')(27, 'tr', 2)(28, 'th', 3),
                t._uU(29, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(30, 'th', 3),
                t._uU(31, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(32, 'th', 3),
                t._uU(33, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(34, 'th', 3),
                t._uU(35, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA()()(),
                t.TgZ(36, 'tbody', 4),
                t.YNc(37, vt, 12, 10, 'ng-container', 5),
                t.qZA()()(),
                t.TgZ(38, 'h3'),
                t._uU(39, 'Size S'),
                t.qZA(),
                t.TgZ(40, 'prizm-scrollbar', 0)(41, 'table', 7)(42, 'thead')(43, 'tr', 2)(44, 'th', 3),
                t._uU(45, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(46, 'th', 3),
                t._uU(47, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(48, 'th', 3),
                t._uU(49, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(50, 'th', 3),
                t._uU(51, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA()()(),
                t.TgZ(52, 'tbody', 4),
                t.YNc(53, Rt, 12, 10, 'ng-container', 5),
                t.qZA()()(),
                t.TgZ(54, 'h3'),
                t._uU(55, 'Size XS'),
                t.qZA(),
                t.TgZ(56, 'prizm-scrollbar', 0)(57, 'table', 8)(58, 'thead')(59, 'tr', 2)(60, 'th', 3),
                t._uU(61, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(62, 'th', 3),
                t._uU(63, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(64, 'th', 3),
                t._uU(65, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(66, 'th', 3),
                t._uU(67, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA()()(),
                t.TgZ(68, 'tbody', 4),
                t.YNc(69, Lt, 12, 10, 'ng-container', 5),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(20),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(15),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(15),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(15),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, _.F, C.n, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var Yt = a(34668);
      function Bt(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 7)(2, 'td', 8)(3, 'div', 9)(4, 'span'),
            t._uU(5),
            t.qZA()()(),
            t.TgZ(6, 'td', 8),
            t._uU(7),
            t.qZA(),
            t.TgZ(8, 'td', 10),
            t._uU(9),
            t.ALo(10, 'spaceNumber'),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit;
          t.xp6(5),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', t.xi3(10, 3, n.count, '0.0-0'), ' ');
        }
      }
      function kt(e, i) {
        1 & e &&
          (t.ynx(0),
          t.TgZ(1, 'tr')(2, 'td', 11)(3, 'div', 12),
          t._uU(4, 'Empty Table'),
          t.qZA()()(),
          t.BQk());
      }
      function Ht(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 7)(2, 'td', 8)(3, 'div', 9)(4, 'span'),
            t._uU(5),
            t.qZA()()(),
            t.TgZ(6, 'td', 8),
            t._uU(7),
            t.qZA(),
            t.TgZ(8, 'td', 10),
            t._uU(9),
            t.ALo(10, 'spaceNumber'),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit;
          t.xp6(5),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', t.xi3(10, 3, n.count, '0.0-0'), ' ');
        }
      }
      let Ft = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']), (this.products = []);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-empty-example']],
            decls: 29,
            vars: 4,
            consts: [
              [1, 'scrollable'],
              ['prizmTable', '', 'size', 's', 1, 'table'],
              ['prizmThGroup', ''],
              ['prizmTh', ''],
              ['prizmTbody', '', 3, 'data'],
              [4, 'prizmRow', 'prizmRowOf'],
              [4, 'prizmTableEmpty'],
              ['prizmTr', ''],
              ['prizmTd', ''],
              [1, 'col-tree'],
              ['prizmTd', '', 1, 'format__number'],
              ['colspan', '3'],
              [2, 'text-align', 'center', 'padding', '2px 0'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'h3'),
                t._uU(1, 'Default empty example'),
                t.qZA(),
                t.TgZ(2, 'prizm-scrollbar', 0)(3, 'table', 1)(4, 'thead')(5, 'tr', 2)(6, 'th', 3),
                t._uU(7, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(8, 'th', 3),
                t._uU(9, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(10, 'th', 3),
                t._uU(11, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA()()(),
                t.TgZ(12, 'tbody', 4),
                t.YNc(13, Bt, 11, 6, 'ng-container', 5),
                t.qZA()()(),
                t.TgZ(14, 'h3'),
                t._uU(15, 'Custom empty example'),
                t.qZA(),
                t.TgZ(16, 'prizm-scrollbar', 0)(17, 'table', 1)(18, 'thead')(19, 'tr', 2)(20, 'th', 3),
                t._uU(21, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(22, 'th', 3),
                t._uU(23, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(24, 'th', 3),
                t._uU(25, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA()()(),
                t.TgZ(26, 'tbody', 4),
                t.YNc(27, kt, 5, 0, 'ng-container', 6),
                t.YNc(28, Ht, 11, 6, 'ng-container', 5),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(12),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(13),
                  t.Q6J('data', o.products),
                  t.xp6(2),
                  t.Q6J('prizmRowOf', o.products));
            },
            dependencies: [Yt.d, m.Y, s.o, d.N, x.z, T.B, g.e, h.e, _.F, C.n, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}.col-tree[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:1rem;justify-content:space-between}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var L = a(6136);
      function It(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 10),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA());
      }
      function $t(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 10), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA());
      }
      function Gt(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 10),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA());
      }
      function jt(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function Kt(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function Vt(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function Xt(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function Wt(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'tr', 11),
            t.NdJ('click', function () {
              const l = t.CHM(n).$implicit,
                c = t.oxw();
              return t.KtG(c.singleSelection(l.code));
            }),
            t.YNc(1, jt, 3, 4, 'td', 12),
            t.YNc(2, Kt, 2, 1, 'td', 13),
            t.YNc(3, Vt, 2, 1, 'td', 13),
            t.YNc(4, Xt, 3, 4, 'td', 12),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit,
            o = t.oxw();
          t.Q6J('active', o.singleSelectedItemCode === n.code),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count');
        }
      }
      function te(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'th', 16)(1, 'prizm-checkbox', 17),
            t.NdJ('changed', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG(l.onMultiSelectionCheckbox(u));
            }),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw();
          t.Q6J('sorter', null),
            t.xp6(1),
            t.Q6J('checked', n.selectedItemsCodes.length === n.products2.length)(
              'indeterminate',
              n.selectedItemsCodes.length !== n.products2.length && n.selectedItemsCodes.length > 0
            );
        }
      }
      function ee(e, i) {
        1 & e && (t.TgZ(0, 'th', 3), t._uU(1, '\u041a\u043e\u0434'), t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function ne(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 3),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function oe(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 3), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function ie(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 3),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function ae(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._UZ(1, 'prizm-checkbox', 19), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.xp6(1), t.Q6J('checked', o.selectedItemsCodes.includes(n.code));
        }
      }
      function ue(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function le(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function ce(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function re(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function pe(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'tr', 18),
            t.NdJ('click', function (u) {
              const c = t.CHM(n).$implicit,
                r = t.oxw();
              return t.KtG(r.multiSelection(u, c.code));
            }),
            t.YNc(1, ae, 2, 1, 'td', 13),
            t.YNc(2, ue, 3, 4, 'td', 12),
            t.YNc(3, le, 2, 1, 'td', 13),
            t.YNc(4, ce, 2, 1, 'td', 13),
            t.YNc(5, re, 3, 4, 'td', 12),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit,
            o = t.oxw();
          t.Q6J('active', n.code === o.selectedItemsCodes[o.selectedItemsCodes.length - 1]),
            t.xp6(1),
            t.Q6J('prizmCell', 'checkbox'),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count');
        }
      }
      let me = (() => {
        class e {
          constructor() {
            (this.singleSelectedItemCode = null),
              (this.selectedItemsCodes = []),
              (this.selectedMetaItemsCodes = []),
              (this.columns = ['code', 'name', 'category', 'count']),
              (this.multipleSelectionColumns = ['checkbox', 'code', 'name', 'category', 'count']),
              (this.products1 = b.WL),
              (this.products2 = b.u8);
          }
          multiSelection(n, o) {
            this.selectedItemsCodes.includes(o)
              ? (this.selectedItemsCodes = this.selectedItemsCodes.filter(u => u !== o))
              : this.selectedItemsCodes.push(o);
          }
          multiSelectMetaItem(n) {
            this.selectedMetaItemsCodes.includes(n)
              ? (this.selectedMetaItemsCodes = this.selectedMetaItemsCodes.filter(o => o !== n))
              : this.selectedMetaItemsCodes.push(n);
          }
          singleSelection(n) {
            this.singleSelectedItemCode = this.singleSelectedItemCode === n ? null : n;
          }
          onMultiSelectionMetaCheckbox(n) {
            this.selectedMetaItemsCodes = this.products2.filter(() => n).map(o => o.code);
          }
          onMultiSelectionCheckbox(n) {
            this.selectedItemsCodes = this.products2.filter(() => n).map(o => o.code);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-selectable-example']],
            decls: 26,
            vars: 14,
            consts: [
              ['visibility', 'hidden', 1, 'scrollable'],
              ['prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['prizmTh', '', 3, 'resizable'],
              ['prizmTh', '', 4, 'prizmHead'],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 3, 'active', 'click', 4, 'prizmRow'],
              ['class', 'checkbox-header', 'prizmTh', '', 3, 'sorter', 4, 'prizmHead'],
              ['prizmTh', '', 3, 'resizable', 4, 'prizmHead'],
              ['prizmTr', '', 3, 'active', 'click', 4, 'prizmRow', 'prizmRowOf'],
              ['prizmTh', ''],
              ['prizmTr', '', 1, 'row', 3, 'active', 'click'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
              ['prizmTh', '', 1, 'checkbox-header', 3, 'sorter'],
              [1, 'checkbox', 3, 'checked', 'indeterminate', 'changed'],
              ['prizmTr', '', 3, 'active', 'click'],
              [1, 'checkbox', 3, 'checked'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'h2'),
                t._uU(1, 'Single selection'),
                t.qZA(),
                t.TgZ(2, 'prizm-scrollbar', 0)(3, 'table', 1)(4, 'thead')(5, 'tr', 2)(6, 'th', 3),
                t._uU(7, '\u041a\u043e\u0434'),
                t.qZA(),
                t.YNc(8, It, 2, 0, 'th', 4),
                t.YNc(9, $t, 2, 0, 'th', 4),
                t.YNc(10, Gt, 2, 0, 'th', 4),
                t.qZA()(),
                t.TgZ(11, 'tbody', 5),
                t.YNc(12, Wt, 5, 5, 'tr', 6),
                t.qZA()()(),
                t.TgZ(13, 'h2'),
                t._uU(14, 'Multiple selection'),
                t.qZA(),
                t.TgZ(15, 'prizm-scrollbar', 0)(16, 'table', 1)(17, 'thead')(18, 'tr', 2),
                t.YNc(19, te, 2, 3, 'th', 7),
                t.YNc(20, ee, 2, 1, 'th', 8),
                t.YNc(21, ne, 2, 1, 'th', 8),
                t.YNc(22, oe, 2, 1, 'th', 8),
                t.YNc(23, ie, 2, 1, 'th', 8),
                t.qZA()(),
                t.TgZ(24, 'tbody', 5),
                t.YNc(25, pe, 6, 6, 'tr', 9),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(3),
                  t.Q6J('columns', o.columns),
                  t.xp6(3),
                  t.Q6J('resizable', !0),
                  t.xp6(2),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('data', o.products1),
                  t.xp6(5),
                  t.Q6J('columns', o.multipleSelectionColumns),
                  t.xp6(3),
                  t.Q6J('prizmHead', 'checkbox'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'code'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('data', o.products2),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products2));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, C.n, L.q, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .checkbox-header[_ngcontent-%COMP%]{width:40px}[_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{height:16px;width:16px;margin:0 auto;display:flex}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var O = a(19947);
      function se(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 3),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function de(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 3), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function xe(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 3),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function Te(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function ge(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'td', 12)(1, 'input', 13),
            t.NdJ('dblclick', function (u) {
              t.CHM(n);
              const l = t.oxw().$implicit,
                c = t.oxw();
              return t.KtG(c.setEditableItem(u, l, 'name'));
            })('blur', function (u) {
              t.CHM(n);
              const l = t.oxw().$implicit,
                c = t.oxw();
              return t.KtG(c.changeItemName(u, 'name', l));
            }),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          let u;
          t.Q6J('status', null !== (u = n.status) && void 0 !== u ? u : 'default'),
            t.xp6(1),
            t.ekj(
              'edit-cell',
              (null == o.currentEditableProduct ? null : o.currentEditableProduct.product) === n &&
                'name' === (null == o.currentEditableProduct ? null : o.currentEditableProduct.key)
            ),
            t.Q6J('value', n.name)(
              'readOnly',
              !(
                (null == o.currentEditableProduct ? null : o.currentEditableProduct.product) === n &&
                'name' === (null == o.currentEditableProduct ? null : o.currentEditableProduct.key)
              )
            );
        }
      }
      function he(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function _e(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function be(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'tr', 7),
            t.NdJ('click', function (u) {
              const c = t.CHM(n).$implicit,
                r = t.oxw();
              return t.KtG(
                r.selectRow(
                  u,
                  c.code,
                  (null == r.currentEditableProduct ? null : r.currentEditableProduct.product) === c &&
                    'name' === (null == r.currentEditableProduct ? null : r.currentEditableProduct.key)
                )
              );
            }),
            t.YNc(1, Te, 3, 4, 'td', 8),
            t.YNc(2, ge, 2, 5, 'td', 9),
            t.YNc(3, he, 2, 1, 'td', 10),
            t.YNc(4, _e, 3, 4, 'td', 8),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit,
            o = t.oxw();
          t.Q6J('active', o.selectedItemsCodes.includes(n.code)),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count');
        }
      }
      let Ce = (() => {
        class e {
          constructor() {
            (this.selectedItemsCodes = []),
              (this.columns = ['code', 'name', 'category', 'count']),
              (this.products = b.WL),
              (this.currentEditableProduct = null);
          }
          changeItemName(n, o, u) {
            const l = n.target.value,
              c = { ...u, [o]: l };
            (this.currentEditableProduct = null), (this.products = this.products.map(r => (r === u ? c : r)));
          }
          setEditableItem(n, o, u) {
            const l = n.target;
            n.stopPropagation(), l.focus(), (this.currentEditableProduct = { product: o, key: u });
          }
          selectRow(n, o, u = !1) {
            u ||
              (this.selectedItemsCodes.includes(o)
                ? (this.selectedItemsCodes = this.selectedItemsCodes.filter(l => l !== o))
                : this.selectedItemsCodes.push(o));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-editable-col-example']],
            decls: 11,
            vars: 7,
            consts: [
              ['visibility', 'hidden', 1, 'scrollable'],
              ['prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['prizmTh', '', 3, 'resizable'],
              ['prizmTh', '', 3, 'resizable', 4, 'prizmHead'],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 3, 'active', 'click', 4, 'prizmRow', 'prizmRowOf'],
              ['prizmTr', '', 1, 'row', 3, 'active', 'click'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['class', 'row_editable', 'prizmTd', '', 3, 'status', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', '', 1, 'row_editable', 3, 'status'],
              ['prizmInput', '', 3, 'value', 'readOnly', 'dblclick', 'blur'],
              ['prizmTd', ''],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'prizm-scrollbar', 0)(1, 'table', 1)(2, 'thead')(3, 'tr', 2)(4, 'th', 3),
                t._uU(5, '\u041a\u043e\u0434'),
                t.qZA(),
                t.YNc(6, se, 2, 1, 'th', 4),
                t.YNc(7, de, 2, 1, 'th', 4),
                t.YNc(8, xe, 2, 1, 'th', 4),
                t.qZA()(),
                t.TgZ(9, 'tbody', 5),
                t.YNc(10, be, 5, 5, 'tr', 6),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(1),
                  t.Q6J('columns', o.columns),
                  t.xp6(3),
                  t.Q6J('resizable', !0),
                  t.xp6(2),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, O.l, C.n, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   .row_editable[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .row_editable[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .row_editable[_ngcontent-%COMP%]   .edit-cell[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px var(--prizm-v3-form-active) inset;position:relative;z-index:10}[_nghost-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:0 8px}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var ze = a(22137),
        F = a(83482);
      function fe(e, i) {
        1 & e && (t.TgZ(0, 'th', 8), t._uU(1, '\u041a\u043e\u0434'), t.qZA()),
          2 & e && t.Q6J('resizable', !0)('sorter', null);
      }
      function Ze(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 9),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function ye(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 9), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function Ee(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 9),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function Ae(e, i) {
        1 & e && t._UZ(0, 'th', 10), 2 & e && t.Q6J('sorter', null);
      }
      function Se(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function Oe(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'td', 16)(1, 'input', 17),
            t.NdJ('click', function (u) {
              return u.stopPropagation();
            })('blur', function (u) {
              t.CHM(n);
              const l = t.oxw(2);
              return t.KtG(l.changeItemName(u, 'name'));
            }),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.xp6(1), t.Q6J('disabled', o.currentEditableRow !== n)('value', n.name);
        }
      }
      function Je(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'td', 16)(1, 'prizm-input-select', 18),
            t.NdJ('ngModelChange', function (u) {
              t.CHM(n);
              const l = t.oxw(2);
              return t.KtG(l.changeByValue(u, 'category'));
            }),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.xp6(1),
            t.Q6J('disabled', o.currentEditableRow !== n)('ngModel', n.category)('items', o.categories);
        }
      }
      function Qe(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'td', 16)(1, 'input', 19),
            t.NdJ('click', function (u) {
              return u.stopPropagation();
            })('blur', function (u) {
              t.CHM(n);
              const l = t.oxw(2);
              return t.KtG(l.changeItemName(u, 'count'));
            }),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.xp6(1), t.Q6J('disabled', o.currentEditableRow !== n)('value', n.count);
        }
      }
      function we(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-icon', 26),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.oxw(2).$implicit,
                l = t.oxw();
              return t.KtG(l.onRowEditInit(u));
            }),
            t.qZA();
        }
      }
      function Pe(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-icon', 27),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.oxw(3);
              return t.KtG(u.onRowEditSave());
            }),
            t.qZA();
        }
      }
      function Me(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-icon', 28),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.oxw(2).$implicit,
                l = t.oxw();
              return t.KtG(l.onRowEditCancel(u));
            }),
            t.qZA();
        }
      }
      function Ue(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'td', 20)(1, 'div', 21),
            t.NdJ('click', function (u) {
              return u.stopPropagation();
            }),
            t.YNc(2, we, 1, 0, 'prizm-icon', 22),
            t.YNc(3, Pe, 1, 0, 'prizm-icon', 23),
            t.YNc(4, Me, 1, 0, 'prizm-icon', 24),
            t.TgZ(5, 'prizm-icon', 25),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.oxw().$implicit,
                l = t.oxw();
              return t.KtG(l.onRowDelete(u));
            }),
            t.qZA()()();
        }
        if (2 & e) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.xp6(2),
            t.Q6J('ngIf', o.currentEditableRow !== n),
            t.xp6(1),
            t.Q6J('ngIf', o.currentEditableRow === n),
            t.xp6(1),
            t.Q6J('ngIf', o.currentEditableRow === n);
        }
      }
      function Ne(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'tr', 11),
            t.NdJ('click', function (u) {
              const c = t.CHM(n).$implicit,
                r = t.oxw();
              return t.KtG(r.selectRow(u, c.code, r.currentEditableRow === c));
            }),
            t.YNc(1, Se, 3, 4, 'td', 12),
            t.YNc(2, Oe, 2, 2, 'td', 13),
            t.YNc(3, Je, 2, 3, 'td', 13),
            t.YNc(4, Qe, 2, 2, 'td', 13),
            t.YNc(5, Ue, 6, 3, 'td', 14),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit,
            o = t.oxw();
          t.ekj('row_edit', o.currentEditableRow === n),
            t.Q6J('active', o.selectedItemsCodes.includes(n.code)),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'),
            t.xp6(1),
            t.Q6J('prizmCell', 'actions');
        }
      }
      let qe = (() => {
        class e {
          constructor() {
            (this.selectedItemsCodes = []),
              (this.columns = ['code', 'name', 'category', 'count', 'actions']),
              (this.products = b.WL),
              (this.categories = [...new Set(this.products.map(n => n.category))]),
              (this.updatedRow = null),
              (this.currentEditableRow = null);
          }
          onRowEditInit(n) {
            (this.currentEditableRow = n), (this.updatedRow = { ...n });
          }
          onRowEditSave() {
            (this.products =
              this.products?.map(n => (n === this.currentEditableRow ? this.updatedRow : n)) ?? []),
              (this.currentEditableRow = null),
              (this.updatedRow = null);
          }
          onRowEditCancel(n) {
            (this.products = this.products.map(o =>
              o === this.currentEditableRow ? { ...this.currentEditableRow } : o
            )),
              (this.currentEditableRow = null),
              (this.updatedRow = null);
          }
          onRowDelete(n) {
            this.products = this.products.filter(o => o !== n);
          }
          changeItemName(n, o) {
            this.changeByValue(n.target.value, o);
          }
          changeByValue(n, o) {
            this.updatedRow = { ...this.updatedRow, [o]: n };
          }
          selectRow(n, o, u = !1) {
            u ||
              (this.selectedItemsCodes.includes(o)
                ? (this.selectedItemsCodes = this.selectedItemsCodes.filter(l => l !== o))
                : this.selectedItemsCodes.push(o));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-editable-row-example']],
            decls: 11,
            vars: 8,
            consts: [
              ['visibility', 'hidden', 1, 'scrollable'],
              ['prizmTable', '', 'tableBorderStyle', 'horizontal', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['prizmTh', '', 3, 'resizable', 'sorter', 4, 'prizmHead'],
              ['prizmTh', '', 3, 'resizable', 4, 'prizmHead'],
              ['class', 'head__actions', 'prizmTh', '', 3, 'sorter', 4, 'prizmHead'],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 3, 'active', 'row_edit', 'click', 4, 'prizmRow', 'prizmRowOf'],
              ['prizmTh', '', 3, 'resizable', 'sorter'],
              ['prizmTh', '', 3, 'resizable'],
              ['prizmTh', '', 1, 'head__actions', 3, 'sorter'],
              ['prizmTr', '', 1, 'row', 3, 'active', 'click'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['class', 'row__editable', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', '', 1, 'row__editable'],
              ['prizmInput', '', 3, 'disabled', 'value', 'click', 'blur'],
              [3, 'disabled', 'ngModel', 'items', 'ngModelChange'],
              ['prizmInput', '', 1, 'format__number', 3, 'disabled', 'value', 'click', 'blur'],
              ['prizmTd', ''],
              [1, 'edit-buttons-container', 3, 'click'],
              ['class', 'edit-buttons', 'size', '16', 'iconClass', 'editor-mode', 3, 'click', 4, 'ngIf'],
              ['class', 'edit-buttons', 'size', '16', 'iconClass', 'selection-choice', 3, 'click', 4, 'ngIf'],
              ['class', 'edit-buttons', 'size', '16', 'iconClass', 'cancel-close', 3, 'click', 4, 'ngIf'],
              ['size', '16', 'iconClass', 'delete', 1, 'edit-buttons', 3, 'click'],
              ['size', '16', 'iconClass', 'editor-mode', 1, 'edit-buttons', 3, 'click'],
              ['size', '16', 'iconClass', 'selection-choice', 1, 'edit-buttons', 3, 'click'],
              ['size', '16', 'iconClass', 'cancel-close', 1, 'edit-buttons', 3, 'click'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'prizm-scrollbar', 0)(1, 'table', 1)(2, 'thead')(3, 'tr', 2),
                t.YNc(4, fe, 2, 2, 'th', 3),
                t.YNc(5, Ze, 2, 1, 'th', 4),
                t.YNc(6, ye, 2, 1, 'th', 4),
                t.YNc(7, Ee, 2, 1, 'th', 4),
                t.YNc(8, Ae, 1, 1, 'th', 5),
                t.qZA()(),
                t.TgZ(9, 'tbody', 6),
                t.YNc(10, Ne, 6, 8, 'tr', 7),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(1),
                  t.Q6J('columns', o.columns),
                  t.xp6(3),
                  t.Q6J('prizmHead', 'code'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'actions'),
                  t.xp6(1),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products));
            },
            dependencies: [
              E.O5,
              ze.$,
              m.Y,
              s.o,
              d.N,
              x.z,
              T.B,
              g.e,
              h.e,
              Z.j,
              y.R,
              _.F,
              f.JJ,
              f.On,
              O.l,
              F.b,
              C.n,
              z.C,
            ],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   .edit-buttons-container[_ngcontent-%COMP%]{height:100%;width:100%;padding:0 8px;display:flex;align-items:center;justify-content:center;gap:8px}[_nghost-%COMP%]   .edit-buttons-container[_ngcontent-%COMP%]   .edit-buttons[_ngcontent-%COMP%]{height:16px;width:16px;display:flex}[_nghost-%COMP%]   .edit-buttons-container[_ngcontent-%COMP%]   .edit-buttons[_ngcontent-%COMP%]:hover{color:#337eff}[_nghost-%COMP%]   .row__editable[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .row__editable[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px}[_nghost-%COMP%]   .row__editable[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{cursor:unset}[_nghost-%COMP%]   .row_edit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid var(--prizm-v3-form-active);position:relative;z-index:10}[_nghost-%COMP%]   .row_edit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child){border-left:none}[_nghost-%COMP%]   .head__actions[_ngcontent-%COMP%]{width:100px}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var ve = a(27921),
        I = a(60184);
      function Re(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 8),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA());
      }
      function Le(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'th', 8),
            t._uU(1, ' \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f '),
            t.TgZ(2, 'prizm-dropdown-host', 9),
            t.NdJ('isOpenChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.filterOpen = u));
            }),
            t.TgZ(3, 'prizm-icon', 10),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.oxw();
              return t.KtG((u.filterOpen = !u.filterOpen));
            }),
            t.qZA()()();
        }
        if (2 & e) {
          const n = t.oxw(),
            o = t.MAs(14);
          t.xp6(2),
            t.Q6J('isOpen', n.filterOpen)('content', o),
            t.xp6(1),
            t.ekj('filter__category_active', n.filterOpen || n.filterOn);
        }
      }
      function De(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 8),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA());
      }
      function Ye(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function Be(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function ke(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function He(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function Fe(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr', 11),
          t.YNc(1, Ye, 3, 4, 'td', 12),
          t.YNc(2, Be, 2, 1, 'td', 13),
          t.YNc(3, ke, 2, 1, 'td', 13),
          t.YNc(4, He, 3, 4, 'td', 12),
          t.qZA()),
          2 & e &&
            (t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      function Ie(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'div', 16)(1, 'form', 17)(2, 'prizm-checkbox', 18),
            t._uU(3, 'Premium'),
            t.qZA(),
            t.TgZ(4, 'prizm-checkbox', 19),
            t._uU(5, 'Active'),
            t.qZA(),
            t.TgZ(6, 'prizm-checkbox', 20),
            t._uU(7, 'Sport'),
            t.qZA(),
            t.TgZ(8, 'prizm-checkbox', 21),
            t._uU(9, 'Sport+'),
            t.qZA()()()),
          2 & e)
        ) {
          const n = t.oxw();
          t.xp6(1), t.Q6J('formGroup', n.formGroup);
        }
      }
      let $e = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']),
              (this.products = b.WL),
              (this.productsCategories = ['Premium', 'Active', 'Sport', 'Sport+']),
              (this.filterOpen = !1),
              (this.filterOn = !1),
              (this.formGroup = new f.nJ({
                control1: new f.p4(!0),
                control2: new f.p4(!0),
                control3: new f.p4(!0),
                control4: new f.p4(!0),
              })),
              (this.filteredProducts$ = this.formGroup.valueChanges.pipe(
                (0, R.U)(n => {
                  const o = Object.values(n),
                    u = this.productsCategories.filter((l, c) => o[c]);
                  return (
                    (this.filterOn = u.length !== o.length), this.products.filter(l => u.includes(l.category))
                  );
                }),
                (0, ve.O)(this.products)
              ));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-filter-example']],
            decls: 15,
            vars: 11,
            consts: [
              ['visibility', 'hidden', 1, 'scrollable'],
              ['prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['prizmTh', '', 3, 'resizable'],
              ['prizmTh', '', 4, 'prizmHead'],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 4, 'prizmRow', 'prizmRowOf'],
              ['dropdown', ''],
              ['prizmTh', ''],
              ['prizmDropdownHostWidth', 'auto', 1, 'filter', 3, 'isOpen', 'content', 'isOpenChange'],
              ['iconClass', 'sort-filter', 1, 'filter__category', 3, 'click'],
              ['prizmTr', '', 1, 'row'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
              [1, 'filter-container'],
              [3, 'formGroup'],
              ['formControlName', 'control1'],
              ['formControlName', 'control2'],
              ['formControlName', 'control3'],
              ['formControlName', 'control4'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'prizm-scrollbar', 0)(1, 'table', 1)(2, 'thead')(3, 'tr', 2)(4, 'th', 3),
                t._uU(5, '\u041a\u043e\u0434'),
                t.qZA(),
                t.YNc(6, Re, 2, 0, 'th', 4),
                t.YNc(7, Le, 4, 4, 'th', 4),
                t.YNc(8, De, 2, 0, 'th', 4),
                t.qZA()(),
                t.TgZ(9, 'tbody', 5),
                t.ALo(10, 'async'),
                t.YNc(11, Fe, 5, 4, 'tr', 6),
                t.ALo(12, 'async'),
                t.qZA()()(),
                t.YNc(13, Ie, 10, 1, 'ng-template', null, 7, t.W1O)),
                2 & n &&
                  (t.xp6(1),
                  t.Q6J('columns', o.columns),
                  t.xp6(3),
                  t.Q6J('resizable', !0),
                  t.xp6(2),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('data', t.lcZ(10, 7, o.filteredProducts$)),
                  t.xp6(2),
                  t.Q6J('prizmRowOf', t.lcZ(12, 9, o.filteredProducts$)));
            },
            dependencies: [
              m.Y,
              s.o,
              d.N,
              x.z,
              T.B,
              g.e,
              h.e,
              Z.j,
              y.R,
              _.F,
              f._Y,
              f.JJ,
              f.JL,
              f.sg,
              f.u,
              F.b,
              C.n,
              I.Z,
              L.q,
              E.Ov,
              z.C,
            ],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .filter[_ngcontent-%COMP%]{margin-left:auto}[_nghost-%COMP%]   .filter__category[_ngcontent-%COMP%]{height:24px;width:24px;display:flex;align-items:center;justify-content:center;color:#777b92;cursor:pointer}[_nghost-%COMP%]   .filter__category_active[_ngcontent-%COMP%], [_nghost-%COMP%]   .filter__category[_ngcontent-%COMP%]:hover{color:#337eff}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}.filter-container[_ngcontent-%COMP%]{padding:16px;display:flex}.filter-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function Ge(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 2),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA());
      }
      function je(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 2), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA());
      }
      function Ke(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 2),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA());
      }
      function Ve(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function Xe(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 9), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function We(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(),
            u = n.$implicit;
          t.Q6J('status', 8 === n.index ? 'danger' : 'default'), t.xp6(1), t.Oqu(u.category);
        }
      }
      function tn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function en(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'tr', 10),
            t.NdJ('click', function (u) {
              const c = t.CHM(n).$implicit,
                r = t.oxw();
              return t.KtG(r.multiSelection(u, c.code));
            }),
            t.YNc(1, Ve, 3, 4, 'td', 11),
            t.YNc(2, Xe, 2, 1, 'td', 12),
            t.YNc(3, We, 2, 2, 'td', 13),
            t.YNc(4, tn, 3, 4, 'td', 11),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit,
            o = t.oxw();
          t.Q6J('status', n.status)('active', o.selectedItemsCodes.includes(n.code)),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count');
        }
      }
      let nn = (() => {
        class e {
          constructor() {
            (this.selectedItemsCodes = []),
              (this.columns = ['code', 'name', 'category', 'count']),
              (this.products = b.WL);
          }
          multiSelection(n, o) {
            this.selectedItemsCodes.includes(o)
              ? (this.selectedItemsCodes = this.selectedItemsCodes.filter(u => u !== o))
              : this.selectedItemsCodes.push(o);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-status-example']],
            decls: 17,
            vars: 10,
            consts: [
              ['prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['prizmTh', ''],
              ['prizmTh', '', 4, 'prizmHead'],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 3, 'status', 'active', 'click', 4, 'prizmRow', 'prizmRowOf'],
              ['footer', ''],
              [1, 'summary', 'format__number'],
              ['prizmTd', '', 'colspan', '3'],
              ['prizmTd', ''],
              ['prizmTr', '', 1, 'row', 3, 'status', 'active', 'click'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 3, 'status', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', '', 3, 'status'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'table', 0)(1, 'thead')(2, 'tr', 1)(3, 'th', 2),
                t._uU(4, '\u041a\u043e\u0434'),
                t.qZA(),
                t.YNc(5, Ge, 2, 0, 'th', 3),
                t.YNc(6, je, 2, 0, 'th', 3),
                t.YNc(7, Ke, 2, 0, 'th', 3),
                t.qZA()(),
                t.TgZ(8, 'tbody', 4),
                t.YNc(9, en, 5, 6, 'tr', 5),
                t.ynx(10, 6),
                t.TgZ(11, 'tr', 7)(12, 'td', 8),
                t._uU(13, '\u0412\u0441\u0435\u0433\u043e'),
                t.qZA(),
                t.TgZ(14, 'td', 9),
                t._uU(15),
                t.ALo(16, 'spaceNumber'),
                t.qZA()(),
                t.BQk(),
                t.qZA()()),
                2 & n &&
                  (t.Q6J('columns', o.columns),
                  t.xp6(5),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(6),
                  t.Oqu(t.xi3(16, 7, 6e4, '0.0-0')));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .summary[_ngcontent-%COMP%]{background:var(--prizm-v3-table-fill-row-zebra_default)}[_nghost-%COMP%]   .summary[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{font-size:12px}[_nghost-%COMP%]   .pagination[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var P = a(42227);
      function on(e, i) {
        if ((1 & e && (t.TgZ(0, 'th', 12), t._uU(1, '\u041a\u043e\u0434'), t.qZA()), 2 & e)) {
          const n = t.oxw();
          t.Q6J('sorter', n.sorter)('resizable', !0);
        }
      }
      function an(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 13),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function un(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 14), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.Q6J('sorter', n.sorter);
        }
      }
      function ln(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 14),
            t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.Q6J('sorter', n.sorter);
        }
      }
      function cn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 18), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function rn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 19), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function pn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 19), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function mn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 18), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function sn(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr', 15),
          t.YNc(1, cn, 3, 4, 'td', 16),
          t.YNc(2, rn, 2, 1, 'td', 17),
          t.YNc(3, pn, 2, 1, 'td', 17),
          t.YNc(4, mn, 3, 4, 'td', 16),
          t.qZA()),
          2 & e &&
            (t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      const dn = [
        {
          code: 8,
          name: '\u0423\u0433\u043b\u0435\u043a\u0441\u0438\u043b\u044b\u0439 \u0433\u0430\u0437',
          category: 'Premium',
          count: 99,
        },
        {
          code: 1,
          name: '\u041f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d',
          category: 'Premium',
          count: 3e3,
        },
        {
          code: 2,
          name: '\u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440',
          category: 'Active',
          count: 123,
          status: 'success',
        },
        {
          code: 3,
          name: '\u042d\u043f\u043e\u043a\u0441\u0438\u0434\u043d\u0430\u044f \u0441\u043c\u043e\u043b\u0430',
          category: 'Sport',
          count: 56e3,
          status: 'success',
        },
        { code: 4, name: '\u041f\u0440\u043e\u043f\u0430\u043d\u0442', category: 'Sport+', count: 539 },
        {
          code: 5,
          name: '\u041f\u043e\u043b\u0438\u0431\u0435\u0442\u043e\u043d',
          category: 'Premium',
          count: 23,
          status: 'danger',
        },
        {
          code: 6,
          name: '\u041f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d',
          category: 'Premium',
          count: 99,
        },
        {
          code: 7,
          name: '\u041f\u0440\u043e\u043f\u0430\u043d\u0442',
          category: 'Premium',
          count: 23,
          status: 'warning',
        },
        { code: 9, name: '\u0412\u043e\u0434\u043e\u0440\u043e\u0434', category: 'Premium', count: 23 },
        {
          code: 10,
          name: '\u041a\u043e\u043c\u043f\u0430\u0443\u043d\u0434',
          category: 'Premium',
          count: 99,
        },
      ];
      let xn = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']),
              (this.sorter = p.A6e),
              (this.products = dn),
              (this.searchString = null),
              (this.searchAllowedProducts = this.products),
              (this.initSortOptions = [{ options: { id: 'code', order: 'desc' } }]);
          }
          search(n, o) {
            (this.searchString = n.toLowerCase()),
              (this.searchAllowedProducts = this.products.filter(u =>
                u[o].toLowerCase().includes(this.searchString)
              ));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-sort-example']],
            decls: 19,
            vars: 10,
            consts: [
              ['visibility', 'hidden', 1, 'scrollable'],
              ['prizmTable', '', 1, 'table', 3, 'columns', 'sort'],
              ['prizmThGroup', ''],
              ['rowspan', '2', 'prizmTh', '', 3, 'sorter', 'resizable', 4, 'prizmHead'],
              ['prizmTh', '', 3, 'resizable', 4, 'prizmHead'],
              ['rowspan', '2', 'prizmTh', '', 3, 'sorter', 4, 'prizmHead'],
              ['prizmTh', '', 1, 'extra-border', 'search-cell', 3, 'resizable'],
              ['prizmInput', '', 'placeholder', '\u041f\u043e\u0438\u0441\u043a', 3, 'enter'],
              ['input', ''],
              ['prizmInputIconButton', 'sort-zoom-in', 3, 'interactive', 'click'],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 4, 'prizmRow', 'prizmRowOf'],
              ['rowspan', '2', 'prizmTh', '', 3, 'sorter', 'resizable'],
              ['prizmTh', '', 3, 'resizable'],
              ['rowspan', '2', 'prizmTh', '', 3, 'sorter'],
              ['prizmTr', '', 1, 'row'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
            ],
            template: function (n, o) {
              if (1 & n) {
                const u = t.EpF();
                t.TgZ(0, 'p'),
                  t._uU(
                    1,
                    '\u0414\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0437\u0430\u0436\u043c\u0438\u0442\u0435 shift \u0438 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0443 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438'
                  ),
                  t.qZA(),
                  t.TgZ(2, 'p'),
                  t._uU(
                    3,
                    '\u0414\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0430 \u043a\u043e\u043b\u043e\u043d\u043a\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043d\u0435\u0435 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044f ctrl'
                  ),
                  t.qZA(),
                  t.TgZ(4, 'prizm-scrollbar', 0)(5, 'table', 1)(6, 'thead')(7, 'tr', 2),
                  t.YNc(8, on, 2, 2, 'th', 3),
                  t.YNc(9, an, 2, 1, 'th', 4),
                  t.YNc(10, un, 2, 1, 'th', 5),
                  t.YNc(11, ln, 2, 1, 'th', 5),
                  t.qZA(),
                  t.TgZ(12, 'tr', 2)(13, 'th', 6)(14, 'input', 7, 8),
                  t.NdJ('enter', function (c) {
                    return o.search(c, 'name');
                  }),
                  t.qZA(),
                  t.TgZ(16, 'button', 9),
                  t.NdJ('click', function () {
                    t.CHM(u);
                    const c = t.MAs(15);
                    return t.KtG(o.search(c.value, 'name'));
                  }),
                  t.qZA()()()(),
                  t.TgZ(17, 'tbody', 10),
                  t.YNc(18, sn, 5, 4, 'tr', 11),
                  t.qZA()()();
              }
              2 & n &&
                (t.xp6(5),
                t.Q6J('columns', o.columns)('sort', o.initSortOptions),
                t.xp6(3),
                t.Q6J('prizmHead', 'code'),
                t.xp6(1),
                t.Q6J('prizmHead', 'name'),
                t.xp6(1),
                t.Q6J('prizmHead', 'category'),
                t.xp6(1),
                t.Q6J('prizmHead', 'count'),
                t.xp6(2),
                t.Q6J('resizable', !0),
                t.xp6(3),
                t.Q6J('interactive', !0),
                t.xp6(1),
                t.Q6J('data', o.searchAllowedProducts),
                t.xp6(1),
                t.Q6J('prizmRowOf', o.searchAllowedProducts));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, P.f, O.l, C.n, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .extra-border[_ngcontent-%COMP%]{border-left:none}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .search-cell[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .search-cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var D = a(99397),
        Tn = a(94664);
      function gn(e, i) {
        1 & e && (t.TgZ(0, 'th', 13), t._uU(1, '\u041a\u043e\u0434'), t.qZA()),
          2 & e && t.Q6J('sortable', !0)('resizable', !0);
      }
      function hn(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 14),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function _n(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 15), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA()),
          2 & e && t.Q6J('sortable', !0);
      }
      function bn(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 15),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA()),
          2 & e && t.Q6J('sortable', !0);
      }
      function Cn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 19), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function zn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 20), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function fn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 20), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function Zn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 19), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.hij(' ', t.xi3(2, 1, n.count, '0.0-0'), ' ');
        }
      }
      function yn(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr', 16),
          t.YNc(1, Cn, 3, 4, 'td', 17),
          t.YNc(2, zn, 2, 1, 'td', 18),
          t.YNc(3, fn, 2, 1, 'td', 18),
          t.YNc(4, Zn, 3, 4, 'td', 17),
          t.qZA()),
          2 & e &&
            (t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      const En = [
        {
          code: 8,
          name: '\u0423\u0433\u043b\u0435\u043a\u0441\u0438\u043b\u044b\u0439 \u0433\u0430\u0437',
          category: 'Premium',
          count: 99,
        },
        {
          code: 1,
          name: '\u041f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d',
          category: 'Premium',
          count: 3e3,
        },
        {
          code: 2,
          name: '\u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440',
          category: 'Active',
          count: 123,
          status: 'success',
        },
        {
          code: 3,
          name: '\u042d\u043f\u043e\u043a\u0441\u0438\u0434\u043d\u0430\u044f \u0441\u043c\u043e\u043b\u0430',
          category: 'Sport',
          count: 56e3,
          status: 'success',
        },
        { code: 4, name: '\u041f\u0440\u043e\u043f\u0430\u043d\u0442', category: 'Sport+', count: 539 },
        {
          code: 5,
          name: '\u041f\u043e\u043b\u0438\u0431\u0435\u0442\u043e\u043d',
          category: 'Premium',
          count: 23,
          status: 'danger',
        },
        {
          code: 6,
          name: '\u041f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d',
          category: 'Premium',
          count: 99,
        },
        {
          code: 7,
          name: '\u041f\u0440\u043e\u043f\u0430\u043d\u0442',
          category: 'Premium',
          count: 23,
          status: 'warning',
        },
        { code: 9, name: '\u0412\u043e\u0434\u043e\u0440\u043e\u0434', category: 'Premium', count: 23 },
        {
          code: 10,
          name: '\u041a\u043e\u043c\u043f\u0430\u0443\u043d\u0434',
          category: 'Premium',
          count: 99,
        },
      ];
      let An = (() => {
        class e {
          constructor(n) {
            (this.tableSorterService = n),
              (this.columns = ['code', 'name', 'category', 'count']),
              (this.sorter = p.A6e),
              (this.products = En),
              (this.searchString = null),
              (this.searchAllowedProducts = this.products),
              (this.sorter$$ = new v.X([])),
              (this.data$ = this.sorter$$.pipe(
                (0, D.b)(() => this.showLoader$.next(!0)),
                (0, Tn.w)(o =>
                  (0, w.of)(this.products).pipe(
                    (0, Y.g)(3e3),
                    (0, R.U)(u =>
                      this.tableSorterService.sort(
                        u,
                        o.map(l => ({ ...l, sorter: p.A6e }))
                      )
                    )
                  )
                ),
                (0, D.b)(() => this.showLoader$.next(!1))
              )),
              (this.showLoader$ = new v.X(!1));
          }
          search(n, o) {
            (this.searchString = n.toLowerCase()),
              (this.searchAllowedProducts = this.products.filter(u =>
                u[o].toLowerCase().includes(this.searchString)
              ));
          }
          updateSort(n) {
            this.sorter$$.next(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(t.Y36(p.pc_));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-server-sort-example']],
            features: [t._Bn([p.pc_])],
            decls: 21,
            vars: 12,
            consts: [
              ['visibility', 'hidden', 1, 'scrollable'],
              [3, 'showLoader', 'overlay'],
              ['prizmTable', '', 1, 'table', 3, 'columns', 'sortChange'],
              ['prizmThGroup', ''],
              ['rowspan', '2', 'prizmTh', '', 3, 'sortable', 'resizable', 4, 'prizmHead'],
              ['prizmTh', '', 3, 'resizable', 4, 'prizmHead'],
              ['rowspan', '2', 'prizmTh', '', 3, 'sortable', 4, 'prizmHead'],
              ['prizmTh', '', 1, 'extra-border', 'search-cell', 3, 'resizable'],
              ['prizmInput', '', 'placeholder', '\u041f\u043e\u0438\u0441\u043a', 3, 'enter'],
              ['input', ''],
              ['prizmInputIconButton', 'sort-zoom-in', 3, 'interactive', 'click'],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 4, 'prizmRow'],
              ['rowspan', '2', 'prizmTh', '', 3, 'sortable', 'resizable'],
              ['prizmTh', '', 3, 'resizable'],
              ['rowspan', '2', 'prizmTh', '', 3, 'sortable'],
              ['prizmTr', '', 1, 'row'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
            ],
            template: function (n, o) {
              if (1 & n) {
                const u = t.EpF();
                t.TgZ(0, 'p'),
                  t._uU(
                    1,
                    '\u0414\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0437\u0430\u0436\u043c\u0438\u0442\u0435 shift \u0438 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0443 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438'
                  ),
                  t.qZA(),
                  t.TgZ(2, 'p'),
                  t._uU(
                    3,
                    '\u0414\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0430 \u043a\u043e\u043b\u043e\u043d\u043a\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043d\u0435\u0435 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044f ctrl'
                  ),
                  t.qZA(),
                  t.TgZ(4, 'prizm-scrollbar', 0)(5, 'prizm-loader', 1),
                  t.ALo(6, 'async'),
                  t.TgZ(7, 'table', 2),
                  t.NdJ('sortChange', function (c) {
                    return o.updateSort(c);
                  }),
                  t.TgZ(8, 'thead')(9, 'tr', 3),
                  t.YNc(10, gn, 2, 2, 'th', 4),
                  t.YNc(11, hn, 2, 1, 'th', 5),
                  t.YNc(12, _n, 2, 1, 'th', 6),
                  t.YNc(13, bn, 2, 1, 'th', 6),
                  t.qZA(),
                  t.TgZ(14, 'tr', 3)(15, 'th', 7)(16, 'input', 8, 9),
                  t.NdJ('enter', function (c) {
                    return o.search(c, 'name');
                  }),
                  t.qZA(),
                  t.TgZ(18, 'button', 10),
                  t.NdJ('click', function () {
                    t.CHM(u);
                    const c = t.MAs(17);
                    return t.KtG(o.search(c.value, 'name'));
                  }),
                  t.qZA()()()(),
                  t.TgZ(19, 'tbody', 11),
                  t.YNc(20, yn, 5, 4, 'tr', 12),
                  t.qZA()()()();
              }
              2 & n &&
                (t.xp6(5),
                t.Q6J('showLoader', t.lcZ(6, 10, o.showLoader$))('overlay', !0),
                t.xp6(2),
                t.Q6J('columns', o.columns),
                t.xp6(3),
                t.Q6J('prizmHead', 'code'),
                t.xp6(1),
                t.Q6J('prizmHead', 'name'),
                t.xp6(1),
                t.Q6J('prizmHead', 'category'),
                t.xp6(1),
                t.Q6J('prizmHead', 'count'),
                t.xp6(2),
                t.Q6J('resizable', !0),
                t.xp6(3),
                t.Q6J('interactive', !0),
                t.xp6(1),
                t.Q6J('data', o.data$));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, H.L, P.f, O.l, C.n, E.Ov, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .extra-border[_ngcontent-%COMP%]{border-left:none}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .search-cell[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .search-cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var Sn = a(36499);
      function On(e, i) {
        if ((1 & e && (t.TgZ(0, 'th', 15), t._uU(1, '\u041a\u043e\u0434'), t.qZA()), 2 & e)) {
          const n = t.oxw();
          t.Q6J('sorter', n.sorter)('resizable', !0);
        }
      }
      function Jn(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 16),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function Qn(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 17), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.Q6J('sorter', n.sorter);
        }
      }
      function wn(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 17),
            t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.Q6J('sorter', n.sorter);
        }
      }
      function Pn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 21), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function Mn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 13), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function Un(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 13), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function Nn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 21), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function qn(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr', 18),
          t.YNc(1, Pn, 3, 4, 'td', 19),
          t.YNc(2, Mn, 2, 1, 'td', 20),
          t.YNc(3, Un, 2, 1, 'td', 20),
          t.YNc(4, Nn, 3, 4, 'td', 19),
          t.qZA()),
          2 & e &&
            (t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      const vn = function () {
          return { noRowsSelectorLabel: !0 };
        },
        Rn = function () {
          return [5, 10, 20];
        },
        Ln = [
          {
            code: 8,
            name: '\u0423\u0433\u043b\u0435\u043a\u0441\u0438\u043b\u044b\u0439 \u0433\u0430\u0437',
            category: 'Premium',
            count: 99,
          },
          {
            code: 1,
            name: '\u041f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d',
            category: 'Premium',
            count: 3e3,
          },
          {
            code: 2,
            name: '\u041f\u043e\u043b\u0438\u044d\u0441\u0442\u0435\u0440',
            category: 'Active',
            count: 123,
            status: 'success',
          },
          {
            code: 3,
            name: '\u042d\u043f\u043e\u043a\u0441\u0438\u0434\u043d\u0430\u044f \u0441\u043c\u043e\u043b\u0430',
            category: 'Sport',
            count: 56e3,
            status: 'success',
          },
          { code: 4, name: '\u041f\u0440\u043e\u043f\u0430\u043d\u0442', category: 'Sport+', count: 539 },
          {
            code: 5,
            name: '\u041f\u043e\u043b\u0438\u0431\u0435\u0442\u043e\u043d',
            category: 'Premium',
            count: 23,
            status: 'danger',
          },
          {
            code: 6,
            name: '\u041f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d',
            category: 'Premium',
            count: 99,
          },
          {
            code: 7,
            name: '\u041f\u0440\u043e\u043f\u0430\u043d\u0442',
            category: 'Premium',
            count: 23,
            status: 'warning',
          },
          { code: 9, name: '\u0412\u043e\u0434\u043e\u0440\u043e\u0434', category: 'Premium', count: 23 },
          {
            code: 10,
            name: '\u041a\u043e\u043c\u043f\u0430\u0443\u043d\u0434',
            category: 'Premium',
            count: 99,
          },
        ];
      let Dn = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']),
              (this.sorter = p.A6e),
              (this.dataSource = new p.NrZ(Ln));
          }
          ngOnInit() {
            (this.dataSource.paginator = this.paginator), (this.dataSource.sorter = this.table.sorterService);
          }
          search(n, o) {
            const u = n.toLowerCase();
            this.dataSource.filter = l => l[o].toLowerCase().includes(u);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-data-source-example']],
            viewQuery: function (n, o) {
              if ((1 & n && (t.Gf(p.oQg, 7), t.Gf(p.koU, 7)), 2 & n)) {
                let u;
                t.iGM((u = t.CRH())) && (o.table = u.first), t.iGM((u = t.CRH())) && (o.paginator = u.first);
              }
            },
            decls: 23,
            vars: 16,
            consts: [
              ['visibility', 'hidden', 1, 'scrollable'],
              ['prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['rowspan', '2', 'prizmTh', '', 3, 'sorter', 'resizable', 4, 'prizmHead'],
              ['prizmTh', '', 3, 'resizable', 4, 'prizmHead'],
              ['rowspan', '2', 'prizmTh', '', 3, 'sorter', 4, 'prizmHead'],
              ['prizmTh', '', 1, 'extra-border', 'search-cell', 3, 'resizable'],
              ['prizmInput', '', 'placeholder', '\u041f\u043e\u0438\u0441\u043a', 3, 'enter'],
              ['input', ''],
              ['prizmInputIconButton', 'sort-zoom-in', 3, 'interactive', 'click'],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 4, 'prizmRow'],
              [1, 'pagination'],
              ['prizmTd', ''],
              [
                'leftButtonLabel',
                '\u041d\u0430\u0437\u0430\u0434',
                'rightButtonLabel',
                '\u0412\u043f\u0435\u0440\u0435\u0434',
                3,
                'pageLinkSize',
                'rows',
                'page',
                'paginatorOptions',
                'rowsCountOptions',
              ],
              ['rowspan', '2', 'prizmTh', '', 3, 'sorter', 'resizable'],
              ['prizmTh', '', 3, 'resizable'],
              ['rowspan', '2', 'prizmTh', '', 3, 'sorter'],
              ['prizmTr', '', 1, 'row'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
            ],
            template: function (n, o) {
              if (1 & n) {
                const u = t.EpF();
                t.TgZ(0, 'p'),
                  t._uU(
                    1,
                    '\u0414\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0437\u0430\u0436\u043c\u0438\u0442\u0435 shift \u0438 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0443 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438'
                  ),
                  t.qZA(),
                  t.TgZ(2, 'p'),
                  t._uU(
                    3,
                    '\u0414\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0430 \u043a\u043e\u043b\u043e\u043d\u043a\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043d\u0435\u0435 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044f ctrl'
                  ),
                  t.qZA(),
                  t.TgZ(4, 'prizm-scrollbar', 0)(5, 'table', 1)(6, 'thead')(7, 'tr', 2),
                  t.YNc(8, On, 2, 2, 'th', 3),
                  t.YNc(9, Jn, 2, 1, 'th', 4),
                  t.YNc(10, Qn, 2, 1, 'th', 5),
                  t.YNc(11, wn, 2, 1, 'th', 5),
                  t.qZA(),
                  t.TgZ(12, 'tr', 2)(13, 'th', 6)(14, 'input', 7, 8),
                  t.NdJ('enter', function (c) {
                    return o.search(c, 'name');
                  }),
                  t.qZA(),
                  t.TgZ(16, 'button', 9),
                  t.NdJ('click', function () {
                    t.CHM(u);
                    const c = t.MAs(15);
                    return t.KtG(o.search(c.value, 'name'));
                  }),
                  t.qZA()()()(),
                  t.TgZ(17, 'tbody', 10),
                  t.YNc(18, qn, 5, 4, 'tr', 11),
                  t.qZA(),
                  t.TgZ(19, 'tfoot')(20, 'tr', 12)(21, 'td', 13),
                  t._UZ(22, 'prizm-paginator', 14),
                  t.qZA()()()()();
              }
              2 & n &&
                (t.xp6(5),
                t.Q6J('columns', o.columns),
                t.xp6(3),
                t.Q6J('prizmHead', 'code'),
                t.xp6(1),
                t.Q6J('prizmHead', 'name'),
                t.xp6(1),
                t.Q6J('prizmHead', 'category'),
                t.xp6(1),
                t.Q6J('prizmHead', 'count'),
                t.xp6(2),
                t.Q6J('resizable', !0),
                t.xp6(3),
                t.Q6J('interactive', !0),
                t.xp6(1),
                t.Q6J('data', o.dataSource),
                t.xp6(4),
                t.uIk('colspan', o.columns.length),
                t.xp6(1),
                t.Q6J('pageLinkSize', 3)('rows', 10)('page', 1)('paginatorOptions', t.DdM(14, vn))(
                  'rowsCountOptions',
                  t.DdM(15, Rn)
                ));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, P.f, O.l, Sn.k, C.n, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .extra-border[_ngcontent-%COMP%]{border-left:none}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .search-cell[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .search-cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   tfoot[_ngcontent-%COMP%]{position:sticky;bottom:0;z-index:20}[_nghost-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:0}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function Yn(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 9),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA());
      }
      function Bn(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 9), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA());
      }
      function kn(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 9),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA());
      }
      function Hn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function Fn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function In(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 16), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw(),
            u = n.$implicit;
          t.Q6J('status', 8 === n.index ? 'danger' : 'default'), t.xp6(1), t.Oqu(u.category);
        }
      }
      function $n(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function Gn(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr', 10),
          t.YNc(1, Hn, 3, 4, 'td', 11),
          t.YNc(2, Fn, 2, 1, 'td', 12),
          t.YNc(3, In, 2, 2, 'td', 13),
          t.YNc(4, $n, 3, 4, 'td', 11),
          t.qZA()),
          2 & e &&
            (t.Q6J('status', i.$implicit.status),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      function jn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function Kn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function Vn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function Xn(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function Wn(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr', 10),
          t.YNc(1, jn, 3, 4, 'td', 11),
          t.YNc(2, Kn, 2, 1, 'td', 12),
          t.YNc(3, Vn, 2, 1, 'td', 12),
          t.YNc(4, Xn, 3, 4, 'td', 11),
          t.qZA()),
          2 & e &&
            (t.Q6J('status', i.$implicit.status),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      function to(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function eo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function no(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 15), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function oo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 14), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function io(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr', 10),
          t.YNc(1, to, 3, 4, 'td', 11),
          t.YNc(2, eo, 2, 1, 'td', 12),
          t.YNc(3, no, 2, 1, 'td', 12),
          t.YNc(4, oo, 3, 4, 'td', 11),
          t.qZA()),
          2 & e &&
            (t.Q6J('status', i.$implicit.status),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      let ao = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']),
              (this.products1 = b.WL),
              (this.products2 = b.u8),
              (this.products3 = []);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-row-group-example']],
            decls: 15,
            vars: 11,
            consts: [
              ['visibility', 'hidden', 1, 'scrollable'],
              ['prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['prizmTh', '', 3, 'resizable'],
              ['prizmTh', '', 4, 'prizmHead'],
              ['prizmTbody', '', 'heading', '\u0413\u0440\u0443\u043f\u043f\u0430 1', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 3, 'status', 4, 'prizmRow', 'prizmRowOf'],
              ['prizmTbody', '', 'heading', '\u0413\u0440\u0443\u043f\u043f\u0430 2', 3, 'data'],
              ['prizmTbody', '', 'heading', '\u0413\u0440\u0443\u043f\u043f\u0430 3', 3, 'data'],
              ['prizmTh', ''],
              ['prizmTr', '', 1, 'row', 3, 'status'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 3, 'status', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
              ['prizmTd', '', 3, 'status'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'prizm-scrollbar', 0)(1, 'table', 1)(2, 'thead')(3, 'tr', 2)(4, 'th', 3),
                t._uU(5, '\u041a\u043e\u0434'),
                t.qZA(),
                t.YNc(6, Yn, 2, 0, 'th', 4),
                t.YNc(7, Bn, 2, 0, 'th', 4),
                t.YNc(8, kn, 2, 0, 'th', 4),
                t.qZA()(),
                t.TgZ(9, 'tbody', 5),
                t.YNc(10, Gn, 5, 5, 'tr', 6),
                t.qZA(),
                t.TgZ(11, 'tbody', 7),
                t.YNc(12, Wn, 5, 5, 'tr', 6),
                t.qZA(),
                t.TgZ(13, 'tbody', 8),
                t.YNc(14, io, 5, 5, 'tr', 6),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(1),
                  t.Q6J('columns', o.columns),
                  t.xp6(3),
                  t.Q6J('resizable', !0),
                  t.xp6(2),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('data', o.products1),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products1),
                  t.xp6(1),
                  t.Q6J('data', o.products2),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products2),
                  t.xp6(1),
                  t.Q6J('data', o.products3),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products2));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, C.n, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function uo(e, i) {
        1 & e && (t.TgZ(0, 'th', 10), t._uU(1, '\u041a\u043e\u0434'), t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function lo(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 11),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function co(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 12), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA());
      }
      function ro(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 12),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA());
      }
      function po(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'tr', 3)(1, 'th', 13)(2, 'input', 14, 15),
            t.NdJ('enter', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG(l.search(u, 'name'));
            }),
            t.qZA(),
            t.TgZ(4, 'button', 16),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.MAs(3),
                l = t.oxw();
              return (u.value = ''), t.KtG(l.search('', 'name'));
            }),
            t.qZA(),
            t.TgZ(5, 'button', 17),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.MAs(3),
                l = t.oxw();
              return t.KtG(l.search(u.value, 'name'));
            }),
            t.qZA()()();
        }
        2 & e &&
          (t.xp6(1),
          t.Q6J('resizable', !0),
          t.xp6(3),
          t.Q6J('interactive', !0),
          t.xp6(1),
          t.Q6J('interactive', !0));
      }
      function mo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 21), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.hij(' ', t.xi3(2, 1, n.code, '0.0-0'), ' ');
        }
      }
      function so(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 22), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function xo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 22), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function To(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 21), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function go(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr', 18),
          t.YNc(1, mo, 3, 4, 'td', 19),
          t.YNc(2, so, 2, 1, 'td', 20),
          t.YNc(3, xo, 2, 1, 'td', 20),
          t.YNc(4, To, 3, 4, 'td', 19),
          t.qZA()),
          2 & e &&
            (t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      let ho = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']),
              (this.products = b.Yx),
              (this.searchString = null),
              (this.searchAllowedProducts = this.products),
              (this.control = new f.NI(!1));
          }
          search(n, o) {
            (this.searchString = n.toLowerCase()),
              (this.searchAllowedProducts = this.products.filter(u =>
                u[o].toLowerCase().includes(this.searchString)
              ));
          }
          ngOnInit() {
            this.control.valueChanges
              .pipe(
                (0, D.b)(() => {
                  this.searchAllowedProducts = [...this.products];
                })
              )
              .subscribe();
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-search-example']],
            decls: 15,
            vars: 9,
            consts: [
              [3, 'formControl'],
              ['visibility', 'hidden', 1, 'scrollable'],
              ['prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['rowspan', '2', 'prizmTh', '', 3, 'resizable', 4, 'prizmHead'],
              ['prizmTh', '', 3, 'resizable', 4, 'prizmHead'],
              ['rowspan', '2', 'prizmTh', '', 4, 'prizmHead'],
              ['prizmThGroup', '', 4, 'ngIf'],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 4, 'prizmRow', 'prizmRowOf'],
              ['rowspan', '2', 'prizmTh', '', 3, 'resizable'],
              ['prizmTh', '', 3, 'resizable'],
              ['rowspan', '2', 'prizmTh', ''],
              ['prizmTh', '', 1, 'extra-border', 'search-cell', 3, 'resizable'],
              ['prizmInput', '', 'placeholder', '\u041f\u043e\u0438\u0441\u043a', 3, 'enter'],
              ['input', ''],
              ['prizmInputIconButton', 'cancel-delete-content', 3, 'interactive', 'click'],
              ['prizmInputIconButton', 'sort-zoom-in', 3, 'interactive', 'click'],
              ['prizmTr', '', 1, 'row'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'div'),
                t._uU(
                  1,
                  ' \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u0438\u0441\u043a: '
                ),
                t._UZ(2, 'prizm-toggle', 0),
                t.qZA(),
                t._UZ(3, 'br'),
                t.TgZ(4, 'prizm-scrollbar', 1)(5, 'table', 2)(6, 'thead')(7, 'tr', 3),
                t.YNc(8, uo, 2, 1, 'th', 4),
                t.YNc(9, lo, 2, 1, 'th', 5),
                t.YNc(10, co, 2, 0, 'th', 6),
                t.YNc(11, ro, 2, 0, 'th', 6),
                t.qZA(),
                t.YNc(12, po, 6, 3, 'tr', 7),
                t.qZA(),
                t.TgZ(13, 'tbody', 8),
                t.YNc(14, go, 5, 4, 'tr', 9),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(2),
                  t.Q6J('formControl', o.control),
                  t.xp6(3),
                  t.Q6J('columns', o.columns),
                  t.xp6(3),
                  t.Q6J('prizmHead', 'code'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('ngIf', o.control.value),
                  t.xp6(1),
                  t.Q6J('data', o.searchAllowedProducts),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.searchAllowedProducts));
            },
            dependencies: [
              E.O5,
              B.w,
              m.Y,
              s.o,
              d.N,
              x.z,
              T.B,
              g.e,
              h.e,
              Z.j,
              y.R,
              _.F,
              f.JJ,
              f.oH,
              P.f,
              O.l,
              C.n,
              z.C,
            ],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .extra-border[_ngcontent-%COMP%]{border-left:none}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .search-cell[_ngcontent-%COMP%]{padding:0}[_nghost-%COMP%]   .search-cell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px}[_nghost-%COMP%]   .search-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:8px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function _o(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function bo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 12), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function Co(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 12), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function zo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.hij(' ', t.xi3(2, 1, n.count, '0.0-0'), ' ');
        }
      }
      function fo(e, i) {
        1 & e &&
          (t.ynx(0),
          t.TgZ(1, 'tr', 8),
          t.YNc(2, _o, 3, 4, 'td', 9),
          t.YNc(3, bo, 2, 1, 'td', 10),
          t.YNc(4, Co, 2, 1, 'td', 10),
          t.YNc(5, zo, 3, 4, 'td', 9),
          t.qZA(),
          t.BQk()),
          2 & e &&
            (t.xp6(2),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      function Zo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function yo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 12), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function Eo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 12), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function Ao(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.hij(' ', t.xi3(2, 1, n.count, '0.0-0'), ' ');
        }
      }
      function So(e, i) {
        1 & e &&
          (t.ynx(0),
          t.TgZ(1, 'tr', 8),
          t.YNc(2, Zo, 3, 4, 'td', 9),
          t.YNc(3, yo, 2, 1, 'td', 10),
          t.YNc(4, Eo, 2, 1, 'td', 10),
          t.YNc(5, Ao, 3, 4, 'td', 9),
          t.qZA(),
          t.BQk()),
          2 & e &&
            (t.xp6(2),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      function Oo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function Jo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 12), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function Qo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 12), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function wo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 11), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.hij(' ', t.xi3(2, 1, n.count, '0.0-0'), ' ');
        }
      }
      function Po(e, i) {
        1 & e &&
          (t.ynx(0),
          t.TgZ(1, 'tr', 8),
          t.YNc(2, Oo, 3, 4, 'td', 9),
          t.YNc(3, Jo, 2, 1, 'td', 10),
          t.YNc(4, Qo, 2, 1, 'td', 10),
          t.YNc(5, wo, 3, 4, 'td', 9),
          t.qZA(),
          t.BQk()),
          2 & e &&
            (t.xp6(2),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'));
      }
      let Mo = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']), (this.products = b.WL);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-border-style-example']],
            decls: 48,
            vars: 9,
            consts: [
              [1, 'scrollable'],
              ['prizmTable', '', 'tableBorderStyle', 'grid', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['prizmTh', ''],
              ['prizmTbody', '', 3, 'data'],
              [4, 'prizmRow', 'prizmRowOf'],
              ['prizmTable', '', 'tableBorderStyle', 'vertical', 1, 'table', 3, 'columns'],
              ['prizmTable', '', 'tableBorderStyle', 'horizontal', 1, 'table', 3, 'columns'],
              ['prizmTr', ''],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'h3'),
                t._uU(1, 'Grid'),
                t.qZA(),
                t.TgZ(2, 'prizm-scrollbar', 0)(3, 'table', 1)(4, 'thead')(5, 'tr', 2)(6, 'th', 3),
                t._uU(7, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(8, 'th', 3),
                t._uU(9, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(10, 'th', 3),
                t._uU(11, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(12, 'th', 3),
                t._uU(13, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA()()(),
                t.TgZ(14, 'tbody', 4),
                t.YNc(15, fo, 6, 4, 'ng-container', 5),
                t.qZA()()(),
                t.TgZ(16, 'h3'),
                t._uU(17, 'Vertical borders'),
                t.qZA(),
                t.TgZ(18, 'prizm-scrollbar', 0)(19, 'table', 6)(20, 'thead')(21, 'tr', 2)(22, 'th', 3),
                t._uU(23, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(24, 'th', 3),
                t._uU(25, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(26, 'th', 3),
                t._uU(27, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(28, 'th', 3),
                t._uU(29, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA()()(),
                t.TgZ(30, 'tbody', 4),
                t.YNc(31, So, 6, 4, 'ng-container', 5),
                t.qZA()()(),
                t.TgZ(32, 'h3'),
                t._uU(33, 'Horizontal borders'),
                t.qZA(),
                t.TgZ(34, 'prizm-scrollbar', 0)(35, 'table', 7)(36, 'thead')(37, 'tr', 2)(38, 'th', 3),
                t._uU(39, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(40, 'th', 3),
                t._uU(41, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(42, 'th', 3),
                t._uU(43, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(44, 'th', 3),
                t._uU(45, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA()()(),
                t.TgZ(46, 'tbody', 4),
                t.YNc(47, Po, 6, 4, 'ng-container', 5),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(3),
                  t.Q6J('columns', o.columns),
                  t.xp6(11),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(4),
                  t.Q6J('columns', o.columns),
                  t.xp6(11),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(4),
                  t.Q6J('columns', o.columns),
                  t.xp6(11),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, _.F, C.n, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var $ = a(57345),
        G = a(41057);
      function Uo(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 12)(2, 'td', 13),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA(),
            t.TgZ(5, 'td', 14),
            t._uU(6),
            t._UZ(7, 'br'),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, 'td', 15),
            t._uU(10),
            t.qZA(),
            t.TgZ(11, 'td', 16),
            t._uU(12),
            t.ALo(13, 'spaceNumber'),
            t.qZA(),
            t.TgZ(14, 'td', 15),
            t._uU(15),
            t.qZA(),
            t.TgZ(16, 'td', 15),
            t._uU(17),
            t.qZA(),
            t.TgZ(18, 'td', 16),
            t._uU(19),
            t.ALo(20, 'spaceNumber'),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit,
            o = i.odd,
            u = i.first,
            l = i.last;
          t.xp6(2),
            t.Q6J('prizmStickyLeft', !0),
            t.xp6(1),
            t.hij(' ', t.xi3(4, 12, n.code, '0.0-0'), ' '),
            t.xp6(2),
            t.Q6J('prizmStickyLeft', !0),
            t.xp6(1),
            t.hij(' ', n.name, ''),
            t.xp6(2),
            t.lnq(' ', o ? '#odd' : '#even', ' ', u ? '#first' : '', ' ', l ? '#last' : '', ' '),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.Oqu(t.xi3(13, 15, n.count, '0.0-0')),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.Oqu(t.xi3(20, 18, n.count, '0.0-0'));
        }
      }
      function No(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 12)(2, 'td', 16),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA(),
            t.TgZ(5, 'td', 15),
            t._uU(6),
            t.qZA(),
            t.TgZ(7, 'td', 15),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, 'td', 16),
            t._uU(10),
            t.ALo(11, 'spaceNumber'),
            t.qZA(),
            t.TgZ(12, 'td', 15),
            t._uU(13),
            t.qZA(),
            t.TgZ(14, 'td', 17),
            t._uU(15),
            t.qZA(),
            t.TgZ(16, 'td', 18),
            t._uU(17),
            t.ALo(18, 'spaceNumber'),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit;
          t.xp6(3),
            t.Oqu(t.xi3(4, 9, n.code, '0.0-0')),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', t.xi3(11, 12, n.count, '0.0-0'), ' '),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(1),
            t.Q6J('prizmStickyRight', !0),
            t.xp6(1),
            t.Oqu(n.category),
            t.xp6(1),
            t.Q6J('prizmStickyRight', !0),
            t.xp6(1),
            t.hij(' ', t.xi3(18, 15, n.count, '0.0-0'), ' ');
        }
      }
      function qo(e, i) {
        if (
          (1 & e &&
            (t.ynx(0, null, 20),
            t.TgZ(2, 'tr', 12),
            t._UZ(3, 'td', 21)(4, 'td', 22)(5, 'td', 22),
            t.TgZ(6, 'td', 21),
            t._uU(7),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = t.oxw(2);
          t.xp6(3),
            t.Q6J('prizmStickyBottom', !0),
            t.xp6(1),
            t.Q6J('prizmStickyBottom', !0),
            t.xp6(1),
            t.Q6J('prizmStickyBottom', !0),
            t.xp6(1),
            t.Q6J('prizmStickyBottom', !0),
            t.xp6(1),
            t.hij(' ', n.sum, ' ');
        }
      }
      function vo(e, i) {
        if (
          (1 & e &&
            (t.ynx(0)(1),
            t.TgZ(2, 'tr', 12)(3, 'td', 16),
            t._uU(4),
            t.ALo(5, 'spaceNumber'),
            t.qZA(),
            t.TgZ(6, 'td', 15),
            t._uU(7),
            t.qZA(),
            t.TgZ(8, 'td', 15),
            t._uU(9),
            t.qZA(),
            t.TgZ(10, 'td', 16),
            t._uU(11),
            t.ALo(12, 'spaceNumber'),
            t.qZA()(),
            t.BQk(),
            t.YNc(13, qo, 8, 5, 'ng-container', 19),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit,
            o = i.rowIdx,
            u = t.oxw();
          t.xp6(4),
            t.Oqu(t.xi3(5, 5, n.code, '0.0-0')),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(2),
            t.Oqu(n.category),
            t.xp6(2),
            t.hij(' ', t.xi3(12, 8, n.count, '0.0-0'), ' '),
            t.xp6(2),
            t.Q6J('ngIf', o + 1 === u.products.length);
        }
      }
      let Ro = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']), (this.products = b.WL);
          }
          get sum() {
            return this.products.reduce((n, o) => n + o.count, 0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-sticky-example']],
            decls: 64,
            vars: 14,
            consts: [
              ['href', '/components/sticky'],
              [1, 'scrollable'],
              ['prizmTable', '', 'size', 'l', 'prizmStickyRelative', '', 1, 'table'],
              ['prizmThGroup', ''],
              ['prizmTh', '', 3, 'prizmStickyLeft'],
              ['prizmTh', ''],
              ['prizmTbody', '', 3, 'data'],
              [4, 'prizmRow', 'prizmRowOf'],
              ['prizmStickyRelative', '', 1, 'scrollable'],
              ['prizmTable', '', 'size', 'm', 1, 'table'],
              ['prizmTh', '', 3, 'prizmStickyRight'],
              ['prizmTable', '', 'size', 'm', 'prizmStickyRelative', '', 1, 'table'],
              ['prizmTr', ''],
              ['prizmTd', '', 1, 'format__number', 3, 'prizmStickyLeft'],
              ['prizmTd', '', 3, 'prizmStickyLeft'],
              ['prizmTd', ''],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', '', 3, 'prizmStickyRight'],
              ['prizmTd', '', 1, 'format__number', 3, 'prizmStickyRight'],
              [4, 'ngIf'],
              ['footerTemplate', ''],
              ['prizmTd', '', 1, 'format__number', 3, 'prizmStickyBottom'],
              ['prizmTd', '', 3, 'prizmStickyBottom'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'p'),
                t._uU(1, 'For stick columns use our '),
                t.TgZ(2, 'a', 0),
                t._uU(3, 'PrizmStickModule'),
                t.qZA()(),
                t.TgZ(4, 'h3'),
                t._uU(5, 'Sticky Left'),
                t.qZA(),
                t.TgZ(6, 'prizm-scrollbar', 1)(7, 'table', 2)(8, 'thead')(9, 'tr', 3)(10, 'th', 4),
                t._uU(11, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(12, 'th', 4),
                t._uU(13, 'SL:\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(14, 'th', 5),
                t._uU(15, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(16, 'th', 5),
                t._uU(17, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA(),
                t.TgZ(18, 'th', 5),
                t._uU(19, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 2'),
                t.qZA(),
                t.TgZ(20, 'th', 5),
                t._uU(21, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2'),
                t.qZA(),
                t.TgZ(22, 'th', 5),
                t._uU(23, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 2'),
                t.qZA()()(),
                t.TgZ(24, 'tbody', 6),
                t.YNc(25, Uo, 21, 21, 'ng-container', 7),
                t.qZA()()(),
                t.TgZ(26, 'h3'),
                t._uU(27, 'Sticky Right'),
                t.qZA(),
                t.TgZ(28, 'prizm-scrollbar', 8)(29, 'table', 9)(30, 'thead')(31, 'tr', 3)(32, 'th', 5),
                t._uU(33, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(34, 'th', 5),
                t._uU(35, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(36, 'th', 5),
                t._uU(37, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(38, 'th', 5),
                t._uU(39, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA(),
                t.TgZ(40, 'th', 5),
                t._uU(41, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(42, 'th', 10),
                t._uU(43, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2'),
                t.qZA(),
                t.TgZ(44, 'th', 10),
                t._uU(45, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 1'),
                t.qZA()()(),
                t.TgZ(46, 'tbody', 6),
                t.YNc(47, No, 19, 18, 'ng-container', 7),
                t.qZA()()(),
                t.TgZ(48, 'h3'),
                t._uU(49, 'Sticky Bottom'),
                t.qZA(),
                t.TgZ(50, 'prizm-scrollbar', 1)(51, 'table', 11)(52, 'thead')(53, 'tr', 3)(54, 'th', 5),
                t._uU(55, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(56, 'th', 5),
                t._uU(57, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(58, 'th', 5),
                t._uU(59, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(60, 'th', 5),
                t._uU(61, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA()()(),
                t.TgZ(62, 'tbody', 6),
                t.YNc(63, vo, 14, 11, 'ng-container', 7),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(10),
                  t.Udp('z-index', 21),
                  t.Q6J('prizmStickyLeft', !0),
                  t.xp6(2),
                  t.Udp('z-index', 21),
                  t.Q6J('prizmStickyLeft', !0),
                  t.xp6(12),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(17),
                  t.Q6J('prizmStickyRight', !0),
                  t.xp6(2),
                  t.Q6J('prizmStickyRight', !0),
                  t.xp6(2),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(15),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products));
            },
            dependencies: [E.O5, $.J, G.N, m.Y, s.o, d.N, x.z, T.B, g.e, h.e, _.F, C.n, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function Lo(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'th', 7)(1, 'prizm-checkbox', 8),
            t.NdJ('changed', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG(l.selectAllChanged(u));
            }),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw();
          t.Q6J('sorter', null),
            t.xp6(1),
            t.Q6J('checked', n.selected.size === n.products.length)(
              'indeterminate',
              n.selected.size !== n.products.length && n.selected.size > 0
            );
        }
      }
      function Do(e, i) {
        1 & e && (t.TgZ(0, 'th', 9), t._uU(1, '\u041a\u043e\u0434'), t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function Yo(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 9),
          t._uU(1, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function Bo(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 9), t._uU(1, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'), t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function ko(e, i) {
        1 & e &&
          (t.TgZ(0, 'th', 9),
          t._uU(1, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
          t.qZA()),
          2 & e && t.Q6J('resizable', !0);
      }
      function Ho(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'td', 13)(1, 'prizm-checkbox', 14, 15),
            t.NdJ('changed', function () {
              t.CHM(n);
              const u = t.oxw(),
                l = u.$implicit,
                c = u.index,
                r = t.oxw();
              return t.KtG(r.productCheckboxChange(l, c));
            })('click', function (u) {
              return u.stopPropagation();
            }),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.xp6(1), t.Q6J('checked', o.productIsSelected(n));
        }
      }
      function Fo(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 16), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.code, '0.0-0'));
        }
      }
      function Io(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 13), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function $o(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 13), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function Go(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 16), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(t.xi3(2, 1, n.count, '0.0-0'));
        }
      }
      function jo(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'tr', 10),
            t.NdJ('click', function (u) {
              const l = t.CHM(n),
                c = l.$implicit,
                r = l.index,
                A = t.oxw();
              return t.KtG(A.rowClick(u, c, r));
            })('selectstart', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG(l.onSelectStart(u));
            }),
            t.YNc(1, Ho, 3, 1, 'td', 11),
            t.YNc(2, Fo, 3, 4, 'td', 12),
            t.YNc(3, Io, 2, 1, 'td', 11),
            t.YNc(4, $o, 2, 1, 'td', 11),
            t.YNc(5, Go, 3, 4, 'td', 12),
            t.qZA();
        }
        if (2 & e) {
          const n = i.$implicit,
            o = t.oxw();
          t.Q6J('active', (null == o.active ? null : o.active.product) === n),
            t.xp6(1),
            t.Q6J('prizmCell', 'checkbox'),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count');
        }
      }
      let Ko = (() => {
        class e {
          constructor() {
            (this.selected = new Set()),
              (this.active = null),
              (this.columns = ['checkbox', 'code', 'name', 'category', 'count']),
              (this.products = b.u8),
              (this.rowClickWithShift = !1);
          }
          onSelectStart(n) {
            n.preventDefault();
          }
          rowClick(n, o, u) {
            if ((n.preventDefault(), n.shiftKey)) {
              if (((this.rowClickWithShift = !0), !this.active))
                return (this.active = { product: o, index: u }), void this.addToSelection(o);
              const [l, c] = [this.active.index, u].sort((r, A) => r - A);
              this.products.forEach((r, A) => {
                A >= l && A <= c ? this.addToSelection(r) : this.removeFromSelection(r);
              });
            } else {
              if (n.ctrlKey || n.metaKey)
                return this.changeSelectionState(o), void (this.active = { product: o, index: u });
              this.rowClickWithShift && (this.selected.clear(), (this.rowClickWithShift = !1)),
                (this.active = { product: o, index: u });
            }
          }
          productIsSelected(n) {
            return this.selected.has(n);
          }
          selectAllChanged(n) {
            this.selected = !0 === n ? new Set([...this.products]) : new Set([]);
          }
          productCheckboxChange(n, o) {
            (this.active = { product: n, index: o }), this.changeSelectionState(n);
          }
          trackBy(n, o) {
            return o.code;
          }
          changeSelectionState(n) {
            this.selected.has(n) ? this.removeFromSelection(n) : this.addToSelection(n);
          }
          addToSelection(n) {
            this.selected.add(n);
          }
          removeFromSelection(n) {
            this.selected.delete(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-selectable-meta-example']],
            decls: 11,
            vars: 8,
            consts: [
              ['visibility', 'hidden', 1, 'scrollable'],
              ['prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              ['class', 'checkbox-header', 'prizmTh', '', 3, 'sorter', 4, 'prizmHead'],
              ['prizmTh', '', 3, 'resizable', 4, 'prizmHead'],
              ['prizmTbody', '', 3, 'data'],
              ['prizmTr', '', 3, 'active', 'click', 'selectstart', 4, 'prizmRow', 'prizmRowTrackBy'],
              ['prizmTh', '', 1, 'checkbox-header', 3, 'sorter'],
              [1, 'checkbox', 3, 'checked', 'indeterminate', 'changed'],
              ['prizmTh', '', 3, 'resizable'],
              ['prizmTr', '', 3, 'active', 'click', 'selectstart'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', ''],
              [1, 'checkbox', 3, 'checked', 'changed', 'click'],
              ['checkbox', ''],
              ['prizmTd', '', 1, 'format__number'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'prizm-scrollbar', 0)(1, 'table', 1)(2, 'thead')(3, 'tr', 2),
                t.YNc(4, Lo, 2, 3, 'th', 3),
                t.YNc(5, Do, 2, 1, 'th', 4),
                t.YNc(6, Yo, 2, 1, 'th', 4),
                t.YNc(7, Bo, 2, 1, 'th', 4),
                t.YNc(8, ko, 2, 1, 'th', 4),
                t.qZA()(),
                t.TgZ(9, 'tbody', 5),
                t.YNc(10, jo, 6, 6, 'tr', 6),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(1),
                  t.Q6J('columns', o.columns),
                  t.xp6(3),
                  t.Q6J('prizmHead', 'checkbox'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'code'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowTrackBy', o.trackBy));
            },
            dependencies: [m.Y, s.o, d.N, x.z, T.B, g.e, h.e, Z.j, y.R, _.F, C.n, L.q, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .checkbox-header[_ngcontent-%COMP%]{width:40px}[_nghost-%COMP%]   .checkbox[_ngcontent-%COMP%]{height:16px;width:16px;margin:0 auto;display:flex}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function Vo(e, i) {
        if (
          (1 & e &&
            (t.ynx(0), t.TgZ(1, 'td', 9), t._uU(2), t.qZA(), t.TgZ(3, 'td', 9), t._uU(4), t.qZA(), t.BQk()),
          2 & e)
        ) {
          const n = t.oxw().$implicit;
          t.xp6(2), t.Oqu(n.name), t.xp6(2), t.Oqu(n.category);
        }
      }
      function Xo(e, i) {
        if ((1 & e && (t.ynx(0), t.TgZ(1, 'td', 12), t._uU(2), t.qZA(), t.BQk()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Q6J('colspan', 2), t.xp6(1), t.Oqu(n.name);
        }
      }
      function Wo(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 7)(2, 'td', 8),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA(),
            t.TgZ(5, 'td', 9),
            t._uU(6),
            t._UZ(7, 'br'),
            t.qZA(),
            t.TgZ(8, 'td', 9),
            t._uU(9),
            t.qZA(),
            t.ynx(10, 10),
            t.YNc(11, Vo, 5, 2, 'ng-container', 11),
            t.YNc(12, Xo, 3, 2, 'ng-container', 11),
            t.BQk(),
            t.TgZ(13, 'td', 8),
            t._uU(14),
            t.ALo(15, 'spaceNumber'),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit,
            o = i.index;
          t.xp6(3),
            t.hij(' ', t.xi3(4, 7, n.code, '0.0-0'), ' '),
            t.xp6(3),
            t.Oqu(n.name),
            t.xp6(3),
            t.Oqu(n.category),
            t.xp6(1),
            t.Q6J('ngSwitch', o % 2 == 0),
            t.xp6(1),
            t.Q6J('ngSwitchCase', !0),
            t.xp6(1),
            t.Q6J('ngSwitchCase', !1),
            t.xp6(2),
            t.Oqu(t.xi3(15, 10, n.count, '0.0-0'));
        }
      }
      function ti(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 7)(2, 'td', 8),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA(),
            t.TgZ(5, 'td', 12),
            t._uU(6),
            t._UZ(7, 'br'),
            t.qZA(),
            t.TgZ(8, 'td', 12),
            t._uU(9),
            t.qZA()(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.$implicit;
          t.xp6(3),
            t.hij(' ', t.xi3(4, 5, n.code, '0.0-0'), ' '),
            t.xp6(2),
            t.Q6J('colspan', 2),
            t.xp6(1),
            t.Oqu(n.name),
            t.xp6(2),
            t.Q6J('colspan', 3),
            t.xp6(1),
            t.Oqu(n.category);
        }
      }
      let ei = (() => {
        class e {
          constructor() {
            (this.columns = ['code', 'name', 'category', 'count']), (this.products = b.WL);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-dynamic-row-group-example']],
            decls: 20,
            vars: 4,
            consts: [
              [1, 'scrollable'],
              ['prizmTable', '', 'size', 'l', 1, 'table'],
              ['prizmThGroup', ''],
              ['prizmTh', ''],
              [
                'prizmTbody',
                '',
                'heading',
                '\u0413\u0440\u0443\u043f\u043f\u0430 1 (5-6 \u043a\u043e\u043b\u043e\u043d\u043e\u043a))',
                3,
                'data',
              ],
              [4, 'prizmRow', 'prizmRowOf'],
              [
                'prizmTbody',
                '',
                'heading',
                '\u0413\u0440\u0443\u043f\u043f\u0430 (3 \u043a\u043e\u043b\u043e\u043d\u043a\u0438) ',
                3,
                'data',
              ],
              ['prizmTr', ''],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
              [3, 'ngSwitch'],
              [4, 'ngSwitchCase'],
              ['prizmTd', '', 3, 'colspan'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'prizm-scrollbar', 0)(1, 'table', 1)(2, 'thead')(3, 'tr', 2)(4, 'th', 3),
                t._uU(5, '\u041a\u043e\u0434'),
                t.qZA(),
                t.TgZ(6, 'th', 3),
                t._uU(7, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
                t.qZA(),
                t.TgZ(8, 'th', 3),
                t._uU(9, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
                t.qZA(),
                t.TgZ(10, 'th', 3),
                t._uU(11, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
                t.qZA(),
                t.TgZ(12, 'th', 3),
                t._uU(13, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 2'),
                t.qZA(),
                t.TgZ(14, 'th', 3),
                t._uU(15, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2'),
                t.qZA()()(),
                t.TgZ(16, 'tbody', 4),
                t.YNc(17, Wo, 16, 13, 'ng-container', 5),
                t.qZA(),
                t.TgZ(18, 'tbody', 6),
                t.YNc(19, ti, 10, 8, 'ng-container', 5),
                t.qZA()()()),
                2 & n &&
                  (t.xp6(16),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products),
                  t.xp6(1),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products));
            },
            dependencies: [E.RF, E.n9, m.Y, s.o, d.N, x.z, T.B, g.e, h.e, _.F, C.n, z.C],
            styles: [
              '[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      var ni = a(25886),
        oi = a(49643);
      let ii = (() => {
        class e {
          transform(n, o) {
            return o.includes(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵpipe = t.Yjl({ name: 'prizmStickyColumn', type: e, pure: !0 })),
          e
        );
      })();
      let li = (() => {
        class e {
          transform(n) {
            return (
              !(function ai(e) {
                return null == e;
              })(n) && !n
            );
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵpipe = t.Yjl({ name: 'prizmStickyHeader', type: e, pure: !0 })),
          e
        );
      })();
      function ci(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 9),
            t.ALo(1, 'prizmStickyHeader'),
            t.ALo(2, 'prizmStickyColumn'),
            t.ALo(3, 'prizmStickyColumn'),
            t._uU(4, ' \u041a\u043e\u0434 '),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.ekj('unsticky', t.lcZ(1, 5, n.settings.fixHeader)),
            t.Q6J('prizmStickyLeft', t.xi3(2, 7, 'code', n.stickyLeftIds))(
              'prizmStickyRight',
              t.xi3(3, 10, 'code', n.stickyRightIds)
            )('stylesOnSticky', n.stickyHeaderStyle);
        }
      }
      function ri(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 9),
            t.ALo(1, 'prizmStickyHeader'),
            t.ALo(2, 'prizmStickyColumn'),
            t.ALo(3, 'prizmStickyColumn'),
            t._uU(4, ' \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 '),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.ekj('unsticky', t.lcZ(1, 5, n.settings.fixHeader)),
            t.Q6J('prizmStickyLeft', t.xi3(2, 7, 'name', n.stickyLeftIds))(
              'prizmStickyRight',
              t.xi3(3, 10, 'name', n.stickyRightIds)
            )('stylesOnSticky', n.stickyHeaderStyle);
        }
      }
      function pi(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 9),
            t.ALo(1, 'prizmStickyHeader'),
            t.ALo(2, 'prizmStickyColumn'),
            t.ALo(3, 'prizmStickyColumn'),
            t._uU(4, ' \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f '),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.ekj('unsticky', t.lcZ(1, 5, n.settings.fixHeader)),
            t.Q6J('prizmStickyLeft', t.xi3(2, 7, 'category', n.stickyLeftIds))(
              'prizmStickyRight',
              t.xi3(3, 10, 'category', n.stickyRightIds)
            )('stylesOnSticky', n.stickyHeaderStyle);
        }
      }
      function mi(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 9),
            t.ALo(1, 'prizmStickyHeader'),
            t.ALo(2, 'prizmStickyColumn'),
            t.ALo(3, 'prizmStickyColumn'),
            t._uU(4, ' \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e '),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.ekj('unsticky', t.lcZ(1, 5, n.settings.fixHeader)),
            t.Q6J('prizmStickyLeft', t.xi3(2, 7, 'count', n.stickyLeftIds))(
              'prizmStickyRight',
              t.xi3(3, 10, 'count', n.stickyRightIds)
            )('stylesOnSticky', n.stickyHeaderStyle);
        }
      }
      function si(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 9),
            t.ALo(1, 'prizmStickyHeader'),
            t.ALo(2, 'prizmStickyColumn'),
            t.ALo(3, 'prizmStickyColumn'),
            t._uU(4, ' \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 2 '),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.ekj('unsticky', t.lcZ(1, 5, n.settings.fixHeader)),
            t.Q6J('prizmStickyLeft', t.xi3(2, 7, 'nameTwin', n.stickyLeftIds))(
              'prizmStickyRight',
              t.xi3(3, 10, 'nameTwin', n.stickyRightIds)
            )('stylesOnSticky', n.stickyHeaderStyle);
        }
      }
      function di(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 9),
            t.ALo(1, 'prizmStickyHeader'),
            t.ALo(2, 'prizmStickyColumn'),
            t.ALo(3, 'prizmStickyColumn'),
            t._uU(4, ' \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2 '),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.ekj('unsticky', t.lcZ(1, 5, n.settings.fixHeader)),
            t.Q6J('prizmStickyLeft', t.xi3(2, 7, 'categoryTwin', n.stickyLeftIds))(
              'prizmStickyRight',
              t.xi3(3, 10, 'categoryTwin', n.stickyRightIds)
            )('stylesOnSticky', n.stickyHeaderStyle);
        }
      }
      function xi(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'th', 9),
            t.ALo(1, 'prizmStickyHeader'),
            t.ALo(2, 'prizmStickyColumn'),
            t.ALo(3, 'prizmStickyColumn'),
            t._uU(4, ' \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 2 '),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.ekj('unsticky', t.lcZ(1, 5, n.settings.fixHeader)),
            t.Q6J('prizmStickyLeft', t.xi3(2, 7, 'countTwin', n.stickyLeftIds))(
              'prizmStickyRight',
              t.xi3(3, 10, 'countTwin', n.stickyRightIds)
            )('stylesOnSticky', n.stickyHeaderStyle);
        }
      }
      function Ti(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'td', 13),
            t.ALo(1, 'prizmStickyColumn'),
            t.ALo(2, 'prizmStickyColumn'),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.Q6J('prizmStickyLeft', t.xi3(1, 4, 'code', o.stickyLeftIds))(
            'prizmStickyRight',
            t.xi3(2, 7, 'code', o.stickyRightIds)
          )('stylesOnSticky', o.stickyStyle),
            t.xp6(3),
            t.hij(' ', t.xi3(4, 10, n.code, '0.0-0'), ' ');
        }
      }
      function gi(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'td', 14),
            t.ALo(1, 'prizmStickyColumn'),
            t.ALo(2, 'prizmStickyColumn'),
            t._uU(3),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.Q6J('prizmStickyLeft', t.xi3(1, 4, 'name', o.stickyLeftIds))(
            'prizmStickyRight',
            t.xi3(2, 7, 'name', o.stickyRightIds)
          )('stylesOnSticky', o.stickyStyle),
            t.xp6(3),
            t.hij(' ', n.name, ' ');
        }
      }
      function hi(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'td', 14),
            t.ALo(1, 'prizmStickyColumn'),
            t.ALo(2, 'prizmStickyColumn'),
            t._uU(3),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.Q6J('prizmStickyLeft', t.xi3(1, 4, 'category', o.stickyLeftIds))(
            'prizmStickyRight',
            t.xi3(2, 7, 'category', o.stickyRightIds)
          )('stylesOnSticky', o.stickyStyle),
            t.xp6(3),
            t.hij(' ', n.category, ' ');
        }
      }
      function _i(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'td', 13),
            t.ALo(1, 'prizmStickyColumn'),
            t.ALo(2, 'prizmStickyColumn'),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.Q6J('prizmStickyLeft', t.xi3(1, 4, 'count', o.stickyLeftIds))(
            'prizmStickyRight',
            t.xi3(2, 7, 'count', o.stickyRightIds)
          )('stylesOnSticky', o.stickyStyle),
            t.xp6(3),
            t.hij(' ', t.xi3(4, 10, n.count, '0.0-0'), ' ');
        }
      }
      function bi(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'td', 14),
            t.ALo(1, 'prizmStickyColumn'),
            t.ALo(2, 'prizmStickyColumn'),
            t._uU(3),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.Q6J('prizmStickyLeft', t.xi3(1, 4, 'nameTwin', o.stickyLeftIds))(
            'prizmStickyRight',
            t.xi3(2, 7, 'nameTwin', o.stickyRightIds)
          )('stylesOnSticky', o.stickyStyle),
            t.xp6(3),
            t.hij(' ', n.name, ' ');
        }
      }
      function Ci(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'td', 14),
            t.ALo(1, 'prizmStickyColumn'),
            t.ALo(2, 'prizmStickyColumn'),
            t._uU(3),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.Q6J('prizmStickyLeft', t.xi3(1, 4, 'categoryTwin', o.stickyLeftIds))(
            'prizmStickyRight',
            t.xi3(2, 7, 'categoryTwin', o.stickyRightIds)
          )('stylesOnSticky', o.stickyStyle),
            t.xp6(3),
            t.hij(' ', n.category, ' ');
        }
      }
      function zi(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'td', 13),
            t.ALo(1, 'prizmStickyColumn'),
            t.ALo(2, 'prizmStickyColumn'),
            t._uU(3),
            t.ALo(4, 'spaceNumber'),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw().$implicit,
            o = t.oxw();
          t.Q6J('prizmStickyLeft', t.xi3(1, 4, 'countTwin', o.stickyLeftIds))(
            'prizmStickyRight',
            t.xi3(2, 7, 'countTwin', o.stickyRightIds)
          )('stylesOnSticky', o.stickyStyle),
            t.xp6(3),
            t.hij(' ', t.xi3(4, 10, n.count, '0.0-0'), ' ');
        }
      }
      function fi(e, i) {
        1 & e &&
          (t.TgZ(0, 'tr', 10),
          t.YNc(1, Ti, 5, 13, 'td', 11),
          t.YNc(2, gi, 4, 10, 'td', 12),
          t.YNc(3, hi, 4, 10, 'td', 12),
          t.YNc(4, _i, 5, 13, 'td', 11),
          t.YNc(5, bi, 4, 10, 'td', 12),
          t.YNc(6, Ci, 4, 10, 'td', 12),
          t.YNc(7, zi, 5, 13, 'td', 11),
          t.qZA()),
          2 & e &&
            (t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count'),
            t.xp6(1),
            t.Q6J('prizmCell', 'nameTwin'),
            t.xp6(1),
            t.Q6J('prizmCell', 'categoryTwin'),
            t.xp6(1),
            t.Q6J('prizmCell', 'countTwin'));
      }
      function Zi(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-dropdown-host', 15),
            t.NdJ('isOpenChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.showColumnSettings = u));
            }),
            t.TgZ(1, 'button', 16),
            t.NdJ('click', function () {
              t.CHM(n);
              const u = t.oxw();
              return t.KtG(u.toggleColumnSettings());
            }),
            t.qZA()();
        }
        if (2 & e) {
          const n = t.oxw(),
            o = t.MAs(17);
          t.Q6J('isOpen', n.showColumnSettings)('content', o), t.xp6(1), t.Q6J('icon', 'settings');
        }
      }
      function yi(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-column-settings', 17),
            t.NdJ('isSettingsChanged', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG(l.updateTableSettings(u));
            }),
            t.qZA();
        }
        if (2 & e) {
          const n = t.oxw();
          t.Q6J('defaultSettings', n.defaultSettings)('settings', n.settings)('stickySettings', !0)(
            'headerSettings',
            !0
          );
        }
      }
      const Ei = function (e) {
        return [e];
      };
      let Ai = (() => {
        class e {
          constructor(n) {
            (this.cdr = n),
              (this.stickyStyle = { 'z-index': 22 }),
              (this.stickyHeaderStyle = { 'z-index': 23 }),
              (this.columns = ['code', 'name', 'category', 'count', 'nameTwin', 'categoryTwin', 'countTwin']),
              (this.settings = {
                columns: [
                  { id: 'code', name: '\u041a\u043e\u0434', status: 'default' },
                  {
                    id: 'name',
                    name: '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435',
                    status: 'default',
                  },
                  {
                    id: 'category',
                    name: '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',
                    status: 'default',
                  },
                  {
                    id: 'count',
                    name: '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e',
                    status: 'default',
                  },
                  {
                    id: 'nameTwin',
                    name: '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 2',
                    status: 'default',
                  },
                  {
                    id: 'categoryTwin',
                    name: '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2',
                    status: 'default',
                  },
                  {
                    id: 'countTwin',
                    name: '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 2',
                    status: 'default',
                  },
                ],
                stickyLeft: [],
                stickyRight: [],
                fixHeader: !1,
              }),
              (this.defaultSettings = {
                columns: [
                  { id: 'code', name: '\u041a\u043e\u0434', status: 'default' },
                  {
                    id: 'name',
                    name: '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435',
                    status: 'default',
                  },
                  {
                    id: 'category',
                    name: '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',
                    status: 'default',
                  },
                  {
                    id: 'count',
                    name: '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e',
                    status: 'default',
                  },
                  {
                    id: 'nameTwin',
                    name: '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 2',
                    status: 'hidden',
                  },
                  {
                    id: 'categoryTwin',
                    name: '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2',
                    status: 'hidden',
                  },
                  {
                    id: 'countTwin',
                    name: '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 2',
                    status: 'hidden',
                  },
                ],
                stickyLeft: [],
                stickyRight: [],
                fixHeader: !0,
              }),
              (this.stickyLeftIds = []),
              (this.stickyRightIds = []),
              (this.products = b.WL),
              (this.showColumnSettings = !1);
          }
          toggleColumnSettings() {
            this.showColumnSettings = !this.showColumnSettings;
          }
          updateTableSettings(n) {
            (this.showColumnSettings = !1),
              n &&
                ((this.stickyLeftIds = n.stickyLeft.map(o => o.id)),
                (this.stickyRightIds = n.stickyRight.map(o => o.id)),
                (this.columns = [
                  ...this.stickyLeftIds,
                  ...n.columns.filter(o => 'default' === o.status).map(o => o.id),
                  ...this.stickyRightIds,
                ]),
                (this.settings = n)),
              this.cdr.markForCheck();
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(t.Y36(t.sBO));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-column-settings-example']],
            decls: 18,
            vars: 13,
            consts: [
              [
                'title',
                '\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0430\u043c\u0438',
                3,
                'icons',
              ],
              [1, 'scrollable'],
              ['prizmStickyRelative', '', 'prizmTable', '', 1, 'table', 3, 'columns'],
              ['prizmThGroup', ''],
              [
                'prizmTh',
                '',
                3,
                'prizmStickyLeft',
                'prizmStickyRight',
                'stylesOnSticky',
                'unsticky',
                4,
                'prizmHead',
              ],
              ['prizmTbody', '', 3, 'data'],
              ['class', 'row', 'prizmTr', '', 4, 'prizmRow', 'prizmRowOf'],
              ['iconBtnTemplate', ''],
              ['dropdown', ''],
              ['prizmTh', '', 3, 'prizmStickyLeft', 'prizmStickyRight', 'stylesOnSticky'],
              ['prizmTr', '', 1, 'row'],
              [
                'class',
                'format__number',
                'prizmTd',
                '',
                3,
                'prizmStickyLeft',
                'prizmStickyRight',
                'stylesOnSticky',
                4,
                'prizmCell',
              ],
              ['prizmTd', '', 3, 'prizmStickyLeft', 'prizmStickyRight', 'stylesOnSticky', 4, 'prizmCell'],
              [
                'prizmTd',
                '',
                1,
                'format__number',
                3,
                'prizmStickyLeft',
                'prizmStickyRight',
                'stylesOnSticky',
              ],
              ['prizmTd', '', 3, 'prizmStickyLeft', 'prizmStickyRight', 'stylesOnSticky'],
              ['prizmDropdownHostWidth', 'auto', 3, 'isOpen', 'content', 'isOpenChange'],
              [
                'prizmIconButton',
                '',
                'appearanceType',
                'ghost',
                'appearance',
                'secondary',
                'size',
                's',
                3,
                'icon',
                'click',
              ],
              [3, 'defaultSettings', 'settings', 'stickySettings', 'headerSettings', 'isSettingsChanged'],
            ],
            template: function (n, o) {
              if (
                (1 & n &&
                  (t.TgZ(0, 'prizm-widget', 0)(1, 'prizm-scrollbar', 1)(2, 'table', 2)(3, 'thead')(
                    4,
                    'tr',
                    3
                  ),
                  t.YNc(5, ci, 5, 13, 'th', 4),
                  t.YNc(6, ri, 5, 13, 'th', 4),
                  t.YNc(7, pi, 5, 13, 'th', 4),
                  t.YNc(8, mi, 5, 13, 'th', 4),
                  t.YNc(9, si, 5, 13, 'th', 4),
                  t.YNc(10, di, 5, 13, 'th', 4),
                  t.YNc(11, xi, 5, 13, 'th', 4),
                  t.qZA()(),
                  t.TgZ(12, 'tbody', 5),
                  t.YNc(13, fi, 8, 7, 'tr', 6),
                  t.qZA()()()(),
                  t.YNc(14, Zi, 2, 3, 'ng-template', null, 7, t.W1O),
                  t.YNc(16, yi, 1, 4, 'ng-template', null, 8, t.W1O)),
                2 & n)
              ) {
                const u = t.MAs(15);
                t.Q6J('icons', t.VKq(11, Ei, u)),
                  t.xp6(2),
                  t.Q6J('columns', o.columns),
                  t.xp6(3),
                  t.Q6J('prizmHead', 'code'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'name'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'category'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'count'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'nameTwin'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'categoryTwin'),
                  t.xp6(1),
                  t.Q6J('prizmHead', 'countTwin'),
                  t.xp6(1),
                  t.Q6J('data', o.products),
                  t.xp6(1),
                  t.Q6J('prizmRowOf', o.products);
              }
            },
            dependencies: [
              $.J,
              G.N,
              m.Y,
              s.o,
              d.N,
              x.z,
              T.B,
              g.e,
              h.e,
              Z.j,
              y.R,
              _.F,
              C.n,
              I.Z,
              J.K,
              ni.m,
              oi.c,
              z.C,
              ii,
              li,
            ],
            styles: [
              '[_nghost-%COMP%]{--prizm-widget-content-padding: 0px}[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .scrollable[_ngcontent-%COMP%]{max-height:300px}[_nghost-%COMP%]   .format__number[_ngcontent-%COMP%]{text-align:right}',
            ],
            changeDetection: 0,
          })),
          e
        );
      })();
      function Si(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 4),
            t._UZ(1, 'prizm-table-basic-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 5),
            t._UZ(3, 'prizm-table-track-by-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 6),
            t._UZ(5, 'prizm-table-index-example'),
            t.qZA(),
            t.TgZ(6, 'prizm-doc-example', 7),
            t._UZ(7, 'prizm-table-border-style-example'),
            t.qZA(),
            t.TgZ(8, 'prizm-doc-example', 8),
            t._UZ(9, 'prizm-table-status-example'),
            t.qZA(),
            t.TgZ(10, 'prizm-doc-example', 9),
            t._UZ(11, 'prizm-table-selectable-example'),
            t.qZA(),
            t.TgZ(12, 'prizm-doc-example', 10),
            t._UZ(13, 'prizm-table-selectable-meta-example'),
            t.qZA(),
            t.TgZ(14, 'prizm-doc-example', 11),
            t._UZ(15, 'prizm-table-row-group-example'),
            t.qZA(),
            t.TgZ(16, 'prizm-doc-example', 12),
            t._UZ(17, 'prizm-table-dynamic-row-group-example'),
            t.qZA(),
            t.TgZ(18, 'prizm-doc-example', 13),
            t._UZ(19, 'prizm-table-filter-example'),
            t.qZA(),
            t.TgZ(20, 'prizm-doc-example', 14),
            t._UZ(21, 'prizm-table-search-example'),
            t.qZA(),
            t.TgZ(22, 'prizm-doc-example', 15),
            t._UZ(23, 'prizm-table-sort-example'),
            t.qZA(),
            t.TgZ(24, 'prizm-doc-example', 16),
            t._UZ(25, 'prizm-table-server-sort-example'),
            t.qZA(),
            t.TgZ(26, 'prizm-doc-example', 17),
            t._UZ(27, 'prizm-table-data-source-example'),
            t.qZA(),
            t.TgZ(28, 'prizm-doc-example', 18),
            t._UZ(29, 'prizm-table-editable-col-example'),
            t.qZA(),
            t.TgZ(30, 'prizm-doc-example', 19),
            t._UZ(31, 'prizm-table-editable-row-example'),
            t.qZA(),
            t.TgZ(32, 'prizm-doc-example', 20),
            t._UZ(33, 'prizm-table-empty-example'),
            t.qZA(),
            t.TgZ(34, 'prizm-doc-example', 21),
            t._UZ(35, 'prizm-table-tree-example'),
            t.qZA(),
            t.TgZ(36, 'prizm-doc-example', 22),
            t._UZ(37, 'prizm-table-tree-pagination-example'),
            t.qZA(),
            t.TgZ(38, 'prizm-doc-example', 23),
            t._UZ(39, 'prizm-table-sticky-example'),
            t.qZA(),
            t.TgZ(40, 'prizm-doc-example', 24),
            t._UZ(41, 'prizm-inherit-cols-basic-example'),
            t.qZA(),
            t.TgZ(42, 'prizm-doc-example', 25),
            t._UZ(43, 'prizm-table-column-settings-example'),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.Q6J('content', n.exampleBasicTable),
            t.xp6(2),
            t.Q6J('content', n.exampleTrackBy),
            t.xp6(2),
            t.Q6J('content', n.exampleBasicTable),
            t.xp6(2),
            t.Q6J('content', n.exampleBorderStyleTable),
            t.xp6(2),
            t.Q6J('content', n.exampleStatusTable),
            t.xp6(2),
            t.Q6J('content', n.exampleSelectableTable),
            t.xp6(2),
            t.Q6J('content', n.exampleSelectableMetaTable),
            t.xp6(2),
            t.Q6J('content', n.exampleRowGroupTable),
            t.xp6(2),
            t.Q6J('content', n.exampleDynamicRowGroupTable),
            t.xp6(2),
            t.Q6J('content', n.exampleFilterTable),
            t.xp6(2),
            t.Q6J('content', n.exampleSearchTable),
            t.xp6(2),
            t.Q6J('content', n.exampleSortTable),
            t.xp6(2),
            t.Q6J('content', n.exampleServerSortTable),
            t.xp6(2),
            t.Q6J('content', n.exampleDataSourceTable),
            t.xp6(2),
            t.Q6J('content', n.exampleEditableColTable),
            t.xp6(2),
            t.Q6J('content', n.exampleEditableRowTable),
            t.xp6(2),
            t.Q6J('content', n.exampleEmptyTable),
            t.xp6(2),
            t.Q6J('content', n.exampleTreeTable),
            t.xp6(2),
            t.Q6J('content', n.exampleTreePaginationTable),
            t.xp6(2),
            t.Q6J('content', n.exampleStickyTable),
            t.xp6(2),
            t.Q6J('content', n.exampleInheritColsTable),
            t.xp6(2),
            t.Q6J('content', n.exampleColumnSettingsTable);
        }
      }
      function Oi(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 51), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.hij(' ', t.xi3(2, 1, n.code, '0.0-0'), ' ');
        }
      }
      function Ji(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 52), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.name);
        }
      }
      function Qi(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 52), t._uU(1), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.Oqu(n.category);
        }
      }
      function wi(e, i) {
        if ((1 & e && (t.TgZ(0, 'td', 51), t._uU(1), t.ALo(2, 'spaceNumber'), t.qZA()), 2 & e)) {
          const n = t.oxw().$implicit;
          t.xp6(1), t.hij(' ', t.xi3(2, 1, n.count, '0.0-0'), ' ');
        }
      }
      function Pi(e, i) {
        if (
          (1 & e &&
            (t.ynx(0),
            t.TgZ(1, 'tr', 48),
            t.YNc(2, Oi, 3, 4, 'td', 49),
            t.YNc(3, Ji, 2, 1, 'td', 50),
            t.YNc(4, Qi, 2, 1, 'td', 50),
            t.YNc(5, wi, 3, 4, 'td', 49),
            t.qZA(),
            t.BQk()),
          2 & e)
        ) {
          const n = i.index;
          t.xp6(1),
            t.Q6J('active', 2 === n),
            t.xp6(1),
            t.Q6J('prizmCell', 'code'),
            t.xp6(1),
            t.Q6J('prizmCell', 'name'),
            t.xp6(1),
            t.Q6J('prizmCell', 'category'),
            t.xp6(1),
            t.Q6J('prizmCell', 'count');
        }
      }
      function Mi(e, i) {
        1 & e && t._uU(0, ' Status ');
      }
      function Ui(e, i) {
        1 & e && t._uU(0, ' Row background on hover ');
      }
      function Ni(e, i) {
        1 & e && t._uU(0, ' Row background odd ');
      }
      function qi(e, i) {
        1 & e && t._uU(0, ' Row background even ');
      }
      function vi(e, i) {
        1 & e && t._uU(0, ' Row cursor ');
      }
      function Ri(e, i) {
        1 & e && t._uU(0, ' Active row marker background color ');
      }
      function Li(e, i) {
        1 & e && t._uU(0, ' Data ');
      }
      function Di(e, i) {
        1 & e && t._uU(0, ' Heading ');
      }
      function Yi(e, i) {
        1 & e && t._uU(0, ' Opened ');
      }
      function Bi(e, i) {
        1 & e && t._uU(0, ' Size ');
      }
      function ki(e, i) {
        1 & e && t._uU(0, ' Border style ');
      }
      function Hi(e, i) {
        1 & e && t._uU(0, ' Columns ');
      }
      function Fi(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.YNc(0, Hi, 1, 0, 'ng-template', 53),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const l = t.oxw(2);
              return t.KtG((l.columns = u));
            });
        }
        if (2 & e) {
          const n = t.oxw(2);
          t.Q6J('documentationPropertyValue', n.columns)('documentationPropertyValues', n.columnsVarians);
        }
      }
      function Ii(e, i) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-doc-demo', 26)(1, 'prizm-scrollbar', 27)(2, 'table', 28)(3, 'thead')(4, 'tr', 29)(
            5,
            'th',
            30
          ),
            t._uU(6, '\u041a\u043e\u0434'),
            t.qZA(),
            t.TgZ(7, 'th', 30),
            t._uU(8, '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435'),
            t.qZA(),
            t.TgZ(9, 'th', 30),
            t._uU(10, '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f'),
            t.qZA(),
            t.TgZ(11, 'th', 30),
            t._uU(12, '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e'),
            t.qZA()()(),
            t.TgZ(13, 'tbody', 31),
            t.YNc(14, Pi, 6, 5, 'ng-container', 32),
            t.qZA()()()(),
            t.TgZ(15, 'prizm-doc-documentation', 33),
            t.YNc(16, Mi, 1, 0, 'ng-template', 34),
            t.YNc(17, Ui, 1, 0, 'ng-template', 35),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.prizmTableRowHoverBackground = u));
            }),
            t.YNc(18, Ni, 1, 0, 'ng-template', 36),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.prizmTableRowOddBackground = u));
            }),
            t.YNc(19, qi, 1, 0, 'ng-template', 37),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.prizmTableRowBackground = u));
            }),
            t.YNc(20, vi, 1, 0, 'ng-template', 38),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.prizmTableRowCursor = u));
            }),
            t.YNc(21, Ri, 1, 0, 'ng-template', 39),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.prizmTableActiveRowMarkerColor = u));
            }),
            t.qZA(),
            t.TgZ(22, 'prizm-doc-documentation', 40),
            t.YNc(23, Li, 1, 0, 'ng-template', 41),
            t.YNc(24, Di, 1, 0, 'ng-template', 42),
            t.YNc(25, Yi, 1, 0, 'ng-template', 43),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.open = u));
            }),
            t.qZA(),
            t.TgZ(26, 'prizm-doc-documentation', 44),
            t.YNc(27, Bi, 1, 0, 'ng-template', 45),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.size = u));
            }),
            t.YNc(28, ki, 1, 0, 'ng-template', 46),
            t.NdJ('documentationPropertyValueChange', function (u) {
              t.CHM(n);
              const l = t.oxw();
              return t.KtG((l.borderStyle = u));
            }),
            t.YNc(29, Fi, 1, 2, null, 47),
            t.qZA();
        }
        if (2 & e) {
          const n = t.oxw();
          t.xp6(2),
            t.Udp('--prizm-table-row-odd-background', n.prizmTableRowOddBackground)(
              '--prizm-table-row-hover-background',
              n.prizmTableRowHoverBackground
            )('--prizm-table-row-background', n.prizmTableRowBackground)(
              '--prizm-table-row-cursor',
              n.prizmTableRowCursor
            )('--prizm-table-active-row-marker-color', n.prizmTableActiveRowMarkerColor),
            t.Q6J('columns', n.columns)('size', n.size)('tableBorderStyle', n.borderStyle),
            t.xp6(11),
            t.Q6J('data', n.products)('open', n.open),
            t.xp6(1),
            t.Q6J('prizmRowOf', n.products),
            t.xp6(1),
            t.Q6J('hasTestId', !1),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', n.prizmTableRowHoverBackground),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmTableRowOddBackground),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmTableRowBackground),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmTableRowCursor),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmTableActiveRowMarkerColor),
            t.xp6(1),
            t.Q6J('hasTestId', !1),
            t.xp6(3),
            t.Q6J('documentationPropertyValue', n.open),
            t.xp6(1),
            t.Q6J('hasTestId', !1),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.size)('documentationPropertyValues', n.sizeVariants),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.borderStyle)(
              'documentationPropertyValues',
              n.borderStyleVariants
            ),
            t.xp6(1),
            t.Q6J('ngIf', !1);
        }
      }
      function $i(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 54)(1, 'li')(2, 'p'),
            t._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmTableModule'),
            t.qZA(),
            t._uU(
              6,
              ' \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 '
            ),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 55),
            t.qZA()()),
          2 & e)
        ) {
          const n = t.oxw();
          t.xp6(7), t.Q6J('code', n.setupModule);
        }
      }
      let Gi = (() => {
        class e {
          constructor() {
            (this.products = b.WL),
              (this.prizmTableRowOddBackground = null),
              (this.prizmTableRowBackground = null),
              (this.prizmTableRowCursor = 'pointer'),
              (this.prizmTableRowHoverBackground = null),
              (this.prizmTableActiveRowMarkerColor = null),
              (this.columns = ['code', 'name', 'category', 'count']),
              (this.columnsVarians = [
                ['code', 'name'],
                ['name', 'category'],
                ['code', 'name', 'category', 'count'],
              ]),
              (this.open = !0),
              (this.borderStyle = 'grid'),
              (this.borderStyleVariants = ['grid', 'horizontal', 'vertical']),
              (this.size = 'l'),
              (this.sizeVariants = ['xs', 'l', 'm', 's']),
              (this.scrollable = !1),
              (this.scrollHeight = null),
              (this.scrollHeightVariants = [null, '160px', '200px', '300px', '500px']),
              (this.responsiveLayout = 'scroll'),
              (this.layoutVariants = ['scroll', 'stack']),
              (this.exampleBasicTable = {
                TypeScript: a.e(65973).then(a.t.bind(a, 65973, 17)),
                HTML: a.e(97636).then(a.t.bind(a, 97636, 17)),
                LESS: a.e(92299).then(a.t.bind(a, 92299, 17)),
              }),
              (this.exampleTrackBy = {
                TypeScript: a.e(32093).then(a.t.bind(a, 32093, 17)),
                HTML: a.e(80540).then(a.t.bind(a, 80540, 17)),
                LESS: a.e(13417).then(a.t.bind(a, 13417, 17)),
              }),
              (this.exampleIndexTable = {
                TypeScript: a.e(31167).then(a.t.bind(a, 31167, 17)),
                HTML: a.e(49989).then(a.t.bind(a, 49989, 17)),
                LESS: a.e(241).then(a.t.bind(a, 241, 17)),
              }),
              (this.exampleInheritColsTable = {
                TypeScript: a.e(86751).then(a.t.bind(a, 86751, 17)),
                HTML: a.e(44983).then(a.t.bind(a, 44983, 17)),
                LESS: a.e(52876).then(a.t.bind(a, 52876, 17)),
              }),
              (this.exampleStickyTable = {
                TypeScript: a.e(91786).then(a.t.bind(a, 91786, 17)),
                HTML: a.e(49190).then(a.t.bind(a, 49190, 17)),
                LESS: a.e(27709).then(a.t.bind(a, 27709, 17)),
              }),
              (this.exampleTreeTable = {
                TypeScript: a.e(642).then(a.t.bind(a, 642, 17)),
                HTML: a.e(93061).then(a.t.bind(a, 93061, 17)),
                LESS: a.e(78984).then(a.t.bind(a, 78984, 17)),
              }),
              (this.exampleTreePaginationTable = {
                TypeScript: a.e(15203).then(a.t.bind(a, 15203, 17)),
                HTML: a.e(89162).then(a.t.bind(a, 89162, 17)),
                LESS: a.e(96610).then(a.t.bind(a, 96610, 17)),
              }),
              (this.exampleEmptyTable = {
                TypeScript: a.e(39176).then(a.t.bind(a, 39176, 17)),
                HTML: a.e(30955).then(a.t.bind(a, 30955, 17)),
                LESS: a.e(46517).then(a.t.bind(a, 46517, 17)),
              }),
              (this.exampleLoadingTable = {
                TypeScript: a.e(54805).then(a.t.bind(a, 54805, 17)),
                HTML: a.e(38153).then(a.t.bind(a, 38153, 17)),
                LESS: a.e(19441).then(a.t.bind(a, 19441, 17)),
              }),
              (this.exampleBorderStyleTable = {
                TypeScript: a.e(18743).then(a.t.bind(a, 18743, 17)),
                HTML: a.e(27301).then(a.t.bind(a, 27301, 17)),
                LESS: a.e(89051).then(a.t.bind(a, 89051, 17)),
              }),
              (this.exampleEditableColTable = {
                TypeScript: a.e(11508).then(a.t.bind(a, 11508, 17)),
                HTML: a.e(69651).then(a.t.bind(a, 69651, 17)),
                LESS: a.e(1132).then(a.t.bind(a, 1132, 17)),
              }),
              (this.exampleEditableRowTable = {
                TypeScript: a.e(39668).then(a.t.bind(a, 39668, 17)),
                HTML: a.e(75674).then(a.t.bind(a, 75674, 17)),
                LESS: a.e(70664).then(a.t.bind(a, 70664, 17)),
              }),
              (this.exampleRowGroupTable = {
                TypeScript: a.e(11609).then(a.t.bind(a, 11609, 17)),
                HTML: a.e(64839).then(a.t.bind(a, 64839, 17)),
                LESS: a.e(53431).then(a.t.bind(a, 53431, 17)),
              }),
              (this.exampleDynamicRowGroupTable = {
                TypeScript: a.e(92274).then(a.t.bind(a, 92274, 17)),
                HTML: a.e(90302).then(a.t.bind(a, 90302, 17)),
                LESS: a.e(59946).then(a.t.bind(a, 59946, 17)),
              }),
              (this.exampleSelectableTable = {
                TypeScript: a.e(39469).then(a.t.bind(a, 39469, 17)),
                HTML: a.e(28553).then(a.t.bind(a, 28553, 17)),
                LESS: a.e(67138).then(a.t.bind(a, 67138, 17)),
              }),
              (this.exampleSelectableMetaTable = {
                TypeScript: a.e(5897).then(a.t.bind(a, 5897, 17)),
                HTML: a.e(36443).then(a.t.bind(a, 36443, 17)),
                LESS: a.e(84009).then(a.t.bind(a, 84009, 17)),
              }),
              (this.exampleStatusTable = {
                TypeScript: a.e(7912).then(a.t.bind(a, 7912, 17)),
                HTML: a.e(60239).then(a.t.bind(a, 60239, 17)),
                LESS: a.e(35761).then(a.t.bind(a, 69115, 17)),
              }),
              (this.exampleFilterTable = {
                TypeScript: a.e(74909).then(a.t.bind(a, 74909, 17)),
                HTML: a.e(76337).then(a.t.bind(a, 76337, 17)),
                LESS: a.e(30602).then(a.t.bind(a, 30602, 17)),
              }),
              (this.exampleSearchTable = {
                TypeScript: a.e(34619).then(a.t.bind(a, 34619, 17)),
                HTML: a.e(69319).then(a.t.bind(a, 69319, 17)),
                LESS: a.e(55915).then(a.t.bind(a, 55915, 17)),
              }),
              (this.exampleSortTable = {
                TypeScript: a.e(37819).then(a.t.bind(a, 37819, 17)),
                HTML: a.e(86557).then(a.t.bind(a, 86557, 17)),
                LESS: a.e(3042).then(a.t.bind(a, 3042, 17)),
              }),
              (this.exampleServerSortTable = {
                TypeScript: a.e(90419).then(a.t.bind(a, 90419, 17)),
                HTML: a.e(60694).then(a.t.bind(a, 60694, 17)),
                LESS: a.e(60457).then(a.t.bind(a, 60457, 17)),
              }),
              (this.exampleDataSourceTable = {
                TypeScript: a.e(63397).then(a.t.bind(a, 63397, 17)),
                HTML: a.e(6679).then(a.t.bind(a, 6679, 17)),
                LESS: a.e(85499).then(a.t.bind(a, 85499, 17)),
              }),
              (this.exampleColumnSettingsTable = {
                TypeScript: a.e(11639).then(a.t.bind(a, 11639, 17)),
                HTML: a.e(70570).then(a.t.bind(a, 70570, 17)),
                LESS: a.e(63120).then(a.t.bind(a, 63120, 17)),
              }),
              (this.setupModule = a.e(34316).then(a.t.bind(a, 34316, 17)));
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-table-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Table', 'package', 'UI'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              ['id', 'track-by', 'heading', 'Track By', 3, 'content'],
              ['id', 'index', 'heading', 'Index', 3, 'content'],
              ['id', 'borderStyle', 'heading', 'Border styles', 3, 'content'],
              ['id', 'status', 'heading', 'Table with row&cell statuses', 3, 'content'],
              ['id', 'selectable', 'heading', 'Selectable', 3, 'content'],
              ['id', 'multi-meta-select', 'heading', 'Multi select with meta', 3, 'content'],
              ['id', 'rowGroup', 'heading', 'Table row group', 3, 'content'],
              ['id', 'dynamic-row-group', 'heading', 'Dynamic table row group', 3, 'content'],
              ['id', 'filter', 'heading', 'Filter', 3, 'content'],
              ['id', 'search', 'heading', 'Search', 3, 'content'],
              ['id', 'sort', 'heading', 'Base Sort', 3, 'content'],
              ['id', 'server-sort', 'heading', 'Server Sort', 3, 'content'],
              ['id', 'datasource', 'heading', 'Sort, Pagination, Filtering', 3, 'content'],
              ['id', 'editableCol', 'heading', 'Editable col', 3, 'content'],
              ['id', 'editableRow', 'heading', 'Editable row', 3, 'content'],
              ['id', 'empty', 'heading', 'Empty', 3, 'content'],
              ['id', 'tree', 'heading', 'Tree', 3, 'content'],
              ['id', 'tree-pagination', 'heading', 'Tree pagination', 3, 'content'],
              ['id', 'sticky', 'heading', 'Sticky', 3, 'content'],
              ['id', 'inherit-cols', 'heading', 'Inherit Cols', 3, 'content'],
              ['id', 'column-settings', 'heading', 'Column settings', 3, 'content'],
              [1, 'remove-sticky'],
              [1, 'scrollable'],
              ['prizmTable', '', 1, 'table', 3, 'columns', 'size', 'tableBorderStyle'],
              ['prizmThGroup', ''],
              ['prizmTh', ''],
              ['prizmTbody', '', 3, 'data', 'open'],
              [4, 'prizmRow', 'prizmRowOf'],
              ['heading', 'PrizmTrComponent', 3, 'hasTestId'],
              [
                'documentationPropertyName',
                'status',
                'documentationPropertyType',
                'PrizmTableCellStatus',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'prizm-table-row-hover-background',
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
                'prizm-table-row-odd-background',
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
                'prizm-table-row-background',
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
                'prizm-table-row-cursor',
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
                'prizm-table-active-row-marker-color',
                'documentationPropertyType',
                'string',
                'documentationPropertyMode',
                'css-var',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              ['heading', 'PrizmTbodyComponent', 3, 'hasTestId'],
              [
                'documentationPropertyName',
                'data',
                'documentationPropertyType',
                'Record<string, any>',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'heading',
                'documentationPropertyType',
                'PolymorphContent',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'open',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'input-output',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              ['heading', 'PrizmTableDirective', 3, 'hasTestId'],
              [
                'documentationPropertyName',
                'size',
                'documentationPropertyType',
                'string',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'tableBorderStyle',
                'documentationPropertyType',
                'PrizmTableBorderStyle',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [4, 'ngIf'],
              ['prizmTr', '', 3, 'active'],
              ['class', 'format__number', 'prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 4, 'prizmCell'],
              ['prizmTd', '', 1, 'format__number'],
              ['prizmTd', ''],
              [
                'documentationPropertyName',
                'columns',
                'documentationPropertyType',
                'string[]',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (n, o) {
              1 & n &&
                (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                t._uU(2, ' Our table component is a powerful tool for displaying data in a tabular format. '),
                t.qZA(),
                t.YNc(3, Si, 44, 22, 'ng-template', 2),
                t.YNc(4, Ii, 30, 30, 'ng-template', 3),
                t.YNc(5, $i, 8, 1, 'ng-template', 2),
                t.qZA());
            },
            dependencies: [
              E.O5,
              S.c,
              M.F,
              U.K,
              V.N,
              X.W,
              W.l,
              tt.a,
              et.w,
              m.Y,
              s.o,
              d.N,
              x.z,
              T.B,
              g.e,
              h.e,
              Z.j,
              _.F,
              C.n,
              ot,
              bt,
              zt,
              St,
              Nt,
              Dt,
              Ft,
              me,
              Ce,
              qe,
              $e,
              nn,
              xn,
              An,
              Dn,
              ao,
              ho,
              Mo,
              Ro,
              Ko,
              ei,
              Ai,
              z.C,
            ],
            styles: ['.prizm-input-layout{width:auto}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      var j = a(21004),
        ji = a(75187);
      let Ki = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({
            imports: [
              E.ez,
              p.whW,
              p.$Lm,
              j.Qp,
              p.Ar6,
              p.r1t,
              ji.Bz.forChild((0, j.GB)(Gi)),
              f.u5,
              f.UX,
              p.LOd,
              p.Qjd,
              p.koU,
              p.cRT,
              p.Zt_,
              p.qwH,
              p.KSn,
              p.b2o,
              p.cK6,
            ],
          })),
          e
        );
      })();
    },
    56586: (K, Q, a) => {
      a.d(Q, { w: () => t });
      var E = a(45773),
        b = a(65879);
      let t = (() => {
        class S {}
        return (
          (S.ɵfac = function (U) {
            return new (U || S)();
          }),
          (S.ɵdir = b.lG2({ type: S, selectors: [['', 'prizmDocHost', '']], features: [b._Bn([E.R])] })),
          S
        );
      })();
    },
  },
]);
