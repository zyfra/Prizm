'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [59056],
  {
    59056: (F, d, a) => {
      a.r(d), a.d(d, { PrizmFileUploadExampleModule: () => q });
      var u = a(96814),
        c = a(21004),
        g = a(75187),
        p = a(70169),
        s = a(69862),
        m = a(65619),
        e = a(65879),
        h = a(8221),
        C = a(30990),
        y = a(83419),
        E = a(78905),
        z = a(63796),
        U = a(75987),
        _ = a(43015),
        $ = a(56586),
        T = a(57679),
        x = a(51321),
        P = a(4377);
      let v = (() => {
          class r {
            onFilesChange(o) {
              console.log('fileschange'), (this.files = o);
            }
            onfilesValidationErrors(o) {
              for (const t of Object.keys(o))
                this.toastService.create(JSON.stringify(o[t]), {
                  title: `\u0424\u0430\u0439\u043b ${t} \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e`,
                  appearance: 'warning',
                  timer: 5e3,
                });
            }
            onFilesCountError(o) {
              this.toastService.create(
                `\u0424\u0430\u0439\u043b\u044b ${o.join(
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
              this.disabled = !0;
              const o = new FormData();
              for (const t of this.files) o.append(t.name, t);
              this.http.post('/fakeFileUpload', o, { reportProgress: !0, observe: 'events' }).subscribe(
                t => {
                  switch (t.type) {
                    case s.dt.Sent:
                      break;
                    case s.dt.Response:
                      if (((this.disabled = !1), t.status >= 200 && t.status < 300))
                        for (const n of this.files)
                          this.progress$$.next({
                            ...this.progress$$.value,
                            [n.name]: { progress: 100, error: !1 },
                          });
                      else
                        for (const n of this.files)
                          this.progress$$.next({ ...this.progress$$.value, [n.name]: { error: !0 } });
                      break;
                    case s.dt.UploadProgress:
                      for (const n of this.files)
                        this.progress$$.next({
                          ...this.progress$$.value,
                          [n.name]: { progress: Math.round((t.loaded / (t.total ?? 0)) * 100), error: !1 },
                        });
                  }
                },
                t => {
                  console.log(t);
                }
              );
            }
            retry(o) {
              this.disabled = !0;
              const t = new FormData();
              t.append(o.name, o),
                this.http.post('/fakeFileUpload', t, { reportProgress: !0, observe: 'events' }).subscribe(
                  n => {
                    switch (n.type) {
                      case s.dt.Sent:
                        break;
                      case s.dt.Response:
                        (this.disabled = !1),
                          this.progress$$.next(
                            n.status >= 200 && n.status < 300
                              ? { ...this.progress$$.value, [o.name]: { progress: 100, error: !1 } }
                              : { ...this.progress$$.value, [o.name]: { error: !0 } }
                          );
                        break;
                      case s.dt.UploadProgress:
                        this.progress$$.next({
                          ...this.progress$$.value,
                          [o.name]: { progress: Math.round((n.loaded / (n.total ?? 0)) * 100), error: !1 },
                        });
                    }
                  },
                  n => {
                    console.log(n);
                  }
                );
            }
            constructor(o, t) {
              (this.toastService = o),
                (this.http = t),
                (this.progress$$ = new m.X({})),
                (this.files = []),
                (this.disabled = !1);
            }
            ngOnDestroy() {
              this.progress$$.complete();
            }
          }
          return (
            (r.ɵfac = function (o) {
              return new (o || r)(e.Y36(p.hGm), e.Y36(s.eN));
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
              selectors: [['prizm-file-upload-basic-example']],
              decls: 5,
              vars: 9,
              consts: [
                [
                  3,
                  'multiple',
                  'accept',
                  'progress',
                  'maxFilesCount',
                  'maxFileSize',
                  'disabled',
                  'filesChange',
                  'filesValidationErrors',
                  'filesCountError',
                  'retry',
                ],
                [
                  'prizmButton',
                  '',
                  'appearance',
                  'primary',
                  'size',
                  'm',
                  1,
                  'submit',
                  3,
                  'disabled',
                  'click',
                ],
              ],
              template: function (o, t) {
                1 & o &&
                  (e.TgZ(0, 'prizm-file-upload', 0),
                  e.NdJ('filesChange', function (i) {
                    return t.onFilesChange(i);
                  })('filesValidationErrors', function (i) {
                    return t.onfilesValidationErrors(i);
                  })('filesCountError', function (i) {
                    return t.onFilesCountError(i);
                  })('retry', function (i) {
                    return t.retry(i);
                  }),
                  e.ALo(1, 'async'),
                  e._uU(
                    2,
                    ' \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 1\u041c\u0411\n'
                  ),
                  e.qZA(),
                  e.TgZ(3, 'button', 1),
                  e.NdJ('click', function () {
                    return t.send();
                  }),
                  e._uU(4, ' \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\n'),
                  e.qZA()),
                  2 & o &&
                    (e.Q6J('multiple', !0)('accept', 'image/*')('progress', e.lcZ(1, 7, t.progress$$))(
                      'maxFilesCount',
                      3
                    )('maxFileSize', 1e6)('disabled', t.disabled),
                    e.xp6(3),
                    e.Q6J('disabled', 0 === t.files.length || t.disabled));
              },
              dependencies: [x.F, P.K, u.Ov],
              styles: ['.submit[_ngcontent-%COMP%]{margin-top:16px}'],
              changeDetection: 0,
            })),
            r
          );
        })(),
        b = (() => {
          class r {
            onFilesChange(o) {
              (this.files = o), this.files.length > 0 && this.send();
            }
            onfilesValidationErrors(o) {
              for (const t of Object.keys(o))
                this.toastService.create(JSON.stringify(o[t]), {
                  title: `\u0424\u0430\u0439\u043b ${t} \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e`,
                  appearance: 'warning',
                  timer: 5e3,
                });
            }
            onFilesCountError(o) {
              this.toastService.create(
                `\u0424\u0430\u0439\u043b\u044b ${o.join(
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
              this.disabled = !0;
              const o = new FormData();
              for (const t of this.files) o.append(t.name, t);
              this.http.post('/fakeFileUpload', o, { reportProgress: !0, observe: 'events' }).subscribe(
                t => {
                  switch (t.type) {
                    case s.dt.Sent:
                      break;
                    case s.dt.Response:
                      if (((this.disabled = !1), t.status >= 200 && t.status < 300))
                        for (const n of this.files)
                          this.progress$$.next({
                            ...this.progress$$.value,
                            [n.name]: { progress: 100, error: !1 },
                          });
                      else
                        for (const n of this.files)
                          this.progress$$.next({ ...this.progress$$.value, [n.name]: { error: !0 } });
                      break;
                    case s.dt.UploadProgress:
                      for (const n of this.files)
                        this.progress$$.next({
                          ...this.progress$$.value,
                          [n.name]: { progress: Math.round((t.loaded / (t?.total ?? 0)) * 100), error: !1 },
                        });
                  }
                },
                t => {
                  console.log(t);
                }
              );
            }
            retry(o) {
              this.disabled = !0;
              const t = new FormData();
              t.append(o.name, o),
                this.http.post('/fakeFileUpload', t, { reportProgress: !0, observe: 'events' }).subscribe(
                  n => {
                    switch (n.type) {
                      case s.dt.Sent:
                        break;
                      case s.dt.Response:
                        (this.disabled = !1),
                          this.progress$$.next(
                            n.status >= 200 && n.status < 300
                              ? { ...this.progress$$.value, [o.name]: { progress: 100, error: !1 } }
                              : { ...this.progress$$.value, [o.name]: { error: !0 } }
                          );
                        break;
                      case s.dt.UploadProgress:
                        this.progress$$.next({
                          ...this.progress$$.value,
                          [o.name]: { progress: Math.round((n.loaded / (n.total ?? 0)) * 100), error: !1 },
                        });
                    }
                  },
                  n => {
                    console.log(n);
                  }
                );
            }
            constructor(o, t) {
              (this.toastService = o),
                (this.http = t),
                (this.progress$$ = new m.X({})),
                (this.files = []),
                (this.disabled = !1);
            }
            ngOnDestroy() {
              this.progress$$.complete();
            }
          }
          return (
            (r.ɵfac = function (o) {
              return new (o || r)(e.Y36(p.hGm), e.Y36(s.eN));
            }),
            (r.ɵcmp = e.Xpm({
              type: r,
              selectors: [['prizm-file-auto-upload-example']],
              decls: 3,
              vars: 8,
              consts: [
                [
                  3,
                  'multiple',
                  'accept',
                  'progress',
                  'maxFilesCount',
                  'maxFileSize',
                  'disabled',
                  'filesChange',
                  'filesValidationErrors',
                  'filesCountError',
                  'retry',
                ],
              ],
              template: function (o, t) {
                1 & o &&
                  (e.TgZ(0, 'prizm-file-upload', 0),
                  e.NdJ('filesChange', function (i) {
                    return t.onFilesChange(i);
                  })('filesValidationErrors', function (i) {
                    return t.onfilesValidationErrors(i);
                  })('filesCountError', function (i) {
                    return t.onFilesCountError(i);
                  })('retry', function (i) {
                    return t.retry(i);
                  }),
                  e.ALo(1, 'async'),
                  e._uU(
                    2,
                    ' \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 1\u041c\u0411\n'
                  ),
                  e.qZA()),
                  2 & o &&
                    e.Q6J('multiple', !0)('accept', 'image/*')('progress', e.lcZ(1, 6, t.progress$$))(
                      'maxFilesCount',
                      3
                    )('maxFileSize', 1e6)('disabled', t.disabled);
              },
              dependencies: [x.F, u.Ov],
              styles: ['.submit[_ngcontent-%COMP%]{margin-top:16px}'],
              changeDetection: 0,
            })),
            r
          );
        })();
      var D = a(55372),
        f = a(60095);
      let M = (() => {
        class r {
          constructor(o) {
            (this.toastService = o), (this.form = new f.nJ({})), (this.files = []);
          }
          onFilesChange(o) {
            console.log('fileschange'), (this.files = o);
          }
          formSubmit() {
            this.toastService.create('Form submitted', {
              title:
                '\u0424\u043e\u0440\u043c\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430',
              appearance: 'success',
              timer: 5e3,
            });
          }
        }
        return (
          (r.ɵfac = function (o) {
            return new (o || r)(e.Y36(p.hGm));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [['prizm-file-upload-in-form-example']],
            decls: 6,
            vars: 3,
            consts: [
              [1, 'form', 3, 'formGroup', 'submit'],
              [1, 'control-container'],
              [3, 'multiple', 'accept', 'filesChange'],
              [1, 'actions'],
              ['prizmButton', '', 'appearance', 'primary', 'size', 'l'],
            ],
            template: function (o, t) {
              1 & o &&
                (e.TgZ(0, 'form', 0),
                e.NdJ('submit', function () {
                  return t.formSubmit();
                }),
                e.TgZ(1, 'div', 1)(2, 'prizm-file-upload', 2),
                e.NdJ('filesChange', function (i) {
                  return t.onFilesChange(i);
                }),
                e.qZA()(),
                e.TgZ(3, 'div', 3)(4, 'button', 4),
                e._uU(5, '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c'),
                e.qZA()()()),
                2 & o &&
                  (e.Q6J('formGroup', t.form),
                  e.xp6(2),
                  e.Q6J('multiple', !1)('accept', 'image/*,.xlsx,.xls,.doc,.docx,.pdf'));
            },
            dependencies: [x.F, P.K, f._Y, f.JL, f.sg],
            styles: ['.actions[_ngcontent-%COMP%]{margin-top:16px}'],
            changeDetection: 0,
          })),
          r
        );
      })();
      function V(r, l) {
        if (
          (1 & r &&
            (e.TgZ(0, 'prizm-doc-example', 3),
            e._UZ(1, 'prizm-file-upload-basic-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 4),
            e._UZ(3, 'prizm-file-auto-upload-example'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 5),
            e._UZ(5, 'prizm-file-upload-i18n-example'),
            e.qZA(),
            e.TgZ(6, 'prizm-doc-example', 6),
            e._UZ(7, 'prizm-file-upload-in-form-example'),
            e.qZA()),
          2 & r)
        ) {
          const o = e.oxw();
          e.Q6J('content', o.basic),
            e.xp6(2),
            e.Q6J('content', o.autoUpload),
            e.xp6(2),
            e.Q6J('content', o.exampleI18n),
            e.xp6(2),
            e.Q6J('content', o.exampleInForm);
        }
      }
      function A(r, l) {
        1 & r && e._uU(0, ' Accept ');
      }
      function N(r, l) {
        1 & r && e._uU(0, ' Max file size (bytes) ');
      }
      function Z(r, l) {
        1 & r && e._uU(0, ' Max files count ');
      }
      function S(r, l) {
        1 & r && e._uU(0, ' Disabled ');
      }
      function H(r, l) {
        1 & r && e._uU(0, ' Progress ');
      }
      function J(r, l) {
        1 & r && e._uU(0, ' Multiple ');
      }
      function B(r, l) {
        1 & r && e._uU(0, ' Retry ');
      }
      function K(r, l) {
        1 & r && e._uU(0, ' Before files change ');
      }
      function O(r, l) {
        1 & r && e._uU(0, ' Files change ');
      }
      function Y(r, l) {
        1 & r && e._uU(0, ' FilesValidationErrors ');
      }
      function G(r, l) {
        1 & r && e._uU(0, ' Files count error ');
      }
      function Q(r, l) {
        if (1 & r) {
          const o = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'prizm-file-upload', 7, 8),
            e.NdJ('filesChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG(i.onFilesChange(n));
            })('filesValidationErrors', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG(i.onfilesValidationErrors(n));
            })('filesCountError', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG(i.onFilesCountError(n));
            })('retry', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG(i.retry(n));
            }),
            e.ALo(3, 'async'),
            e._uU(4),
            e.qZA(),
            e._UZ(5, 'br'),
            e.TgZ(6, 'button', 9),
            e.NdJ('click', function () {
              e.CHM(o);
              const n = e.oxw();
              return e.KtG(n.send());
            }),
            e._uU(7, ' \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c '),
            e.qZA()(),
            e.TgZ(8, 'prizm-doc-documentation'),
            e.YNc(9, A, 1, 0, 'ng-template', 10),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.accept = n));
            }),
            e.YNc(10, N, 1, 0, 'ng-template', 11),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.maxFileSize = n));
            }),
            e.YNc(11, Z, 1, 0, 'ng-template', 12),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.maxFilesCount = n));
            }),
            e.YNc(12, S, 1, 0, 'ng-template', 13),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.disabled = n));
            }),
            e.YNc(13, H, 1, 0, 'ng-template', 14),
            e.YNc(14, J, 1, 0, 'ng-template', 15),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.multiple = n));
            }),
            e.YNc(15, B, 1, 0, 'ng-template', 16),
            e.YNc(16, K, 1, 0, 'ng-template', 17),
            e.YNc(17, O, 1, 0, 'ng-template', 18),
            e.YNc(18, Y, 1, 0, 'ng-template', 19),
            e.YNc(19, G, 1, 0, 'ng-template', 20),
            e.qZA();
        }
        if (2 & r) {
          const o = e.MAs(2),
            t = e.oxw();
          e.xp6(1),
            e.Q6J('prizmDocHostElement', o)('multiple', t.multiple)('accept', t.accept)(
              'progress',
              e.lcZ(3, 15, t.progress$$)
            )('maxFilesCount', t.maxFilesCount)('maxFileSize', t.maxFileSize)('disabled', t.disabled),
            e.xp6(3),
            e.hij(' ', t.userContent, ' '),
            e.xp6(2),
            e.Q6J('disabled', 0 === t.files.length || t.disabled),
            e.xp6(3),
            e.Q6J('documentationPropertyValue', t.accept)('documentationPropertyValues', t.acceptVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.maxFileSize),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.maxFilesCount),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.disabled),
            e.xp6(2),
            e.Q6J('documentationPropertyValue', t.multiple);
        }
      }
      function I(r, l) {
        if (
          (1 & r &&
            (e.TgZ(0, 'ol', 21)(1, 'li')(2, 'p'),
            e._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmFileUploadModule'),
            e.qZA(),
            e._uU(
              6,
              ' \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 '
            ),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 22),
            e.qZA()()),
          2 & r)
        ) {
          const o = e.oxw();
          e.xp6(7), e.Q6J('code', o.setupModule);
        }
      }
      let R = (() => {
        class r {
          onFilesChange(o) {
            this.files = o;
          }
          onfilesValidationErrors(o) {
            for (const t of Object.keys(o))
              this.toastService.create(JSON.stringify(o[t]), {
                title: `\u0424\u0430\u0439\u043b ${t} \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e`,
                appearance: 'warning',
                timer: 5e3,
              });
          }
          onFilesCountError(o) {
            this.toastService.create(
              `\u0424\u0430\u0439\u043b\u044b ${o.join(
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
            this.disabled = !0;
            const o = new FormData();
            for (const t of this.files) o.append(t.name, t);
            this.http.post('/fakeFileUpload', o, { reportProgress: !0, observe: 'events' }).subscribe(
              t => {
                switch (t.type) {
                  case s.dt.Sent:
                    break;
                  case s.dt.Response:
                    if (((this.disabled = !1), t.status >= 200 && t.status < 300))
                      for (const n of this.files)
                        this.progress$$.next({
                          ...this.progress$$.value,
                          [n.name]: { progress: 100, error: !1 },
                        });
                    else
                      for (const n of this.files)
                        this.progress$$.next({ ...this.progress$$.value, [n.name]: { error: !0 } });
                    break;
                  case s.dt.UploadProgress:
                    for (const n of this.files)
                      this.progress$$.next({
                        ...this.progress$$.value,
                        [n.name]: { progress: Math.round((t.loaded / (t?.total ?? 0)) * 100), error: !1 },
                      });
                }
              },
              t => {
                console.log(t);
              }
            );
          }
          retry(o) {
            this.disabled = !0;
            const t = new FormData();
            t.append(o.name, o),
              this.http.post('/fakeFileUpload', t, { reportProgress: !0, observe: 'events' }).subscribe(
                n => {
                  switch (n.type) {
                    case s.dt.Sent:
                      break;
                    case s.dt.Response:
                      (this.disabled = !1),
                        this.progress$$.next(
                          n.status >= 200 && n.status < 300
                            ? { ...this.progress$$.value, [o.name]: { progress: 100, error: !1 } }
                            : { ...this.progress$$.value, [o.name]: { error: !0 } }
                        );
                      break;
                    case s.dt.UploadProgress:
                      this.progress$$.next({
                        ...this.progress$$.value,
                        [o.name]: { progress: Math.round((n.loaded / (n.total ?? 0)) * 100), error: !1 },
                      });
                  }
                },
                n => {
                  console.log(n);
                }
              );
          }
          constructor(o, t) {
            (this.toastService = o),
              (this.http = t),
              (this.basic = {
                TypeScript: a.e(59882).then(a.t.bind(a, 59882, 17)),
                HTML: a.e(42958).then(a.t.bind(a, 42958, 17)),
              }),
              (this.autoUpload = {
                TypeScript: a.e(20274).then(a.t.bind(a, 20274, 17)),
                HTML: a.e(55709).then(a.t.bind(a, 55709, 17)),
              }),
              (this.exampleI18n = {
                TypeScript: a.e(20613).then(a.t.bind(a, 20613, 17)),
                HTML: a.e(70107).then(a.t.bind(a, 70107, 17)),
              }),
              (this.exampleInForm = {
                TypeScript: a.e(47397).then(a.t.bind(a, 47397, 17)),
                HTML: a.e(75577).then(a.t.bind(a, 75577, 17)),
              }),
              (this.setupModule = a.e(63163).then(a.t.bind(a, 63163, 17))),
              (this.userContent =
                '\u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f'),
              (this.accept = 'image/*'),
              (this.acceptVariants = ['image/*', '.pdf', '.doc, .docx']),
              (this.maxFileSize = 1e6),
              (this.maxFilesCount = 3),
              (this.multiple = !0),
              (this.progress$$ = new m.X({})),
              (this.files = []),
              (this.disabled = !1);
          }
          ngOnDestroy() {
            this.progress$$.complete();
          }
        }
        return (
          (r.ɵfac = function (o) {
            return new (o || r)(e.Y36(p.hGm), e.Y36(s.eN));
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [['ng-component']],
            decls: 4,
            vars: 0,
            consts: [
              ['header', 'File upload'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              ['id', 'auto-upload', 'heading', 'Auto upload', 3, 'content'],
              ['id', 'file-upload-exampleI18n', 'heading', 'i18n', 3, 'content'],
              ['id', 'example-in-form', 'heading', 'Usage in Forms', 3, 'content'],
              [
                3,
                'prizmDocHostElement',
                'multiple',
                'accept',
                'progress',
                'maxFilesCount',
                'maxFileSize',
                'disabled',
                'filesChange',
                'filesValidationErrors',
                'filesCountError',
                'retry',
              ],
              ['element', ''],
              ['prizmButton', '', 'appearance', 'primary', 'size', 'm', 1, 'submit', 3, 'disabled', 'click'],
              [
                'documentationPropertyName',
                'accept',
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
                'maxFileSize',
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
                'maxFilesCount',
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
                'progress',
                'documentationPropertyType',
                'PrizmFilesProgress',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'multiple',
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
                'retry',
                'documentationPropertyType',
                'File',
                'documentationPropertyMode',
                'output',
                'documentationPropertyType',
                'retry',
              ],
              [
                'documentationPropertyName',
                'beforeFilesChange',
                'documentationPropertyType',
                'Event',
                'documentationPropertyMode',
                'output',
                'documentationPropertyType',
                'void',
              ],
              [
                'documentationPropertyName',
                'filesChange',
                'documentationPropertyType',
                'Event',
                'documentationPropertyMode',
                'output',
                'documentationPropertyType',
                'File[]',
              ],
              [
                'documentationPropertyName',
                'filesValidationErrors',
                'documentationPropertyType',
                'Event',
                'documentationPropertyMode',
                'output',
                'documentationPropertyType',
                'Map<filename, PrizmFileValidationErrors>',
              ],
              [
                'documentationPropertyName',
                'filesCountError',
                'documentationPropertyType',
                'Event',
                'documentationPropertyMode',
                'output',
                'documentationPropertyType',
                'Array<filenames>',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'MyComponent.module.ts', 3, 'code'],
            ],
            template: function (o, t) {
              1 & o &&
                (e.TgZ(0, 'prizm-doc-page', 0),
                e.YNc(1, V, 8, 4, 'ng-template', 1),
                e.YNc(2, Q, 20, 17, 'ng-template', 2),
                e.YNc(3, I, 8, 1, 'ng-template', 1),
                e.qZA());
            },
            dependencies: [h.c, C.F, y.K, E.N, z.W, U.l, _.a, $.w, T.k, x.F, P.K, v, b, D.H, M, u.Ov],
            styles: ['.area[_ngcontent-%COMP%]{padding:10px}'],
            changeDetection: 0,
          })),
          r
        );
      })();
      var L = a(91687),
        j = a(30812),
        X = a(37398),
        W = a(99397);
      const k = {
        provide: s.TP,
        useClass: class w {
          intercept(l, o) {
            let n = !1;
            return l.url.includes('fakeFileUpload')
              ? (0, L.F)(50).pipe(
                  (0, j.o)(() => !1 === n),
                  (0, X.U)(i => {
                    if (i <= 50) {
                      const ee = { type: s.dt.UploadProgress, total: 1e4, loaded: 2 * i * 100 };
                      return Math.random() < 0.008 && i > 1
                        ? new s.Zn({ status: 400, body: { fake: !0 } })
                        : ee;
                    }
                    return new s.Zn({ status: 200, body: { fake: !0 } });
                  }),
                  (0, W.b)(i => {
                    i instanceof s.Zn && (n = !0);
                  })
                )
              : o.handle(l);
          }
        },
        multi: !0,
      };
      let q = (() => {
        class r {}
        return (
          (r.ɵfac = function (o) {
            return new (o || r)();
          }),
          (r.ɵmod = e.oAB({ type: r })),
          (r.ɵinj = e.cJS({
            providers: [k],
            imports: [u.ez, c.Qp, p.BlQ, p.M_I, g.Bz.forChild((0, c.GB)(R)), s.JF, p.KBf, f.u5, f.UX],
          })),
          r
        );
      })();
    },
    57679: (F, d, a) => {
      a.d(d, { k: () => g });
      var u = a(65879),
        c = a(45773);
      let g = (() => {
        class p {
          constructor(m) {
            (this.hostElementService = m), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const m = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              e = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const h in m) this.hostElementService.setHostElement(m[h], e[h]);
          }
        }
        return (
          (p.ɵfac = function (m) {
            return new (m || p)(u.Y36(c.R));
          }),
          (p.ɵdir = u.lG2({
            type: p,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          p
        );
      })();
    },
    56586: (F, d, a) => {
      a.d(d, { w: () => g });
      var u = a(45773),
        c = a(65879);
      let g = (() => {
        class p {}
        return (
          (p.ɵfac = function (m) {
            return new (m || p)();
          }),
          (p.ɵdir = c.lG2({ type: p, selectors: [['', 'prizmDocHost', '']], features: [c._Bn([u.R])] })),
          p
        );
      })();
    },
  },
]);
