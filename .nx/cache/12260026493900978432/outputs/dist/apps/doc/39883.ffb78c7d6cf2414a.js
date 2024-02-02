'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [39883],
  {
    39883: (y, d, o) => {
      o.r(d), o.d(d, { IconModule: () => W });
      var l = o(96814),
        p = o(21004),
        h = o(75187),
        s = o(15232),
        g = o(70342),
        a = o(70169),
        u = o(73864),
        t = o(65879),
        v = o(8221),
        f = o(30990),
        z = o(83419),
        I = o(78905),
        P = o(63796),
        C = o(75987),
        T = o(43015),
        D = o(56586),
        E = o(57679),
        x = o(15884);
      let S = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-icon-base-example']],
              decls: 10,
              vars: 0,
              consts: [
                [1, 'icons-24'],
                [1, 'prizm-icons', 'prizm-icons-charts-diagrams_bar-axis'],
                [1, 'icons-16'],
              ],
              template: function (n, r) {
                1 & n &&
                  (t.TgZ(0, 'div')(1, 'h4'),
                  t._uU(2, '24 size'),
                  t.qZA(),
                  t.TgZ(3, 'div', 0),
                  t._UZ(4, 'i', 1),
                  t.qZA()(),
                  t.TgZ(5, 'div')(6, 'h4'),
                  t._uU(7, '16 size'),
                  t.qZA(),
                  t.TgZ(8, 'div', 2),
                  t._UZ(9, 'i', 1),
                  t.qZA()());
              },
              styles: [
                '.icons-24[_ngcontent-%COMP%]{font-size:24px;color:var(--prizm-v3-status-info-primary-default)}.icons-16[_ngcontent-%COMP%]{font-size:16px;color:var(--prizm-v3-status-info-primary-default)}',
              ],
            })),
            e
          );
        })(),
        Z = (() => {
          class e {
            constructor(n) {
              (this.iconRegistry = n),
                (this.PrizmIconSvgEnum = s.vnC),
                this.iconRegistry.registerIcons([s.etx, s.nID, s.iIm]);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(t.Y36(s.efQ));
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-icon-svg-example']],
              decls: 7,
              vars: 6,
              consts: [
                [2, 'display', 'flex', 'gap', '8px'],
                [3, 'size', 'name'],
              ],
              template: function (n, r) {
                1 & n &&
                  (t.TgZ(0, 'div')(1, 'h4'),
                  t._uU(2, 'Default'),
                  t.qZA(),
                  t.TgZ(3, 'div', 0),
                  t._UZ(4, 'prizm-icons-svg', 1)(5, 'prizm-icons-svg', 1)(6, 'prizm-icons-svg', 1),
                  t.qZA()()),
                  2 & n &&
                    (t.xp6(4),
                    t.Q6J('size', 30)('name', r.PrizmIconSvgEnum.SETTINGS_TOOLS_BAN),
                    t.xp6(1),
                    t.Q6J('size', 30)('name', r.PrizmIconSvgEnum.PRODUCTION_INDUSTRY_SNAKE_CUP),
                    t.xp6(1),
                    t.Q6J('size', 30)('name', r.PrizmIconSvgEnum.DATE_TIME_CALENDAR_PLUS));
              },
              dependencies: [x.C],
              encapsulation: 2,
            })),
            e
          );
        })();
      function M(e, c) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'div', 10),
            t.NdJ('click', function () {
              const i = t.CHM(n).$implicit,
                J = t.oxw(3);
              return t.KtG(J.copy(i));
            }),
            t._UZ(1, 'prizm-icons-svg', 11),
            t.TgZ(2, 'div', 12),
            t._uU(3),
            t.qZA()();
        }
        if (2 & e) {
          const n = c.$implicit;
          t.xp6(1), t.Q6J('size', 24)('name', n), t.xp6(1), t.Q6J('title', n), t.xp6(1), t.Oqu(n);
        }
      }
      function A(e, c) {
        if (
          (1 & e &&
            (t.TgZ(0, 'div')(1, 'h4', 7),
            t._uU(2),
            t.qZA(),
            t.TgZ(3, 'div', 8),
            t.YNc(4, M, 4, 4, 'div', 9),
            t.qZA()()),
          2 & e)
        ) {
          const n = c.$implicit;
          t.xp6(2), t.Oqu(n.dir), t.xp6(2), t.Q6J('ngForOf', n.data);
        }
      }
      function O(e, c) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 4),
            t._UZ(1, 'prizm-icon-base-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 5),
            t._UZ(3, 'prizm-icon-svg-example'),
            t.qZA(),
            t.TgZ(4, 'h1'),
            t._uU(5, 'Icon set.'),
            t.qZA(),
            t.YNc(6, A, 5, 2, 'div', 6)),
          2 & e)
        ) {
          const n = t.oxw();
          t.Q6J('content', n.exampleFont),
            t.xp6(2),
            t.Q6J('content', n.exampleSvg),
            t.xp6(4),
            t.Q6J('ngForOf', n.defs);
        }
      }
      function _(e, c) {
        1 & e && t._uU(0, ' Icon ');
      }
      function U(e, c) {
        1 & e && t._uU(0, ' Css Color ');
      }
      function H(e, c) {
        1 & e && t._uU(0, ' Size ');
      }
      function N(e, c) {
        if (1 & e) {
          const n = t.EpF();
          t.TgZ(0, 'prizm-doc-demo'),
            t._UZ(1, 'prizm-icons-svg', 13, 14),
            t.qZA(),
            t.TgZ(3, 'prizm-doc-documentation'),
            t.YNc(4, _, 1, 0, 'ng-template', 15),
            t.NdJ('documentationPropertyValueChange', function (m) {
              t.CHM(n);
              const i = t.oxw();
              return t.KtG((i.name = m));
            }),
            t.YNc(5, U, 1, 0, 'ng-template', 16),
            t.NdJ('documentationPropertyValueChange', function (m) {
              t.CHM(n);
              const i = t.oxw();
              return t.KtG((i.color = m));
            }),
            t.YNc(6, H, 1, 0, 'ng-template', 17),
            t.NdJ('documentationPropertyValueChange', function (m) {
              t.CHM(n);
              const i = t.oxw();
              return t.KtG((i.size = m));
            }),
            t.qZA();
        }
        if (2 & e) {
          const n = t.MAs(2),
            r = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', n)('name', r.name)('color', r.color)('size', r.size),
            t.xp6(3),
            t.Q6J('documentationPropertyValue', r.name)('documentationPropertyValues', r.nameVariants),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', r.color),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', r.size)('documentationPropertyValues', r.sizeVariants);
        }
      }
      function V(e, c) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 18)(1, 'li')(2, 'p'),
            t._uU(3, ' Import '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmIconsSvgModule'),
            t.qZA(),
            t._uU(6, ' into a module where you want to use our component '),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 19),
            t.qZA()()),
          2 & e)
        ) {
          const n = t.oxw();
          t.xp6(7), t.Q6J('code', n.setupModule);
        }
      }
      let F = (() => {
          class e {
            constructor(n, r, m) {
              (this.clipboard = n),
                (this.toastService = r),
                (this.iconRegistry = m),
                (this.nameVariants = Object.values(s.vnC)),
                (this.name = this.nameVariants[0]),
                (this.sizeVariants = ['32px', 24, 16]),
                (this.size = this.sizeVariants[0]),
                (this.iconsSetObject = Object.values(s.vnC)),
                (this.iconsSet = Object.values(this.iconsSetObject)),
                (this.editorDecoratorIcons = this.iconsSet.filter(i => i.startsWith('editor_decor'))),
                (this.chartsDiagramsIcons = this.iconsSet.filter(i => i.startsWith('charts_diagrams'))),
                (this.dataNetworkIcons = this.iconsSet.filter(i => i.startsWith('data_network'))),
                (this.dataTimeIcons = this.iconsSet.filter(i => i.startsWith('date_time'))),
                (this.documentsFoldersIcons = this.iconsSet.filter(i => i.startsWith('documents_folders'))),
                (this.logisticsTransportationIcons = this.iconsSet.filter(i =>
                  i.startsWith('logistics_transportation')
                )),
                (this.MapLocationIcons = this.iconsSet.filter(i => i.startsWith('map_location'))),
                (this.multimediaDevicesIcons = this.iconsSet.filter(i => i.startsWith('multimedia_devices'))),
                (this.notificationsAlertsIcons = this.iconsSet.filter(i =>
                  i.startsWith('notifications_alerts')
                )),
                (this.otherIcons = this.iconsSet.filter(i => i.startsWith('other'))),
                (this.powerEnergyIcons = this.iconsSet.filter(i => i.startsWith('power_energy'))),
                (this.productionIndustryIcons = this.iconsSet.filter(i =>
                  i.startsWith('production_industry')
                )),
                (this.settingsToolsIcons = this.iconsSet.filter(i => i.startsWith('settings_tools'))),
                (this.shapeGeometryIcons = this.iconsSet.filter(i => i.startsWith('shape_geometry'))),
                (this.userAccountIcons = this.iconsSet.filter(i => i.startsWith('user_account'))),
                (this.defs = [
                  { dir: 'Editor Decorator', data: [...this.editorDecoratorIcons] },
                  { dir: 'Charts Diagrams', data: [...this.chartsDiagramsIcons] },
                  { dir: 'Data Network', data: [...this.dataNetworkIcons] },
                  { dir: 'Date Time', data: [...this.dataTimeIcons] },
                  { dir: 'Documents Folders', data: [...this.documentsFoldersIcons] },
                  { dir: 'Logistics Transportation', data: [...this.logisticsTransportationIcons] },
                  { dir: 'Map Location', data: [...this.MapLocationIcons] },
                  { dir: 'Map Location', data: [...this.MapLocationIcons] },
                  { dir: 'Multimedia Devices', data: [...this.multimediaDevicesIcons] },
                  { dir: 'Notifications Alerts', data: [...this.notificationsAlertsIcons] },
                  { dir: 'Other', data: [...this.otherIcons] },
                  { dir: 'Power Energy', data: [...this.powerEnergyIcons] },
                  { dir: 'Production Industry', data: [...this.productionIndustryIcons] },
                  { dir: 'Settings Tools', data: [...this.settingsToolsIcons] },
                  { dir: 'Shape Geometry', data: [...this.shapeGeometryIcons] },
                  { dir: 'User Account', data: [...this.userAccountIcons] },
                ]),
                (this.setupModule = o.e(50097).then(o.t.bind(o, 50097, 17))),
                (this.exampleFont = {
                  TypeScript: o.e(79687).then(o.t.bind(o, 79687, 17)),
                  HTML: o.e(71688).then(o.t.bind(o, 71688, 17)),
                }),
                (this.exampleSvg = {
                  TypeScript: o.e(51327).then(o.t.bind(o, 51327, 17)),
                  HTML: o.e(8877).then(o.t.bind(o, 8877, 17)),
                });
            }
            ngOnInit() {
              this.iconRegistry.registerIcons([...s.sjM]);
            }
            copy(n) {
              (0, u.v)(n, this.clipboard, this.toastService);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(t.Y36(g.TU), t.Y36(a.hGm), t.Y36(s.efQ));
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-icon-example']],
              decls: 6,
              vars: 0,
              consts: [
                ['header', 'Icon', 'package', 'NEXT'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'base', 'heading', 'Font', 3, 'content'],
                ['id', 'svg', 'heading', 'Svg', 3, 'content'],
                [4, 'ngFor', 'ngForOf'],
                [1, 'title'],
                [1, 'icons'],
                ['class', 'icon-def', 3, 'click', 4, 'ngFor', 'ngForOf'],
                [1, 'icon-def', 3, 'click'],
                [3, 'size', 'name'],
                [1, 'name', 3, 'title'],
                [3, 'prizmDocHostElement', 'name', 'color', 'size'],
                ['element', ''],
                [
                  'documentationPropertyName',
                  'name',
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
                  'color',
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
                  'size',
                  'documentationPropertyType',
                  'string | number',
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
              template: function (n, r) {
                1 & n &&
                  (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  t._uU(
                    2,
                    ' Icons can be used as fonts and as svg (examples of usage below). Also with the help of our registry you can add your svg icons (example in the file with svg). Also each icon can be connected separately or the whole set of SVG icons. '
                  ),
                  t.qZA(),
                  t.YNc(3, O, 7, 3, 'ng-template', 2),
                  t.YNc(4, N, 7, 9, 'ng-template', 3),
                  t.YNc(5, V, 8, 1, 'ng-template', 2),
                  t.qZA());
              },
              dependencies: [l.sg, v.c, f.F, z.K, I.N, P.W, C.l, T.a, D.w, E.k, x.C, S, Z],
              styles: [
                '[_nghost-%COMP%]{color:#777b92}h4[_ngcontent-%COMP%]{text-transform:capitalize;color:#353e50}.icons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;color:var(--prizm-v3-status-info-primary-default)}.icon-def[_ngcontent-%COMP%]{display:flex;width:100px;height:100px;max-width:100px;flex-direction:column;align-items:center;margin:4px;padding:8px 8px 0;border-radius:4px;cursor:pointer}.icon-def[_ngcontent-%COMP%]:hover{background-color:var(--prizm-v3-background-fill-secondary)}.icon[_ngcontent-%COMP%]{font-size:24px;width:24px;height:24px}.name[_ngcontent-%COMP%]{font-size:12px;text-align:center;margin-top:12px;word-wrap:break-word;overflow:hidden;width:100%;text-overflow:ellipsis}.title[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-secondary)}',
              ],
              changeDetection: 0,
            })),
            e
          );
        })(),
        W = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵmod = t.oAB({ type: e })),
            (e.ɵinj = t.cJS({ imports: [l.ez, p.Qp, s.I1N, h.Bz.forChild((0, p.GB)(F))] })),
            e
          );
        })();
    },
    57679: (y, d, o) => {
      o.d(d, { k: () => h });
      var l = o(65879),
        p = o(45773);
      let h = (() => {
        class s {
          constructor(a) {
            (this.hostElementService = a), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const a = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              u = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const t in a) this.hostElementService.setHostElement(a[t], u[t]);
          }
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(l.Y36(p.R));
          }),
          (s.ɵdir = l.lG2({
            type: s,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          s
        );
      })();
    },
    56586: (y, d, o) => {
      o.d(d, { w: () => h });
      var l = o(45773),
        p = o(65879);
      let h = (() => {
        class s {}
        return (
          (s.ɵfac = function (a) {
            return new (a || s)();
          }),
          (s.ɵdir = p.lG2({ type: s, selectors: [['', 'prizmDocHost', '']], features: [p._Bn([l.R])] })),
          s
        );
      })();
    },
  },
]);
