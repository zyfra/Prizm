'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [37474],
  {
    37474: (v, d, o) => {
      o.r(d), o.d(d, { ChangelogModule: () => f });
      var m = o(96814),
        l = o(75187),
        t = o(21004),
        i = o(21156),
        g = o(22096),
        s = o(94664),
        e = o(65879),
        c = o(63796);
      let h = (() => {
          class n {
            constructor() {
              this.changelog = (0, g.of)(o.e(21583).then(o.t.bind(o, 21583, 17))).pipe((0, s.w)(t.IM));
            }
          }
          return (
            (n.ɵfac = function (r) {
              return new (r || n)();
            }),
            (n.ɵcmp = e.Xpm({
              type: n,
              selectors: [['prizm-changelog']],
              decls: 3,
              vars: 3,
              consts: [
                ['header', 'Changelog', 1, 'info-page'],
                ['lineNumbers', '', 3, 'data'],
              ],
              template: function (r, p) {
                1 & r && (e.TgZ(0, 'prizm-doc-page', 0), e._UZ(1, 'markdown', 1), e.ALo(2, 'async'), e.qZA()),
                  2 & r && (e.xp6(1), e.Q6J('data', e.lcZ(2, 1, p.changelog) || ''));
              },
              dependencies: [i.lF, c.W, m.Ov],
              styles: [
                'markdown>:nth-child(1),markdown>:nth-child(2){display:none}markdown>*{margin-left:1.25rem}markdown a{text-decoration:none;color:var(--prizm-v3-text-icon-link)}markdown a:hover,markdown a:active{color:var(--prizm-v3-text-icon-link-hover)}markdown h2{font-size:2em;padding-bottom:.5em;margin-left:0;margin-top:4rem;border-bottom:1px solid var(--prizm-base-03)}markdown h3{text-transform:uppercase;font-weight:400;font-size:1.5rem;margin:1rem 0}markdown h3:not([id^="feat"]):not([id^="bug"]):not([id^="deprecations"]){font-size:1.75rem;padding-bottom:.5em;margin:2rem 0 0;border-bottom:1px solid var(--prizm-base-03)}markdown h3[id^=breaking]{margin-left:1.25rem;color:var(--prizm-v3-status-alarm-primary-default)}markdown code{color:#d45d8c}markdown h3[id^=feat]:before{content:"\\1f680"}markdown h3[id^=bug]:before{content:"\\1f41e"}markdown h3[id^=deprecations]:before{content:"\\26a0\\fe0f"}markdown h3[id^=feat]:before,markdown h3[id^=bug]:before,markdown h3[id^=deprecations]:before{margin-right:.5rem}markdown li{position:relative;padding-left:1.5rem;word-wrap:break-word;margin-top:.75rem}markdown li:before{content:"";position:absolute;left:0;top:.5rem;width:.5rem;height:.5rem;border-radius:100%;background-color:var(--prizm-v3-status-info-primary-default)}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            n
          );
        })(),
        f = (() => {
          class n {}
          return (
            (n.ɵfac = function (r) {
              return new (r || n)();
            }),
            (n.ɵmod = e.oAB({ type: n })),
            (n.ɵinj = e.cJS({ imports: [m.ez, i.JP, t.Qp, l.Bz.forChild((0, t.GB)(h))] })),
            n
          );
        })();
    },
  },
]);
