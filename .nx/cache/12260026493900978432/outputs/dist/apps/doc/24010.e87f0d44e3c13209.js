'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [24010],
  {
    24010: (E, u, o) => {
      o.r(u), o.d(u, { InternationalizationModule: () => L });
      var g = o(75187),
        m = o(70169),
        c = o(21004),
        e = o(65879),
        d = o(8221),
        h = o(63796),
        f = o(43015),
        z = o(15861),
        i = o(87185),
        C = o(65619),
        v = o(55372),
        l = o(69862),
        y = o(51321),
        $ = o(4377),
        x = o(96814);
      let S = (() => {
          class a {
            constructor(t, n) {
              (this.prizmLanguageSwitcher = t),
                (this.http = n),
                (this.progress$$ = new C.X({})),
                (this.files = []);
            }
            changeLanguage(t) {
              this.prizmLanguageSwitcher.setLanguage(t);
            }
            onFilesChange(t) {
              (this.files = t), this.files.length > 0 && this.send();
            }
            onfilesValidationErrors(t) {
              for (const n of Object.keys(t))
                this.toastService.create(JSON.stringify(t[n]), {
                  title: `\u0424\u0430\u0439\u043b ${n} \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e`,
                  appearance: 'warning',
                  timer: 5e3,
                });
            }
            onFilesCountError(t) {
              this.toastService.create(
                `\u0424\u0430\u0439\u043b\u044b ${t.join(
                  ' ,'
                )} \u043d\u0435 \u0431\u044b\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b`,
                {
                  title:
                    '\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e',
                  appearance: 'warning',
                  timer: 5e3,
                }
              );
            }
            send() {
              const t = new FormData();
              for (const n of this.files) t.append(n.name, n);
              this.http.post('/fakeFileUpload', t, { reportProgress: !0, observe: 'events' }).subscribe(
                n => {
                  switch (n.type) {
                    case l.dt.Sent:
                      break;
                    case l.dt.Response:
                      if (n.status >= 200 && n.status < 300)
                        for (const r of this.files)
                          this.progress$$.next({
                            ...this.progress$$.value,
                            [r.name]: { progress: 100, error: !1 },
                          });
                      else
                        for (const r of this.files)
                          this.progress$$.next({ ...this.progress$$.value, [r.name]: { error: !0 } });
                      break;
                    case l.dt.UploadProgress:
                      for (const r of this.files)
                        this.progress$$.next({
                          ...this.progress$$.value,
                          [r.name]: { progress: Math.round((n.loaded / (n?.total ?? 0)) * 100), error: !1 },
                        });
                  }
                },
                n => {
                  console.log(n);
                }
              );
            }
            retry(t) {
              const n = new FormData();
              n.append(t.name, t),
                this.http.post('/fakeFileUpload', n, { reportProgress: !0, observe: 'events' }).subscribe(
                  r => {
                    switch (r.type) {
                      case l.dt.Sent:
                        break;
                      case l.dt.Response:
                        this.progress$$.next(
                          r.status >= 200 && r.status < 300
                            ? { ...this.progress$$.value, [t.name]: { progress: 100, error: !1 } }
                            : { ...this.progress$$.value, [t.name]: { error: !0 } }
                        );
                        break;
                      case l.dt.UploadProgress:
                        this.progress$$.next({
                          ...this.progress$$.value,
                          [t.name]: { progress: Math.round((r.loaded / (r.total ?? 0)) * 100), error: !1 },
                        });
                    }
                  },
                  r => {
                    console.log(r);
                  }
                );
            }
            ngOnDestroy() {
              this.progress$$.complete();
            }
          }
          return (
            (a.ɵfac = function (t) {
              return new (t || a)(e.Y36(i.jJ, 2), e.Y36(l.eN));
            }),
            (a.ɵcmp = e.Xpm({
              type: a,
              selectors: [['prizm-language-switcher-example']],
              features: [
                e._Bn([
                  ...(0, i.Fo)(
                    (function () {
                      var s = (0, z.Z)(function* (t) {
                        return 'ru' === t ? i.UN : 'en' === t ? { ...i.UN, ...v.T } : i.UN;
                      });
                      return function (t) {
                        return s.apply(this, arguments);
                      };
                    })()
                  ),
                  i.jJ,
                ]),
              ],
              decls: 8,
              vars: 7,
              consts: [
                ['prizmButton', '', 'appearance', 'primary', 'size', 'xl', 3, 'click'],
                [
                  3,
                  'multiple',
                  'accept',
                  'progress',
                  'maxFilesCount',
                  'maxFileSize',
                  'filesChange',
                  'filesValidationErrors',
                  'filesCountError',
                  'retry',
                ],
              ],
              template: function (t, n) {
                1 & t &&
                  (e.TgZ(0, 'button', 0),
                  e.NdJ('click', function () {
                    return n.changeLanguage('en');
                  }),
                  e._uU(1, 'English'),
                  e.qZA(),
                  e.TgZ(2, 'button', 0),
                  e.NdJ('click', function () {
                    return n.changeLanguage('ru');
                  }),
                  e._uU(3, '\u0420\u0443\u0441\u0441\u043a\u0438\u0439'),
                  e.qZA(),
                  e._UZ(4, 'br')(5, 'br'),
                  e.TgZ(6, 'prizm-file-upload', 1),
                  e.NdJ('filesChange', function (p) {
                    return n.onFilesChange(p);
                  })('filesValidationErrors', function (p) {
                    return n.onfilesValidationErrors(p);
                  })('filesCountError', function (p) {
                    return n.onFilesCountError(p);
                  })('retry', function (p) {
                    return n.retry(p);
                  }),
                  e.ALo(7, 'async'),
                  e.qZA()),
                  2 & t &&
                    (e.xp6(6),
                    e.Q6J('multiple', !0)('accept', 'image/*')('progress', e.lcZ(7, 5, n.progress$$))(
                      'maxFilesCount',
                      3
                    )('maxFileSize', 1e6));
              },
              dependencies: [y.F, $.K, x.Ov],
              styles: ['button[_ngcontent-%COMP%]:first-child{margin-right:16px}'],
            })),
            a
          );
        })(),
        Z = (() => {
          class a {
            constructor() {
              (this.setupModule = o.e(95390).then(o.t.bind(o, 95390, 17))),
                (this.updateDictionaryModule = o.e(2506).then(o.t.bind(o, 2506, 17))),
                (this.languageSwitcher = {
                  TypeScript: o.e(51491).then(o.t.bind(o, 74021, 17)),
                  HTML: o.e(54784).then(o.t.bind(o, 54784, 17)),
                });
            }
          }
          return (
            (a.ɵfac = function (t) {
              return new (t || a)();
            }),
            (a.ɵcmp = e.Xpm({
              type: a,
              selectors: [['prizm-for-developers']],
              decls: 17,
              vars: 3,
              consts: [
                ['header', 'Internationalization', 1, 'info-page'],
                [1, 'prizm-space_top-0'],
                ['filename', 'app.module.ts', 3, 'code'],
                ['filename', 'Update Dictionary', 3, 'code'],
                ['id', 'language-switcher', 'heading', '', 3, 'content'],
                [1, 'optional'],
                ['code', 'npm i @prizm-ui/helpers'],
              ],
              template: function (t, n) {
                1 & t &&
                  (e.TgZ(0, 'prizm-doc-page', 0)(1, 'h1', 1),
                  e._uU(2, 'How to use'),
                  e.qZA(),
                  e.TgZ(3, 'p', 1),
                  e._uU(
                    4,
                    ' You have Russian by default. If you want to change it, you need to provide PRIZM_LANGUAGE token in your app.module: '
                  ),
                  e._UZ(5, 'prizm-doc-code', 2)(6, 'prizm-doc-code', 3),
                  e.qZA(),
                  e.TgZ(7, 'p', 1),
                  e._uU(8, ' How to switch language: '),
                  e.TgZ(9, 'prizm-doc-example', 4),
                  e._UZ(10, 'prizm-language-switcher-example'),
                  e.qZA()(),
                  e.TgZ(11, 'div')(12, 'h3', 1)(13, 'span', 5),
                  e._uU(14, 'Optional'),
                  e.qZA(),
                  e._uU(15, ' > Install helpers: '),
                  e.qZA(),
                  e._UZ(16, 'prizm-doc-code', 6),
                  e.qZA()()),
                  2 & t &&
                    (e.xp6(5),
                    e.Q6J('code', n.setupModule),
                    e.xp6(1),
                    e.Q6J('code', n.updateDictionaryModule),
                    e.xp6(3),
                    e.Q6J('content', n.languageSwitcher));
              },
              dependencies: [d.c, h.W, f.a, S],
              styles: [
                'prizm-accordion[_ngcontent-%COMP%]{margin-top:16px}prizm-doc-code[_ngcontent-%COMP%]{margin-bottom:10px}.required[_ngcontent-%COMP%]{color:var(--prizm-v3-status-alarm-primary-default)}.optional[_ngcontent-%COMP%]{color:var(--prizm-v3-status-warning-primary-default)}',
              ],
              changeDetection: 0,
            })),
            a
          );
        })(),
        L = (() => {
          class a {
            constructor(t) {
              (this.prizmLanguage = t), this.prizmLanguage.setLanguage('en');
            }
          }
          return (
            (a.ɵfac = function (t) {
              return new (t || a)(e.LFG(i.jJ));
            }),
            (a.ɵmod = e.oAB({ type: a })),
            (a.ɵinj = e.cJS({ imports: [c.Qp, g.Bz.forChild((0, c.GB)(Z)), m.Ffe, m.KSn] })),
            a
          );
        })();
    },
  },
]);
