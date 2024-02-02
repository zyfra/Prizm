'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [13999],
  {
    13999: (P, g, i) => {
      i.r(g), i.d(g, { ToastModule: () => lt });
      var m = i(96814),
        d = i(21004),
        f = i(75187),
        c = i(97582),
        t = i(65879),
        a = i(70169),
        v = i(95102),
        C = i(8221),
        E = i(30990),
        x = i(83419),
        b = i(78905),
        A = i(63796),
        z = i(75987),
        y = i(43015),
        M = i(56586),
        O = i(57679),
        T = i(4377),
        Z = i(8478),
        p = i(60095),
        h = i(98567);
      function W(n, u) {
        if (1 & n) {
          const e = t.EpF();
          t.TgZ(0, 'div'),
            t._uU(
              1,
              '\u0412 toast-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 2 \u0441\u0442\u0440\u043e\u043a\u0438.'
            ),
            t.qZA(),
            t.TgZ(2, 'div', 11),
            t._uU(3, '16.05.2022 10:00'),
            t.qZA(),
            t.TgZ(4, 'div', 12)(5, 'a', 13),
            t._uU(6, '\u0421\u0441\u044b\u043b\u043a\u0430'),
            t.qZA()(),
            t.TgZ(7, 'div', 14)(8, 'button', 1),
            t.NdJ('click', function () {
              const r = t.CHM(e).close;
              return t.KtG(r());
            }),
            t._uU(9, '\u0417\u0430\u043a\u0440\u044b\u0442\u044c'),
            t.qZA()();
        }
      }
      function B(n, u) {
        1 & n &&
          (t.TgZ(0, 'div', 15)(1, 'span', 16),
          t._uU(2, '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
          t.qZA(),
          t.TgZ(3, 'span', 17)(4, 'a', 13),
          t._uU(5, '\u0421\u0441\u044b\u043b\u043a\u0430'),
          t.qZA()()());
      }
      function w(n, u) {
        if ((1 & n && t._UZ(0, 'prizm-radio-button', 18), 2 & n)) {
          const e = u.$implicit,
            o = t.oxw();
          t.Gre('toast-position-button-', e.val, ''),
            t.Q6J('formControl', o.formControl)('label', e.label)('name', o.appearance)('value', e.val);
        }
      }
      let I = (() => {
        class n {
          constructor(e) {
            (this.toastService = e),
              (this.containerId = 'inline-container-info'),
              (this.data = [
                { val: a.LW3.TOP_MIDDLE, label: 'Top Middle' },
                { val: a.LW3.TOP_LEFT, label: 'Top Left' },
                { val: a.LW3.TOP_RIGHT, label: 'Top Right' },
                { val: a.LW3.BOTTOM_MIDDLE, label: 'Bottom Middle' },
                { val: a.LW3.BOTTOM_LEFT, label: 'Bottom Left' },
                { val: a.LW3.BOTTOM_RIGHT, label: 'Bottom Right' },
                {
                  val: this.containerId,
                  label:
                    '\u0412 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435',
                },
              ]),
              (this.appearance = 'info'),
              (this.formControl = new p.p4(a.LW3.TOP_RIGHT));
          }
          showToast() {
            this.toastService.create('Hello #' + Math.random(), {
              appearance: this.appearance,
              position: this.formControl.value,
              title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
            });
          }
          showToastWithoutTitle() {
            this.toastService.create(
              '\u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 1 \u0441\u0442\u0440\u043e\u043a\u0443.',
              { timer: 5e3, appearance: this.appearance, position: this.formControl.value }
            );
          }
          showToastWithoutTimer() {
            this.toastService.create(
              '\u042d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0435.',
              {
                timer: 0,
                appearance: this.appearance,
                title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                position: this.formControl.value,
              }
            );
          }
          showWithId() {
            this.toastService.create(
              '\u042d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0435.',
              {
                timer: 0,
                id: 'our-id-1',
                appearance: this.appearance,
                title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                position: this.formControl.value,
              }
            );
          }
          updateContentWithId() {
            this.toastService.updateContent(
              'our-id-1',
              '\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u2116' +
                Math.random()
            );
          }
          updateTitleWithId(e) {
            this.toastService.updateTitle('our-id-1', e);
          }
          closeWithId() {
            this.toastService.delete('our-id-1');
          }
          closeAll() {
            this.toastService.deleteAll();
          }
          showToastWithBigText() {
            this.toastService.create(
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              {
                timer: 5e3,
                appearance: this.appearance,
                title:
                  '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
                position: this.formControl.value,
              }
            );
          }
          showToastWithContentTemplate(e) {
            this.toastService.create(e, {
              timer: 5e3,
              appearance: this.appearance,
              title:
                '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
              position: this.formControl.value,
            });
          }
          showToastWithHeaderTemplate(e) {
            this.toastService.create(
              '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435',
              { timer: 0, appearance: this.appearance, title: e, position: this.formControl.value }
            );
          }
          showToastWithBigTitle() {
            this.toastService.create('\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435', {
              timer: 5e3,
              appearance: this.appearance,
              position: this.formControl.value,
              title:
                " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.Y36(a.hGm));
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['prizm-message-info-example']],
            decls: 41,
            vars: 2,
            consts: [
              [1, 'box'],
              ['prizmButton', '', 3, 'click'],
              ['prizmButton', '', 1, 'show-toast-by-id', 3, 'click'],
              ['prizmButton', '', 1, 'close-toast-by-id', 3, 'click'],
              ['prizmButton', '', 1, 'close-all-toast', 3, 'click'],
              ['contentTemplate', ''],
              ['headerTemplate', ''],
              [1, 'inline-container'],
              [3, 'containerId'],
              [2, 'display', 'flex', 'gap', '1rem', 'flex-wrap', 'wrap'],
              [3, 'class', 'formControl', 'label', 'name', 'value', 4, 'ngFor', 'ngForOf'],
              [1, 'date'],
              [1, 'link-content'],
              ['href', '#'],
              [1, 'footer'],
              [1, 'header-title'],
              [1, 'title'],
              [1, 'link'],
              [3, 'formControl', 'label', 'name', 'value'],
            ],
            template: function (e, o) {
              if (1 & e) {
                const s = t.EpF();
                t.TgZ(0, 'div', 0)(1, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToast();
                  }),
                  t._uU(2, '\u0421 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c'),
                  t.qZA(),
                  t.TgZ(3, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTitle();
                  }),
                  t._uU(4, '\u0411\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430'),
                  t.qZA(),
                  t.TgZ(5, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigText();
                  }),
                  t._uU(6, '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442'),
                  t.qZA(),
                  t.TgZ(7, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigTitle();
                  }),
                  t._uU(
                    8,
                    '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'
                  ),
                  t.qZA(),
                  t.TgZ(9, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTimer();
                  }),
                  t._uU(10, '\u0411\u0435\u0437 \u0442\u0430\u0439\u043c\u0435\u0440\u0430'),
                  t.qZA(),
                  t.TgZ(11, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(26);
                    return t.KtG(o.showToastWithContentTemplate(l));
                  }),
                  t._uU(
                    12,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c'
                  ),
                  t.qZA(),
                  t.TgZ(13, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(28);
                    return t.KtG(o.showToastWithHeaderTemplate(l));
                  }),
                  t._uU(
                    14,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435'
                  ),
                  t.qZA(),
                  t.TgZ(15, 'button', 2),
                  t.NdJ('click', function () {
                    return o.showWithId();
                  }),
                  t._uU(16, '(*) \u041f\u043e\u043a\u0430\u0437 \u043f\u043e id'),
                  t.qZA(),
                  t.TgZ(17, 'button', 1),
                  t.NdJ('click', function () {
                    return o.updateContentWithId();
                  }),
                  t._uU(
                    18,
                    '(*) \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u043e id'
                  ),
                  t.qZA(),
                  t.TgZ(19, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(28);
                    return t.KtG(o.updateTitleWithId(l));
                  }),
                  t._uU(20, '(*) \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c title \u043f\u043e id'),
                  t.qZA(),
                  t.TgZ(21, 'button', 3),
                  t.NdJ('click', function () {
                    return o.closeWithId();
                  }),
                  t._uU(22, '(*) \u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e id'),
                  t.qZA(),
                  t.TgZ(23, 'button', 4),
                  t.NdJ('click', function () {
                    return o.closeAll();
                  }),
                  t._uU(24, '(*) \u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u0435'),
                  t.qZA(),
                  t.YNc(25, W, 10, 0, 'ng-template', null, 5, t.W1O),
                  t.YNc(27, B, 6, 0, 'ng-template', null, 6, t.W1O),
                  t.qZA(),
                  t._UZ(29, 'br')(30, 'hr'),
                  t.TgZ(31, 'div', 7)(32, 'p'),
                  t._uU(33, 'Inline Container'),
                  t.qZA(),
                  t._UZ(34, 'prizm-toast-container', 8),
                  t.qZA(),
                  t._UZ(35, 'br')(36, 'hr'),
                  t.TgZ(37, 'p'),
                  t._uU(38, 'Position'),
                  t.qZA(),
                  t.TgZ(39, 'div', 9),
                  t.YNc(40, w, 1, 7, 'prizm-radio-button', 10),
                  t.qZA();
              }
              2 & e && (t.xp6(34), t.Q6J('containerId', o.containerId), t.xp6(6), t.Q6J('ngForOf', o.data));
            },
            dependencies: [m.sg, T.K, h.J, p.JJ, p.oH, Z.h],
            styles: [
              '.box[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}a[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-link);text-decoration:underline;font-weight:500}.link-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400}.footer[_ngcontent-%COMP%]{margin-top:8px}.inline-container[_ngcontent-%COMP%]{border:1px solid black;padding:10px}.date[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-tertiary);margin:8px 0}.header-title[_ngcontent-%COMP%]{width:400px;display:flex;justify-content:space-between;gap:30px}.header-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:inherit;font-size:inherit}',
            ],
          })),
          n
        );
      })();
      function L(n, u) {
        1 & n && t._UZ(0, 'div', 5), 2 & n && t.Q6J('innerHTML', u.data.html, t.oJD);
      }
      function k(n, u) {
        if ((1 & n && t._UZ(0, 'prizm-radio-button', 6), 2 & n)) {
          const e = u.$implicit,
            o = t.oxw();
          t.Q6J('formControl', o.formControl)('label', e.label)('name', 'success')('value', e.val);
        }
      }
      let D = (() => {
        class n {
          constructor(e) {
            (this.toastService = e),
              (this.data = [
                { val: a.LW3.TOP_MIDDLE, label: 'Top Middle' },
                { val: a.LW3.TOP_LEFT, label: 'Top Left' },
                { val: a.LW3.TOP_RIGHT, label: 'Top Right' },
                { val: a.LW3.BOTTOM_MIDDLE, label: 'Bottom Middle' },
                { val: a.LW3.BOTTOM_LEFT, label: 'Bottom Left' },
                { val: a.LW3.BOTTOM_RIGHT, label: 'Bottom Right' },
              ]),
              (this.formControl = new p.p4(a.LW3.TOP_RIGHT));
          }
          showWithCustomDataTemplate(e) {
            this.toastService.create(e, {
              appearance: 'info',
              position: this.formControl.value,
              data: { html: '<b>BOLD</b> <i>CURSIVE</i>' },
              timer: 5e3,
              isPlatform: !0,
              title: '\u0421 HTML \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u043e\u0439',
            });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.Y36(a.hGm));
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['prizm-toast-inner-html-example']],
            decls: 11,
            vars: 1,
            consts: [
              [1, 'box'],
              ['prizmButton', '', 'appearance', 'primary', 3, 'click'],
              ['contentTemplate', ''],
              [2, 'display', 'flex', 'gap', '1rem', 'flex-wrap', 'wrap'],
              [3, 'formControl', 'label', 'name', 'value', 4, 'ngFor', 'ngForOf'],
              [3, 'innerHTML'],
              [3, 'formControl', 'label', 'name', 'value'],
            ],
            template: function (e, o) {
              if (1 & e) {
                const s = t.EpF();
                t.TgZ(0, 'div', 0)(1, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(4);
                    return t.KtG(o.showWithCustomDataTemplate(l));
                  }),
                  t._uU(2, ' Info Toast '),
                  t.qZA(),
                  t.YNc(3, L, 1, 1, 'ng-template', null, 2, t.W1O),
                  t.qZA(),
                  t._UZ(5, 'br')(6, 'hr'),
                  t.TgZ(7, 'p'),
                  t._uU(8, 'Position'),
                  t.qZA(),
                  t.TgZ(9, 'div', 3),
                  t.YNc(10, k, 1, 4, 'prizm-radio-button', 4),
                  t.qZA();
              }
              2 & e && (t.xp6(10), t.Q6J('ngForOf', o.data));
            },
            dependencies: [m.sg, T.K, h.J, p.JJ, p.oH],
            styles: [
              '.box[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}a[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-link);text-decoration:underline;font-weight:500}.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400}.footer[_ngcontent-%COMP%]{margin-top:8px}.date[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-tertiary);margin:8px 0}.header-title[_ngcontent-%COMP%]{width:400px;display:flex;justify-content:space-between;gap:30px}.header-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:inherit;font-size:inherit}',
            ],
          })),
          n
        );
      })();
      function U(n, u) {
        if (1 & n) {
          const e = t.EpF();
          t.TgZ(0, 'div'),
            t._uU(
              1,
              '\u0412 toast-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 2 \u0441\u0442\u0440\u043e\u043a\u0438.'
            ),
            t.qZA(),
            t.TgZ(2, 'div', 6),
            t._uU(3, '16.05.2022 10:00'),
            t.qZA(),
            t.TgZ(4, 'div', 7)(5, 'a', 8),
            t._uU(6, '\u0421\u0441\u044b\u043b\u043a\u0430'),
            t.qZA()(),
            t.TgZ(7, 'div', 9)(8, 'button', 1),
            t.NdJ('click', function () {
              const r = t.CHM(e).close;
              return t.KtG(r());
            }),
            t._uU(9, '\u0417\u0430\u043a\u0440\u044b\u0442\u044c'),
            t.qZA()();
        }
      }
      function S(n, u) {
        1 & n &&
          (t.TgZ(0, 'div', 10)(1, 'span', 11),
          t._uU(2, '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
          t.qZA(),
          t.TgZ(3, 'span', 12)(4, 'a', 8),
          t._uU(5, '\u0421\u0441\u044b\u043b\u043a\u0430'),
          t.qZA()()());
      }
      function H(n, u) {
        if ((1 & n && t._UZ(0, 'prizm-radio-button', 13), 2 & n)) {
          const e = u.$implicit,
            o = t.oxw();
          t.Q6J('formControl', o.formControl)('label', e.label)('name', o.appearance)('value', e.val);
        }
      }
      let J = (() => {
        class n {
          constructor(e) {
            (this.toastService = e),
              (this.data = [
                { val: a.LW3.TOP_MIDDLE, label: 'Top Middle' },
                { val: a.LW3.TOP_LEFT, label: 'Top Left' },
                { val: a.LW3.TOP_RIGHT, label: 'Top Right' },
                { val: a.LW3.BOTTOM_MIDDLE, label: 'Bottom Middle' },
                { val: a.LW3.BOTTOM_LEFT, label: 'Bottom Left' },
                { val: a.LW3.BOTTOM_RIGHT, label: 'Bottom Right' },
              ]),
              (this.appearance = 'warning'),
              (this.formControl = new p.p4(a.LW3.TOP_RIGHT));
          }
          showToast() {
            this.toastService.create('Hello #' + Math.random(), {
              appearance: this.appearance,
              position: this.formControl.value,
              timer: 5e3,
              title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
            });
          }
          showToastWithoutTitle() {
            this.toastService.create(
              '\u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 1 \u0441\u0442\u0440\u043e\u043a\u0443.',
              { appearance: this.appearance, position: this.formControl.value, timer: 5e3 }
            );
          }
          showToastWithoutTimer() {
            this.toastService.create(
              '\u042d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0435.',
              {
                appearance: this.appearance,
                position: this.formControl.value,
                timer: 0,
                title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
              }
            );
          }
          showToastWithBigText() {
            this.toastService.create(
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              {
                appearance: this.appearance,
                position: this.formControl.value,
                timer: 5e3,
                title:
                  '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
              }
            );
          }
          showToastWithContentTemplate(e) {
            this.toastService.create(e, {
              appearance: this.appearance,
              position: this.formControl.value,
              timer: 5e3,
              title:
                '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
            });
          }
          showToastWithHeaderTemplate(e) {
            this.toastService.create(
              '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435',
              { appearance: this.appearance, position: this.formControl.value, timer: 5e3, title: e }
            );
          }
          showToastWithBigTitle() {
            this.toastService.create('\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435', {
              appearance: this.appearance,
              position: this.formControl.value,
              timer: 5e3,
              title:
                " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.Y36(a.hGm));
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['prizm-message-warning-example']],
            decls: 25,
            vars: 1,
            consts: [
              [1, 'box'],
              ['prizmButton', '', 3, 'click'],
              ['contentTemplate', ''],
              ['headerTemplate', ''],
              [2, 'display', 'flex', 'gap', '1rem', 'flex-wrap', 'wrap'],
              [3, 'formControl', 'label', 'name', 'value', 4, 'ngFor', 'ngForOf'],
              [1, 'date'],
              [1, 'link-content'],
              ['href', '#'],
              [1, 'footer'],
              [1, 'header-title'],
              [1, 'title'],
              [1, 'link'],
              [3, 'formControl', 'label', 'name', 'value'],
            ],
            template: function (e, o) {
              if (1 & e) {
                const s = t.EpF();
                t.TgZ(0, 'div', 0)(1, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToast();
                  }),
                  t._uU(2, '\u0421 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c'),
                  t.qZA(),
                  t.TgZ(3, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTitle();
                  }),
                  t._uU(4, '\u0411\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430'),
                  t.qZA(),
                  t.TgZ(5, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigText();
                  }),
                  t._uU(6, '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442'),
                  t.qZA(),
                  t.TgZ(7, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigTitle();
                  }),
                  t._uU(
                    8,
                    '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'
                  ),
                  t.qZA(),
                  t.TgZ(9, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTimer();
                  }),
                  t._uU(10, '\u0411\u0435\u0437 \u0442\u0430\u0439\u043c\u0435\u0440\u0430'),
                  t.qZA(),
                  t.TgZ(11, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(16);
                    return t.KtG(o.showToastWithContentTemplate(l));
                  }),
                  t._uU(
                    12,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c'
                  ),
                  t.qZA(),
                  t.TgZ(13, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(18);
                    return t.KtG(o.showToastWithHeaderTemplate(l));
                  }),
                  t._uU(
                    14,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435'
                  ),
                  t.qZA(),
                  t.YNc(15, U, 10, 0, 'ng-template', null, 2, t.W1O),
                  t.YNc(17, S, 6, 0, 'ng-template', null, 3, t.W1O),
                  t.qZA(),
                  t._UZ(19, 'br')(20, 'hr'),
                  t.TgZ(21, 'p'),
                  t._uU(22, 'Position'),
                  t.qZA(),
                  t.TgZ(23, 'div', 4),
                  t.YNc(24, H, 1, 4, 'prizm-radio-button', 5),
                  t.qZA();
              }
              2 & e && (t.xp6(24), t.Q6J('ngForOf', o.data));
            },
            dependencies: [m.sg, T.K, h.J, p.JJ, p.oH],
            styles: [
              '.box[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}a[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-link);text-decoration:underline;font-weight:500}.link-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400}.footer[_ngcontent-%COMP%]{margin-top:8px}.date[_ngcontent-%COMP%]{color:#a1a5b7;margin:8px 0}.header-title[_ngcontent-%COMP%]{width:400px;display:flex;justify-content:space-between;gap:30px}.header-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:inherit;font-size:inherit}',
            ],
          })),
          n
        );
      })();
      function N(n, u) {
        if (1 & n) {
          const e = t.EpF();
          t.TgZ(0, 'div'),
            t._uU(
              1,
              '\u0412 toast-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 2 \u0441\u0442\u0440\u043e\u043a\u0438.'
            ),
            t.qZA(),
            t.TgZ(2, 'div', 8),
            t._uU(3, '16.05.2022 10:00'),
            t.qZA(),
            t.TgZ(4, 'div', 9)(5, 'a', 10),
            t._uU(6, '\u0421\u0441\u044b\u043b\u043a\u0430'),
            t.qZA()(),
            t.TgZ(7, 'div', 11)(8, 'button', 12),
            t.NdJ('click', function () {
              const r = t.CHM(e).close;
              return t.KtG(r());
            }),
            t._uU(9, '\u0417\u0430\u043a\u0440\u044b\u0442\u044c'),
            t.qZA()();
        }
        if (2 & n) {
          const e = u.buttonAppearance;
          t.xp6(8), t.Q6J('appearance', e);
        }
      }
      function F(n, u) {
        if ((1 & n && t._UZ(0, 'prizm-radio-button', 13), 2 & n)) {
          const e = u.$implicit,
            o = t.oxw();
          t.Q6J('formControl', o.formControl)('label', e.label)('name', 'success')('value', e.val);
        }
      }
      let G = (() => {
        class n {
          constructor(e) {
            (this.toastService = e),
              (this.data = [
                { val: a.LW3.TOP_MIDDLE, label: 'Top Middle' },
                { val: a.LW3.TOP_LEFT, label: 'Top Left' },
                { val: a.LW3.TOP_RIGHT, label: 'Top Right' },
                { val: a.LW3.BOTTOM_MIDDLE, label: 'Bottom Middle' },
                { val: a.LW3.BOTTOM_LEFT, label: 'Bottom Left' },
                { val: a.LW3.BOTTOM_RIGHT, label: 'Bottom Right' },
              ]),
              (this.formControl = new p.p4(a.LW3.TOP_RIGHT));
          }
          showSuccessToastWithContentTemplate(e) {
            this.toastService.create(e, {
              appearance: 'success',
              position: this.formControl.value,
              timer: 5e3,
              isPlatform: !0,
              title:
                '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
            });
          }
          showWarningToastWithContentTemplate(e) {
            this.toastService.create(e, {
              appearance: 'warning',
              position: this.formControl.value,
              timer: 5e3,
              isPlatform: !0,
              title:
                '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
            });
          }
          showDangerToastWithContentTemplate(e) {
            this.toastService.create(e, {
              appearance: 'danger',
              position: this.formControl.value,
              timer: 5e3,
              isPlatform: !0,
              title:
                '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
            });
          }
          showInfoToastWithContentTemplate(e) {
            this.toastService.create(e, {
              appearance: 'info',
              position: this.formControl.value,
              timer: 5e3,
              isPlatform: !0,
              title:
                '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
            });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.Y36(a.hGm));
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['prizm-toast-example']],
            decls: 17,
            vars: 1,
            consts: [
              [1, 'box'],
              ['prizmButton', '', 'appearance', 'success', 3, 'click'],
              ['prizmButton', '', 'appearance', 'warning', 3, 'click'],
              ['prizmButton', '', 'appearance', 'danger', 3, 'click'],
              ['prizmButton', '', 'appearance', 'primary', 3, 'click'],
              ['contentTemplate', ''],
              [2, 'display', 'flex', 'gap', '1rem', 'flex-wrap', 'wrap'],
              [3, 'formControl', 'label', 'name', 'value', 4, 'ngFor', 'ngForOf'],
              [1, 'date'],
              [1, 'link-content'],
              ['href', '#'],
              [1, 'footer'],
              ['prizmButton', '', 3, 'appearance', 'click'],
              [3, 'formControl', 'label', 'name', 'value'],
            ],
            template: function (e, o) {
              if (1 & e) {
                const s = t.EpF();
                t.TgZ(0, 'div', 0)(1, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(10);
                    return t.KtG(o.showSuccessToastWithContentTemplate(l));
                  }),
                  t._uU(2, ' Success Toast '),
                  t.qZA(),
                  t.TgZ(3, 'button', 2),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(10);
                    return t.KtG(o.showWarningToastWithContentTemplate(l));
                  }),
                  t._uU(4, ' Warning Toast '),
                  t.qZA(),
                  t.TgZ(5, 'button', 3),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(10);
                    return t.KtG(o.showDangerToastWithContentTemplate(l));
                  }),
                  t._uU(6, ' Danger Toast '),
                  t.qZA(),
                  t.TgZ(7, 'button', 4),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(10);
                    return t.KtG(o.showInfoToastWithContentTemplate(l));
                  }),
                  t._uU(8, ' Info Toast '),
                  t.qZA(),
                  t.YNc(9, N, 10, 1, 'ng-template', null, 5, t.W1O),
                  t.qZA(),
                  t._UZ(11, 'br')(12, 'hr'),
                  t.TgZ(13, 'p'),
                  t._uU(14, 'Position'),
                  t.qZA(),
                  t.TgZ(15, 'div', 6),
                  t.YNc(16, F, 1, 4, 'prizm-radio-button', 7),
                  t.qZA();
              }
              2 & e && (t.xp6(16), t.Q6J('ngForOf', o.data));
            },
            dependencies: [m.sg, T.K, h.J, p.JJ, p.oH],
            styles: [
              '.box[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}a[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-link);text-decoration:underline;font-weight:500}.link-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400}.footer[_ngcontent-%COMP%]{margin-top:8px}.date[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-tertiary);margin:8px 0}.header-title[_ngcontent-%COMP%]{width:400px;display:flex;justify-content:space-between;gap:30px}.header-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:inherit;font-size:inherit}',
            ],
          })),
          n
        );
      })();
      function q(n, u) {
        if (1 & n) {
          const e = t.EpF();
          t.TgZ(0, 'div'),
            t._uU(
              1,
              '\u0412 toast-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 2 \u0441\u0442\u0440\u043e\u043a\u0438.'
            ),
            t.qZA(),
            t.TgZ(2, 'div', 6),
            t._uU(3, '16.05.2022 10:00'),
            t.qZA(),
            t.TgZ(4, 'div', 7)(5, 'a', 8),
            t._uU(6, '\u0421\u0441\u044b\u043b\u043a\u0430'),
            t.qZA()(),
            t.TgZ(7, 'div', 9)(8, 'button', 1),
            t.NdJ('click', function () {
              const r = t.CHM(e).close;
              return t.KtG(r());
            }),
            t._uU(9, '\u0417\u0430\u043a\u0440\u044b\u0442\u044c'),
            t.qZA()();
        }
      }
      function K(n, u) {
        1 & n &&
          (t.TgZ(0, 'div', 10)(1, 'span', 11),
          t._uU(2, '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
          t.qZA(),
          t.TgZ(3, 'span', 12)(4, 'a', 8),
          t._uU(5, '\u0421\u0441\u044b\u043b\u043a\u0430'),
          t.qZA()()());
      }
      function R(n, u) {
        if ((1 & n && t._UZ(0, 'prizm-radio-button', 13), 2 & n)) {
          const e = u.$implicit,
            o = t.oxw();
          t.Q6J('formControl', o.formControl)('label', e.label)('name', o.appearance)('value', e.val);
        }
      }
      let Y = (() => {
        class n {
          constructor(e) {
            (this.toastService = e),
              (this.data = [
                { val: a.LW3.TOP_MIDDLE, label: 'Top Middle' },
                { val: a.LW3.TOP_LEFT, label: 'Top Left' },
                { val: a.LW3.TOP_RIGHT, label: 'Top Right' },
                { val: a.LW3.BOTTOM_MIDDLE, label: 'Bottom Middle' },
                { val: a.LW3.BOTTOM_LEFT, label: 'Bottom Left' },
                { val: a.LW3.BOTTOM_RIGHT, label: 'Bottom Right' },
              ]),
              (this.appearance = 'success'),
              (this.formControl = new p.p4(a.LW3.TOP_RIGHT));
          }
          showToast() {
            this.toastService.create('Hello #' + Math.random(), {
              appearance: this.appearance,
              position: this.formControl.value,
              timer: 5e3,
              title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
            });
          }
          showToastWithoutTitle() {
            this.toastService.create(
              '\u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 1 \u0441\u0442\u0440\u043e\u043a\u0443.',
              { appearance: this.appearance, position: this.formControl.value, timer: 5e3 }
            );
          }
          showToastWithoutTimer() {
            this.toastService.create(
              '\u042d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0435.',
              {
                appearance: this.appearance,
                position: this.formControl.value,
                timer: 0,
                title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
              }
            );
          }
          showToastWithBigText() {
            this.toastService.create(
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              {
                appearance: this.appearance,
                position: this.formControl.value,
                timer: 5e3,
                title:
                  '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
              }
            );
          }
          showToastWithContentTemplate(e) {
            this.toastService.create(e, {
              appearance: this.appearance,
              position: this.formControl.value,
              timer: 5e3,
              title:
                '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
            });
          }
          showToastWithHeaderTemplate(e) {
            this.toastService.create(
              '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435',
              { appearance: this.appearance, position: this.formControl.value, timer: 5e3, title: e }
            );
          }
          showToastWithBigTitle() {
            this.toastService.create('\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435', {
              appearance: this.appearance,
              position: this.formControl.value,
              timer: 5e3,
              title:
                " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.Y36(a.hGm));
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['prizm-message-success-example']],
            decls: 25,
            vars: 1,
            consts: [
              [1, 'box'],
              ['prizmButton', '', 3, 'click'],
              ['contentTemplate', ''],
              ['headerTemplate', ''],
              [2, 'display', 'flex', 'gap', '1rem', 'flex-wrap', 'wrap'],
              [3, 'formControl', 'label', 'name', 'value', 4, 'ngFor', 'ngForOf'],
              [1, 'date'],
              [1, 'link-content'],
              ['href', '#'],
              [1, 'footer'],
              [1, 'header-title'],
              [1, 'title'],
              [1, 'link'],
              [3, 'formControl', 'label', 'name', 'value'],
            ],
            template: function (e, o) {
              if (1 & e) {
                const s = t.EpF();
                t.TgZ(0, 'div', 0)(1, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToast();
                  }),
                  t._uU(2, '\u0421 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c'),
                  t.qZA(),
                  t.TgZ(3, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTitle();
                  }),
                  t._uU(4, '\u0411\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430'),
                  t.qZA(),
                  t.TgZ(5, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigText();
                  }),
                  t._uU(6, '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442'),
                  t.qZA(),
                  t.TgZ(7, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigTitle();
                  }),
                  t._uU(
                    8,
                    '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'
                  ),
                  t.qZA(),
                  t.TgZ(9, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTimer();
                  }),
                  t._uU(10, '\u0411\u0435\u0437 \u0442\u0430\u0439\u043c\u0435\u0440\u0430'),
                  t.qZA(),
                  t.TgZ(11, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(16);
                    return t.KtG(o.showToastWithContentTemplate(l));
                  }),
                  t._uU(
                    12,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c'
                  ),
                  t.qZA(),
                  t.TgZ(13, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(18);
                    return t.KtG(o.showToastWithHeaderTemplate(l));
                  }),
                  t._uU(
                    14,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435'
                  ),
                  t.qZA(),
                  t.YNc(15, q, 10, 0, 'ng-template', null, 2, t.W1O),
                  t.YNc(17, K, 6, 0, 'ng-template', null, 3, t.W1O),
                  t.qZA(),
                  t._UZ(19, 'br')(20, 'hr'),
                  t.TgZ(21, 'p'),
                  t._uU(22, 'Position'),
                  t.qZA(),
                  t.TgZ(23, 'div', 4),
                  t.YNc(24, R, 1, 4, 'prizm-radio-button', 5),
                  t.qZA();
              }
              2 & e && (t.xp6(24), t.Q6J('ngForOf', o.data));
            },
            dependencies: [m.sg, T.K, h.J, p.JJ, p.oH],
            styles: [
              '.box[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}a[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-link);text-decoration:underline;font-weight:500}.link-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400}.footer[_ngcontent-%COMP%]{margin-top:8px}.date[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-tertiary);margin:8px 0}.header-title[_ngcontent-%COMP%]{width:400px;display:flex;justify-content:space-between;gap:30px}.header-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:inherit;font-size:inherit}',
            ],
          })),
          n
        );
      })();
      function Q(n, u) {
        if (1 & n) {
          const e = t.EpF();
          t.TgZ(0, 'div'),
            t._uU(
              1,
              '\u0412 toast-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 2 \u0441\u0442\u0440\u043e\u043a\u0438.'
            ),
            t.qZA(),
            t.TgZ(2, 'div', 6),
            t._uU(3, '16.05.2022 10:00'),
            t.qZA(),
            t.TgZ(4, 'div', 7)(5, 'a', 8),
            t._uU(6, '\u0421\u0441\u044b\u043b\u043a\u0430'),
            t.qZA()(),
            t.TgZ(7, 'div', 9)(8, 'button', 1),
            t.NdJ('click', function () {
              const r = t.CHM(e).close;
              return t.KtG(r());
            }),
            t._uU(9, '\u0417\u0430\u043a\u0440\u044b\u0442\u044c'),
            t.qZA()();
        }
      }
      function V(n, u) {
        1 & n &&
          (t.TgZ(0, 'div', 10)(1, 'span', 11),
          t._uU(2, '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
          t.qZA(),
          t.TgZ(3, 'span', 12)(4, 'a', 8),
          t._uU(5, '\u0421\u0441\u044b\u043b\u043a\u0430'),
          t.qZA()()());
      }
      function X(n, u) {
        if ((1 & n && t._UZ(0, 'prizm-radio-button', 13), 2 & n)) {
          const e = u.$implicit,
            o = t.oxw();
          t.Q6J('formControl', o.formControl)('label', e.label)('name', o.appearance)('value', e.val);
        }
      }
      let j = (() => {
        class n {
          constructor(e) {
            (this.toastService = e),
              (this.data = [
                { val: a.LW3.TOP_MIDDLE, label: 'Top Middle' },
                { val: a.LW3.TOP_LEFT, label: 'Top Left' },
                { val: a.LW3.TOP_RIGHT, label: 'Top Right' },
                { val: a.LW3.BOTTOM_MIDDLE, label: 'Bottom Middle' },
                { val: a.LW3.BOTTOM_LEFT, label: 'Bottom Left' },
                { val: a.LW3.BOTTOM_RIGHT, label: 'Bottom Right' },
              ]),
              (this.appearance = 'danger'),
              (this.formControl = new p.p4(a.LW3.TOP_RIGHT));
          }
          showToast() {
            this.toastService.create('Hello #' + Math.random(), {
              appearance: this.appearance,
              position: this.formControl.value,
              timer: 5e3,
              title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
            });
          }
          showToastWithoutTitle() {
            this.toastService.create(
              '\u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 1 \u0441\u0442\u0440\u043e\u043a\u0443.',
              { appearance: this.appearance, position: this.formControl.value, timer: 5e3 }
            );
          }
          showToastWithoutTimer() {
            this.toastService.create(
              '\u042d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0435.',
              {
                appearance: this.appearance,
                position: this.formControl.value,
                timer: 0,
                title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
              }
            );
          }
          showToastWithBigText() {
            this.toastService.create(
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              {
                appearance: this.appearance,
                position: this.formControl.value,
                timer: 5e3,
                title:
                  '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
              }
            );
          }
          showToastWithContentTemplate(e) {
            this.toastService.create(e, {
              appearance: this.appearance,
              position: this.formControl.value,
              timer: 5e3,
              title:
                '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
            });
          }
          showToastWithHeaderTemplate(e) {
            this.toastService.create(
              '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435',
              { appearance: this.appearance, position: this.formControl.value, timer: 5e3, title: e }
            );
          }
          showToastWithBigTitle() {
            this.toastService.create('\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435', {
              appearance: this.appearance,
              position: this.formControl.value,
              timer: 5e3,
              title:
                " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.Y36(a.hGm));
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['prizm-message-danger-example']],
            decls: 25,
            vars: 1,
            consts: [
              [1, 'box'],
              ['prizmButton', '', 3, 'click'],
              ['contentTemplate', ''],
              ['headerTemplate', ''],
              [2, 'display', 'flex', 'gap', '1rem', 'flex-wrap', 'wrap'],
              [3, 'formControl', 'label', 'name', 'value', 4, 'ngFor', 'ngForOf'],
              [1, 'date'],
              [1, 'link-content'],
              ['href', '#'],
              [1, 'footer'],
              [1, 'header-title'],
              [1, 'title'],
              [1, 'link'],
              [3, 'formControl', 'label', 'name', 'value'],
            ],
            template: function (e, o) {
              if (1 & e) {
                const s = t.EpF();
                t.TgZ(0, 'div', 0)(1, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToast();
                  }),
                  t._uU(2, '\u0421 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c'),
                  t.qZA(),
                  t.TgZ(3, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTitle();
                  }),
                  t._uU(4, '\u0411\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430'),
                  t.qZA(),
                  t.TgZ(5, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigText();
                  }),
                  t._uU(6, '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442'),
                  t.qZA(),
                  t.TgZ(7, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigTitle();
                  }),
                  t._uU(
                    8,
                    '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'
                  ),
                  t.qZA(),
                  t.TgZ(9, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTimer();
                  }),
                  t._uU(10, '\u0411\u0435\u0437 \u0442\u0430\u0439\u043c\u0435\u0440\u0430'),
                  t.qZA(),
                  t.TgZ(11, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(16);
                    return t.KtG(o.showToastWithContentTemplate(l));
                  }),
                  t._uU(
                    12,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c'
                  ),
                  t.qZA(),
                  t.TgZ(13, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(18);
                    return t.KtG(o.showToastWithHeaderTemplate(l));
                  }),
                  t._uU(
                    14,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435'
                  ),
                  t.qZA(),
                  t.YNc(15, Q, 10, 0, 'ng-template', null, 2, t.W1O),
                  t.YNc(17, V, 6, 0, 'ng-template', null, 3, t.W1O),
                  t.qZA(),
                  t._UZ(19, 'br')(20, 'hr'),
                  t.TgZ(21, 'p'),
                  t._uU(22, 'Position'),
                  t.qZA(),
                  t.TgZ(23, 'div', 4),
                  t.YNc(24, X, 1, 4, 'prizm-radio-button', 5),
                  t.qZA();
              }
              2 & e && (t.xp6(24), t.Q6J('ngForOf', o.data));
            },
            dependencies: [m.sg, T.K, h.J, p.JJ, p.oH],
            styles: [
              '.box[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}a[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-link);text-decoration:underline;font-weight:500}.link-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400}.footer[_ngcontent-%COMP%]{margin-top:8px}.date[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-tertiary);margin:8px 0}.header-title[_ngcontent-%COMP%]{width:400px;display:flex;justify-content:space-between;gap:30px}.header-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:inherit;font-size:inherit}',
            ],
          })),
          n
        );
      })();
      function $(n, u) {
        if (1 & n) {
          const e = t.EpF();
          t.TgZ(0, 'div'),
            t._uU(
              1,
              '\u0412 toast-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 2 \u0441\u0442\u0440\u043e\u043a\u0438.'
            ),
            t.qZA(),
            t.TgZ(2, 'div', 11),
            t._uU(3, '16.05.2022 10:00'),
            t.qZA(),
            t.TgZ(4, 'div', 12)(5, 'a', 13),
            t._uU(6, '\u0421\u0441\u044b\u043b\u043a\u0430'),
            t.qZA()(),
            t.TgZ(7, 'div', 14)(8, 'button', 1),
            t.NdJ('click', function () {
              const r = t.CHM(e).close;
              return t.KtG(r());
            }),
            t._uU(9, '\u0417\u0430\u043a\u0440\u044b\u0442\u044c'),
            t.qZA()();
        }
      }
      function tt(n, u) {
        1 & n &&
          (t.TgZ(0, 'div', 15)(1, 'span', 16),
          t._uU(2, '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
          t.qZA(),
          t.TgZ(3, 'span', 17)(4, 'a', 13),
          t._uU(5, '\u0421\u0441\u044b\u043b\u043a\u0430'),
          t.qZA()()());
      }
      function et(n, u) {
        if ((1 & n && t._UZ(0, 'prizm-radio-button', 18), 2 & n)) {
          const e = u.$implicit,
            o = t.oxw();
          t.Gre('toast-position-button-', e.val, ''),
            t.Q6J('formControl', o.formControl)('label', e.label)('name', o.appearance)('value', e.val);
        }
      }
      let nt = (() => {
        class n {
          constructor(e) {
            (this.toastService = e),
              (this.containerId = 'inline-container-secondary'),
              (this.data = [
                { val: a.LW3.TOP_MIDDLE, label: 'Top Middle' },
                { val: a.LW3.TOP_LEFT, label: 'Top Left' },
                { val: a.LW3.TOP_RIGHT, label: 'Top Right' },
                { val: a.LW3.BOTTOM_MIDDLE, label: 'Bottom Middle' },
                { val: a.LW3.BOTTOM_LEFT, label: 'Bottom Left' },
                { val: a.LW3.BOTTOM_RIGHT, label: 'Bottom Right' },
                {
                  val: this.containerId,
                  label:
                    '\u0412 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u043c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435',
                },
              ]),
              (this.appearance = 'secondary'),
              (this.formControl = new p.p4(a.LW3.TOP_RIGHT));
          }
          showToast() {
            this.toastService.create('Hello #' + Math.random(), {
              appearance: this.appearance,
              position: this.formControl.value,
              title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
            });
          }
          showToastWithoutTitle() {
            this.toastService.create(
              '\u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 1 \u0441\u0442\u0440\u043e\u043a\u0443.',
              { timer: 5e3, appearance: this.appearance, position: this.formControl.value }
            );
          }
          showToastWithoutTimer() {
            this.toastService.create(
              '\u042d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0435.',
              {
                timer: 0,
                appearance: this.appearance,
                title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                position: this.formControl.value,
              }
            );
          }
          showWithId() {
            this.toastService.create(
              '\u042d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e\u043a\u0430 \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0435.',
              {
                timer: 0,
                id: 'our-id-1',
                appearance: this.appearance,
                title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                position: this.formControl.value,
              }
            );
          }
          updateContentWithId() {
            this.toastService.updateContent(
              'our-id-1',
              '\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u2116' +
                Math.random()
            );
          }
          updateTitleWithId(e) {
            this.toastService.updateTitle('our-id-1', e);
          }
          closeWithId() {
            this.toastService.delete('our-id-1');
          }
          closeAll() {
            this.toastService.deleteAll();
          }
          showToastWithBigText() {
            this.toastService.create(
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              {
                timer: 5e3,
                appearance: this.appearance,
                title:
                  '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
                position: this.formControl.value,
              }
            );
          }
          showToastWithContentTemplate(e) {
            this.toastService.create(e, {
              timer: 5e3,
              appearance: this.appearance,
              title:
                '\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c \u043e\u0447\u0435\u043d\u044c',
              position: this.formControl.value,
            });
          }
          showToastWithHeaderTemplate(e) {
            this.toastService.create(
              '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435',
              { timer: 0, appearance: this.appearance, title: e, position: this.formControl.value }
            );
          }
          showToastWithBigTitle() {
            this.toastService.create('\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435', {
              timer: 5e3,
              appearance: this.appearance,
              position: this.formControl.value,
              title:
                " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            });
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(t.Y36(a.hGm));
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['prizm-message-secondary-example']],
            decls: 41,
            vars: 2,
            consts: [
              [1, 'box'],
              ['prizmButton', '', 3, 'click'],
              ['prizmButton', '', 1, 'show-toast-by-id', 3, 'click'],
              ['prizmButton', '', 1, 'close-toast-by-id', 3, 'click'],
              ['prizmButton', '', 1, 'close-all-toast', 3, 'click'],
              ['contentTemplate', ''],
              ['headerTemplate', ''],
              [1, 'inline-container'],
              [3, 'containerId'],
              [2, 'display', 'flex', 'gap', '1rem', 'flex-wrap', 'wrap'],
              [3, 'class', 'formControl', 'label', 'name', 'value', 4, 'ngFor', 'ngForOf'],
              [1, 'date'],
              [1, 'link-content'],
              ['href', '#'],
              [1, 'footer'],
              [1, 'header-title'],
              [1, 'title'],
              [1, 'link'],
              [3, 'formControl', 'label', 'name', 'value'],
            ],
            template: function (e, o) {
              if (1 & e) {
                const s = t.EpF();
                t.TgZ(0, 'div', 0)(1, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToast();
                  }),
                  t._uU(2, '\u0421 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c'),
                  t.qZA(),
                  t.TgZ(3, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTitle();
                  }),
                  t._uU(4, '\u0411\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430'),
                  t.qZA(),
                  t.TgZ(5, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigText();
                  }),
                  t._uU(6, '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442'),
                  t.qZA(),
                  t.TgZ(7, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithBigTitle();
                  }),
                  t._uU(
                    8,
                    '\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'
                  ),
                  t.qZA(),
                  t.TgZ(9, 'button', 1),
                  t.NdJ('click', function () {
                    return o.showToastWithoutTimer();
                  }),
                  t._uU(10, '\u0411\u0435\u0437 \u0442\u0430\u0439\u043c\u0435\u0440\u0430'),
                  t.qZA(),
                  t.TgZ(11, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(26);
                    return t.KtG(o.showToastWithContentTemplate(l));
                  }),
                  t._uU(
                    12,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c'
                  ),
                  t.qZA(),
                  t.TgZ(13, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(28);
                    return t.KtG(o.showToastWithHeaderTemplate(l));
                  }),
                  t._uU(
                    14,
                    '\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435'
                  ),
                  t.qZA(),
                  t.TgZ(15, 'button', 2),
                  t.NdJ('click', function () {
                    return o.showWithId();
                  }),
                  t._uU(16, '(*) \u041f\u043e\u043a\u0430\u0437 \u043f\u043e id'),
                  t.qZA(),
                  t.TgZ(17, 'button', 1),
                  t.NdJ('click', function () {
                    return o.updateContentWithId();
                  }),
                  t._uU(
                    18,
                    '(*) \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u043e id'
                  ),
                  t.qZA(),
                  t.TgZ(19, 'button', 1),
                  t.NdJ('click', function () {
                    t.CHM(s);
                    const l = t.MAs(28);
                    return t.KtG(o.updateTitleWithId(l));
                  }),
                  t._uU(20, '(*) \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c title \u043f\u043e id'),
                  t.qZA(),
                  t.TgZ(21, 'button', 3),
                  t.NdJ('click', function () {
                    return o.closeWithId();
                  }),
                  t._uU(22, '(*) \u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e id'),
                  t.qZA(),
                  t.TgZ(23, 'button', 4),
                  t.NdJ('click', function () {
                    return o.closeAll();
                  }),
                  t._uU(24, '(*) \u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u0435'),
                  t.qZA(),
                  t.YNc(25, $, 10, 0, 'ng-template', null, 5, t.W1O),
                  t.YNc(27, tt, 6, 0, 'ng-template', null, 6, t.W1O),
                  t.qZA(),
                  t._UZ(29, 'br')(30, 'hr'),
                  t.TgZ(31, 'div', 7)(32, 'p'),
                  t._uU(33, 'Inline Container'),
                  t.qZA(),
                  t._UZ(34, 'prizm-toast-container', 8),
                  t.qZA(),
                  t._UZ(35, 'br')(36, 'hr'),
                  t.TgZ(37, 'p'),
                  t._uU(38, 'Position'),
                  t.qZA(),
                  t.TgZ(39, 'div', 9),
                  t.YNc(40, et, 1, 7, 'prizm-radio-button', 10),
                  t.qZA();
              }
              2 & e && (t.xp6(34), t.Q6J('containerId', o.containerId), t.xp6(6), t.Q6J('ngForOf', o.data));
            },
            dependencies: [m.sg, T.K, h.J, p.JJ, p.oH, Z.h],
            styles: [
              '.box[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}a[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-link);text-decoration:underline;font-weight:500}.link-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400}.footer[_ngcontent-%COMP%]{margin-top:8px}.inline-container[_ngcontent-%COMP%]{border:1px solid black;padding:10px}.date[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-tertiary);margin:8px 0}.header-title[_ngcontent-%COMP%]{width:400px;display:flex;justify-content:space-between;gap:30px}.header-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:inherit;font-size:inherit}',
            ],
          })),
          n
        );
      })();
      function ot(n, u) {
        if (
          (1 & n &&
            (t.TgZ(0, 'prizm-doc-example', 4),
            t._UZ(1, 'prizm-message-info-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 5),
            t._UZ(3, 'prizm-message-warning-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 6),
            t._UZ(5, 'prizm-message-success-example'),
            t.qZA(),
            t.TgZ(6, 'prizm-doc-example', 7),
            t._UZ(7, 'prizm-message-danger-example'),
            t.qZA(),
            t.TgZ(8, 'prizm-doc-example', 8),
            t._UZ(9, 'prizm-message-secondary-example'),
            t.qZA(),
            t.TgZ(10, 'prizm-doc-example', 9),
            t._UZ(11, 'prizm-toast-example'),
            t.qZA(),
            t.TgZ(12, 'prizm-doc-example', 10),
            t._UZ(13, 'prizm-toast-inner-html-example'),
            t.qZA()),
          2 & n)
        ) {
          const e = t.oxw();
          t.Q6J('content', e.exampleMessageInfo),
            t.xp6(2),
            t.Q6J('content', e.exampleMessageWarning),
            t.xp6(2),
            t.Q6J('content', e.exampleMessageSuccess),
            t.xp6(2),
            t.Q6J('content', e.exampleMessageDanger),
            t.xp6(2),
            t.Q6J('content', e.exampleMessageSecondary),
            t.xp6(2),
            t.Q6J('content', e.exampleToast),
            t.xp6(2),
            t.Q6J('content', e.exampleInnerHtml);
        }
      }
      function at(n, u) {
        1 & n && t._uU(0, ' Container Id ');
      }
      function it(n, u) {
        1 & n && t._uU(0, ' Position place ');
      }
      function ut(n, u) {
        1 & n && (t.TgZ(0, 'a', 18), t._uU(1, '\u0421\u0441\u044b\u043b\u043a\u0430'), t.qZA());
      }
      function rt(n, u) {
        if (1 & n) {
          const e = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'button', 11),
            t.NdJ('click', function () {
              t.CHM(e);
              const s = t.oxw();
              return t.KtG(s.showToast());
            }),
            t._uU(2, '\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u0441\u0442'),
            t.qZA(),
            t.TgZ(3, 'div')(4, 'p'),
            t._uU(5, 'Container inline'),
            t.qZA(),
            t._UZ(6, 'prizm-toast-container', 12, 13),
            t.qZA()(),
            t.TgZ(8, 'prizm-doc-documentation', 14),
            t.YNc(9, at, 1, 0, 'ng-template', 15),
            t.YNc(10, it, 1, 0, 'ng-template', 16),
            t.NdJ('documentationPropertyValueChange', function (s) {
              t.CHM(e);
              const r = t.oxw();
              return t.KtG((r.position = s));
            }),
            t.YNc(11, ut, 2, 0, 'ng-template', null, 17, t.W1O),
            t.qZA();
        }
        if (2 & n) {
          const e = t.MAs(7),
            o = t.oxw();
          t.xp6(6),
            t.Q6J('prizmDocHostElement', e)('containerId', o.containerId),
            t.xp6(4),
            t.Q6J('documentationPropertyValue', o.position)(
              'documentationPropertyValues',
              o.positionVariants
            );
        }
      }
      function st(n, u) {
        if (
          (1 & n &&
            (t.TgZ(0, 'ol', 19)(1, 'li')(2, 'p'),
            t._uU(3, ' Import '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmToastModule'),
            t.qZA(),
            t._uU(6, ' into a module where you want to use our toasts '),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 20),
            t.qZA()()),
          2 & n)
        ) {
          const e = t.oxw();
          t.xp6(7), t.Q6J('code', e.setupModule);
        }
      }
      class _ {
        constructor(u) {
          (this.toastService = u),
            (this.setupModule = i.e(12210).then(i.t.bind(i, 12210, 17))),
            (this.exampleMessageInfo = {
              TypeScript: i.e(49909).then(i.t.bind(i, 49909, 17)),
              HTML: i.e(44340).then(i.t.bind(i, 44340, 17)),
            }),
            (this.exampleMessageWarning = {
              TypeScript: i.e(16884).then(i.t.bind(i, 16884, 17)),
              HTML: i.e(25058).then(i.t.bind(i, 25058, 17)),
            }),
            (this.exampleMessageDanger = {
              TypeScript: i.e(11218).then(i.t.bind(i, 11218, 17)),
              HTML: i.e(47261).then(i.t.bind(i, 47261, 17)),
            }),
            (this.exampleMessageSuccess = {
              TypeScript: i.e(43684).then(i.t.bind(i, 43684, 17)),
              HTML: i.e(27937).then(i.t.bind(i, 27937, 17)),
            }),
            (this.exampleMessageSecondary = {
              TypeScript: i.e(29543).then(i.t.bind(i, 29543, 17)),
              HTML: i.e(88928).then(i.t.bind(i, 88928, 17)),
            }),
            (this.exampleToast = {
              TypeScript: i.e(86325).then(i.t.bind(i, 86325, 17)),
              HTML: i.e(69046).then(i.t.bind(i, 69046, 17)),
            }),
            (this.exampleInnerHtml = {
              TypeScript: i.e(30150).then(i.t.bind(i, 30150, 17)),
              HTML: i.e(10162).then(i.t.bind(i, 10162, 17)),
            }),
            (this.appearanceVariants = ['info', 'success', 'warning', 'danger', 'secondary']),
            (this.appearance = this.appearanceVariants[0]),
            (this.containerId = 'test-inline-container'),
            (this.positionVariants = [
              a.LW3.TOP_RIGHT,
              a.LW3.TOP_LEFT,
              a.LW3.TOP_MIDDLE,
              a.LW3.BOTTOM_RIGHT,
              a.LW3.BOTTOM_LEFT,
              a.LW3.BOTTOM_MIDDLE,
              this.containerId,
            ]),
            (this.position = this.positionVariants[0]),
            (this.timer = 3e3),
            (this.isPlatform = !1),
            (this.id = ''),
            (this.title = '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
            (this.content = '\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435');
        }
        getContentVariants(u) {
          return [
            '\u041f\u0440\u0438\u0432\u0435\u0442',
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            'Lorem',
            u,
          ];
        }
        showToast() {
          this.toastService.create(this.content, {
            timer: this.timer,
            appearance: this.appearance,
            position: this.position,
            isPlatform: this.isPlatform,
            id: this.id,
            title: this.title,
          });
        }
      }
      (_.ɵfac = function (u) {
        return new (u || _)(t.Y36(a.hGm));
      }),
        (_.ɵcmp = t.Xpm({
          type: _,
          selectors: [['prizm-example-example']],
          decls: 6,
          vars: 0,
          consts: [
            ['header', 'Toast'],
            ['description', '', 1, 'page-description'],
            ['prizmDocPageTab', ''],
            ['prizmDocPageTab', '', 'prizmDocHost', ''],
            ['id', 'info-toast', 'heading', 'Info Message', 3, 'content'],
            ['id', 'warning-toast', 'heading', 'Warning Message', 3, 'content'],
            ['id', 'success-toast', 'heading', 'Success Message', 3, 'content'],
            ['id', 'danger-toast', 'heading', 'Danger Message', 3, 'content'],
            ['id', 'defult-toast', 'heading', 'Secondary Status Message', 3, 'content'],
            ['id', 'toast-platform', 'heading', 'Platform Toast', 3, 'content'],
            ['id', 'toast-inner-html', 'heading', 'Inner Html', 3, 'content'],
            ['prizmButton', '', 3, 'click'],
            [3, 'prizmDocHostElement', 'containerId'],
            ['element', ''],
            ['ha', ''],
            [
              'documentationPropertyName',
              'containerId',
              'documentationPropertyType',
              'string',
              'documentationPropertyMode',
              'input',
            ],
            [
              'documentationPropertyName',
              'position',
              'documentationPropertyType',
              'PrizmToastPosition',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            ['template', ''],
            ['href', ''],
            [1, 'b-demo-steps'],
            ['filename', 'custom.module.ts', 3, 'code'],
          ],
          template: function (u, e) {
            1 & u &&
              (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
              t._uU(2, ' Our toast component is a simple way to display a message to the user. '),
              t.qZA(),
              t.YNc(3, ot, 14, 7, 'ng-template', 2),
              t.YNc(4, rt, 13, 4, 'ng-template', 3),
              t.YNc(5, st, 8, 1, 'ng-template', 2),
              t.qZA());
          },
          dependencies: [C.c, E.F, x.K, b.N, A.W, z.l, y.a, M.w, O.k, T.K, Z.h, I, D, J, G, Y, j, nt],
          changeDetection: 0,
        })),
        (0, c.gn)(
          [
            v.zn,
            (0, c.w6)('design:type', Function),
            (0, c.w6)('design:paramtypes', [t.Rgc]),
            (0, c.w6)('design:returntype', Array),
          ],
          _.prototype,
          'getContentVariants',
          null
        );
      let lt = (() => {
        class n {}
        return (
          (n.ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({
            providers: [(0, a.Ny2)({ timer: 1e3 })],
            imports: [m.ez, d.Qp, a.KSn, a.J0d, p.u5, p.UX, a.M_I, f.Bz.forChild((0, d.GB)(_))],
          })),
          n
        );
      })();
    },
    57679: (P, g, i) => {
      i.d(g, { k: () => f });
      var m = i(65879),
        d = i(45773);
      let f = (() => {
        class c {
          constructor(a) {
            (this.hostElementService = a), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const a = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              v = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const C in a) this.hostElementService.setHostElement(a[C], v[C]);
          }
        }
        return (
          (c.ɵfac = function (a) {
            return new (a || c)(m.Y36(d.R));
          }),
          (c.ɵdir = m.lG2({
            type: c,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          c
        );
      })();
    },
    56586: (P, g, i) => {
      i.d(g, { w: () => f });
      var m = i(45773),
        d = i(65879);
      let f = (() => {
        class c {}
        return (
          (c.ɵfac = function (a) {
            return new (a || c)();
          }),
          (c.ɵdir = d.lG2({ type: c, selectors: [['', 'prizmDocHost', '']], features: [d._Bn([m.R])] })),
          c
        );
      })();
    },
  },
]);
