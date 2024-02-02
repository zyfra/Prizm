'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [48465],
  {
    48465: (N, x, u) => {
      u.r(x), u.d(x, { NavigationMenuExampleModule: () => we });
      var g = u(21004),
        p = u(70169),
        s = u(96814),
        d = u(75187),
        r = u(52372);
      const c = [
        {
          id: (0, r.Z)(),
          text: 'Topmost (text)',
          children: [
            {
              id: (0, r.Z)(),
              text: '1 (text)',
              icon: 'editor_decor_collage_fill',
              children: [
                {
                  id: (0, r.Z)(),
                  text: '1-1 (text)',
                  icon: 'editor_decor_subskrit_up',
                  children: [
                    { id: (0, r.Z)(), text: '1-1-1 (text)' },
                    { id: (0, r.Z)(), text: '1-1-2 (text)' },
                    { id: (0, r.Z)(), text: '1-1-3 (text)' },
                  ],
                },
                {
                  id: (0, r.Z)(),
                  text: '1-2 (text)',
                  icon: 'logistics_transportation_airplane_side_view',
                  children: [
                    {
                      id: (0, r.Z)(),
                      text: '1-2-1 (text)',
                      icon: 'documents_folders_folder',
                      children: [
                        { id: (0, r.Z)(), text: '1-2-1-1 (text)' },
                        { id: (0, r.Z)(), text: '1-2-1-2 (text)' },
                        { id: (0, r.Z)(), text: '1-2-1-3 (text)' },
                      ],
                    },
                    { id: (0, r.Z)(), text: '1-2-2 (text)' },
                    {
                      id: (0, r.Z)(),
                      text: '1-2-3 (text)',
                      icon: 'documents_folders_folder',
                      children: [
                        { id: (0, r.Z)(), text: '1-2-3-1 (text)' },
                        { id: (0, r.Z)(), text: '1-2-3-2 (text)' },
                        { id: (0, r.Z)(), text: '1-2-3-3 (text)' },
                      ],
                    },
                  ],
                },
                {
                  id: (0, r.Z)(),
                  text: '1-3 (text)',
                  icon: 'editor_decor_polyline',
                  children: [
                    { id: (0, r.Z)(), text: '1-3-1 (text)' },
                    { id: (0, r.Z)(), text: '1-3-2 (text)' },
                    { id: (0, r.Z)(), text: '1-3-3 (text)' },
                  ],
                },
              ],
            },
            {
              id: (0, r.Z)(),
              text: '2 (text) [a group with nested group items]',
              icon: 'documents_folders_folder',
              isGroup: !0,
              children: [
                { id: (0, r.Z)(), text: '2-1 (text) [not a group]', icon: 'documents_folders_folder' },
                {
                  id: (0, r.Z)(),
                  text: '2-2 (text) [a group]',
                  icon: 'documents_folders_folder',
                  isGroup: !0,
                  children: [
                    { id: (0, r.Z)(), text: '2-2-1 (text)' },
                    { id: (0, r.Z)(), text: '2-2-2 (text)' },
                    { id: (0, r.Z)(), text: '2-2-3 (text)' },
                  ],
                },
              ],
            },
            {
              id: (0, r.Z)(),
              text: '3 (text)',
              icon: 'documents_folders_folder',
              children: [{ id: (0, r.Z)(), text: '3-1 (text)' }],
            },
          ],
        },
      ];
      var e = u(65879),
        M = u(8221),
        y = u(30990),
        b = u(83419),
        O = u(78905),
        H = u(63796),
        S = u(75987),
        U = u(43015),
        V = u(56586),
        J = u(57679),
        C = u(65515),
        l = u(15232),
        Z = u(4377);
      const Q = function () {
        return {
          title:
            '\u041d\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445',
          subtitle:
            '\u041f\u043e \u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u044d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f. \u041d\u043e \u043f\u0440\u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c. \n\n \u0410 \u0437\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0438\u0441\u043a\u0430 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e [emptySearchResultMessageConfig]',
        };
      };
      let Y = (() => {
        class t {
          constructor(n, o) {
            (this.iconRegistry = n),
              (this.cdr = o),
              (this.toolbarConfig = { search: !0, folderMode: !0, rubricatorMode: !0, closeAll: !0 }),
              (this.items = c),
              this.iconRegistry.registerIcons(l.sjM);
          }
          toggleLoading() {
            (this.items = this.items.length ? [] : c), this.cdr.detectChanges();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.Y36(l.efQ), e.Y36(e.sBO));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-navigation-menu-basic-example']],
            decls: 6,
            vars: 6,
            consts: [
              [1, 'multiple-menu'],
              [3, 'title', 'toolbarConfig', 'items', 'emptyDataMessageConfig'],
              ['prizmButton', '', 3, 'click'],
            ],
            template: function (n, o) {
              1 & n &&
                (e.TgZ(0, 'div', 0)(1, 'section'),
                e._UZ(2, 'prizm-navigation-menu', 1),
                e.qZA(),
                e.TgZ(3, 'section')(4, 'button', 2),
                e.NdJ('click', function () {
                  return o.toggleLoading();
                }),
                e._uU(5),
                e.qZA()()()),
                2 & n &&
                  (e.xp6(2),
                  e.Q6J('title', 'Basic props')('toolbarConfig', o.toolbarConfig)('items', o.items)(
                    'emptyDataMessageConfig',
                    e.DdM(5, Q)
                  ),
                  e.xp6(3),
                  e.hij(
                    ' ',
                    o.items.length
                      ? '\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432'
                      : '\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445',
                    ' '
                  ));
            },
            dependencies: [C.Q, Z.K],
            styles: [
              '[_nghost-%COMP%]   .multiple-menu[_ngcontent-%COMP%]{display:flex;height:900px;gap:30px;background-color:var(--prizm-v3-background-fill-secondary)}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:500px;height:100%}[_nghost-%COMP%]   section[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-top:16px}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      const D = [
          {
            id: (0, r.Z)(),
            text: 'Topmost (text)',
            children: [
              {
                id: (0, r.Z)(),
                text: '1 (text)',
                icon: 'editor_decor_collage_fill',
                children: [
                  {
                    id: (0, r.Z)(),
                    text: '1-1 (text)',
                    icon: 'editor_decor_subskrit_up',
                    children: [
                      { id: (0, r.Z)(), text: '1-1-1 (text)' },
                      { id: (0, r.Z)(), text: '1-1-2 (text)' },
                      { id: (0, r.Z)(), text: '1-1-3 (text)' },
                    ],
                  },
                  {
                    id: (0, r.Z)(),
                    text: '1-2 (text)',
                    icon: 'logistics_transportation_airplane_side_view',
                    children: [
                      {
                        id: (0, r.Z)(),
                        text: '1-2-1 (text)',
                        icon: 'documents_folders_folder',
                        children: [
                          { id: (0, r.Z)(), text: '1-2-1-1 (text)' },
                          { id: (0, r.Z)(), text: '1-2-1-2 (text)' },
                          { id: (0, r.Z)(), text: '1-2-1-3 (text)' },
                        ],
                      },
                      { id: (0, r.Z)(), text: '1-2-2 (text)' },
                      {
                        id: (0, r.Z)(),
                        text: '1-2-3 (text)',
                        icon: 'documents_folders_folder',
                        children: [
                          { id: (0, r.Z)(), text: '1-2-3-1 (text)' },
                          { id: (0, r.Z)(), text: '1-2-3-2 (text)' },
                          { id: (0, r.Z)(), text: '1-2-3-3 (text)' },
                        ],
                      },
                    ],
                  },
                  {
                    id: (0, r.Z)(),
                    text: '1-3 (text)',
                    icon: 'editor_decor_polyline',
                    children: [
                      { id: (0, r.Z)(), text: '1-3-1 (text)' },
                      { id: (0, r.Z)(), text: '1-3-2 (text)' },
                      { id: (0, r.Z)(), text: '1-3-3 (text)' },
                    ],
                  },
                ],
              },
              {
                id: (0, r.Z)(),
                text: '2 (text)',
                icon: 'documents_folders_folder',
                children: [
                  { id: (0, r.Z)(), text: '2-1 (text)', icon: 'documents_folders_folder' },
                  {
                    id: (0, r.Z)(),
                    text: '2-2 (text)',
                    icon: 'documents_folders_folder',
                    children: [
                      { id: (0, r.Z)(), text: '2-2-1 (text)' },
                      { id: (0, r.Z)(), text: '2-2-2 (text)' },
                      { id: (0, r.Z)(), text: '2-2-3 (text)' },
                    ],
                  },
                ],
              },
              {
                id: (0, r.Z)(),
                text: '3 (text)',
                icon: 'documents_folders_folder',
                children: [{ id: (0, r.Z)(), text: '3-1 (text)' }],
              },
            ],
          },
        ],
        $ = function () {
          return {
            title:
              '\u041d\u0435\u0442 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445',
            subtitle:
              '\u041f\u043e \u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u044d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f. \u041d\u043e \u043f\u0440\u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0441\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c. \n\n \u0410 \u0437\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0438\u0441\u043a\u0430 \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e [emptySearchResultMessageConfig]',
          };
        };
      let L = (() => {
        class t {
          constructor(n, o) {
            (this.iconRegistry = n),
              (this.cdr = o),
              (this.toolbarConfig = {
                search: !0,
                folderMode: !1,
                hierarchyMode: !1,
                rubricatorMode: !1,
                closeAll: !1,
              }),
              (this.items = D),
              this.iconRegistry.registerIcons(l.sjM);
          }
          toggleLoading() {
            (this.items = this.items.length ? [] : D), this.cdr.detectChanges();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.Y36(l.efQ), e.Y36(e.sBO));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-navigation-menu-one-mode-example']],
            decls: 6,
            vars: 6,
            consts: [
              [1, 'multiple-menu'],
              [3, 'title', 'toolbarConfig', 'items', 'emptyDataMessageConfig'],
              ['prizmButton', '', 3, 'click'],
            ],
            template: function (n, o) {
              1 & n &&
                (e.TgZ(0, 'div', 0)(1, 'section'),
                e._UZ(2, 'prizm-navigation-menu', 1),
                e.qZA(),
                e.TgZ(3, 'section')(4, 'button', 2),
                e.NdJ('click', function () {
                  return o.toggleLoading();
                }),
                e._uU(5),
                e.qZA()()()),
                2 & n &&
                  (e.xp6(2),
                  e.Q6J('title', 'Basic props')('toolbarConfig', o.toolbarConfig)('items', o.items)(
                    'emptyDataMessageConfig',
                    e.DdM(5, $)
                  ),
                  e.xp6(3),
                  e.hij(
                    ' ',
                    o.items.length
                      ? '\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432'
                      : '\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445',
                    ' '
                  ));
            },
            dependencies: [C.Q, Z.K],
            styles: [
              '[_nghost-%COMP%]{color:var(--prizm-v3-text-icon-secondary)}[_nghost-%COMP%]   .multiple-menu[_ngcontent-%COMP%]{display:flex;height:900px;gap:30px;background-color:var(--prizm-v3-background-fill-secondary)}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:500px;height:100%}[_nghost-%COMP%]   section[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-top:16px}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var G = u(47784),
        X = u(65619),
        j = u(52572),
        W = u(63019),
        w = u(94664),
        h = u(37398),
        k = u(59773),
        q = u(10229);
      let I = (() => {
        class t {
          constructor() {
            this.localStorage = (0, e.f3M)(q.H3);
          }
          getItemsExpandedKeys() {
            const n = localStorage.getItem('EXPANDED_ITEMS_EXAMPLE') ?? null;
            return n && JSON.parse(n);
          }
          getGroupsExpandedKeys() {
            const n = localStorage.getItem('EXPANDED_GROUPS_EXAMPLE') ?? null;
            return n && JSON.parse(n);
          }
          setItemsExpandedKeys(n) {
            const o = {};
            for (const [i, m] of n.entries()) m && (o[i.id] = !0);
            localStorage.setItem('EXPANDED_ITEMS_EXAMPLE', JSON.stringify(o));
          }
          setGroupsExpandedKeys(n) {
            const o = Object.fromEntries(n);
            localStorage.setItem('EXPANDED_GROUPS_EXAMPLE', JSON.stringify(o));
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵprov = e.Yz7({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      var E = u(22096);
      const v_fruits = {
          title: 'Fruits',
          items: [
            {
              id: '917a7cc0492c834fa8ff217218a9155c',
              text: '1 Anemone',
              icon: 'editor_decor_collage_fill',
              children: [
                {
                  id: 'e1fdf7db27471499f4201be33eaf995f',
                  text: '1-1 Ant',
                  icon: 'editor_decor_subskrit_up',
                  children: [
                    { id: 'fe24adfd35cdf650b072c69a23989284', text: '1-1-1 Bee' },
                    { id: '75dd3b33eae1a3517882a4774a54f647', text: '1-1-2 Beetle' },
                    { id: '60fdcba2cfd06461cecf026d9ee16510', text: '1-1-3 Butterfly' },
                  ],
                },
                {
                  id: '79457a69a1f3fe4f0bea68d77d2ac8c3',
                  text: '1-2 Caterpillar',
                  icon: 'logistics_transportation_airplane_side_view',
                  children: [
                    {
                      id: '270b6053ff49a13cac2fd366a42e895d',
                      text: '1-2-1 Centipede',
                      icon: 'documents_folders_folder',
                      children: [
                        { id: '16a404d4f31be4b749da8bee8a1baa61', text: '1-2-1-1 Clam' },
                        { id: '13239c08edd78d261cb6d6023bdd7817', text: '1-2-1-2 Cockroach' },
                        { id: '8ea4fb327b1c25f2d5bbe714', text: '1-2-1-3 Cocoon' },
                      ],
                    },
                    { id: '76fffd33c0e899f16046c65c88d22526', text: '1-2-2 Coral' },
                    {
                      id: 'b20af4d91cc7913524d0926de574bb1a',
                      text: '1-2-3 Crab',
                      icon: 'documents_folders_folder',
                      children: [
                        { id: '7f8e62acd4f0c02b860e62007c8ede1e', text: '1-2-3-1 Cricket' },
                        { id: '69b0565a29899f74861abba19f2652c9', text: '1-2-3-2 Cuttlefish' },
                        { id: '97ef4e87feab9f291c74bfe0856b8ba4', text: '1-2-3-3 Dragonfly' },
                      ],
                    },
                  ],
                },
                {
                  id: 'f525eb5eb522a16d4f79a196c98b6d74',
                  text: '1-3 Fly',
                  icon: 'editor_decor_polyline',
                  children: [
                    { id: '6ad7c923a2cc8b88586eadd802704b3a', text: '1-3-1 Flea' },
                    { id: '30e214dae44d2ab78bc4bf0fe5be88cc', text: '1-3-2 Grasshopper' },
                    { id: 'e9dcbf06d27b2686656ddf1843bc2848', text: '1-3-3 Jellyfish' },
                  ],
                },
              ],
            },
            {
              id: 'b364cf7ea6784a2327ca5eea70533cc7',
              text: '2 Ladybug',
              icon: 'documents_folders_folder',
              children: [
                {
                  id: 'd343799a439ab2ea1add6f3a3ac51134',
                  text: '2-1 Lobster',
                  icon: 'documents_folders_folder',
                },
                {
                  id: 'b99624c9a0f5a525050661fc873faee1f25ccf67',
                  text: '2-2 Louse',
                  icon: 'documents_folders_folder',
                  children: [
                    { id: '5c7cf8e705a1800796a738fd8d7e3c7c', text: '2-2-1 Millipede' },
                    { id: 'e59d9383852abde79e16f407a4904d40', text: '2-2-2 Mosquito' },
                    { id: '8b65e4ac62c94773859a71949cf23041', text: '2-2-3 Moth' },
                  ],
                },
              ],
            },
            {
              id: 'cb2b0ea2f43025ebdc49e9a8696cae8adb0c285f',
              text: '3 Octopus',
              icon: 'documents_folders_folder',
              children: [{ id: '9c0485df5870ff0b0873f6ce6fb7a5fd3931fbdd', text: '3-1 Oyster' }],
            },
          ],
          toolbarConfig: { search: !0, rubricatorMode: !0, folderMode: !0, closeAll: !0 },
        },
        v_noGroupAppearance = {
          title: '<No group appearance example>',
          items: [
            {
              id: '5c66dafe76c204f8365992e138d022c9',
              text: '(1) banana',
              icon: 'documents_folders_folder_underline_plus',
            },
            {
              id: '7dc7840f976c47982ce0711ca7788048',
              text: '(2) apple',
              icon: 'documents_folders_folder',
              children: [
                {
                  id: '9deb0dbc4718a5c98275157ae8b8c02dec971d9a',
                  text: '2-1 orange',
                  icon: 'documents_folders_folder',
                },
                {
                  id: '052057fe4f7f44c087f834ea2e8b312024c214c2',
                  text: '2-2 pineapple',
                  icon: 'documents_folders_folder',
                  children: [
                    {
                      id: '206d1e0c06789ae9d80b863548d51465',
                      text: '2-2-1 strawberry',
                      icon: 'documents_folders_folder_underline_plus',
                    },
                    { id: 'c14e75b1f42b43b7443d1319e01d660a', text: '2-2-2 raspberry' },
                    { id: '0d849dd4c7443f5b7674a37ee47d8617', text: '2-2-3 lemon' },
                  ],
                },
              ],
            },
            {
              id: 'dc15e173eea1f5601a98d325a804760a',
              text: '3 cherry',
              icon: 'documents_folders_folder',
              children: [{ id: '0fc59162f06a03413a6e715a4bc79b7d', text: '3-1 peach' }],
            },
          ],
          toolbarConfig: { search: !0, rubricatorMode: !0, folderMode: !0, closeAll: !0 },
        },
        v_musicalInstruments = {
          title: 'Musical instruments',
          items: [
            {
              id: '02496d848c73e11191647e091a4d19a0',
              text: '1 Piano',
              children: [
                {
                  id: '58241595e5cb3278e20c0e55',
                  text: '1-1 Flute',
                  icon: 'editor_decor_subskrit_up',
                  children: [
                    { id: '9e35c258ed8efbad928192a62a8519dd', text: '1-1-1 Veena' },
                    { id: 'a8c96a0bc965ee3dd2c42121', text: '1-1-2 Drums' },
                    { id: '95013bb6e1e6835b0ec8e665', text: '1-1-3 Violin' },
                  ],
                },
                {
                  id: '41aa56ce9e7b0f5c7def00e0',
                  text: '1-2 Guitar',
                  icon: 'logistics_transportation_airplane_side_view',
                  children: [
                    {
                      id: 'ebf34ac5eb2a408e862dbeab',
                      text: '1-2-1 Electric',
                      icon: 'documents_folders_folder',
                      children: [
                        { id: '5c4654eb9bc0020de03b7745aedfc706', text: '1-2-1-1 Saxophone' },
                        { id: '23595a357a81b85832b6aed9ba48bbd2', text: '1-2-1-2 Trumpet' },
                        { id: 'd1efc37c310c498e67147b4aac857b61', text: '1-2-1-3 Cello' },
                      ],
                    },
                    { id: '99bc5806629d3898ff0db4591fcc5d62', text: '1-2-2 Clap box' },
                    {
                      id: 'c6567e45cb3c9d86ac2a4518be2d03be',
                      text: '1-2-3 Xylophone',
                      icon: 'documents_folders_folder',
                      children: [
                        { id: '0134dee0193ec07e35ac135f', text: '1-2-3-1 Bass' },
                        { id: '7acc7c183074bb72cefc97e3ee4d6f33', text: '1-2-3-2 Mridangam' },
                        { id: 'bb0128d7f5fdabac1316852788b7dad4', text: '1-2-3-3 Bugle' },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: '1952886537e54cd5d3da6afd221d9c73',
              text: '2 Maracas',
              children: [
                {
                  id: '9fe6e1a91e5b8e0ec46e94abcf5afe2e',
                  text: '2-2 Cymbal',
                  icon: 'documents_folders_folder',
                  children: [
                    { id: 'd892c7a103748f8e7a8c02b19679fd55', text: '2-2-1 Accordion' },
                    {
                      id: 'dcb6598a41f2586a2c9da9aa490c66d4',
                      text: '2-2-2 Bongo',
                      children: [
                        {
                          id: '452679f20b1bc220d44f7e7550f476e0',
                          text: '2-2-2-1 Tambourine',
                          icon: 'documents_folders_folder',
                          children: [
                            { id: '2282b799fdb8499194dcad8cdd9b80d6', text: '2-2-2-1-1 Clarinet' },
                            { id: 'cc4d644b9a93499d7c2808c01ea405e4', text: '2-2-2-1-2 Euphonium' },
                            { id: '3ce410fd9d586addf2a1a477', text: '2-2-2-1-3 Piccolo' },
                          ],
                        },
                      ],
                    },
                    { id: '6ac1fedc2fb366e19e664a6d2183153d', text: '2-2-3 Bell' },
                  ],
                },
              ],
            },
          ],
          toolbarConfig: { search: !0, rubricatorMode: !0, closeAll: !0 },
        },
        v_longNames = {
          title: 'Long names (bottom)',
          items: [
            {
              id: 'cb156d2211ee7d6949bf7f8933731c27',
              text: '1 Damru\tSarangi Sitar\tGu-zheng!\tEktara\tShehnai Sarod\tPungi\tGramophone\tTubular Chimes',
              children: [
                {
                  id: '1083a3821f1847bb1f1486876493dd0e',
                  text: '1-1 Bass drum\tSnare drum\tEuphonium\tPiccolo Lute\tMarimba\tBassoon\tCornet',
                  icon: 'editor_decor_collage_fill',
                },
                {
                  id: '7f1cef0992f4383e7638e499be3db0e7',
                  text: '1-2 Drum pad\tClarinet\tHarmonica\tTuba',
                  icon: 'editor_decor_collage_fill',
                },
              ],
            },
            {
              id: 'd2c284e5dc6b00c32cd34b22',
              text: '2 Tambourine\tTrombone\tUkulele\tElectronic drums Drum pad\tClarinet\tHarmonica\tTuba',
            },
            { id: '7644f1f6c081c55bcde7aecc7a28766f', text: '3 Sarod\tPungi\tGramophone\tTubular Chimes' },
          ],
          toolbarConfig: { search: !0, folderMode: !0, closeAll: !0 },
        };
      let A = (() => {
        class t {
          constructor() {
            (this.noGroupAppearance$ = (0, E.of)(v_noGroupAppearance)),
              (this.fruits$ = (0, E.of)(v_fruits)),
              (this.musicalInstruments$ = (0, E.of)(v_musicalInstruments)),
              (this.longNames$ = (0, E.of)(v_longNames));
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵprov = e.Yz7({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      var z = u(43616),
        ee = u(15403),
        te = u(25886),
        ne = u(87674),
        oe = u(33168),
        ue = u(55426),
        ae = u(15884),
        ie = u(93720);
      function re(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'h4'),
            e._uU(1, 'Data from items'),
            e.qZA(),
            e._UZ(2, 'hr'),
            e.TgZ(3, 'p'),
            e._uU(4),
            e.qZA(),
            e._UZ(5, 'hr'),
            e.TgZ(6, 'p'),
            e._uU(
              7,
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, provident neque voluptas eos ipsam blanditiis aperiam dolor porro laborum ex? '
            ),
            e.qZA(),
            e.TgZ(8, 'p'),
            e._uU(
              9,
              ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quae modi nemo similique nam placeat. Itaque eius fuga adipisci expedita, nostrum vel eligendi voluptatem tenetur ? '
            ),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(4), e.Oqu(n.item.text);
        }
      }
      let me = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-example-hint-button']],
              inputs: { hintTemplate: 'hintTemplate', item: 'item' },
              decls: 3,
              vars: 1,
              consts: [
                ['name', 'settings_tools_ellipsis_v', 1, 'hint-button', 3, 'prizmHint'],
                ['defaultTemplate', ''],
              ],
              template: function (n, o) {
                if (
                  (1 & n &&
                    (e._UZ(0, 'prizm-icons-svg', 0), e.YNc(1, re, 10, 1, 'ng-template', null, 1, e.W1O)),
                  2 & n)
                ) {
                  const i = e.MAs(2);
                  e.Q6J('prizmHint', o.hintTemplate || i);
                }
              },
              dependencies: [ae.C, ie.C],
              styles: [
                '.hovered[_nghost-%COMP%]   prizm-icons-svg[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   prizm-icons-svg[_ngcontent-%COMP%]{cursor:help;display:none}',
              ],
              changeDetection: 0,
            })),
            t
          );
        })(),
        pe = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-menu-hint-example']],
              decls: 9,
              vars: 0,
              consts: [[1, 'menu-hint']],
              template: function (n, o) {
                1 & n &&
                  (e.TgZ(0, 'div', 0)(1, 'p'),
                  e._uU(2, 'Application name: '),
                  e.TgZ(3, 'strong'),
                  e._uU(4, 'My application!'),
                  e.qZA()(),
                  e.TgZ(5, 'p'),
                  e._uU(6, 'Version: '),
                  e.TgZ(7, 'strong'),
                  e._uU(8, 'v2.4.3'),
                  e.qZA()()());
              },
              styles: ['.menu-hint[_ngcontent-%COMP%]{border:1px solid black;padding:16px}'],
              changeDetection: 0,
            })),
            t
          );
        })();
      function de(t, a) {
        if ((1 & t && e._UZ(0, 'prizm-navigation-menu-group', 14), 2 & t)) {
          const n = a.ngIf;
          e.oxw(2);
          const o = e.MAs(9);
          e.Q6J('icon', 'battery-flash-ok')('title', n.title)('groupId', n.title)('items', n.items)(
            'itemExtraTemplate',
            o
          )('toolbarConfig', n.toolbarConfig);
        }
      }
      const ce = function () {
          return { searchSource: 'group' };
        },
        se = function () {
          return {
            title: 'This could be configured',
            subtitle:
              "Current group has { searchSource: 'group' and will not filter items on top toolbar search query change }",
          };
        };
      function ge(t, a) {
        if ((1 & t && e._UZ(0, 'prizm-navigation-menu-group', 15), 2 & t)) {
          const n = a.ngIf;
          e.oxw(2);
          const o = e.MAs(9);
          e.Q6J('icon', 'alerts-pulse')('title', n.title)('groupId', n.title)('items', n.items)(
            'itemExtraTemplate',
            o
          )('toolbarConfig', n.toolbarConfig)('searchConfig', e.DdM(8, ce))(
            'emptySearchResultMessageConfig',
            e.DdM(9, se)
          );
        }
      }
      function xe(t, a) {
        if ((1 & t && e._UZ(0, 'prizm-navigation-menu-group', 16), 2 & t)) {
          const n = a.ngIf;
          e.oxw(2);
          const o = e.MAs(9);
          e.Q6J('hideGroupAppearance', !0)('groupId', n.title)('items', n.items)('itemExtraTemplate', o)(
            'toolbarConfig',
            n.toolbarConfig
          );
        }
      }
      function he(t, a) {
        if ((1 & t && e._UZ(0, 'prizm-navigation-menu-group', 17), 2 & t)) {
          const n = a.ngIf;
          e.oxw(2);
          const o = e.MAs(9);
          e.Q6J('title', n.title)('groupId', n.title)('items', n.items)('itemExtraTemplate', o)(
            'toolbarConfig',
            n.toolbarConfig
          );
        }
      }
      function fe(t, a) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'prizm-navigation-menu', 9),
            e.NdJ('activeItemChanged', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG(m.activeItemChanged(i));
            })('homeClicked', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG(m.logMenuEvent('homeClicked', i));
            })('itemExpandedChanged', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG(m.logMenuEvent('itemExpandedChanged', i));
            })('groupExpandedChanged', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG(m.logMenuEvent('groupExpandedChanged', i));
            })('breadcrumbsChanged', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG(m.menuBreadcrumbsChanged(i));
            })('expandedItemsMapChanged', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG(m.expandedItemsMapChanged(i));
            })('expandedGroupsMapChangedEvent', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG(m.expandedGroupsMapChangedEvent(i));
            }),
            e.ALo(1, 'async'),
            e.YNc(2, de, 1, 6, 'prizm-navigation-menu-group', 10),
            e.ALo(3, 'async'),
            e.YNc(4, ge, 1, 10, 'prizm-navigation-menu-group', 11),
            e.ALo(5, 'async'),
            e.YNc(6, xe, 1, 5, 'prizm-navigation-menu-group', 12),
            e.ALo(7, 'async'),
            e.YNc(8, he, 1, 5, 'prizm-navigation-menu-group', 13),
            e.ALo(9, 'async'),
            e.qZA();
        }
        if (2 & t) {
          const n = e.oxw(),
            o = e.MAs(11);
          e.Q6J('title', 'With bottom group and [hideGroupAppearance]')('toolbarConfig', n.menuToolbarConfig)(
            'headerExtraTemplate',
            o
          )('expandedItemsMap', n.expandedItemsMap)('expandedGroupsMap', n.expandedGroupsMap)(
            'activeItem',
            e.lcZ(1, 10, n.activeItem$)
          ),
            e.xp6(2),
            e.Q6J('ngIf', e.lcZ(3, 12, n.fruitsGroup$)),
            e.xp6(2),
            e.Q6J('ngIf', e.lcZ(5, 14, n.musicalInstrumentsGroup$)),
            e.xp6(2),
            e.Q6J('ngIf', e.lcZ(7, 16, n.noGroupAppearanceGroup$)),
            e.xp6(2),
            e.Q6J('ngIf', e.lcZ(9, 18, n.longNamesGroup$));
        }
      }
      function Ce(t, a) {
        if ((1 & t && e._UZ(0, 'prizm-example-hint-button', 18), 2 & t)) {
          const n = a.$implicit;
          e.ekj('hovered', a.isHovered), e.Q6J('item', n);
        }
      }
      function _e(t, a) {
        if ((1 & t && e._UZ(0, 'prizm-example-hint-button', 19), 2 & t)) {
          const n = a.headerIsHovered;
          e.oxw();
          const o = e.MAs(13);
          e.ekj('hovered', n), e.Q6J('hintTemplate', o);
        }
      }
      function Me(t, a) {
        1 & t && e._UZ(0, 'prizm-menu-hint-example');
      }
      function Ee(t, a) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'prizm-breadcrumbs', 23),
            e.NdJ('breadcrumbChange', function (i) {
              e.CHM(n);
              const m = e.oxw(2);
              return e.KtG(m.breadcrumbChange(i));
            }),
            e.qZA();
        }
        if (2 & t) {
          const n = e.oxw(2);
          e.Q6J('breadcrumbs', n.breadcrumbs);
        }
      }
      function ve(t, a) {
        if (
          (1 & t &&
            (e.YNc(0, Ee, 1, 1, 'ng-template', null, 20, e.W1O),
            e.TgZ(2, 'prizm-widget', 21)(3, 'div', 22)(4, 'prizm-scrollbar')(5, 'section')(6, 'h4'),
            e._uU(7, '\u041f\u043e\u0438\u0441\u043a'),
            e.qZA(),
            e.TgZ(8, 'pre'),
            e._uU(9, '            \u0412 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 '),
            e.TgZ(10, 'b'),
            e._uU(11, 'PrizmNavigationMenuSearchConfig'),
            e.qZA(),
            e._uU(12, ' \u043f\u043e\u043b\u0435 '),
            e.TgZ(13, 'b'),
            e._uU(14, 'searchSource'),
            e.qZA(),
            e._uU(
              15,
              " \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0442\u043e \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0433\u0440\u0443\u043f\u043f\u0430\u043c.\n\n            [hierarchical] - \u0414\u0435\u0444\u043e\u043b\u0442\u043d\u043e\u0435. \u0412\u0432\u043e\u0434\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u043f\u043e\u043b\u0435 \u043f\u043e\u0438\u0441\u043a\u0430 (\u0448\u0430\u043f\u043a\u0430 \u043c\u0435\u043d\u044e) \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u043d\u044b \u0432\u0441\u0435 \u0433\u0440\u0443\u043f\u043f\u044b \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0442\u0435\u0445 \u0443 \u043a\u043e\u0433\u043e \u0441\u0442\u043e\u0438\u0442 searchSource: 'group'.\n                             \u0415\u0441\u043b\u0438 \u0432 \u0442\u043e-\u0436\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043f\u043e\u0438\u0441\u043a \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0433\u0440\u0443\u043f\u043f\u044b - \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u0435\u043d\u044e \u0431\u0443\u0434\u0443\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u0433\u0440\u0443\u043f\u043f\u044b.\n\n            [group] - \u041f\u043e\u0438\u0441\u043a \u0447\u0435\u0440\u0435\u0437 \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0432 \u0448\u0430\u043f\u043a\u0435 \u043c\u0435\u043d\u044e \u043d\u0435 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u0433\u0440\u0443\u043f\u043f\u044b.\n\n            [menu] - \u0424\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u043f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d \u0447\u0435\u0440\u0435\u0437 \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e.\n          "
            ),
            e.qZA()(),
            e.TgZ(16, 'section')(17, 'h4'),
            e._uU(18, '\u0420\u0435\u0436\u0438\u043c\u044b \u0438 \u0433\u0440\u0443\u043f\u043f\u044b'),
            e.qZA(),
            e.TgZ(19, 'pre'),
            e._uU(
              20,
              '            \u0415\u0441\u043b\u0438 \u043c\u0435\u043d\u044f\u0435\u043c \u0440\u0435\u0436\u0438\u043c \u0432 \u0433\u043b\u0430\u0432\u043d\u043e\u043c \u0442\u0443\u043b\u0431\u0430\u0440\u0435 (\u0448\u0430\u043f\u043a\u0430 \u043c\u0435\u043d\u044e) \u0442\u043e\u0433\u0434\u0430, \u0435\u0441\u043b\u0438 \u043a\u043e\u043d\u0444\u0438\u0433 \u0442\u0443\u043b\u0431\u0430\u0440\u0430 \u0433\u0440\u0443\u043f\u043f\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0440\u0435\u0436\u0438\u043c, \u0433\u0440\u0443\u043f\u043f\u0430 \u0442\u0430\u043a\u0436\u0435 \u043c\u0435\u043d\u044f\u044e\u0442 \u0440\u0435\u0436\u0438\u043c.\n            \u0415\u0441\u043b\u0438 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0440\u0435\u0436\u0438\u043c \u0432 \u0433\u0440\u0443\u043f\u043f\u0435, \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0435 \u0440\u0435\u0436\u0438\u043c.\n          '
            ),
            e.qZA()()()()()),
          2 & t)
        ) {
          const n = e.MAs(1);
          e.xp6(2), e.Q6J('title', n);
        }
      }
      let ye = (() => {
        class t {
          constructor(n, o, i, m) {
            (this.iconRegistry = n),
              (this.expandedItemsService = o),
              (this.itemGroupsService = i),
              (this.destroy$ = m),
              (this.activeItemId$$ = new X.X(null)),
              (this.menuToolbarConfig = { search: !0, rubricatorMode: !0, folderMode: !0, closeAll: !0 }),
              (this.expandedGroupsMap = new Map()),
              (this.expandedItemsMap = new Map()),
              (this.fruitsGroup$ = this.itemGroupsService.fruits$),
              (this.noGroupAppearanceGroup$ = this.itemGroupsService.noGroupAppearance$),
              (this.musicalInstrumentsGroup$ = this.itemGroupsService.musicalInstruments$),
              (this.longNamesGroup$ = this.itemGroupsService.longNames$),
              (this.activeItem$ = this.activeItemId$$.pipe(
                (0, w.w)(ke =>
                  (0, j.a)([
                    this.fruitsGroup$,
                    this.noGroupAppearanceGroup$,
                    this.musicalInstrumentsGroup$,
                    this.longNamesGroup$,
                  ]).pipe(
                    (0, h.U)(([P, T, qe, et]) => [...P.items, ...T.items, ...qe.items, ...et.items]),
                    (0, h.U)(P => (0, p.i$A)(P, T => T.id === ke))
                  )
                )
              )),
              (this.homeBreadcrumb = { name: '', icon: 'social-home-breadcrumbs' }),
              (this.breadcrumbs = [this.homeBreadcrumb]),
              this.iconRegistry.registerIcons(l.sjM),
              this.configureExpandedItemsMap(),
              this.configureExpandedGroupsMap();
          }
          activeItemChanged(n) {
            this.logMenuEvent('activeItemChanged', n), this.activeItemId$$.next(n?.id);
          }
          breadcrumbChange(n) {
            this.activeItemId$$.next(n.link);
          }
          menuBreadcrumbsChanged(n) {
            this.logMenuEvent('breadcrumbs', n);
            const o = n.map(i => ({ name: i.text, link: i.id }));
            this.breadcrumbs = [this.homeBreadcrumb, ...o];
          }
          expandedItemsMapChanged(n) {
            this.logMenuEvent('expandedItemsMapChanged', n),
              this.expandedItemsService.setItemsExpandedKeys(n);
          }
          expandedGroupsMapChangedEvent(n) {
            this.logMenuEvent('expandedGroupsMapChangedEvent', n),
              this.expandedItemsService.setGroupsExpandedKeys(n);
          }
          logMenuEvent(n, o) {
            console.groupCollapsed(`%c ${n} `, 'background: #222; color: plum'),
              console.log(o),
              console.groupEnd();
          }
          configureExpandedItemsMap() {
            const n = this.expandedItemsService.getItemsExpandedKeys() ?? {};
            (0, W.T)(
              this.itemGroupsService.fruits$.pipe((0, h.U)(i => i.items)),
              this.itemGroupsService.longNames$.pipe((0, h.U)(i => i.items)),
              this.itemGroupsService.musicalInstruments$.pipe((0, h.U)(i => i.items)),
              this.itemGroupsService.noGroupAppearance$.pipe((0, h.U)(i => i.items))
            )
              .pipe((0, k.R)(this.destroy$))
              .subscribe(i => {
                (0, p.DE_)(i, m => {
                  void 0 !== n[m.id] && this.expandedItemsMap.set(m, n[m.id]);
                });
              });
          }
          configureExpandedGroupsMap() {
            const n = this.expandedItemsService.getGroupsExpandedKeys() ?? {};
            for (const [o, i] of Object.entries(n)) this.expandedGroupsMap.set(o, i);
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.Y36(l.efQ), e.Y36(I), e.Y36(A), e.Y36(G.sm));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-navigation-menu-groups-example']],
            features: [e._Bn([G.sm, I, A])],
            decls: 16,
            vars: 6,
            consts: [
              [1, 'layout'],
              [1, 'menu-splitter'],
              [3, 'size', 'minSize'],
              [3, 'ngTemplateOutlet'],
              ['menuTemplate', ''],
              ['itemExtraTemplate', ''],
              ['headerExtraTemplate', ''],
              ['menuHintTemplate', ''],
              ['descriptionTemplate', ''],
              [
                3,
                'title',
                'toolbarConfig',
                'headerExtraTemplate',
                'expandedItemsMap',
                'expandedGroupsMap',
                'activeItem',
                'activeItemChanged',
                'homeClicked',
                'itemExpandedChanged',
                'groupExpandedChanged',
                'breadcrumbsChanged',
                'expandedItemsMapChanged',
                'expandedGroupsMapChangedEvent',
              ],
              [
                'top',
                '',
                3,
                'icon',
                'title',
                'groupId',
                'items',
                'itemExtraTemplate',
                'toolbarConfig',
                4,
                'ngIf',
              ],
              [
                'top',
                '',
                3,
                'icon',
                'title',
                'groupId',
                'items',
                'itemExtraTemplate',
                'toolbarConfig',
                'searchConfig',
                'emptySearchResultMessageConfig',
                4,
                'ngIf',
              ],
              [
                'top',
                '',
                3,
                'hideGroupAppearance',
                'groupId',
                'items',
                'itemExtraTemplate',
                'toolbarConfig',
                4,
                'ngIf',
              ],
              ['bottom', '', 3, 'title', 'groupId', 'items', 'itemExtraTemplate', 'toolbarConfig', 4, 'ngIf'],
              ['top', '', 3, 'icon', 'title', 'groupId', 'items', 'itemExtraTemplate', 'toolbarConfig'],
              [
                'top',
                '',
                3,
                'icon',
                'title',
                'groupId',
                'items',
                'itemExtraTemplate',
                'toolbarConfig',
                'searchConfig',
                'emptySearchResultMessageConfig',
              ],
              ['top', '', 3, 'hideGroupAppearance', 'groupId', 'items', 'itemExtraTemplate', 'toolbarConfig'],
              ['bottom', '', 3, 'title', 'groupId', 'items', 'itemExtraTemplate', 'toolbarConfig'],
              [3, 'item'],
              [3, 'hintTemplate'],
              ['breadcrumbsTemplate', ''],
              [3, 'title'],
              [1, 'content'],
              [3, 'breadcrumbs', 'breadcrumbChange'],
            ],
            template: function (n, o) {
              if (
                (1 & n &&
                  (e.TgZ(0, 'div', 0)(1, 'prizm-splitter', 1)(2, 'prizm-splitter-area', 2),
                  e.GkF(3, 3),
                  e.qZA(),
                  e.TgZ(4, 'prizm-splitter-area', 2),
                  e.GkF(5, 3),
                  e.qZA()()(),
                  e.YNc(6, fe, 10, 20, 'ng-template', null, 4, e.W1O),
                  e.YNc(8, Ce, 1, 3, 'ng-template', null, 5, e.W1O),
                  e.YNc(10, _e, 1, 3, 'ng-template', null, 6, e.W1O),
                  e.YNc(12, Me, 1, 0, 'ng-template', null, 7, e.W1O),
                  e.YNc(14, ve, 21, 1, 'ng-template', null, 8, e.W1O)),
                2 & n)
              ) {
                const i = e.MAs(7),
                  m = e.MAs(15);
                e.xp6(2),
                  e.Q6J('size', 50)('minSize', 30),
                  e.xp6(1),
                  e.Q6J('ngTemplateOutlet', i),
                  e.xp6(1),
                  e.Q6J('size', 50)('minSize', 30),
                  e.xp6(1),
                  e.Q6J('ngTemplateOutlet', m);
              }
            },
            dependencies: [s.O5, s.tP, C.Q, z.A, ee.t, te.m, ne.G, oe.Y, ue.n, me, pe, s.Ov],
            styles: [
              '[_nghost-%COMP%]{color:var(--prizm-v3-text-icon-secondary);background-color:var(--prizm-v3-background-fill-secondary)}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]{--prizm-widget-header-padding: 3px 16px;height:900px}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]   prizm-splitter[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .layout[_ngcontent-%COMP%]     prizm-card, [_nghost-%COMP%]   .layout[_ngcontent-%COMP%]     prizm-card>.header>.title{width:100%;height:100%}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      class B {
        constructor(a) {
          Object.assign(this, a);
        }
      }
      class _ {
        constructor(a) {
          Object.assign(this, a);
        }
      }
      class f {
        constructor(a) {
          Object.assign(this, a);
        }
      }
      const F = [
        new B({
          text: 'GrandParent 1',
          children: [
            new _({
              text: 'Parent A',
              children: [new f({ text: 'Child J', children: [] }), new f({ text: 'Child K', children: [] })],
            }),
            new _({ text: 'Parent B', children: [new f({ text: 'Child L', children: [] })] }),
          ],
        }),
        new B({
          text: 'GrandParent 2',
          children: [
            new _({
              text: 'Parent N',
              children: [new f({ text: 'Child M', children: [] }), new f({ text: 'Child V', children: [] })],
            }),
            new _({ text: 'Parent C', children: [new f({ text: 'Child P', children: [] })] }),
          ],
        }),
      ];
      let be = (() => {
        class t {
          constructor(n) {
            (this.iconRegistry = n),
              (this.toolbarConfig = { search: !0, rubricatorMode: !0, closeAll: !0 }),
              (this.group1 = F),
              (this.group2 = F),
              (this.childrenHandler = o => (o.original instanceof _ ? [] : o.children ?? [])),
              this.iconRegistry.registerIcons(l.sjM);
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.Y36(l.efQ));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-navigation-menu-children-handler-example']],
            decls: 10,
            vars: 13,
            consts: [
              [1, 'multiple-menu'],
              [3, 'title', 'toolbarConfig'],
              [3, 'icon', 'title', 'groupId', 'items', 'toolbarConfig'],
              [3, 'icon', 'title', 'groupId', 'items', 'toolbarConfig', 'childrenHandler'],
            ],
            template: function (n, o) {
              1 & n &&
                (e.TgZ(0, 'div', 0)(1, 'section')(2, 'prizm-navigation-menu', 1),
                e._UZ(3, 'prizm-navigation-menu-group', 2)(4, 'prizm-navigation-menu-group', 3),
                e.qZA()(),
                e.TgZ(5, 'section')(6, 'p'),
                e._uU(
                  7,
                  '\u041e\u0431\u0435 \u0433\u0440\u0443\u043f\u043f\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043e\u0434\u043d\u043e \u0438 \u0442\u043e-\u0436\u0435 \u0434\u0435\u0440\u0435\u0432\u043e.'
                ),
                e.qZA(),
                e.TgZ(8, 'p'),
                e._uU(
                  9,
                  '\u041d\u043e \u0443 \u0432\u0442\u043e\u0440\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 childrenHandler \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b 3\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f'
                ),
                e.qZA()()()),
                2 & n &&
                  (e.xp6(2),
                  e.Q6J('title', 'With [childrenHandler]')('toolbarConfig', o.toolbarConfig),
                  e.xp6(1),
                  e.Q6J('icon', 'battery-flash-ok')('title', 'Group 1')('groupId', 'group1')(
                    'items',
                    o.group1
                  )('toolbarConfig', o.toolbarConfig),
                  e.xp6(1),
                  e.Q6J('icon', 'alerts-pulse')('title', 'Group 2 (hidden 3rd lvl children)')(
                    'groupId',
                    'group2'
                  )('items', o.group2)('toolbarConfig', o.toolbarConfig)(
                    'childrenHandler',
                    o.childrenHandler
                  ));
            },
            dependencies: [C.Q, z.A],
            styles: [
              '[_nghost-%COMP%]   .multiple-menu[_ngcontent-%COMP%]{display:flex;height:900px;gap:30px;background-color:var(--prizm-v3-background-fill-secondary)}[_nghost-%COMP%]   section[_ngcontent-%COMP%]{width:500px;height:100%}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      function Pe(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-navigation-menu-basic-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-navigation-menu-groups-example'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-navigation-menu-children-handler-example'),
            e.qZA(),
            e.TgZ(6, 'prizm-doc-example', 7),
            e._UZ(7, 'prizm-navigation-menu-one-mode-example'),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw();
          e.Q6J('content', n.exampleBasicNavigationMenu),
            e.xp6(2),
            e.Q6J('content', n.exampleGroupsNavigationMenu),
            e.xp6(2),
            e.Q6J('content', n.exampleChildrenHandlerNavigationMenu),
            e.xp6(2),
            e.Q6J('content', n.exampleChildrenOneModeMenu);
        }
      }
      function Te(t, a) {
        1 & t && e._uU(0, ' Menu title ');
      }
      function Ne(t, a) {
        1 & t && e._uU(0, ' Menu items ');
      }
      function Ze(t, a) {
        1 & t && e._uU(0, ' Toolbar config ');
      }
      function De(t, a) {
        1 & t && e._uU(0, ' Slot for menu item ');
      }
      function Ge(t, a) {
        1 & t && e._uU(0, " Slot for menu's header items ");
      }
      function Ie(t, a) {
        1 & t && e._uU(0, " Slot for toolbar's items ");
      }
      function Ae(t, a) {
        1 & t && e._uU(0, ' activeItem ');
      }
      function ze(t, a) {
        1 & t && e._uU(0, ' Key name ');
      }
      function Be(t, a) {
        1 & t && e._uU(0, ' expandedItemsMap ');
      }
      function Fe(t, a) {
        1 & t && e._uU(0, ' expandedGroupsMap ');
      }
      function Oe(t, a) {
        1 & t && e._uU(0, ' settingsConfig ');
      }
      function He(t, a) {
        1 & t && e._uU(0, ' Will be displayed when search is enabled and where are no search entires ');
      }
      function Se(t, a) {
        1 & t && e._uU(0, ' Will be displayed when incoming data is empty (for example not loaded yet) ');
      }
      function Ue(t, a) {
        1 & t && e._uU(0, ' searchConfig ');
      }
      function Ve(t, a) {
        1 & t && e._uU(0, ' headerConfig ');
      }
      function Je(t, a) {
        1 & t && e._uU(0, ' Home icon clicked ');
      }
      function Ke(t, a) {
        1 & t && e._uU(0, ' Current active item changed ');
      }
      function Qe(t, a) {
        1 & t && e._uU(0, ' Breadcrumbs of current active item changed ');
      }
      function Ye(t, a) {
        1 & t && e._uU(0, ' expandedItemsMapChanged ');
      }
      function Re(t, a) {
        1 & t && e._uU(0, ' expandedGroupsMapChangedEvent ');
      }
      function $e(t, a) {
        1 & t && e._uU(0, ' itemExpandedChanged ');
      }
      function Le(t, a) {
        1 & t && e._uU(0, ' groupExpandedChanged ');
      }
      function Xe(t, a) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'prizm-doc-demo'),
            e._UZ(1, 'prizm-navigation-menu', 8, 9),
            e.qZA(),
            e.TgZ(3, 'prizm-doc-documentation', 10),
            e.YNc(4, Te, 1, 0, 'ng-template', 11),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.title = i));
            }),
            e.YNc(5, Ne, 1, 0, 'ng-template', 12),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.items = i));
            }),
            e.YNc(6, Ze, 1, 0, 'ng-template', 13),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.toolbarConfig = i));
            }),
            e.YNc(7, De, 1, 0, 'ng-template', 14),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.itemExtraTemplate = i));
            }),
            e.YNc(8, Ge, 1, 0, 'ng-template', 15),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.headerExtraTemplate = i));
            }),
            e.YNc(9, Ie, 1, 0, 'ng-template', 16),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.toolbarExtraTemplate = i));
            }),
            e.YNc(10, Ae, 1, 0, 'ng-template', 17),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.activeItem = i));
            }),
            e.YNc(11, ze, 1, 0, 'ng-template', 18),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.itemKeyName = i));
            }),
            e.YNc(12, Be, 1, 0, 'ng-template', 19),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.expandedItemsMap = i));
            }),
            e.YNc(13, Fe, 1, 0, 'ng-template', 20),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.expandedGroupsMap = i));
            }),
            e.YNc(14, Oe, 1, 0, 'ng-template', 21),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.settingsConfig = i));
            }),
            e.YNc(15, He, 1, 0, 'ng-template', 22),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.emptySearchResultMessageConfig = i));
            }),
            e.YNc(16, Se, 1, 0, 'ng-template', 23),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.emptyDataMessageConfig = i));
            }),
            e.YNc(17, Ue, 1, 0, 'ng-template', 24),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.searchConfig = i));
            }),
            e.YNc(18, Ve, 1, 0, 'ng-template', 25),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.headerConfig = i));
            }),
            e.YNc(19, Je, 1, 0, 'ng-template', 26),
            e.YNc(20, Ke, 1, 0, 'ng-template', 27),
            e.YNc(21, Qe, 1, 0, 'ng-template', 28),
            e.YNc(22, Ye, 1, 0, 'ng-template', 29),
            e.YNc(23, Re, 1, 0, 'ng-template', 30),
            e.YNc(24, $e, 1, 0, 'ng-template', 31),
            e.YNc(25, Le, 1, 0, 'ng-template', 32),
            e.qZA();
        }
        if (2 & t) {
          const n = e.MAs(2),
            o = e.oxw();
          e.xp6(1),
            e.Q6J('prizmDocHostElement', n)('title', o.title)('items', o.items)(
              'toolbarConfig',
              o.toolbarConfig
            )('itemExtraTemplate', o.itemExtraTemplate)('headerExtraTemplate', o.headerExtraTemplate)(
              'toolbarExtraTemplate',
              o.toolbarExtraTemplate
            )('activeItem', o.activeItem)('itemKeyName', o.itemKeyName)(
              'expandedItemsMap',
              o.expandedItemsMap
            )('expandedGroupsMap', o.expandedGroupsMap)('settingsConfig', o.settingsConfig)(
              'emptySearchResultMessageConfig',
              o.emptySearchResultMessageConfig
            )('emptyDataMessageConfig', o.emptyDataMessageConfig)('headerConfig', o.headerConfig)(
              'searchConfig',
              o.searchConfig
            ),
            e.xp6(3),
            e.Q6J('documentationPropertyValue', o.title),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.items),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.toolbarConfig),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.itemExtraTemplate),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.headerExtraTemplate),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.toolbarExtraTemplate),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.activeItem),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.itemKeyName),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.expandedItemsMap),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.expandedGroupsMap),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.settingsConfig),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.emptySearchResultMessageConfig),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.emptyDataMessageConfig),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.searchConfig),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.headerConfig);
        }
      }
      function je(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 33)(1, 'li')(2, 'p'),
            e._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmNavigationMenuModule'),
            e.qZA(),
            e._uU(
              6,
              ' \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 '
            ),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 34),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(7), e.Q6J('code', n.setupModule);
        }
      }
      let We = (() => {
          class t {
            constructor() {
              (this.exampleBasicNavigationMenu = {
                TS: u.e(78972).then(u.t.bind(u, 78972, 17)),
                HTML: u.e(4609).then(u.t.bind(u, 4609, 17)),
                LESS: u.e(56330).then(u.t.bind(u, 56330, 17)),
              }),
                (this.exampleChildrenHandlerNavigationMenu = {
                  TS: u.e(76755).then(u.t.bind(u, 76755, 17)),
                  HTML: u.e(68188).then(u.t.bind(u, 68188, 17)),
                  Constants: u.e(53274).then(u.t.bind(u, 53274, 17)),
                }),
                (this.exampleChildrenOneModeMenu = {
                  TS: u.e(67607).then(u.t.bind(u, 67607, 17)),
                  HTML: u.e(38070).then(u.t.bind(u, 38070, 17)),
                  Constants: u.e(40910).then(u.t.bind(u, 40910, 17)),
                }),
                (this.exampleGroupsNavigationMenu = {
                  TS: u.e(72551).then(u.t.bind(u, 72551, 17)),
                  HTML: u.e(19805).then(u.t.bind(u, 19805, 17)),
                  LESS: u.e(49902).then(u.t.bind(u, 49902, 17)),
                  'item-groups.service.ts': u.e(19009).then(u.t.bind(u, 19009, 17)),
                  'item-groups.constants.ts': u.e(95629).then(u.t.bind(u, 95629, 17)),
                  'expanded-items.service.ts': u.e(3344).then(u.t.bind(u, 3344, 17)),
                  'interfaces.ts': u.e(57491).then(u.t.bind(u, 57491, 17)),
                  'hint-button.ts': u.e(70642).then(u.t.bind(u, 70642, 17)),
                  'hint-button.html': u.e(70642).then(u.t.bind(u, 70642, 17)),
                  'hint-button.less': u.e(97846).then(u.t.bind(u, 97846, 17)),
                }),
                (this.setupModule = u.e(81462).then(u.t.bind(u, 81462, 17))),
                (this.title = 'Demo'),
                (this.items = c),
                (this.toolbarConfig = { search: !0, folderMode: !0, rubricatorMode: !0, closeAll: !0 }),
                (this.toolbarExtraTemplate = null),
                (this.itemExtraTemplate = null),
                (this.headerExtraTemplate = null),
                (this.activeItem = null),
                (this.itemKeyName = 'id'),
                (this.expandedItemsMap = new Map()),
                (this.expandedGroupsMap = new Map()),
                (this.emptySearchResultMessageConfig = null),
                (this.emptyDataMessageConfig = null),
                (this.searchConfig = null),
                (this.settingsConfig = {}),
                (this.headerConfig = null);
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-navigation-menu-example']],
              decls: 6,
              vars: 0,
              consts: [
                ['header', 'Navigation menu', 'package', 'UI'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'base', 'heading', 'Basic', 3, 'content'],
                ['id', 'groups', 'heading', 'Groups', 3, 'content'],
                ['id', 'children-handler', 'heading', 'ChildrenHandler', 3, 'content'],
                ['id', 'single-mode', 'heading', 'Single Mode', 3, 'content'],
                [
                  'prizmDocHostElementKey',
                  'PrizmNavigationMenuLayout',
                  3,
                  'prizmDocHostElement',
                  'title',
                  'items',
                  'toolbarConfig',
                  'itemExtraTemplate',
                  'headerExtraTemplate',
                  'toolbarExtraTemplate',
                  'activeItem',
                  'itemKeyName',
                  'expandedItemsMap',
                  'expandedGroupsMap',
                  'settingsConfig',
                  'emptySearchResultMessageConfig',
                  'emptyDataMessageConfig',
                  'headerConfig',
                  'searchConfig',
                ],
                ['prizmNavigationMenuLayout', ''],
                ['hostComponentKey', 'PrizmNavigationMenuLayout', 'heading', 'PrizmNavigationMenuLayout'],
                [
                  'documentationPropertyName',
                  'title',
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
                  'items',
                  'documentationPropertyType',
                  'PrizmNavigationMenuItem[]',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'toolbarConfig',
                  'documentationPropertyType',
                  'PrizmNavigationMenuToolbarConfig[]',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'itemExtraTemplate',
                  'documentationPropertyType',
                  'TemplateRef',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'headerExtraTemplate',
                  'documentationPropertyType',
                  'TemplateRef',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'toolbarExtraTemplate',
                  'documentationPropertyType',
                  'TemplateRef',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'activeItem',
                  'documentationPropertyType',
                  'T',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'itemKeyName',
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
                  'expandedItemsMap',
                  'documentationPropertyType',
                  'Map<T, boolean>',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'expandedGroupsMap',
                  'documentationPropertyType',
                  'Map<string, boolean>',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'settingsConfig',
                  'documentationPropertyType',
                  'PrizmNavigationMenuSettingsConfig',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'emptySearchResultMessageConfig',
                  'documentationPropertyType',
                  'PrizmNavigationMenuEmptyMessageConfig',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'emptyDataMessageConfig',
                  'documentationPropertyType',
                  'PrizmNavigationMenuEmptyMessageConfig',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'searchConfig',
                  'documentationPropertyType',
                  'PrizmNavigationMenuSearchConfig',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'headerConfig',
                  'documentationPropertyType',
                  'PrizmNavigationMenuHeaderConfig',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'homeClicked',
                  'documentationPropertyType',
                  'void',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'activeItemChanged',
                  'documentationPropertyType',
                  'T',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'breadcrumbsChanged',
                  'documentationPropertyType',
                  'T[]',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'expandedItemsMapChanged',
                  'documentationPropertyType',
                  'Map<T, boolean>',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'expandedGroupsMapChangedEvent',
                  'documentationPropertyType',
                  'Map<string, boolean>',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'itemExpandedChanged',
                  'documentationPropertyType',
                  'ItemExpandedChangedEvent<T>',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'groupExpandedChanged',
                  'documentationPropertyType',
                  'GroupExpandedChangedEvent',
                  'documentationPropertyMode',
                  'output',
                ],
                [1, 'b-demo-steps'],
                ['filename', 'custom.module.ts', 3, 'code'],
              ],
              template: function (n, o) {
                1 & n &&
                  (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  e._uU(
                    2,
                    ' Our navigation menu is a simple, responsive, and accessible menu that can be used in a variety of ways. It can be used as a primary navigation menu, a secondary navigation menu, or a footer navigation menu. '
                  ),
                  e.qZA(),
                  e.YNc(3, Pe, 8, 4, 'ng-template', 2),
                  e.YNc(4, Xe, 26, 31, 'ng-template', 3),
                  e.YNc(5, je, 8, 1, 'ng-template', 2),
                  e.qZA());
              },
              dependencies: [M.c, y.F, b.K, O.N, H.W, S.l, U.a, V.w, J.k, C.Q, Y, L, ye, be],
              changeDetection: 0,
            })),
            t
          );
        })(),
        we = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.oAB({ type: t })),
            (t.ɵinj = e.cJS({
              imports: [
                s.ez,
                g.Qp,
                p.XFo,
                l.I1N,
                p.KBf,
                p.mHl,
                p.Li7,
                p.b2o,
                p.PDH,
                p.Kz6,
                d.Bz.forChild((0, g.GB)(We)),
              ],
            })),
            t
          );
        })();
    },
    57679: (N, x, u) => {
      u.d(x, { k: () => s });
      var g = u(65879),
        p = u(45773);
      let s = (() => {
        class d {
          constructor(c) {
            (this.hostElementService = c), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const c = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              e = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const M in c) this.hostElementService.setHostElement(c[M], e[M]);
          }
        }
        return (
          (d.ɵfac = function (c) {
            return new (c || d)(g.Y36(p.R));
          }),
          (d.ɵdir = g.lG2({
            type: d,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          d
        );
      })();
    },
    56586: (N, x, u) => {
      u.d(x, { w: () => s });
      var g = u(45773),
        p = u(65879);
      let s = (() => {
        class d {}
        return (
          (d.ɵfac = function (c) {
            return new (c || d)();
          }),
          (d.ɵdir = p.lG2({ type: d, selectors: [['', 'prizmDocHost', '']], features: [p._Bn([g.R])] })),
          d
        );
      })();
    },
  },
]);
