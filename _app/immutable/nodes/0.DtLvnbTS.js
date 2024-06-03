import {
    s as j,
    n as L,
    c as W,
    B as ke,
    j as De,
    b as _t,
    u as xt,
    g as yt,
    d as Et,
    D as Ze,
    a as Jt,
    o as Kt,
  } from "../chunks/scheduler.DQm6Vmd6.js";
  import {
    S as V,
    i as X,
    D as Ye,
    E as qe,
    b as S,
    d as p,
    f as b,
    g as C,
    k as H,
    B as Qe,
    y as pe,
    n as B,
    z as ge,
    m as E,
    e as w,
    o as R,
    s as I,
    t as Ue,
    a as T,
    p as k,
    c as N,
    j as Ge,
    q as D,
    x as se,
    l as wt,
    r as U,
    u as ie,
    G as Je,
  } from "../chunks/index.BJzYF_Wp.js";
  import { d as J, w as Fe } from "../chunks/index.BG5xY8LR.js";
  import {
    g as er,
    aX as Tt,
    b4 as Ke,
    b3 as et,
    b5 as tt,
    b6 as tr,
  } from "../chunks/NotificationToast.CW_BnK-u.js";
  import { _, a as xe, b as rr, c as we } from "../chunks/tslib.es6.D9yd9Yl3.js";
  import { s as fe, a as Te } from "../chunks/responsiveness.614jBiHW.js";
  import { b as nr } from "../chunks/entry.CYVt7Tp_.js";
  import { p as ir } from "../chunks/stores.DKAJ4WRS.js";
  const ar = !1,
    zi = Object.freeze(
      Object.defineProperty({ __proto__: null, ssr: ar }, Symbol.toStringTag, {
        value: "Module",
      })
    );
  var or = function (t) {
    return sr(t) && !lr(t);
  };
  function sr(e) {
    return !!e && typeof e == "object";
  }
  function lr(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || cr(e);
  }
  var ur = typeof Symbol == "function" && Symbol.for,
    hr = ur ? Symbol.for("react.element") : 60103;
  function cr(e) {
    return e.$$typeof === hr;
  }
  function fr(e) {
    return Array.isArray(e) ? [] : {};
  }
  function ae(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? Z(fr(e), e, t) : e;
  }
  function mr(e, t, r) {
    return e.concat(t).map(function (n) {
      return ae(n, r);
    });
  }
  function dr(e, t) {
    if (!t.customMerge) return Z;
    var r = t.customMerge(e);
    return typeof r == "function" ? r : Z;
  }
  function pr(e) {
    return Object.getOwnPropertySymbols
      ? Object.getOwnPropertySymbols(e).filter(function (t) {
          return Object.propertyIsEnumerable.call(e, t);
        })
      : [];
  }
  function rt(e) {
    return Object.keys(e).concat(pr(e));
  }
  function Ht(e, t) {
    try {
      return t in e;
    } catch {
      return !1;
    }
  }
  function gr(e, t) {
    return (
      Ht(e, t) &&
      !(
        Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
      )
    );
  }
  function br(e, t, r) {
    var n = {};
    return (
      r.isMergeableObject(e) &&
        rt(e).forEach(function (i) {
          n[i] = ae(e[i], r);
        }),
      rt(t).forEach(function (i) {
        gr(e, i) ||
          (Ht(e, i) && r.isMergeableObject(t[i])
            ? (n[i] = dr(i, r)(e[i], t[i], r))
            : (n[i] = ae(t[i], r)));
      }),
      n
    );
  }
  function Z(e, t, r) {
    (r = r || {}),
      (r.arrayMerge = r.arrayMerge || mr),
      (r.isMergeableObject = r.isMergeableObject || or),
      (r.cloneUnlessOtherwiseSpecified = ae);
    var n = Array.isArray(t),
      i = Array.isArray(e),
      a = n === i;
    return a ? (n ? r.arrayMerge(e, t, r) : br(e, t, r)) : ae(t, r);
  }
  Z.all = function (t, r) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (n, i) {
      return Z(n, i, r);
    }, {});
  };
  var vr = Z,
    _r = vr;
  const xr = er(_r);
  var d;
  (function (e) {
    (e[(e.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = "EXPECT_ARGUMENT_CLOSING_BRACE"),
      (e[(e.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
      (e[(e.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
      (e[(e.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
      (e[(e.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
      (e[(e.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
      (e[(e.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
      (e[(e.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
      (e[(e.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
      (e[(e.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
      (e[(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
        "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
      (e[(e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
        "EXPECT_SELECT_ARGUMENT_OPTIONS"),
      (e[(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
        "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
      (e[(e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
        "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
      (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
        "EXPECT_SELECT_ARGUMENT_SELECTOR"),
      (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
        "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
      (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
        "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
      (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
        "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
      (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
        "INVALID_PLURAL_ARGUMENT_SELECTOR"),
      (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
        "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
      (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
        "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
      (e[(e.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
      (e[(e.INVALID_TAG = 23)] = "INVALID_TAG"),
      (e[(e.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
      (e[(e.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
      (e[(e.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG");
  })(d || (d = {}));
  var y;
  (function (e) {
    (e[(e.literal = 0)] = "literal"),
      (e[(e.argument = 1)] = "argument"),
      (e[(e.number = 2)] = "number"),
      (e[(e.date = 3)] = "date"),
      (e[(e.time = 4)] = "time"),
      (e[(e.select = 5)] = "select"),
      (e[(e.plural = 6)] = "plural"),
      (e[(e.pound = 7)] = "pound"),
      (e[(e.tag = 8)] = "tag");
  })(y || (y = {}));
  var Y;
  (function (e) {
    (e[(e.number = 0)] = "number"), (e[(e.dateTime = 1)] = "dateTime");
  })(Y || (Y = {}));
  function nt(e) {
    return e.type === y.literal;
  }
  function yr(e) {
    return e.type === y.argument;
  }
  function Ct(e) {
    return e.type === y.number;
  }
  function Bt(e) {
    return e.type === y.date;
  }
  function At(e) {
    return e.type === y.time;
  }
  function St(e) {
    return e.type === y.select;
  }
  function Pt(e) {
    return e.type === y.plural;
  }
  function Er(e) {
    return e.type === y.pound;
  }
  function It(e) {
    return e.type === y.tag;
  }
  function Nt(e) {
    return !!(e && typeof e == "object" && e.type === Y.number);
  }
  function Pe(e) {
    return !!(e && typeof e == "object" && e.type === Y.dateTime);
  }
  var Mt = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
    wr =
      /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  function Tr(e) {
    var t = {};
    return (
      e.replace(wr, function (r) {
        var n = r.length;
        switch (r[0]) {
          case "G":
            t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
            break;
          case "y":
            t.year = n === 2 ? "2-digit" : "numeric";
            break;
          case "Y":
          case "u":
          case "U":
          case "r":
            throw new RangeError(
              "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
            );
          case "q":
          case "Q":
            throw new RangeError("`q/Q` (quarter) patterns are not supported");
          case "M":
          case "L":
            t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
            break;
          case "w":
          case "W":
            throw new RangeError("`w/W` (week) patterns are not supported");
          case "d":
            t.day = ["numeric", "2-digit"][n - 1];
            break;
          case "D":
          case "F":
          case "g":
            throw new RangeError(
              "`D/F/g` (day) patterns are not supported, use `d` instead"
            );
          case "E":
            t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
            break;
          case "e":
            if (n < 4)
              throw new RangeError(
                "`e..eee` (weekday) patterns are not supported"
              );
            t.weekday = ["short", "long", "narrow", "short"][n - 4];
            break;
          case "c":
            if (n < 4)
              throw new RangeError(
                "`c..ccc` (weekday) patterns are not supported"
              );
            t.weekday = ["short", "long", "narrow", "short"][n - 4];
            break;
          case "a":
            t.hour12 = !0;
            break;
          case "b":
          case "B":
            throw new RangeError(
              "`b/B` (period) patterns are not supported, use `a` instead"
            );
          case "h":
            (t.hourCycle = "h12"), (t.hour = ["numeric", "2-digit"][n - 1]);
            break;
          case "H":
            (t.hourCycle = "h23"), (t.hour = ["numeric", "2-digit"][n - 1]);
            break;
          case "K":
            (t.hourCycle = "h11"), (t.hour = ["numeric", "2-digit"][n - 1]);
            break;
          case "k":
            (t.hourCycle = "h24"), (t.hour = ["numeric", "2-digit"][n - 1]);
            break;
          case "j":
          case "J":
          case "C":
            throw new RangeError(
              "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
            );
          case "m":
            t.minute = ["numeric", "2-digit"][n - 1];
            break;
          case "s":
            t.second = ["numeric", "2-digit"][n - 1];
            break;
          case "S":
          case "A":
            throw new RangeError(
              "`S/A` (second) patterns are not supported, use `s` instead"
            );
          case "z":
            t.timeZoneName = n < 4 ? "short" : "long";
            break;
          case "Z":
          case "O":
          case "v":
          case "V":
          case "X":
          case "x":
            throw new RangeError(
              "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
            );
        }
        return "";
      }),
      t
    );
  }
  var Hr = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  function Cr(e) {
    if (e.length === 0) throw new Error("Number skeleton cannot be empty");
    for (
      var t = e.split(Hr).filter(function (f) {
          return f.length > 0;
        }),
        r = [],
        n = 0,
        i = t;
      n < i.length;
      n++
    ) {
      var a = i[n],
        s = a.split("/");
      if (s.length === 0) throw new Error("Invalid number skeleton");
      for (var u = s[0], h = s.slice(1), o = 0, l = h; o < l.length; o++) {
        var c = l[o];
        if (c.length === 0) throw new Error("Invalid number skeleton");
      }
      r.push({ stem: u, options: h });
    }
    return r;
  }
  function Br(e) {
    return e.replace(/^(.*?)-/, "");
  }
  var it = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    Lt = /^(@+)?(\+|#+)?[rs]?$/g,
    Ar = /(\*)(0+)|(#+)(0+)|(0+)/g,
    Ot = /^(0+)$/;
  function at(e) {
    var t = {};
    return (
      e[e.length - 1] === "r"
        ? (t.roundingPriority = "morePrecision")
        : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"),
      e.replace(Lt, function (r, n, i) {
        return (
          typeof i != "string"
            ? ((t.minimumSignificantDigits = n.length),
              (t.maximumSignificantDigits = n.length))
            : i === "+"
            ? (t.minimumSignificantDigits = n.length)
            : n[0] === "#"
            ? (t.maximumSignificantDigits = n.length)
            : ((t.minimumSignificantDigits = n.length),
              (t.maximumSignificantDigits =
                n.length + (typeof i == "string" ? i.length : 0))),
          ""
        );
      }),
      t
    );
  }
  function Rt(e) {
    switch (e) {
      case "sign-auto":
        return { signDisplay: "auto" };
      case "sign-accounting":
      case "()":
        return { currencySign: "accounting" };
      case "sign-always":
      case "+!":
        return { signDisplay: "always" };
      case "sign-accounting-always":
      case "()!":
        return { signDisplay: "always", currencySign: "accounting" };
      case "sign-except-zero":
      case "+?":
        return { signDisplay: "exceptZero" };
      case "sign-accounting-except-zero":
      case "()?":
        return { signDisplay: "exceptZero", currencySign: "accounting" };
      case "sign-never":
      case "+_":
        return { signDisplay: "never" };
    }
  }
  function Sr(e) {
    var t;
    if (
      (e[0] === "E" && e[1] === "E"
        ? ((t = { notation: "engineering" }), (e = e.slice(2)))
        : e[0] === "E" && ((t = { notation: "scientific" }), (e = e.slice(1))),
      t)
    ) {
      var r = e.slice(0, 2);
      if (
        (r === "+!"
          ? ((t.signDisplay = "always"), (e = e.slice(2)))
          : r === "+?" && ((t.signDisplay = "exceptZero"), (e = e.slice(2))),
        !Ot.test(e))
      )
        throw new Error("Malformed concise eng/scientific notation");
      t.minimumIntegerDigits = e.length;
    }
    return t;
  }
  function ot(e) {
    var t = {},
      r = Rt(e);
    return r || t;
  }
  function Pr(e) {
    for (var t = {}, r = 0, n = e; r < n.length; r++) {
      var i = n[r];
      switch (i.stem) {
        case "percent":
        case "%":
          t.style = "percent";
          continue;
        case "%x100":
          (t.style = "percent"), (t.scale = 100);
          continue;
        case "currency":
          (t.style = "currency"), (t.currency = i.options[0]);
          continue;
        case "group-off":
        case ",_":
          t.useGrouping = !1;
          continue;
        case "precision-integer":
        case ".":
          t.maximumFractionDigits = 0;
          continue;
        case "measure-unit":
        case "unit":
          (t.style = "unit"), (t.unit = Br(i.options[0]));
          continue;
        case "compact-short":
        case "K":
          (t.notation = "compact"), (t.compactDisplay = "short");
          continue;
        case "compact-long":
        case "KK":
          (t.notation = "compact"), (t.compactDisplay = "long");
          continue;
        case "scientific":
          t = _(
            _(_({}, t), { notation: "scientific" }),
            i.options.reduce(function (h, o) {
              return _(_({}, h), ot(o));
            }, {})
          );
          continue;
        case "engineering":
          t = _(
            _(_({}, t), { notation: "engineering" }),
            i.options.reduce(function (h, o) {
              return _(_({}, h), ot(o));
            }, {})
          );
          continue;
        case "notation-simple":
          t.notation = "standard";
          continue;
        case "unit-width-narrow":
          (t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow");
          continue;
        case "unit-width-short":
          (t.currencyDisplay = "code"), (t.unitDisplay = "short");
          continue;
        case "unit-width-full-name":
          (t.currencyDisplay = "name"), (t.unitDisplay = "long");
          continue;
        case "unit-width-iso-code":
          t.currencyDisplay = "symbol";
          continue;
        case "scale":
          t.scale = parseFloat(i.options[0]);
          continue;
        case "rounding-mode-floor":
          t.roundingMode = "floor";
          continue;
        case "rounding-mode-ceiling":
          t.roundingMode = "ceil";
          continue;
        case "rounding-mode-down":
          t.roundingMode = "trunc";
          continue;
        case "rounding-mode-up":
          t.roundingMode = "expand";
          continue;
        case "rounding-mode-half-even":
          t.roundingMode = "halfEven";
          continue;
        case "rounding-mode-half-down":
          t.roundingMode = "halfTrunc";
          continue;
        case "rounding-mode-half-up":
          t.roundingMode = "halfExpand";
          continue;
        case "integer-width":
          if (i.options.length > 1)
            throw new RangeError(
              "integer-width stems only accept a single optional option"
            );
          i.options[0].replace(Ar, function (h, o, l, c, f, m) {
            if (o) t.minimumIntegerDigits = l.length;
            else {
              if (c && f)
                throw new Error(
                  "We currently do not support maximum integer digits"
                );
              if (m)
                throw new Error(
                  "We currently do not support exact integer digits"
                );
            }
            return "";
          });
          continue;
      }
      if (Ot.test(i.stem)) {
        t.minimumIntegerDigits = i.stem.length;
        continue;
      }
      if (it.test(i.stem)) {
        if (i.options.length > 1)
          throw new RangeError(
            "Fraction-precision stems only accept a single optional option"
          );
        i.stem.replace(it, function (h, o, l, c, f, m) {
          return (
            l === "*"
              ? (t.minimumFractionDigits = o.length)
              : c && c[0] === "#"
              ? (t.maximumFractionDigits = c.length)
              : f && m
              ? ((t.minimumFractionDigits = f.length),
                (t.maximumFractionDigits = f.length + m.length))
              : ((t.minimumFractionDigits = o.length),
                (t.maximumFractionDigits = o.length)),
            ""
          );
        });
        var a = i.options[0];
        a === "w"
          ? (t = _(_({}, t), { trailingZeroDisplay: "stripIfInteger" }))
          : a && (t = _(_({}, t), at(a)));
        continue;
      }
      if (Lt.test(i.stem)) {
        t = _(_({}, t), at(i.stem));
        continue;
      }
      var s = Rt(i.stem);
      s && (t = _(_({}, t), s));
      var u = Sr(i.stem);
      u && (t = _(_({}, t), u));
    }
    return t;
  }
  var ce = {
    "001": ["H", "h"],
    AC: ["H", "h", "hb", "hB"],
    AD: ["H", "hB"],
    AE: ["h", "hB", "hb", "H"],
    AF: ["H", "hb", "hB", "h"],
    AG: ["h", "hb", "H", "hB"],
    AI: ["H", "h", "hb", "hB"],
    AL: ["h", "H", "hB"],
    AM: ["H", "hB"],
    AO: ["H", "hB"],
    AR: ["H", "h", "hB", "hb"],
    AS: ["h", "H"],
    AT: ["H", "hB"],
    AU: ["h", "hb", "H", "hB"],
    AW: ["H", "hB"],
    AX: ["H"],
    AZ: ["H", "hB", "h"],
    BA: ["H", "hB", "h"],
    BB: ["h", "hb", "H", "hB"],
    BD: ["h", "hB", "H"],
    BE: ["H", "hB"],
    BF: ["H", "hB"],
    BG: ["H", "hB", "h"],
    BH: ["h", "hB", "hb", "H"],
    BI: ["H", "h"],
    BJ: ["H", "hB"],
    BL: ["H", "hB"],
    BM: ["h", "hb", "H", "hB"],
    BN: ["hb", "hB", "h", "H"],
    BO: ["H", "hB", "h", "hb"],
    BQ: ["H"],
    BR: ["H", "hB"],
    BS: ["h", "hb", "H", "hB"],
    BT: ["h", "H"],
    BW: ["H", "h", "hb", "hB"],
    BY: ["H", "h"],
    BZ: ["H", "h", "hb", "hB"],
    CA: ["h", "hb", "H", "hB"],
    CC: ["H", "h", "hb", "hB"],
    CD: ["hB", "H"],
    CF: ["H", "h", "hB"],
    CG: ["H", "hB"],
    CH: ["H", "hB", "h"],
    CI: ["H", "hB"],
    CK: ["H", "h", "hb", "hB"],
    CL: ["H", "h", "hB", "hb"],
    CM: ["H", "h", "hB"],
    CN: ["H", "hB", "hb", "h"],
    CO: ["h", "H", "hB", "hb"],
    CP: ["H"],
    CR: ["H", "h", "hB", "hb"],
    CU: ["H", "h", "hB", "hb"],
    CV: ["H", "hB"],
    CW: ["H", "hB"],
    CX: ["H", "h", "hb", "hB"],
    CY: ["h", "H", "hb", "hB"],
    CZ: ["H"],
    DE: ["H", "hB"],
    DG: ["H", "h", "hb", "hB"],
    DJ: ["h", "H"],
    DK: ["H"],
    DM: ["h", "hb", "H", "hB"],
    DO: ["h", "H", "hB", "hb"],
    DZ: ["h", "hB", "hb", "H"],
    EA: ["H", "h", "hB", "hb"],
    EC: ["H", "hB", "h", "hb"],
    EE: ["H", "hB"],
    EG: ["h", "hB", "hb", "H"],
    EH: ["h", "hB", "hb", "H"],
    ER: ["h", "H"],
    ES: ["H", "hB", "h", "hb"],
    ET: ["hB", "hb", "h", "H"],
    FI: ["H"],
    FJ: ["h", "hb", "H", "hB"],
    FK: ["H", "h", "hb", "hB"],
    FM: ["h", "hb", "H", "hB"],
    FO: ["H", "h"],
    FR: ["H", "hB"],
    GA: ["H", "hB"],
    GB: ["H", "h", "hb", "hB"],
    GD: ["h", "hb", "H", "hB"],
    GE: ["H", "hB", "h"],
    GF: ["H", "hB"],
    GG: ["H", "h", "hb", "hB"],
    GH: ["h", "H"],
    GI: ["H", "h", "hb", "hB"],
    GL: ["H", "h"],
    GM: ["h", "hb", "H", "hB"],
    GN: ["H", "hB"],
    GP: ["H", "hB"],
    GQ: ["H", "hB", "h", "hb"],
    GR: ["h", "H", "hb", "hB"],
    GT: ["H", "h", "hB", "hb"],
    GU: ["h", "hb", "H", "hB"],
    GW: ["H", "hB"],
    GY: ["h", "hb", "H", "hB"],
    HK: ["h", "hB", "hb", "H"],
    HN: ["H", "h", "hB", "hb"],
    HR: ["H", "hB"],
    HU: ["H", "h"],
    IC: ["H", "h", "hB", "hb"],
    ID: ["H"],
    IE: ["H", "h", "hb", "hB"],
    IL: ["H", "hB"],
    IM: ["H", "h", "hb", "hB"],
    IN: ["h", "H"],
    IO: ["H", "h", "hb", "hB"],
    IQ: ["h", "hB", "hb", "H"],
    IR: ["hB", "H"],
    IS: ["H"],
    IT: ["H", "hB"],
    JE: ["H", "h", "hb", "hB"],
    JM: ["h", "hb", "H", "hB"],
    JO: ["h", "hB", "hb", "H"],
    JP: ["H", "K", "h"],
    KE: ["hB", "hb", "H", "h"],
    KG: ["H", "h", "hB", "hb"],
    KH: ["hB", "h", "H", "hb"],
    KI: ["h", "hb", "H", "hB"],
    KM: ["H", "h", "hB", "hb"],
    KN: ["h", "hb", "H", "hB"],
    KP: ["h", "H", "hB", "hb"],
    KR: ["h", "H", "hB", "hb"],
    KW: ["h", "hB", "hb", "H"],
    KY: ["h", "hb", "H", "hB"],
    KZ: ["H", "hB"],
    LA: ["H", "hb", "hB", "h"],
    LB: ["h", "hB", "hb", "H"],
    LC: ["h", "hb", "H", "hB"],
    LI: ["H", "hB", "h"],
    LK: ["H", "h", "hB", "hb"],
    LR: ["h", "hb", "H", "hB"],
    LS: ["h", "H"],
    LT: ["H", "h", "hb", "hB"],
    LU: ["H", "h", "hB"],
    LV: ["H", "hB", "hb", "h"],
    LY: ["h", "hB", "hb", "H"],
    MA: ["H", "h", "hB", "hb"],
    MC: ["H", "hB"],
    MD: ["H", "hB"],
    ME: ["H", "hB", "h"],
    MF: ["H", "hB"],
    MG: ["H", "h"],
    MH: ["h", "hb", "H", "hB"],
    MK: ["H", "h", "hb", "hB"],
    ML: ["H"],
    MM: ["hB", "hb", "H", "h"],
    MN: ["H", "h", "hb", "hB"],
    MO: ["h", "hB", "hb", "H"],
    MP: ["h", "hb", "H", "hB"],
    MQ: ["H", "hB"],
    MR: ["h", "hB", "hb", "H"],
    MS: ["H", "h", "hb", "hB"],
    MT: ["H", "h"],
    MU: ["H", "h"],
    MV: ["H", "h"],
    MW: ["h", "hb", "H", "hB"],
    MX: ["H", "h", "hB", "hb"],
    MY: ["hb", "hB", "h", "H"],
    MZ: ["H", "hB"],
    NA: ["h", "H", "hB", "hb"],
    NC: ["H", "hB"],
    NE: ["H"],
    NF: ["H", "h", "hb", "hB"],
    NG: ["H", "h", "hb", "hB"],
    NI: ["H", "h", "hB", "hb"],
    NL: ["H", "hB"],
    NO: ["H", "h"],
    NP: ["H", "h", "hB"],
    NR: ["H", "h", "hb", "hB"],
    NU: ["H", "h", "hb", "hB"],
    NZ: ["h", "hb", "H", "hB"],
    OM: ["h", "hB", "hb", "H"],
    PA: ["h", "H", "hB", "hb"],
    PE: ["H", "hB", "h", "hb"],
    PF: ["H", "h", "hB"],
    PG: ["h", "H"],
    PH: ["h", "hB", "hb", "H"],
    PK: ["h", "hB", "H"],
    PL: ["H", "h"],
    PM: ["H", "hB"],
    PN: ["H", "h", "hb", "hB"],
    PR: ["h", "H", "hB", "hb"],
    PS: ["h", "hB", "hb", "H"],
    PT: ["H", "hB"],
    PW: ["h", "H"],
    PY: ["H", "h", "hB", "hb"],
    QA: ["h", "hB", "hb", "H"],
    RE: ["H", "hB"],
    RO: ["H", "hB"],
    RS: ["H", "hB", "h"],
    RU: ["H"],
    RW: ["H", "h"],
    SA: ["h", "hB", "hb", "H"],
    SB: ["h", "hb", "H", "hB"],
    SC: ["H", "h", "hB"],
    SD: ["h", "hB", "hb", "H"],
    SE: ["H"],
    SG: ["h", "hb", "H", "hB"],
    SH: ["H", "h", "hb", "hB"],
    SI: ["H", "hB"],
    SJ: ["H"],
    SK: ["H"],
    SL: ["h", "hb", "H", "hB"],
    SM: ["H", "h", "hB"],
    SN: ["H", "h", "hB"],
    SO: ["h", "H"],
    SR: ["H", "hB"],
    SS: ["h", "hb", "H", "hB"],
    ST: ["H", "hB"],
    SV: ["H", "h", "hB", "hb"],
    SX: ["H", "h", "hb", "hB"],
    SY: ["h", "hB", "hb", "H"],
    SZ: ["h", "hb", "H", "hB"],
    TA: ["H", "h", "hb", "hB"],
    TC: ["h", "hb", "H", "hB"],
    TD: ["h", "H", "hB"],
    TF: ["H", "h", "hB"],
    TG: ["H", "hB"],
    TH: ["H", "h"],
    TJ: ["H", "h"],
    TL: ["H", "hB", "hb", "h"],
    TM: ["H", "h"],
    TN: ["h", "hB", "hb", "H"],
    TO: ["h", "H"],
    TR: ["H", "hB"],
    TT: ["h", "hb", "H", "hB"],
    TW: ["hB", "hb", "h", "H"],
    TZ: ["hB", "hb", "H", "h"],
    UA: ["H", "hB", "h"],
    UG: ["hB", "hb", "H", "h"],
    UM: ["h", "hb", "H", "hB"],
    US: ["h", "hb", "H", "hB"],
    UY: ["H", "h", "hB", "hb"],
    UZ: ["H", "hB", "h"],
    VA: ["H", "h", "hB"],
    VC: ["h", "hb", "H", "hB"],
    VE: ["h", "H", "hB", "hb"],
    VG: ["h", "hb", "H", "hB"],
    VI: ["h", "hb", "H", "hB"],
    VN: ["H", "h"],
    VU: ["h", "H"],
    WF: ["H", "hB"],
    WS: ["h", "H"],
    XK: ["H", "hB", "h"],
    YE: ["h", "hB", "hb", "H"],
    YT: ["H", "hB"],
    ZA: ["H", "h", "hb", "hB"],
    ZM: ["h", "hb", "H", "hB"],
    ZW: ["H", "h"],
    "af-ZA": ["H", "h", "hB", "hb"],
    "ar-001": ["h", "hB", "hb", "H"],
    "ca-ES": ["H", "h", "hB"],
    "en-001": ["h", "hb", "H", "hB"],
    "es-BO": ["H", "h", "hB", "hb"],
    "es-BR": ["H", "h", "hB", "hb"],
    "es-EC": ["H", "h", "hB", "hb"],
    "es-ES": ["H", "h", "hB", "hb"],
    "es-GQ": ["H", "h", "hB", "hb"],
    "es-PE": ["H", "h", "hB", "hb"],
    "fr-CA": ["H", "h", "hB"],
    "gl-ES": ["H", "h", "hB"],
    "gu-IN": ["hB", "hb", "h", "H"],
    "hi-IN": ["hB", "h", "H"],
    "it-CH": ["H", "h", "hB"],
    "it-IT": ["H", "h", "hB"],
    "kn-IN": ["hB", "h", "H"],
    "ml-IN": ["hB", "h", "H"],
    "mr-IN": ["hB", "hb", "h", "H"],
    "pa-IN": ["hB", "hb", "h", "H"],
    "ta-IN": ["hB", "h", "hb", "H"],
    "te-IN": ["hB", "h", "H"],
    "zu-ZA": ["H", "hB", "hb", "h"],
  };
  function Ir(e, t) {
    for (var r = "", n = 0; n < e.length; n++) {
      var i = e.charAt(n);
      if (i === "j") {
        for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === i; ) a++, n++;
        var s = 1 + (a & 1),
          u = a < 2 ? 1 : 3 + (a >> 1),
          h = "a",
          o = Nr(t);
        for ((o == "H" || o == "k") && (u = 0); u-- > 0; ) r += h;
        for (; s-- > 0; ) r = o + r;
      } else i === "J" ? (r += "H") : (r += i);
    }
    return r;
  }
  function Nr(e) {
    var t = e.hourCycle;
    if (
      (t === void 0 &&
        e.hourCycles &&
        e.hourCycles.length &&
        (t = e.hourCycles[0]),
      t)
    )
      switch (t) {
        case "h24":
          return "k";
        case "h23":
          return "H";
        case "h12":
          return "h";
        case "h11":
          return "K";
        default:
          throw new Error("Invalid hourCycle");
      }
    var r = e.language,
      n;
    r !== "root" && (n = e.maximize().region);
    var i = ce[n || ""] || ce[r || ""] || ce["".concat(r, "-001")] || ce["001"];
    return i[0];
  }
  var He,
    Mr = new RegExp("^".concat(Mt.source, "*")),
    Lr = new RegExp("".concat(Mt.source, "*$"));
  function g(e, t) {
    return { start: e, end: t };
  }
  var Or = !!String.prototype.startsWith && "_a".startsWith("a", 1),
    Rr = !!String.fromCodePoint,
    kr = !!Object.fromEntries,
    Dr = !!String.prototype.codePointAt,
    Ur = !!String.prototype.trimStart,
    Gr = !!String.prototype.trimEnd,
    Fr = !!Number.isSafeInteger,
    $r = Fr
      ? Number.isSafeInteger
      : function (e) {
          return (
            typeof e == "number" &&
            isFinite(e) &&
            Math.floor(e) === e &&
            Math.abs(e) <= 9007199254740991
          );
        },
    Ie = !0;
  try {
    var jr = Dt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    Ie = ((He = jr.exec("a")) === null || He === void 0 ? void 0 : He[0]) === "a";
  } catch {
    Ie = !1;
  }
  var st = Or
      ? function (t, r, n) {
          return t.startsWith(r, n);
        }
      : function (t, r, n) {
          return t.slice(n, n + r.length) === r;
        },
    Ne = Rr
      ? String.fromCodePoint
      : function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
          for (var n = "", i = t.length, a = 0, s; i > a; ) {
            if (((s = t[a++]), s > 1114111))
              throw RangeError(s + " is not a valid code point");
            n +=
              s < 65536
                ? String.fromCharCode(s)
                : String.fromCharCode(
                    ((s -= 65536) >> 10) + 55296,
                    (s % 1024) + 56320
                  );
          }
          return n;
        },
    lt = kr
      ? Object.fromEntries
      : function (t) {
          for (var r = {}, n = 0, i = t; n < i.length; n++) {
            var a = i[n],
              s = a[0],
              u = a[1];
            r[s] = u;
          }
          return r;
        },
    kt = Dr
      ? function (t, r) {
          return t.codePointAt(r);
        }
      : function (t, r) {
          var n = t.length;
          if (!(r < 0 || r >= n)) {
            var i = t.charCodeAt(r),
              a;
            return i < 55296 ||
              i > 56319 ||
              r + 1 === n ||
              (a = t.charCodeAt(r + 1)) < 56320 ||
              a > 57343
              ? i
              : ((i - 55296) << 10) + (a - 56320) + 65536;
          }
        },
    Vr = Ur
      ? function (t) {
          return t.trimStart();
        }
      : function (t) {
          return t.replace(Mr, "");
        },
    Xr = Gr
      ? function (t) {
          return t.trimEnd();
        }
      : function (t) {
          return t.replace(Lr, "");
        };
  function Dt(e, t) {
    return new RegExp(e, t);
  }
  var Me;
  if (Ie) {
    var ut = Dt("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    Me = function (t, r) {
      var n;
      ut.lastIndex = r;
      var i = ut.exec(t);
      return (n = i[1]) !== null && n !== void 0 ? n : "";
    };
  } else
    Me = function (t, r) {
      for (var n = []; ; ) {
        var i = kt(t, r);
        if (i === void 0 || Ut(i) || Yr(i)) break;
        n.push(i), (r += i >= 65536 ? 2 : 1);
      }
      return Ne.apply(void 0, n);
    };
  var zr = (function () {
    function e(t, r) {
      r === void 0 && (r = {}),
        (this.message = t),
        (this.position = { offset: 0, line: 1, column: 1 }),
        (this.ignoreTag = !!r.ignoreTag),
        (this.locale = r.locale),
        (this.requiresOtherClause = !!r.requiresOtherClause),
        (this.shouldParseSkeletons = !!r.shouldParseSkeletons);
    }
    return (
      (e.prototype.parse = function () {
        if (this.offset() !== 0) throw Error("parser can only be used once");
        return this.parseMessage(0, "", !1);
      }),
      (e.prototype.parseMessage = function (t, r, n) {
        for (var i = []; !this.isEOF(); ) {
          var a = this.char();
          if (a === 123) {
            var s = this.parseArgument(t, n);
            if (s.err) return s;
            i.push(s.val);
          } else {
            if (a === 125 && t > 0) break;
            if (a === 35 && (r === "plural" || r === "selectordinal")) {
              var u = this.clonePosition();
              this.bump(),
                i.push({ type: y.pound, location: g(u, this.clonePosition()) });
            } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
              if (n) break;
              return this.error(
                d.UNMATCHED_CLOSING_TAG,
                g(this.clonePosition(), this.clonePosition())
              );
            } else if (a === 60 && !this.ignoreTag && Le(this.peek() || 0)) {
              var s = this.parseTag(t, r);
              if (s.err) return s;
              i.push(s.val);
            } else {
              var s = this.parseLiteral(t, r);
              if (s.err) return s;
              i.push(s.val);
            }
          }
        }
        return { val: i, err: null };
      }),
      (e.prototype.parseTag = function (t, r) {
        var n = this.clonePosition();
        this.bump();
        var i = this.parseTagName();
        if ((this.bumpSpace(), this.bumpIf("/>")))
          return {
            val: {
              type: y.literal,
              value: "<".concat(i, "/>"),
              location: g(n, this.clonePosition()),
            },
            err: null,
          };
        if (this.bumpIf(">")) {
          var a = this.parseMessage(t + 1, r, !0);
          if (a.err) return a;
          var s = a.val,
            u = this.clonePosition();
          if (this.bumpIf("</")) {
            if (this.isEOF() || !Le(this.char()))
              return this.error(d.INVALID_TAG, g(u, this.clonePosition()));
            var h = this.clonePosition(),
              o = this.parseTagName();
            return i !== o
              ? this.error(d.UNMATCHED_CLOSING_TAG, g(h, this.clonePosition()))
              : (this.bumpSpace(),
                this.bumpIf(">")
                  ? {
                      val: {
                        type: y.tag,
                        value: i,
                        children: s,
                        location: g(n, this.clonePosition()),
                      },
                      err: null,
                    }
                  : this.error(d.INVALID_TAG, g(u, this.clonePosition())));
          } else return this.error(d.UNCLOSED_TAG, g(n, this.clonePosition()));
        } else return this.error(d.INVALID_TAG, g(n, this.clonePosition()));
      }),
      (e.prototype.parseTagName = function () {
        var t = this.offset();
        for (this.bump(); !this.isEOF() && Zr(this.char()); ) this.bump();
        return this.message.slice(t, this.offset());
      }),
      (e.prototype.parseLiteral = function (t, r) {
        for (var n = this.clonePosition(), i = ""; ; ) {
          var a = this.tryParseQuote(r);
          if (a) {
            i += a;
            continue;
          }
          var s = this.tryParseUnquoted(t, r);
          if (s) {
            i += s;
            continue;
          }
          var u = this.tryParseLeftAngleBracket();
          if (u) {
            i += u;
            continue;
          }
          break;
        }
        var h = g(n, this.clonePosition());
        return { val: { type: y.literal, value: i, location: h }, err: null };
      }),
      (e.prototype.tryParseLeftAngleBracket = function () {
        return !this.isEOF() &&
          this.char() === 60 &&
          (this.ignoreTag || !Wr(this.peek() || 0))
          ? (this.bump(), "<")
          : null;
      }),
      (e.prototype.tryParseQuote = function (t) {
        if (this.isEOF() || this.char() !== 39) return null;
        switch (this.peek()) {
          case 39:
            return this.bump(), this.bump(), "'";
          case 123:
          case 60:
          case 62:
          case 125:
            break;
          case 35:
            if (t === "plural" || t === "selectordinal") break;
            return null;
          default:
            return null;
        }
        this.bump();
        var r = [this.char()];
        for (this.bump(); !this.isEOF(); ) {
          var n = this.char();
          if (n === 39)
            if (this.peek() === 39) r.push(39), this.bump();
            else {
              this.bump();
              break;
            }
          else r.push(n);
          this.bump();
        }
        return Ne.apply(void 0, r);
      }),
      (e.prototype.tryParseUnquoted = function (t, r) {
        if (this.isEOF()) return null;
        var n = this.char();
        return n === 60 ||
          n === 123 ||
          (n === 35 && (r === "plural" || r === "selectordinal")) ||
          (n === 125 && t > 0)
          ? null
          : (this.bump(), Ne(n));
      }),
      (e.prototype.parseArgument = function (t, r) {
        var n = this.clonePosition();
        if ((this.bump(), this.bumpSpace(), this.isEOF()))
          return this.error(
            d.EXPECT_ARGUMENT_CLOSING_BRACE,
            g(n, this.clonePosition())
          );
        if (this.char() === 125)
          return (
            this.bump(), this.error(d.EMPTY_ARGUMENT, g(n, this.clonePosition()))
          );
        var i = this.parseIdentifierIfPossible().value;
        if (!i)
          return this.error(d.MALFORMED_ARGUMENT, g(n, this.clonePosition()));
        if ((this.bumpSpace(), this.isEOF()))
          return this.error(
            d.EXPECT_ARGUMENT_CLOSING_BRACE,
            g(n, this.clonePosition())
          );
        switch (this.char()) {
          case 125:
            return (
              this.bump(),
              {
                val: {
                  type: y.argument,
                  value: i,
                  location: g(n, this.clonePosition()),
                },
                err: null,
              }
            );
          case 44:
            return (
              this.bump(),
              this.bumpSpace(),
              this.isEOF()
                ? this.error(
                    d.EXPECT_ARGUMENT_CLOSING_BRACE,
                    g(n, this.clonePosition())
                  )
                : this.parseArgumentOptions(t, r, i, n)
            );
          default:
            return this.error(d.MALFORMED_ARGUMENT, g(n, this.clonePosition()));
        }
      }),
      (e.prototype.parseIdentifierIfPossible = function () {
        var t = this.clonePosition(),
          r = this.offset(),
          n = Me(this.message, r),
          i = r + n.length;
        this.bumpTo(i);
        var a = this.clonePosition(),
          s = g(t, a);
        return { value: n, location: s };
      }),
      (e.prototype.parseArgumentOptions = function (t, r, n, i) {
        var a,
          s = this.clonePosition(),
          u = this.parseIdentifierIfPossible().value,
          h = this.clonePosition();
        switch (u) {
          case "":
            return this.error(d.EXPECT_ARGUMENT_TYPE, g(s, h));
          case "number":
          case "date":
          case "time": {
            this.bumpSpace();
            var o = null;
            if (this.bumpIf(",")) {
              this.bumpSpace();
              var l = this.clonePosition(),
                c = this.parseSimpleArgStyleIfPossible();
              if (c.err) return c;
              var f = Xr(c.val);
              if (f.length === 0)
                return this.error(
                  d.EXPECT_ARGUMENT_STYLE,
                  g(this.clonePosition(), this.clonePosition())
                );
              var m = g(l, this.clonePosition());
              o = { style: f, styleLocation: m };
            }
            var v = this.tryParseArgumentClose(i);
            if (v.err) return v;
            var x = g(i, this.clonePosition());
            if (o && st(o == null ? void 0 : o.style, "::", 0)) {
              var M = Vr(o.style.slice(2));
              if (u === "number") {
                var c = this.parseNumberSkeletonFromString(M, o.styleLocation);
                return c.err
                  ? c
                  : {
                      val: {
                        type: y.number,
                        value: n,
                        location: x,
                        style: c.val,
                      },
                      err: null,
                    };
              } else {
                if (M.length === 0)
                  return this.error(d.EXPECT_DATE_TIME_SKELETON, x);
                var P = M;
                this.locale && (P = Ir(M, this.locale));
                var f = {
                    type: Y.dateTime,
                    pattern: P,
                    location: o.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? Tr(P) : {},
                  },
                  z = u === "date" ? y.date : y.time;
                return {
                  val: { type: z, value: n, location: x, style: f },
                  err: null,
                };
              }
            }
            return {
              val: {
                type: u === "number" ? y.number : u === "date" ? y.date : y.time,
                value: n,
                location: x,
                style:
                  (a = o == null ? void 0 : o.style) !== null && a !== void 0
                    ? a
                    : null,
              },
              err: null,
            };
          }
          case "plural":
          case "selectordinal":
          case "select": {
            var O = this.clonePosition();
            if ((this.bumpSpace(), !this.bumpIf(",")))
              return this.error(d.EXPECT_SELECT_ARGUMENT_OPTIONS, g(O, _({}, O)));
            this.bumpSpace();
            var te = this.parseIdentifierIfPossible(),
              $ = 0;
            if (u !== "select" && te.value === "offset") {
              if (!this.bumpIf(":"))
                return this.error(
                  d.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                  g(this.clonePosition(), this.clonePosition())
                );
              this.bumpSpace();
              var c = this.tryParseDecimalInteger(
                d.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                d.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
              );
              if (c.err) return c;
              this.bumpSpace(),
                (te = this.parseIdentifierIfPossible()),
                ($ = c.val);
            }
            var he = this.tryParsePluralOrSelectOptions(t, u, r, te);
            if (he.err) return he;
            var v = this.tryParseArgumentClose(i);
            if (v.err) return v;
            var We = g(i, this.clonePosition());
            return u === "select"
              ? {
                  val: {
                    type: y.select,
                    value: n,
                    options: lt(he.val),
                    location: We,
                  },
                  err: null,
                }
              : {
                  val: {
                    type: y.plural,
                    value: n,
                    options: lt(he.val),
                    offset: $,
                    pluralType: u === "plural" ? "cardinal" : "ordinal",
                    location: We,
                  },
                  err: null,
                };
          }
          default:
            return this.error(d.INVALID_ARGUMENT_TYPE, g(s, h));
        }
      }),
      (e.prototype.tryParseArgumentClose = function (t) {
        return this.isEOF() || this.char() !== 125
          ? this.error(
              d.EXPECT_ARGUMENT_CLOSING_BRACE,
              g(t, this.clonePosition())
            )
          : (this.bump(), { val: !0, err: null });
      }),
      (e.prototype.parseSimpleArgStyleIfPossible = function () {
        for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
          var n = this.char();
          switch (n) {
            case 39: {
              this.bump();
              var i = this.clonePosition();
              if (!this.bumpUntil("'"))
                return this.error(
                  d.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                  g(i, this.clonePosition())
                );
              this.bump();
              break;
            }
            case 123: {
              (t += 1), this.bump();
              break;
            }
            case 125: {
              if (t > 0) t -= 1;
              else
                return {
                  val: this.message.slice(r.offset, this.offset()),
                  err: null,
                };
              break;
            }
            default:
              this.bump();
              break;
          }
        }
        return { val: this.message.slice(r.offset, this.offset()), err: null };
      }),
      (e.prototype.parseNumberSkeletonFromString = function (t, r) {
        var n = [];
        try {
          n = Cr(t);
        } catch {
          return this.error(d.INVALID_NUMBER_SKELETON, r);
        }
        return {
          val: {
            type: Y.number,
            tokens: n,
            location: r,
            parsedOptions: this.shouldParseSkeletons ? Pr(n) : {},
          },
          err: null,
        };
      }),
      (e.prototype.tryParsePluralOrSelectOptions = function (t, r, n, i) {
        for (
          var a, s = !1, u = [], h = new Set(), o = i.value, l = i.location;
          ;
  
        ) {
          if (o.length === 0) {
            var c = this.clonePosition();
            if (r !== "select" && this.bumpIf("=")) {
              var f = this.tryParseDecimalInteger(
                d.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                d.INVALID_PLURAL_ARGUMENT_SELECTOR
              );
              if (f.err) return f;
              (l = g(c, this.clonePosition())),
                (o = this.message.slice(c.offset, this.offset()));
            } else break;
          }
          if (h.has(o))
            return this.error(
              r === "select"
                ? d.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                : d.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
              l
            );
          o === "other" && (s = !0), this.bumpSpace();
          var m = this.clonePosition();
          if (!this.bumpIf("{"))
            return this.error(
              r === "select"
                ? d.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                : d.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
              g(this.clonePosition(), this.clonePosition())
            );
          var v = this.parseMessage(t + 1, r, n);
          if (v.err) return v;
          var x = this.tryParseArgumentClose(m);
          if (x.err) return x;
          u.push([o, { value: v.val, location: g(m, this.clonePosition()) }]),
            h.add(o),
            this.bumpSpace(),
            (a = this.parseIdentifierIfPossible()),
            (o = a.value),
            (l = a.location);
        }
        return u.length === 0
          ? this.error(
              r === "select"
                ? d.EXPECT_SELECT_ARGUMENT_SELECTOR
                : d.EXPECT_PLURAL_ARGUMENT_SELECTOR,
              g(this.clonePosition(), this.clonePosition())
            )
          : this.requiresOtherClause && !s
          ? this.error(
              d.MISSING_OTHER_CLAUSE,
              g(this.clonePosition(), this.clonePosition())
            )
          : { val: u, err: null };
      }),
      (e.prototype.tryParseDecimalInteger = function (t, r) {
        var n = 1,
          i = this.clonePosition();
        this.bumpIf("+") || (this.bumpIf("-") && (n = -1));
        for (var a = !1, s = 0; !this.isEOF(); ) {
          var u = this.char();
          if (u >= 48 && u <= 57) (a = !0), (s = s * 10 + (u - 48)), this.bump();
          else break;
        }
        var h = g(i, this.clonePosition());
        return a
          ? ((s *= n), $r(s) ? { val: s, err: null } : this.error(r, h))
          : this.error(t, h);
      }),
      (e.prototype.offset = function () {
        return this.position.offset;
      }),
      (e.prototype.isEOF = function () {
        return this.offset() === this.message.length;
      }),
      (e.prototype.clonePosition = function () {
        return {
          offset: this.position.offset,
          line: this.position.line,
          column: this.position.column,
        };
      }),
      (e.prototype.char = function () {
        var t = this.position.offset;
        if (t >= this.message.length) throw Error("out of bound");
        var r = kt(this.message, t);
        if (r === void 0)
          throw Error(
            "Offset ".concat(t, " is at invalid UTF-16 code unit boundary")
          );
        return r;
      }),
      (e.prototype.error = function (t, r) {
        return {
          val: null,
          err: { kind: t, message: this.message, location: r },
        };
      }),
      (e.prototype.bump = function () {
        if (!this.isEOF()) {
          var t = this.char();
          t === 10
            ? ((this.position.line += 1),
              (this.position.column = 1),
              (this.position.offset += 1))
            : ((this.position.column += 1),
              (this.position.offset += t < 65536 ? 1 : 2));
        }
      }),
      (e.prototype.bumpIf = function (t) {
        if (st(this.message, t, this.offset())) {
          for (var r = 0; r < t.length; r++) this.bump();
          return !0;
        }
        return !1;
      }),
      (e.prototype.bumpUntil = function (t) {
        var r = this.offset(),
          n = this.message.indexOf(t, r);
        return n >= 0
          ? (this.bumpTo(n), !0)
          : (this.bumpTo(this.message.length), !1);
      }),
      (e.prototype.bumpTo = function (t) {
        if (this.offset() > t)
          throw Error(
            "targetOffset "
              .concat(t, " must be greater than or equal to the current offset ")
              .concat(this.offset())
          );
        for (t = Math.min(t, this.message.length); ; ) {
          var r = this.offset();
          if (r === t) break;
          if (r > t)
            throw Error(
              "targetOffset ".concat(
                t,
                " is at invalid UTF-16 code unit boundary"
              )
            );
          if ((this.bump(), this.isEOF())) break;
        }
      }),
      (e.prototype.bumpSpace = function () {
        for (; !this.isEOF() && Ut(this.char()); ) this.bump();
      }),
      (e.prototype.peek = function () {
        if (this.isEOF()) return null;
        var t = this.char(),
          r = this.offset(),
          n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
        return n ?? null;
      }),
      e
    );
  })();
  function Le(e) {
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
  }
  function Wr(e) {
    return Le(e) || e === 47;
  }
  function Zr(e) {
    return (
      e === 45 ||
      e === 46 ||
      (e >= 48 && e <= 57) ||
      e === 95 ||
      (e >= 97 && e <= 122) ||
      (e >= 65 && e <= 90) ||
      e == 183 ||
      (e >= 192 && e <= 214) ||
      (e >= 216 && e <= 246) ||
      (e >= 248 && e <= 893) ||
      (e >= 895 && e <= 8191) ||
      (e >= 8204 && e <= 8205) ||
      (e >= 8255 && e <= 8256) ||
      (e >= 8304 && e <= 8591) ||
      (e >= 11264 && e <= 12271) ||
      (e >= 12289 && e <= 55295) ||
      (e >= 63744 && e <= 64975) ||
      (e >= 65008 && e <= 65533) ||
      (e >= 65536 && e <= 983039)
    );
  }
  function Ut(e) {
    return (
      (e >= 9 && e <= 13) ||
      e === 32 ||
      e === 133 ||
      (e >= 8206 && e <= 8207) ||
      e === 8232 ||
      e === 8233
    );
  }
  function Yr(e) {
    return (
      (e >= 33 && e <= 35) ||
      e === 36 ||
      (e >= 37 && e <= 39) ||
      e === 40 ||
      e === 41 ||
      e === 42 ||
      e === 43 ||
      e === 44 ||
      e === 45 ||
      (e >= 46 && e <= 47) ||
      (e >= 58 && e <= 59) ||
      (e >= 60 && e <= 62) ||
      (e >= 63 && e <= 64) ||
      e === 91 ||
      e === 92 ||
      e === 93 ||
      e === 94 ||
      e === 96 ||
      e === 123 ||
      e === 124 ||
      e === 125 ||
      e === 126 ||
      e === 161 ||
      (e >= 162 && e <= 165) ||
      e === 166 ||
      e === 167 ||
      e === 169 ||
      e === 171 ||
      e === 172 ||
      e === 174 ||
      e === 176 ||
      e === 177 ||
      e === 182 ||
      e === 187 ||
      e === 191 ||
      e === 215 ||
      e === 247 ||
      (e >= 8208 && e <= 8213) ||
      (e >= 8214 && e <= 8215) ||
      e === 8216 ||
      e === 8217 ||
      e === 8218 ||
      (e >= 8219 && e <= 8220) ||
      e === 8221 ||
      e === 8222 ||
      e === 8223 ||
      (e >= 8224 && e <= 8231) ||
      (e >= 8240 && e <= 8248) ||
      e === 8249 ||
      e === 8250 ||
      (e >= 8251 && e <= 8254) ||
      (e >= 8257 && e <= 8259) ||
      e === 8260 ||
      e === 8261 ||
      e === 8262 ||
      (e >= 8263 && e <= 8273) ||
      e === 8274 ||
      e === 8275 ||
      (e >= 8277 && e <= 8286) ||
      (e >= 8592 && e <= 8596) ||
      (e >= 8597 && e <= 8601) ||
      (e >= 8602 && e <= 8603) ||
      (e >= 8604 && e <= 8607) ||
      e === 8608 ||
      (e >= 8609 && e <= 8610) ||
      e === 8611 ||
      (e >= 8612 && e <= 8613) ||
      e === 8614 ||
      (e >= 8615 && e <= 8621) ||
      e === 8622 ||
      (e >= 8623 && e <= 8653) ||
      (e >= 8654 && e <= 8655) ||
      (e >= 8656 && e <= 8657) ||
      e === 8658 ||
      e === 8659 ||
      e === 8660 ||
      (e >= 8661 && e <= 8691) ||
      (e >= 8692 && e <= 8959) ||
      (e >= 8960 && e <= 8967) ||
      e === 8968 ||
      e === 8969 ||
      e === 8970 ||
      e === 8971 ||
      (e >= 8972 && e <= 8991) ||
      (e >= 8992 && e <= 8993) ||
      (e >= 8994 && e <= 9e3) ||
      e === 9001 ||
      e === 9002 ||
      (e >= 9003 && e <= 9083) ||
      e === 9084 ||
      (e >= 9085 && e <= 9114) ||
      (e >= 9115 && e <= 9139) ||
      (e >= 9140 && e <= 9179) ||
      (e >= 9180 && e <= 9185) ||
      (e >= 9186 && e <= 9254) ||
      (e >= 9255 && e <= 9279) ||
      (e >= 9280 && e <= 9290) ||
      (e >= 9291 && e <= 9311) ||
      (e >= 9472 && e <= 9654) ||
      e === 9655 ||
      (e >= 9656 && e <= 9664) ||
      e === 9665 ||
      (e >= 9666 && e <= 9719) ||
      (e >= 9720 && e <= 9727) ||
      (e >= 9728 && e <= 9838) ||
      e === 9839 ||
      (e >= 9840 && e <= 10087) ||
      e === 10088 ||
      e === 10089 ||
      e === 10090 ||
      e === 10091 ||
      e === 10092 ||
      e === 10093 ||
      e === 10094 ||
      e === 10095 ||
      e === 10096 ||
      e === 10097 ||
      e === 10098 ||
      e === 10099 ||
      e === 10100 ||
      e === 10101 ||
      (e >= 10132 && e <= 10175) ||
      (e >= 10176 && e <= 10180) ||
      e === 10181 ||
      e === 10182 ||
      (e >= 10183 && e <= 10213) ||
      e === 10214 ||
      e === 10215 ||
      e === 10216 ||
      e === 10217 ||
      e === 10218 ||
      e === 10219 ||
      e === 10220 ||
      e === 10221 ||
      e === 10222 ||
      e === 10223 ||
      (e >= 10224 && e <= 10239) ||
      (e >= 10240 && e <= 10495) ||
      (e >= 10496 && e <= 10626) ||
      e === 10627 ||
      e === 10628 ||
      e === 10629 ||
      e === 10630 ||
      e === 10631 ||
      e === 10632 ||
      e === 10633 ||
      e === 10634 ||
      e === 10635 ||
      e === 10636 ||
      e === 10637 ||
      e === 10638 ||
      e === 10639 ||
      e === 10640 ||
      e === 10641 ||
      e === 10642 ||
      e === 10643 ||
      e === 10644 ||
      e === 10645 ||
      e === 10646 ||
      e === 10647 ||
      e === 10648 ||
      (e >= 10649 && e <= 10711) ||
      e === 10712 ||
      e === 10713 ||
      e === 10714 ||
      e === 10715 ||
      (e >= 10716 && e <= 10747) ||
      e === 10748 ||
      e === 10749 ||
      (e >= 10750 && e <= 11007) ||
      (e >= 11008 && e <= 11055) ||
      (e >= 11056 && e <= 11076) ||
      (e >= 11077 && e <= 11078) ||
      (e >= 11079 && e <= 11084) ||
      (e >= 11085 && e <= 11123) ||
      (e >= 11124 && e <= 11125) ||
      (e >= 11126 && e <= 11157) ||
      e === 11158 ||
      (e >= 11159 && e <= 11263) ||
      (e >= 11776 && e <= 11777) ||
      e === 11778 ||
      e === 11779 ||
      e === 11780 ||
      e === 11781 ||
      (e >= 11782 && e <= 11784) ||
      e === 11785 ||
      e === 11786 ||
      e === 11787 ||
      e === 11788 ||
      e === 11789 ||
      (e >= 11790 && e <= 11798) ||
      e === 11799 ||
      (e >= 11800 && e <= 11801) ||
      e === 11802 ||
      e === 11803 ||
      e === 11804 ||
      e === 11805 ||
      (e >= 11806 && e <= 11807) ||
      e === 11808 ||
      e === 11809 ||
      e === 11810 ||
      e === 11811 ||
      e === 11812 ||
      e === 11813 ||
      e === 11814 ||
      e === 11815 ||
      e === 11816 ||
      e === 11817 ||
      (e >= 11818 && e <= 11822) ||
      e === 11823 ||
      (e >= 11824 && e <= 11833) ||
      (e >= 11834 && e <= 11835) ||
      (e >= 11836 && e <= 11839) ||
      e === 11840 ||
      e === 11841 ||
      e === 11842 ||
      (e >= 11843 && e <= 11855) ||
      (e >= 11856 && e <= 11857) ||
      e === 11858 ||
      (e >= 11859 && e <= 11903) ||
      (e >= 12289 && e <= 12291) ||
      e === 12296 ||
      e === 12297 ||
      e === 12298 ||
      e === 12299 ||
      e === 12300 ||
      e === 12301 ||
      e === 12302 ||
      e === 12303 ||
      e === 12304 ||
      e === 12305 ||
      (e >= 12306 && e <= 12307) ||
      e === 12308 ||
      e === 12309 ||
      e === 12310 ||
      e === 12311 ||
      e === 12312 ||
      e === 12313 ||
      e === 12314 ||
      e === 12315 ||
      e === 12316 ||
      e === 12317 ||
      (e >= 12318 && e <= 12319) ||
      e === 12320 ||
      e === 12336 ||
      e === 64830 ||
      e === 64831 ||
      (e >= 65093 && e <= 65094)
    );
  }
  function Oe(e) {
    e.forEach(function (t) {
      if ((delete t.location, St(t) || Pt(t)))
        for (var r in t.options)
          delete t.options[r].location, Oe(t.options[r].value);
      else
        (Ct(t) && Nt(t.style)) || ((Bt(t) || At(t)) && Pe(t.style))
          ? delete t.style.location
          : It(t) && Oe(t.children);
    });
  }
  function qr(e, t) {
    t === void 0 && (t = {}),
      (t = _({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t));
    var r = new zr(e, t).parse();
    if (r.err) {
      var n = SyntaxError(d[r.err.kind]);
      throw (
        ((n.location = r.err.location), (n.originalMessage = r.err.message), n)
      );
    }
    return (t != null && t.captureLocation) || Oe(r.val), r.val;
  }
  function Ce(e, t) {
    var r = t && t.cache ? t.cache : rn,
      n = t && t.serializer ? t.serializer : tn,
      i = t && t.strategy ? t.strategy : Jr;
    return i(e, { cache: r, serializer: n });
  }
  function Qr(e) {
    return e == null || typeof e == "number" || typeof e == "boolean";
  }
  function Gt(e, t, r, n) {
    var i = Qr(n) ? n : r(n),
      a = t.get(i);
    return typeof a > "u" && ((a = e.call(this, n)), t.set(i, a)), a;
  }
  function Ft(e, t, r) {
    var n = Array.prototype.slice.call(arguments, 3),
      i = r(n),
      a = t.get(i);
    return typeof a > "u" && ((a = e.apply(this, n)), t.set(i, a)), a;
  }
  function $e(e, t, r, n, i) {
    return r.bind(t, e, n, i);
  }
  function Jr(e, t) {
    var r = e.length === 1 ? Gt : Ft;
    return $e(e, this, r, t.cache.create(), t.serializer);
  }
  function Kr(e, t) {
    return $e(e, this, Ft, t.cache.create(), t.serializer);
  }
  function en(e, t) {
    return $e(e, this, Gt, t.cache.create(), t.serializer);
  }
  var tn = function () {
    return JSON.stringify(arguments);
  };
  function je() {
    this.cache = Object.create(null);
  }
  je.prototype.get = function (e) {
    return this.cache[e];
  };
  je.prototype.set = function (e, t) {
    this.cache[e] = t;
  };
  var rn = {
      create: function () {
        return new je();
      },
    },
    Be = { variadic: Kr, monadic: en },
    q;
  (function (e) {
    (e.MISSING_VALUE = "MISSING_VALUE"),
      (e.INVALID_VALUE = "INVALID_VALUE"),
      (e.MISSING_INTL_API = "MISSING_INTL_API");
  })(q || (q = {}));
  var ye = (function (e) {
      xe(t, e);
      function t(r, n, i) {
        var a = e.call(this, r) || this;
        return (a.code = n), (a.originalMessage = i), a;
      }
      return (
        (t.prototype.toString = function () {
          return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
        }),
        t
      );
    })(Error),
    ht = (function (e) {
      xe(t, e);
      function t(r, n, i, a) {
        return (
          e.call(
            this,
            'Invalid values for "'
              .concat(r, '": "')
              .concat(n, '". Options are "')
              .concat(Object.keys(i).join('", "'), '"'),
            q.INVALID_VALUE,
            a
          ) || this
        );
      }
      return t;
    })(ye),
    nn = (function (e) {
      xe(t, e);
      function t(r, n, i) {
        return (
          e.call(
            this,
            'Value for "'.concat(r, '" must be of type ').concat(n),
            q.INVALID_VALUE,
            i
          ) || this
        );
      }
      return t;
    })(ye),
    an = (function (e) {
      xe(t, e);
      function t(r, n) {
        return (
          e.call(
            this,
            'The intl string context variable "'
              .concat(r, '" was not provided to the string "')
              .concat(n, '"'),
            q.MISSING_VALUE,
            n
          ) || this
        );
      }
      return t;
    })(ye),
    A;
  (function (e) {
    (e[(e.literal = 0)] = "literal"), (e[(e.object = 1)] = "object");
  })(A || (A = {}));
  function on(e) {
    return e.length < 2
      ? e
      : e.reduce(function (t, r) {
          var n = t[t.length - 1];
          return (
            !n || n.type !== A.literal || r.type !== A.literal
              ? t.push(r)
              : (n.value += r.value),
            t
          );
        }, []);
  }
  function sn(e) {
    return typeof e == "function";
  }
  function me(e, t, r, n, i, a, s) {
    if (e.length === 1 && nt(e[0]))
      return [{ type: A.literal, value: e[0].value }];
    for (var u = [], h = 0, o = e; h < o.length; h++) {
      var l = o[h];
      if (nt(l)) {
        u.push({ type: A.literal, value: l.value });
        continue;
      }
      if (Er(l)) {
        typeof a == "number" &&
          u.push({ type: A.literal, value: r.getNumberFormat(t).format(a) });
        continue;
      }
      var c = l.value;
      if (!(i && c in i)) throw new an(c, s);
      var f = i[c];
      if (yr(l)) {
        (!f || typeof f == "string" || typeof f == "number") &&
          (f = typeof f == "string" || typeof f == "number" ? String(f) : ""),
          u.push({ type: typeof f == "string" ? A.literal : A.object, value: f });
        continue;
      }
      if (Bt(l)) {
        var m =
          typeof l.style == "string"
            ? n.date[l.style]
            : Pe(l.style)
            ? l.style.parsedOptions
            : void 0;
        u.push({ type: A.literal, value: r.getDateTimeFormat(t, m).format(f) });
        continue;
      }
      if (At(l)) {
        var m =
          typeof l.style == "string"
            ? n.time[l.style]
            : Pe(l.style)
            ? l.style.parsedOptions
            : n.time.medium;
        u.push({ type: A.literal, value: r.getDateTimeFormat(t, m).format(f) });
        continue;
      }
      if (Ct(l)) {
        var m =
          typeof l.style == "string"
            ? n.number[l.style]
            : Nt(l.style)
            ? l.style.parsedOptions
            : void 0;
        m && m.scale && (f = f * (m.scale || 1)),
          u.push({ type: A.literal, value: r.getNumberFormat(t, m).format(f) });
        continue;
      }
      if (It(l)) {
        var v = l.children,
          x = l.value,
          M = i[x];
        if (!sn(M)) throw new nn(x, "function", s);
        var P = me(v, t, r, n, i, a),
          z = M(
            P.map(function ($) {
              return $.value;
            })
          );
        Array.isArray(z) || (z = [z]),
          u.push.apply(
            u,
            z.map(function ($) {
              return {
                type: typeof $ == "string" ? A.literal : A.object,
                value: $,
              };
            })
          );
      }
      if (St(l)) {
        var O = l.options[f] || l.options.other;
        if (!O) throw new ht(l.value, f, Object.keys(l.options), s);
        u.push.apply(u, me(O.value, t, r, n, i));
        continue;
      }
      if (Pt(l)) {
        var O = l.options["=".concat(f)];
        if (!O) {
          if (!Intl.PluralRules)
            throw new ye(
              `Intl.PluralRules is not available in this environment.
  Try polyfilling it using "@formatjs/intl-pluralrules"
  `,
              q.MISSING_INTL_API,
              s
            );
          var te = r
            .getPluralRules(t, { type: l.pluralType })
            .select(f - (l.offset || 0));
          O = l.options[te] || l.options.other;
        }
        if (!O) throw new ht(l.value, f, Object.keys(l.options), s);
        u.push.apply(u, me(O.value, t, r, n, i, f - (l.offset || 0)));
        continue;
      }
    }
    return on(u);
  }
  function ln(e, t) {
    return t
      ? _(
          _(_({}, e || {}), t || {}),
          Object.keys(e).reduce(function (r, n) {
            return (r[n] = _(_({}, e[n]), t[n] || {})), r;
          }, {})
        )
      : e;
  }
  function un(e, t) {
    return t
      ? Object.keys(e).reduce(function (r, n) {
          return (r[n] = ln(e[n], t[n])), r;
        }, _({}, e))
      : e;
  }
  function Ae(e) {
    return {
      create: function () {
        return {
          get: function (t) {
            return e[t];
          },
          set: function (t, r) {
            e[t] = r;
          },
        };
      },
    };
  }
  function hn(e) {
    return (
      e === void 0 && (e = { number: {}, dateTime: {}, pluralRules: {} }),
      {
        getNumberFormat: Ce(
          function () {
            for (var t, r = [], n = 0; n < arguments.length; n++)
              r[n] = arguments[n];
            return new ((t = Intl.NumberFormat).bind.apply(
              t,
              we([void 0], r, !1)
            ))();
          },
          { cache: Ae(e.number), strategy: Be.variadic }
        ),
        getDateTimeFormat: Ce(
          function () {
            for (var t, r = [], n = 0; n < arguments.length; n++)
              r[n] = arguments[n];
            return new ((t = Intl.DateTimeFormat).bind.apply(
              t,
              we([void 0], r, !1)
            ))();
          },
          { cache: Ae(e.dateTime), strategy: Be.variadic }
        ),
        getPluralRules: Ce(
          function () {
            for (var t, r = [], n = 0; n < arguments.length; n++)
              r[n] = arguments[n];
            return new ((t = Intl.PluralRules).bind.apply(
              t,
              we([void 0], r, !1)
            ))();
          },
          { cache: Ae(e.pluralRules), strategy: Be.variadic }
        ),
      }
    );
  }
  var $t = (function () {
    function e(t, r, n, i) {
      var a = this;
      if (
        (r === void 0 && (r = e.defaultLocale),
        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
        (this.format = function (h) {
          var o = a.formatToParts(h);
          if (o.length === 1) return o[0].value;
          var l = o.reduce(function (c, f) {
            return (
              !c.length ||
              f.type !== A.literal ||
              typeof c[c.length - 1] != "string"
                ? c.push(f.value)
                : (c[c.length - 1] += f.value),
              c
            );
          }, []);
          return l.length <= 1 ? l[0] || "" : l;
        }),
        (this.formatToParts = function (h) {
          return me(
            a.ast,
            a.locales,
            a.formatters,
            a.formats,
            h,
            void 0,
            a.message
          );
        }),
        (this.resolvedOptions = function () {
          var h;
          return {
            locale:
              ((h = a.resolvedLocale) === null || h === void 0
                ? void 0
                : h.toString()) ||
              Intl.NumberFormat.supportedLocalesOf(a.locales)[0],
          };
        }),
        (this.getAst = function () {
          return a.ast;
        }),
        (this.locales = r),
        (this.resolvedLocale = e.resolveLocale(r)),
        typeof t == "string")
      ) {
        if (((this.message = t), !e.__parse))
          throw new TypeError(
            "IntlMessageFormat.__parse must be set to process `message` of type `string`"
          );
        var s = i || {};
        s.formatters;
        var u = rr(s, ["formatters"]);
        this.ast = e.__parse(t, _(_({}, u), { locale: this.resolvedLocale }));
      } else this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      (this.formats = un(e.formats, n)),
        (this.formatters = (i && i.formatters) || hn(this.formatterCache));
    }
    return (
      Object.defineProperty(e, "defaultLocale", {
        get: function () {
          return (
            e.memoizedDefaultLocale ||
              (e.memoizedDefaultLocale =
                new Intl.NumberFormat().resolvedOptions().locale),
            e.memoizedDefaultLocale
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.memoizedDefaultLocale = null),
      (e.resolveLocale = function (t) {
        if (!(typeof Intl.Locale > "u")) {
          var r = Intl.NumberFormat.supportedLocalesOf(t);
          return r.length > 0
            ? new Intl.Locale(r[0])
            : new Intl.Locale(typeof t == "string" ? t : t[0]);
        }
      }),
      (e.__parse = qr),
      (e.formats = {
        number: {
          integer: { maximumFractionDigits: 0 },
          currency: { style: "currency" },
          percent: { style: "percent" },
        },
        date: {
          short: { month: "numeric", day: "numeric", year: "2-digit" },
          medium: { month: "short", day: "numeric", year: "numeric" },
          long: { month: "long", day: "numeric", year: "numeric" },
          full: {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          },
        },
        time: {
          short: { hour: "numeric", minute: "numeric" },
          medium: { hour: "numeric", minute: "numeric", second: "numeric" },
          long: {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          },
          full: {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          },
        },
      }),
      e
    );
  })();
  function cn(e, t) {
    if (t == null) return;
    if (t in e) return e[t];
    const r = t.split(".");
    let n = e;
    for (let i = 0; i < r.length; i++)
      if (typeof n == "object") {
        if (i > 0) {
          const a = r.slice(i, r.length).join(".");
          if (a in n) {
            n = n[a];
            break;
          }
        }
        n = n[r[i]];
      } else n = void 0;
    return n;
  }
  const G = {},
    fn = (e, t, r) => r && (t in G || (G[t] = {}), e in G[t] || (G[t][e] = r), r),
    jt = (e, t) => {
      if (t == null) return;
      if (t in G && e in G[t]) return G[t][e];
      const r = ue(t);
      for (let n = 0; n < r.length; n++) {
        const i = r[n],
          a = dn(i, e);
        if (a) return fn(e, t, a);
      }
    };
  let Ve;
  const le = Fe({});
  function mn(e) {
    return Ve[e] || null;
  }
  function Vt(e) {
    return e in Ve;
  }
  function dn(e, t) {
    if (!Vt(e)) return null;
    const r = mn(e);
    return cn(r, t);
  }
  function pn(e) {
    if (e == null) return;
    const t = ue(e);
    for (let r = 0; r < t.length; r++) {
      const n = t[r];
      if (Vt(n)) return n;
    }
  }
  function Xt(e, ...t) {
    delete G[e], le.update((r) => ((r[e] = xr.all([r[e] || {}, ...t])), r));
  }
  J([le], ([e]) => Object.keys(e));
  le.subscribe((e) => (Ve = e));
  const de = {};
  function gn(e, t) {
    de[e].delete(t), de[e].size === 0 && delete de[e];
  }
  function zt(e) {
    return de[e];
  }
  function bn(e) {
    return ue(e)
      .map((t) => {
        const r = zt(t);
        return [t, r ? [...r] : []];
      })
      .filter(([, t]) => t.length > 0);
  }
  function be(e) {
    return e == null
      ? !1
      : ue(e).some((t) => {
          var r;
          return (r = zt(t)) == null ? void 0 : r.size;
        });
  }
  function vn(e, t) {
    return Promise.all(
      t.map((n) => (gn(e, n), n().then((i) => i.default || i)))
    ).then((n) => Xt(e, ...n));
  }
  const re = {};
  function Wt(e) {
    if (!be(e)) return e in re ? re[e] : Promise.resolve();
    const t = bn(e);
    return (
      (re[e] = Promise.all(t.map(([r, n]) => vn(r, n))).then(() => {
        if (be(e)) return Wt(e);
        delete re[e];
      })),
      re[e]
    );
  }
  var ct = Object.getOwnPropertySymbols,
    _n = Object.prototype.hasOwnProperty,
    xn = Object.prototype.propertyIsEnumerable,
    yn = (e, t) => {
      var r = {};
      for (var n in e) _n.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
      if (e != null && ct)
        for (var n of ct(e)) t.indexOf(n) < 0 && xn.call(e, n) && (r[n] = e[n]);
      return r;
    };
  const En = {
    number: {
      scientific: { notation: "scientific" },
      engineering: { notation: "engineering" },
      compactLong: { notation: "compact", compactDisplay: "long" },
      compactShort: { notation: "compact", compactDisplay: "short" },
    },
    date: {
      short: { month: "numeric", day: "numeric", year: "2-digit" },
      medium: { month: "short", day: "numeric", year: "numeric" },
      long: { month: "long", day: "numeric", year: "numeric" },
      full: { weekday: "long", month: "long", day: "numeric", year: "numeric" },
    },
    time: {
      short: { hour: "numeric", minute: "numeric" },
      medium: { hour: "numeric", minute: "numeric", second: "numeric" },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      },
    },
  };
  function wn({ locale: e, id: t }) {
    console.warn(
      `[svelte-i18n] The message "${t}" was not found in "${ue(e).join(
        '", "'
      )}".${
        be(F())
          ? `
  
  Note: there are at least one loader still registered to this locale that wasn't executed.`
          : ""
      }`
    );
  }
  const Tn = {
      fallbackLocale: null,
      loadingDelay: 200,
      formats: En,
      warnOnMissingMessages: !0,
      handleMissingMessage: void 0,
      ignoreTag: !0,
    },
    ne = Tn;
  function Q() {
    return ne;
  }
  function Hn(e) {
    const t = e,
      { formats: r } = t,
      n = yn(t, ["formats"]);
    let i = e.fallbackLocale;
    if (e.initialLocale)
      try {
        $t.resolveLocale(e.initialLocale) && (i = e.initialLocale);
      } catch {
        console.warn(
          `[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`
        );
      }
    return (
      n.warnOnMissingMessages &&
        (delete n.warnOnMissingMessages,
        n.handleMissingMessage == null
          ? (n.handleMissingMessage = wn)
          : console.warn(
              '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
            )),
      Object.assign(ne, n, { initialLocale: i }),
      r &&
        ("number" in r && Object.assign(ne.formats.number, r.number),
        "date" in r && Object.assign(ne.formats.date, r.date),
        "time" in r && Object.assign(ne.formats.time, r.time)),
      K.set(i)
    );
  }
  const Se = Fe(!1);
  var Cn = Object.defineProperty,
    Bn = Object.defineProperties,
    An = Object.getOwnPropertyDescriptors,
    ft = Object.getOwnPropertySymbols,
    Sn = Object.prototype.hasOwnProperty,
    Pn = Object.prototype.propertyIsEnumerable,
    mt = (e, t, r) =>
      t in e
        ? Cn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (e[t] = r),
    In = (e, t) => {
      for (var r in t || (t = {})) Sn.call(t, r) && mt(e, r, t[r]);
      if (ft) for (var r of ft(t)) Pn.call(t, r) && mt(e, r, t[r]);
      return e;
    },
    Nn = (e, t) => Bn(e, An(t));
  let Re;
  const ve = Fe(null);
  function dt(e) {
    return e
      .split("-")
      .map((t, r, n) => n.slice(0, r + 1).join("-"))
      .reverse();
  }
  function ue(e, t = Q().fallbackLocale) {
    const r = dt(e);
    return t ? [...new Set([...r, ...dt(t)])] : r;
  }
  function F() {
    return Re ?? void 0;
  }
  ve.subscribe((e) => {
    (Re = e ?? void 0),
      typeof window < "u" &&
        e != null &&
        document.documentElement.setAttribute("lang", e);
  });
  const Mn = (e) => {
      if (e && pn(e) && be(e)) {
        const { loadingDelay: t } = Q();
        let r;
        return (
          typeof window < "u" && F() != null && t
            ? (r = window.setTimeout(() => Se.set(!0), t))
            : Se.set(!0),
          Wt(e)
            .then(() => {
              ve.set(e);
            })
            .finally(() => {
              clearTimeout(r), Se.set(!1);
            })
        );
      }
      return ve.set(e);
    },
    K = Nn(In({}, ve), { set: Mn }),
    Ln = () =>
      typeof window > "u"
        ? null
        : window.navigator.language || window.navigator.languages[0],
    Ee = (e) => {
      const t = Object.create(null);
      return (n) => {
        const i = JSON.stringify(n);
        return i in t ? t[i] : (t[i] = e(n));
      };
    };
  var On = Object.defineProperty,
    _e = Object.getOwnPropertySymbols,
    Zt = Object.prototype.hasOwnProperty,
    Yt = Object.prototype.propertyIsEnumerable,
    pt = (e, t, r) =>
      t in e
        ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (e[t] = r),
    Xe = (e, t) => {
      for (var r in t || (t = {})) Zt.call(t, r) && pt(e, r, t[r]);
      if (_e) for (var r of _e(t)) Yt.call(t, r) && pt(e, r, t[r]);
      return e;
    },
    ee = (e, t) => {
      var r = {};
      for (var n in e) Zt.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
      if (e != null && _e)
        for (var n of _e(e)) t.indexOf(n) < 0 && Yt.call(e, n) && (r[n] = e[n]);
      return r;
    };
  const oe = (e, t) => {
      const { formats: r } = Q();
      if (e in r && t in r[e]) return r[e][t];
      throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
    },
    Rn = Ee((e) => {
      var t = e,
        { locale: r, format: n } = t,
        i = ee(t, ["locale", "format"]);
      if (r == null)
        throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
      return n && (i = oe("number", n)), new Intl.NumberFormat(r, i);
    }),
    kn = Ee((e) => {
      var t = e,
        { locale: r, format: n } = t,
        i = ee(t, ["locale", "format"]);
      if (r == null)
        throw new Error('[svelte-i18n] A "locale" must be set to format dates');
      return (
        n
          ? (i = oe("date", n))
          : Object.keys(i).length === 0 && (i = oe("date", "short")),
        new Intl.DateTimeFormat(r, i)
      );
    }),
    Dn = Ee((e) => {
      var t = e,
        { locale: r, format: n } = t,
        i = ee(t, ["locale", "format"]);
      if (r == null)
        throw new Error(
          '[svelte-i18n] A "locale" must be set to format time values'
        );
      return (
        n
          ? (i = oe("time", n))
          : Object.keys(i).length === 0 && (i = oe("time", "short")),
        new Intl.DateTimeFormat(r, i)
      );
    }),
    Un = (e = {}) => {
      var t = e,
        { locale: r = F() } = t,
        n = ee(t, ["locale"]);
      return Rn(Xe({ locale: r }, n));
    },
    Gn = (e = {}) => {
      var t = e,
        { locale: r = F() } = t,
        n = ee(t, ["locale"]);
      return kn(Xe({ locale: r }, n));
    },
    Fn = (e = {}) => {
      var t = e,
        { locale: r = F() } = t,
        n = ee(t, ["locale"]);
      return Dn(Xe({ locale: r }, n));
    },
    $n = Ee(
      (e, t = F()) => new $t(e, t, Q().formats, { ignoreTag: Q().ignoreTag })
    ),
    jn = (e, t = {}) => {
      var r, n, i, a;
      let s = t;
      typeof e == "object" && ((s = e), (e = s.id));
      const { values: u, locale: h = F(), default: o } = s;
      if (h == null)
        throw new Error(
          "[svelte-i18n] Cannot format a message without first setting the initial locale."
        );
      let l = jt(e, h);
      if (!l)
        l =
          (a =
            (i =
              (n = (r = Q()).handleMissingMessage) == null
                ? void 0
                : n.call(r, { locale: h, id: e, defaultValue: o })) != null
              ? i
              : o) != null
            ? a
            : e;
      else if (typeof l != "string")
        return (
          console.warn(
            `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof l}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
          ),
          l
        );
      if (!u) return l;
      let c = l;
      try {
        c = $n(l, h).format(u);
      } catch (f) {
        f instanceof Error &&
          console.warn(
            `[svelte-i18n] Message "${e}" has syntax error:`,
            f.message
          );
      }
      return c;
    },
    Vn = (e, t) => Fn(t).format(e),
    Xn = (e, t) => Gn(t).format(e),
    zn = (e, t) => Un(t).format(e),
    Wn = (e, t = F()) => jt(e, t);
  J([K, le], () => jn);
  J([K], () => Vn);
  J([K], () => Xn);
  J([K], () => zn);
  J([K, le], () => Wn);
  const Zn = {
      actions: {
        approve: {
          rejected: { title: "Request to approve rejected" },
          success: {
            message: "You can now proceed to bridge {token}.",
            title: "Approved token",
          },
          tx: {
            message:
              'Track the {token} token approval status on the explorer <a href="{url}" target="_blank"><b>here</b></a>.',
            title: "Approval sent",
          },
        },
        bridge: {
          success: {
            message: "Your funds are being prepared for claiming on Taiko.",
            title: "Transaction completed",
          },
          tx: {
            message:
              'Your bridge transaction was confirmed. The transaction can take a few minutes to complete, track it <a href="{url}" class="link" target="_blank"><b>here</b></a>.',
            title: "Transaction sent",
          },
        },
        nft_manual: "Add manually",
        nft_scan: "Scan for NFT",
        nft_scan_again: "Scan again",
      },
      button: {
        approve: "Approve",
        approved: "Approved",
        approving: "Approving",
        bridge: "Bridge",
        bridging: "Bridging",
        fetch: "Fetch NFT data",
        import: "Import",
      },
      description: {
        default: "Send your assets across chains.",
        nft: {
          confirm: "Bridge your NFTs",
          import: "Transfer your NFTs across chains",
          recipient: "Set up information on the recipient blockchain.",
          review: "Verify your transaction details",
        },
      },
      errors: {
        approve_error: {
          message: "We encountered an issue while trying to approve this token.",
          title: "Approval failed",
        },
        approve_rejected: { title: "Request to approve rejected by user" },
        cannot_fetch_balance: "Error fetching balance. Wrong chain?",
        custom_token: {
          description: "Are you on the right network?",
          not_found: "Token not found!",
        },
        insufficient_allowance: {
          message: "Please increase your allowance to proceed with bridging.",
          title: "Insufficient allowance",
        },
        insufficient_balance: {
          message: "Sorry, your wallet balance is too low to cover this token.",
          title: "Insufficient wallet balance",
        },
        no_allowance_required: {
          message: "You already have sufficient allowance for this request.",
          title: "Allowance already set",
        },
        no_decimals_allowed: "Decimals are not supported for this token",
        send_erc20_error: {
          message: "There was an issue attempting to send ERC20 token.",
          title: "Failed to send",
        },
        send_message_error: {
          message: "Please try again",
          title: "Failed to send",
        },
        unknown_error: {
          message: "An unexpected error has occurred. Please try again.",
          title: "Unknown error",
        },
      },
      nft: {
        step: {
          confirm: {
            approve: {
              description:
                "Before initiating the bridge, it's necessary to first approve the transfer.",
              pending: "Please wait for your transaction to be picked up",
              title: "Approval required",
            },
            approved: {
              description: "All token are approved, you can now bridge your NFTs",
              title: "Proceed to bridge",
            },
            bridge: {
              success: {
                message:
                  'Your bridge transaction was confirmed. The transaction can take a few minutes to complete, track it <a href="{url}" target="_blank"><b>here</b></a>.',
              },
            },
            button: { back: "Back to bridge" },
            title: "Confirm",
          },
          import: {
            nft_card: { select: "Select NFT", title: "NFT details" },
            scan_screen: {
              description: "Don't see your NFTs? Try adding them manually!",
              title: "Your NFTs ({number} items)",
            },
            title: "Import",
          },
          review: {
            recipient_details: "Recipient details",
            title: "Review",
            transfer_details: "Transfer details",
            your_tokens: "Your tokens on",
          },
        },
      },
      title: {
        default: "Bridge Token",
        nft: {
          confirm: "Confirm",
          import: "Import NFT",
          recipient: "Recipient",
          review: "Review",
        },
      },
    },
    Yn = { from: "From", to: "To" },
    qn = {
      currently_on: "You are currently on",
      disabled_options: {
        description:
          "Some options might be disabled due to not having a valid bridge configuration",
        title: "Disabled options?",
      },
      from_placeholder: "Select Source Chain",
      placeholder: "Select chain",
      to_placeholder: "Select Destination Chain",
    },
    Qn = {
      add: "Add",
      address: "Address",
      amount: "Amount",
      back: "Go back",
      balance: "Balance",
      cancel: "Cancel",
      close: "Close",
      collection: "Collection",
      confirm: "Confirm",
      continue: "Continue",
      contract_address: "Contract address",
      customized: "Customized",
      destination: "Destination",
      edit: "Edit",
      from: "From",
      id: "ID",
      loading: "Loading",
      name: "Name",
      ok: "Ok",
      success: "Success!",
      to: "To",
      token_id: "Token ID",
      token_standard: "Token standard",
    },
    Jn = { placeholder: "Add custom recipient" },
    Kn = {
      button: {
        checking: "Checking mintability",
        mint: "Mint",
        minting: "Minting",
      },
      description: "Mint test tokens.",
      mint: {
        rejected: {
          message: "An error occurred while attempting to mint the token.",
          title: "Error minting token",
        },
        success: {
          message: "Check your updated balance on the Bridge page.",
          title: "Token minted successfully",
        },
        tx: {
          message:
            'Track the progress on the explorer <a href="{url}" target="_blank"><b>here</b></a>.',
          title: "Transaction sent",
        },
      },
      title: "Faucet",
      warning: {
        insufficient_balance:
          "You don't have enough ETH to complete the transaction. Please add some ETH to your wallet.",
        no_connected: "Please connect your wallet to mint tokens.",
        not_mintable: "This token is not mintable on this network",
        token_minted: "You have already minted this token.",
        unknown: "Something did not work",
      },
      wrong_chain: {
        button: "Switch to {network}",
        message:
          "It appears you are on the wrong network. Switch to {network} to mint tokens.",
      },
    },
    ei = {
      address_input: {
        errors: {
          invalid: "Invalid address format",
          too_short: "Address is too short",
        },
        label: {
          contract: "Contract address",
          default: "Address",
          recipient: "Recipient address",
        },
        placeholder: "Enter a valid ethereum address",
        success: "Valid address format",
      },
      amount: {
        balance: "Balance",
        button: { max: "Max" },
        "errors.failed_max": "Could not estimate max amount to bridge.",
        label: "Amount",
      },
      token_id_input: {
        errors: { invalid: "Not a valid numeric value" },
        label: "Token ID",
        placeholder: "1 or 5,14,733",
      },
    },
    ti = {
      account: {
        connected: "Account connected",
        disconnected: "Account disconnected",
        required: "Please connect your wallet.",
      },
      bridge: { nft_scanning: "Scanning for NFTs" },
      network: {
        pending: {
          message: "Please open your wallet to check the current status.",
          title: "Network switch pending",
        },
        rejected: {
          message: "Request to switch network has failed.",
          title: "Network switch error",
        },
        required: "Source chain must be selected.",
        required_dest: "Destination chain must be selected.",
        switching: "Switching network",
      },
    },
    ri = {
      bridge: "Bridge",
      explorer: "Explorer",
      faucet: "Faucet",
      guide: "Guide",
      nft: "NFT",
      theme: "Theme",
      token: "Token",
      transactions: "Transactions",
    },
    ni = {
      button: { cancel: "Cancel", confirm: "Confirm" },
      custom: { label: "Custom", text: "Customize your processing fee" },
      description:
        "The payment you provide to the relayer for handling your bridge message on the destination chain.",
      link: "Customize fee",
      none: {
        label: "None",
        text: "Use ETH to manually claim your bridged token later",
        warning: "Insufficient ETH to cover the gas fees for claiming.",
      },
      recommended: {
        calculating: "Calculating",
        error: "Error calculating",
        label: "Recommended",
      },
      title: "Processing fee",
      tooltip:
        "The payment you provide to the relayer for handling your bridge message on the destination chain.",
      tooltip_title: "What is Processing Fee?",
    },
    ii = {
      description:
        "You can set a custom address as the recipient of your funds, instead of your current wallet address.",
      link: "Change recipient",
      placeholder: "Add custom recipient 0x…",
      title: "Recipient address",
      tooltip:
        "Defaults to your address. You can add a custom recipient address as well.",
      tooltip_title: "What is Custom Recipient?",
    },
    ai = {
      description:
        "Your current network is not supported. Please select one of the following chains to proceed:",
      title: "Incorrect network detected",
    },
    oi = {
      add_custom: "Add Custom",
      custom_token: {
        button: "Add token",
        description:
          "You can add your own token by entering the contract address below. Make sure you are on the chain where the token is deployed.",
        title: "Add your own token",
      },
      label: "Select token",
    },
    si = {
      actions: {
        claim: {
          dialog: {
            description:
              "Insufficient balance to claim yourself. Please wait for the relayer to claim for you automatically. Refer to our guide for more information.",
            link: "Go to guide",
            title: "Please wait",
          },
          rejected: { title: "Request to claim rejected." },
          success: {
            message: "Your funds have been successfully claimed on {network}.",
            title: "Transaction completed",
          },
          tx: {
            message:
              'Track the progress on the explorer <a href="{url}" target="_blank"><b>here</b></a>.',
            title: "Transaction sent",
          },
        },
        release: {
          rejected: { title: "Request to release rejected." },
          success: {
            message: "Your funds have been released on {network}",
            title: "Transaction completed",
          },
          tx: {
            message:
              'Track the progress on the explorer <a href="{url}" target="_blank"><b>here</b></a>.',
            title: "Transaction sent",
          },
        },
      },
      button: { claim: "Claim", release: "Release", retry: "Retry" },
      description: "Track your bridge transactions here.",
      errors: {
        insufficient_balance:
          "Insufficient balance to claim yourself. Please wait for the relayer to claim for you automatically. Refer to our guide for more information.",
        relayer_offline:
          "Relayer did not respond. Your transactions may only be loaded partially.",
      },
      filter: {
        all: "All transactions",
        claimed: "Claimed",
        failed: "Failed",
        processing: "Processing",
        retry: "Retriable",
      },
      header: {
        amount: "Amount",
        explorer: "Explorer link",
        from: "From",
        status: "Status",
        to: "To",
      },
      link: { explorer: "View details", explorer_short: "View" },
      no_transactions: "No transactions found",
      status: {
        claim: {
          description:
            "Your asset is now ready for claiming on the destination chain and requires a transaction. If you have set a processing fee, the relayer will automatically handle the claiming process on your behalf.",
          name: "Claim",
        },
        claimed: {
          description:
            "Your asset has successfully completed the bridging process and is now available to you on the destination chain.",
          name: "Claimed",
        },
        claiming: "Claiming",
        dialog: {
          description: "The bridge message undergoes different stages:",
          title: "Message status",
        },
        failed: {
          description: "Your bridge transaction was unsuccessful.",
          name: "Failed",
        },
        pending: {
          description:
            " Your asset is not yet eligible for claiming. The bridging process from Taiko to Sepolia may take several hours before becoming claimable. Sepolia to Taiko bridging should be claimable within minutes.",
          name: "Pending",
        },
        processing: {
          description:
            "Transaction is processing. Depending on the pending blocks to be verified this can take up to several minutes.",
          name: "Processing",
        },
        release: {
          description:
            "Your bridged asset cannot be processed and is now accessible to you on the source chain.",
          name: "Release",
        },
        releasing: "Releasing",
        retry: {
          description:
            "The relayer was unable to process this message, and you will need to retry the processing yourself.",
          name: "Retry",
        },
      },
      title: "Transactions",
    },
    li = {
      connect: "Connect wallet",
      status: {
        connected: "Connected",
        connecting: "Connecting",
        disconnected: "Disconnected",
      },
    },
    ui = {
      bridge: Zn,
      chain: Yn,
      chain_selector: qn,
      common: Qn,
      custom_recipient: Jn,
      faucet: Kn,
      inputs: ei,
      messages: ti,
      nav: ri,
      processing_fee: ni,
      recipient: ii,
      switch_modal: ai,
      token_dropdown: oi,
      transactions: si,
      wallet: li,
    };
  Xt("en", ui);
  Hn({ fallbackLocale: "en", initialLocale: Ln() });
  const ze =
      "" + new URL("../assets/taiko-h-wht.CUQOjnzG.svg", import.meta.url).href,
    hi =
      "data:image/svg+xml,%3csvg%20width='15'%20height='8'%20viewBox='0%200%2015%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.378906%200.75H14.3789'%20stroke='%23CACBCE'%20stroke-width='1.2'/%3e%3cpath%20d='M0.378906%207.25H14.3789'%20stroke='%23CACBCE'%20stroke-width='1.2'/%3e%3c/svg%3e",
    ci =
      "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.46967%200.46967C0.762563%200.176777%201.23744%200.176777%201.53033%200.46967L7%205.93934L12.4697%200.469671C12.7626%200.176777%2013.2374%200.176778%2013.5303%200.469671C13.8232%200.762564%2013.8232%201.23744%2013.5303%201.53033L8.06066%207L13.5303%2012.4697C13.8232%2012.7626%2013.8232%2013.2374%2013.5303%2013.5303C13.2374%2013.8232%2012.7626%2013.8232%2012.4697%2013.5303L7%208.06066L1.53033%2013.5303C1.23744%2013.8232%200.762563%2013.8232%200.46967%2013.5303C0.176777%2013.2374%200.176777%2012.7626%200.46967%2012.4697L5.93934%207L0.46967%201.53033C0.176777%201.23744%200.176777%200.762563%200.46967%200.46967Z'%20fill='%23CACBCE'/%3e%3c/svg%3e",
    fi =
      "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_566_6238)'%3e%3cpath%20d='M7.01778%2014C6.79699%2014%206.61036%2013.8401%206.55689%2013.6259C6.38646%2012.9432%206.06021%2012.2172%205.57812%2011.4479C5.00695%2010.5243%204.19271%209.66756%203.13542%208.87761C2.21584%208.18258%201.29627%207.70861%200.376697%207.45577C0.158904%207.39592%200%207.20279%200%206.97691C0%206.75546%200.152791%206.56456%200.365731%206.50376C1.26732%206.24634%202.13585%205.82842%202.97135%205.25C3.93142%204.5816%204.7335%203.77951%205.3776%202.84375C5.9474%202.01015%206.33855%201.18572%206.55104%200.370445C6.60671%200.156866%206.79473%200%207.01547%200C7.23863%200%207.42798%200.160341%207.4823%200.376831C7.60494%200.865578%207.7966%201.36584%208.05728%201.8776C8.38544%202.50955%208.80467%203.11718%209.31511%203.70052C9.83766%204.2717%2010.421%204.7882%2011.0651%205.25C11.9068%205.84662%2012.7624%206.26578%2013.6321%206.50748C13.8454%206.56676%2014%206.75671%2014%206.97812C14%207.20286%2013.8407%207.39438%2013.624%207.45381C13.0728%207.60494%2012.5054%207.84868%2011.9219%208.18489C11.217%208.5981%2010.5608%209.09027%209.95309%209.66147C9.34549%2010.2205%208.84723%2010.8099%208.45831%2011.4297C7.97531%2012.2005%207.64869%2012.9322%207.47859%2013.6247C7.42581%2013.8396%207.23891%2014%207.01778%2014Z'%20fill='%23EE42AD'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_566_6238'%3e%3crect%20width='14'%20height='14'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
    mi =
      "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_566_6240)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.99831%207C3.1331%206.99909%203.37926e-07%203.86543%200%201.22392e-06L14%200C14%203.86543%2010.8669%206.99909%207.00168%207C10.8669%207.00091%2014%2010.1346%2014%2014H6.11959e-07C6.11959e-07%2010.1346%203.1331%207.00091%206.99831%207Z'%20fill='%23EE42AD'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_566_6240'%3e%3crect%20width='14'%20height='14'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
  function di(e) {
    let t, r;
    return {
      c() {
        (t = Ye("svg")), (r = Ye("path")), this.h();
      },
      l(n) {
        t = qe(n, "svg", {
          class: !0,
          width: !0,
          height: !0,
          viewBox: !0,
          xmlns: !0,
        });
        var i = S(t);
        (r = qe(i, "path", { "fill-rule": !0, "clip-rule": !0, d: !0 })),
          S(r).forEach(p),
          i.forEach(p),
          this.h();
      },
      h() {
        b(r, "fill-rule", "evenodd"),
          b(r, "clip-rule", "evenodd"),
          b(
            r,
            "d",
            // "M25.2209 25.8504C28.1055 23.1321 29.9062 19.2764 29.9062 15C29.9062 6.76751 23.2325 0.09375 15 0.09375C6.76751 0.09375 0.09375 6.76751 0.09375 15C0.09375 19.2764 1.89451 23.1321 4.77909 25.8504C7.44768 28.3651 11.0439 29.9062 15 29.9062C18.9561 29.9062 22.5523 28.3651 25.2209 25.8504ZM6.04879 23.8861C8.15018 21.2649 11.3791 19.5865 15 19.5865C18.6209 19.5865 21.8498 21.2649 23.9512 23.8861C21.6662 26.1878 18.4995 27.613 15 27.613C11.5005 27.613 8.33381 26.1878 6.04879 23.8861ZM20.7332 10.4135C20.7332 13.5798 18.1663 16.1466 15 16.1466C11.8337 16.1466 9.26683 13.5798 9.26683 10.4135C9.26683 7.24712 11.8337 4.68029 15 4.68029C18.1663 4.68029 20.7332 7.24712 20.7332 10.4135Z"
            ""
          ),
          b(t, "class", "fill-current hide_box"),
          b(t, "width", "20"),
          b(t, "height", "20"),
          b(t, "viewBox", "0 0 30 30"),
          b(t, "xmlns", "http://www.w3.org/2000/svg");
      },
      m(n, i) {
        C(n, t, i), H(t, r);
      },
      p: L,
      i: L,
      o: L,
      d(n) {
        n && p(t);
      },
    };
  }
  class qt extends V {
    constructor(t) {
      super(), X(this, t, null, di, j, {});
    }
  }
  function pi(e) {
    let t,
      r,
      n,
      i = et(e[0].address ?? "undefined") + "",
      a,
      s,
      u,
      h;
    return (
      (r = new qt({})),
      {
        c() {
          (t = w("button")), R(r.$$.fragment), (n = I()), (a = Ue(i)), this.h();
        },
        l(o) {
          t = T(o, "BUTTON", { class: !0 });
          var l = S(t);
          k(r.$$.fragment, l), (n = N(l)), (a = Ge(l, i)), l.forEach(p), this.h();
        },
        h() {
          b(
            t,
            "class",
            "btn bg-neutral border-0 text-primary-content rounded-full body-bold px-6 min-h-12 h-12 w-fit"
          );
        },
        m(o, l) {
          C(o, t, l),
            D(r, t, null),
            H(t, n),
            H(t, a),
            (s = !0),
            u || ((h = se(t, "click", e[2])), (u = !0));
        },
        p(o, l) {
          (!s || l & 1) &&
            i !== (i = et(o[0].address ?? "undefined") + "") &&
            wt(a, i);
        },
        i(o) {
          s || (E(r.$$.fragment, o), (s = !0));
        },
        o(o) {
          B(r.$$.fragment, o), (s = !1);
        },
        d(o) {
          o && p(t), U(r), (u = !1), h();
        },
      }
    );
  }
  function gi(e) {
    let t, r, n, i, a, s;
    return (
      (r = new qt({})),
      {
        c() {
          (t = w("button")),
            R(r.$$.fragment),
            (n = Ue(`
            Claim TKO`)),
            this.h();
        },
        l(u) {
          t = T(u, "BUTTON", { class: !0, onClick: !0 });
          var h = S(t);
          k(r.$$.fragment, h),
            (n = Ge(
              h,
              `
      Connect Wallet`
            )),
            h.forEach(p),
            this.h();
        },
        h() {
          b(
            t,
            "class",
            "btn btn-primary border-0 text-primary-content rounded-full body-bold px-6 min-h-12 h-12 w-fit btn_right_top"
          );
          t.setAttribute("onClick", "modalOpen()");
        },
        m(u, h) {
          C(u, t, h),
            D(r, t, null),
            H(t, n),
            (i = !0),
            a || ((s = se(t, "click", e[1])), (a = !0));
        },
        p: L,
        i(u) {
          i || (E(r.$$.fragment, u), (i = !0));
        },
        o(u) {
          B(r.$$.fragment, u), (i = !1);
        },
        d(u) {
          u && p(t), U(r), (a = !1), s();
        },
      }
    );
  }

  function bi(e) {
    let t, r, n, i;
    const a = [gi, pi],
      s = [];
    function u(h, o) {
      var l;
      return (l = h[0]) != null && l.isConnected ? 1 : 0;
    }
    return (
      (t = u(e)),
      (r = s[t] = a[t](e)),
      {
        c() {
          r.c(), (n = Qe());
        },
        l(h) {
          r.l(h), (n = Qe());
        },
        m(h, o) {
          s[t].m(h, o), C(h, n, o), (i = !0);
        },
        p(h, [o]) {
          let l = t;
          (t = u(h)),
            t === l
              ? s[t].p(h, o)
              : (pe(),
                B(s[l], 1, 1, () => {
                  s[l] = null;
                }),
                ge(),
                (r = s[t]),
                r ? r.p(h, o) : ((r = s[t] = a[t](h)), r.c()),
                E(r, 1),
                r.m(n.parentNode, n));
        },
        i(h) {
          i || (E(r), (i = !0));
        },
        o(h) {
          B(r), (i = !1);
        },
        d(h) {
          h && p(n), s[t].d(h);
        },
      }
    );
  }
  function vi(e, t, r) {
    let n;
    W(e, Tt, (s) => r(0, (n = s)));
    function i() {
      Ke.open({ view: "Connect" });
    }
    function a() {
      Ke.open({ view: "Account" });
    }
    return [n, i, a];
  }
  class Qt extends V {
    constructor(t) {
      super(), X(this, t, vi, bi, j, {});
    }
  }
  function _i(e) {
    let t,
      r,
      n,
      i,
      a,
      s,
      u = "MENU",
      h,
      o,
      l,
      c,
      f = `<div class="collapse collapse-plus bg-neutral w-full rounded-box px-4"><input type="radio" name="my-accordion-3" checked=""/> <div class="collapse-title title-subsection-bold">Airdrop</div> <div class="collapse-content bg-neutral w-full rounded-box flex flex-col gap-4"><a href="/" class="flex items-center gap-4"><img src="${fi}" alt="icon" class="size-4"/>Home</a> <a href="#" class="flex items-center gap-4"><img src="${mi}" alt="icon" class="size-4"/>Claim TKO</a></div></div>`,
      m,
      v;
    return (
      (o = new Qt({})),
      {
        c() {
          (t = w("div")),
            (r = w("div")),
            (n = w("img")),
            (a = I()),
            (s = w("div")),
            (s.textContent = u),
            (h = I()),
            R(o.$$.fragment),
            (l = I()),
            (c = w("div")),
            (c.innerHTML = f),
            this.h();
        },
        l(x) {
          t = T(x, "DIV", { class: !0 });
          var M = S(t);
          r = T(M, "DIV", { class: !0 });
          var P = S(r);
          (n = T(P, "IMG", { src: !0, alt: !0, class: !0 })),
            (a = N(P)),
            (s = T(P, "DIV", { class: !0, "data-svelte-h": !0 })),
            ie(s) !== "svelte-qn2sm9" && (s.textContent = u),
            (h = N(P)),
            k(o.$$.fragment, P),
            (l = N(P)),
            (c = T(P, "DIV", { class: !0, "data-svelte-h": !0 })),
            ie(c) !== "svelte-19zjq7m" && (c.innerHTML = f),
            P.forEach(p),
            M.forEach(p),
            this.h();
        },
        h() {
          ke(n.src, (i = ze)) || b(n, "src", i),
            b(n, "alt", "logo"),
            b(n, "class", "w-[90px] pb-14"),
            b(s, "class", "body-regular text-secondary-content"),
            b(c, "class", "flex flex-col w-full gap-2"),
            b(r, "class", "z-21 flex flex-col gap-2 p-7"),
            b(
              t,
              "class",
              "z-20 fixed top-0 left-0 h-full w-full bg-elevated-background"
            );
        },
        m(x, M) {
          C(x, t, M),
            H(t, r),
            H(r, n),
            H(r, a),
            H(r, s),
            H(r, h),
            D(o, r, null),
            H(r, l),
            H(r, c),
            (v = !0);
        },
        p: L,
        i(x) {
          v ||
            (E(o.$$.fragment, x),
            x &&
              De(() => {
                v && (m || (m = Je(t, tt, { x: "600" }, !0)), m.run(1));
              }),
            (v = !0));
        },
        o(x) {
          B(o.$$.fragment, x),
            x && (m || (m = Je(t, tt, { x: "600" }, !1)), m.run(0)),
            (v = !1);
        },
        d(x) {
          x && p(t), U(o), x && m && m.end();
        },
      }
    );
  }
  class xi extends V {
    constructor(t) {
      super(), X(this, t, null, _i, j, {});
    }
  }
  function gt(e) {
    let t,
      r = `<div class="flex justify-around items-center"><img src="${ze}" alt="logo"/></div>`,
      n,
      i,
      a,
      s,
      u,
      h,
      o;
    function l(m, v) {
      return m[1] ? yi : Ei;
    }
    let c = l(e),
      f = c(e);
    return {
      c() {
        (t = w("a")),
          (t.innerHTML = r),
          (n = I()),
          (i = w("button")),
          (a = w("span")),
          (u = I()),
          f.c(),
          this.h();
      },
      l(m) {
        (t = T(m, "A", { href: !0, "data-svelte-h": !0 })),
          ie(t) !== "svelte-1u6721h" && (t.innerHTML = r),
          (n = N(m)),
          (i = T(m, "BUTTON", { class: !0 }));
        var v = S(i);
        (a = T(v, "SPAN", { class: !0 })),
          S(a).forEach(p),
          (u = N(v)),
          f.l(v),
          v.forEach(p),
          this.h();
      },
      h() {
        var m;
        b(t, "href", "/"),
          b(
            a,
            "class",
            (s =
              "indicator-item badge badge-xs " +
              ((m = e[3]) != null && m.isConnected
                ? "badge-primary"
                : "badge-accent"))
          ),
          b(
            i,
            "class",
            "indicator btn bg-elevated-background size-[50px] btn-circle fixed z-30 right-7"
          );
      },
      m(m, v) {
        C(m, t, v),
          C(m, n, v),
          C(m, i, v),
          H(i, a),
          H(i, u),
          f.m(i, null),
          h || ((o = se(i, "click", e[4])), (h = !0));
      },
      p(m, v) {
        var x;
        v & 8 &&
          s !==
            (s =
              "indicator-item badge badge-xs " +
              ((x = m[3]) != null && x.isConnected
                ? "badge-primary"
                : "badge-accent")) &&
          b(a, "class", s),
          c !== (c = l(m)) && (f.d(1), (f = c(m)), f && (f.c(), f.m(i, null)));
      },
      d(m) {
        m && (p(t), p(n), p(i)), f.d(), (h = !1), o();
      },
    };
  }
  function yi(e) {
    let t, r;
    return {
      c() {
        (t = w("img")), this.h();
      },
      l(n) {
        (t = T(n, "IMG", { src: !0, alt: !0 })), this.h();
      },
      h() {
        ke(t.src, (r = ci)) || b(t, "src", r), b(t, "alt", "menu");
      },
      m(n, i) {
        C(n, t, i);
      },
      d(n) {
        n && p(t);
      },
    };
  }
  function Ei(e) {
    let t, r;
    return {
      c() {
        (t = w("img")), this.h();
      },
      l(n) {
        (t = T(n, "IMG", { src: !0, alt: !0 })), this.h();
      },
      h() {
        ke(t.src, (r = hi)) || b(t, "src", r), b(t, "alt", "menu");
      },
      m(n, i) {
        C(n, t, i);
      },
      d(n) {
        n && p(t);
      },
    };
  }
  function bt(e) {
    let t,
      r = `<img src="${ze}" alt="logo" class="h-[24.5px]"/>`,
      n,
      i,
      a =
        // '<a href="#"><div class="dropdown dropdown-hover dropdown-bottom rounded-full lg:bg-elevated-background lg:hover:bg-neutral-background px-8 py-3"><div tabindex="0" role="button" onClick="modalOpen()">Claim TKO</div></div></a>',
        '',
      s,
      u,
      h;
    return (
      (u = new Qt({})),
      {
        c() {
          (t = w("a")),
            (t.innerHTML = r),
            (n = I()),
            (i = w("div")),
            (i.innerHTML = a),
            // (i.innerHTML = '<div>HELLO</div>'),
            (s = I()),
            R(u.$$.fragment),
            this.h();
        },
        l(o) {
          (t = T(o, "A", { href: !0, "data-svelte-h": !0 })),
            ie(t) !== "svelte-1v0f3ol" && (t.innerHTML = r),
            (n = N(o)),
            (i = T(o, "DIV", { class: !0, "data-svelte-h": !0 })),
            ie(i) !== "svelte-31mkg3" && (i.innerHTML = a),
            (s = N(o)),
            k(u.$$.fragment, o),
            this.h();
        },
        h() {
          b(t, "href", "/"),
            b(
              i,
              "class",
              "flex items-center justify-center relative gap-4 h-9 text-primary-content body-regular"
            );
        },
        m(o, l) {
          C(o, t, l), C(o, n, l), C(o, i, l), C(o, s, l), D(u, o, l), (h = !0);
        },
        i(o) {
          h || (E(u.$$.fragment, o), (h = !0));
        },
        o(o) {
          B(u.$$.fragment, o), (h = !1);
        },
        d(o) {
          o && (p(t), p(n), p(i), p(s)), U(u, o);
        },
      }
    );
  }
  function vt(e) {
    let t, r;
    return (
      (t = new xi({})),
      {
        c() {
          R(t.$$.fragment);
        },
        l(n) {
          k(t.$$.fragment, n);
        },
        m(n, i) {
          D(t, n, i), (r = !0);
        },
        i(n) {
          r || (E(t.$$.fragment, n), (r = !0));
        },
        o(n) {
          B(t.$$.fragment, n), (r = !1);
        },
        d(n) {
          U(t, n);
        },
      }
    );
  }
  function wi(e) {
    let t, r, n, i, a, s;
    De(e[5]);
    let u = e[2] == "mobile" && gt(e),
      h = e[2] == "desktop" && bt(),
      o = e[1] && vt();
    return {
      c() {
        (t = w("div")),
          u && u.c(),
          (r = I()),
          h && h.c(),
          (n = I()),
          o && o.c(),
          this.h();
      },
      l(l) {
        t = T(l, "DIV", { class: !0 });
        var c = S(t);
        u && u.l(c),
          (r = N(c)),
          h && h.l(c),
          (n = N(c)),
          o && o.l(c),
          c.forEach(p),
          this.h();
      },
      h() {
        b(
          t,
          "class",
          "flex body-regular justify-between items-center box-border mx-auto w-full max-w-[1440px] mt-8 py-2 pl-6 pr-2 rounded-full"
        );
      },
      m(l, c) {
        C(l, t, c),
          u && u.m(t, null),
          H(t, r),
          h && h.m(t, null),
          H(t, n),
          o && o.m(t, null),
          (i = !0),
          a || ((s = se(window, "resize", e[5])), (a = !0));
      },
      p(l, [c]) {
        l[2] == "mobile"
          ? u
            ? u.p(l, c)
            : ((u = gt(l)), u.c(), u.m(t, r))
          : u && (u.d(1), (u = null)),
          l[2] == "desktop"
            ? h
              ? c & 4 && E(h, 1)
              : ((h = bt()), h.c(), E(h, 1), h.m(t, n))
            : h &&
              (pe(),
              B(h, 1, 1, () => {
                h = null;
              }),
              ge()),
          l[1]
            ? o
              ? c & 2 && E(o, 1)
              : ((o = vt()), o.c(), E(o, 1), o.m(t, null))
            : o &&
              (pe(),
              B(o, 1, 1, () => {
                o = null;
              }),
              ge());
      },
      i(l) {
        i || (E(h), E(o), (i = !0));
      },
      o(l) {
        B(h), B(o), (i = !1);
      },
      d(l) {
        l && p(t), u && u.d(), h && h.d(), o && o.d(), (a = !1), s();
      },
    };
  }
  function Ti(e, t, r) {
    let n, i;
    W(e, fe, (o) => r(2, (n = o))), W(e, Tt, (o) => r(3, (i = o)));
    let a,
      s = !1;
    function u() {
      console.log("toggleMobileMenu"), r(1, (s = !s));
    }
    nr(() => {
      r(1, (s = !1));
    });
    function h() {
      r(0, (a = window.innerWidth));
    }
    return [a, s, n, i, u, h];
  }
  class Hi extends V {
    constructor(t) {
      super(), X(this, t, Ti, wi, j, {});
    }
  }
  function Ci(e) {
    let t, r;
    const n = e[1].default,
      i = _t(n, e, e[0], null);
    return {
      c() {
        (t = w("div")), i && i.c(), this.h();
      },
      l(a) {
        t = T(a, "DIV", { class: !0 });
        var s = S(t);
        i && i.l(s), s.forEach(p), this.h();
      },
      h() {
        b(
          t,
          "class",
          "flex flex-col items-center justify-center my-auto box-border w-full"
        );
      },
      m(a, s) {
        C(a, t, s), i && i.m(t, null), (r = !0);
      },
      p(a, [s]) {
        i &&
          i.p &&
          (!r || s & 1) &&
          xt(i, n, a, a[0], r ? Et(n, a[0], s, null) : yt(a[0]), null);
      },
      i(a) {
        r || (E(i, a), (r = !0));
      },
      o(a) {
        B(i, a), (r = !1);
      },
      d(a) {
        a && p(t), i && i.d(a);
      },
    };
  }
  function Bi(e, t, r) {
    let { $$slots: n = {}, $$scope: i } = t;
    return (
      (e.$$set = (a) => {
        "$$scope" in a && r(0, (i = a.$$scope));
      }),
      [i, n]
    );
  }
  class Ai extends V {
    constructor(t) {
      super(), X(this, t, Bi, Ci, j, {});
    }
  }
  const Si = { small: 428, medium: 745, large: 1024, xlarge: 1440 };
  function Pi(e) {
    let t, r;
    return (
      De(e[1]),
      {
        c: L,
        l: L,
        m(n, i) {
          t || ((r = se(window, "resize", e[1])), (t = !0));
        },
        p: L,
        i: L,
        o: L,
        d(n) {
          (t = !1), r();
        },
      }
    );
  }
  function Ii(e, t, r) {
    let n, i;
    W(e, fe, (s) => r(2, (n = s))),
      W(e, Te, (s) => r(0, (i = s))),
      Te.subscribe((s) => {
        s < Si.large ? Ze(fe, (n = "mobile"), n) : Ze(fe, (n = "desktop"), n);
      });
    function a() {
      Te.set((i = window.innerWidth));
    }
    return [i, a];
  }
  class Ni extends V {
    constructor(t) {
      super(), X(this, t, Ii, Pi, j, {});
    }
  }
  function Mi(e) {
    let t, r, n, i, a, s, u;
    i = new Ai({ props: { $$slots: { default: [Oi] }, $$scope: { ctx: e } } });
    const h = e[1].default,
      o = _t(h, e, e[2], null);
    return {
      c() {
        (t = w("div")),
          (r = w("div")),
          (n = w("header")),
          R(i.$$.fragment),
          (a = I()),
          (s = w("main")),
          o && o.c(),
          this.h();
      },
      l(l) {
        t = T(l, "DIV", { class: !0 });
        var c = S(t);
        r = T(c, "DIV", { class: !0 });
        var f = S(r);
        n = T(f, "HEADER", { class: !0 });
        var m = S(n);
        k(i.$$.fragment, m),
          m.forEach(p),
          (a = N(f)),
          (s = T(f, "MAIN", { class: !0 }));
        var v = S(s);
        o && o.l(v), v.forEach(p), f.forEach(p), c.forEach(p), this.h();
      },
      h() {
        b(n, "class", "svelte-1xp5vhi"),
          b(s, "class", "svelte-1xp5vhi"),
          b(r, "class", "w-full"),
          b(
            t,
            "class",
            "flex flex-col min-w-[300px] items-center justify-center w-full"
          );
      },
      m(l, c) {
        C(l, t, c),
          H(t, r),
          H(r, n),
          D(i, n, null),
          H(r, a),
          H(r, s),
          o && o.m(s, null),
          (u = !0);
      },
      p(l, c) {
        const f = {};
        c & 4 && (f.$$scope = { dirty: c, ctx: l }),
          i.$set(f),
          o &&
            o.p &&
            (!u || c & 4) &&
            xt(o, h, l, l[2], u ? Et(h, l[2], c, null) : yt(l[2]), null);
      },
      i(l) {
        u || (E(i.$$.fragment, l), E(o, l), (u = !0));
      },
      o(l) {
        B(i.$$.fragment, l), B(o, l), (u = !1);
      },
      d(l) {
        l && p(t), U(i), o && o.d(l);
      },
    };
  }
  function Li(e) {
    let t,
      r = e[0].error.message + "",
      n;
    return {
      c() {
        (t = w("h1")), (n = Ue(r));
      },
      l(i) {
        t = T(i, "H1", {});
        var a = S(t);
        (n = Ge(a, r)), a.forEach(p);
      },
      m(i, a) {
        C(i, t, a), H(t, n);
      },
      p(i, a) {
        a & 1 && r !== (r = i[0].error.message + "") && wt(n, r);
      },
      i: L,
      o: L,
      d(i) {
        i && p(t);
      },
    };
  }
  function Oi(e) {
    let t, r;
    return (
      (t = new Hi({})),
      {
        c() {
          R(t.$$.fragment);
        },
        l(n) {
          k(t.$$.fragment, n);
        },
        m(n, i) {
          D(t, n, i), (r = !0);
        },
        i(n) {
          r || (E(t.$$.fragment, n), (r = !0));
        },
        o(n) {
          B(t.$$.fragment, n), (r = !1);
        },
        d(n) {
          U(t, n);
        },
      }
    );
  }
  function Ri(e) {
    let t, r, n, i, a, s, u;
    t = new Ni({});
    const h = [Li, Mi],
      o = [];
    function l(c, f) {
      return c[0] && c[0].error && c[0].error.message ? 0 : 1;
    }
    return (
      (n = l(e)),
      (i = o[n] = h[n](e)),
      (s = new tr({})),
      {
        c() {
          R(t.$$.fragment), (r = I()), i.c(), (a = I()), R(s.$$.fragment);
        },
        l(c) {
          k(t.$$.fragment, c),
            (r = N(c)),
            i.l(c),
            (a = N(c)),
            k(s.$$.fragment, c);
        },
        m(c, f) {
          D(t, c, f), C(c, r, f), o[n].m(c, f), C(c, a, f), D(s, c, f), (u = !0);
        },
        p(c, [f]) {
          let m = n;
          (n = l(c)),
            n === m
              ? o[n].p(c, f)
              : (pe(),
                B(o[m], 1, 1, () => {
                  o[m] = null;
                }),
                ge(),
                (i = o[n]),
                i ? i.p(c, f) : ((i = o[n] = h[n](c)), i.c()),
                E(i, 1),
                i.m(a.parentNode, a));
        },
        i(c) {
          u || (E(t.$$.fragment, c), E(i), E(s.$$.fragment, c), (u = !0));
        },
        o(c) {
          B(t.$$.fragment, c), B(i), B(s.$$.fragment, c), (u = !1);
        },
        d(c) {
          c && (p(r), p(a)), U(t, c), o[n].d(c), U(s, c);
        },
      }
    );
  }
  function ki(e, t, r) {
    let n;
    W(e, ir, (h) => r(0, (n = h)));
    let { $$slots: i = {}, $$scope: a } = t;
    function s() {
      const h = window.location.pathname;
      console.log(h);
    }
    const u = ({ x: h, y: o }) => {
      document.documentElement.style.setProperty("--x", h.toFixed(2)),
        document.documentElement.style.setProperty(
          "--xp",
          (h / window.innerWidth).toFixed(2)
        ),
        document.documentElement.style.setProperty("--y", o.toFixed(2)),
        document.documentElement.style.setProperty(
          "--yp",
          (o / window.innerHeight).toFixed(2)
        );
    };
    return (
      Jt(() => {
        document.body.removeEventListener("pointermove", u);
      }),
      Kt(async () => {
        document.body.addEventListener("pointermove", u),
          s(),
          window.addEventListener("popstate", () => {});
      }),
      (e.$$set = (h) => {
        "$$scope" in h && r(2, (a = h.$$scope));
      }),
      [n, i, a]
    );
  }
  class Wi extends V {
    constructor(t) {
      super(), X(this, t, ki, Ri, j, {});
    }
  }
  export { Wi as component, zi as universal };
  //# sourceMappingURL=0.DtLvnbTS.js.map
  