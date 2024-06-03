import {
    s as Z,
    i as $,
    r as x,
    n as ee,
    e as te,
  } from "./scheduler.DQm6Vmd6.js";
  import {
    v as P,
    w as se,
    S as ne,
    i as le,
    e as w,
    s as T,
    a as k,
    b as v,
    c as j,
    d as b,
    f as _,
    g as p,
    k as E,
    x as S,
    m as h,
    y as U,
    n as y,
    z as N,
    o as K,
    t as V,
    p as L,
    j as A,
    A as z,
    q as Q,
    l as q,
    r as R,
  } from "./index.BJzYF_Wp.js";
  import { w as ie } from "./index.BG5xY8LR.js";
  import { i as O, I as W } from "./NotificationToast.CW_BnK-u.js";
  import "./client.ttIRTM6M.js";
  function B(e, t, s, o) {
    if (typeof s == "number" || O(s)) {
      const i = o - s,
        a = (s - t) / (e.dt || 1 / 60),
        f = e.opts.stiffness * i,
        l = e.opts.damping * a,
        n = (f - l) * e.inv_mass,
        r = (a + n) * e.dt;
      return Math.abs(r) < e.opts.precision && Math.abs(i) < e.opts.precision
        ? o
        : ((e.settled = !1), O(s) ? new Date(s.getTime() + r) : s + r);
    } else {
      if (Array.isArray(s)) return s.map((i, a) => B(e, t[a], s[a], o[a]));
      if (typeof s == "object") {
        const i = {};
        for (const a in s) i[a] = B(e, t[a], s[a], o[a]);
        return i;
      } else throw new Error(`Cannot spring ${typeof s} values`);
    }
  }
  function re(e, t = {}) {
    const s = ie(e),
      { stiffness: o = 0.15, damping: i = 0.8, precision: a = 0.01 } = t;
    let f,
      l,
      n,
      r = e,
      u = e,
      m = 1,
      d = 0,
      c = !1;
    function H(M, g = {}) {
      u = M;
      const X = (n = {});
      return e == null || g.hard || (I.stiffness >= 1 && I.damping >= 1)
        ? ((c = !0), (f = P()), (r = M), s.set((e = u)), Promise.resolve())
        : (g.soft && ((d = 1 / ((g.soft === !0 ? 0.5 : +g.soft) * 60)), (m = 0)),
          l ||
            ((f = P()),
            (c = !1),
            (l = se((C) => {
              if (c) return (c = !1), (l = null), !1;
              m = Math.min(m + d, 1);
              const D = {
                  inv_mass: m,
                  opts: I,
                  settled: !0,
                  dt: ((C - f) * 60) / 1e3,
                },
                Y = B(D, r, e, u);
              return (
                (f = C),
                (r = e),
                s.set((e = Y)),
                D.settled && (l = null),
                !D.settled
              );
            }))),
          new Promise((C) => {
            l.promise.then(() => {
              X === n && C();
            });
          }));
    }
    const I = {
      set: H,
      update: (M, g) => H(M(u, e), g),
      subscribe: s.subscribe,
      stiffness: o,
      damping: i,
      precision: a,
    };
    return I;
  }
  function F(e) {
    let t, s, o, i, a, f;
    return (
      (s = new W({
        props: { type: "arrow-right", fillClass: "fill-secondary-brand" },
      })),
      {
        c() {
          (t = w("div")),
            K(s.$$.fragment),
            (o = T()),
            (i = w("div")),
            (a = V(e[1])),
            this.h();
        },
        l(l) {
          t = k(l, "DIV", { class: !0, style: !0 });
          var n = v(t);
          L(s.$$.fragment, n),
            n.forEach(b),
            (o = j(l)),
            (i = k(l, "DIV", { class: !0 }));
          var r = v(i);
          (a = A(r, e[1])), r.forEach(b), this.h();
        },
        h() {
          _(
            t,
            "class",
            "flex absolute ml-2 size-8 bg-white rounded-full items-center content-center justify-center flipped svelte-dfadzr"
          ),
            z(t, "transform", "translate(" + e[5] + "%, 0%)"),
            _(i, "class", "body-semibold leading-none px-2 lg:ml-8");
        },
        m(l, n) {
          p(l, t, n), Q(s, t, null), p(l, o, n), p(l, i, n), E(i, a), (f = !0);
        },
        p(l, n) {
          (!f || n & 32) && z(t, "transform", "translate(" + l[5] + "%, 0%)"),
            (!f || n & 2) && q(a, l[1]);
        },
        i(l) {
          f || (h(s.$$.fragment, l), (f = !0));
        },
        o(l) {
          y(s.$$.fragment, l), (f = !1);
        },
        d(l) {
          l && (b(t), b(o), b(i)), R(s);
        },
      }
    );
  }
  function G(e) {
    let t, s, o, i, a, f;
    return (
      (a = new W({
        props: { type: "arrow-right", fillClass: "fill-secondary-brand" },
      })),
      {
        c() {
          (t = w("div")),
            (s = V(e[1])),
            (o = T()),
            (i = w("div")),
            K(a.$$.fragment),
            this.h();
        },
        l(l) {
          t = k(l, "DIV", { class: !0 });
          var n = v(t);
          (s = A(n, e[1])),
            n.forEach(b),
            (o = j(l)),
            (i = k(l, "DIV", { class: !0, style: !0 }));
          var r = v(i);
          L(a.$$.fragment, r), r.forEach(b), this.h();
        },
        h() {
          _(t, "class", "body-semibold leading-none px-2 lg:mr-8"),
            _(
              i,
              "class",
              "flex absolute right-0 mr-2 size-8 bg-white rounded-full items-center content-center justify-center"
            ),
            z(i, "transform", "translate(" + e[5] + "%, 0%)");
        },
        m(l, n) {
          p(l, t, n), E(t, s), p(l, o, n), p(l, i, n), Q(a, i, null), (f = !0);
        },
        p(l, n) {
          (!f || n & 2) && q(s, l[1]),
            (!f || n & 32) && z(i, "transform", "translate(" + l[5] + "%, 0%)");
        },
        i(l) {
          f || (h(a.$$.fragment, l), (f = !0));
        },
        o(l) {
          y(a.$$.fragment, l), (f = !1);
        },
        d(l) {
          l && (b(t), b(o), b(i)), R(a);
        },
      }
    );
  }
  function J(e) {
    let t, s;
    return {
      c() {
        (t = w("div")), (s = V(e[1])), this.h();
      },
      l(o) {
        t = k(o, "DIV", { class: !0 });
        var i = v(t);
        (s = A(i, e[1])), i.forEach(b), this.h();
      },
      h() {
        _(t, "class", "body-semibold leading-none px-2");
      },
      m(o, i) {
        p(o, t, i), E(t, s);
      },
      p(o, i) {
        i & 2 && q(s, o[1]);
      },
      d(o) {
        o && b(t);
      },
    };
  }
  function oe(e) {
    let t,
      s,
      o,
      i,
      a,
      f,
      l,
      n = e[2] == "left" && F(e),
      r = e[2] == "right" && G(e),
      u = e[2] == null && J(e);
    return {
      c() {
        (t = w("button")),
          n && n.c(),
          (s = T()),
          r && r.c(),
          (o = T()),
          u && u.c(),
          this.h();
      },
      l(m) {
        t = k(m, "BUTTON", { class: !0 });
        var d = v(t);
        n && n.l(d),
          (s = j(d)),
          r && r.l(d),
          (o = j(d)),
          u && u.l(d),
          d.forEach(b),
          this.h();
      },
      h() {
        _(
          t,
          "class",
          (i =
            "flex " +
            e[3] +
            " " +
            (e[3] === "filled" && "btn btn-primary") +
            " box-border items-center justify-between relative px-4 py-4 w-full h-12 rounded-full cursor-pointer svelte-dfadzr")
        );
      },
      m(m, d) {
        p(m, t, d),
          n && n.m(t, null),
          E(t, s),
          r && r.m(t, null),
          E(t, o),
          u && u.m(t, null),
          (a = !0),
          f ||
            ((l = [
              S(t, "click", function () {
                $(e[0]) && e[0].apply(this, arguments);
              }),
              S(t, "mouseenter", e[6]),
              S(t, "mouseleave", e[7]),
            ]),
            (f = !0));
      },
      p(m, [d]) {
        (e = m),
          e[2] == "left"
            ? n
              ? (n.p(e, d), d & 4 && h(n, 1))
              : ((n = F(e)), n.c(), h(n, 1), n.m(t, s))
            : n &&
              (U(),
              y(n, 1, 1, () => {
                n = null;
              }),
              N()),
          e[2] == "right"
            ? r
              ? (r.p(e, d), d & 4 && h(r, 1))
              : ((r = G(e)), r.c(), h(r, 1), r.m(t, o))
            : r &&
              (U(),
              y(r, 1, 1, () => {
                r = null;
              }),
              N()),
          e[2] == null
            ? u
              ? u.p(e, d)
              : ((u = J(e)), u.c(), u.m(t, null))
            : u && (u.d(1), (u = null)),
          (!a ||
            (d & 8 &&
              i !==
                (i =
                  "flex " +
                  e[3] +
                  " " +
                  (e[3] === "filled" && "btn btn-primary") +
                  " box-border items-center justify-between relative px-4 py-4 w-full h-12 rounded-full cursor-pointer svelte-dfadzr"))) &&
            _(t, "class", i);
      },
      i(m) {
        a || (h(n), h(r), (a = !0));
      },
      o(m) {
        y(n), y(r), (a = !1);
      },
      d(m) {
        m && b(t), n && n.d(), r && r.d(), u && u.d(), (f = !1), x(l);
      },
    };
  }
  function ae(e, t, s) {
    let o,
      i,
      a = ee,
      f = () => (a(), (a = te(o, (c) => s(5, (i = c)))), o);
    e.$$.on_destroy.push(() => a());
    let {
        handleClick: l = () => {
          console.log("Unassigned Button");
        },
      } = t,
      { buttonText: n = "Button" } = t,
      { arrow: r = null } = t,
      { buttonStyle: u = "filled" } = t;
    function m() {
      o.set(10);
    }
    function d() {
      o.set(0);
    }
    return (
      (e.$$set = (c) => {
        "handleClick" in c && s(0, (l = c.handleClick)),
          "buttonText" in c && s(1, (n = c.buttonText)),
          "arrow" in c && s(2, (r = c.arrow)),
          "buttonStyle" in c && s(3, (u = c.buttonStyle));
      }),
      f(s(4, (o = re()))),
      [l, n, r, u, o, i, m, d]
    );
  }
  class be extends ne {
    constructor(t) {
      super(),
        le(this, t, ae, oe, Z, {
          handleClick: 0,
          buttonText: 1,
          arrow: 2,
          buttonStyle: 3,
        });
    }
  }
  export { be as B, re as s };
  //# sourceMappingURL=Button.CtAEPa0j.js.map
  