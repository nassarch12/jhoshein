var dc = e => {
    throw TypeError(e)
};
var nl = (e, t, n) => t.has(e) || dc("Cannot " + n);
var T = (e, t, n) => (nl(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    q = (e, t, n) => t.has(e) ? dc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    W = (e, t, n, r) => (nl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Ne = (e, t, n) => (nl(e, t, "access private method"), n);
var ii = (e, t, n, r) => ({
    set _(o) {
        W(e, t, o, n)
    },
    get _() {
        return T(e, t, r)
    }
});

function Lg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function gf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var vf = {
        exports: {}
    },
    Ss = {},
    yf = {
        exports: {}
    },
    G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yo = Symbol.for("react.element"),
    Mg = Symbol.for("react.portal"),
    Ig = Symbol.for("react.fragment"),
    Dg = Symbol.for("react.strict_mode"),
    zg = Symbol.for("react.profiler"),
    Fg = Symbol.for("react.provider"),
    $g = Symbol.for("react.context"),
    Bg = Symbol.for("react.forward_ref"),
    Ug = Symbol.for("react.suspense"),
    Hg = Symbol.for("react.memo"),
    Wg = Symbol.for("react.lazy"),
    fc = Symbol.iterator;

function Vg(e) {
    return e === null || typeof e != "object" ? null : (e = fc && e[fc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var wf = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    xf = Object.assign,
    Sf = {};

function Qr(e, t, n) {
    this.props = e, this.context = t, this.refs = Sf, this.updater = n || wf
}
Qr.prototype.isReactComponent = {};
Qr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Qr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ef() {}
Ef.prototype = Qr.prototype;

function Ka(e, t, n) {
    this.props = e, this.context = t, this.refs = Sf, this.updater = n || wf
}
var Ga = Ka.prototype = new Ef;
Ga.constructor = Ka;
xf(Ga, Qr.prototype);
Ga.isPureReactComponent = !0;
var pc = Array.isArray,
    Cf = Object.prototype.hasOwnProperty,
    Ya = {
        current: null
    },
    kf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function bf(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Cf.call(t, r) && !kf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: Yo,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Ya.current
    }
}

function Qg(e, t) {
    return {
        $$typeof: Yo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Xa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Yo
}

function Kg(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var hc = /\/+/g;

function rl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Kg("" + e.key) : t.toString(36)
}

function Ri(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Yo:
                case Mg:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + rl(s, 0) : r, pc(o) ? (n = "", e != null && (n = e.replace(hc, "$&/") + "/"), Ri(o, t, n, "", function(u) {
        return u
    })) : o != null && (Xa(o) && (o = Qg(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(hc, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", pc(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + rl(i, l);
            s += Ri(i, t, n, a, o)
        } else if (a = Vg(e), typeof a == "function")
            for (e = a.call(e), l = 0; !(i = e.next()).done;) i = i.value, a = r + rl(i, l++), s += Ri(i, t, n, a, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function si(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return Ri(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function Gg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ie = {
        current: null
    },
    ji = {
        transition: null
    },
    Yg = {
        ReactCurrentDispatcher: Ie,
        ReactCurrentBatchConfig: ji,
        ReactCurrentOwner: Ya
    };

function Nf() {
    throw Error("act(...) is not supported in production builds of React.")
}
G.Children = {
    map: si,
    forEach: function(e, t, n) {
        si(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return si(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return si(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Xa(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = Qr;
G.Fragment = Ig;
G.Profiler = zg;
G.PureComponent = Ka;
G.StrictMode = Dg;
G.Suspense = Ug;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yg;
G.act = Nf;
G.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = xf({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Ya.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) Cf.call(t, a) && !kf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Yo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
G.createContext = function(e) {
    return e = {
        $$typeof: $g,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Fg,
        _context: e
    }, e.Consumer = e
};
G.createElement = bf;
G.createFactory = function(e) {
    var t = bf.bind(null, e);
    return t.type = e, t
};
G.createRef = function() {
    return {
        current: null
    }
};
G.forwardRef = function(e) {
    return {
        $$typeof: Bg,
        render: e
    }
};
G.isValidElement = Xa;
G.lazy = function(e) {
    return {
        $$typeof: Wg,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Gg
    }
};
G.memo = function(e, t) {
    return {
        $$typeof: Hg,
        type: e,
        compare: t === void 0 ? null : t
    }
};
G.startTransition = function(e) {
    var t = ji.transition;
    ji.transition = {};
    try {
        e()
    } finally {
        ji.transition = t
    }
};
G.unstable_act = Nf;
G.useCallback = function(e, t) {
    return Ie.current.useCallback(e, t)
};
G.useContext = function(e) {
    return Ie.current.useContext(e)
};
G.useDebugValue = function() {};
G.useDeferredValue = function(e) {
    return Ie.current.useDeferredValue(e)
};
G.useEffect = function(e, t) {
    return Ie.current.useEffect(e, t)
};
G.useId = function() {
    return Ie.current.useId()
};
G.useImperativeHandle = function(e, t, n) {
    return Ie.current.useImperativeHandle(e, t, n)
};
G.useInsertionEffect = function(e, t) {
    return Ie.current.useInsertionEffect(e, t)
};
G.useLayoutEffect = function(e, t) {
    return Ie.current.useLayoutEffect(e, t)
};
G.useMemo = function(e, t) {
    return Ie.current.useMemo(e, t)
};
G.useReducer = function(e, t, n) {
    return Ie.current.useReducer(e, t, n)
};
G.useRef = function(e) {
    return Ie.current.useRef(e)
};
G.useState = function(e) {
    return Ie.current.useState(e)
};
G.useSyncExternalStore = function(e, t, n) {
    return Ie.current.useSyncExternalStore(e, t, n)
};
G.useTransition = function() {
    return Ie.current.useTransition()
};
G.version = "18.3.1";
yf.exports = G;
var v = yf.exports;
const A = gf(v),
    Xg = Lg({
        __proto__: null,
        default: A
    }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qg = v,
    Zg = Symbol.for("react.element"),
    Jg = Symbol.for("react.fragment"),
    ev = Object.prototype.hasOwnProperty,
    tv = qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    nv = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Pf(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) ev.call(t, r) && !nv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Zg,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: tv.current
    }
}
Ss.Fragment = Jg;
Ss.jsx = Pf;
Ss.jsxs = Pf;
vf.exports = Ss;
var m = vf.exports,
    Tf = {
        exports: {}
    },
    nt = {},
    Rf = {
        exports: {}
    },
    jf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(b, j) {
        var z = b.length;
        b.push(j);
        e: for (; 0 < z;) {
            var I = z - 1 >>> 1,
                F = b[I];
            if (0 < o(F, j)) b[I] = j, b[z] = F, z = I;
            else break e
        }
    }

    function n(b) {
        return b.length === 0 ? null : b[0]
    }

    function r(b) {
        if (b.length === 0) return null;
        var j = b[0],
            z = b.pop();
        if (z !== j) {
            b[0] = z;
            e: for (var I = 0, F = b.length, Y = F >>> 1; I < Y;) {
                var le = 2 * (I + 1) - 1,
                    Qe = b[le],
                    Z = le + 1,
                    dt = b[Z];
                if (0 > o(Qe, z)) Z < F && 0 > o(dt, Qe) ? (b[I] = dt, b[Z] = z, I = Z) : (b[I] = Qe, b[le] = z, I = le);
                else if (Z < F && 0 > o(dt, z)) b[I] = dt, b[Z] = z, I = Z;
                else break e
            }
        }
        return j
    }

    function o(b, j) {
        var z = b.sortIndex - j.sortIndex;
        return z !== 0 ? z : b.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = [],
        u = [],
        d = 1,
        f = null,
        c = 3,
        y = !1,
        x = !1,
        w = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(b) {
        for (var j = n(u); j !== null;) {
            if (j.callback === null) r(u);
            else if (j.startTime <= b) r(u), j.sortIndex = j.expirationTime, t(a, j);
            else break;
            j = n(u)
        }
    }

    function E(b) {
        if (w = !1, g(b), !x)
            if (n(a) !== null) x = !0, B(C);
            else {
                var j = n(u);
                j !== null && K(E, j.startTime - b)
            }
    }

    function C(b, j) {
        x = !1, w && (w = !1, h(P), P = -1), y = !0;
        var z = c;
        try {
            for (g(j), f = n(a); f !== null && (!(f.expirationTime > j) || b && !$());) {
                var I = f.callback;
                if (typeof I == "function") {
                    f.callback = null, c = f.priorityLevel;
                    var F = I(f.expirationTime <= j);
                    j = e.unstable_now(), typeof F == "function" ? f.callback = F : f === n(a) && r(a), g(j)
                } else r(a);
                f = n(a)
            }
            if (f !== null) var Y = !0;
            else {
                var le = n(u);
                le !== null && K(E, le.startTime - j), Y = !1
            }
            return Y
        } finally {
            f = null, c = z, y = !1
        }
    }
    var N = !1,
        k = null,
        P = -1,
        M = 5,
        _ = -1;

    function $() {
        return !(e.unstable_now() - _ < M)
    }

    function D() {
        if (k !== null) {
            var b = e.unstable_now();
            _ = b;
            var j = !0;
            try {
                j = k(!0, b)
            } finally {
                j ? V() : (N = !1, k = null)
            }
        } else N = !1
    }
    var V;
    if (typeof p == "function") V = function() {
        p(D)
    };
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel,
            Q = O.port2;
        O.port1.onmessage = D, V = function() {
            Q.postMessage(null)
        }
    } else V = function() {
        S(D, 0)
    };

    function B(b) {
        k = b, N || (N = !0, V())
    }

    function K(b, j) {
        P = S(function() {
            b(e.unstable_now())
        }, j)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
        b.callback = null
    }, e.unstable_continueExecution = function() {
        x || y || (x = !0, B(C))
    }, e.unstable_forceFrameRate = function(b) {
        0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < b ? Math.floor(1e3 / b) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return c
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(b) {
        switch (c) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = c
        }
        var z = c;
        c = j;
        try {
            return b()
        } finally {
            c = z
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(b, j) {
        switch (b) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                b = 3
        }
        var z = c;
        c = b;
        try {
            return j()
        } finally {
            c = z
        }
    }, e.unstable_scheduleCallback = function(b, j, z) {
        var I = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? I + z : I) : z = I, b) {
            case 1:
                var F = -1;
                break;
            case 2:
                F = 250;
                break;
            case 5:
                F = 1073741823;
                break;
            case 4:
                F = 1e4;
                break;
            default:
                F = 5e3
        }
        return F = z + F, b = {
            id: d++,
            callback: j,
            priorityLevel: b,
            startTime: z,
            expirationTime: F,
            sortIndex: -1
        }, z > I ? (b.sortIndex = z, t(u, b), n(a) === null && b === n(u) && (w ? (h(P), P = -1) : w = !0, K(E, z - I))) : (b.sortIndex = F, t(a, b), x || y || (x = !0, B(C))), b
    }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(b) {
        var j = c;
        return function() {
            var z = c;
            c = j;
            try {
                return b.apply(this, arguments)
            } finally {
                c = z
            }
        }
    }
})(jf);
Rf.exports = jf;
var rv = Rf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ov = v,
    et = rv;

function R(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Af = new Set,
    bo = {};

function er(e, t) {
    Dr(e, t), Dr(e + "Capture", t)
}

function Dr(e, t) {
    for (bo[e] = t, e = 0; e < t.length; e++) Af.add(t[e])
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Il = Object.prototype.hasOwnProperty,
    iv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    mc = {},
    gc = {};

function sv(e) {
    return Il.call(gc, e) ? !0 : Il.call(mc, e) ? !1 : iv.test(e) ? gc[e] = !0 : (mc[e] = !0, !1)
}

function lv(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function av(e, t, n, r) {
    if (t === null || typeof t > "u" || lv(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function De(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ke[e] = new De(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ke[t] = new De(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ke[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ke[e] = new De(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ke[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ke[e] = new De(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ke[e] = new De(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ke[e] = new De(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ke[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var qa = /[\-:]([a-z])/g;

function Za(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(qa, Za);
    ke[t] = new De(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(qa, Za);
    ke[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(qa, Za);
    ke[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ke.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ke[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ja(e, t, n, r) {
    var o = ke.hasOwnProperty(t) ? ke[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (av(t, n, o, r) && (n = null), r || o === null ? sv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xt = ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    li = Symbol.for("react.element"),
    lr = Symbol.for("react.portal"),
    ar = Symbol.for("react.fragment"),
    eu = Symbol.for("react.strict_mode"),
    Dl = Symbol.for("react.profiler"),
    _f = Symbol.for("react.provider"),
    Of = Symbol.for("react.context"),
    tu = Symbol.for("react.forward_ref"),
    zl = Symbol.for("react.suspense"),
    Fl = Symbol.for("react.suspense_list"),
    nu = Symbol.for("react.memo"),
    ln = Symbol.for("react.lazy"),
    Lf = Symbol.for("react.offscreen"),
    vc = Symbol.iterator;

function eo(e) {
    return e === null || typeof e != "object" ? null : (e = vc && e[vc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ce = Object.assign,
    ol;

function co(e) {
    if (ol === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ol = t && t[1] || ""
    }
    return `
` + ol + e
}
var il = !1;

function sl(e, t) {
    if (!e || il) return "";
    il = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        il = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? co(e) : ""
}

function uv(e) {
    switch (e.tag) {
        case 5:
            return co(e.type);
        case 16:
            return co("Lazy");
        case 13:
            return co("Suspense");
        case 19:
            return co("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = sl(e.type, !1), e;
        case 11:
            return e = sl(e.type.render, !1), e;
        case 1:
            return e = sl(e.type, !0), e;
        default:
            return ""
    }
}

function $l(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case ar:
            return "Fragment";
        case lr:
            return "Portal";
        case Dl:
            return "Profiler";
        case eu:
            return "StrictMode";
        case zl:
            return "Suspense";
        case Fl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Of:
            return (e.displayName || "Context") + ".Consumer";
        case _f:
            return (e._context.displayName || "Context") + ".Provider";
        case tu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case nu:
            return t = e.displayName || null, t !== null ? t : $l(e.type) || "Memo";
        case ln:
            t = e._payload, e = e._init;
            try {
                return $l(e(t))
            } catch {}
    }
    return null
}

function cv(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return $l(t);
        case 8:
            return t === eu ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Pn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Mf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function dv(e) {
    var t = Mf(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ai(e) {
    e._valueTracker || (e._valueTracker = dv(e))
}

function If(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Mf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Wi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Bl(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function yc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Pn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Df(e, t) {
    t = t.checked, t != null && Ja(e, "checked", t, !1)
}

function Ul(e, t) {
    Df(e, t);
    var n = Pn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Hl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Hl(e, t.type, Pn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function wc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Hl(e, t, n) {
    (t !== "number" || Wi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var fo = Array.isArray;

function wr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Pn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Wl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function xc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(R(92));
            if (fo(n)) {
                if (1 < n.length) throw Error(R(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Pn(n)
    }
}

function zf(e, t) {
    var n = Pn(t.value),
        r = Pn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Sc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Ff(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Vl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ff(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ui, $f = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ui = ui || document.createElement("div"), ui.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ui.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function No(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var mo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    fv = ["Webkit", "ms", "Moz", "O"];
Object.keys(mo).forEach(function(e) {
    fv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), mo[t] = mo[e]
    })
});

function Bf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mo.hasOwnProperty(e) && mo[e] ? ("" + t).trim() : t + "px"
}

function Uf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Bf(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var pv = ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Ql(e, t) {
    if (t) {
        if (pv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(R(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(R(62))
    }
}

function Kl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Gl = null;

function ru(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Yl = null,
    xr = null,
    Sr = null;

function Ec(e) {
    if (e = Zo(e)) {
        if (typeof Yl != "function") throw Error(R(280));
        var t = e.stateNode;
        t && (t = Ns(t), Yl(e.stateNode, e.type, t))
    }
}

function Hf(e) {
    xr ? Sr ? Sr.push(e) : Sr = [e] : xr = e
}

function Wf() {
    if (xr) {
        var e = xr,
            t = Sr;
        if (Sr = xr = null, Ec(e), t)
            for (e = 0; e < t.length; e++) Ec(t[e])
    }
}

function Vf(e, t) {
    return e(t)
}

function Qf() {}
var ll = !1;

function Kf(e, t, n) {
    if (ll) return e(t, n);
    ll = !0;
    try {
        return Vf(e, t, n)
    } finally {
        ll = !1, (xr !== null || Sr !== null) && (Qf(), Wf())
    }
}

function Po(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ns(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(R(231, t, typeof n));
    return n
}
var Xl = !1;
if (Wt) try {
    var to = {};
    Object.defineProperty(to, "passive", {
        get: function() {
            Xl = !0
        }
    }), window.addEventListener("test", to, to), window.removeEventListener("test", to, to)
} catch {
    Xl = !1
}

function hv(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var go = !1,
    Vi = null,
    Qi = !1,
    ql = null,
    mv = {
        onError: function(e) {
            go = !0, Vi = e
        }
    };

function gv(e, t, n, r, o, i, s, l, a) {
    go = !1, Vi = null, hv.apply(mv, arguments)
}

function vv(e, t, n, r, o, i, s, l, a) {
    if (gv.apply(this, arguments), go) {
        if (go) {
            var u = Vi;
            go = !1, Vi = null
        } else throw Error(R(198));
        Qi || (Qi = !0, ql = u)
    }
}

function tr(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Gf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Cc(e) {
    if (tr(e) !== e) throw Error(R(188))
}

function yv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = tr(e), t === null) throw Error(R(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Cc(o), e;
                if (i === r) return Cc(o), t;
                i = i.sibling
            }
            throw Error(R(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, l = o.child; l;) {
                if (l === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (l === r) {
                    s = !0, r = o, n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l;) {
                    if (l === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (l === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(R(189))
            }
        }
        if (n.alternate !== r) throw Error(R(190))
    }
    if (n.tag !== 3) throw Error(R(188));
    return n.stateNode.current === n ? e : t
}

function Yf(e) {
    return e = yv(e), e !== null ? Xf(e) : null
}

function Xf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Xf(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var qf = et.unstable_scheduleCallback,
    kc = et.unstable_cancelCallback,
    wv = et.unstable_shouldYield,
    xv = et.unstable_requestPaint,
    he = et.unstable_now,
    Sv = et.unstable_getCurrentPriorityLevel,
    ou = et.unstable_ImmediatePriority,
    Zf = et.unstable_UserBlockingPriority,
    Ki = et.unstable_NormalPriority,
    Ev = et.unstable_LowPriority,
    Jf = et.unstable_IdlePriority,
    Es = null,
    _t = null;

function Cv(e) {
    if (_t && typeof _t.onCommitFiberRoot == "function") try {
        _t.onCommitFiberRoot(Es, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : Nv,
    kv = Math.log,
    bv = Math.LN2;

function Nv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (kv(e) / bv | 0) | 0
}
var ci = 64,
    di = 4194304;

function po(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Gi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = po(l) : (i &= s, i !== 0 && (r = po(i)))
    } else s = n & ~o, s !== 0 ? r = po(s) : i !== 0 && (r = po(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - yt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function Pv(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Tv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - yt(i),
            l = 1 << s,
            a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = Pv(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l
    }
}

function Zl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function ep() {
    var e = ci;
    return ci <<= 1, !(ci & 4194240) && (ci = 64), e
}

function al(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Xo(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - yt(t), e[t] = n
}

function Rv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - yt(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function iu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - yt(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var J = 0;

function tp(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var np, su, rp, op, ip, Jl = !1,
    fi = [],
    wn = null,
    xn = null,
    Sn = null,
    To = new Map,
    Ro = new Map,
    un = [],
    jv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function bc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            wn = null;
            break;
        case "dragenter":
        case "dragleave":
            xn = null;
            break;
        case "mouseover":
        case "mouseout":
            Sn = null;
            break;
        case "pointerover":
        case "pointerout":
            To.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ro.delete(t.pointerId)
    }
}

function no(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = Zo(t), t !== null && su(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Av(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return wn = no(wn, e, t, n, r, o), !0;
        case "dragenter":
            return xn = no(xn, e, t, n, r, o), !0;
        case "mouseover":
            return Sn = no(Sn, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return To.set(i, no(To.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, Ro.set(i, no(Ro.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function sp(e) {
    var t = Fn(e.target);
    if (t !== null) {
        var n = tr(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Gf(n), t !== null) {
                    e.blockedOn = t, ip(e.priority, function() {
                        rp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ai(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Gl = r, n.target.dispatchEvent(r), Gl = null
        } else return t = Zo(n), t !== null && su(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Nc(e, t, n) {
    Ai(e) && n.delete(t)
}

function _v() {
    Jl = !1, wn !== null && Ai(wn) && (wn = null), xn !== null && Ai(xn) && (xn = null), Sn !== null && Ai(Sn) && (Sn = null), To.forEach(Nc), Ro.forEach(Nc)
}

function ro(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Jl || (Jl = !0, et.unstable_scheduleCallback(et.unstable_NormalPriority, _v)))
}

function jo(e) {
    function t(o) {
        return ro(o, e)
    }
    if (0 < fi.length) {
        ro(fi[0], e);
        for (var n = 1; n < fi.length; n++) {
            var r = fi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (wn !== null && ro(wn, e), xn !== null && ro(xn, e), Sn !== null && ro(Sn, e), To.forEach(t), Ro.forEach(t), n = 0; n < un.length; n++) r = un[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < un.length && (n = un[0], n.blockedOn === null);) sp(n), n.blockedOn === null && un.shift()
}
var Er = Xt.ReactCurrentBatchConfig,
    Yi = !0;

function Ov(e, t, n, r) {
    var o = J,
        i = Er.transition;
    Er.transition = null;
    try {
        J = 1, lu(e, t, n, r)
    } finally {
        J = o, Er.transition = i
    }
}

function Lv(e, t, n, r) {
    var o = J,
        i = Er.transition;
    Er.transition = null;
    try {
        J = 4, lu(e, t, n, r)
    } finally {
        J = o, Er.transition = i
    }
}

function lu(e, t, n, r) {
    if (Yi) {
        var o = ea(e, t, n, r);
        if (o === null) yl(e, t, r, Xi, n), bc(e, r);
        else if (Av(o, e, t, n, r)) r.stopPropagation();
        else if (bc(e, r), t & 4 && -1 < jv.indexOf(e)) {
            for (; o !== null;) {
                var i = Zo(o);
                if (i !== null && np(i), i = ea(e, t, n, r), i === null && yl(e, t, r, Xi, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else yl(e, t, r, null, n)
    }
}
var Xi = null;

function ea(e, t, n, r) {
    if (Xi = null, e = ru(r), e = Fn(e), e !== null)
        if (t = tr(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Gf(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Xi = e, null
}

function lp(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Sv()) {
                case ou:
                    return 1;
                case Zf:
                    return 4;
                case Ki:
                case Ev:
                    return 16;
                case Jf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var gn = null,
    au = null,
    _i = null;

function ap() {
    if (_i) return _i;
    var e, t = au,
        n = t.length,
        r, o = "value" in gn ? gn.value : gn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return _i = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Oi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function pi() {
    return !0
}

function Pc() {
    return !1
}

function rt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pi : Pc, this.isPropagationStopped = Pc, this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pi)
        },
        persist: function() {},
        isPersistent: pi
    }), t
}
var Kr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    uu = rt(Kr),
    qo = ce({}, Kr, {
        view: 0,
        detail: 0
    }),
    Mv = rt(qo),
    ul, cl, oo, Cs = ce({}, qo, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: cu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== oo && (oo && e.type === "mousemove" ? (ul = e.screenX - oo.screenX, cl = e.screenY - oo.screenY) : cl = ul = 0, oo = e), ul)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : cl
        }
    }),
    Tc = rt(Cs),
    Iv = ce({}, Cs, {
        dataTransfer: 0
    }),
    Dv = rt(Iv),
    zv = ce({}, qo, {
        relatedTarget: 0
    }),
    dl = rt(zv),
    Fv = ce({}, Kr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    $v = rt(Fv),
    Bv = ce({}, Kr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Uv = rt(Bv),
    Hv = ce({}, Kr, {
        data: 0
    }),
    Rc = rt(Hv),
    Wv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Vv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Qv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Kv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qv[e]) ? !!t[e] : !1
}

function cu() {
    return Kv
}
var Gv = ce({}, qo, {
        key: function(e) {
            if (e.key) {
                var t = Wv[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vv[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: cu,
        charCode: function(e) {
            return e.type === "keypress" ? Oi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Yv = rt(Gv),
    Xv = ce({}, Cs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    jc = rt(Xv),
    qv = ce({}, qo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: cu
    }),
    Zv = rt(qv),
    Jv = ce({}, Kr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    ey = rt(Jv),
    ty = ce({}, Cs, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    ny = rt(ty),
    ry = [9, 13, 27, 32],
    du = Wt && "CompositionEvent" in window,
    vo = null;
Wt && "documentMode" in document && (vo = document.documentMode);
var oy = Wt && "TextEvent" in window && !vo,
    up = Wt && (!du || vo && 8 < vo && 11 >= vo),
    Ac = " ",
    _c = !1;

function cp(e, t) {
    switch (e) {
        case "keyup":
            return ry.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function dp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var ur = !1;

function iy(e, t) {
    switch (e) {
        case "compositionend":
            return dp(t);
        case "keypress":
            return t.which !== 32 ? null : (_c = !0, Ac);
        case "textInput":
            return e = t.data, e === Ac && _c ? null : e;
        default:
            return null
    }
}

function sy(e, t) {
    if (ur) return e === "compositionend" || !du && cp(e, t) ? (e = ap(), _i = au = gn = null, ur = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return up && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var ly = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Oc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ly[e.type] : t === "textarea"
}

function fp(e, t, n, r) {
    Hf(r), t = qi(t, "onChange"), 0 < t.length && (n = new uu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var yo = null,
    Ao = null;

function ay(e) {
    Cp(e, 0)
}

function ks(e) {
    var t = fr(e);
    if (If(t)) return e
}

function uy(e, t) {
    if (e === "change") return t
}
var pp = !1;
if (Wt) {
    var fl;
    if (Wt) {
        var pl = "oninput" in document;
        if (!pl) {
            var Lc = document.createElement("div");
            Lc.setAttribute("oninput", "return;"), pl = typeof Lc.oninput == "function"
        }
        fl = pl
    } else fl = !1;
    pp = fl && (!document.documentMode || 9 < document.documentMode)
}

function Mc() {
    yo && (yo.detachEvent("onpropertychange", hp), Ao = yo = null)
}

function hp(e) {
    if (e.propertyName === "value" && ks(Ao)) {
        var t = [];
        fp(t, Ao, e, ru(e)), Kf(ay, t)
    }
}

function cy(e, t, n) {
    e === "focusin" ? (Mc(), yo = t, Ao = n, yo.attachEvent("onpropertychange", hp)) : e === "focusout" && Mc()
}

function dy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ks(Ao)
}

function fy(e, t) {
    if (e === "click") return ks(t)
}

function py(e, t) {
    if (e === "input" || e === "change") return ks(t)
}

function hy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var xt = typeof Object.is == "function" ? Object.is : hy;

function _o(e, t) {
    if (xt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Il.call(t, o) || !xt(e[o], t[o])) return !1
    }
    return !0
}

function Ic(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Dc(e, t) {
    var n = Ic(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ic(n)
    }
}

function mp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function gp() {
    for (var e = window, t = Wi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Wi(e.document)
    }
    return t
}

function fu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function my(e) {
    var t = gp(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && mp(n.ownerDocument.documentElement, n)) {
        if (r !== null && fu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Dc(n, i);
                var s = Dc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var gy = Wt && "documentMode" in document && 11 >= document.documentMode,
    cr = null,
    ta = null,
    wo = null,
    na = !1;

function zc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    na || cr == null || cr !== Wi(r) || (r = cr, "selectionStart" in r && fu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), wo && _o(wo, r) || (wo = r, r = qi(ta, "onSelect"), 0 < r.length && (t = new uu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = cr)))
}

function hi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var dr = {
        animationend: hi("Animation", "AnimationEnd"),
        animationiteration: hi("Animation", "AnimationIteration"),
        animationstart: hi("Animation", "AnimationStart"),
        transitionend: hi("Transition", "TransitionEnd")
    },
    hl = {},
    vp = {};
Wt && (vp = document.createElement("div").style, "AnimationEvent" in window || (delete dr.animationend.animation, delete dr.animationiteration.animation, delete dr.animationstart.animation), "TransitionEvent" in window || delete dr.transitionend.transition);

function bs(e) {
    if (hl[e]) return hl[e];
    if (!dr[e]) return e;
    var t = dr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in vp) return hl[e] = t[n];
    return e
}
var yp = bs("animationend"),
    wp = bs("animationiteration"),
    xp = bs("animationstart"),
    Sp = bs("transitionend"),
    Ep = new Map,
    Fc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function On(e, t) {
    Ep.set(e, t), er(t, [e])
}
for (var ml = 0; ml < Fc.length; ml++) {
    var gl = Fc[ml],
        vy = gl.toLowerCase(),
        yy = gl[0].toUpperCase() + gl.slice(1);
    On(vy, "on" + yy)
}
On(yp, "onAnimationEnd");
On(wp, "onAnimationIteration");
On(xp, "onAnimationStart");
On("dblclick", "onDoubleClick");
On("focusin", "onFocus");
On("focusout", "onBlur");
On(Sp, "onTransitionEnd");
Dr("onMouseEnter", ["mouseout", "mouseover"]);
Dr("onMouseLeave", ["mouseout", "mouseover"]);
Dr("onPointerEnter", ["pointerout", "pointerover"]);
Dr("onPointerLeave", ["pointerout", "pointerover"]);
er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ho = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    wy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));

function $c(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, vv(r, t, void 0, e), e.currentTarget = null
}

function Cp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        a = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
                    $c(o, l, u), i = a
                } else
                    for (s = 0; s < r.length; s++) {
                        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
                        $c(o, l, u), i = a
                    }
        }
    }
    if (Qi) throw e = ql, Qi = !1, ql = null, e
}

function oe(e, t) {
    var n = t[la];
    n === void 0 && (n = t[la] = new Set);
    var r = e + "__bubble";
    n.has(r) || (kp(t, e, 2, !1), n.add(r))
}

function vl(e, t, n) {
    var r = 0;
    t && (r |= 4), kp(n, e, r, t)
}
var mi = "_reactListening" + Math.random().toString(36).slice(2);

function Oo(e) {
    if (!e[mi]) {
        e[mi] = !0, Af.forEach(function(n) {
            n !== "selectionchange" && (wy.has(n) || vl(n, !1, e), vl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[mi] || (t[mi] = !0, vl("selectionchange", !1, t))
    }
}

function kp(e, t, n, r) {
    switch (lp(t)) {
        case 1:
            var o = Ov;
            break;
        case 4:
            o = Lv;
            break;
        default:
            o = lu
    }
    n = o.bind(null, t, n, e), o = void 0, !Xl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function yl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var a = s.tag;
                    if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = Fn(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = i = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    Kf(function() {
        var u = i,
            d = ru(n),
            f = [];
        e: {
            var c = Ep.get(e);
            if (c !== void 0) {
                var y = uu,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (Oi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = Yv;
                        break;
                    case "focusin":
                        x = "focus", y = dl;
                        break;
                    case "focusout":
                        x = "blur", y = dl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = dl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = Tc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Dv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = Zv;
                        break;
                    case yp:
                    case wp:
                    case xp:
                        y = $v;
                        break;
                    case Sp:
                        y = ey;
                        break;
                    case "scroll":
                        y = Mv;
                        break;
                    case "wheel":
                        y = ny;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = Uv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = jc
                }
                var w = (t & 4) !== 0,
                    S = !w && e === "scroll",
                    h = w ? c !== null ? c + "Capture" : null : c;
                w = [];
                for (var p = u, g; p !== null;) {
                    g = p;
                    var E = g.stateNode;
                    if (g.tag === 5 && E !== null && (g = E, h !== null && (E = Po(p, h), E != null && w.push(Lo(p, E, g)))), S) break;
                    p = p.return
                }
                0 < w.length && (c = new y(c, x, null, n, d), f.push({
                    event: c,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (c = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", c && n !== Gl && (x = n.relatedTarget || n.fromElement) && (Fn(x) || x[Vt])) break e;
                if ((y || c) && (c = d.window === d ? d : (c = d.ownerDocument) ? c.defaultView || c.parentWindow : window, y ? (x = n.relatedTarget || n.toElement, y = u, x = x ? Fn(x) : null, x !== null && (S = tr(x), x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (y = null, x = u), y !== x)) {
                    if (w = Tc, E = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = jc, E = "onPointerLeave", h = "onPointerEnter", p = "pointer"), S = y == null ? c : fr(y), g = x == null ? c : fr(x), c = new w(E, p + "leave", y, n, d), c.target = S, c.relatedTarget = g, E = null, Fn(d) === u && (w = new w(h, p + "enter", x, n, d), w.target = g, w.relatedTarget = S, E = w), S = E, y && x) t: {
                        for (w = y, h = x, p = 0, g = w; g; g = sr(g)) p++;
                        for (g = 0, E = h; E; E = sr(E)) g++;
                        for (; 0 < p - g;) w = sr(w),
                        p--;
                        for (; 0 < g - p;) h = sr(h),
                        g--;
                        for (; p--;) {
                            if (w === h || h !== null && w === h.alternate) break t;
                            w = sr(w), h = sr(h)
                        }
                        w = null
                    }
                    else w = null;
                    y !== null && Bc(f, c, y, w, !1), x !== null && S !== null && Bc(f, S, x, w, !0)
                }
            }
            e: {
                if (c = u ? fr(u) : window, y = c.nodeName && c.nodeName.toLowerCase(), y === "select" || y === "input" && c.type === "file") var C = uy;
                else if (Oc(c))
                    if (pp) C = py;
                    else {
                        C = dy;
                        var N = cy
                    }
                else(y = c.nodeName) && y.toLowerCase() === "input" && (c.type === "checkbox" || c.type === "radio") && (C = fy);
                if (C && (C = C(e, u))) {
                    fp(f, C, n, d);
                    break e
                }
                N && N(e, c, u),
                e === "focusout" && (N = c._wrapperState) && N.controlled && c.type === "number" && Hl(c, "number", c.value)
            }
            switch (N = u ? fr(u) : window, e) {
                case "focusin":
                    (Oc(N) || N.contentEditable === "true") && (cr = N, ta = u, wo = null);
                    break;
                case "focusout":
                    wo = ta = cr = null;
                    break;
                case "mousedown":
                    na = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    na = !1, zc(f, n, d);
                    break;
                case "selectionchange":
                    if (gy) break;
                case "keydown":
                case "keyup":
                    zc(f, n, d)
            }
            var k;
            if (du) e: {
                switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else ur ? cp(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (up && n.locale !== "ko" && (ur || P !== "onCompositionStart" ? P === "onCompositionEnd" && ur && (k = ap()) : (gn = d, au = "value" in gn ? gn.value : gn.textContent, ur = !0)), N = qi(u, P), 0 < N.length && (P = new Rc(P, e, null, n, d), f.push({
                event: P,
                listeners: N
            }), k ? P.data = k : (k = dp(n), k !== null && (P.data = k)))),
            (k = oy ? iy(e, n) : sy(e, n)) && (u = qi(u, "onBeforeInput"), 0 < u.length && (d = new Rc("onBeforeInput", "beforeinput", null, n, d), f.push({
                event: d,
                listeners: u
            }), d.data = k))
        }
        Cp(f, t)
    })
}

function Lo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function qi(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Po(e, n), i != null && r.unshift(Lo(e, i, o)), i = Po(e, t), i != null && r.push(Lo(e, i, o))), e = e.return
    }
    return r
}

function sr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Bc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, o ? (a = Po(n, i), a != null && s.unshift(Lo(n, a, l))) : o || (a = Po(n, i), a != null && s.push(Lo(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var xy = /\r\n?/g,
    Sy = /\u0000|\uFFFD/g;

function Uc(e) {
    return (typeof e == "string" ? e : "" + e).replace(xy, `
`).replace(Sy, "")
}

function gi(e, t, n) {
    if (t = Uc(t), Uc(e) !== t && n) throw Error(R(425))
}

function Zi() {}
var ra = null,
    oa = null;

function ia(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var sa = typeof setTimeout == "function" ? setTimeout : void 0,
    Ey = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Hc = typeof Promise == "function" ? Promise : void 0,
    Cy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hc < "u" ? function(e) {
        return Hc.resolve(null).then(e).catch(ky)
    } : sa;

function ky(e) {
    setTimeout(function() {
        throw e
    })
}

function wl(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), jo(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    jo(t)
}

function En(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Wc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Gr = Math.random().toString(36).slice(2),
    At = "__reactFiber$" + Gr,
    Mo = "__reactProps$" + Gr,
    Vt = "__reactContainer$" + Gr,
    la = "__reactEvents$" + Gr,
    by = "__reactListeners$" + Gr,
    Ny = "__reactHandles$" + Gr;

function Fn(e) {
    var t = e[At];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Vt] || n[At]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Wc(e); e !== null;) {
                    if (n = e[At]) return n;
                    e = Wc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Zo(e) {
    return e = e[At] || e[Vt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function fr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(R(33))
}

function Ns(e) {
    return e[Mo] || null
}
var aa = [],
    pr = -1;

function Ln(e) {
    return {
        current: e
    }
}

function ie(e) {
    0 > pr || (e.current = aa[pr], aa[pr] = null, pr--)
}

function te(e, t) {
    pr++, aa[pr] = e.current, e.current = t
}
var Tn = {},
    Ae = Ln(Tn),
    $e = Ln(!1),
    Gn = Tn;

function zr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Tn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Be(e) {
    return e = e.childContextTypes, e != null
}

function Ji() {
    ie($e), ie(Ae)
}

function Vc(e, t, n) {
    if (Ae.current !== Tn) throw Error(R(168));
    te(Ae, t), te($e, n)
}

function bp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(R(108, cv(e) || "Unknown", o));
    return ce({}, n, r)
}

function es(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Tn, Gn = Ae.current, te(Ae, e), te($e, $e.current), !0
}

function Qc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(R(169));
    n ? (e = bp(e, t, Gn), r.__reactInternalMemoizedMergedChildContext = e, ie($e), ie(Ae), te(Ae, e)) : ie($e), te($e, n)
}
var Ft = null,
    Ps = !1,
    xl = !1;

function Np(e) {
    Ft === null ? Ft = [e] : Ft.push(e)
}

function Py(e) {
    Ps = !0, Np(e)
}

function Mn() {
    if (!xl && Ft !== null) {
        xl = !0;
        var e = 0,
            t = J;
        try {
            var n = Ft;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ft = null, Ps = !1
        } catch (o) {
            throw Ft !== null && (Ft = Ft.slice(e + 1)), qf(ou, Mn), o
        } finally {
            J = t, xl = !1
        }
    }
    return null
}
var hr = [],
    mr = 0,
    ts = null,
    ns = 0,
    it = [],
    st = 0,
    Yn = null,
    $t = 1,
    Bt = "";

function Dn(e, t) {
    hr[mr++] = ns, hr[mr++] = ts, ts = e, ns = t
}

function Pp(e, t, n) {
    it[st++] = $t, it[st++] = Bt, it[st++] = Yn, Yn = e;
    var r = $t;
    e = Bt;
    var o = 32 - yt(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - yt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, $t = 1 << 32 - yt(t) + o | n << o | r, Bt = i + e
    } else $t = 1 << i | n << o | r, Bt = e
}

function pu(e) {
    e.return !== null && (Dn(e, 1), Pp(e, 1, 0))
}

function hu(e) {
    for (; e === ts;) ts = hr[--mr], hr[mr] = null, ns = hr[--mr], hr[mr] = null;
    for (; e === Yn;) Yn = it[--st], it[st] = null, Bt = it[--st], it[st] = null, $t = it[--st], it[st] = null
}
var Ze = null,
    qe = null,
    se = !1,
    vt = null;

function Tp(e, t) {
    var n = lt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Kc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ze = e, qe = En(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ze = e, qe = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yn !== null ? {
                id: $t,
                overflow: Bt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ze = e, qe = null, !0) : !1;
        default:
            return !1
    }
}

function ua(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function ca(e) {
    if (se) {
        var t = qe;
        if (t) {
            var n = t;
            if (!Kc(e, t)) {
                if (ua(e)) throw Error(R(418));
                t = En(n.nextSibling);
                var r = Ze;
                t && Kc(e, t) ? Tp(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, Ze = e)
            }
        } else {
            if (ua(e)) throw Error(R(418));
            e.flags = e.flags & -4097 | 2, se = !1, Ze = e
        }
    }
}

function Gc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ze = e
}

function vi(e) {
    if (e !== Ze) return !1;
    if (!se) return Gc(e), se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ia(e.type, e.memoizedProps)), t && (t = qe)) {
        if (ua(e)) throw Rp(), Error(R(418));
        for (; t;) Tp(e, t), t = En(t.nextSibling)
    }
    if (Gc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            qe = En(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            qe = null
        }
    } else qe = Ze ? En(e.stateNode.nextSibling) : null;
    return !0
}

function Rp() {
    for (var e = qe; e;) e = En(e.nextSibling)
}

function Fr() {
    qe = Ze = null, se = !1
}

function mu(e) {
    vt === null ? vt = [e] : vt.push(e)
}
var Ty = Xt.ReactCurrentBatchConfig;

function io(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(R(309));
                var r = n.stateNode
            }
            if (!r) throw Error(R(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(R(284));
        if (!n._owner) throw Error(R(290, e))
    }
    return e
}

function yi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Yc(e) {
    var t = e._init;
    return t(e._payload)
}

function jp(e) {
    function t(h, p) {
        if (e) {
            var g = h.deletions;
            g === null ? (h.deletions = [p], h.flags |= 16) : g.push(p)
        }
    }

    function n(h, p) {
        if (!e) return null;
        for (; p !== null;) t(h, p), p = p.sibling;
        return null
    }

    function r(h, p) {
        for (h = new Map; p !== null;) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), p = p.sibling;
        return h
    }

    function o(h, p) {
        return h = Nn(h, p), h.index = 0, h.sibling = null, h
    }

    function i(h, p, g) {
        return h.index = g, e ? (g = h.alternate, g !== null ? (g = g.index, g < p ? (h.flags |= 2, p) : g) : (h.flags |= 2, p)) : (h.flags |= 1048576, p)
    }

    function s(h) {
        return e && h.alternate === null && (h.flags |= 2), h
    }

    function l(h, p, g, E) {
        return p === null || p.tag !== 6 ? (p = Pl(g, h.mode, E), p.return = h, p) : (p = o(p, g), p.return = h, p)
    }

    function a(h, p, g, E) {
        var C = g.type;
        return C === ar ? d(h, p, g.props.children, E, g.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ln && Yc(C) === p.type) ? (E = o(p, g.props), E.ref = io(h, p, g), E.return = h, E) : (E = $i(g.type, g.key, g.props, null, h.mode, E), E.ref = io(h, p, g), E.return = h, E)
    }

    function u(h, p, g, E) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Tl(g, h.mode, E), p.return = h, p) : (p = o(p, g.children || []), p.return = h, p)
    }

    function d(h, p, g, E, C) {
        return p === null || p.tag !== 7 ? (p = Kn(g, h.mode, E, C), p.return = h, p) : (p = o(p, g), p.return = h, p)
    }

    function f(h, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = Pl("" + p, h.mode, g), p.return = h, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case li:
                    return g = $i(p.type, p.key, p.props, null, h.mode, g), g.ref = io(h, null, p), g.return = h, g;
                case lr:
                    return p = Tl(p, h.mode, g), p.return = h, p;
                case ln:
                    var E = p._init;
                    return f(h, E(p._payload), g)
            }
            if (fo(p) || eo(p)) return p = Kn(p, h.mode, g, null), p.return = h, p;
            yi(h, p)
        }
        return null
    }

    function c(h, p, g, E) {
        var C = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : l(h, p, "" + g, E);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case li:
                    return g.key === C ? a(h, p, g, E) : null;
                case lr:
                    return g.key === C ? u(h, p, g, E) : null;
                case ln:
                    return C = g._init, c(h, p, C(g._payload), E)
            }
            if (fo(g) || eo(g)) return C !== null ? null : d(h, p, g, E, null);
            yi(h, g)
        }
        return null
    }

    function y(h, p, g, E, C) {
        if (typeof E == "string" && E !== "" || typeof E == "number") return h = h.get(g) || null, l(p, h, "" + E, C);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case li:
                    return h = h.get(E.key === null ? g : E.key) || null, a(p, h, E, C);
                case lr:
                    return h = h.get(E.key === null ? g : E.key) || null, u(p, h, E, C);
                case ln:
                    var N = E._init;
                    return y(h, p, g, N(E._payload), C)
            }
            if (fo(E) || eo(E)) return h = h.get(g) || null, d(p, h, E, C, null);
            yi(p, E)
        }
        return null
    }

    function x(h, p, g, E) {
        for (var C = null, N = null, k = p, P = p = 0, M = null; k !== null && P < g.length; P++) {
            k.index > P ? (M = k, k = null) : M = k.sibling;
            var _ = c(h, k, g[P], E);
            if (_ === null) {
                k === null && (k = M);
                break
            }
            e && k && _.alternate === null && t(h, k), p = i(_, p, P), N === null ? C = _ : N.sibling = _, N = _, k = M
        }
        if (P === g.length) return n(h, k), se && Dn(h, P), C;
        if (k === null) {
            for (; P < g.length; P++) k = f(h, g[P], E), k !== null && (p = i(k, p, P), N === null ? C = k : N.sibling = k, N = k);
            return se && Dn(h, P), C
        }
        for (k = r(h, k); P < g.length; P++) M = y(k, h, P, g[P], E), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? P : M.key), p = i(M, p, P), N === null ? C = M : N.sibling = M, N = M);
        return e && k.forEach(function($) {
            return t(h, $)
        }), se && Dn(h, P), C
    }

    function w(h, p, g, E) {
        var C = eo(g);
        if (typeof C != "function") throw Error(R(150));
        if (g = C.call(g), g == null) throw Error(R(151));
        for (var N = C = null, k = p, P = p = 0, M = null, _ = g.next(); k !== null && !_.done; P++, _ = g.next()) {
            k.index > P ? (M = k, k = null) : M = k.sibling;
            var $ = c(h, k, _.value, E);
            if ($ === null) {
                k === null && (k = M);
                break
            }
            e && k && $.alternate === null && t(h, k), p = i($, p, P), N === null ? C = $ : N.sibling = $, N = $, k = M
        }
        if (_.done) return n(h, k), se && Dn(h, P), C;
        if (k === null) {
            for (; !_.done; P++, _ = g.next()) _ = f(h, _.value, E), _ !== null && (p = i(_, p, P), N === null ? C = _ : N.sibling = _, N = _);
            return se && Dn(h, P), C
        }
        for (k = r(h, k); !_.done; P++, _ = g.next()) _ = y(k, h, P, _.value, E), _ !== null && (e && _.alternate !== null && k.delete(_.key === null ? P : _.key), p = i(_, p, P), N === null ? C = _ : N.sibling = _, N = _);
        return e && k.forEach(function(D) {
            return t(h, D)
        }), se && Dn(h, P), C
    }

    function S(h, p, g, E) {
        if (typeof g == "object" && g !== null && g.type === ar && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case li:
                    e: {
                        for (var C = g.key, N = p; N !== null;) {
                            if (N.key === C) {
                                if (C = g.type, C === ar) {
                                    if (N.tag === 7) {
                                        n(h, N.sibling), p = o(N, g.props.children), p.return = h, h = p;
                                        break e
                                    }
                                } else if (N.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ln && Yc(C) === N.type) {
                                    n(h, N.sibling), p = o(N, g.props), p.ref = io(h, N, g), p.return = h, h = p;
                                    break e
                                }
                                n(h, N);
                                break
                            } else t(h, N);
                            N = N.sibling
                        }
                        g.type === ar ? (p = Kn(g.props.children, h.mode, E, g.key), p.return = h, h = p) : (E = $i(g.type, g.key, g.props, null, h.mode, E), E.ref = io(h, p, g), E.return = h, h = E)
                    }
                    return s(h);
                case lr:
                    e: {
                        for (N = g.key; p !== null;) {
                            if (p.key === N)
                                if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(h, p.sibling), p = o(p, g.children || []), p.return = h, h = p;
                                    break e
                                } else {
                                    n(h, p);
                                    break
                                }
                            else t(h, p);
                            p = p.sibling
                        }
                        p = Tl(g, h.mode, E),
                        p.return = h,
                        h = p
                    }
                    return s(h);
                case ln:
                    return N = g._init, S(h, p, N(g._payload), E)
            }
            if (fo(g)) return x(h, p, g, E);
            if (eo(g)) return w(h, p, g, E);
            yi(h, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(h, p.sibling), p = o(p, g), p.return = h, h = p) : (n(h, p), p = Pl(g, h.mode, E), p.return = h, h = p), s(h)) : n(h, p)
    }
    return S
}
var $r = jp(!0),
    Ap = jp(!1),
    rs = Ln(null),
    os = null,
    gr = null,
    gu = null;

function vu() {
    gu = gr = os = null
}

function yu(e) {
    var t = rs.current;
    ie(rs), e._currentValue = t
}

function da(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Cr(e, t) {
    os = e, gu = gr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null)
}

function ut(e) {
    var t = e._currentValue;
    if (gu !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, gr === null) {
            if (os === null) throw Error(R(308));
            gr = e, os.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else gr = gr.next = e;
    return t
}
var $n = null;

function wu(e) {
    $n === null ? $n = [e] : $n.push(e)
}

function _p(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, wu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Qt(e, r)
}

function Qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var an = !1;

function xu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Op(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Ut(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Cn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Qt(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, wu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Qt(e, n)
}

function Li(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, iu(e, n)
    }
}

function Xc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function is(e, t, n, r) {
    var o = e.updateQueue;
    an = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l,
            u = a.next;
        a.next = null, s === null ? i = u : s.next = u, s = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = a))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0, d = u = a = null, l = i;
        do {
            var c = l.lane,
                y = l.eventTime;
            if ((r & c) === c) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var x = e,
                        w = l;
                    switch (c = t, y = n, w.tag) {
                        case 1:
                            if (x = w.payload, typeof x == "function") {
                                f = x.call(y, f, c);
                                break e
                            }
                            f = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = w.payload, c = typeof x == "function" ? x.call(y, f, c) : x, c == null) break e;
                            f = ce({}, f, c);
                            break e;
                        case 2:
                            an = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, c = o.effects, c === null ? o.effects = [l] : c.push(l))
            } else y = {
                eventTime: y,
                lane: c,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, d === null ? (u = d = y, a = f) : d = d.next = y, s |= c;
            if (l = l.next, l === null) {
                if (l = o.shared.pending, l === null) break;
                c = l, l = c.next, c.next = null, o.lastBaseUpdate = c, o.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        qn |= s, e.lanes = s, e.memoizedState = f
    }
}

function qc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(R(191, o));
                o.call(r)
            }
        }
}
var Jo = {},
    Ot = Ln(Jo),
    Io = Ln(Jo),
    Do = Ln(Jo);

function Bn(e) {
    if (e === Jo) throw Error(R(174));
    return e
}

function Su(e, t) {
    switch (te(Do, t), te(Io, e), te(Ot, Jo), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Vl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vl(t, e)
    }
    ie(Ot), te(Ot, t)
}

function Br() {
    ie(Ot), ie(Io), ie(Do)
}

function Lp(e) {
    Bn(Do.current);
    var t = Bn(Ot.current),
        n = Vl(t, e.type);
    t !== n && (te(Io, e), te(Ot, n))
}

function Eu(e) {
    Io.current === e && (ie(Ot), ie(Io))
}
var ae = Ln(0);

function ss(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Sl = [];

function Cu() {
    for (var e = 0; e < Sl.length; e++) Sl[e]._workInProgressVersionPrimary = null;
    Sl.length = 0
}
var Mi = Xt.ReactCurrentDispatcher,
    El = Xt.ReactCurrentBatchConfig,
    Xn = 0,
    ue = null,
    ge = null,
    we = null,
    ls = !1,
    xo = !1,
    zo = 0,
    Ry = 0;

function Pe() {
    throw Error(R(321))
}

function ku(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!xt(e[n], t[n])) return !1;
    return !0
}

function bu(e, t, n, r, o, i) {
    if (Xn = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Mi.current = e === null || e.memoizedState === null ? Oy : Ly, e = n(r, o), xo) {
        i = 0;
        do {
            if (xo = !1, zo = 0, 25 <= i) throw Error(R(301));
            i += 1, we = ge = null, t.updateQueue = null, Mi.current = My, e = n(r, o)
        } while (xo)
    }
    if (Mi.current = as, t = ge !== null && ge.next !== null, Xn = 0, we = ge = ue = null, ls = !1, t) throw Error(R(300));
    return e
}

function Nu() {
    var e = zo !== 0;
    return zo = 0, e
}

function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return we === null ? ue.memoizedState = we = e : we = we.next = e, we
}

function ct() {
    if (ge === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ge.next;
    var t = we === null ? ue.memoizedState : we.next;
    if (t !== null) we = t, ge = e;
    else {
        if (e === null) throw Error(R(310));
        ge = e, e = {
            memoizedState: ge.memoizedState,
            baseState: ge.baseState,
            baseQueue: ge.baseQueue,
            queue: ge.queue,
            next: null
        }, we === null ? ue.memoizedState = we = e : we = we.next = e
    }
    return we
}

function Fo(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Cl(e) {
    var t = ct(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = ge,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var l = s = null,
            a = null,
            u = i;
        do {
            var d = u.lane;
            if ((Xn & d) === d) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f, s = r) : a = a.next = f, ue.lanes |= d, qn |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l, xt(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, ue.lanes |= i, qn |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function kl(e) {
    var t = ct(),
        n = t.queue;
    if (n === null) throw Error(R(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        xt(i, t.memoizedState) || (Fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Mp() {}

function Ip(e, t) {
    var n = ue,
        r = ct(),
        o = t(),
        i = !xt(r.memoizedState, o);
    if (i && (r.memoizedState = o, Fe = !0), r = r.queue, Pu(Fp.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || we !== null && we.memoizedState.tag & 1) {
        if (n.flags |= 2048, $o(9, zp.bind(null, n, r, o, t), void 0, null), xe === null) throw Error(R(349));
        Xn & 30 || Dp(n, t, o)
    }
    return o
}

function Dp(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function zp(e, t, n, r) {
    t.value = n, t.getSnapshot = r, $p(t) && Bp(e)
}

function Fp(e, t, n) {
    return n(function() {
        $p(t) && Bp(e)
    })
}

function $p(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !xt(e, n)
    } catch {
        return !0
    }
}

function Bp(e) {
    var t = Qt(e, 1);
    t !== null && wt(t, e, 1, -1)
}

function Zc(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fo,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = _y.bind(null, ue, e), [t.memoizedState, e]
}

function $o(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Up() {
    return ct().memoizedState
}

function Ii(e, t, n, r) {
    var o = Pt();
    ue.flags |= e, o.memoizedState = $o(1 | t, n, void 0, r === void 0 ? null : r)
}

function Ts(e, t, n, r) {
    var o = ct();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ge !== null) {
        var s = ge.memoizedState;
        if (i = s.destroy, r !== null && ku(r, s.deps)) {
            o.memoizedState = $o(t, n, i, r);
            return
        }
    }
    ue.flags |= e, o.memoizedState = $o(1 | t, n, i, r)
}

function Jc(e, t) {
    return Ii(8390656, 8, e, t)
}

function Pu(e, t) {
    return Ts(2048, 8, e, t)
}

function Hp(e, t) {
    return Ts(4, 2, e, t)
}

function Wp(e, t) {
    return Ts(4, 4, e, t)
}

function Vp(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Qp(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ts(4, 4, Vp.bind(null, t, e), n)
}

function Tu() {}

function Kp(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ku(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Gp(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ku(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Yp(e, t, n) {
    return Xn & 21 ? (xt(n, t) || (n = ep(), ue.lanes |= n, qn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n)
}

function jy(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = El.transition;
    El.transition = {};
    try {
        e(!1), t()
    } finally {
        J = n, El.transition = r
    }
}

function Xp() {
    return ct().memoizedState
}

function Ay(e, t, n) {
    var r = bn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, qp(e)) Zp(t, n);
    else if (n = _p(e, t, n, r), n !== null) {
        var o = Me();
        wt(n, e, r, o), Jp(n, t, r)
    }
}

function _y(e, t, n) {
    var r = bn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (qp(e)) Zp(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                l = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = l, xt(l, s)) {
                var a = t.interleaved;
                a === null ? (o.next = o, wu(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = _p(e, t, o, r), n !== null && (o = Me(), wt(n, e, r, o), Jp(n, t, r))
    }
}

function qp(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}

function Zp(e, t) {
    xo = ls = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Jp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, iu(e, n)
    }
}
var as = {
        readContext: ut,
        useCallback: Pe,
        useContext: Pe,
        useEffect: Pe,
        useImperativeHandle: Pe,
        useInsertionEffect: Pe,
        useLayoutEffect: Pe,
        useMemo: Pe,
        useReducer: Pe,
        useRef: Pe,
        useState: Pe,
        useDebugValue: Pe,
        useDeferredValue: Pe,
        useTransition: Pe,
        useMutableSource: Pe,
        useSyncExternalStore: Pe,
        useId: Pe,
        unstable_isNewReconciler: !1
    },
    Oy = {
        readContext: ut,
        useCallback: function(e, t) {
            return Pt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: ut,
        useEffect: Jc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ii(4194308, 4, Vp.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ii(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ii(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Pt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Pt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Ay.bind(null, ue, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Pt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Zc,
        useDebugValue: Tu,
        useDeferredValue: function(e) {
            return Pt().memoizedState = e
        },
        useTransition: function() {
            var e = Zc(!1),
                t = e[0];
            return e = jy.bind(null, e[1]), Pt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ue,
                o = Pt();
            if (se) {
                if (n === void 0) throw Error(R(407));
                n = n()
            } else {
                if (n = t(), xe === null) throw Error(R(349));
                Xn & 30 || Dp(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, Jc(Fp.bind(null, r, i, e), [e]), r.flags |= 2048, $o(9, zp.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Pt(),
                t = xe.identifierPrefix;
            if (se) {
                var n = Bt,
                    r = $t;
                n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zo++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Ry++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Ly = {
        readContext: ut,
        useCallback: Kp,
        useContext: ut,
        useEffect: Pu,
        useImperativeHandle: Qp,
        useInsertionEffect: Hp,
        useLayoutEffect: Wp,
        useMemo: Gp,
        useReducer: Cl,
        useRef: Up,
        useState: function() {
            return Cl(Fo)
        },
        useDebugValue: Tu,
        useDeferredValue: function(e) {
            var t = ct();
            return Yp(t, ge.memoizedState, e)
        },
        useTransition: function() {
            var e = Cl(Fo)[0],
                t = ct().memoizedState;
            return [e, t]
        },
        useMutableSource: Mp,
        useSyncExternalStore: Ip,
        useId: Xp,
        unstable_isNewReconciler: !1
    },
    My = {
        readContext: ut,
        useCallback: Kp,
        useContext: ut,
        useEffect: Pu,
        useImperativeHandle: Qp,
        useInsertionEffect: Hp,
        useLayoutEffect: Wp,
        useMemo: Gp,
        useReducer: kl,
        useRef: Up,
        useState: function() {
            return kl(Fo)
        },
        useDebugValue: Tu,
        useDeferredValue: function(e) {
            var t = ct();
            return ge === null ? t.memoizedState = e : Yp(t, ge.memoizedState, e)
        },
        useTransition: function() {
            var e = kl(Fo)[0],
                t = ct().memoizedState;
            return [e, t]
        },
        useMutableSource: Mp,
        useSyncExternalStore: Ip,
        useId: Xp,
        unstable_isNewReconciler: !1
    };

function pt(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function fa(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Rs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? tr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            o = bn(e),
            i = Ut(r, o);
        i.payload = t, n != null && (i.callback = n), t = Cn(e, i, o), t !== null && (wt(t, e, o, r), Li(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            o = bn(e),
            i = Ut(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Cn(e, i, o), t !== null && (wt(t, e, o, r), Li(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Me(),
            r = bn(e),
            o = Ut(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Cn(e, o, r), t !== null && (wt(t, e, r, n), Li(t, e, r))
    }
};

function ed(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !_o(n, r) || !_o(o, i) : !0
}

function eh(e, t, n) {
    var r = !1,
        o = Tn,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = ut(i) : (o = Be(t) ? Gn : Ae.current, r = t.contextTypes, i = (r = r != null) ? zr(e, o) : Tn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function td(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Rs.enqueueReplaceState(t, t.state, null)
}

function pa(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, xu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = ut(i) : (i = Be(t) ? Gn : Ae.current, o.context = zr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (fa(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Rs.enqueueReplaceState(o, o.state, null), is(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ur(e, t) {
    try {
        var n = "",
            r = t;
        do n += uv(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function bl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function ha(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Iy = typeof WeakMap == "function" ? WeakMap : Map;

function th(e, t, n) {
    n = Ut(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        cs || (cs = !0, ka = r), ha(e, t)
    }, n
}

function nh(e, t, n) {
    n = Ut(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            ha(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ha(e, t), typeof r != "function" && (kn === null ? kn = new Set([this]) : kn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function nd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Iy;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Xy.bind(null, e, t, n), t.then(e, e))
}

function rd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function od(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ut(-1, 1), t.tag = 2, Cn(n, t, 1))), n.lanes |= 1), e)
}
var Dy = Xt.ReactCurrentOwner,
    Fe = !1;

function Oe(e, t, n, r) {
    t.child = e === null ? Ap(t, null, n, r) : $r(t, e.child, n, r)
}

function id(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Cr(t, o), r = bu(e, t, n, r, i, o), n = Nu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Kt(e, t, o)) : (se && n && pu(t), t.flags |= 1, Oe(e, t, r, o), t.child)
}

function sd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Iu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, rh(e, t, i, r, o)) : (e = $i(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : _o, n(s, r) && e.ref === t.ref) return Kt(e, t, o)
    }
    return t.flags |= 1, e = Nn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function rh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (_o(i, r) && e.ref === t.ref)
            if (Fe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
            else return t.lanes = e.lanes, Kt(e, t, o)
    }
    return ma(e, t, n, r, o)
}

function oh(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, te(yr, Ye), Ye |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, te(yr, Ye), Ye |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, te(yr, Ye), Ye |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, te(yr, Ye), Ye |= r;
    return Oe(e, t, o, n), t.child
}

function ih(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ma(e, t, n, r, o) {
    var i = Be(n) ? Gn : Ae.current;
    return i = zr(t, i), Cr(t, o), n = bu(e, t, n, r, i, o), r = Nu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Kt(e, t, o)) : (se && r && pu(t), t.flags |= 1, Oe(e, t, n, o), t.child)
}

function ld(e, t, n, r, o) {
    if (Be(n)) {
        var i = !0;
        es(t)
    } else i = !1;
    if (Cr(t, o), t.stateNode === null) Di(e, t), eh(t, n, r), pa(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = ut(u) : (u = Be(n) ? Gn : Ae.current, u = zr(t, u));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && td(t, s, r, u), an = !1;
        var c = t.memoizedState;
        s.state = c, is(t, r, s, o), a = t.memoizedState, l !== r || c !== a || $e.current || an ? (typeof d == "function" && (fa(t, n, d, r), a = t.memoizedState), (l = an || ed(t, n, l, r, c, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Op(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : pt(t.type, l), s.props = u, f = t.pendingProps, c = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = ut(a) : (a = Be(n) ? Gn : Ae.current, a = zr(t, a));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || c !== a) && td(t, s, r, a), an = !1, c = t.memoizedState, s.state = c, is(t, r, s, o);
        var x = t.memoizedState;
        l !== f || c !== x || $e.current || an ? (typeof y == "function" && (fa(t, n, y, r), x = t.memoizedState), (u = an || ed(t, n, u, r, c, x, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && c === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ga(e, t, n, r, i, o)
}

function ga(e, t, n, r, o, i) {
    ih(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Qc(t, n, !1), Kt(e, t, i);
    r = t.stateNode, Dy.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = $r(t, e.child, null, i), t.child = $r(t, null, l, i)) : Oe(e, t, l, i), t.memoizedState = r.state, o && Qc(t, n, !0), t.child
}

function sh(e) {
    var t = e.stateNode;
    t.pendingContext ? Vc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vc(e, t.context, !1), Su(e, t.containerInfo)
}

function ad(e, t, n, r, o) {
    return Fr(), mu(o), t.flags |= 256, Oe(e, t, n, r), t.child
}
var va = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ya(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function lh(e, t, n) {
    var r = t.pendingProps,
        o = ae.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), te(ae, o & 1), e === null) return ca(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = _s(s, r, 0, null), e = Kn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ya(n), t.memoizedState = va, e) : Ru(t, s));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return zy(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Nn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Nn(l, i) : (i = Kn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? ya(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = va, r
    }
    return i = e.child, e = i.sibling, r = Nn(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ru(e, t) {
    return t = _s({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function wi(e, t, n, r) {
    return r !== null && mu(r), $r(t, e.child, null, n), e = Ru(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function zy(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = bl(Error(R(422))), wi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = _s({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = Kn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && $r(t, e.child, null, s), t.child.memoizedState = ya(s), t.memoizedState = va, i);
    if (!(t.mode & 1)) return wi(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
        return r = l, i = Error(R(419)), r = bl(i, r, void 0), wi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, Fe || l) {
        if (r = xe, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Qt(e, o), wt(r, e, o, -1))
        }
        return Mu(), r = bl(Error(R(421))), wi(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, qe = En(o.nextSibling), Ze = t, se = !0, vt = null, e !== null && (it[st++] = $t, it[st++] = Bt, it[st++] = Yn, $t = e.id, Bt = e.overflow, Yn = t), t = Ru(t, r.children), t.flags |= 4096, t)
}

function ud(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), da(e.return, t, n)
}

function Nl(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function ah(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (Oe(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ud(e, n, t);
            else if (e.tag === 19) ud(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (te(ae, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ss(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Nl(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && ss(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            Nl(t, !0, n, null, i);
            break;
        case "together":
            Nl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Di(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), qn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(R(153));
    if (t.child !== null) {
        for (e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Nn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Fy(e, t, n) {
    switch (t.tag) {
        case 3:
            sh(t), Fr();
            break;
        case 5:
            Lp(t);
            break;
        case 1:
            Be(t.type) && es(t);
            break;
        case 4:
            Su(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            te(rs, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (te(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? lh(e, t, n) : (te(ae, ae.current & 1), e = Kt(e, t, n), e !== null ? e.sibling : null);
            te(ae, ae.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return ah(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), te(ae, ae.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, oh(e, t, n)
    }
    return Kt(e, t, n)
}
var uh, wa, ch, dh;
uh = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
wa = function() {};
ch = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Bn(Ot.current);
        var i = null;
        switch (n) {
            case "input":
                o = Bl(e, o), r = Bl(e, r), i = [];
                break;
            case "select":
                o = ce({}, o, {
                    value: void 0
                }), r = ce({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = Wl(e, o), r = Wl(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zi)
        }
        Ql(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (bo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
                    } else n || (i || (i = []), i.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (bo.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
dh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function so(e, t) {
    if (!se) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function $y(e, t, n) {
    var r = t.pendingProps;
    switch (hu(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Te(t), null;
        case 1:
            return Be(t.type) && Ji(), Te(t), null;
        case 3:
            return r = t.stateNode, Br(), ie($e), ie(Ae), Cu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, vt !== null && (Pa(vt), vt = null))), wa(e, t), Te(t), null;
        case 5:
            Eu(t);
            var o = Bn(Do.current);
            if (n = t.type, e !== null && t.stateNode != null) ch(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(R(166));
                    return Te(t), null
                }
                if (e = Bn(Ot.current), vi(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[At] = t, r[Mo] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            oe("cancel", r), oe("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            oe("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < ho.length; o++) oe(ho[o], r);
                            break;
                        case "source":
                            oe("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            oe("error", r), oe("load", r);
                            break;
                        case "details":
                            oe("toggle", r);
                            break;
                        case "input":
                            yc(r, i), oe("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, oe("invalid", r);
                            break;
                        case "textarea":
                            xc(r, i), oe("invalid", r)
                    }
                    Ql(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && gi(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && gi(r.textContent, l, e), o = ["children", "" + l]) : bo.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            ai(r), wc(r, i, !0);
                            break;
                        case "textarea":
                            ai(r), Sc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Zi)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ff(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[At] = t, e[Mo] = r, uh(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Kl(n, r), n) {
                            case "dialog":
                                oe("cancel", e), oe("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                oe("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < ho.length; o++) oe(ho[o], e);
                                o = r;
                                break;
                            case "source":
                                oe("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                oe("error", e), oe("load", e), o = r;
                                break;
                            case "details":
                                oe("toggle", e), o = r;
                                break;
                            case "input":
                                yc(e, r), o = Bl(e, r), oe("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = ce({}, r, {
                                    value: void 0
                                }), oe("invalid", e);
                                break;
                            case "textarea":
                                xc(e, r), o = Wl(e, r), oe("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Ql(n, o),
                        l = o;
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var a = l[i];
                                i === "style" ? Uf(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && $f(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && No(e, a) : typeof a == "number" && No(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (bo.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && Ja(e, i, a, s))
                            }
                        switch (n) {
                            case "input":
                                ai(e), wc(e, r, !1);
                                break;
                            case "textarea":
                                ai(e), Sc(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Pn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? wr(e, !!r.multiple, i, !1) : r.defaultValue != null && wr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Zi)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Te(t), null;
        case 6:
            if (e && t.stateNode != null) dh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
                if (n = Bn(Do.current), Bn(Ot.current), vi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[At] = t, (i = r.nodeValue !== n) && (e = Ze, e !== null)) switch (e.tag) {
                        case 3:
                            gi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && gi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[At] = t, t.stateNode = r
            }
            return Te(t), null;
        case 13:
            if (ie(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (se && qe !== null && t.mode & 1 && !(t.flags & 128)) Rp(), Fr(), t.flags |= 98560, i = !1;
                else if (i = vi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(R(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(R(317));
                        i[At] = t
                    } else Fr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Te(t), i = !1
                } else vt !== null && (Pa(vt), vt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : Mu())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
        case 4:
            return Br(), wa(e, t), e === null && Oo(t.stateNode.containerInfo), Te(t), null;
        case 10:
            return yu(t.type._context), Te(t), null;
        case 17:
            return Be(t.type) && Ji(), Te(t), null;
        case 19:
            if (ie(ae), i = t.memoizedState, i === null) return Te(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) so(i, !1);
                else {
                    if (ve !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = ss(e), s !== null) {
                                for (t.flags |= 128, so(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return te(ae, ae.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && he() > Hr && (t.flags |= 128, r = !0, so(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = ss(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), so(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !se) return Te(t), null
                    } else 2 * he() - i.renderingStartTime > Hr && n !== 1073741824 && (t.flags |= 128, r = !0, so(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = he(), t.sibling = null, n = ae.current, te(ae, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
        case 22:
        case 23:
            return Lu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ye & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(R(156, t.tag))
}

function By(e, t) {
    switch (hu(t), t.tag) {
        case 1:
            return Be(t.type) && Ji(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Br(), ie($e), ie(Ae), Cu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Eu(t), null;
        case 13:
            if (ie(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(R(340));
                Fr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ie(ae), null;
        case 4:
            return Br(), null;
        case 10:
            return yu(t.type._context), null;
        case 22:
        case 23:
            return Lu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var xi = !1,
    je = !1,
    Uy = typeof WeakSet == "function" ? WeakSet : Set,
    L = null;

function vr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            fe(e, t, r)
        } else n.current = null
}

function xa(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var cd = !1;

function Hy(e, t) {
    if (ra = Yi, e = gp(), fu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    a = -1,
                    u = 0,
                    d = 0,
                    f = e,
                    c = null;
                t: for (;;) {
                    for (var y; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o), f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (y = f.firstChild) !== null;) c = f, f = y;
                    for (;;) {
                        if (f === e) break t;
                        if (c === n && ++u === o && (l = s), c === i && ++d === r && (a = s), (y = f.nextSibling) !== null) break;
                        f = c, c = f.parentNode
                    }
                    f = y
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (oa = {
            focusedElem: e,
            selectionRange: n
        }, Yi = !1, L = t; L !== null;)
        if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
        else
            for (; L !== null;) {
                t = L;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var w = x.memoizedProps,
                                    S = x.memoizedState,
                                    h = t.stateNode,
                                    p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : pt(t.type, w), S);
                                h.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(R(163))
                    }
                } catch (E) {
                    fe(t, t.return, E)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, L = e;
                    break
                }
                L = t.return
            }
    return x = cd, cd = !1, x
}

function So(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && xa(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function js(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Sa(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function fh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, fh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[At], delete t[Mo], delete t[la], delete t[by], delete t[Ny])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function ph(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function dd(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || ph(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ea(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zi));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ea(e, t, n), e = e.sibling; e !== null;) Ea(e, t, n), e = e.sibling
}

function Ca(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ca(e, t, n), e = e.sibling; e !== null;) Ca(e, t, n), e = e.sibling
}
var Ee = null,
    gt = !1;

function nn(e, t, n) {
    for (n = n.child; n !== null;) hh(e, t, n), n = n.sibling
}

function hh(e, t, n) {
    if (_t && typeof _t.onCommitFiberUnmount == "function") try {
        _t.onCommitFiberUnmount(Es, n)
    } catch {}
    switch (n.tag) {
        case 5:
            je || vr(n, t);
        case 6:
            var r = Ee,
                o = gt;
            Ee = null, nn(e, t, n), Ee = r, gt = o, Ee !== null && (gt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
            break;
        case 18:
            Ee !== null && (gt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? wl(e.parentNode, n) : e.nodeType === 1 && wl(e, n), jo(e)) : wl(Ee, n.stateNode));
            break;
        case 4:
            r = Ee, o = gt, Ee = n.stateNode.containerInfo, gt = !0, nn(e, t, n), Ee = r, gt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && xa(n, t, s), o = o.next
                } while (o !== r)
            }
            nn(e, t, n);
            break;
        case 1:
            if (!je && (vr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
            nn(e, t, n);
            break;
        case 21:
            nn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, nn(e, t, n), je = r) : nn(e, t, n);
            break;
        default:
            nn(e, t, n)
    }
}

function fd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Uy), t.forEach(function(r) {
            var o = Zy.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function ft(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            Ee = l.stateNode, gt = !1;
                            break e;
                        case 3:
                            Ee = l.stateNode.containerInfo, gt = !0;
                            break e;
                        case 4:
                            Ee = l.stateNode.containerInfo, gt = !0;
                            break e
                    }
                    l = l.return
                }
                if (Ee === null) throw Error(R(160));
                hh(i, s, o), Ee = null, gt = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null
            } catch (u) {
                fe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) mh(t, e), t = t.sibling
}

function mh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ft(t, e), Nt(e), r & 4) {
                try {
                    So(3, e, e.return), js(3, e)
                } catch (w) {
                    fe(e, e.return, w)
                }
                try {
                    So(5, e, e.return)
                } catch (w) {
                    fe(e, e.return, w)
                }
            }
            break;
        case 1:
            ft(t, e), Nt(e), r & 512 && n !== null && vr(n, n.return);
            break;
        case 5:
            if (ft(t, e), Nt(e), r & 512 && n !== null && vr(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    No(o, "")
                } catch (w) {
                    fe(e, e.return, w)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    l = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && i.type === "radio" && i.name != null && Df(o, i), Kl(l, s);
                    var u = Kl(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var d = a[s],
                            f = a[s + 1];
                        d === "style" ? Uf(o, f) : d === "dangerouslySetInnerHTML" ? $f(o, f) : d === "children" ? No(o, f) : Ja(o, d, f, u)
                    }
                    switch (l) {
                        case "input":
                            Ul(o, i);
                            break;
                        case "textarea":
                            zf(o, i);
                            break;
                        case "select":
                            var c = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var y = i.value;
                            y != null ? wr(o, !!i.multiple, y, !1) : c !== !!i.multiple && (i.defaultValue != null ? wr(o, !!i.multiple, i.defaultValue, !0) : wr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Mo] = i
                } catch (w) {
                    fe(e, e.return, w)
                }
            }
            break;
        case 6:
            if (ft(t, e), Nt(e), r & 4) {
                if (e.stateNode === null) throw Error(R(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (w) {
                    fe(e, e.return, w)
                }
            }
            break;
        case 3:
            if (ft(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                jo(t.containerInfo)
            } catch (w) {
                fe(e, e.return, w)
            }
            break;
        case 4:
            ft(t, e), Nt(e);
            break;
        case 13:
            ft(t, e), Nt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (_u = he())), r & 4 && fd(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (u = je) || d, ft(t, e), je = u) : ft(t, e), Nt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (L = e, d = e.child; d !== null;) {
                        for (f = L = d; L !== null;) {
                            switch (c = L, y = c.child, c.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    So(4, c, c.return);
                                    break;
                                case 1:
                                    vr(c, c.return);
                                    var x = c.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = c, n = c.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                        } catch (w) {
                                            fe(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    vr(c, c.return);
                                    break;
                                case 22:
                                    if (c.memoizedState !== null) {
                                        hd(f);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = c, L = y) : hd(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null, f = e;;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Bf("display", s))
                            } catch (w) {
                                fe(e, e.return, w)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (w) {
                            fe(e, e.return, w)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), f = f.return
                    }
                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            ft(t, e), Nt(e), r & 4 && fd(e);
            break;
        case 21:
            break;
        default:
            ft(t, e), Nt(e)
    }
}

function Nt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (ph(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(R(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (No(o, ""), r.flags &= -33);
                    var i = dd(e);
                    Ca(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = dd(e);
                    Ea(e, l, s);
                    break;
                default:
                    throw Error(R(161))
            }
        }
        catch (a) {
            fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Wy(e, t, n) {
    L = e, gh(e)
}

function gh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null;) {
        var o = L,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || xi;
            if (!s) {
                var l = o.alternate,
                    a = l !== null && l.memoizedState !== null || je;
                l = xi;
                var u = je;
                if (xi = s, (je = a) && !u)
                    for (L = o; L !== null;) s = L, a = s.child, s.tag === 22 && s.memoizedState !== null ? md(o) : a !== null ? (a.return = s, L = a) : md(o);
                for (; i !== null;) L = i, gh(i), i = i.sibling;
                L = o, xi = l, je = u
            }
            pd(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, L = i) : pd(e)
    }
}

function pd(e) {
    for (; L !== null;) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        je || js(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !je)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && qc(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            qc(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && jo(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(R(163))
                }
                je || t.flags & 512 && Sa(t)
            } catch (c) {
                fe(t, t.return, c)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function hd(e) {
    for (; L !== null;) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function md(e) {
    for (; L !== null;) {
        var t = L;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        js(4, t)
                    } catch (a) {
                        fe(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            fe(t, o, a)
                        }
                    }
                    var i = t.return;
                    try {
                        Sa(t)
                    } catch (a) {
                        fe(t, i, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Sa(t)
                    } catch (a) {
                        fe(t, s, a)
                    }
            }
        } catch (a) {
            fe(t, t.return, a)
        }
        if (t === e) {
            L = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, L = l;
            break
        }
        L = t.return
    }
}
var Vy = Math.ceil,
    us = Xt.ReactCurrentDispatcher,
    ju = Xt.ReactCurrentOwner,
    at = Xt.ReactCurrentBatchConfig,
    X = 0,
    xe = null,
    me = null,
    Ce = 0,
    Ye = 0,
    yr = Ln(0),
    ve = 0,
    Bo = null,
    qn = 0,
    As = 0,
    Au = 0,
    Eo = null,
    ze = null,
    _u = 0,
    Hr = 1 / 0,
    zt = null,
    cs = !1,
    ka = null,
    kn = null,
    Si = !1,
    vn = null,
    ds = 0,
    Co = 0,
    ba = null,
    zi = -1,
    Fi = 0;

function Me() {
    return X & 6 ? he() : zi !== -1 ? zi : zi = he()
}

function bn(e) {
    return e.mode & 1 ? X & 2 && Ce !== 0 ? Ce & -Ce : Ty.transition !== null ? (Fi === 0 && (Fi = ep()), Fi) : (e = J, e !== 0 || (e = window.event, e = e === void 0 ? 16 : lp(e.type)), e) : 1
}

function wt(e, t, n, r) {
    if (50 < Co) throw Co = 0, ba = null, Error(R(185));
    Xo(e, n, r), (!(X & 2) || e !== xe) && (e === xe && (!(X & 2) && (As |= n), ve === 4 && cn(e, Ce)), Ue(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Hr = he() + 500, Ps && Mn()))
}

function Ue(e, t) {
    var n = e.callbackNode;
    Tv(e, t);
    var r = Gi(e, e === xe ? Ce : 0);
    if (r === 0) n !== null && kc(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && kc(n), t === 1) e.tag === 0 ? Py(gd.bind(null, e)) : Np(gd.bind(null, e)), Cy(function() {
            !(X & 6) && Mn()
        }), n = null;
        else {
            switch (tp(r)) {
                case 1:
                    n = ou;
                    break;
                case 4:
                    n = Zf;
                    break;
                case 16:
                    n = Ki;
                    break;
                case 536870912:
                    n = Jf;
                    break;
                default:
                    n = Ki
            }
            n = kh(n, vh.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function vh(e, t) {
    if (zi = -1, Fi = 0, X & 6) throw Error(R(327));
    var n = e.callbackNode;
    if (kr() && e.callbackNode !== n) return null;
    var r = Gi(e, e === xe ? Ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = fs(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var i = wh();
        (xe !== e || Ce !== t) && (zt = null, Hr = he() + 500, Qn(e, t));
        do try {
            Gy();
            break
        } catch (l) {
            yh(e, l)
        }
        while (!0);
        vu(), us.current = i, X = o, me !== null ? t = 0 : (xe = null, Ce = 0, t = ve)
    }
    if (t !== 0) {
        if (t === 2 && (o = Zl(e), o !== 0 && (r = o, t = Na(e, o))), t === 1) throw n = Bo, Qn(e, 0), cn(e, r), Ue(e, he()), n;
        if (t === 6) cn(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !Qy(o) && (t = fs(e, r), t === 2 && (i = Zl(e), i !== 0 && (r = i, t = Na(e, i))), t === 1)) throw n = Bo, Qn(e, 0), cn(e, r), Ue(e, he()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(R(345));
                case 2:
                    zn(e, ze, zt);
                    break;
                case 3:
                    if (cn(e, r), (r & 130023424) === r && (t = _u + 500 - he(), 10 < t)) {
                        if (Gi(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Me(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = sa(zn.bind(null, e, ze, zt), t);
                        break
                    }
                    zn(e, ze, zt);
                    break;
                case 4:
                    if (cn(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - yt(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vy(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = sa(zn.bind(null, e, ze, zt), r);
                        break
                    }
                    zn(e, ze, zt);
                    break;
                case 5:
                    zn(e, ze, zt);
                    break;
                default:
                    throw Error(R(329))
            }
        }
    }
    return Ue(e, he()), e.callbackNode === n ? vh.bind(null, e) : null
}

function Na(e, t) {
    var n = Eo;
    return e.current.memoizedState.isDehydrated && (Qn(e, t).flags |= 256), e = fs(e, t), e !== 2 && (t = ze, ze = n, t !== null && Pa(t)), e
}

function Pa(e) {
    ze === null ? ze = e : ze.push.apply(ze, e)
}

function Qy(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!xt(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function cn(e, t) {
    for (t &= ~Au, t &= ~As, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - yt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function gd(e) {
    if (X & 6) throw Error(R(327));
    kr();
    var t = Gi(e, 0);
    if (!(t & 1)) return Ue(e, he()), null;
    var n = fs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Zl(e);
        r !== 0 && (t = r, n = Na(e, r))
    }
    if (n === 1) throw n = Bo, Qn(e, 0), cn(e, t), Ue(e, he()), n;
    if (n === 6) throw Error(R(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, zn(e, ze, zt), Ue(e, he()), null
}

function Ou(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n, X === 0 && (Hr = he() + 500, Ps && Mn())
    }
}

function Zn(e) {
    vn !== null && vn.tag === 0 && !(X & 6) && kr();
    var t = X;
    X |= 1;
    var n = at.transition,
        r = J;
    try {
        if (at.transition = null, J = 1, e) return e()
    } finally {
        J = r, at.transition = n, X = t, !(X & 6) && Mn()
    }
}

function Lu() {
    Ye = yr.current, ie(yr)
}

function Qn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Ey(n)), me !== null)
        for (n = me.return; n !== null;) {
            var r = n;
            switch (hu(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ji();
                    break;
                case 3:
                    Br(), ie($e), ie(Ae), Cu();
                    break;
                case 5:
                    Eu(r);
                    break;
                case 4:
                    Br();
                    break;
                case 13:
                    ie(ae);
                    break;
                case 19:
                    ie(ae);
                    break;
                case 10:
                    yu(r.type._context);
                    break;
                case 22:
                case 23:
                    Lu()
            }
            n = n.return
        }
    if (xe = e, me = e = Nn(e.current, null), Ce = Ye = t, ve = 0, Bo = null, Au = As = qn = 0, ze = Eo = null, $n !== null) {
        for (t = 0; t < $n.length; t++)
            if (n = $n[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            }
        $n = null
    }
    return e
}

function yh(e, t) {
    do {
        var n = me;
        try {
            if (vu(), Mi.current = as, ls) {
                for (var r = ue.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                ls = !1
            }
            if (Xn = 0, we = ge = ue = null, xo = !1, zo = 0, ju.current = null, n === null || n.return === null) {
                ve = 1, Bo = t, me = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (t = Ce, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        d = l,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var c = d.alternate;
                        c ? (d.updateQueue = c.updateQueue, d.memoizedState = c.memoizedState, d.lanes = c.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var y = rd(s);
                    if (y !== null) {
                        y.flags &= -257, od(y, s, l, i, t), y.mode & 1 && nd(i, u, t), t = y, a = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var w = new Set;
                            w.add(a), t.updateQueue = w
                        } else x.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            nd(i, u, t), Mu();
                            break e
                        }
                        a = Error(R(426))
                    }
                } else if (se && l.mode & 1) {
                    var S = rd(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), od(S, s, l, i, t), mu(Ur(a, l));
                        break e
                    }
                }
                i = a = Ur(a, l),
                ve !== 4 && (ve = 2),
                Eo === null ? Eo = [i] : Eo.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var h = th(i, a, t);
                            Xc(i, h);
                            break e;
                        case 1:
                            l = a;
                            var p = i.type,
                                g = i.stateNode;
                            if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (kn === null || !kn.has(g)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var E = nh(i, l, t);
                                Xc(i, E);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Sh(n)
        } catch (C) {
            t = C, me === n && n !== null && (me = n = n.return);
            continue
        }
        break
    } while (!0)
}

function wh() {
    var e = us.current;
    return us.current = as, e === null ? as : e
}

function Mu() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4), xe === null || !(qn & 268435455) && !(As & 268435455) || cn(xe, Ce)
}

function fs(e, t) {
    var n = X;
    X |= 2;
    var r = wh();
    (xe !== e || Ce !== t) && (zt = null, Qn(e, t));
    do try {
        Ky();
        break
    } catch (o) {
        yh(e, o)
    }
    while (!0);
    if (vu(), X = n, us.current = r, me !== null) throw Error(R(261));
    return xe = null, Ce = 0, ve
}

function Ky() {
    for (; me !== null;) xh(me)
}

function Gy() {
    for (; me !== null && !wv();) xh(me)
}

function xh(e) {
    var t = Ch(e.alternate, e, Ye);
    e.memoizedProps = e.pendingProps, t === null ? Sh(e) : me = t, ju.current = null
}

function Sh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = By(n, t), n !== null) {
                n.flags &= 32767, me = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ve = 6, me = null;
                return
            }
        } else if (n = $y(n, t, Ye), n !== null) {
            me = n;
            return
        }
        if (t = t.sibling, t !== null) {
            me = t;
            return
        }
        me = t = e
    } while (t !== null);
    ve === 0 && (ve = 5)
}

function zn(e, t, n) {
    var r = J,
        o = at.transition;
    try {
        at.transition = null, J = 1, Yy(e, t, n, r)
    } finally {
        at.transition = o, J = r
    }
    return null
}

function Yy(e, t, n, r) {
    do kr(); while (vn !== null);
    if (X & 6) throw Error(R(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Rv(e, i), e === xe && (me = xe = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Si || (Si = !0, kh(Ki, function() {
            return kr(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = at.transition, at.transition = null;
        var s = J;
        J = 1;
        var l = X;
        X |= 4, ju.current = null, Hy(e, n), mh(n, e), my(oa), Yi = !!ra, oa = ra = null, e.current = n, Wy(n), xv(), X = l, J = s, at.transition = i
    } else e.current = n;
    if (Si && (Si = !1, vn = e, ds = o), i = e.pendingLanes, i === 0 && (kn = null), Cv(n.stateNode), Ue(e, he()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (cs) throw cs = !1, e = ka, ka = null, e;
    return ds & 1 && e.tag !== 0 && kr(), i = e.pendingLanes, i & 1 ? e === ba ? Co++ : (Co = 0, ba = e) : Co = 0, Mn(), null
}

function kr() {
    if (vn !== null) {
        var e = tp(ds),
            t = at.transition,
            n = J;
        try {
            if (at.transition = null, J = 16 > e ? 16 : e, vn === null) var r = !1;
            else {
                if (e = vn, vn = null, ds = 0, X & 6) throw Error(R(331));
                var o = X;
                for (X |= 4, L = e.current; L !== null;) {
                    var i = L,
                        s = i.child;
                    if (L.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (L = u; L !== null;) {
                                    var d = L;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            So(8, d, i)
                                    }
                                    var f = d.child;
                                    if (f !== null) f.return = d, L = f;
                                    else
                                        for (; L !== null;) {
                                            d = L;
                                            var c = d.sibling,
                                                y = d.return;
                                            if (fh(d), d === u) {
                                                L = null;
                                                break
                                            }
                                            if (c !== null) {
                                                c.return = y, L = c;
                                                break
                                            }
                                            L = y
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var w = x.child;
                                if (w !== null) {
                                    x.child = null;
                                    do {
                                        var S = w.sibling;
                                        w.sibling = null, w = S
                                    } while (w !== null)
                                }
                            }
                            L = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, L = s;
                    else e: for (; L !== null;) {
                        if (i = L, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                So(9, i, i.return)
                        }
                        var h = i.sibling;
                        if (h !== null) {
                            h.return = i.return, L = h;
                            break e
                        }
                        L = i.return
                    }
                }
                var p = e.current;
                for (L = p; L !== null;) {
                    s = L;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, L = g;
                    else e: for (s = p; L !== null;) {
                        if (l = L, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    js(9, l)
                            }
                        } catch (C) {
                            fe(l, l.return, C)
                        }
                        if (l === s) {
                            L = null;
                            break e
                        }
                        var E = l.sibling;
                        if (E !== null) {
                            E.return = l.return, L = E;
                            break e
                        }
                        L = l.return
                    }
                }
                if (X = o, Mn(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
                    _t.onPostCommitFiberRoot(Es, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            J = n, at.transition = t
        }
    }
    return !1
}

function vd(e, t, n) {
    t = Ur(n, t), t = th(e, t, 1), e = Cn(e, t, 1), t = Me(), e !== null && (Xo(e, 1, t), Ue(e, t))
}

function fe(e, t, n) {
    if (e.tag === 3) vd(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                vd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r))) {
                    e = Ur(n, e), e = nh(t, e, 1), t = Cn(t, e, 1), e = Me(), t !== null && (Xo(t, 1, e), Ue(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Xy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (Ce & n) === n && (ve === 4 || ve === 3 && (Ce & 130023424) === Ce && 500 > he() - _u ? Qn(e, 0) : Au |= n), Ue(e, t)
}

function Eh(e, t) {
    t === 0 && (e.mode & 1 ? (t = di, di <<= 1, !(di & 130023424) && (di = 4194304)) : t = 1);
    var n = Me();
    e = Qt(e, t), e !== null && (Xo(e, t, n), Ue(e, n))
}

function qy(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Eh(e, n)
}

function Zy(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(R(314))
    }
    r !== null && r.delete(t), Eh(e, n)
}
var Ch;
Ch = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || $e.current) Fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, Fy(e, t, n);
            Fe = !!(e.flags & 131072)
        }
    else Fe = !1, se && t.flags & 1048576 && Pp(t, ns, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Di(e, t), e = t.pendingProps;
            var o = zr(t, Ae.current);
            Cr(t, n), o = bu(null, t, r, e, o, n);
            var i = Nu();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (i = !0, es(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, xu(t), o.updater = Rs, t.stateNode = o, o._reactInternals = t, pa(t, r, e, n), t = ga(null, t, r, !0, i, n)) : (t.tag = 0, se && i && pu(t), Oe(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Di(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = e0(r), e = pt(r, e), o) {
                    case 0:
                        t = ma(null, t, r, e, n);
                        break e;
                    case 1:
                        t = ld(null, t, r, e, n);
                        break e;
                    case 11:
                        t = id(null, t, r, e, n);
                        break e;
                    case 14:
                        t = sd(null, t, r, pt(r.type, e), n);
                        break e
                }
                throw Error(R(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), ma(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), ld(e, t, r, o, n);
        case 3:
            e: {
                if (sh(t), e === null) throw Error(R(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                Op(e, t),
                is(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = Ur(Error(R(423)), t), t = ad(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = Ur(Error(R(424)), t), t = ad(e, t, r, n, o);
                    break e
                } else
                    for (qe = En(t.stateNode.containerInfo.firstChild), Ze = t, se = !0, vt = null, n = Ap(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Fr(), r === o) {
                        t = Kt(e, t, n);
                        break e
                    }
                    Oe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Lp(t), e === null && ca(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, ia(r, o) ? s = null : i !== null && ia(r, i) && (t.flags |= 32), ih(e, t), Oe(e, t, s, n), t.child;
        case 6:
            return e === null && ca(t), null;
        case 13:
            return lh(e, t, n);
        case 4:
            return Su(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $r(t, null, r, n) : Oe(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), id(e, t, r, o, n);
        case 7:
            return Oe(e, t, t.pendingProps, n), t.child;
        case 8:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Oe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, te(rs, r._currentValue), r._currentValue = s, i !== null)
                    if (xt(i.value, s)) {
                        if (i.children === o.children && !$e.current) {
                            t = Kt(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var l = i.dependencies;
                            if (l !== null) {
                                s = i.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (i.tag === 1) {
                                            a = Ut(-1, n & -n), a.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a
                                            }
                                        }
                                        i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), da(i.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(R(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), da(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                Oe(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Cr(t, n), o = ut(o), r = r(o), t.flags |= 1, Oe(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = pt(r, t.pendingProps), o = pt(r.type, o), sd(e, t, r, o, n);
        case 15:
            return rh(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : pt(r, o), Di(e, t), t.tag = 1, Be(r) ? (e = !0, es(t)) : e = !1, Cr(t, n), eh(t, r, o), pa(t, r, o, n), ga(null, t, r, !0, e, n);
        case 19:
            return ah(e, t, n);
        case 22:
            return oh(e, t, n)
    }
    throw Error(R(156, t.tag))
};

function kh(e, t) {
    return qf(e, t)
}

function Jy(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function lt(e, t, n, r) {
    return new Jy(e, t, n, r)
}

function Iu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function e0(e) {
    if (typeof e == "function") return Iu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === tu) return 11;
        if (e === nu) return 14
    }
    return 2
}

function Nn(e, t) {
    var n = e.alternate;
    return n === null ? (n = lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function $i(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") Iu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case ar:
            return Kn(n.children, o, i, t);
        case eu:
            s = 8, o |= 8;
            break;
        case Dl:
            return e = lt(12, n, t, o | 2), e.elementType = Dl, e.lanes = i, e;
        case zl:
            return e = lt(13, n, t, o), e.elementType = zl, e.lanes = i, e;
        case Fl:
            return e = lt(19, n, t, o), e.elementType = Fl, e.lanes = i, e;
        case Lf:
            return _s(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case _f:
                    s = 10;
                    break e;
                case Of:
                    s = 9;
                    break e;
                case tu:
                    s = 11;
                    break e;
                case nu:
                    s = 14;
                    break e;
                case ln:
                    s = 16, r = null;
                    break e
            }
            throw Error(R(130, e == null ? e : typeof e, ""))
    }
    return t = lt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Kn(e, t, n, r) {
    return e = lt(7, e, r, t), e.lanes = n, e
}

function _s(e, t, n, r) {
    return e = lt(22, e, r, t), e.elementType = Lf, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Pl(e, t, n) {
    return e = lt(6, e, null, t), e.lanes = n, e
}

function Tl(e, t, n) {
    return t = lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function t0(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Du(e, t, n, r, o, i, s, l, a) {
    return e = new t0(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = lt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, xu(i), e
}

function n0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: lr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function bh(e) {
    if (!e) return Tn;
    e = e._reactInternals;
    e: {
        if (tr(e) !== e || e.tag !== 1) throw Error(R(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Be(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(R(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Be(n)) return bp(e, n, t)
    }
    return t
}

function Nh(e, t, n, r, o, i, s, l, a) {
    return e = Du(n, r, !0, e, o, i, s, l, a), e.context = bh(null), n = e.current, r = Me(), o = bn(n), i = Ut(r, o), i.callback = t ? ? null, Cn(n, i, o), e.current.lanes = o, Xo(e, o, r), Ue(e, r), e
}

function Os(e, t, n, r) {
    var o = t.current,
        i = Me(),
        s = bn(o);
    return n = bh(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ut(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Cn(o, t, s), e !== null && (wt(e, o, s, i), Li(e, o, s)), s
}

function ps(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function yd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function zu(e, t) {
    yd(e, t), (e = e.alternate) && yd(e, t)
}

function r0() {
    return null
}
var Ph = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Fu(e) {
    this._internalRoot = e
}
Ls.prototype.render = Fu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(R(409));
    Os(e, t, null, null)
};
Ls.prototype.unmount = Fu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Zn(function() {
            Os(null, e, null, null)
        }), t[Vt] = null
    }
};

function Ls(e) {
    this._internalRoot = e
}
Ls.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = op();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
        un.splice(n, 0, e), n === 0 && sp(e)
    }
};

function $u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Ms(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function wd() {}

function o0(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = ps(s);
                i.call(u)
            }
        }
        var s = Nh(t, r, e, 0, null, !1, !1, "", wd);
        return e._reactRootContainer = s, e[Vt] = s.current, Oo(e.nodeType === 8 ? e.parentNode : e), Zn(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = ps(a);
            l.call(u)
        }
    }
    var a = Du(e, 0, !1, null, null, !1, !1, "", wd);
    return e._reactRootContainer = a, e[Vt] = a.current, Oo(e.nodeType === 8 ? e.parentNode : e), Zn(function() {
        Os(t, a, n, r)
    }), a
}

function Is(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = ps(s);
                l.call(a)
            }
        }
        Os(t, s, e, o)
    } else s = o0(n, t, e, o, r);
    return ps(s)
}
np = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = po(t.pendingLanes);
                n !== 0 && (iu(t, n | 1), Ue(t, he()), !(X & 6) && (Hr = he() + 500, Mn()))
            }
            break;
        case 13:
            Zn(function() {
                var r = Qt(e, 1);
                if (r !== null) {
                    var o = Me();
                    wt(r, e, 1, o)
                }
            }), zu(e, 1)
    }
};
su = function(e) {
    if (e.tag === 13) {
        var t = Qt(e, 134217728);
        if (t !== null) {
            var n = Me();
            wt(t, e, 134217728, n)
        }
        zu(e, 134217728)
    }
};
rp = function(e) {
    if (e.tag === 13) {
        var t = bn(e),
            n = Qt(e, t);
        if (n !== null) {
            var r = Me();
            wt(n, e, t, r)
        }
        zu(e, t)
    }
};
op = function() {
    return J
};
ip = function(e, t) {
    var n = J;
    try {
        return J = e, t()
    } finally {
        J = n
    }
};
Yl = function(e, t, n) {
    switch (t) {
        case "input":
            if (Ul(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Ns(r);
                        if (!o) throw Error(R(90));
                        If(r), Ul(r, o)
                    }
                }
            }
            break;
        case "textarea":
            zf(e, n);
            break;
        case "select":
            t = n.value, t != null && wr(e, !!n.multiple, t, !1)
    }
};
Vf = Ou;
Qf = Zn;
var i0 = {
        usingClientEntryPoint: !1,
        Events: [Zo, fr, Ns, Hf, Wf, Ou]
    },
    lo = {
        findFiberByHostInstance: Fn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    s0 = {
        bundleType: lo.bundleType,
        version: lo.version,
        rendererPackageName: lo.rendererPackageName,
        rendererConfig: lo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Yf(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: lo.findFiberByHostInstance || r0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ei.isDisabled && Ei.supportsFiber) try {
        Es = Ei.inject(s0), _t = Ei
    } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i0;
nt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$u(t)) throw Error(R(200));
    return n0(e, t, null, n)
};
nt.createRoot = function(e, t) {
    if (!$u(e)) throw Error(R(299));
    var n = !1,
        r = "",
        o = Ph;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Du(e, 1, !1, null, null, n, !1, r, o), e[Vt] = t.current, Oo(e.nodeType === 8 ? e.parentNode : e), new Fu(t)
};
nt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
    return e = Yf(t), e = e === null ? null : e.stateNode, e
};
nt.flushSync = function(e) {
    return Zn(e)
};
nt.hydrate = function(e, t, n) {
    if (!Ms(t)) throw Error(R(200));
    return Is(null, e, t, !0, n)
};
nt.hydrateRoot = function(e, t, n) {
    if (!$u(e)) throw Error(R(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = Ph;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Nh(t, null, e, 1, n ? ? null, o, !1, i, s), e[Vt] = t.current, Oo(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ls(t)
};
nt.render = function(e, t, n) {
    if (!Ms(t)) throw Error(R(200));
    return Is(null, e, t, !1, n)
};
nt.unmountComponentAtNode = function(e) {
    if (!Ms(e)) throw Error(R(40));
    return e._reactRootContainer ? (Zn(function() {
        Is(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Vt] = null
        })
    }), !0) : !1
};
nt.unstable_batchedUpdates = Ou;
nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ms(n)) throw Error(R(200));
    if (e == null || e._reactInternals === void 0) throw Error(R(38));
    return Is(e, t, n, !1, r)
};
nt.version = "18.3.1-next-f1338f8080-20240426";

function Th() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Th)
    } catch (e) {
        console.error(e)
    }
}
Th(), Tf.exports = nt;
var Yr = Tf.exports;
const Rh = gf(Yr);
var jh, xd = Yr;
jh = xd.createRoot, xd.hydrateRoot;
const l0 = 1,
    a0 = 1e6;
let Rl = 0;

function u0() {
    return Rl = (Rl + 1) % Number.MAX_SAFE_INTEGER, Rl.toString()
}
const jl = new Map,
    Sd = e => {
        if (jl.has(e)) return;
        const t = setTimeout(() => {
            jl.delete(e), ko({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, a0);
        jl.set(e, t)
    },
    c0 = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, l0)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? Sd(n) : e.toasts.forEach(r => {
                        Sd(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    Bi = [];
let Ui = {
    toasts: []
};

function ko(e) {
    Ui = c0(Ui, e), Bi.forEach(t => {
        t(Ui)
    })
}

function d0({ ...e
}) {
    const t = u0(),
        n = o => ko({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        r = () => ko({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return ko({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function f0() {
    const [e, t] = v.useState(Ui);
    return v.useEffect(() => (Bi.push(t), () => {
        const n = Bi.indexOf(t);
        n > -1 && Bi.splice(n, 1)
    }), [e]), { ...e,
        toast: d0,
        dismiss: n => ko({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function pe(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function p0(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Ah(...e) {
    return t => e.forEach(n => p0(n, t))
}

function He(...e) {
    return v.useCallback(Ah(...e), e)
}

function Ds(e, t = []) {
    let n = [];

    function r(i, s) {
        const l = v.createContext(s),
            a = n.length;
        n = [...n, s];

        function u(f) {
            const {
                scope: c,
                children: y,
                ...x
            } = f, w = (c == null ? void 0 : c[e][a]) || l, S = v.useMemo(() => x, Object.values(x));
            return m.jsx(w.Provider, {
                value: S,
                children: y
            })
        }

        function d(f, c) {
            const y = (c == null ? void 0 : c[e][a]) || l,
                x = v.useContext(y);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return u.displayName = i + "Provider", [u, d]
    }
    const o = () => {
        const i = n.map(s => v.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return v.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: a
                }
            }), [l, a])
        }
    };
    return o.scopeName = e, [r, h0(o, ...t)]
}

function h0(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((l, {
                useScope: a,
                scopeName: u
            }) => {
                const f = a(i)[`__scope${u}`];
                return { ...l,
                    ...f
                }
            }, {});
            return v.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}
var Uo = v.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = v.Children.toArray(n), i = o.find(m0);
    if (i) {
        const s = i.props.children,
            l = o.map(a => a === i ? v.Children.count(s) > 1 ? v.Children.only(null) : v.isValidElement(s) ? s.props.children : null : a);
        return m.jsx(Ta, { ...r,
            ref: t,
            children: v.isValidElement(s) ? v.cloneElement(s, void 0, l) : null
        })
    }
    return m.jsx(Ta, { ...r,
        ref: t,
        children: n
    })
});
Uo.displayName = "Slot";
var Ta = v.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (v.isValidElement(n)) {
        const o = v0(n);
        return v.cloneElement(n, { ...g0(r, n.props),
            ref: t ? Ah(t, o) : o
        })
    }
    return v.Children.count(n) > 1 ? v.Children.only(null) : null
});
Ta.displayName = "SlotClone";
var _h = ({
    children: e
}) => m.jsx(m.Fragment, {
    children: e
});

function m0(e) {
    return v.isValidElement(e) && e.type === _h
}

function g0(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            i(...l), o(...l)
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function v0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function y0(e) {
    const t = e + "CollectionProvider",
        [n, r] = Ds(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = y => {
            const {
                scope: x,
                children: w
            } = y, S = A.useRef(null), h = A.useRef(new Map).current;
            return m.jsx(o, {
                scope: x,
                itemMap: h,
                collectionRef: S,
                children: w
            })
        };
    s.displayName = t;
    const l = e + "CollectionSlot",
        a = A.forwardRef((y, x) => {
            const {
                scope: w,
                children: S
            } = y, h = i(l, w), p = He(x, h.collectionRef);
            return m.jsx(Uo, {
                ref: p,
                children: S
            })
        });
    a.displayName = l;
    const u = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        f = A.forwardRef((y, x) => {
            const {
                scope: w,
                children: S,
                ...h
            } = y, p = A.useRef(null), g = He(x, p), E = i(u, w);
            return A.useEffect(() => (E.itemMap.set(p, {
                ref: p,
                ...h
            }), () => void E.itemMap.delete(p))), m.jsx(Uo, {
                [d]: "",
                ref: g,
                children: S
            })
        });
    f.displayName = u;

    function c(y) {
        const x = i(e + "CollectionConsumer", y);
        return A.useCallback(() => {
            const S = x.collectionRef.current;
            if (!S) return [];
            const h = Array.from(S.querySelectorAll(`[${d}]`));
            return Array.from(x.itemMap.values()).sort((E, C) => h.indexOf(E.ref.current) - h.indexOf(C.ref.current))
        }, [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: s,
        Slot: a,
        ItemSlot: f
    }, c, r]
}
var w0 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    ye = w0.reduce((e, t) => {
        const n = v.forwardRef((r, o) => {
            const {
                asChild: i,
                ...s
            } = r, l = i ? Uo : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), m.jsx(l, { ...s,
                ref: o
            })
        });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {});

function Bu(e, t) {
    e && Yr.flushSync(() => e.dispatchEvent(t))
}

function tt(e) {
    const t = v.useRef(e);
    return v.useEffect(() => {
        t.current = e
    }), v.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function Oh(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = tt(e);
    v.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var x0 = "DismissableLayer",
    Ra = "dismissableLayer.update",
    S0 = "dismissableLayer.pointerDownOutside",
    E0 = "dismissableLayer.focusOutside",
    Ed, Lh = v.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Mh = v.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: l,
            ...a
        } = e, u = v.useContext(Lh), [d, f] = v.useState(null), c = (d == null ? void 0 : d.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, y] = v.useState({}), x = He(t, k => f(k)), w = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), h = w.indexOf(S), p = d ? w.indexOf(d) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, E = p >= h, C = k0(k => {
            const P = k.target,
                M = [...u.branches].some(_ => _.contains(P));
            !E || M || (o == null || o(k), s == null || s(k), k.defaultPrevented || l == null || l())
        }, c), N = b0(k => {
            const P = k.target;
            [...u.branches].some(_ => _.contains(P)) || (i == null || i(k), s == null || s(k), k.defaultPrevented || l == null || l())
        }, c);
        return Oh(k => {
            p === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && l && (k.preventDefault(), l()))
        }, c), v.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ed = c.body.style.pointerEvents, c.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Cd(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = Ed)
            }
        }, [d, c, n, u]), v.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Cd())
        }, [d, u]), v.useEffect(() => {
            const k = () => y({});
            return document.addEventListener(Ra, k), () => document.removeEventListener(Ra, k)
        }, []), m.jsx(ye.div, { ...a,
            ref: x,
            style: {
                pointerEvents: g ? E ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: pe(e.onFocusCapture, N.onFocusCapture),
            onBlurCapture: pe(e.onBlurCapture, N.onBlurCapture),
            onPointerDownCapture: pe(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
Mh.displayName = x0;
var C0 = "DismissableLayerBranch",
    Ih = v.forwardRef((e, t) => {
        const n = v.useContext(Lh),
            r = v.useRef(null),
            o = He(t, r);
        return v.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), m.jsx(ye.div, { ...e,
            ref: o
        })
    });
Ih.displayName = C0;

function k0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = tt(e),
        r = v.useRef(!1),
        o = v.useRef(() => {});
    return v.useEffect(() => {
        const i = l => {
                if (l.target && !r.current) {
                    let a = function() {
                        Dh(S0, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, {
                        once: !0
                    })) : a()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function b0(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = tt(e),
        r = v.useRef(!1);
    return v.useEffect(() => {
        const o = i => {
            i.target && !r.current && Dh(E0, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Cd() {
    const e = new CustomEvent(Ra);
    document.dispatchEvent(e)
}

function Dh(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Bu(o, i) : o.dispatchEvent(i)
}
var N0 = Mh,
    P0 = Ih,
    St = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
    T0 = "Portal",
    zh = v.forwardRef((e, t) => {
        var l;
        const {
            container: n,
            ...r
        } = e, [o, i] = v.useState(!1);
        St(() => i(!0), []);
        const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
        return s ? Rh.createPortal(m.jsx(ye.div, { ...r,
            ref: t
        }), s) : null
    });
zh.displayName = T0;

function R0(e, t) {
    return v.useReducer((n, r) => t[n][r] ? ? n, e)
}
var Fh = e => {
    const {
        present: t,
        children: n
    } = e, r = j0(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : v.Children.only(n), i = He(r.ref, A0(o));
    return typeof n == "function" || r.isPresent ? v.cloneElement(o, {
        ref: i
    }) : null
};
Fh.displayName = "Presence";

function j0(e) {
    const [t, n] = v.useState(), r = v.useRef({}), o = v.useRef(e), i = v.useRef("none"), s = e ? "mounted" : "unmounted", [l, a] = R0(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return v.useEffect(() => {
        const u = Ci(r.current);
        i.current = l === "mounted" ? u : "none"
    }, [l]), St(() => {
        const u = r.current,
            d = o.current;
        if (d !== e) {
            const c = i.current,
                y = Ci(u);
            e ? a("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && c !== y ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, a]), St(() => {
        if (t) {
            const u = f => {
                    const y = Ci(r.current).includes(f.animationName);
                    f.target === t && y && Yr.flushSync(() => a("ANIMATION_END"))
                },
                d = f => {
                    f.target === t && (i.current = Ci(r.current))
                };
            return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
                t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u)
            }
        } else a("ANIMATION_END")
    }, [t, a]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: v.useCallback(u => {
            u && (r.current = getComputedStyle(u)), n(u)
        }, [])
    }
}

function Ci(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function A0(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function _0({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = O0({
        defaultProp: t,
        onChange: n
    }), i = e !== void 0, s = i ? e : r, l = tt(n), a = v.useCallback(u => {
        if (i) {
            const f = typeof u == "function" ? u(e) : u;
            f !== e && l(f)
        } else o(u)
    }, [i, e, o, l]);
    return [s, a]
}

function O0({
    defaultProp: e,
    onChange: t
}) {
    const n = v.useState(e),
        [r] = n,
        o = v.useRef(r),
        i = tt(t);
    return v.useEffect(() => {
        o.current !== r && (i(r), o.current = r)
    }, [r, o, i]), n
}
var L0 = "VisuallyHidden",
    zs = v.forwardRef((e, t) => m.jsx(ye.span, { ...e,
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
zs.displayName = L0;
var M0 = zs,
    Uu = "ToastProvider",
    [Hu, I0, D0] = y0("Toast"),
    [$h, FE] = Ds("Toast", [D0]),
    [z0, Fs] = $h(Uu),
    Bh = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [l, a] = v.useState(null), [u, d] = v.useState(0), f = v.useRef(!1), c = v.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Uu}\`. Expected non-empty \`string\`.`), m.jsx(Hu.Provider, {
            scope: t,
            children: m.jsx(z0, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: u,
                viewport: l,
                onViewportChange: a,
                onToastAdd: v.useCallback(() => d(y => y + 1), []),
                onToastRemove: v.useCallback(() => d(y => y - 1), []),
                isFocusedToastEscapeKeyDownRef: f,
                isClosePausedRef: c,
                children: s
            })
        })
    };
Bh.displayName = Uu;
var Uh = "ToastViewport",
    F0 = ["F8"],
    ja = "toast.viewportPause",
    Aa = "toast.viewportResume",
    Hh = v.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = F0,
            label: o = "Notifications ({hotkey})",
            ...i
        } = e, s = Fs(Uh, n), l = I0(n), a = v.useRef(null), u = v.useRef(null), d = v.useRef(null), f = v.useRef(null), c = He(t, f, s.onViewportChange), y = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
        v.useEffect(() => {
            const S = h => {
                var g;
                r.every(E => h[E] || h.code === E) && ((g = f.current) == null || g.focus())
            };
            return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S)
        }, [r]), v.useEffect(() => {
            const S = a.current,
                h = f.current;
            if (x && S && h) {
                const p = () => {
                        if (!s.isClosePausedRef.current) {
                            const N = new CustomEvent(ja);
                            h.dispatchEvent(N), s.isClosePausedRef.current = !0
                        }
                    },
                    g = () => {
                        if (s.isClosePausedRef.current) {
                            const N = new CustomEvent(Aa);
                            h.dispatchEvent(N), s.isClosePausedRef.current = !1
                        }
                    },
                    E = N => {
                        !S.contains(N.relatedTarget) && g()
                    },
                    C = () => {
                        S.contains(document.activeElement) || g()
                    };
                return S.addEventListener("focusin", p), S.addEventListener("focusout", E), S.addEventListener("pointermove", p), S.addEventListener("pointerleave", C), window.addEventListener("blur", p), window.addEventListener("focus", g), () => {
                    S.removeEventListener("focusin", p), S.removeEventListener("focusout", E), S.removeEventListener("pointermove", p), S.removeEventListener("pointerleave", C), window.removeEventListener("blur", p), window.removeEventListener("focus", g)
                }
            }
        }, [x, s.isClosePausedRef]);
        const w = v.useCallback(({
            tabbingDirection: S
        }) => {
            const p = l().map(g => {
                const E = g.ref.current,
                    C = [E, ...Z0(E)];
                return S === "forwards" ? C : C.reverse()
            });
            return (S === "forwards" ? p.reverse() : p).flat()
        }, [l]);
        return v.useEffect(() => {
            const S = f.current;
            if (S) {
                const h = p => {
                    var C, N, k;
                    const g = p.altKey || p.ctrlKey || p.metaKey;
                    if (p.key === "Tab" && !g) {
                        const P = document.activeElement,
                            M = p.shiftKey;
                        if (p.target === S && M) {
                            (C = u.current) == null || C.focus();
                            return
                        }
                        const D = w({
                                tabbingDirection: M ? "backwards" : "forwards"
                            }),
                            V = D.findIndex(O => O === P);
                        Al(D.slice(V + 1)) ? p.preventDefault() : M ? (N = u.current) == null || N.focus() : (k = d.current) == null || k.focus()
                    }
                };
                return S.addEventListener("keydown", h), () => S.removeEventListener("keydown", h)
            }
        }, [l, w]), m.jsxs(P0, {
            ref: a,
            role: "region",
            "aria-label": o.replace("{hotkey}", y),
            tabIndex: -1,
            style: {
                pointerEvents: x ? void 0 : "none"
            },
            children: [x && m.jsx(_a, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const S = w({
                        tabbingDirection: "forwards"
                    });
                    Al(S)
                }
            }), m.jsx(Hu.Slot, {
                scope: n,
                children: m.jsx(ye.ol, {
                    tabIndex: -1,
                    ...i,
                    ref: c
                })
            }), x && m.jsx(_a, {
                ref: d,
                onFocusFromOutsideViewport: () => {
                    const S = w({
                        tabbingDirection: "backwards"
                    });
                    Al(S)
                }
            })]
        })
    });
Hh.displayName = Uh;
var Wh = "ToastFocusProxy",
    _a = v.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, i = Fs(Wh, n);
        return m.jsx(zs, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const l = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(l)) && r()
            }
        })
    });
_a.displayName = Wh;
var $s = "Toast",
    $0 = "toast.swipeStart",
    B0 = "toast.swipeMove",
    U0 = "toast.swipeCancel",
    H0 = "toast.swipeEnd",
    Vh = v.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
        } = e, [l = !0, a] = _0({
            prop: r,
            defaultProp: o,
            onChange: i
        });
        return m.jsx(Fh, {
            present: n || l,
            children: m.jsx(Q0, {
                open: l,
                ...s,
                ref: t,
                onClose: () => a(!1),
                onPause: tt(e.onPause),
                onResume: tt(e.onResume),
                onSwipeStart: pe(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: pe(e.onSwipeMove, u => {
                    const {
                        x: d,
                        y: f
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
                }),
                onSwipeCancel: pe(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: pe(e.onSwipeEnd, u => {
                    const {
                        x: d,
                        y: f
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), a(!1)
                })
            })
        })
    });
Vh.displayName = $s;
var [W0, V0] = $h($s, {
    onClose() {}
}), Q0 = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: c,
        onSwipeEnd: y,
        ...x
    } = e, w = Fs($s, n), [S, h] = v.useState(null), p = He(t, O => h(O)), g = v.useRef(null), E = v.useRef(null), C = o || w.duration, N = v.useRef(0), k = v.useRef(C), P = v.useRef(0), {
        onToastAdd: M,
        onToastRemove: _
    } = w, $ = tt(() => {
        var Q;
        (S == null ? void 0 : S.contains(document.activeElement)) && ((Q = w.viewport) == null || Q.focus()), s()
    }), D = v.useCallback(O => {
        !O || O === 1 / 0 || (window.clearTimeout(P.current), N.current = new Date().getTime(), P.current = window.setTimeout($, O))
    }, [$]);
    v.useEffect(() => {
        const O = w.viewport;
        if (O) {
            const Q = () => {
                    D(k.current), u == null || u()
                },
                B = () => {
                    const K = new Date().getTime() - N.current;
                    k.current = k.current - K, window.clearTimeout(P.current), a == null || a()
                };
            return O.addEventListener(ja, B), O.addEventListener(Aa, Q), () => {
                O.removeEventListener(ja, B), O.removeEventListener(Aa, Q)
            }
        }
    }, [w.viewport, C, a, u, D]), v.useEffect(() => {
        i && !w.isClosePausedRef.current && D(C)
    }, [i, C, w.isClosePausedRef, D]), v.useEffect(() => (M(), () => _()), [M, _]);
    const V = v.useMemo(() => S ? Zh(S) : null, [S]);
    return w.viewport ? m.jsxs(m.Fragment, {
        children: [V && m.jsx(K0, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: V
        }), m.jsx(W0, {
            scope: n,
            onClose: $,
            children: Yr.createPortal(m.jsx(Hu.ItemSlot, {
                scope: n,
                children: m.jsx(N0, {
                    asChild: !0,
                    onEscapeKeyDown: pe(l, () => {
                        w.isFocusedToastEscapeKeyDownRef.current || $(), w.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: m.jsx(ye.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": w.swipeDirection,
                        ...x,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: pe(e.onKeyDown, O => {
                            O.key === "Escape" && (l == null || l(O.nativeEvent), O.nativeEvent.defaultPrevented || (w.isFocusedToastEscapeKeyDownRef.current = !0, $()))
                        }),
                        onPointerDown: pe(e.onPointerDown, O => {
                            O.button === 0 && (g.current = {
                                x: O.clientX,
                                y: O.clientY
                            })
                        }),
                        onPointerMove: pe(e.onPointerMove, O => {
                            if (!g.current) return;
                            const Q = O.clientX - g.current.x,
                                B = O.clientY - g.current.y,
                                K = !!E.current,
                                b = ["left", "right"].includes(w.swipeDirection),
                                j = ["left", "up"].includes(w.swipeDirection) ? Math.min : Math.max,
                                z = b ? j(0, Q) : 0,
                                I = b ? 0 : j(0, B),
                                F = O.pointerType === "touch" ? 10 : 2,
                                Y = {
                                    x: z,
                                    y: I
                                },
                                le = {
                                    originalEvent: O,
                                    delta: Y
                                };
                            K ? (E.current = Y, ki(B0, f, le, {
                                discrete: !1
                            })) : kd(Y, w.swipeDirection, F) ? (E.current = Y, ki($0, d, le, {
                                discrete: !1
                            }), O.target.setPointerCapture(O.pointerId)) : (Math.abs(Q) > F || Math.abs(B) > F) && (g.current = null)
                        }),
                        onPointerUp: pe(e.onPointerUp, O => {
                            const Q = E.current,
                                B = O.target;
                            if (B.hasPointerCapture(O.pointerId) && B.releasePointerCapture(O.pointerId), E.current = null, g.current = null, Q) {
                                const K = O.currentTarget,
                                    b = {
                                        originalEvent: O,
                                        delta: Q
                                    };
                                kd(Q, w.swipeDirection, w.swipeThreshold) ? ki(H0, y, b, {
                                    discrete: !0
                                }) : ki(U0, c, b, {
                                    discrete: !0
                                }), K.addEventListener("click", j => j.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), w.viewport)
        })]
    }) : null
}), K0 = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = Fs($s, t), [i, s] = v.useState(!1), [l, a] = v.useState(!1);
    return X0(() => s(!0)), v.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), l ? null : m.jsx(zh, {
        asChild: !0,
        children: m.jsx(zs, { ...r,
            children: i && m.jsxs(m.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, G0 = "ToastTitle", Qh = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return m.jsx(ye.div, { ...r,
        ref: t
    })
});
Qh.displayName = G0;
var Y0 = "ToastDescription",
    Kh = v.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return m.jsx(ye.div, { ...r,
            ref: t
        })
    });
Kh.displayName = Y0;
var Gh = "ToastAction",
    Yh = v.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? m.jsx(qh, {
            altText: n,
            asChild: !0,
            children: m.jsx(Wu, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Gh}\`. Expected non-empty \`string\`.`), null)
    });
Yh.displayName = Gh;
var Xh = "ToastClose",
    Wu = v.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = V0(Xh, n);
        return m.jsx(qh, {
            asChild: !0,
            children: m.jsx(ye.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: pe(e.onClick, o.onClose)
            })
        })
    });
Wu.displayName = Xh;
var qh = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return m.jsx(ye.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function Zh(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), q0(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...Zh(r))
        }
    }), t
}

function ki(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Bu(o, i) : o.dispatchEvent(i)
}
var kd = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function X0(e = () => {}) {
    const t = tt(e);
    St(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function q0(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function Z0(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Al(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var J0 = Bh,
    Jh = Hh,
    em = Vh,
    tm = Qh,
    nm = Kh,
    rm = Yh,
    om = Wu;

function im(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = im(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function sm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = im(e)) && (r && (r += " "), r += t);
    return r
}
const bd = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    Nd = sm,
    lm = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return Nd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: i
        } = t, s = Object.keys(o).map(u => {
            const d = n == null ? void 0 : n[u],
                f = i == null ? void 0 : i[u];
            if (d === null) return null;
            const c = bd(d) || bd(f);
            return o[u][c]
        }), l = n && Object.entries(n).reduce((u, d) => {
            let [f, c] = d;
            return c === void 0 || (u[f] = c), u
        }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
            let {
                class: f,
                className: c,
                ...y
            } = d;
            return Object.entries(y).every(x => {
                let [w, S] = x;
                return Array.isArray(S) ? S.includes({ ...i,
                    ...l
                }[w]) : { ...i,
                    ...l
                }[w] === S
            }) ? [...u, f, c] : u
        }, []);
        return Nd(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ew = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    am = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nw = v.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...l
}, a) => v.createElement("svg", {
    ref: a,
    ...tw,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: am("lucide", o),
    ...l
}, [...s.map(([u, d]) => v.createElement(u, d)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = (e, t) => {
    const n = v.forwardRef(({
        className: r,
        ...o
    }, i) => v.createElement(nw, {
        ref: i,
        iconNode: t,
        className: am(`lucide-${ew(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = Ve("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rw = Ve("Award", [
    ["path", {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv"
    }],
    ["circle", {
        cx: "12",
        cy: "8",
        r: "6",
        key: "1vp47v"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ow = Ve("ChevronLeft", [
    ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iw = Ve("ChevronRight", [
    ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sw = Ve("CircleCheckBig", [
    ["path", {
        d: "M21.801 10A10 10 0 1 1 17 3.335",
        key: "yps3ct"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lw = Ve("Clock", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["polyline", {
        points: "12 6 12 12 16 14",
        key: "68esgv"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = Ve("DollarSign", [
    ["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "22",
        key: "7eqyqh"
    }],
    ["path", {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
        key: "1b0p4s"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = Ve("Gift", [
    ["rect", {
        x: "3",
        y: "8",
        width: "18",
        height: "4",
        rx: "1",
        key: "bkv52"
    }],
    ["path", {
        d: "M12 8v13",
        key: "1c76mn"
    }],
    ["path", {
        d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
        key: "6wjy6b"
    }],
    ["path", {
        d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
        key: "1ihvrl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aw = Ve("Heart", [
    ["path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uw = Ve("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pd = Ve("ShoppingBag", [
    ["path", {
        d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
        key: "hou9p0"
    }],
    ["path", {
        d: "M3 6h18",
        key: "d0wm0j"
    }],
    ["path", {
        d: "M16 10a4 4 0 0 1-8 0",
        key: "1ltviw"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cw = Ve("Sparkles", [
    ["path", {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx"
    }],
    ["path", {
        d: "M20 3v4",
        key: "1olli1"
    }],
    ["path", {
        d: "M22 5h-4",
        key: "1gvqau"
    }],
    ["path", {
        d: "M4 17v2",
        key: "vumght"
    }],
    ["path", {
        d: "M5 18H3",
        key: "zchphs"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vu = Ve("Star", [
    ["path", {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dw = Ve("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Qu = "-",
    fw = e => {
        const t = hw(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const l = s.split(Qu);
                return l[0] === "" && l.length !== 1 && l.shift(), cm(l, t) || pw(s)
            },
            getConflictingClassGroupIds: (s, l) => {
                const a = n[s] || [];
                return l && r[s] ? [...a, ...r[s]] : a
            }
        }
    },
    cm = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? cm(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(Qu);
        return (s = t.validators.find(({
            validator: l
        }) => l(i))) == null ? void 0 : s.classGroupId
    },
    Td = /^\[(.+)\]$/,
    pw = e => {
        if (Td.test(e)) {
            const t = Td.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    hw = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return gw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
            La(s, r, i, t)
        }), r
    },
    La = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const i = o === "" ? t : Rd(t, o);
                i.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (mw(o)) {
                    La(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([i, s]) => {
                La(s, Rd(t, i), n, r)
            })
        })
    },
    Rd = (e, t) => {
        let n = e;
        return t.split(Qu).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    mw = e => e.isThemeGetter,
    gw = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
        return [n, o]
    }) : e,
    vw = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (i, s) => {
            n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s)
            }
        }
    },
    dm = "!",
    yw = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], i = t.length, s = l => {
            const a = [];
            let u = 0,
                d = 0,
                f;
            for (let S = 0; S < l.length; S++) {
                let h = l[S];
                if (u === 0) {
                    if (h === o && (r || l.slice(S, S + i) === t)) {
                        a.push(l.slice(d, S)), d = S + i;
                        continue
                    }
                    if (h === "/") {
                        f = S;
                        continue
                    }
                }
                h === "[" ? u++ : h === "]" && u--
            }
            const c = a.length === 0 ? l : l.substring(d),
                y = c.startsWith(dm),
                x = y ? c.substring(1) : c,
                w = f && f > d ? f - d : void 0;
            return {
                modifiers: a,
                hasImportantModifier: y,
                baseClassName: x,
                maybePostfixModifierPosition: w
            }
        };
        return n ? l => n({
            className: l,
            parseClassName: s
        }) : s
    },
    ww = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    xw = e => ({
        cache: vw(e.cacheSize),
        parseClassName: yw(e),
        ...fw(e)
    }),
    Sw = /\s+/,
    Ew = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, i = [], s = e.trim().split(Sw);
        let l = "";
        for (let a = s.length - 1; a >= 0; a -= 1) {
            const u = s[a],
                {
                    modifiers: d,
                    hasImportantModifier: f,
                    baseClassName: c,
                    maybePostfixModifierPosition: y
                } = n(u);
            let x = !!y,
                w = r(x ? c.substring(0, y) : c);
            if (!w) {
                if (!x) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue
                }
                if (w = r(c), !w) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue
                }
                x = !1
            }
            const S = ww(d).join(":"),
                h = f ? S + dm : S,
                p = h + w;
            if (i.includes(p)) continue;
            i.push(p);
            const g = o(w, x);
            for (let E = 0; E < g.length; ++E) {
                const C = g[E];
                i.push(h + C)
            }
            l = u + (l.length > 0 ? " " + l : l)
        }
        return l
    };

function Cw() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = fm(t)) && (r && (r += " "), r += n);
    return r
}
const fm = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = fm(e[r])) && (n && (n += " "), n += t);
    return n
};

function kw(e, ...t) {
    let n, r, o, i = s;

    function s(a) {
        const u = t.reduce((d, f) => f(d), e());
        return n = xw(u), r = n.cache.get, o = n.cache.set, i = l, l(a)
    }

    function l(a) {
        const u = r(a);
        if (u) return u;
        const d = Ew(a, n);
        return o(a, d), d
    }
    return function() {
        return i(Cw.apply(null, arguments))
    }
}
const re = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    pm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    bw = /^\d+\/\d+$/,
    Nw = new Set(["px", "full", "screen"]),
    Pw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Tw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Rw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    jw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Aw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    It = e => br(e) || Nw.has(e) || bw.test(e),
    rn = e => Xr(e, "length", Fw),
    br = e => !!e && !Number.isNaN(Number(e)),
    _l = e => Xr(e, "number", br),
    ao = e => !!e && Number.isInteger(Number(e)),
    _w = e => e.endsWith("%") && br(e.slice(0, -1)),
    H = e => pm.test(e),
    on = e => Pw.test(e),
    Ow = new Set(["length", "size", "percentage"]),
    Lw = e => Xr(e, Ow, hm),
    Mw = e => Xr(e, "position", hm),
    Iw = new Set(["image", "url"]),
    Dw = e => Xr(e, Iw, Bw),
    zw = e => Xr(e, "", $w),
    uo = () => !0,
    Xr = (e, t, n) => {
        const r = pm.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    Fw = e => Tw.test(e) && !Rw.test(e),
    hm = () => !1,
    $w = e => jw.test(e),
    Bw = e => Aw.test(e),
    Uw = () => {
        const e = re("colors"),
            t = re("spacing"),
            n = re("blur"),
            r = re("brightness"),
            o = re("borderColor"),
            i = re("borderRadius"),
            s = re("borderSpacing"),
            l = re("borderWidth"),
            a = re("contrast"),
            u = re("grayscale"),
            d = re("hueRotate"),
            f = re("invert"),
            c = re("gap"),
            y = re("gradientColorStops"),
            x = re("gradientColorStopPositions"),
            w = re("inset"),
            S = re("margin"),
            h = re("opacity"),
            p = re("padding"),
            g = re("saturate"),
            E = re("scale"),
            C = re("sepia"),
            N = re("skew"),
            k = re("space"),
            P = re("translate"),
            M = () => ["auto", "contain", "none"],
            _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
            $ = () => ["auto", H, t],
            D = () => [H, t],
            V = () => ["", It, rn],
            O = () => ["auto", br, H],
            Q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            B = () => ["solid", "dashed", "dotted", "double", "none"],
            K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            b = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            j = () => ["", "0", H],
            z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            I = () => [br, H];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [uo],
                spacing: [It, rn],
                blur: ["none", "", on, H],
                brightness: I(),
                borderColor: [e],
                borderRadius: ["none", "", "full", on, H],
                borderSpacing: D(),
                borderWidth: V(),
                contrast: I(),
                grayscale: j(),
                hueRotate: I(),
                invert: j(),
                gap: D(),
                gradientColorStops: [e],
                gradientColorStopPositions: [_w, rn],
                inset: $(),
                margin: $(),
                opacity: I(),
                padding: D(),
                saturate: I(),
                scale: I(),
                sepia: j(),
                skew: I(),
                space: D(),
                translate: D()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", H]
                }],
                container: ["container"],
                columns: [{
                    columns: [on]
                }],
                "break-after": [{
                    "break-after": z()
                }],
                "break-before": [{
                    "break-before": z()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...Q(), H]
                }],
                overflow: [{
                    overflow: _()
                }],
                "overflow-x": [{
                    "overflow-x": _()
                }],
                "overflow-y": [{
                    "overflow-y": _()
                }],
                overscroll: [{
                    overscroll: M()
                }],
                "overscroll-x": [{
                    "overscroll-x": M()
                }],
                "overscroll-y": [{
                    "overscroll-y": M()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [w]
                }],
                "inset-x": [{
                    "inset-x": [w]
                }],
                "inset-y": [{
                    "inset-y": [w]
                }],
                start: [{
                    start: [w]
                }],
                end: [{
                    end: [w]
                }],
                top: [{
                    top: [w]
                }],
                right: [{
                    right: [w]
                }],
                bottom: [{
                    bottom: [w]
                }],
                left: [{
                    left: [w]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", ao, H]
                }],
                basis: [{
                    basis: $()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", H]
                }],
                grow: [{
                    grow: j()
                }],
                shrink: [{
                    shrink: j()
                }],
                order: [{
                    order: ["first", "last", "none", ao, H]
                }],
                "grid-cols": [{
                    "grid-cols": [uo]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", ao, H]
                    }, H]
                }],
                "col-start": [{
                    "col-start": O()
                }],
                "col-end": [{
                    "col-end": O()
                }],
                "grid-rows": [{
                    "grid-rows": [uo]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [ao, H]
                    }, H]
                }],
                "row-start": [{
                    "row-start": O()
                }],
                "row-end": [{
                    "row-end": O()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", H]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", H]
                }],
                gap: [{
                    gap: [c]
                }],
                "gap-x": [{
                    "gap-x": [c]
                }],
                "gap-y": [{
                    "gap-y": [c]
                }],
                "justify-content": [{
                    justify: ["normal", ...b()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...b(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...b(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [p]
                }],
                px: [{
                    px: [p]
                }],
                py: [{
                    py: [p]
                }],
                ps: [{
                    ps: [p]
                }],
                pe: [{
                    pe: [p]
                }],
                pt: [{
                    pt: [p]
                }],
                pr: [{
                    pr: [p]
                }],
                pb: [{
                    pb: [p]
                }],
                pl: [{
                    pl: [p]
                }],
                m: [{
                    m: [S]
                }],
                mx: [{
                    mx: [S]
                }],
                my: [{
                    my: [S]
                }],
                ms: [{
                    ms: [S]
                }],
                me: [{
                    me: [S]
                }],
                mt: [{
                    mt: [S]
                }],
                mr: [{
                    mr: [S]
                }],
                mb: [{
                    mb: [S]
                }],
                ml: [{
                    ml: [S]
                }],
                "space-x": [{
                    "space-x": [k]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [k]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
                }],
                "min-w": [{
                    "min-w": [H, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [on]
                    }, on]
                }],
                h: [{
                    h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [H, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", on, rn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _l]
                }],
                "font-family": [{
                    font: [uo]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", br, _l]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", It, H]
                }],
                "list-image": [{
                    "list-image": ["none", H]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", H]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [h]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [h]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...B(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", It, rn]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", It, H]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: D()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", H]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [h]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...Q(), Mw]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", Lw]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Dw]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [x]
                }],
                "gradient-via-pos": [{
                    via: [x]
                }],
                "gradient-to-pos": [{
                    to: [x]
                }],
                "gradient-from": [{
                    from: [y]
                }],
                "gradient-via": [{
                    via: [y]
                }],
                "gradient-to": [{
                    to: [y]
                }],
                rounded: [{
                    rounded: [i]
                }],
                "rounded-s": [{
                    "rounded-s": [i]
                }],
                "rounded-e": [{
                    "rounded-e": [i]
                }],
                "rounded-t": [{
                    "rounded-t": [i]
                }],
                "rounded-r": [{
                    "rounded-r": [i]
                }],
                "rounded-b": [{
                    "rounded-b": [i]
                }],
                "rounded-l": [{
                    "rounded-l": [i]
                }],
                "rounded-ss": [{
                    "rounded-ss": [i]
                }],
                "rounded-se": [{
                    "rounded-se": [i]
                }],
                "rounded-ee": [{
                    "rounded-ee": [i]
                }],
                "rounded-es": [{
                    "rounded-es": [i]
                }],
                "rounded-tl": [{
                    "rounded-tl": [i]
                }],
                "rounded-tr": [{
                    "rounded-tr": [i]
                }],
                "rounded-br": [{
                    "rounded-br": [i]
                }],
                "rounded-bl": [{
                    "rounded-bl": [i]
                }],
                "border-w": [{
                    border: [l]
                }],
                "border-w-x": [{
                    "border-x": [l]
                }],
                "border-w-y": [{
                    "border-y": [l]
                }],
                "border-w-s": [{
                    "border-s": [l]
                }],
                "border-w-e": [{
                    "border-e": [l]
                }],
                "border-w-t": [{
                    "border-t": [l]
                }],
                "border-w-r": [{
                    "border-r": [l]
                }],
                "border-w-b": [{
                    "border-b": [l]
                }],
                "border-w-l": [{
                    "border-l": [l]
                }],
                "border-opacity": [{
                    "border-opacity": [h]
                }],
                "border-style": [{
                    border: [...B(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [l]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [l]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [h]
                }],
                "divide-style": [{
                    divide: B()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...B()]
                }],
                "outline-offset": [{
                    "outline-offset": [It, H]
                }],
                "outline-w": [{
                    outline: [It, rn]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: V()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [h]
                }],
                "ring-offset-w": [{
                    "ring-offset": [It, rn]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", on, zw]
                }],
                "shadow-color": [{
                    shadow: [uo]
                }],
                opacity: [{
                    opacity: [h]
                }],
                "mix-blend": [{
                    "mix-blend": [...K(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": K()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [a]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", on, H]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [d]
                }],
                invert: [{
                    invert: [f]
                }],
                saturate: [{
                    saturate: [g]
                }],
                sepia: [{
                    sepia: [C]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [a]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [d]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [f]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [h]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [g]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [C]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
                }],
                duration: [{
                    duration: I()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", H]
                }],
                delay: [{
                    delay: I()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", H]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [E]
                }],
                "scale-x": [{
                    "scale-x": [E]
                }],
                "scale-y": [{
                    "scale-y": [E]
                }],
                rotate: [{
                    rotate: [ao, H]
                }],
                "translate-x": [{
                    "translate-x": [P]
                }],
                "translate-y": [{
                    "translate-y": [P]
                }],
                "skew-x": [{
                    "skew-x": [N]
                }],
                "skew-y": [{
                    "skew-y": [N]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": D()
                }],
                "scroll-mx": [{
                    "scroll-mx": D()
                }],
                "scroll-my": [{
                    "scroll-my": D()
                }],
                "scroll-ms": [{
                    "scroll-ms": D()
                }],
                "scroll-me": [{
                    "scroll-me": D()
                }],
                "scroll-mt": [{
                    "scroll-mt": D()
                }],
                "scroll-mr": [{
                    "scroll-mr": D()
                }],
                "scroll-mb": [{
                    "scroll-mb": D()
                }],
                "scroll-ml": [{
                    "scroll-ml": D()
                }],
                "scroll-p": [{
                    "scroll-p": D()
                }],
                "scroll-px": [{
                    "scroll-px": D()
                }],
                "scroll-py": [{
                    "scroll-py": D()
                }],
                "scroll-ps": [{
                    "scroll-ps": D()
                }],
                "scroll-pe": [{
                    "scroll-pe": D()
                }],
                "scroll-pt": [{
                    "scroll-pt": D()
                }],
                "scroll-pr": [{
                    "scroll-pr": D()
                }],
                "scroll-pb": [{
                    "scroll-pb": D()
                }],
                "scroll-pl": [{
                    "scroll-pl": D()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", H]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [It, rn, _l]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    Hw = kw(Uw);

function be(...e) {
    return Hw(sm(e))
}
const Ww = J0,
    mm = v.forwardRef(({
        className: e,
        ...t
    }, n) => m.jsx(Jh, {
        ref: n,
        className: be("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
mm.displayName = Jh.displayName;
const Vw = lm("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    gm = v.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => m.jsx(em, {
        ref: r,
        className: be(Vw({
            variant: t
        }), e),
        ...n
    }));
gm.displayName = em.displayName;
const Qw = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(rm, {
    ref: n,
    className: be("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
Qw.displayName = rm.displayName;
const vm = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(om, {
    ref: n,
    className: be("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: m.jsx(dw, {
        className: "h-4 w-4"
    })
}));
vm.displayName = om.displayName;
const ym = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(tm, {
    ref: n,
    className: be("text-sm font-semibold", e),
    ...t
}));
ym.displayName = tm.displayName;
const wm = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(nm, {
    ref: n,
    className: be("text-sm opacity-90", e),
    ...t
}));
wm.displayName = nm.displayName;

function Kw() {
    const {
        toasts: e
    } = f0();
    return m.jsxs(Ww, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: o,
            ...i
        }) {
            return m.jsxs(gm, { ...i,
                children: [m.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && m.jsx(ym, {
                        children: n
                    }), r && m.jsx(wm, {
                        children: r
                    })]
                }), o, m.jsx(vm, {})]
            }, t)
        }), m.jsx(mm, {})]
    })
}
var jd = ["light", "dark"],
    Gw = "(prefers-color-scheme: dark)",
    Yw = v.createContext(void 0),
    Xw = {
        setTheme: e => {},
        themes: []
    },
    qw = () => {
        var e;
        return (e = v.useContext(Yw)) != null ? e : Xw
    };
v.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a
}) => {
    let u = i === "system",
        d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(x=>`'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        f = o ? jd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        c = (x, w = !1, S = !0) => {
            let h = s ? s[x] : x,
                p = w ? x + "|| ''" : `'${h}'`,
                g = "";
            return o && S && !w && jd.includes(x) && (g += `d.style.colorScheme = '${x}';`), n === "class" ? w || h ? g += `c.add(${p})` : g += "null" : h && (g += `d[s](n,${p})`), g
        },
        y = e ? `!function(){${d}${c(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Gw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c("dark")}}else{${c("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${c(s?"x[e]":"e",!0)}}${u?"":"else{"+c(i,!1,!1)+"}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${c(s?"x[e]":"e",!0)}}else{${c(i,!1,!1)};}${f}}catch(t){}}();`;
    return v.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: y
        }
    })
});
var Zw = e => {
        switch (e) {
            case "success":
                return t1;
            case "info":
                return r1;
            case "warning":
                return n1;
            case "error":
                return o1;
            default:
                return null
        }
    },
    Jw = Array(12).fill(0),
    e1 = ({
        visible: e
    }) => A.createElement("div", {
        className: "sonner-loading-wrapper",
        "data-visible": e
    }, A.createElement("div", {
        className: "sonner-spinner"
    }, Jw.map((t, n) => A.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${n}`
    })))),
    t1 = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    n1 = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    r1 = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    o1 = A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, A.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    i1 = () => {
        let [e, t] = A.useState(document.hidden);
        return A.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    },
    Ma = 1,
    s1 = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: n,
                    ...r
                } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Ma++, i = this.toasts.find(l => l.id === o), s = e.dismissible === void 0 ? !0 : e.dismissible;
                return i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({ ...l,
                    ...e,
                    id: o,
                    title: n
                }), { ...l,
                    ...e,
                    id: o,
                    dismissible: s,
                    title: n
                }) : l) : this.addToast({
                    title: n,
                    ...r,
                    dismissible: s,
                    id: o
                }), o
            }, this.dismiss = e => (e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(),
                    o = n !== void 0;
                return r.then(async i => {
                    if (a1(i) && !i.ok) {
                        o = !1;
                        let s = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error,
                            l = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
                        this.create({
                            id: n,
                            type: "error",
                            message: s,
                            description: l
                        })
                    } else if (t.success !== void 0) {
                        o = !1;
                        let s = typeof t.success == "function" ? await t.success(i) : t.success,
                            l = typeof t.description == "function" ? await t.description(i) : t.description;
                        this.create({
                            id: n,
                            type: "success",
                            message: s,
                            description: l
                        })
                    }
                }).catch(async i => {
                    if (t.error !== void 0) {
                        o = !1;
                        let s = typeof t.error == "function" ? await t.error(i) : t.error,
                            l = typeof t.description == "function" ? await t.description(i) : t.description;
                        this.create({
                            id: n,
                            type: "error",
                            message: s,
                            description: l
                        })
                    }
                }).finally(() => {
                    var i;
                    o && (this.dismiss(n), n = void 0), (i = t.finally) == null || i.call(t)
                }), n
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || Ma++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.subscribers = [], this.toasts = []
        }
    },
    Ge = new s1,
    l1 = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Ma++;
        return Ge.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    a1 = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    u1 = l1,
    c1 = () => Ge.toasts,
    d1 = Object.assign(u1, {
        success: Ge.success,
        info: Ge.info,
        warning: Ge.warning,
        error: Ge.error,
        custom: Ge.custom,
        message: Ge.message,
        promise: Ge.promise,
        dismiss: Ge.dismiss,
        loading: Ge.loading
    }, {
        getHistory: c1
    });

function f1(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
f1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function bi(e) {
    return e.label !== void 0
}
var p1 = 3,
    h1 = "32px",
    m1 = 4e3,
    g1 = 356,
    v1 = 14,
    y1 = 20,
    w1 = 200;

function x1(...e) {
    return e.filter(Boolean).join(" ")
}
var S1 = e => {
    var t, n, r, o, i, s, l, a, u, d;
    let {
        invert: f,
        toast: c,
        unstyled: y,
        interacting: x,
        setHeights: w,
        visibleToasts: S,
        heights: h,
        index: p,
        toasts: g,
        expanded: E,
        removeToast: C,
        defaultRichColors: N,
        closeButton: k,
        style: P,
        cancelButtonStyle: M,
        actionButtonStyle: _,
        className: $ = "",
        descriptionClassName: D = "",
        duration: V,
        position: O,
        gap: Q,
        loadingIcon: B,
        expandByDefault: K,
        classNames: b,
        icons: j,
        closeButtonAriaLabel: z = "Close toast",
        pauseWhenPageIsHidden: I,
        cn: F
    } = e, [Y, le] = A.useState(!1), [Qe, Z] = A.useState(!1), [dt, qt] = A.useState(!1), [Zt, Jt] = A.useState(!1), [ti, nr] = A.useState(0), [In, Jr] = A.useState(0), ni = A.useRef(null), en = A.useRef(null), Zs = p === 0, Js = p + 1 <= S, Se = c.type, rr = c.dismissible !== !1, Pg = c.className || "", Tg = c.descriptionClassName || "", ri = A.useMemo(() => h.findIndex(U => U.toastId === c.id) || 0, [h, c.id]), Rg = A.useMemo(() => {
        var U;
        return (U = c.closeButton) != null ? U : k
    }, [c.closeButton, k]), sc = A.useMemo(() => c.duration || V || m1, [c.duration, V]), el = A.useRef(0), or = A.useRef(0), lc = A.useRef(0), ir = A.useRef(null), [ac, jg] = O.split("-"), uc = A.useMemo(() => h.reduce((U, ne, ee) => ee >= ri ? U : U + ne.height, 0), [h, ri]), cc = i1(), Ag = c.invert || f, tl = Se === "loading";
    or.current = A.useMemo(() => ri * Q + uc, [ri, uc]), A.useEffect(() => {
        le(!0)
    }, []), A.useLayoutEffect(() => {
        if (!Y) return;
        let U = en.current,
            ne = U.style.height;
        U.style.height = "auto";
        let ee = U.getBoundingClientRect().height;
        U.style.height = ne, Jr(ee), w(kt => kt.find(bt => bt.toastId === c.id) ? kt.map(bt => bt.toastId === c.id ? { ...bt,
            height: ee
        } : bt) : [{
            toastId: c.id,
            height: ee,
            position: c.position
        }, ...kt])
    }, [Y, c.title, c.description, w, c.id]);
    let tn = A.useCallback(() => {
        Z(!0), nr(or.current), w(U => U.filter(ne => ne.toastId !== c.id)), setTimeout(() => {
            C(c)
        }, w1)
    }, [c, C, w, or]);
    A.useEffect(() => {
        if (c.promise && Se === "loading" || c.duration === 1 / 0 || c.type === "loading") return;
        let U, ne = sc;
        return E || x || I && cc ? (() => {
            if (lc.current < el.current) {
                let ee = new Date().getTime() - el.current;
                ne = ne - ee
            }
            lc.current = new Date().getTime()
        })() : ne !== 1 / 0 && (el.current = new Date().getTime(), U = setTimeout(() => {
            var ee;
            (ee = c.onAutoClose) == null || ee.call(c, c), tn()
        }, ne)), () => clearTimeout(U)
    }, [E, x, K, c, sc, tn, c.promise, Se, I, cc]), A.useEffect(() => {
        let U = en.current;
        if (U) {
            let ne = U.getBoundingClientRect().height;
            return Jr(ne), w(ee => [{
                toastId: c.id,
                height: ne,
                position: c.position
            }, ...ee]), () => w(ee => ee.filter(kt => kt.toastId !== c.id))
        }
    }, [w, c.id]), A.useEffect(() => {
        c.delete && tn()
    }, [tn, c.delete]);

    function _g() {
        return j != null && j.loading ? A.createElement("div", {
            className: "sonner-loader",
            "data-visible": Se === "loading"
        }, j.loading) : B ? A.createElement("div", {
            className: "sonner-loader",
            "data-visible": Se === "loading"
        }, B) : A.createElement(e1, {
            visible: Se === "loading"
        })
    }
    return A.createElement("li", {
        "aria-live": c.important ? "assertive" : "polite",
        "aria-atomic": "true",
        role: "status",
        tabIndex: 0,
        ref: en,
        className: F($, Pg, b == null ? void 0 : b.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, b == null ? void 0 : b.default, b == null ? void 0 : b[Se], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[Se]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = c.richColors) != null ? r : N,
        "data-styled": !(c.jsx || c.unstyled || y),
        "data-mounted": Y,
        "data-promise": !!c.promise,
        "data-removed": Qe,
        "data-visible": Js,
        "data-y-position": ac,
        "data-x-position": jg,
        "data-index": p,
        "data-front": Zs,
        "data-swiping": dt,
        "data-dismissible": rr,
        "data-type": Se,
        "data-invert": Ag,
        "data-swipe-out": Zt,
        "data-expanded": !!(E || K && Y),
        style: {
            "--index": p,
            "--toasts-before": p,
            "--z-index": g.length - p,
            "--offset": `${Qe?ti:or.current}px`,
            "--initial-height": K ? "auto" : `${In}px`,
            ...P,
            ...c.style
        },
        onPointerDown: U => {
            tl || !rr || (ni.current = new Date, nr(or.current), U.target.setPointerCapture(U.pointerId), U.target.tagName !== "BUTTON" && (qt(!0), ir.current = {
                x: U.clientX,
                y: U.clientY
            }))
        },
        onPointerUp: () => {
            var U, ne, ee, kt;
            if (Zt || !rr) return;
            ir.current = null;
            let bt = Number(((U = en.current) == null ? void 0 : U.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
                oi = new Date().getTime() - ((ne = ni.current) == null ? void 0 : ne.getTime()),
                Og = Math.abs(bt) / oi;
            if (Math.abs(bt) >= y1 || Og > .11) {
                nr(or.current), (ee = c.onDismiss) == null || ee.call(c, c), tn(), Jt(!0);
                return
            }(kt = en.current) == null || kt.style.setProperty("--swipe-amount", "0px"), qt(!1)
        },
        onPointerMove: U => {
            var ne;
            if (!ir.current || !rr) return;
            let ee = U.clientY - ir.current.y,
                kt = U.clientX - ir.current.x,
                bt = (ac === "top" ? Math.min : Math.max)(0, ee),
                oi = U.pointerType === "touch" ? 10 : 2;
            Math.abs(bt) > oi ? (ne = en.current) == null || ne.style.setProperty("--swipe-amount", `${ee}px`) : Math.abs(kt) > oi && (ir.current = null)
        }
    }, Rg && !c.jsx ? A.createElement("button", {
        "aria-label": z,
        "data-disabled": tl,
        "data-close-button": !0,
        onClick: tl || !rr ? () => {} : () => {
            var U;
            tn(), (U = c.onDismiss) == null || U.call(c, c)
        },
        className: F(b == null ? void 0 : b.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton)
    }, A.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, A.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), A.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    }))) : null, c.jsx || A.isValidElement(c.title) ? c.jsx || c.title : A.createElement(A.Fragment, null, Se || c.icon || c.promise ? A.createElement("div", {
        "data-icon": "",
        className: F(b == null ? void 0 : b.icon, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.icon)
    }, c.promise || c.type === "loading" && !c.icon ? c.icon || _g() : null, c.type !== "loading" ? c.icon || (j == null ? void 0 : j[Se]) || Zw(Se) : null) : null, A.createElement("div", {
        "data-content": "",
        className: F(b == null ? void 0 : b.content, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.content)
    }, A.createElement("div", {
        "data-title": "",
        className: F(b == null ? void 0 : b.title, (l = c == null ? void 0 : c.classNames) == null ? void 0 : l.title)
    }, c.title), c.description ? A.createElement("div", {
        "data-description": "",
        className: F(D, Tg, b == null ? void 0 : b.description, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.description)
    }, c.description) : null), A.isValidElement(c.cancel) ? c.cancel : c.cancel && bi(c.cancel) ? A.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: c.cancelButtonStyle || M,
        onClick: U => {
            var ne, ee;
            bi(c.cancel) && rr && ((ee = (ne = c.cancel).onClick) == null || ee.call(ne, U), tn())
        },
        className: F(b == null ? void 0 : b.cancelButton, (u = c == null ? void 0 : c.classNames) == null ? void 0 : u.cancelButton)
    }, c.cancel.label) : null, A.isValidElement(c.action) ? c.action : c.action && bi(c.action) ? A.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: c.actionButtonStyle || _,
        onClick: U => {
            var ne, ee;
            bi(c.action) && (U.defaultPrevented || ((ee = (ne = c.action).onClick) == null || ee.call(ne, U), tn()))
        },
        className: F(b == null ? void 0 : b.actionButton, (d = c == null ? void 0 : c.classNames) == null ? void 0 : d.actionButton)
    }, c.action.label) : null))
};

function Ad() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
var E1 = e => {
    let {
        invert: t,
        position: n = "bottom-right",
        hotkey: r = ["altKey", "KeyT"],
        expand: o,
        closeButton: i,
        className: s,
        offset: l,
        theme: a = "light",
        richColors: u,
        duration: d,
        style: f,
        visibleToasts: c = p1,
        toastOptions: y,
        dir: x = Ad(),
        gap: w = v1,
        loadingIcon: S,
        icons: h,
        containerAriaLabel: p = "Notifications",
        pauseWhenPageIsHidden: g,
        cn: E = x1
    } = e, [C, N] = A.useState([]), k = A.useMemo(() => Array.from(new Set([n].concat(C.filter(I => I.position).map(I => I.position)))), [C, n]), [P, M] = A.useState([]), [_, $] = A.useState(!1), [D, V] = A.useState(!1), [O, Q] = A.useState(a !== "system" ? a : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), B = A.useRef(null), K = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = A.useRef(null), j = A.useRef(!1), z = A.useCallback(I => {
        var F;
        (F = C.find(Y => Y.id === I.id)) != null && F.delete || Ge.dismiss(I.id), N(Y => Y.filter(({
            id: le
        }) => le !== I.id))
    }, [C]);
    return A.useEffect(() => Ge.subscribe(I => {
        if (I.dismiss) {
            N(F => F.map(Y => Y.id === I.id ? { ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout(() => {
            Rh.flushSync(() => {
                N(F => {
                    let Y = F.findIndex(le => le.id === I.id);
                    return Y !== -1 ? [...F.slice(0, Y), { ...F[Y],
                        ...I
                    }, ...F.slice(Y + 1)] : [I, ...F]
                })
            })
        })
    }), []), A.useEffect(() => {
        if (a !== "system") {
            Q(a);
            return
        }
        a === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Q("dark") : Q("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
            matches: I
        }) => {
            Q(I ? "dark" : "light")
        })
    }, [a]), A.useEffect(() => {
        C.length <= 1 && $(!1)
    }, [C]), A.useEffect(() => {
        let I = F => {
            var Y, le;
            r.every(Qe => F[Qe] || F.code === Qe) && ($(!0), (Y = B.current) == null || Y.focus()), F.code === "Escape" && (document.activeElement === B.current || (le = B.current) != null && le.contains(document.activeElement)) && $(!1)
        };
        return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I)
    }, [r]), A.useEffect(() => {
        if (B.current) return () => {
            b.current && (b.current.focus({
                preventScroll: !0
            }), b.current = null, j.current = !1)
        }
    }, [B.current]), C.length ? A.createElement("section", {
        "aria-label": `${p} ${K}`,
        tabIndex: -1
    }, k.map((I, F) => {
        var Y;
        let [le, Qe] = I.split("-");
        return A.createElement("ol", {
            key: I,
            dir: x === "auto" ? Ad() : x,
            tabIndex: -1,
            ref: B,
            className: s,
            "data-sonner-toaster": !0,
            "data-theme": O,
            "data-y-position": le,
            "data-x-position": Qe,
            style: {
                "--front-toast-height": `${((Y=P[0])==null?void 0:Y.height)||0}px`,
                "--offset": typeof l == "number" ? `${l}px` : l || h1,
                "--width": `${g1}px`,
                "--gap": `${w}px`,
                ...f
            },
            onBlur: Z => {
                j.current && !Z.currentTarget.contains(Z.relatedTarget) && (j.current = !1, b.current && (b.current.focus({
                    preventScroll: !0
                }), b.current = null))
            },
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || j.current || (j.current = !0, b.current = Z.relatedTarget)
            },
            onMouseEnter: () => $(!0),
            onMouseMove: () => $(!0),
            onMouseLeave: () => {
                D || $(!1)
            },
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || V(!0)
            },
            onPointerUp: () => V(!1)
        }, C.filter(Z => !Z.position && F === 0 || Z.position === I).map((Z, dt) => {
            var qt, Zt;
            return A.createElement(S1, {
                key: Z.id,
                icons: h,
                index: dt,
                toast: Z,
                defaultRichColors: u,
                duration: (qt = y == null ? void 0 : y.duration) != null ? qt : d,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: t,
                visibleToasts: c,
                closeButton: (Zt = y == null ? void 0 : y.closeButton) != null ? Zt : i,
                interacting: D,
                position: I,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: z,
                toasts: C.filter(Jt => Jt.position == Z.position),
                heights: P.filter(Jt => Jt.position == Z.position),
                setHeights: M,
                expandByDefault: o,
                gap: w,
                loadingIcon: S,
                expanded: _,
                pauseWhenPageIsHidden: g,
                cn: E
            })
        }))
    })) : null
};
const C1 = ({ ...e
}) => {
    const {
        theme: t = "system"
    } = qw();
    return m.jsx(E1, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
};

function k1(e, t = []) {
    let n = [];

    function r(i, s) {
        const l = v.createContext(s),
            a = n.length;
        n = [...n, s];
        const u = f => {
            var h;
            const {
                scope: c,
                children: y,
                ...x
            } = f, w = ((h = c == null ? void 0 : c[e]) == null ? void 0 : h[a]) || l, S = v.useMemo(() => x, Object.values(x));
            return m.jsx(w.Provider, {
                value: S,
                children: y
            })
        };
        u.displayName = i + "Provider";

        function d(f, c) {
            var w;
            const y = ((w = c == null ? void 0 : c[e]) == null ? void 0 : w[a]) || l,
                x = v.useContext(y);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, d]
    }
    const o = () => {
        const i = n.map(s => v.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return v.useMemo(() => ({
                [`__scope${e}`]: { ...l,
                    [e]: a
                }
            }), [l, a])
        }
    };
    return o.scopeName = e, [r, b1(o, ...t)]
}

function b1(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((l, {
                useScope: a,
                scopeName: u
            }) => {
                const f = a(i)[`__scope${u}`];
                return { ...l,
                    ...f
                }
            }, {});
            return v.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}
var N1 = "DismissableLayer",
    Ia = "dismissableLayer.update",
    P1 = "dismissableLayer.pointerDownOutside",
    T1 = "dismissableLayer.focusOutside",
    _d, xm = v.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Sm = v.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: l,
            ...a
        } = e, u = v.useContext(xm), [d, f] = v.useState(null), c = (d == null ? void 0 : d.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, y] = v.useState({}), x = He(t, k => f(k)), w = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), h = w.indexOf(S), p = d ? w.indexOf(d) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, E = p >= h, C = A1(k => {
            const P = k.target,
                M = [...u.branches].some(_ => _.contains(P));
            !E || M || (o == null || o(k), s == null || s(k), k.defaultPrevented || l == null || l())
        }, c), N = _1(k => {
            const P = k.target;
            [...u.branches].some(_ => _.contains(P)) || (i == null || i(k), s == null || s(k), k.defaultPrevented || l == null || l())
        }, c);
        return Oh(k => {
            p === u.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && l && (k.preventDefault(), l()))
        }, c), v.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (_d = c.body.style.pointerEvents, c.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Od(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (c.body.style.pointerEvents = _d)
            }
        }, [d, c, n, u]), v.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Od())
        }, [d, u]), v.useEffect(() => {
            const k = () => y({});
            return document.addEventListener(Ia, k), () => document.removeEventListener(Ia, k)
        }, []), m.jsx(ye.div, { ...a,
            ref: x,
            style: {
                pointerEvents: g ? E ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: pe(e.onFocusCapture, N.onFocusCapture),
            onBlurCapture: pe(e.onBlurCapture, N.onBlurCapture),
            onPointerDownCapture: pe(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
Sm.displayName = N1;
var R1 = "DismissableLayerBranch",
    j1 = v.forwardRef((e, t) => {
        const n = v.useContext(xm),
            r = v.useRef(null),
            o = He(t, r);
        return v.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), m.jsx(ye.div, { ...e,
            ref: o
        })
    });
j1.displayName = R1;

function A1(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = tt(e),
        r = v.useRef(!1),
        o = v.useRef(() => {});
    return v.useEffect(() => {
        const i = l => {
                if (l.target && !r.current) {
                    let a = function() {
                        Em(P1, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: l
                    };
                    l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, {
                        once: !0
                    })) : a()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function _1(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = tt(e),
        r = v.useRef(!1);
    return v.useEffect(() => {
        const o = i => {
            i.target && !r.current && Em(T1, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Od() {
    const e = new CustomEvent(Ia);
    document.dispatchEvent(e)
}

function Em(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Bu(o, i) : o.dispatchEvent(i)
}
const O1 = ["top", "right", "bottom", "left"],
    Rn = Math.min,
    Xe = Math.max,
    hs = Math.round,
    Ni = Math.floor,
    jn = e => ({
        x: e,
        y: e
    }),
    L1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    M1 = {
        start: "end",
        end: "start"
    };

function Da(e, t, n) {
    return Xe(e, Rn(t, n))
}

function Gt(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Yt(e) {
    return e.split("-")[0]
}

function qr(e) {
    return e.split("-")[1]
}

function Ku(e) {
    return e === "x" ? "y" : "x"
}

function Gu(e) {
    return e === "y" ? "height" : "width"
}

function An(e) {
    return ["top", "bottom"].includes(Yt(e)) ? "y" : "x"
}

function Yu(e) {
    return Ku(An(e))
}

function I1(e, t, n) {
    n === void 0 && (n = !1);
    const r = qr(e),
        o = Yu(e),
        i = Gu(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = ms(s)), [s, ms(s)]
}

function D1(e) {
    const t = ms(e);
    return [za(e), t, za(t)]
}

function za(e) {
    return e.replace(/start|end/g, t => M1[t])
}

function z1(e, t, n) {
    const r = ["left", "right"],
        o = ["right", "left"],
        i = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? o : r : t ? r : o;
        case "left":
        case "right":
            return t ? i : s;
        default:
            return []
    }
}

function F1(e, t, n, r) {
    const o = qr(e);
    let i = z1(Yt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(za)))), i
}

function ms(e) {
    return e.replace(/left|right|bottom|top/g, t => L1[t])
}

function $1(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Cm(e) {
    return typeof e != "number" ? $1(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function gs(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function Ld(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const i = An(t),
        s = Yu(t),
        l = Gu(s),
        a = Yt(t),
        u = i === "y",
        d = r.x + r.width / 2 - o.width / 2,
        f = r.y + r.height / 2 - o.height / 2,
        c = r[l] / 2 - o[l] / 2;
    let y;
    switch (a) {
        case "top":
            y = {
                x: d,
                y: r.y - o.height
            };
            break;
        case "bottom":
            y = {
                x: d,
                y: r.y + r.height
            };
            break;
        case "right":
            y = {
                x: r.x + r.width,
                y: f
            };
            break;
        case "left":
            y = {
                x: r.x - o.width,
                y: f
            };
            break;
        default:
            y = {
                x: r.x,
                y: r.y
            }
    }
    switch (qr(t)) {
        case "start":
            y[s] -= c * (n && u ? -1 : 1);
            break;
        case "end":
            y[s] += c * (n && u ? -1 : 1);
            break
    }
    return y
}
const B1 = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s
    } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: d,
            y: f
        } = Ld(u, r, a),
        c = r,
        y = {},
        x = 0;
    for (let w = 0; w < l.length; w++) {
        const {
            name: S,
            fn: h
        } = l[w], {
            x: p,
            y: g,
            data: E,
            reset: C
        } = await h({
            x: d,
            y: f,
            initialPlacement: r,
            placement: c,
            strategy: o,
            middlewareData: y,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = p ? ? d, f = g ? ? f, y = { ...y,
            [S]: { ...y[S],
                ...E
            }
        }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (c = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects), {
            x: d,
            y: f
        } = Ld(u, c, a)), w = -1)
    }
    return {
        x: d,
        y: f,
        placement: c,
        strategy: o,
        middlewareData: y
    }
};
async function Ho(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: i,
        rects: s,
        elements: l,
        strategy: a
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: f = "floating",
        altBoundary: c = !1,
        padding: y = 0
    } = Gt(t, e), x = Cm(y), S = l[c ? f === "floating" ? "reference" : "floating" : f], h = gs(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(S))) == null || n ? S : S.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: a
    })), p = f === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), E = await (i.isElement == null ? void 0 : i.isElement(g)) ? await (i.getScale == null ? void 0 : i.getScale(g)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, C = gs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: p,
        offsetParent: g,
        strategy: a
    }) : p);
    return {
        top: (h.top - C.top + x.top) / E.y,
        bottom: (C.bottom - h.bottom + x.bottom) / E.y,
        left: (h.left - C.left + x.left) / E.x,
        right: (C.right - h.right + x.right) / E.x
    }
}
const U1 = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: s,
                elements: l,
                middlewareData: a
            } = t, {
                element: u,
                padding: d = 0
            } = Gt(e, t) || {};
            if (u == null) return {};
            const f = Cm(d),
                c = {
                    x: n,
                    y: r
                },
                y = Yu(o),
                x = Gu(y),
                w = await s.getDimensions(u),
                S = y === "y",
                h = S ? "top" : "left",
                p = S ? "bottom" : "right",
                g = S ? "clientHeight" : "clientWidth",
                E = i.reference[x] + i.reference[y] - c[y] - i.floating[x],
                C = c[y] - i.reference[y],
                N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let k = N ? N[g] : 0;
            (!k || !await (s.isElement == null ? void 0 : s.isElement(N))) && (k = l.floating[g] || i.floating[x]);
            const P = E / 2 - C / 2,
                M = k / 2 - w[x] / 2 - 1,
                _ = Rn(f[h], M),
                $ = Rn(f[p], M),
                D = _,
                V = k - w[x] - $,
                O = k / 2 - w[x] / 2 + P,
                Q = Da(D, O, V),
                B = !a.arrow && qr(o) != null && O !== Q && i.reference[x] / 2 - (O < D ? _ : $) - w[x] / 2 < 0,
                K = B ? O < D ? O - D : O - V : 0;
            return {
                [y]: c[y] + K,
                data: {
                    [y]: Q,
                    centerOffset: O - Q - K,
                    ...B && {
                        alignmentOffset: K
                    }
                },
                reset: B
            }
        }
    }),
    H1 = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: s,
                    initialPlacement: l,
                    platform: a,
                    elements: u
                } = t, {
                    mainAxis: d = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: c,
                    fallbackStrategy: y = "bestFit",
                    fallbackAxisSideDirection: x = "none",
                    flipAlignment: w = !0,
                    ...S
                } = Gt(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                const h = Yt(o),
                    p = An(l),
                    g = Yt(l) === l,
                    E = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
                    C = c || (g || !w ? [ms(l)] : D1(l)),
                    N = x !== "none";
                !c && N && C.push(...F1(l, w, x, E));
                const k = [l, ...C],
                    P = await Ho(t, S),
                    M = [];
                let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                if (d && M.push(P[h]), f) {
                    const O = I1(o, s, E);
                    M.push(P[O[0]], P[O[1]])
                }
                if (_ = [..._, {
                        placement: o,
                        overflows: M
                    }], !M.every(O => O <= 0)) {
                    var $, D;
                    const O = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
                        Q = k[O];
                    if (Q) return {
                        data: {
                            index: O,
                            overflows: _
                        },
                        reset: {
                            placement: Q
                        }
                    };
                    let B = (D = _.filter(K => K.overflows[0] <= 0).sort((K, b) => K.overflows[1] - b.overflows[1])[0]) == null ? void 0 : D.placement;
                    if (!B) switch (y) {
                        case "bestFit":
                            {
                                var V;
                                const K = (V = _.filter(b => {
                                    if (N) {
                                        const j = An(b.placement);
                                        return j === p || j === "y"
                                    }
                                    return !0
                                }).map(b => [b.placement, b.overflows.filter(j => j > 0).reduce((j, z) => j + z, 0)]).sort((b, j) => b[1] - j[1])[0]) == null ? void 0 : V[0];K && (B = K);
                                break
                            }
                        case "initialPlacement":
                            B = l;
                            break
                    }
                    if (o !== B) return {
                        reset: {
                            placement: B
                        }
                    }
                }
                return {}
            }
        }
    };

function Md(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function Id(e) {
    return O1.some(t => e[t] >= 0)
}
const W1 = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: r = "referenceHidden",
                ...o
            } = Gt(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const i = await Ho(t, { ...o,
                                elementContext: "reference"
                            }),
                            s = Md(i, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: s,
                                referenceHidden: Id(s)
                            }
                        }
                    }
                case "escaped":
                    {
                        const i = await Ho(t, { ...o,
                                altBoundary: !0
                            }),
                            s = Md(i, n.floating);
                        return {
                            data: {
                                escapedOffsets: s,
                                escaped: Id(s)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function V1(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Yt(n), l = qr(n), a = An(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, d = i && a ? -1 : 1, f = Gt(t, e);
    let {
        mainAxis: c,
        crossAxis: y,
        alignmentAxis: x
    } = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return l && typeof x == "number" && (y = l === "end" ? x * -1 : x), a ? {
        x: y * d,
        y: c * u
    } : {
        x: c * u,
        y: y * d
    }
}
const Q1 = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: i,
                    placement: s,
                    middlewareData: l
                } = t, a = await V1(t, e);
                return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + a.x,
                    y: i + a.y,
                    data: { ...a,
                        placement: s
                    }
                }
            }
        }
    },
    K1 = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: l = {
                        fn: S => {
                            let {
                                x: h,
                                y: p
                            } = S;
                            return {
                                x: h,
                                y: p
                            }
                        }
                    },
                    ...a
                } = Gt(e, t), u = {
                    x: n,
                    y: r
                }, d = await Ho(t, a), f = An(Yt(o)), c = Ku(f);
                let y = u[c],
                    x = u[f];
                if (i) {
                    const S = c === "y" ? "top" : "left",
                        h = c === "y" ? "bottom" : "right",
                        p = y + d[S],
                        g = y - d[h];
                    y = Da(p, y, g)
                }
                if (s) {
                    const S = f === "y" ? "top" : "left",
                        h = f === "y" ? "bottom" : "right",
                        p = x + d[S],
                        g = x - d[h];
                    x = Da(p, x, g)
                }
                const w = l.fn({ ...t,
                    [c]: y,
                    [f]: x
                });
                return { ...w,
                    data: {
                        x: w.x - n,
                        y: w.y - r,
                        enabled: {
                            [c]: i,
                            [f]: s
                        }
                    }
                }
            }
        }
    },
    G1 = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: s
                } = t, {
                    offset: l = 0,
                    mainAxis: a = !0,
                    crossAxis: u = !0
                } = Gt(e, t), d = {
                    x: n,
                    y: r
                }, f = An(o), c = Ku(f);
                let y = d[c],
                    x = d[f];
                const w = Gt(l, t),
                    S = typeof w == "number" ? {
                        mainAxis: w,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...w
                    };
                if (a) {
                    const g = c === "y" ? "height" : "width",
                        E = i.reference[c] - i.floating[g] + S.mainAxis,
                        C = i.reference[c] + i.reference[g] - S.mainAxis;
                    y < E ? y = E : y > C && (y = C)
                }
                if (u) {
                    var h, p;
                    const g = c === "y" ? "width" : "height",
                        E = ["top", "left"].includes(Yt(o)),
                        C = i.reference[f] - i.floating[g] + (E && ((h = s.offset) == null ? void 0 : h[f]) || 0) + (E ? 0 : S.crossAxis),
                        N = i.reference[f] + i.reference[g] + (E ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) - (E ? S.crossAxis : 0);
                    x < C ? x = C : x > N && (x = N)
                }
                return {
                    [c]: y,
                    [f]: x
                }
            }
        }
    },
    Y1 = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: i,
                    platform: s,
                    elements: l
                } = t, {
                    apply: a = () => {},
                    ...u
                } = Gt(e, t), d = await Ho(t, u), f = Yt(o), c = qr(o), y = An(o) === "y", {
                    width: x,
                    height: w
                } = i.floating;
                let S, h;
                f === "top" || f === "bottom" ? (S = f, h = c === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = f, S = c === "end" ? "top" : "bottom");
                const p = w - d.top - d.bottom,
                    g = x - d.left - d.right,
                    E = Rn(w - d[S], p),
                    C = Rn(x - d[h], g),
                    N = !t.middlewareData.shift;
                let k = E,
                    P = C;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = g), (r = t.middlewareData.shift) != null && r.enabled.y && (k = p), N && !c) {
                    const _ = Xe(d.left, 0),
                        $ = Xe(d.right, 0),
                        D = Xe(d.top, 0),
                        V = Xe(d.bottom, 0);
                    y ? P = x - 2 * (_ !== 0 || $ !== 0 ? _ + $ : Xe(d.left, d.right)) : k = w - 2 * (D !== 0 || V !== 0 ? D + V : Xe(d.top, d.bottom))
                }
                await a({ ...t,
                    availableWidth: P,
                    availableHeight: k
                });
                const M = await s.getDimensions(l.floating);
                return x !== M.width || w !== M.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Us() {
    return typeof window < "u"
}

function Zr(e) {
    return km(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Je(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Mt(e) {
    var t;
    return (t = (km(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function km(e) {
    return Us() ? e instanceof Node || e instanceof Je(e).Node : !1
}

function Et(e) {
    return Us() ? e instanceof Element || e instanceof Je(e).Element : !1
}

function Lt(e) {
    return Us() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1
}

function Dd(e) {
    return !Us() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot
}

function ei(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = Ct(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function X1(e) {
    return ["table", "td", "th"].includes(Zr(e))
}

function Hs(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function Xu(e) {
    const t = qu(),
        n = Et(e) ? Ct(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function q1(e) {
    let t = _n(e);
    for (; Lt(t) && !Wr(t);) {
        if (Xu(t)) return t;
        if (Hs(t)) return null;
        t = _n(t)
    }
    return null
}

function qu() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Wr(e) {
    return ["html", "body", "#document"].includes(Zr(e))
}

function Ct(e) {
    return Je(e).getComputedStyle(e)
}

function Ws(e) {
    return Et(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function _n(e) {
    if (Zr(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Dd(e) && e.host || Mt(e);
    return Dd(t) ? t.host : t
}

function bm(e) {
    const t = _n(e);
    return Wr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Lt(t) && ei(t) ? t : bm(t)
}

function Wo(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = bm(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = Je(o);
    if (i) {
        const l = Fa(s);
        return t.concat(s, s.visualViewport || [], ei(o) ? o : [], l && n ? Wo(l) : [])
    }
    return t.concat(o, Wo(o, [], n))
}

function Fa(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function Nm(e) {
    const t = Ct(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Lt(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        l = hs(n) !== i || hs(r) !== s;
    return l && (n = i, r = s), {
        width: n,
        height: r,
        $: l
    }
}

function Zu(e) {
    return Et(e) ? e : e.contextElement
}

function Nr(e) {
    const t = Zu(e);
    if (!Lt(t)) return jn(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = Nm(t);
    let s = (i ? hs(n.width) : n.width) / r,
        l = (i ? hs(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
        x: s,
        y: l
    }
}
const Z1 = jn(0);

function Pm(e) {
    const t = Je(e);
    return !qu() || !t.visualViewport ? Z1 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function J1(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Je(e) ? !1 : t
}

function Jn(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = Zu(e);
    let s = jn(1);
    t && (r ? Et(r) && (s = Nr(r)) : s = Nr(e));
    const l = J1(i, n, r) ? Pm(i) : jn(0);
    let a = (o.left + l.x) / s.x,
        u = (o.top + l.y) / s.y,
        d = o.width / s.x,
        f = o.height / s.y;
    if (i) {
        const c = Je(i),
            y = r && Et(r) ? Je(r) : r;
        let x = c,
            w = Fa(x);
        for (; w && r && y !== x;) {
            const S = Nr(w),
                h = w.getBoundingClientRect(),
                p = Ct(w),
                g = h.left + (w.clientLeft + parseFloat(p.paddingLeft)) * S.x,
                E = h.top + (w.clientTop + parseFloat(p.paddingTop)) * S.y;
            a *= S.x, u *= S.y, d *= S.x, f *= S.y, a += g, u += E, x = Je(w), w = Fa(x)
        }
    }
    return gs({
        width: d,
        height: f,
        x: a,
        y: u
    })
}

function ex(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const i = o === "fixed",
        s = Mt(r),
        l = t ? Hs(t.floating) : !1;
    if (r === s || l && i) return n;
    let a = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = jn(1);
    const d = jn(0),
        f = Lt(r);
    if ((f || !f && !i) && ((Zr(r) !== "body" || ei(s)) && (a = Ws(r)), Lt(r))) {
        const c = Jn(r);
        u = Nr(r), d.x = c.x + r.clientLeft, d.y = c.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + d.x,
        y: n.y * u.y - a.scrollTop * u.y + d.y
    }
}

function tx(e) {
    return Array.from(e.getClientRects())
}

function $a(e, t) {
    const n = Ws(e).scrollLeft;
    return t ? t.left + n : Jn(Mt(e)).left + n
}

function nx(e) {
    const t = Mt(e),
        n = Ws(e),
        r = e.ownerDocument.body,
        o = Xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = Xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + $a(e);
    const l = -n.scrollTop;
    return Ct(r).direction === "rtl" && (s += Xe(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: i,
        x: s,
        y: l
    }
}

function rx(e, t) {
    const n = Je(e),
        r = Mt(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        l = 0,
        a = 0;
    if (o) {
        i = o.width, s = o.height;
        const u = qu();
        (!u || u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}

function ox(e, t) {
    const n = Jn(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = Lt(e) ? Nr(e) : jn(1),
        s = e.clientWidth * i.x,
        l = e.clientHeight * i.y,
        a = o * i.x,
        u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}

function zd(e, t, n) {
    let r;
    if (t === "viewport") r = rx(e, n);
    else if (t === "document") r = nx(Mt(e));
    else if (Et(t)) r = ox(t, n);
    else {
        const o = Pm(e);
        r = { ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return gs(r)
}

function Tm(e, t) {
    const n = _n(e);
    return n === t || !Et(n) || Wr(n) ? !1 : Ct(n).position === "fixed" || Tm(n, t)
}

function ix(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Wo(e, [], !1).filter(l => Et(l) && Zr(l) !== "body"),
        o = null;
    const i = Ct(e).position === "fixed";
    let s = i ? _n(e) : e;
    for (; Et(s) && !Wr(s);) {
        const l = Ct(s),
            a = Xu(s);
        !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ei(s) && !a && Tm(e, s)) ? r = r.filter(d => d !== s) : o = l, s = _n(s)
    }
    return t.set(e, r), r
}

function sx(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const s = [...n === "clippingAncestors" ? Hs(t) ? [] : ix(t, this._c) : [].concat(n), r],
        l = s[0],
        a = s.reduce((u, d) => {
            const f = zd(t, d, o);
            return u.top = Xe(f.top, u.top), u.right = Rn(f.right, u.right), u.bottom = Rn(f.bottom, u.bottom), u.left = Xe(f.left, u.left), u
        }, zd(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}

function lx(e) {
    const {
        width: t,
        height: n
    } = Nm(e);
    return {
        width: t,
        height: n
    }
}

function ax(e, t, n) {
    const r = Lt(t),
        o = Mt(t),
        i = n === "fixed",
        s = Jn(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = jn(0);
    if (r || !r && !i)
        if ((Zr(t) !== "body" || ei(o)) && (l = Ws(t)), r) {
            const y = Jn(t, !0, i, t);
            a.x = y.x + t.clientLeft, a.y = y.y + t.clientTop
        } else o && (a.x = $a(o));
    let u = 0,
        d = 0;
    if (o && !r && !i) {
        const y = o.getBoundingClientRect();
        d = y.top + l.scrollTop, u = y.left + l.scrollLeft - $a(o, y)
    }
    const f = s.left + l.scrollLeft - a.x - u,
        c = s.top + l.scrollTop - a.y - d;
    return {
        x: f,
        y: c,
        width: s.width,
        height: s.height
    }
}

function Ol(e) {
    return Ct(e).position === "static"
}

function Fd(e, t) {
    if (!Lt(e) || Ct(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Mt(e) === n && (n = n.ownerDocument.body), n
}

function Rm(e, t) {
    const n = Je(e);
    if (Hs(e)) return n;
    if (!Lt(e)) {
        let o = _n(e);
        for (; o && !Wr(o);) {
            if (Et(o) && !Ol(o)) return o;
            o = _n(o)
        }
        return n
    }
    let r = Fd(e, t);
    for (; r && X1(r) && Ol(r);) r = Fd(r, t);
    return r && Wr(r) && Ol(r) && !Xu(r) ? n : r || q1(e) || n
}
const ux = async function(e) {
    const t = this.getOffsetParent || Rm,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: ax(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function cx(e) {
    return Ct(e).direction === "rtl"
}
const dx = {
    convertOffsetParentRelativeRectToViewportRelativeRect: ex,
    getDocumentElement: Mt,
    getClippingRect: sx,
    getOffsetParent: Rm,
    getElementRects: ux,
    getClientRects: tx,
    getDimensions: lx,
    getScale: Nr,
    isElement: Et,
    isRTL: cx
};

function fx(e, t) {
    let n = null,
        r;
    const o = Mt(e);

    function i() {
        var l;
        clearTimeout(r), (l = n) == null || l.disconnect(), n = null
    }

    function s(l, a) {
        l === void 0 && (l = !1), a === void 0 && (a = 1), i();
        const {
            left: u,
            top: d,
            width: f,
            height: c
        } = e.getBoundingClientRect();
        if (l || t(), !f || !c) return;
        const y = Ni(d),
            x = Ni(o.clientWidth - (u + f)),
            w = Ni(o.clientHeight - (d + c)),
            S = Ni(u),
            p = {
                rootMargin: -y + "px " + -x + "px " + -w + "px " + -S + "px",
                threshold: Xe(0, Rn(1, a)) || 1
            };
        let g = !0;

        function E(C) {
            const N = C[0].intersectionRatio;
            if (N !== a) {
                if (!g) return s();
                N ? s(!1, N) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            g = !1
        }
        try {
            n = new IntersectionObserver(E, { ...p,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E, p)
        }
        n.observe(e)
    }
    return s(!0), i
}

function px(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: a = !1
    } = r, u = Zu(e), d = o || i ? [...u ? Wo(u) : [], ...Wo(t)] : [];
    d.forEach(h => {
        o && h.addEventListener("scroll", n, {
            passive: !0
        }), i && h.addEventListener("resize", n)
    });
    const f = u && l ? fx(u, n) : null;
    let c = -1,
        y = null;
    s && (y = new ResizeObserver(h => {
        let [p] = h;
        p && p.target === u && y && (y.unobserve(t), cancelAnimationFrame(c), c = requestAnimationFrame(() => {
            var g;
            (g = y) == null || g.observe(t)
        })), n()
    }), u && !a && y.observe(u), y.observe(t));
    let x, w = a ? Jn(e) : null;
    a && S();

    function S() {
        const h = Jn(e);
        w && (h.x !== w.x || h.y !== w.y || h.width !== w.width || h.height !== w.height) && n(), w = h, x = requestAnimationFrame(S)
    }
    return n(), () => {
        var h;
        d.forEach(p => {
            o && p.removeEventListener("scroll", n), i && p.removeEventListener("resize", n)
        }), f == null || f(), (h = y) == null || h.disconnect(), y = null, a && cancelAnimationFrame(x)
    }
}
const hx = Q1,
    mx = K1,
    gx = H1,
    vx = Y1,
    yx = W1,
    $d = U1,
    wx = G1,
    xx = (e, t, n) => {
        const r = new Map,
            o = {
                platform: dx,
                ...n
            },
            i = { ...o.platform,
                _c: r
            };
        return B1(e, t, { ...o,
            platform: i
        })
    };
var Hi = typeof document < "u" ? v.useLayoutEffect : v.useEffect;

function vs(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!vs(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !vs(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function jm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Bd(e, t) {
    const n = jm(e);
    return Math.round(t * n) / n
}

function Ll(e) {
    const t = v.useRef(e);
    return Hi(() => {
        t.current = e
    }), t
}

function Sx(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: i,
            floating: s
        } = {},
        transform: l = !0,
        whileElementsMounted: a,
        open: u
    } = e, [d, f] = v.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [c, y] = v.useState(r);
    vs(c, r) || y(r);
    const [x, w] = v.useState(null), [S, h] = v.useState(null), p = v.useCallback(b => {
        b !== N.current && (N.current = b, w(b))
    }, []), g = v.useCallback(b => {
        b !== k.current && (k.current = b, h(b))
    }, []), E = i || x, C = s || S, N = v.useRef(null), k = v.useRef(null), P = v.useRef(d), M = a != null, _ = Ll(a), $ = Ll(o), D = Ll(u), V = v.useCallback(() => {
        if (!N.current || !k.current) return;
        const b = {
            placement: t,
            strategy: n,
            middleware: c
        };
        $.current && (b.platform = $.current), xx(N.current, k.current, b).then(j => {
            const z = { ...j,
                isPositioned: D.current !== !1
            };
            O.current && !vs(P.current, z) && (P.current = z, Yr.flushSync(() => {
                f(z)
            }))
        })
    }, [c, t, n, $, D]);
    Hi(() => {
        u === !1 && P.current.isPositioned && (P.current.isPositioned = !1, f(b => ({ ...b,
            isPositioned: !1
        })))
    }, [u]);
    const O = v.useRef(!1);
    Hi(() => (O.current = !0, () => {
        O.current = !1
    }), []), Hi(() => {
        if (E && (N.current = E), C && (k.current = C), E && C) {
            if (_.current) return _.current(E, C, V);
            V()
        }
    }, [E, C, V, _, M]);
    const Q = v.useMemo(() => ({
            reference: N,
            floating: k,
            setReference: p,
            setFloating: g
        }), [p, g]),
        B = v.useMemo(() => ({
            reference: E,
            floating: C
        }), [E, C]),
        K = v.useMemo(() => {
            const b = {
                position: n,
                left: 0,
                top: 0
            };
            if (!B.floating) return b;
            const j = Bd(B.floating, d.x),
                z = Bd(B.floating, d.y);
            return l ? { ...b,
                transform: "translate(" + j + "px, " + z + "px)",
                ...jm(B.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: j,
                top: z
            }
        }, [n, l, B.floating, d.x, d.y]);
    return v.useMemo(() => ({ ...d,
        update: V,
        refs: Q,
        elements: B,
        floatingStyles: K
    }), [d, V, Q, B, K])
}
const Ex = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? $d({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? $d({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    Cx = (e, t) => ({ ...hx(e),
        options: [e, t]
    }),
    kx = (e, t) => ({ ...mx(e),
        options: [e, t]
    }),
    bx = (e, t) => ({ ...wx(e),
        options: [e, t]
    }),
    Nx = (e, t) => ({ ...gx(e),
        options: [e, t]
    }),
    Px = (e, t) => ({ ...vx(e),
        options: [e, t]
    }),
    Tx = (e, t) => ({ ...yx(e),
        options: [e, t]
    }),
    Rx = (e, t) => ({ ...Ex(e),
        options: [e, t]
    });
var jx = "Arrow",
    Am = v.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
        } = e;
        return m.jsx(ye.svg, { ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : m.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Am.displayName = jx;
var Ax = Am;

function _x(e) {
    const [t, n] = v.useState(void 0);
    return St(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize" in i) {
                    const a = i.borderBoxSize,
                        u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize, l = u.blockSize
                } else s = e.offsetWidth, l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var _m = "Popper",
    [Om, Lm] = Ds(_m),
    [$E, Mm] = Om(_m),
    Im = "PopperAnchor",
    Dm = v.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, i = Mm(Im, n), s = v.useRef(null), l = He(t, s);
        return v.useEffect(() => {
            i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }), r ? null : m.jsx(ye.div, { ...o,
            ref: l
        })
    });
Dm.displayName = Im;
var Ju = "PopperContent",
    [Ox, Lx] = Om(Ju),
    zm = v.forwardRef((e, t) => {
        var dt, qt, Zt, Jt, ti, nr;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: l = 0,
            avoidCollisions: a = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: c = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: x,
            ...w
        } = e, S = Mm(Ju, n), [h, p] = v.useState(null), g = He(t, In => p(In)), [E, C] = v.useState(null), N = _x(E), k = (N == null ? void 0 : N.width) ? ? 0, P = (N == null ? void 0 : N.height) ? ? 0, M = r + (i !== "center" ? "-" + i : ""), _ = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, $ = Array.isArray(u) ? u : [u], D = $.length > 0, V = {
            padding: _,
            boundary: $.filter(Ix),
            altBoundary: D
        }, {
            refs: O,
            floatingStyles: Q,
            placement: B,
            isPositioned: K,
            middlewareData: b
        } = Sx({
            strategy: "fixed",
            placement: M,
            whileElementsMounted: (...In) => px(...In, {
                animationFrame: y === "always"
            }),
            elements: {
                reference: S.anchor
            },
            middleware: [Cx({
                mainAxis: o + P,
                alignmentAxis: s
            }), a && kx({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? bx() : void 0,
                ...V
            }), a && Nx({ ...V
            }), Px({ ...V,
                apply: ({
                    elements: In,
                    rects: Jr,
                    availableWidth: ni,
                    availableHeight: en
                }) => {
                    const {
                        width: Zs,
                        height: Js
                    } = Jr.reference, Se = In.floating.style;
                    Se.setProperty("--radix-popper-available-width", `${ni}px`), Se.setProperty("--radix-popper-available-height", `${en}px`), Se.setProperty("--radix-popper-anchor-width", `${Zs}px`), Se.setProperty("--radix-popper-anchor-height", `${Js}px`)
                }
            }), E && Rx({
                element: E,
                padding: l
            }), Dx({
                arrowWidth: k,
                arrowHeight: P
            }), c && Tx({
                strategy: "referenceHidden",
                ...V
            })]
        }), [j, z] = Bm(B), I = tt(x);
        St(() => {
            K && (I == null || I())
        }, [K, I]);
        const F = (dt = b.arrow) == null ? void 0 : dt.x,
            Y = (qt = b.arrow) == null ? void 0 : qt.y,
            le = ((Zt = b.arrow) == null ? void 0 : Zt.centerOffset) !== 0,
            [Qe, Z] = v.useState();
        return St(() => {
            h && Z(window.getComputedStyle(h).zIndex)
        }, [h]), m.jsx("div", {
            ref: O.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...Q,
                transform: K ? Q.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Qe,
                "--radix-popper-transform-origin": [(Jt = b.transformOrigin) == null ? void 0 : Jt.x, (ti = b.transformOrigin) == null ? void 0 : ti.y].join(" "),
                ...((nr = b.hide) == null ? void 0 : nr.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: m.jsx(Ox, {
                scope: n,
                placedSide: j,
                onArrowChange: C,
                arrowX: F,
                arrowY: Y,
                shouldHideArrow: le,
                children: m.jsx(ye.div, {
                    "data-side": j,
                    "data-align": z,
                    ...w,
                    ref: g,
                    style: { ...w.style,
                        animation: K ? void 0 : "none"
                    }
                })
            })
        })
    });
zm.displayName = Ju;
var Fm = "PopperArrow",
    Mx = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    $m = v.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, i = Lx(Fm, r), s = Mx[i.placedSide];
        return m.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: m.jsx(Ax, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
$m.displayName = Fm;

function Ix(e) {
    return e !== null
}
var Dx = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var S, h, p;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, a = s ? 0 : e.arrowHeight, [u, d] = Bm(n), f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d], c = (((h = o.arrow) == null ? void 0 : h.x) ? ? 0) + l / 2, y = (((p = o.arrow) == null ? void 0 : p.y) ? ? 0) + a / 2;
        let x = "",
            w = "";
        return u === "bottom" ? (x = s ? f : `${c}px`, w = `${-a}px`) : u === "top" ? (x = s ? f : `${c}px`, w = `${r.floating.height+a}px`) : u === "right" ? (x = `${-a}px`, w = s ? f : `${y}px`) : u === "left" && (x = `${r.floating.width+a}px`, w = s ? f : `${y}px`), {
            data: {
                x,
                y: w
            }
        }
    }
});

function Bm(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var zx = Dm,
    Fx = zm,
    $x = $m;

function Bx(e, t) {
    return v.useReducer((n, r) => t[n][r] ? ? n, e)
}
var Um = e => {
    const {
        present: t,
        children: n
    } = e, r = Ux(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : v.Children.only(n), i = He(r.ref, Hx(o));
    return typeof n == "function" || r.isPresent ? v.cloneElement(o, {
        ref: i
    }) : null
};
Um.displayName = "Presence";

function Ux(e) {
    const [t, n] = v.useState(), r = v.useRef({}), o = v.useRef(e), i = v.useRef("none"), s = e ? "mounted" : "unmounted", [l, a] = Bx(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return v.useEffect(() => {
        const u = Pi(r.current);
        i.current = l === "mounted" ? u : "none"
    }, [l]), St(() => {
        const u = r.current,
            d = o.current;
        if (d !== e) {
            const c = i.current,
                y = Pi(u);
            e ? a("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && c !== y ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, a]), St(() => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ? ? window,
                f = y => {
                    const w = Pi(r.current).includes(y.animationName);
                    if (y.target === t && w && (a("ANIMATION_END"), !o.current)) {
                        const S = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                        })
                    }
                },
                c = y => {
                    y.target === t && (i.current = Pi(r.current))
                };
            return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
                d.clearTimeout(u), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f)
            }
        } else a("ANIMATION_END")
    }, [t, a]), {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: v.useCallback(u => {
            u && (r.current = getComputedStyle(u)), n(u)
        }, [])
    }
}

function Pi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function Hx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var [Vs, BE] = k1("Tooltip", [Lm]), ec = Lm(), Hm = "TooltipProvider", Wx = 700, Ud = "tooltip.open", [Vx, Wm] = Vs(Hm), Vm = e => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Wx,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i
    } = e, [s, l] = v.useState(!0), a = v.useRef(!1), u = v.useRef(0);
    return v.useEffect(() => {
        const d = u.current;
        return () => window.clearTimeout(d)
    }, []), m.jsx(Vx, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: v.useCallback(() => {
            window.clearTimeout(u.current), l(!1)
        }, []),
        onClose: v.useCallback(() => {
            window.clearTimeout(u.current), u.current = window.setTimeout(() => l(!0), r)
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: v.useCallback(d => {
            a.current = d
        }, []),
        disableHoverableContent: o,
        children: i
    })
};
Vm.displayName = Hm;
var Qm = "Tooltip",
    [UE, Qs] = Vs(Qm),
    Ba = "TooltipTrigger",
    Qx = v.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Qs(Ba, n), i = Wm(Ba, n), s = ec(n), l = v.useRef(null), a = He(t, l, o.onTriggerChange), u = v.useRef(!1), d = v.useRef(!1), f = v.useCallback(() => u.current = !1, []);
        return v.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), m.jsx(zx, {
            asChild: !0,
            ...s,
            children: m.jsx(ye.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: a,
                onPointerMove: pe(e.onPointerMove, c => {
                    c.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0)
                }),
                onPointerLeave: pe(e.onPointerLeave, () => {
                    o.onTriggerLeave(), d.current = !1
                }),
                onPointerDown: pe(e.onPointerDown, () => {
                    u.current = !0, document.addEventListener("pointerup", f, {
                        once: !0
                    })
                }),
                onFocus: pe(e.onFocus, () => {
                    u.current || o.onOpen()
                }),
                onBlur: pe(e.onBlur, o.onClose),
                onClick: pe(e.onClick, o.onClose)
            })
        })
    });
Qx.displayName = Ba;
var Kx = "TooltipPortal",
    [HE, Gx] = Vs(Kx, {
        forceMount: void 0
    }),
    Vr = "TooltipContent",
    Km = v.forwardRef((e, t) => {
        const n = Gx(Vr, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...i
            } = e,
            s = Qs(Vr, e.__scopeTooltip);
        return m.jsx(Um, {
            present: r || s.open,
            children: s.disableHoverableContent ? m.jsx(Gm, {
                side: o,
                ...i,
                ref: t
            }) : m.jsx(Yx, {
                side: o,
                ...i,
                ref: t
            })
        })
    }),
    Yx = v.forwardRef((e, t) => {
        const n = Qs(Vr, e.__scopeTooltip),
            r = Wm(Vr, e.__scopeTooltip),
            o = v.useRef(null),
            i = He(t, o),
            [s, l] = v.useState(null),
            {
                trigger: a,
                onClose: u
            } = n,
            d = o.current,
            {
                onPointerInTransitChange: f
            } = r,
            c = v.useCallback(() => {
                l(null), f(!1)
            }, [f]),
            y = v.useCallback((x, w) => {
                const S = x.currentTarget,
                    h = {
                        x: x.clientX,
                        y: x.clientY
                    },
                    p = Jx(h, S.getBoundingClientRect()),
                    g = eS(h, p),
                    E = tS(w.getBoundingClientRect()),
                    C = rS([...g, ...E]);
                l(C), f(!0)
            }, [f]);
        return v.useEffect(() => () => c(), [c]), v.useEffect(() => {
            if (a && d) {
                const x = S => y(S, d),
                    w = S => y(S, a);
                return a.addEventListener("pointerleave", x), d.addEventListener("pointerleave", w), () => {
                    a.removeEventListener("pointerleave", x), d.removeEventListener("pointerleave", w)
                }
            }
        }, [a, d, y, c]), v.useEffect(() => {
            if (s) {
                const x = w => {
                    const S = w.target,
                        h = {
                            x: w.clientX,
                            y: w.clientY
                        },
                        p = (a == null ? void 0 : a.contains(S)) || (d == null ? void 0 : d.contains(S)),
                        g = !nS(h, s);
                    p ? c() : g && (c(), u())
                };
                return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x)
            }
        }, [a, d, s, u, c]), m.jsx(Gm, { ...e,
            ref: i
        })
    }),
    [Xx, qx] = Vs(Qm, {
        isInside: !1
    }),
    Gm = v.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...l
        } = e, a = Qs(Vr, n), u = ec(n), {
            onClose: d
        } = a;
        return v.useEffect(() => (document.addEventListener(Ud, d), () => document.removeEventListener(Ud, d)), [d]), v.useEffect(() => {
            if (a.trigger) {
                const f = c => {
                    const y = c.target;
                    y != null && y.contains(a.trigger) && d()
                };
                return window.addEventListener("scroll", f, {
                    capture: !0
                }), () => window.removeEventListener("scroll", f, {
                    capture: !0
                })
            }
        }, [a.trigger, d]), m.jsx(Sm, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: f => f.preventDefault(),
            onDismiss: d,
            children: m.jsxs(Fx, {
                "data-state": a.stateAttribute,
                ...u,
                ...l,
                ref: t,
                style: { ...l.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [m.jsx(_h, {
                    children: r
                }), m.jsx(Xx, {
                    scope: n,
                    isInside: !0,
                    children: m.jsx(M0, {
                        id: a.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
Km.displayName = Vr;
var Ym = "TooltipArrow",
    Zx = v.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = ec(n);
        return qx(Ym, n).isInside ? null : m.jsx($x, { ...o,
            ...r,
            ref: t
        })
    });
Zx.displayName = Ym;

function Jx(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function eS(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function tS(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function nS(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i].x,
            a = t[i].y,
            u = t[s].x,
            d = t[s].y;
        a > r != d > r && n < (u - l) * (r - a) / (d - a) + l && (o = !o)
    }
    return o
}

function rS(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), oS(t)
}

function oS(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var iS = Vm,
    Xm = Km;
const sS = iS,
    lS = v.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => m.jsx(Xm, {
        ref: r,
        sideOffset: t,
        className: be("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
lS.displayName = Xm.displayName;
var Ks = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Gs = typeof window > "u" || "Deno" in globalThis;

function ht() {}

function aS(e, t) {
    return typeof e == "function" ? e(t) : e
}

function uS(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function cS(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Hd(e, t) {
    return typeof e == "function" ? e(t) : e
}

function dS(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Wd(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: i,
        queryKey: s,
        stale: l
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== tc(s, t.options)) return !1
        } else if (!Qo(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a) return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}

function Vd(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Vo(t.options.mutationKey) !== Vo(i)) return !1
        } else if (!Qo(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function tc(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Vo)(e)
}

function Vo(e) {
    return JSON.stringify(e, (t, n) => Ua(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function Qo(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !Qo(e[n], t[n])) : !1
}

function qm(e, t) {
    if (e === t) return e;
    const n = Qd(e) && Qd(t);
    if (n || Ua(e) && Ua(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            l = n ? [] : {};
        let a = 0;
        for (let u = 0; u < s; u++) {
            const d = n ? u : i[u];
            (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0, a++) : (l[d] = qm(e[d], t[d]), l[d] === e[d] && e[d] !== void 0 && a++)
        }
        return o === s && a === o ? e : l
    }
    return t
}

function Qd(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Ua(e) {
    if (!Kd(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Kd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Kd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function fS(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function pS(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? qm(e, t) : t
}

function hS(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function mS(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Zm = Symbol();

function Jm(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Zm ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Un, dn, Tr, af, gS = (af = class extends Ks {
        constructor() {
            super();
            q(this, Un);
            q(this, dn);
            q(this, Tr);
            W(this, Tr, t => {
                if (!Gs && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            T(this, dn) || this.setEventListener(T(this, Tr))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = T(this, dn)) == null || t.call(this), W(this, dn, void 0))
        }
        setEventListener(t) {
            var n;
            W(this, Tr, t), (n = T(this, dn)) == null || n.call(this), W(this, dn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            T(this, Un) !== t && (W(this, Un, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof T(this, Un) == "boolean" ? T(this, Un) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, Un = new WeakMap, dn = new WeakMap, Tr = new WeakMap, af),
    eg = new gS,
    Rr, fn, jr, uf, vS = (uf = class extends Ks {
        constructor() {
            super();
            q(this, Rr, !0);
            q(this, fn);
            q(this, jr);
            W(this, jr, t => {
                if (!Gs && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            T(this, fn) || this.setEventListener(T(this, jr))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = T(this, fn)) == null || t.call(this), W(this, fn, void 0))
        }
        setEventListener(t) {
            var n;
            W(this, jr, t), (n = T(this, fn)) == null || n.call(this), W(this, fn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            T(this, Rr) !== t && (W(this, Rr, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return T(this, Rr)
        }
    }, Rr = new WeakMap, fn = new WeakMap, jr = new WeakMap, uf),
    ys = new vS;

function yS(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function tg(e) {
    return (e ? ? "online") === "online" ? ys.isOnline() : !0
}
var ng = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Ml(e) {
    return e instanceof ng
}

function rg(e) {
    let t = !1,
        n = 0,
        r = !1,
        o, i, s;
    const l = new Promise((h, p) => {
            i = h, s = p
        }),
        a = h => {
            var p;
            r || (x(new ng(h)), (p = e.abort) == null || p.call(e))
        },
        u = () => {
            t = !0
        },
        d = () => {
            t = !1
        },
        f = () => eg.isFocused() && (e.networkMode === "always" || ys.isOnline()) && e.canRun(),
        c = () => tg(e.networkMode) && e.canRun(),
        y = h => {
            var p;
            r || (r = !0, (p = e.onSuccess) == null || p.call(e, h), o == null || o(), i(h))
        },
        x = h => {
            var p;
            r || (r = !0, (p = e.onError) == null || p.call(e, h), o == null || o(), s(h))
        },
        w = () => new Promise(h => {
            var p;
            o = g => {
                (r || f()) && h(g)
            }, (p = e.onPause) == null || p.call(e)
        }).then(() => {
            var h;
            o = void 0, r || (h = e.onContinue) == null || h.call(e)
        }),
        S = () => {
            if (r) return;
            let h;
            const p = n === 0 ? e.initialPromise : void 0;
            try {
                h = p ? ? e.fn()
            } catch (g) {
                h = Promise.reject(g)
            }
            Promise.resolve(h).then(y).catch(g => {
                var P;
                if (r) return;
                const E = e.retry ? ? (Gs ? 0 : 3),
                    C = e.retryDelay ? ? yS,
                    N = typeof C == "function" ? C(n, g) : C,
                    k = E === !0 || typeof E == "number" && n < E || typeof E == "function" && E(n, g);
                if (t || !k) {
                    x(g);
                    return
                }
                n++, (P = e.onFail) == null || P.call(e, n, g), fS(N).then(() => f() ? void 0 : w()).then(() => {
                    t ? x(g) : S()
                })
            })
        };
    return {
        promise: l,
        cancel: a,
        continue: () => (o == null || o(), l),
        cancelRetry: u,
        continueRetry: d,
        canStart: c,
        start: () => (c() ? S() : w().then(S), l)
    }
}

function wS() {
    let e = [],
        t = 0,
        n = l => {
            l()
        },
        r = l => {
            l()
        },
        o = l => setTimeout(l, 0);
    const i = l => {
            t ? e.push(l) : o(() => {
                n(l)
            })
        },
        s = () => {
            const l = e;
            e = [], l.length && o(() => {
                r(() => {
                    l.forEach(a => {
                        n(a)
                    })
                })
            })
        };
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--, t || s()
            }
            return a
        },
        batchCalls: l => (...a) => {
            i(() => {
                l(...a)
            })
        },
        schedule: i,
        setNotifyFunction: l => {
            n = l
        },
        setBatchNotifyFunction: l => {
            r = l
        },
        setScheduler: l => {
            o = l
        }
    }
}
var Le = wS(),
    Hn, cf, og = (cf = class {
        constructor() {
            q(this, Hn)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), uS(this.gcTime) && W(this, Hn, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (Gs ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            T(this, Hn) && (clearTimeout(T(this, Hn)), W(this, Hn, void 0))
        }
    }, Hn = new WeakMap, cf),
    Ar, _r, ot, Re, Ko, Wn, mt, Dt, df, xS = (df = class extends og {
        constructor(t) {
            super();
            q(this, mt);
            q(this, Ar);
            q(this, _r);
            q(this, ot);
            q(this, Re);
            q(this, Ko);
            q(this, Wn);
            W(this, Wn, !1), W(this, Ko, t.defaultOptions), this.setOptions(t.options), this.observers = [], W(this, ot, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, W(this, Ar, ES(this.options)), this.state = t.state ? ? T(this, Ar), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = T(this, Re)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...T(this, Ko),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && T(this, ot).remove(this)
        }
        setData(t, n) {
            const r = pS(this.state.data, t, this.options);
            return Ne(this, mt, Dt).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            Ne(this, mt, Dt).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = T(this, Re)) == null ? void 0 : r.promise;
            return (o = T(this, Re)) == null || o.cancel(t), n ? n.then(ht).catch(ht) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(T(this, Ar))
        }
        isActive() {
            return this.observers.some(t => dS(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || this.state.data === void 0 || !cS(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = T(this, Re)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = T(this, Re)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), T(this, ot).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (T(this, Re) && (T(this, Wn) ? T(this, Re).cancel({
                revert: !0
            }) : T(this, Re).cancelRetry()), this.scheduleGc()), T(this, ot).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Ne(this, mt, Dt).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var a, u, d;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (T(this, Re)) return T(this, Re).continueRetry(), T(this, Re).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const f = this.observers.find(c => c.options.queryFn);
                f && this.setOptions(f.options)
            }
            const r = new AbortController,
                o = f => {
                    Object.defineProperty(f, "signal", {
                        enumerable: !0,
                        get: () => (W(this, Wn, !0), r.signal)
                    })
                },
                i = () => {
                    const f = Jm(this.options, n),
                        c = {
                            queryKey: this.queryKey,
                            meta: this.meta
                        };
                    return o(c), W(this, Wn, !1), this.options.persister ? this.options.persister(f, c, this) : f(c)
                },
                s = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: i
                };
            o(s), (a = this.options.behavior) == null || a.onFetch(s, this), W(this, _r, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && Ne(this, mt, Dt).call(this, {
                type: "fetch",
                meta: (d = s.fetchOptions) == null ? void 0 : d.meta
            });
            const l = f => {
                var c, y, x, w;
                Ml(f) && f.silent || Ne(this, mt, Dt).call(this, {
                    type: "error",
                    error: f
                }), Ml(f) || ((y = (c = T(this, ot).config).onError) == null || y.call(c, f, this), (w = (x = T(this, ot).config).onSettled) == null || w.call(x, this.state.data, f, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return W(this, Re, rg({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: s.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: f => {
                    var c, y, x, w;
                    if (f === void 0) {
                        l(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(f)
                    } catch (S) {
                        l(S);
                        return
                    }(y = (c = T(this, ot).config).onSuccess) == null || y.call(c, f, this), (w = (x = T(this, ot).config).onSettled) == null || w.call(x, f, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                },
                onError: l,
                onFail: (f, c) => {
                    Ne(this, mt, Dt).call(this, {
                        type: "failed",
                        failureCount: f,
                        error: c
                    })
                },
                onPause: () => {
                    Ne(this, mt, Dt).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Ne(this, mt, Dt).call(this, {
                        type: "continue"
                    })
                },
                retry: s.options.retry,
                retryDelay: s.options.retryDelay,
                networkMode: s.options.networkMode,
                canRun: () => !0
            })), T(this, Re).start()
        }
    }, Ar = new WeakMap, _r = new WeakMap, ot = new WeakMap, Re = new WeakMap, Ko = new WeakMap, Wn = new WeakMap, mt = new WeakSet, Dt = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...SS(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return Ml(o) && o.revert && T(this, _r) ? { ...T(this, _r),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), Le.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), T(this, ot).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, df);

function SS(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: tg(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function ES(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Tt, ff, CS = (ff = class extends Ks {
        constructor(t = {}) {
            super();
            q(this, Tt);
            this.config = t, W(this, Tt, new Map)
        }
        build(t, n, r) {
            const o = n.queryKey,
                i = n.queryHash ? ? tc(o, n);
            let s = this.get(i);
            return s || (s = new xS({
                cache: this,
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(s)), s
        }
        add(t) {
            T(this, Tt).has(t.queryHash) || (T(this, Tt).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = T(this, Tt).get(t.queryHash);
            n && (t.destroy(), n === t && T(this, Tt).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            Le.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return T(this, Tt).get(t)
        }
        getAll() {
            return [...T(this, Tt).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Wd(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Wd(t, r)) : n
        }
        notify(t) {
            Le.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            Le.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            Le.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, Tt = new WeakMap, ff),
    Rt, _e, Vn, jt, sn, pf, kS = (pf = class extends og {
        constructor(t) {
            super();
            q(this, jt);
            q(this, Rt);
            q(this, _e);
            q(this, Vn);
            this.mutationId = t.mutationId, W(this, _e, t.mutationCache), W(this, Rt, []), this.state = t.state || bS(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            T(this, Rt).includes(t) || (T(this, Rt).push(t), this.clearGcTimeout(), T(this, _e).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            W(this, Rt, T(this, Rt).filter(n => n !== t)), this.scheduleGc(), T(this, _e).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            T(this, Rt).length || (this.state.status === "pending" ? this.scheduleGc() : T(this, _e).remove(this))
        }
        continue () {
            var t;
            return ((t = T(this, Vn)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var o, i, s, l, a, u, d, f, c, y, x, w, S, h, p, g, E, C, N, k;
            W(this, Vn, rg({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (P, M) => {
                    Ne(this, jt, sn).call(this, {
                        type: "failed",
                        failureCount: P,
                        error: M
                    })
                },
                onPause: () => {
                    Ne(this, jt, sn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Ne(this, jt, sn).call(this, {
                        type: "continue"
                    })
                },
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => T(this, _e).canRun(this)
            }));
            const n = this.state.status === "pending",
                r = !T(this, Vn).canStart();
            try {
                if (!n) {
                    Ne(this, jt, sn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: r
                    }), await ((i = (o = T(this, _e).config).onMutate) == null ? void 0 : i.call(o, t, this));
                    const M = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                    M !== this.state.context && Ne(this, jt, sn).call(this, {
                        type: "pending",
                        context: M,
                        variables: t,
                        isPaused: r
                    })
                }
                const P = await T(this, Vn).start();
                return await ((u = (a = T(this, _e).config).onSuccess) == null ? void 0 : u.call(a, P, t, this.state.context, this)), await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, P, t, this.state.context)), await ((y = (c = T(this, _e).config).onSettled) == null ? void 0 : y.call(c, P, null, this.state.variables, this.state.context, this)), await ((w = (x = this.options).onSettled) == null ? void 0 : w.call(x, P, null, t, this.state.context)), Ne(this, jt, sn).call(this, {
                    type: "success",
                    data: P
                }), P
            } catch (P) {
                try {
                    throw await ((h = (S = T(this, _e).config).onError) == null ? void 0 : h.call(S, P, t, this.state.context, this)), await ((g = (p = this.options).onError) == null ? void 0 : g.call(p, P, t, this.state.context)), await ((C = (E = T(this, _e).config).onSettled) == null ? void 0 : C.call(E, void 0, P, this.state.variables, this.state.context, this)), await ((k = (N = this.options).onSettled) == null ? void 0 : k.call(N, void 0, P, t, this.state.context)), P
                } finally {
                    Ne(this, jt, sn).call(this, {
                        type: "error",
                        error: P
                    })
                }
            } finally {
                T(this, _e).runNext(this)
            }
        }
    }, Rt = new WeakMap, _e = new WeakMap, Vn = new WeakMap, jt = new WeakSet, sn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), Le.batch(() => {
            T(this, Rt).forEach(r => {
                r.onMutationUpdate(t)
            }), T(this, _e).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, pf);

function bS() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Ke, Go, hf, NS = (hf = class extends Ks {
    constructor(t = {}) {
        super();
        q(this, Ke);
        q(this, Go);
        this.config = t, W(this, Ke, new Map), W(this, Go, Date.now())
    }
    build(t, n, r) {
        const o = new kS({
            mutationCache: this,
            mutationId: ++ii(this, Go)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }
    add(t) {
        const n = Ti(t),
            r = T(this, Ke).get(n) ? ? [];
        r.push(t), T(this, Ke).set(n, r), this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        var r;
        const n = Ti(t);
        if (T(this, Ke).has(n)) {
            const o = (r = T(this, Ke).get(n)) == null ? void 0 : r.filter(i => i !== t);
            o && (o.length === 0 ? T(this, Ke).delete(n) : T(this, Ke).set(n, o))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        var r;
        const n = (r = T(this, Ke).get(Ti(t))) == null ? void 0 : r.find(o => o.state.status === "pending");
        return !n || n === t
    }
    runNext(t) {
        var r;
        const n = (r = T(this, Ke).get(Ti(t))) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ? ? Promise.resolve()
    }
    clear() {
        Le.batch(() => {
            this.getAll().forEach(t => {
                this.remove(t)
            })
        })
    }
    getAll() {
        return [...T(this, Ke).values()].flat()
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Vd(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Vd(t, n))
    }
    notify(t) {
        Le.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Le.batch(() => Promise.all(t.map(n => n.continue().catch(ht))))
    }
}, Ke = new WeakMap, Go = new WeakMap, hf);

function Ti(e) {
    var t;
    return ((t = e.options.scope) == null ? void 0 : t.id) ? ? String(e.mutationId)
}

function Gd(e) {
    return {
        onFetch: (t, n) => {
            var d, f, c, y, x;
            const r = t.options,
                o = (c = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : c.direction,
                i = ((y = t.state.data) == null ? void 0 : y.pages) || [],
                s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let l = {
                    pages: [],
                    pageParams: []
                },
                a = 0;
            const u = async () => {
                let w = !1;
                const S = g => {
                        Object.defineProperty(g, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? w = !0 : t.signal.addEventListener("abort", () => {
                                w = !0
                            }), t.signal)
                        })
                    },
                    h = Jm(t.options, t.fetchOptions),
                    p = async (g, E, C) => {
                        if (w) return Promise.reject();
                        if (E == null && g.pages.length) return Promise.resolve(g);
                        const N = {
                            queryKey: t.queryKey,
                            pageParam: E,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        S(N);
                        const k = await h(N),
                            {
                                maxPages: P
                            } = t.options,
                            M = C ? mS : hS;
                        return {
                            pages: M(g.pages, k, P),
                            pageParams: M(g.pageParams, E, P)
                        }
                    };
                if (o && i.length) {
                    const g = o === "backward",
                        E = g ? PS : Yd,
                        C = {
                            pages: i,
                            pageParams: s
                        },
                        N = E(r, C);
                    l = await p(C, N, g)
                } else {
                    const g = e ? ? i.length;
                    do {
                        const E = a === 0 ? s[0] ? ? r.initialPageParam : Yd(r, l);
                        if (a > 0 && E == null) break;
                        l = await p(l, E), a++
                    } while (a < g)
                }
                return l
            };
            t.options.persister ? t.fetchFn = () => {
                var w, S;
                return (S = (w = t.options).persister) == null ? void 0 : S.call(w, u, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function Yd(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function PS(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, pn, hn, Or, Lr, mn, Mr, Ir, mf, TS = (mf = class {
        constructor(e = {}) {
            q(this, de);
            q(this, pn);
            q(this, hn);
            q(this, Or);
            q(this, Lr);
            q(this, mn);
            q(this, Mr);
            q(this, Ir);
            W(this, de, e.queryCache || new CS), W(this, pn, e.mutationCache || new NS), W(this, hn, e.defaultOptions || {}), W(this, Or, new Map), W(this, Lr, new Map), W(this, mn, 0)
        }
        mount() {
            ii(this, mn)._++, T(this, mn) === 1 && (W(this, Mr, eg.subscribe(async e => {
                e && (await this.resumePausedMutations(), T(this, de).onFocus())
            })), W(this, Ir, ys.subscribe(async e => {
                e && (await this.resumePausedMutations(), T(this, de).onOnline())
            })))
        }
        unmount() {
            var e, t;
            ii(this, mn)._--, T(this, mn) === 0 && ((e = T(this, Mr)) == null || e.call(this), W(this, Mr, void 0), (t = T(this, Ir)) == null || t.call(this), W(this, Ir, void 0))
        }
        isFetching(e) {
            return T(this, de).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return T(this, pn).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = T(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.getQueryData(e.queryKey);
            if (t === void 0) return this.fetchQuery(e); {
                const n = this.defaultQueryOptions(e),
                    r = T(this, de).build(this, n);
                return e.revalidateIfStale && r.isStaleByTime(Hd(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t)
            }
        }
        getQueriesData(e) {
            return T(this, de).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                o = T(this, de).get(r.queryHash),
                i = o == null ? void 0 : o.state.data,
                s = aS(t, i);
            if (s !== void 0) return T(this, de).build(this, r).setData(s, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return Le.batch(() => T(this, de).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = T(this, de).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = T(this, de);
            Le.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = T(this, de),
                r = {
                    type: "active",
                    ...e
                };
            return Le.batch(() => (n.findAll(e).forEach(o => {
                o.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(e = {}, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = Le.batch(() => T(this, de).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(ht).catch(ht)
        }
        invalidateQueries(e = {}, t = {}) {
            return Le.batch(() => {
                if (T(this, de).findAll(e).forEach(r => {
                        r.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const n = { ...e,
                    type: e.refetchType ? ? e.type ? ? "active"
                };
                return this.refetchQueries(n, t)
            })
        }
        refetchQueries(e = {}, t) {
            const n = { ...t,
                    cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ? ? !0
                },
                r = Le.batch(() => T(this, de).findAll(e).filter(o => !o.isDisabled()).map(o => {
                    let i = o.fetch(void 0, n);
                    return n.throwOnError || (i = i.catch(ht)), o.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(ht)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = T(this, de).build(this, t);
            return n.isStaleByTime(Hd(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(ht).catch(ht)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Gd(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(ht).catch(ht)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = Gd(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return ys.isOnline() ? T(this, pn).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return T(this, de)
        }
        getMutationCache() {
            return T(this, pn)
        }
        getDefaultOptions() {
            return T(this, hn)
        }
        setDefaultOptions(e) {
            W(this, hn, e)
        }
        setQueryDefaults(e, t) {
            T(this, Or).set(Vo(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...T(this, Or).values()];
            let n = {};
            return t.forEach(r => {
                Qo(e, r.queryKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        setMutationDefaults(e, t) {
            T(this, Lr).set(Vo(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...T(this, Lr).values()];
            let n = {};
            return t.forEach(r => {
                Qo(e, r.mutationKey) && (n = { ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...T(this, hn).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = tc(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Zm && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...T(this, hn).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            T(this, de).clear(), T(this, pn).clear()
        }
    }, de = new WeakMap, pn = new WeakMap, hn = new WeakMap, Or = new WeakMap, Lr = new WeakMap, mn = new WeakMap, Mr = new WeakMap, Ir = new WeakMap, mf),
    RS = v.createContext(void 0),
    jS = ({
        client: e,
        children: t
    }) => (v.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), m.jsx(RS.Provider, {
        value: e,
        children: t
    }));
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ws() {
    return ws = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ws.apply(this, arguments)
}
var yn;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(yn || (yn = {}));
const Xd = "popstate";

function AS(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: i,
            search: s,
            hash: l
        } = r.location;
        return Ha("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : sg(o)
    }
    return OS(t, n, null, e)
}

function We(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function ig(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function _S() {
    return Math.random().toString(36).substr(2, 8)
}

function qd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Ha(e, t, n, r) {
    return n === void 0 && (n = null), ws({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ys(t) : t, {
        state: n,
        key: t && t.key || r || _S()
    })
}

function sg(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Ys(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function OS(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = r, s = o.history, l = yn.Pop, a = null, u = d();
    u == null && (u = 0, s.replaceState(ws({}, s.state, {
        idx: u
    }), ""));

    function d() {
        return (s.state || {
            idx: null
        }).idx
    }

    function f() {
        l = yn.Pop;
        let S = d(),
            h = S == null ? null : S - u;
        u = S, a && a({
            action: l,
            location: w.location,
            delta: h
        })
    }

    function c(S, h) {
        l = yn.Push;
        let p = Ha(w.location, S, h);
        u = d() + 1;
        let g = qd(p, u),
            E = w.createHref(p);
        try {
            s.pushState(g, "", E)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            o.location.assign(E)
        }
        i && a && a({
            action: l,
            location: w.location,
            delta: 1
        })
    }

    function y(S, h) {
        l = yn.Replace;
        let p = Ha(w.location, S, h);
        u = d();
        let g = qd(p, u),
            E = w.createHref(p);
        s.replaceState(g, "", E), i && a && a({
            action: l,
            location: w.location,
            delta: 0
        })
    }

    function x(S) {
        let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
            p = typeof S == "string" ? S : sg(S);
        return p = p.replace(/ $/, "%20"), We(h, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, h)
    }
    let w = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(S) {
            if (a) throw new Error("A history only accepts one active listener");
            return o.addEventListener(Xd, f), a = S, () => {
                o.removeEventListener(Xd, f), a = null
            }
        },
        createHref(S) {
            return t(o, S)
        },
        createURL: x,
        encodeLocation(S) {
            let h = x(S);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: c,
        replace: y,
        go(S) {
            return s.go(S)
        }
    };
    return w
}
var Zd;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Zd || (Zd = {}));

function LS(e, t, n) {
    return n === void 0 && (n = "/"), MS(e, t, n, !1)
}

function MS(e, t, n, r) {
    let o = typeof t == "string" ? Ys(t) : t,
        i = ug(o.pathname || "/", n);
    if (i == null) return null;
    let s = lg(e);
    IS(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = KS(i);
        l = VS(s[a], u, r)
    }
    return l
}

function lg(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (We(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let u = Pr([r, a.relativePath]),
            d = n.concat(a);
        i.children && i.children.length > 0 && (We(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), lg(i.children, t, d, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: HS(u, i.index),
            routesMeta: d
        })
    };
    return e.forEach((i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
        else
            for (let a of ag(i.path)) o(i, s, a)
    }), t
}

function ag(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = ag(r.join("/")),
        l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))), o && l.push(...s), l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function IS(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : WS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const DS = /^:[\w-]+$/,
    zS = 3,
    FS = 2,
    $S = 1,
    BS = 10,
    US = -2,
    Jd = e => e === "*";

function HS(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Jd) && (r += US), t && (r += FS), n.filter(o => !Jd(o)).reduce((o, i) => o + (DS.test(i) ? zS : i === "" ? $S : BS), r)
}

function WS(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function VS(e, t, n) {
    let {
        routesMeta: r
    } = e, o = {}, i = "/", s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l],
            u = l === r.length - 1,
            d = i === "/" ? t : t.slice(i.length) || "/",
            f = ef({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: u
            }, d),
            c = a.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = ef({
                path: a.relativePath,
                caseSensitive: a.caseSensitive,
                end: !1
            }, d)), !f) return null;
        Object.assign(o, f.params), s.push({
            params: o,
            pathname: Pr([i, f.pathname]),
            pathnameBase: GS(Pr([i, f.pathnameBase])),
            route: c
        }), f.pathnameBase !== "/" && (i = Pr([i, f.pathnameBase]))
    }
    return s
}

function ef(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = QS(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        l = o.slice(1);
    return {
        params: r.reduce((u, d, f) => {
            let {
                paramName: c,
                isOptional: y
            } = d;
            if (c === "*") {
                let w = l[f] || "";
                s = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const x = l[f];
            return y && !x ? u[c] = void 0 : u[c] = (x || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function QS(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), ig(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
            paramName: l,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function KS(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return ig(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function ug(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const Pr = e => e.join("/").replace(/\/\/+/g, "/"),
    GS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function YS(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const cg = ["post", "put", "patch", "delete"];
new Set(cg);
const XS = ["get", ...cg];
new Set(XS);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xs() {
    return xs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, xs.apply(this, arguments)
}
const qS = v.createContext(null),
    ZS = v.createContext(null),
    dg = v.createContext(null),
    Xs = v.createContext(null),
    qs = v.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    fg = v.createContext(null);

function nc() {
    return v.useContext(Xs) != null
}

function pg() {
    return nc() || We(!1), v.useContext(Xs).location
}

function JS(e, t) {
    return eE(e, t)
}

function eE(e, t, n, r) {
    nc() || We(!1);
    let {
        navigator: o
    } = v.useContext(dg), {
        matches: i
    } = v.useContext(qs), s = i[i.length - 1], l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = pg(),
        d;
    if (t) {
        var f;
        let S = typeof t == "string" ? Ys(t) : t;
        a === "/" || (f = S.pathname) != null && f.startsWith(a) || We(!1), d = S
    } else d = u;
    let c = d.pathname || "/",
        y = c;
    if (a !== "/") {
        let S = a.replace(/^\//, "").split("/");
        y = "/" + c.replace(/^\//, "").split("/").slice(S.length).join("/")
    }
    let x = LS(e, {
            pathname: y
        }),
        w = iE(x && x.map(S => Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: Pr([a, o.encodeLocation ? o.encodeLocation(S.pathname).pathname : S.pathname]),
            pathnameBase: S.pathnameBase === "/" ? a : Pr([a, o.encodeLocation ? o.encodeLocation(S.pathnameBase).pathname : S.pathnameBase])
        })), i, n, r);
    return t && w ? v.createElement(Xs.Provider, {
        value: {
            location: xs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: yn.Pop
        }
    }, w) : w
}

function tE() {
    let e = uE(),
        t = YS(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? v.createElement("pre", {
        style: o
    }, n) : null, null)
}
const nE = v.createElement(tE, null);
class rE extends v.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? v.createElement(qs.Provider, {
            value: this.props.routeContext
        }, v.createElement(fg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function oE(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = v.useContext(qS);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), v.createElement(qs.Provider, {
        value: t
    }, r)
}

function iE(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let s = e,
        l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let d = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        d >= 0 || We(!1), s = s.slice(0, Math.min(s.length, d + 1))
    }
    let a = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let f = s[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d), f.route.id) {
                let {
                    loaderData: c,
                    errors: y
                } = n, x = f.route.loader && c[f.route.id] === void 0 && (!y || y[f.route.id] === void 0);
                if (f.route.lazy || x) {
                    a = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((d, f, c) => {
        let y, x = !1,
            w = null,
            S = null;
        n && (y = l && f.route.id ? l[f.route.id] : void 0, w = f.route.errorElement || nE, a && (u < 0 && c === 0 ? (x = !0, S = null) : u === c && (x = !0, S = f.route.hydrateFallbackElement || null)));
        let h = t.concat(s.slice(0, c + 1)),
            p = () => {
                let g;
                return y ? g = w : x ? g = S : f.route.Component ? g = v.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = d, v.createElement(oE, {
                    match: f,
                    routeContext: {
                        outlet: d,
                        matches: h,
                        isDataRoute: n != null
                    },
                    children: g
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || c === 0) ? v.createElement(rE, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: y,
            children: p(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : p()
    }, null)
}
var Wa = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Wa || {});

function sE(e) {
    let t = v.useContext(ZS);
    return t || We(!1), t
}

function lE(e) {
    let t = v.useContext(qs);
    return t || We(!1), t
}

function aE(e) {
    let t = lE(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || We(!1), n.route.id
}

function uE() {
    var e;
    let t = v.useContext(fg),
        n = sE(Wa.UseRouteError),
        r = aE(Wa.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function Va(e) {
    We(!1)
}

function cE(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = yn.Pop,
        navigator: i,
        static: s = !1,
        future: l
    } = e;
    nc() && We(!1);
    let a = t.replace(/^\/*/, "/"),
        u = v.useMemo(() => ({
            basename: a,
            navigator: i,
            static: s,
            future: xs({
                v7_relativeSplatPath: !1
            }, l)
        }), [a, l, i, s]);
    typeof r == "string" && (r = Ys(r));
    let {
        pathname: d = "/",
        search: f = "",
        hash: c = "",
        state: y = null,
        key: x = "default"
    } = r, w = v.useMemo(() => {
        let S = ug(d, a);
        return S == null ? null : {
            location: {
                pathname: S,
                search: f,
                hash: c,
                state: y,
                key: x
            },
            navigationType: o
        }
    }, [a, d, f, c, y, x, o]);
    return w == null ? null : v.createElement(dg.Provider, {
        value: u
    }, v.createElement(Xs.Provider, {
        children: n,
        value: w
    }))
}

function dE(e) {
    let {
        children: t,
        location: n
    } = e;
    return JS(Qa(t), n)
}
new Promise(() => {});

function Qa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return v.Children.forEach(e, (r, o) => {
        if (!v.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === v.Fragment) {
            n.push.apply(n, Qa(r.props.children, i));
            return
        }
        r.type !== Va && We(!1), !r.props.index || !r.props.children || We(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Qa(r.props.children, i)), n.push(s)
    }), n
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const fE = "6";
try {
    window.__reactRouterVersion = fE
} catch {}
const pE = "startTransition",
    tf = Xg[pE];

function hE(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, i = v.useRef();
    i.current == null && (i.current = AS({
        window: o,
        v5Compat: !0
    }));
    let s = i.current,
        [l, a] = v.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        d = v.useCallback(f => {
            u && tf ? tf(() => a(f)) : a(f)
        }, [a, u]);
    return v.useLayoutEffect(() => s.listen(d), [s, d]), v.createElement(cE, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
var nf;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(nf || (nf = {}));
var rf;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(rf || (rf = {}));
const mE = lm("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    Ht = v.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, i) => {
        const s = r ? Uo : "button";
        return m.jsx(s, {
            className: be(mE({
                variant: t,
                size: n,
                className: e
            })),
            ref: i,
            ...o
        })
    });
Ht.displayName = "Button";
const gE = () => m.jsx("section", {
        className: "py-8 bg-gradient-to-b from-pink-50 to-white text-center",
        children: m.jsx("div", {
            className: "container px-4 mx-auto max-w-md",
            children: m.jsxs("div", {
                className: "space-y-4",
                children: [m.jsx("div", {
                    className: "flex justify-center py-2",
                    children: m.jsx("img", {
                        src: "/lovable-uploads/7ae1aa78-677e-4f98-b920-6839e6e3b043.png",
                        alt: "SHEIN Logo",
                        className: "h-36"
                    })
                }), m.jsx("p", {
                    className: "text-lg font-medium text-gray-700 max-w-sm mx-auto",
                    children: "We're looking for people to review SHEIN products in your area and receive a $750 gift card!"
                }), m.jsxs("div", {
                    className: "bg-white border border-gray-200 rounded-lg p-4 shadow-sm",
                    children: [m.jsxs("div", {
                        className: "flex items-center justify-center gap-2 mb-2",
                        children: [m.jsx(Bs, {
                            className: "h-6 w-6 text-green-500"
                        }), m.jsx("h2", {
                            className: "font-semibold text-lg text-gray-800",
                            children: "Earnings Opportunity"
                        })]
                    }), m.jsxs("p", {
                        className: "text-sm text-gray-700 mb-3",
                        children: ["Our reviewers have earned over ", m.jsx("span", {
                            className: "font-bold text-green-600",
                            children: "$2.4 million"
                        }), " in gift cards this year alone!"]
                    }), m.jsx("div", {
                        className: "w-full bg-gray-200 h-2 rounded-full",
                        children: m.jsx("div", {
                            className: "bg-shein-pink h-full rounded-full",
                            style: {
                                width: "85%"
                            }
                        })
                    }), m.jsx("p", {
                        className: "text-xs text-gray-500 mt-2 text-right",
                        children: "85% of reviewers earn the full $750"
                    })]
                }), m.jsx("a", {
                    href: "https://glstrk.com/?offer_ids=NDA3NSwxMjI0LDEzNTg%3D&affiliate_id=MTI4OTAz&source=c2hlaW4%3D",
                    className: "block",
                    children: m.jsx(Ht, {
                        className: "w-full py-5 h-auto rounded-md text-base font-semibold bg-shein-pink hover:bg-pink-500 text-white border-none shadow-md transition-all duration-300",
                        children: "Apply for the $750 Reviewers Gift Card"
                    })
                }), m.jsx("p", {
                    className: "text-sm text-gray-600 italic",
                    children: "*Offer valid for qualified participants."
                })]
            })
        })
    }),
    vE = () => m.jsx("section", {
        className: "py-8 bg-white text-gray-800",
        children: m.jsxs("div", {
            className: "container px-4 mx-auto max-w-md",
            children: [m.jsxs("div", {
                className: "mb-8",
                children: [m.jsx("h2", {
                    className: "text-xl font-bold text-center mb-6",
                    children: "How It Works"
                }), m.jsxs("div", {
                    className: "space-y-4",
                    children: [m.jsx("a", {
                        href: "https://glstrk.com/?offer_ids=NDA3NSwxMjI0LDEzNTg%3D&affiliate_id=MTI4OTAz&source=c2hlaW4%3D",
                        className: "block",
                        children: m.jsxs("div", {
                            className: "flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer",
                            children: [m.jsx("div", {
                                className: "bg-shein-pink text-white p-2 rounded-full",
                                children: m.jsx(sw, {
                                    size: 20
                                })
                            }), m.jsxs("div", {
                                className: "flex-1",
                                children: [m.jsx("h3", {
                                    className: "font-semibold text-gray-800",
                                    children: "Check Eligibility"
                                }), m.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Answer a few simple questions to see if you qualify"
                                })]
                            })]
                        })
                    }), m.jsx("a", {
                        href: "https://glstrk.com/?offer_ids=NDA3NSwxMjI0LDEzNTg%3D&affiliate_id=MTI4OTAz&source=c2hlaW4%3D",
                        className: "block",
                        children: m.jsxs("div", {
                            className: "flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer",
                            children: [m.jsx("div", {
                                className: "bg-shein-pink text-white p-2 rounded-full",
                                children: m.jsx(Pd, {
                                    size: 20
                                })
                            }), m.jsxs("div", {
                                className: "flex-1",
                                children: [m.jsx("h3", {
                                    className: "font-semibold text-gray-800",
                                    children: "Review Products"
                                }), m.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Try out selected SHEIN products and provide your honest opinion"
                                })]
                            })]
                        })
                    }), m.jsx("a", {
                        href: "https://glstrk.com/?offer_ids=NDA3NSwxMjI0LDEzNTg%3D&affiliate_id=MTI4OTAz&source=c2hlaW4%3D",
                        className: "block",
                        children: m.jsxs("div", {
                            className: "flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer",
                            children: [m.jsx("div", {
                                className: "bg-shein-pink text-white p-2 rounded-full",
                                children: m.jsx(um, {
                                    size: 20
                                })
                            }), m.jsxs("div", {
                                className: "flex-1",
                                children: [m.jsx("h3", {
                                    className: "font-semibold text-gray-800",
                                    children: "Get Rewarded"
                                }), m.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Receive your $750 SHEIN gift card upon completion"
                                })]
                            })]
                        })
                    })]
                })]
            }), m.jsxs("div", {
                className: "flex justify-between text-center mb-8 p-4 bg-gray-50 rounded-lg",
                children: [m.jsxs("div", {
                    children: [m.jsx(rw, {
                        size: 20,
                        className: "mx-auto text-shein-pink mb-1"
                    }), m.jsx("p", {
                        className: "text-xs text-gray-600",
                        children: "Satisfaction"
                    }), m.jsx("p", {
                        className: "font-bold text-sm",
                        children: "98% positive"
                    })]
                }), m.jsxs("div", {
                    children: [m.jsx(Pd, {
                        size: 20,
                        className: "mx-auto text-shein-pink mb-1"
                    }), m.jsx("p", {
                        className: "text-xs text-gray-600",
                        children: "Products"
                    }), m.jsx("p", {
                        className: "font-bold text-sm",
                        children: "5,000+ items"
                    })]
                })]
            }), m.jsxs("div", {
                className: "text-center",
                children: [m.jsx("a", {
                    href: "https://glstrk.com/?offer_ids=NDA3NSwxMjI0LDEzNTg%3D&affiliate_id=MTI4OTAz&source=c2hlaW4%3D",
                    className: "block",
                    children: m.jsx(Ht, {
                        className: "w-full py-5 h-auto rounded-md text-base font-semibold bg-shein-pink hover:bg-pink-500 text-white border-none shadow-md transition-all duration-300",
                        children: "Apply for the $750 Reviewers Gift Card"
                    })
                }), m.jsx("p", {
                    className: "text-xs text-gray-500 mt-3",
                    children: "*By clicking this button, you agree to our Terms & Conditions and Privacy Policy."
                })]
            })]
        })
    }),
    rc = v.forwardRef(({
        className: e,
        ...t
    }, n) => m.jsx("div", {
        ref: n,
        className: be("rounded-lg border bg-card text-card-foreground shadow-sm", e),
        ...t
    }));
rc.displayName = "Card";
const hg = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("div", {
    ref: n,
    className: be("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
hg.displayName = "CardHeader";
const yE = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("h3", {
    ref: n,
    className: be("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
yE.displayName = "CardTitle";
const wE = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("p", {
    ref: n,
    className: be("text-sm text-muted-foreground", e),
    ...t
}));
wE.displayName = "CardDescription";
const oc = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("div", {
    ref: n,
    className: be("p-6 pt-0", e),
    ...t
}));
oc.displayName = "CardContent";
const xE = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx("div", {
    ref: n,
    className: be("flex items-center p-6 pt-0", e),
    ...t
}));
xE.displayName = "CardFooter";
var ic = "Avatar",
    [SE, WE] = Ds(ic),
    [EE, mg] = SE(ic),
    gg = v.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            ...r
        } = e, [o, i] = v.useState("idle");
        return m.jsx(EE, {
            scope: n,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: i,
            children: m.jsx(ye.span, { ...r,
                ref: t
            })
        })
    });
gg.displayName = ic;
var vg = "AvatarImage",
    yg = v.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            src: r,
            onLoadingStatusChange: o = () => {},
            ...i
        } = e, s = mg(vg, n), l = CE(r), a = tt(u => {
            o(u), s.onImageLoadingStatusChange(u)
        });
        return St(() => {
            l !== "idle" && a(l)
        }, [l, a]), l === "loaded" ? m.jsx(ye.img, { ...i,
            ref: t,
            src: r
        }) : null
    });
yg.displayName = vg;
var wg = "AvatarFallback",
    xg = v.forwardRef((e, t) => {
        const {
            __scopeAvatar: n,
            delayMs: r,
            ...o
        } = e, i = mg(wg, n), [s, l] = v.useState(r === void 0);
        return v.useEffect(() => {
            if (r !== void 0) {
                const a = window.setTimeout(() => l(!0), r);
                return () => window.clearTimeout(a)
            }
        }, [r]), s && i.imageLoadingStatus !== "loaded" ? m.jsx(ye.span, { ...o,
            ref: t
        }) : null
    });
xg.displayName = wg;

function CE(e) {
    const [t, n] = v.useState("idle");
    return St(() => {
        if (!e) {
            n("error");
            return
        }
        let r = !0;
        const o = new window.Image,
            i = s => () => {
                r && n(s)
            };
        return n("loading"), o.onload = i("loaded"), o.onerror = i("error"), o.src = e, () => {
            r = !1
        }
    }, [e]), t
}
var Sg = gg,
    Eg = yg,
    Cg = xg;
const kg = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(Sg, {
    ref: n,
    className: be("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
}));
kg.displayName = Sg.displayName;
const bg = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(Eg, {
    ref: n,
    className: be("aspect-square h-full w-full", e),
    ...t
}));
bg.displayName = Eg.displayName;
const Ng = v.forwardRef(({
    className: e,
    ...t
}, n) => m.jsx(Cg, {
    ref: n,
    className: be("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
}));
Ng.displayName = Cg.displayName;
const of = [{
    id: 1,
    name: "Sophia Martinez",
    avatar: "",
    initials: "SM",
    date: "2 days ago",
    product: "Floral Summer Dress",
    rating: 5,
    earned: "$750",
    review: "This dress exceeded my expectations! The fabric is great quality, and it fits perfectly. I've received so many compliments. The $750 gift card was so easy to earn, and I've already bought a whole new wardrobe!"
}, {
    id: 2,
    name: "Emma Johnson",
    avatar: "",
    initials: "EJ",
    date: "1 week ago",
    product: "Oversized Knit Sweater",
    rating: 4,
    earned: "$750",
    review: "Love the style and comfort of this sweater. The review process was so simple, and I received my full $750 gift card right after submitting my feedback. Already planning my next SHEIN haul!"
}, {
    id: 3,
    name: "Alex Williams",
    avatar: "",
    initials: "AW",
    date: "2 weeks ago",
    product: "High-Waisted Jeans",
    rating: 5,
    earned: "$750",
    review: "These jeans fit like a dream! They're stretchy but don't lose their shape. The high waist is perfect and very flattering. I earned the $750 gift card for just a few minutes of honest feedback - worth every second!"
}, {
    id: 4,
    name: "Jessica Lee",
    avatar: "",
    initials: "JL",
    date: "1 month ago",
    product: "Platform Sandals",
    rating: 5,
    earned: "$750",
    review: "At first I was skeptical about earning $750 for reviews, but it's 100% legitimate! The platform sandals are super cute, and the gift card let me buy so many more items. Already recommended to all my friends!"
}], kE = ({
    review: e
}) => m.jsxs(rc, {
    className: "h-full",
    children: [m.jsx(hg, {
        className: "pb-2",
        children: m.jsxs("div", {
            className: "flex justify-between items-start",
            children: [m.jsxs("div", {
                className: "flex items-center gap-3",
                children: [m.jsxs(kg, {
                    children: [m.jsx(bg, {
                        src: e.avatar,
                        alt: e.name
                    }), m.jsx(Ng, {
                        className: "bg-gradient-to-br from-shein-pink to-shein-purple text-white",
                        children: e.initials
                    })]
                }), m.jsxs("div", {
                    children: [m.jsx("div", {
                        className: "font-semibold",
                        children: e.name
                    }), m.jsx("div", {
                        className: "text-sm text-muted-foreground",
                        children: e.date
                    })]
                })]
            }), m.jsx("div", {
                className: "flex gap-1",
                children: Array(5).fill(0).map((t, n) => m.jsx(Vu, {
                    className: `h-4 w-4 ${n<e.rating?"text-yellow-400 fill-yellow-400":"text-gray-300"}`
                }, n))
            })]
        })
    }), m.jsxs(oc, {
        children: [m.jsxs("div", {
            className: "flex items-center gap-1 text-sm font-medium text-green-600 mb-2",
            children: [m.jsx(Bs, {
                className: "h-4 w-4"
            }), m.jsxs("span", {
                children: ["Earned: ", e.earned]
            })]
        }), m.jsx("div", {
            className: "text-sm font-medium text-shein-purple mb-2",
            children: e.product
        }), m.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: e.review
        })]
    })]
}), bE = () => {
    const [e, t] = v.useState(0), n = 2, r = Math.ceil( of .length / n), o = of .slice(e * n, (e + 1) * n), i = () => {
        t(l => (l + 1) % r)
    }, s = () => {
        t(l => (l - 1 + r) % r)
    };
    return m.jsx("section", {
        id: "reviews",
        className: "py-16 bg-gradient-to-br from-shein-light to-white",
        children: m.jsxs("div", {
            className: "container px-4 md:px-6",
            children: [m.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-12",
                children: [m.jsx("h2", {
                    className: "text-3xl font-bold tracking-tight mb-4",
                    children: "Success Stories From Our Reviewers"
                }), m.jsx("p", {
                    className: "text-muted-foreground text-lg",
                    children: "Real people earning real rewards for their honest feedback"
                }), m.jsxs("div", {
                    className: "flex items-center justify-center mt-4 bg-green-50 p-3 rounded-lg border border-green-100",
                    children: [m.jsx(Bs, {
                        className: "h-6 w-6 text-green-500 mr-2"
                    }), m.jsxs("p", {
                        className: "text-green-700 font-medium",
                        children: ["Our reviewers have earned over ", m.jsx("span", {
                            className: "font-bold",
                            children: "$2.4 million"
                        }), " in gift cards"]
                    })]
                })]
            }), m.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                children: o.map(l => m.jsx(kE, {
                    review: l
                }, l.id))
            }), m.jsxs("div", {
                className: "flex justify-center gap-2",
                children: [m.jsx(Ht, {
                    variant: "outline",
                    size: "icon",
                    onClick: s,
                    className: "rounded-full",
                    children: m.jsx(ow, {
                        className: "h-4 w-4"
                    })
                }), Array(r).fill(0).map((l, a) => m.jsx(Ht, {
                    variant: a === e ? "default" : "outline",
                    className: `w-10 h-10 rounded-full ${a===e?"bg-shein-pink hover:bg-shein-purple":""}`,
                    onClick: () => t(a),
                    children: a + 1
                }, a)), m.jsx(Ht, {
                    variant: "outline",
                    size: "icon",
                    onClick: i,
                    className: "rounded-full",
                    children: m.jsx(iw, {
                        className: "h-4 w-4"
                    })
                })]
            })]
        })
    })
}, sf = ["Emily", "Sophia", "Olivia", "Emma", "Ava", "Isabella", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail", "Ella", "Elizabeth", "Sofia", "Madison", "Scarlett", "Victoria", "Aria", "Grace", "Chloe", "Camila", "Penelope", "Riley", "Layla", "Zoey", "Nora", "Lily", "Eleanor", "Hannah", "Lillian", "Addison", "Aubrey", "Ellie", "Stella", "Natalie", "Zoe", "Leah", "Hazel", "Violet", "Aurora", "Savannah", "Audrey", "Brooklyn", "Bella"], lf = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Columbus", "Indianapolis", "Seattle", "Denver", "Boston", "Nashville", "Portland"], NE = () => sf[Math.floor(Math.random() * sf.length)], PE = () => lf[Math.floor(Math.random() * lf.length)], TE = () => Math.floor(Math.random() * 451) + 300, RE = e => e.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
}), jE = () => {
    v.useEffect(() => {
        t();
        const n = setInterval(() => {
            t()
        }, 15e3);
        return () => clearInterval(n)
    }, []);
    const e = () => {
            const n = [m.jsx(Bs, {
                className: "h-5 w-5 text-green-500"
            }), m.jsx(cw, {
                className: "h-5 w-5 text-purple-500"
            }), m.jsx(aw, {
                className: "h-5 w-5 text-pink-500"
            }), m.jsx(Vu, {
                className: "h-5 w-5 text-amber-500"
            })];
            return n[Math.floor(Math.random() * n.length)]
        },
        t = () => {
            const n = NE(),
                r = PE(),
                o = TE();
            d1(m.jsx("div", {
                className: "flex items-center",
                children: m.jsxs("div", {
                    className: "flex flex-col",
                    children: [m.jsxs("span", {
                        className: "font-semibold text-shein-darkpurple",
                        children: [n, " from ", r]
                    }), m.jsxs("div", {
                        className: "flex items-center",
                        children: [m.jsx("span", {
                            children: "just earned "
                        }), m.jsx("span", {
                            className: "font-bold text-green-600 ml-1",
                            children: RE(o)
                        }), m.jsx("span", {
                            className: "text-xs ml-2 text-green-700",
                            children: "reviewing products!"
                        })]
                    })]
                })
            }), {
                icon: e(),
                position: "top-center",
                duration: 5e3,
                className: "border-l-4 border-shein-pink bg-gradient-to-r from-white to-pink-50"
            })
        };
    return null
}, AE = [{
    title: "Dresses",
    items: "2,543",
    reviews: "12,345",
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
    title: "Tops",
    items: "1,876",
    reviews: "9,231",
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
    title: "Bottoms",
    items: "1,345",
    reviews: "7,654",
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    image: "https://images.unsplash.com/photo-1634564235572-cd6f37694266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym90dG9tc3xlbnwwfHwwfHx8MA%3D%3D"
}, {
    title: "Shoes",
    items: "987",
    reviews: "5,432",
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}, {
    title: "Accessories",
    items: "1,234",
    reviews: "6,789",
    color: "bg-gradient-to-br from-violet-400 to-violet-600",
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    title: "Beauty",
    items: "765",
    reviews: "3,456",
    color: "bg-gradient-to-br from-rose-400 to-rose-600",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}], _E = () => m.jsx("section", {
    id: "categories",
    className: "py-16 bg-white",
    children: m.jsxs("div", {
        className: "container px-4 md:px-6",
        children: [m.jsxs("div", {
            className: "text-center max-w-3xl mx-auto mb-12",
            children: [m.jsx("div", {
                className: "inline-block bg-shein-light px-4 py-1 rounded-full text-sm font-medium text-shein-purple border border-shein-purple/20 shadow-sm mb-4",
                children: "Popular Categories"
            }), m.jsx("h2", {
                className: "text-3xl md:text-4xl font-bold tracking-tight mb-4",
                children: "Find Reviews By Category"
            }), m.jsx("p", {
                className: "text-muted-foreground text-lg",
                children: "Browse thousands of authentic reviews across Shein's popular product categories"
            })]
        }), m.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
            children: AE.map((e, t) => m.jsxs(rc, {
                className: "overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 border-none shadow-md group",
                children: [m.jsxs("div", {
                    className: "h-40 relative overflow-hidden",
                    children: [m.jsx("div", {
                        className: `absolute inset-0 ${e.color} opacity-80 group-hover:opacity-90 transition-opacity`
                    }), m.jsx("img", {
                        src: e.image,
                        alt: e.title,
                        className: "w-full h-full object-cover mix-blend-overlay"
                    }), m.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    }), m.jsxs("div", {
                        className: "absolute bottom-4 left-4 right-4 text-white",
                        children: [m.jsx("h3", {
                            className: "text-2xl font-bold",
                            children: e.title
                        }), m.jsxs("div", {
                            className: "flex justify-between text-sm text-white/80 mt-1",
                            children: [m.jsxs("span", {
                                children: [e.items, " products"]
                            }), m.jsxs("span", {
                                children: [e.reviews, " reviews"]
                            })]
                        })]
                    })]
                }), m.jsx(oc, {
                    className: "p-4 bg-white flex justify-end",
                    children: m.jsx("a", {
                        href: "https://glstrk.com/?offer_ids=NDA3NSwxMjI0LDEzNTg%3D&affiliate_id=MTI4OTAz&source=c2hlaW4%3D",
                        children: m.jsxs(Ht, {
                            variant: "ghost",
                            className: "p-0 h-auto text-shein-purple hover:text-shein-pink",
                            children: ["Browse Reviews", m.jsx(Oa, {
                                className: "ml-2 h-4 w-4"
                            })]
                        })
                    })
                })]
            }, t))
        }), m.jsx("div", {
            className: "text-center mt-12",
            children: m.jsx("a", {
                href: "https://glstrk.com/?offer_ids=NDA3NSwxMjI0LDEzNTg%3D&affiliate_id=MTI4OTAz&source=c2hlaW4%3D",
                children: m.jsxs(Ht, {
                    className: "rounded-full bg-shein-pink hover:bg-shein-purple text-white px-8 py-6 shadow-md hover:shadow-lg transition-all",
                    size: "lg",
                    children: ["View All Categories", m.jsx(Oa, {
                        className: "ml-2 h-5 w-5"
                    })]
                })
            })
        })]
    })
}), OE = () => m.jsxs("section", {
    className: "py-20 bg-gradient-to-r from-shein-pink to-shein-purple text-white overflow-hidden relative",
    children: [m.jsx("div", {
        className: "absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] opacity-10 bg-cover bg-center"
    }), m.jsx("div", {
        className: "container px-4 md:px-6 relative",
        children: m.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: m.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                children: [m.jsxs("div", {
                    className: "space-y-6",
                    children: [m.jsx("div", {
                        className: "inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-white border border-white/20 shadow-sm mb-2",
                        children: "Join Our Community"
                    }), m.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold",
                        children: "Become a Trusted Shein Reviewer Today"
                    }), m.jsx("p", {
                        className: "text-lg text-white/90",
                        children: "Help millions of shoppers make confident decisions while earning rewards for your helpful contributions."
                    }), m.jsxs("div", {
                        className: "space-y-4",
                        children: [m.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [m.jsx("div", {
                                className: "bg-white/20 p-2 rounded-full",
                                children: m.jsx(Vu, {
                                    className: "h-5 w-5 text-white"
                                })
                            }), m.jsxs("div", {
                                children: [m.jsx("h4", {
                                    className: "font-medium",
                                    children: "Share Your Experience"
                                }), m.jsx("p", {
                                    className: "text-sm text-white/80",
                                    children: "Post photos and detailed feedback about your purchases"
                                })]
                            })]
                        }), m.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [m.jsx("div", {
                                className: "bg-white/20 p-2 rounded-full",
                                children: m.jsx(lw, {
                                    className: "h-5 w-5 text-white"
                                })
                            }), m.jsxs("div", {
                                children: [m.jsx("h4", {
                                    className: "font-medium",
                                    children: "Quick & Easy"
                                }), m.jsx("p", {
                                    className: "text-sm text-white/80",
                                    children: "Our simple review process takes less than 2 minutes"
                                })]
                            })]
                        }), m.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [m.jsx("div", {
                                className: "bg-white/20 p-2 rounded-full",
                                children: m.jsx(um, {
                                    className: "h-5 w-5 text-white"
                                })
                            }), m.jsxs("div", {
                                children: [m.jsx("h4", {
                                    className: "font-medium",
                                    children: "Earn Rewards"
                                }), m.jsx("p", {
                                    className: "text-sm text-white/80",
                                    children: "Get points for every helpful review you submit"
                                })]
                            })]
                        }), m.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [m.jsx("div", {
                                className: "bg-white/20 p-2 rounded-full",
                                children: m.jsx(uw, {
                                    className: "h-5 w-5 text-white"
                                })
                            }), m.jsxs("div", {
                                children: [m.jsx("h4", {
                                    className: "font-medium",
                                    children: "Trusted Platform"
                                }), m.jsx("p", {
                                    className: "text-sm text-white/80",
                                    children: "Join our community of 25,000+ verified reviewers"
                                })]
                            })]
                        })]
                    })]
                }), m.jsxs("div", {
                    className: "bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20",
                    children: [m.jsx("h3", {
                        className: "text-2xl font-bold mb-6 text-center",
                        children: "Sign Up as Reviewer"
                    }), m.jsx("form", {
                        action: "https://glstrk.com/?offer_ids=NDA3NSwxMjI0LDEzNTg%3D&affiliate_id=MTI4OTAz&source=c2hlaW4%3D",
                        method: "get",
                        children: m.jsxs("div", {
                            className: "space-y-4",
                            children: [m.jsx("div", {
                                children: m.jsx("input", {
                                    type: "text",
                                    placeholder: "Your Name",
                                    className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                                })
                            }), m.jsx("div", {
                                children: m.jsx("input", {
                                    type: "email",
                                    placeholder: "Email Address",
                                    className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                                })
                            }), m.jsx("div", {
                                children: m.jsx("input", {
                                    type: "password",
                                    placeholder: "Create Password",
                                    className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                                })
                            }), m.jsx("div", {
                                className: "pt-4",
                                children: m.jsxs(Ht, {
                                    type: "submit",
                                    className: "w-full rounded-xl bg-white text-shein-pink hover:bg-gray-100 hover:text-shein-purple px-8 py-6 shadow-lg",
                                    size: "lg",
                                    children: ["Create Account", m.jsx(Oa, {
                                        className: "ml-2 h-5 w-5"
                                    })]
                                })
                            })]
                        })
                    }), m.jsxs("p", {
                        className: "text-sm text-center text-white/70 pt-4",
                        children: ["Already a reviewer? ", m.jsx("a", {
                            href: "https://glstrk.com/?offer_ids=NDA3NSwxMjI0LDEzNTg%3D&affiliate_id=MTI4OTAz&source=c2hlaW4%3D",
                            className: "text-white underline hover:text-white/90",
                            children: "Sign in"
                        })]
                    })]
                })]
            })
        })
    })]
}), LE = () => m.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800",
    children: [m.jsx(jE, {}), m.jsxs("main", {
        children: [m.jsx(gE, {}), m.jsx(vE, {}), m.jsx(bE, {}), m.jsx(_E, {}), m.jsx(OE, {})]
    }), m.jsx("footer", {
        className: "py-4 text-center text-xs text-gray-500 border-t border-gray-200 mt-8",
        children: m.jsx("p", {
            children: "© 2023 SHEIN Reviewer. All rights reserved."
        })
    })]
}), ME = () => {
    const e = pg();
    return v.useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }, [e.pathname]), m.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: m.jsxs("div", {
            className: "text-center",
            children: [m.jsx("h1", {
                className: "text-4xl font-bold mb-4",
                children: "404"
            }), m.jsx("p", {
                className: "text-xl text-gray-600 mb-4",
                children: "Oops! Page not found"
            }), m.jsx("a", {
                href: "/",
                className: "text-blue-500 hover:text-blue-700 underline",
                children: "Return to Home"
            })]
        })
    })
}, IE = new TS, DE = () => m.jsx(jS, {
    client: IE,
    children: m.jsxs(sS, {
        children: [m.jsx(Kw, {}), m.jsx(C1, {}), m.jsx(hE, {
            children: m.jsxs(dE, {
                children: [m.jsx(Va, {
                    path: "/",
                    element: m.jsx(LE, {})
                }), m.jsx(Va, {
                    path: "*",
                    element: m.jsx(ME, {})
                })]
            })
        })]
    })
});
jh(document.getElementById("root")).render(m.jsx(DE, {}));