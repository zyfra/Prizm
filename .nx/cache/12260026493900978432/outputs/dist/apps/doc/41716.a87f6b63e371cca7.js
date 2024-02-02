'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [41716],
  {
    41716: (at, D, F) => {
      F.d(D, {
        LZ: () => k,
        Rn: () => j,
        gV: () => P,
        wn: () => b,
        Uw: () => V,
        b_: () => H,
        vf: () => W,
        Ff: () => $,
        Bp: () => I,
        tP: () => R,
        Yh: () => B,
        dj: () => _,
        cR: () => S,
        Xc: () => it,
        rO: () => st,
        rI: () => K,
        AR: () => E,
      });
      const G = [
          'area',
          'base',
          'basefont',
          'bgsound',
          'br',
          'col',
          'command',
          'embed',
          'frame',
          'hr',
          'image',
          'img',
          'input',
          'isindex',
          'keygen',
          'link',
          'menuitem',
          'meta',
          'nextid',
          'param',
          'source',
          'track',
          'wbr',
        ],
        L = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g,
        C = n => {
          const t = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
            e = n.match(/<\/?([^\s]+?)[/\s>]/);
          if (
            e &&
            ((t.name = e[1]),
            (t.voidElement = G.includes(e[1]) || '/' === n.charAt(n.length - 2)),
            t.name.startsWith('!--'))
          ) {
            const s = n.indexOf('--\x3e');
            return { type: 'comment', comment: -1 !== s ? n.slice(4, s) : '' };
          }
          const u = new RegExp(L);
          let r = null;
          for (; (r = u.exec(n)), null !== r; )
            if (r[0].trim())
              if (r[1]) {
                const s = r[1].trim();
                let i = [s, ''];
                s.indexOf('=') > -1 ? ((i = s.split('=')), (t.attrs[i[0]] = i[1])) : (t.attrs[i[0]] = null),
                  u.lastIndex--;
              } else r[2] && (t.attrs[r[2]] = r[3].trim().substring(1, r[3].length - 1));
          return t;
        },
        N = (n, t = {}) => {
          const e = (n => {
            const t = (n => n.trim().replace(/(^(\s|\t)+|(( |\t)+)$)/gm, ''))(n).split('\n'),
              e = [];
            let u = '';
            for (let r = 0; r < t.length; r += 1) {
              const s = t[r];
              s.endsWith('/>')
                ? (e.push(`${u}${s.slice(0, -2)} />`), (u = ''))
                : s.endsWith('>')
                ? (e.push(`${u}${s.startsWith('>') || s.startsWith('<') ? '' : ' '}${s}`), (u = ''))
                : (u += u.length ? ` ${s}` : s);
            }
            return e;
          })(n);
          let u = ((n, t = {}) => {
            const e = t.char || ' ',
              u = t.count || 2;
            let r = 0;
            const s = [];
            return n
              .reverse()
              .reduce((i, a) => {
                s.length && r && s[r] && s[r] === a.substring(1, s[r].length + 1) && (s.splice(r, 1), r--);
                const m = [`${e.repeat(r ? r * u : 0)}${a}`, ...i];
                return '</' === a.substring(0, 2) && (r++, (s[r] = a.substring(2, a.length - 1))), m;
              }, [])
              .join('\n');
          })(e, t);
          return !u && n && (u = n), u;
        },
        Y = /<[a-zA-Z0-9\-!/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
        q = /^\s*$/,
        J = Object.create(null),
        K = (n, t = {}) => {
          (n = N(n)), t || (t = {}), t.components || (t.components = J);
          const e = [],
            u = [];
          let r,
            s = -1,
            i = !1;
          if (0 !== n.indexOf('<')) {
            const a = n.indexOf('<');
            e.push({ type: 'text', content: -1 === a ? n : n.substring(0, a) });
          }
          return (
            n.replace(Y, function (a, l) {
              if (i) {
                if (a !== '</' + r.name + '>') return '';
                i = !1;
              }
              const m = '/' !== a.charAt(1),
                ct = a.startsWith('\x3c!--'),
                T = l + a.length,
                v = n.charAt(T);
              let p;
              if (ct) {
                const d = C(a);
                return s < 0
                  ? (e.push(d), e)
                  : ((p = u[s]), p && p.children && Array.isArray(p.children) && p.children.push(d), e);
              }
              if (
                (m &&
                  (s++,
                  (r = C(a)),
                  'tag' === r.type &&
                    r.name &&
                    t.components &&
                    t.components[r.name] &&
                    ((r.type = 'component'), (i = !0)),
                  !r.voidElement &&
                    !i &&
                    v &&
                    '<' !== v &&
                    Array.isArray(r.children) &&
                    r.children.push({ type: 'text', content: n.slice(T, n.indexOf('<', T)) }),
                  0 === s && e.push(r),
                  (p = u[s - 1]),
                  p && p.children && p.children.push(r),
                  (u[s] = r)),
                (!m || r.voidElement) &&
                  (s > -1 && (r.voidElement || r.name === a.slice(2, -1)) && (s--, (r = -1 === s ? e : u[s])),
                  !i && '<' !== v && v))
              ) {
                p = -1 === s ? e : u[s].children;
                const d = n.indexOf('<', T);
                let z = n.slice(T, -1 === d ? void 0 : d);
                q.test(z) && (z = ' '),
                  ((d > -1 && s + p.length >= 0) || ' ' !== z) &&
                    p &&
                    Array.isArray(p) &&
                    p.push({ type: 'text', content: z });
              }
            }),
            e
          );
        };
      function x(n, t) {
        switch (t.type) {
          case 'text':
            return n + t.content;
          case 'tag':
            return (
              (n +=
                '<' +
                t.name +
                (t.attrs
                  ? (function Q(n) {
                      const t = [];
                      for (const e in n) t.push(null === n[e] ? e : e + '="' + n[e] + '"');
                      return t.length ? ' ' + t.join(' ') : '';
                    })(t.attrs)
                  : '') +
                (t.voidElement ? '/>' : '>')),
              t.voidElement ? n : n + t.children.reduce(x, '') + '</' + t.name + '>'
            );
          case 'comment':
            return n + '\x3c!--' + t.comment + '--\x3e';
          default:
            return '';
        }
      }
      const E = (n, t = !0) => {
        let e = n.reduce(function (u, r) {
          return u + x('', r);
        }, '');
        return t && (e = N(e)), e;
      };
      var c = (function (n) {
        return (
          (n.input = 'input'),
          (n.inputVar = 'input-variable'),
          (n.inputOutput = 'input-output'),
          (n.output = 'output'),
          n
        );
      })(c || {});
      class o {
        create(t) {
          return { type: this.type, payload: t };
        }
      }
      function y(n) {
        return `[${n}]`;
      }
      function O(n) {
        return `(${n})`;
      }
      function f(n, t, e = [c.inputOutput, c.input, c.output, c.inputVar]) {
        if (!t || !n) return null;
        const u = A(n),
          r = (i, a) => (i in t ? { attrName: i, value: t[i], type: a } : null);
        if (e.includes(c.input)) {
          const i = r(u, c.input);
          if (i) return i;
        }
        if (e.includes(c.inputVar)) {
          const i = r(y(u), c.inputVar);
          if (i) return i;
        }
        if (e.includes(c.output)) {
          const i = r(O(u), c.output);
          if (i) return i;
        }
        return (i => {
          const a = h(i),
            l = g(i);
          return r(a, c.inputOutput) ?? r(l, c.inputOutput);
        })(u);
      }
      function w(n, t, e = [c.inputOutput, c.input, c.output, c.inputVar]) {
        return (
          !!t &&
          !!(
            ((e.includes(c.input) || e.includes(c.inputOutput)) && (n in t || h(n) in t || g(n) in t)) ||
            ((e.includes(c.inputVar) || e.includes(c.inputOutput)) &&
              (y(n) in t || h(n) in t || g(n) in t)) ||
            ((e.includes(c.output) || e.includes(c.inputOutput)) && (O(n) in t || h(n) in t || g(n) in t))
          )
        );
      }
      function h(n) {
        return `[(${n})]`;
      }
      function g(n) {
        return `([${n}])`;
      }
      function A(n) {
        return n.replace(/[[(\]) ]/g, '');
      }
      function st(n, t) {
        return new n().create(t);
      }
      class I extends o {
        constructor() {
          super(...arguments), (this.type = 'not-supported');
        }
        run(t, e, u) {
          const r = e.attr ?? u?.originName;
          if (!r) return t;
          const s = t.children ?? [];
          'inputs' === u.runIn && w(r, t.attrs);
          const i = [];
          'tasks' === u.runIn
            ? i.push(c.input, c.inputOutput, c.inputVar, c.output)
            : 'inputs' === u.runIn
            ? i.push(c.input, c.inputOutput, c.inputVar)
            : 'outputs' === u.runIn && i.push(c.output, c.inputOutput);
          const a = f(r, t.attrs, i);
          return (
            a && delete t.attrs[a.attrName],
            s.push({
              type: 'comment',
              comment: `TODO not supported attr <${a?.attrName ?? r}> in <${t.name}> with value <${
                a?.value
              }>`,
            }),
            e.extraComment && s.push({ type: 'comment', comment: e.extraComment }),
            (t.children = [...s]),
            { ...t }
          );
        }
      }
      class $ extends o {
        constructor() {
          super(...arguments), (this.type = 'move-to-content');
        }
        run(t, e, u) {
          const r = e.attr || u.originName;
          if (!r) return t;
          const s = (function nt(n, t) {
            const e = f((t = A(t)), n),
              u = e?.type,
              r = e?.value;
            switch (u) {
              case c.input:
                return r;
              case c.inputVar:
              case c.inputOutput:
                return `{{${r}}}`;
              default:
                return null;
            }
          })(t.attrs, r);
          return (
            (t.attrs = (function et(n, t) {
              const e = y((t = A(t))),
                u = O(t),
                r = h(t),
                s = g(t);
              return delete n[t], delete n[e], delete n[u], delete n[r], delete n[s], n;
            })(t.attrs, r)),
            e.notClearChildren || (t.children = []),
            s && t.children.push({ type: 'text', content: s }),
            { ...t }
          );
        }
      }
      class V extends o {
        constructor() {
          super(...arguments), (this.type = 'change-name');
        }
        run(t, e, u) {
          const { name: r } = e;
          return r ? { ...t, name: r } : t;
        }
      }
      class P extends o {
        constructor() {
          super(...arguments), (this.type = 'add-comment');
        }
        run(t, e, u) {
          const { comment: r } = e;
          if (!(e.attr ?? u?.originName)) return t;
          const i = t.children ?? [];
          return i.push({ type: 'comment', comment: r }), (t.children = i), { ...t };
        }
      }
      class k extends o {
        constructor() {
          super(...arguments), (this.type = 'add-attribute');
        }
        run(t, e, u) {
          const r = e.attr;
          if (!r) return t;
          const s = e.passValue && u.originName ? f(u.attrName, t.attrs)?.value : null;
          return { ...t, attrs: { ...t.attrs, [r]: s } };
        }
      }
      class B extends o {
        constructor() {
          super(...arguments), (this.type = 'rename');
        }
        run(t, e, u) {
          if (!e || !e.newAttrName) return t;
          e.oldAttrName && (e.oldAttrName = A(e.oldAttrName));
          let r = e.oldAttrName ?? u?.attrName;
          if (!u.runIn) return t;
          const s = f(r, u.sourceNode.attrs, 'outputs' === u.runIn ? [c.output] : [c.input, c.inputVar]);
          if (!s) return t;
          r = s.attrName;
          const i = (function rt(n, t) {
            switch (t) {
              case c.inputOutput:
                return h(n);
              case c.output:
                return O(n);
              case c.inputVar:
                return y(n);
              default:
                return n;
            }
          })(e.newAttrName, s?.type);
          return (
            (t.attrs[i] = 'value' in e ? e.value : s.value),
            (t !== u.sourceNode || r !== i) && delete u.sourceNode.attrs[r],
            e.needFixApi &&
              (t.children = [
                ...(t.children ?? []),
                {
                  type: 'comment',
                  comment: `TODO: ${r} > ${e.newAttrName} has different api, please manually fix it here`,
                },
              ]),
            { ...t }
          );
        }
      }
      class W extends o {
        constructor() {
          super(...arguments), (this.type = 'move-content-to-component');
        }
        run(t, e, u) {
          if (!e.name) return t;
          const s = {
            name: e.name,
            attrs: e.attrs ?? {},
            children: e.children ?? [],
            type: e.type ?? 'tag',
            voidElement: e.voidElement ?? !1,
          };
          return s.children.push(...(t.children ?? [])), (t.children = [s]), { ...t };
        }
      }
      class R extends o {
        constructor() {
          super(...arguments), (this.type = 'remove-attribute');
        }
        run(t, e, u) {
          const r = e.attr ?? u?.originName;
          if (!r) return t;
          const s = [];
          'tasks' === u.runIn
            ? s.push(c.input, c.inputOutput, c.inputVar, c.output)
            : 'inputs' === u.runIn
            ? s.push(c.input, c.inputOutput, c.inputVar)
            : 'outputs' === u.runIn && s.push(c.output, c.inputOutput);
          const i = f(r, t.attrs, s);
          return i && delete t.attrs[i.attrName], { ...t };
        }
      }
      class j extends o {
        constructor() {
          super(...arguments), (this.type = 'add-children');
        }
        run(t, e, u) {
          if (!e.name) return t;
          const s = {
            name: e.name,
            attrs: { ...(e.attrs ?? {}) },
            children: e.children ?? [],
            type: e.type ?? 'tag',
            voidElement: e.voidElement ?? !1,
          };
          return s.children.push(...(t.children ?? [])), (t.children = [s]), { ...t };
        }
      }
      class H extends o {
        constructor() {
          super(...arguments), (this.type = 'comment-content');
        }
        run(t, e, u) {
          const r = E(t.children ?? []);
          return r && (t.children = [{ type: 'comment', comment: r }]), { ...t };
        }
      }
      class ut {
        constructor() {
          this.storageByType = new Map();
        }
        setByType(t, e) {
          this.storageByType.set(t, e);
        }
        get obj() {
          return Object.fromEntries(this.storageByType.entries());
        }
        updateByType(t, e) {
          const u = this.getByType(t) ?? {};
          this.setByType(t, { ...u, ...e });
        }
        getByType(t) {
          return this.storageByType.get(t) ?? null;
        }
        clear() {
          this.storageByType.clear();
        }
      }
      const M = 'save-to-call-on-demand';
      class S extends o {
        constructor() {
          super(...arguments), (this.type = M);
        }
        run(t, e, u) {
          return u.storage.updateByType(this.type, { [e.id]: { action: e.action, context: u } }), { ...t };
        }
      }
      class b extends o {
        constructor() {
          super(...arguments), (this.type = 'call-with-new-source');
        }
        run(t, e, u) {
          const r = u.storage.getByType(M),
            s = Array.isArray(e.id) ? e.id : [e.id];
          for (const i of s) {
            const a = r?.[i];
            a &&
              (t = u.processor.runAction(t, a.action, ({ task: l }) => ({
                task: l,
                sourceNode: a.context.sourceNode,
                ...a.context,
              })));
          }
          return { ...t };
        }
      }
      class _ extends o {
        constructor() {
          super(...arguments), (this.type = 'run-tasks-on-node');
        }
        run(t, e, u) {
          const r = e.tasks ?? [];
          if (!e.dontRunOnOnMain) for (const s of r) t = u.processor.processAction(t, s, u);
          if (e.runOnChildren) {
            const s = t.children ?? [];
            for (const i in s) s[i] = this.run(s[i], { ...e, dontRunOnOnMain: !1 }, u);
            t.children = s;
          }
          return { ...t };
        }
      }
      class it {
        constructor(t) {
          (this.tasks = t),
            (this.storage = new ut()),
            (this.defaultTasks = [
              new b(),
              new _(),
              new k(),
              new j(),
              new I(),
              new $(),
              new H(),
              new R(),
              new S(),
              new B(),
              new P(),
              new V(),
              new W(),
            ]);
        }
        nodeNeedToChange(t, e) {
          return 'string' == typeof e.selector
            ? t.name === e.selector
            : !!Array.isArray(e.selector) &&
                !!e.selector.find(
                  u =>
                    'byAttr' === u.type &&
                    !Object.entries(u.attrs)
                      .map(([s, i]) => {
                        const a = f(s, t.attrs);
                        return !(!a || (void 0 !== i && a.value !== i));
                      })
                      .includes(!1)
                );
        }
        runAction(t, e, u) {
          try {
            const r = this.defaultTasks.find(s => s.type === e.type);
            r && (t = r.run(t, e.payload, u({ task: r, sourceNode: t })));
          } catch (r) {
            console.error('Warning:prizm-template-task:runAction', r);
          }
          return t;
        }
        needToChange(t, e = this.tasks) {
          return !(
            !t ||
            !Array.isArray(t) ||
            !t.find(u => {
              for (const r of this.tasks) if (this.nodeNeedToChange(u, r)) return !0;
              return !1;
            })
          );
        }
        clear() {
          this.storage.clear();
        }
        processAction(t, e, u) {
          let r;
          return (
            this.nodeNeedToChange(t, e) &&
              ((r = { ...t }),
              e.tasks.forEach(s => {
                r = this.runAction(r, s, ({ task: i, sourceNode: a }) =>
                  this.generateContext(null, 'tasks', a, i, u)
                );
              }),
              e.defaultInputs &&
                Object.entries(e.defaultInputs).forEach(([s, i]) => {
                  t.attrs[s] ||
                    t.attrs[`[${s}]`] ||
                    t.attrs[`[(${s})]`] ||
                    t.attrs[`([${s}])`] ||
                    ('string' != typeof i && (s = `[${s}]`), (t.attrs[s] = i));
                }),
              e.inputs &&
                Object.entries(e.inputs).forEach(([s, i]) => {
                  w(s, t.attrs, [c.input, c.inputVar, c.inputOutput]) &&
                    i.forEach(a => {
                      r = this.runAction(r, a, ({ task: l, sourceNode: m }) =>
                        this.generateContext(s, 'inputs', m, l, u)
                      );
                    });
                }),
              e.outputs &&
                Object.entries(e.outputs).forEach(([s, i]) => {
                  w(s, t.attrs, [c.output, c.inputOutput]) &&
                    i.forEach(a => {
                      r = this.runAction(r, a, ({ task: l, sourceNode: m }) =>
                        this.generateContext(s, 'outputs', m, l, u)
                      );
                    });
                }),
              (t = r)),
            (t.children = t.children?.map(s => this.processAction(s, e, u)) ?? []),
            r &&
              e.finishTasks?.forEach(s => {
                r = this.runAction(r, s, ({ task: i, sourceNode: a }) =>
                  this.generateContext(null, 'tasks', a, i, u)
                );
              }),
            t
          );
        }
        processTasks(t) {
          return t.map(e => {
            for (const u of this.tasks) e = this.processAction(e, u, {});
            return e;
          });
        }
        generateContext(t, e, u, r, s) {
          return {
            attrName: t && A(t),
            originName: t,
            runIn: e,
            sourceNode: u,
            storage: this.storage,
            task: r,
            processor: this,
            type:
              t &&
              ((n = t),
              (n = n.trim()).startsWith('[')
                ? c.inputVar
                : n.startsWith('([') || n.startsWith('[(')
                ? c.inputOutput
                : n.startsWith('(')
                ? c.output
                : c.input),
            ...(s ?? {}),
          };
          var n;
        }
      }
    },
  },
]);
