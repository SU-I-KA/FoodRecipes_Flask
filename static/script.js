!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length
          , n = re.type(t);
        return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function i(t, e, n) {
        if (re.isFunction(e))
            return re.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return re.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (pe.test(e))
                return re.filter(e, t, n);
            e = re.filter(e, t)
        }
        return re.grep(t, function(t) {
            return re.inArray(t, e) >= 0 !== n
        })
    }
    function o(t, e) {
        do
            t = t[e];
        while (t && 1 !== t.nodeType);return t
    }
    function r(t) {
        var e = we[t] = {};
        return re.each(t.match(xe) || [], function(t, n) {
            e[n] = !0
        }),
        e
    }
    function a() {
        me.addEventListener ? (me.removeEventListener("DOMContentLoaded", s, !1),
        t.removeEventListener("load", s, !1)) : (me.detachEvent("onreadystatechange", s),
        t.detachEvent("onload", s))
    }
    function s() {
        (me.addEventListener || "load" === event.type || "complete" === me.readyState) && (a(),
        re.ready())
    }
    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Se, "-$1").toLowerCase();
            if (n = t.getAttribute(i),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? re.parseJSON(n) : n
                } catch (o) {}
                re.data(t, e, n)
            } else
                n = void 0
        }
        return n
    }
    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, n, i) {
        if (re.acceptData(t)) {
            var o, r, a = re.expando, s = t.nodeType, l = s ? re.cache : t, u = s ? t[a] : t[a] && a;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e)
                return u || (u = s ? t[a] = V.pop() || re.guid++ : a),
                l[u] || (l[u] = s ? {} : {
                    toJSON: re.noop
                }),
                ("object" == typeof e || "function" == typeof e) && (i ? l[u] = re.extend(l[u], e) : l[u].data = re.extend(l[u].data, e)),
                r = l[u],
                i || (r.data || (r.data = {}),
                r = r.data),
                void 0 !== n && (r[re.camelCase(e)] = n),
                "string" == typeof e ? (o = r[e],
                null == o && (o = r[re.camelCase(e)])) : o = r,
                o
        }
    }
    function d(t, e, n) {
        if (re.acceptData(t)) {
            var i, o, r = t.nodeType, a = r ? re.cache : t, s = r ? t[re.expando] : re.expando;
            if (a[s]) {
                if (e && (i = n ? a[s] : a[s].data)) {
                    re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e),
                    e = e in i ? [e] : e.split(" ")),
                    o = e.length;
                    for (; o--; )
                        delete i[e[o]];
                    if (n ? !u(i) : !re.isEmptyObject(i))
                        return
                }
                (n || (delete a[s].data,
                u(a[s]))) && (r ? re.cleanData([t], !0) : ie.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    function f() {
        return !0
    }
    function p() {
        return !1
    }
    function h() {
        try {
            return me.activeElement
        } catch (t) {}
    }
    function m(t) {
        var e = Oe.split("|")
          , n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length; )
                n.createElement(e.pop());
        return n
    }
    function g(t, e) {
        var n, i, o = 0, r = typeof t.getElementsByTagName !== Ee ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ee ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [],
            n = t.childNodes || t; null != (i = n[o]); o++)
                !e || re.nodeName(i, e) ? r.push(i) : re.merge(r, g(i, e));
        return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], r) : r
    }
    function v(t) {
        Ae.test(t.type) && (t.defaultChecked = t.checked)
    }
    function y(t, e) {
        return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function b(t) {
        return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function x(t) {
        var e = Ve.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function w(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++)
            re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
    }
    function C(t, e) {
        if (1 === e.nodeType && re.hasData(t)) {
            var n, i, o, r = re._data(t), a = re._data(e, r), s = r.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (i = 0,
                    o = s[n].length; o > i; i++)
                        re.event.add(e, n, s[n][i])
            }
            a.data && (a.data = re.extend({}, a.data))
        }
    }
    function T(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(),
            !ie.noCloneEvent && e[re.expando]) {
                o = re._data(e);
                for (i in o.events)
                    re.removeEvent(e, i, o.handle);
                e.removeAttribute(re.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text,
            x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML),
            ie.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
            e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    function E(e, n) {
        var i = re(n.createElement(e)).appendTo(n.body)
          , o = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(i[0]).display : re.css(i[0], "display");
        return i.detach(),
        o
    }
    function k(t) {
        var e = me
          , n = tn[t];
        return n || (n = E(t, e),
        "none" !== n && n || (Ze = (Ze || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
        e = (Ze[0].contentWindow || Ze[0].contentDocument).document,
        e.write(),
        e.close(),
        n = E(t, e),
        Ze.detach()),
        tn[t] = n),
        n
    }
    function S(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n)
                    return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function $(t, e) {
        if (e in t)
            return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = hn.length; o--; )
            if (e = hn[o] + n,
            e in t)
                return e;
        return i
    }
    function N(t, e) {
        for (var n, i, o, r = [], a = 0, s = t.length; s > a; a++)
            i = t[a],
            i.style && (r[a] = re._data(i, "olddisplay"),
            n = i.style.display,
            e ? (r[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && De(i) && (r[a] = re._data(i, "olddisplay", k(i.nodeName)))) : r[a] || (o = De(i),
            (n && "none" !== n || !o) && re._data(i, "olddisplay", o ? n : re.css(i, "display"))));
        for (a = 0; s > a; a++)
            i = t[a],
            i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
        return t
    }
    function D(t, e, n) {
        var i = cn.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function j(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2)
            "margin" === n && (a += re.css(t, n + Ne[r], !0, o)),
            i ? ("content" === n && (a -= re.css(t, "padding" + Ne[r], !0, o)),
            "margin" !== n && (a -= re.css(t, "border" + Ne[r] + "Width", !0, o))) : (a += re.css(t, "padding" + Ne[r], !0, o),
            "padding" !== n && (a += re.css(t, "border" + Ne[r] + "Width", !0, o)));
        return a
    }
    function A(t, e, n) {
        var i = !0
          , o = "width" === e ? t.offsetWidth : t.offsetHeight
          , r = en(t)
          , a = ie.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = nn(t, e, r),
            (0 > o || null == o) && (o = t.style[e]),
            rn.test(o))
                return o;
            i = a && (ie.boxSizingReliable() || o === t.style[e]),
            o = parseFloat(o) || 0
        }
        return o + j(t, e, n || (a ? "border" : "content"), i, r) + "px"
    }
    function L(t, e, n, i, o) {
        return new L.prototype.init(t,e,n,i,o)
    }
    function H() {
        return setTimeout(function() {
            mn = void 0
        }),
        mn = re.now()
    }
    function F(t, e) {
        var n, i = {
            height: t
        }, o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e)
            n = Ne[o],
            i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function _(t, e, n) {
        for (var i, o = (wn[e] || []).concat(wn["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, e, t))
                return i
    }
    function q(t, e, n) {
        var i, o, r, a, s, l, u, c, d = this, f = {}, p = t.style, h = t.nodeType && De(t), m = re._data(t, "fxshow");
        n.queue || (s = re._queueHooks(t, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        d.always(function() {
            d.always(function() {
                s.unqueued--,
                re.queue(t, "fx").length || s.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        u = re.css(t, "display"),
        c = k(t.nodeName),
        "none" === u && (u = c),
        "inline" === u && "none" === re.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== c ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        ie.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (o = e[i],
            vn.exec(o)) {
                if (delete e[i],
                r = r || "toggle" === o,
                o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i])
                        continue;
                    h = !0
                }
                f[i] = m && m[i] || re.style(t, i)
            }
        if (!re.isEmptyObject(f)) {
            m ? "hidden"in m && (h = m.hidden) : m = re._data(t, "fxshow", {}),
            r && (m.hidden = !h),
            h ? re(t).show() : d.done(function() {
                re(t).hide()
            }),
            d.done(function() {
                var e;
                re._removeData(t, "fxshow");
                for (e in f)
                    re.style(t, e, f[e])
            });
            for (i in f)
                a = _(h ? m[i] : 0, i, d),
                i in m || (m[i] = a.start,
                h && (a.end = a.start,
                a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function O(t, e) {
        var n, i, o, r, a;
        for (n in t)
            if (i = re.camelCase(n),
            o = e[i],
            r = t[n],
            re.isArray(r) && (o = r[1],
            r = t[n] = r[0]),
            n !== i && (t[i] = r,
            delete t[n]),
            a = re.cssHooks[i],
            a && "expand"in a) {
                r = a.expand(r),
                delete t[i];
                for (n in r)
                    n in t || (t[n] = r[n],
                    e[n] = o)
            } else
                e[i] = o
    }
    function M(t, e, n) {
        var i, o, r = 0, a = xn.length, s = re.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var e = mn || H(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, a = 0, l = u.tweens.length; l > a; a++)
                u.tweens[a].run(r);
            return s.notifyWith(t, [u, r, n]),
            1 > r && l ? n : (s.resolveWith(t, [u]),
            !1)
        }, u = s.promise({
            elem: t,
            props: re.extend({}, e),
            opts: re.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: mn || H(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = re.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0
                  , i = e ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; i > n; n++)
                    u.tweens[n].run(1);
                return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]),
                this
            }
        }), c = u.props;
        for (O(c, u.opts.specialEasing); a > r; r++)
            if (i = xn[r].call(u, t, c, u.opts))
                return i;
        return re.map(c, _, u),
        re.isFunction(u.opts.start) && u.opts.start.call(t, u),
        re.fx.timer(re.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function P(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var i, o = 0, r = e.toLowerCase().match(xe) || [];
            if (re.isFunction(n))
                for (; i = r[o++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                    (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function B(t, e, n, i) {
        function o(s) {
            var l;
            return r[s] = !0,
            re.each(t[s] || [], function(t, s) {
                var u = s(e, n, i);
                return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u),
                o(u),
                !1)
            }),
            l
        }
        var r = {}
          , a = t === Un;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }
    function R(t, e) {
        var n, i, o = re.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && re.extend(!0, t, n),
        t
    }
    function W(t, e, n) {
        for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)
            for (a in s)
                if (s[a] && s[a].test(o)) {
                    l.unshift(a);
                    break
                }
        if (l[0]in n)
            r = l[0];
        else {
            for (a in n) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                i || (i = a)
            }
            r = r || i
        }
        return r ? (r !== l[0] && l.unshift(r),
        n[r]) : void 0
    }
    function I(t, e, n, i) {
        var o, r, a, s, l, u = {}, c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters)
                u[a.toLowerCase()] = t.converters[a];
        for (r = c.shift(); r; )
            if (t.responseFields[r] && (n[t.responseFields[r]] = e),
            !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            l = r,
            r = c.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (a = u[l + " " + r] || u["* " + r],
                    !a)
                        for (o in u)
                            if (s = o.split(" "),
                            s[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[o] : u[o] !== !0 && (r = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && t["throws"])
                            e = a(e);
                        else
                            try {
                                e = a(e)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function z(t, e, n, i) {
        var o;
        if (re.isArray(e))
            re.each(e, function(e, o) {
                n || Jn.test(t) ? i(t, o) : z(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            });
        else if (n || "object" !== re.type(e))
            i(t, e);
        else
            for (o in e)
                z(t + "[" + o + "]", e[o], n, i)
    }
    function U() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    function X() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }
    function Q(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var V = []
      , J = V.slice
      , Y = V.concat
      , G = V.push
      , K = V.indexOf
      , Z = {}
      , te = Z.toString
      , ee = Z.hasOwnProperty
      , ne = "".trim
      , ie = {}
      , oe = "1.11.0"
      , re = function(t, e) {
        return new re.fn.init(t,e)
    }
      , ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , se = /^-ms-/
      , le = /-([\da-z])/gi
      , ue = function(t, e) {
        return e.toUpperCase()
    };
    re.fn = re.prototype = {
        jquery: oe,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : J.call(this)
        },
        pushStack: function(t) {
            var e = re.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t, e) {
            return re.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(re.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: V.sort,
        splice: V.splice
    },
    re.extend = re.fn.extend = function() {
        var t, e, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || re.isFunction(a) || (a = {}),
        s === l && (a = this,
        s--); l > s; s++)
            if (null != (o = arguments[s]))
                for (i in o)
                    t = a[i],
                    n = o[i],
                    a !== n && (u && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1,
                    r = t && re.isArray(t) ? t : []) : r = t && re.isPlainObject(t) ? t : {},
                    a[i] = re.extend(u, r, n)) : void 0 !== n && (a[i] = n));
        return a
    }
    ,
    re.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === re.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === re.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return t - parseFloat(t) >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (ie.ownLast)
                for (e in t)
                    return ee.call(t, e);
            for (e in t)
                ;
            return void 0 === e || ee.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && re.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            }
            )(e)
        },
        camelCase: function(t) {
            return t.replace(se, "ms-").replace(le, ue)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var o, r = 0, a = t.length, s = n(t);
            if (i) {
                if (s)
                    for (; a > r && (o = e.apply(t[r], i),
                    o !== !1); r++)
                        ;
                else
                    for (r in t)
                        if (o = e.apply(t[r], i),
                        o === !1)
                            break
            } else if (s)
                for (; a > r && (o = e.call(t[r], r, t[r]),
                o !== !1); r++)
                    ;
            else
                for (r in t)
                    if (o = e.call(t[r], r, t[r]),
                    o === !1)
                        break;
            return t
        },
        trim: ne && !ne.call("\ufeff\xa0") ? function(t) {
            return null == t ? "" : ne.call(t)
        }
        : function(t) {
            return null == t ? "" : (t + "").replace(ae, "")
        }
        ,
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : G.call(i, t)),
            i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (K)
                    return K.call(e, t, n);
                for (i = e.length,
                n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i; )
                t[o++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i]; )
                    t[o++] = e[i++];
            return t.length = o,
            t
        },
        grep: function(t, e, n) {
            for (var i, o = [], r = 0, a = t.length, s = !n; a > r; r++)
                i = !e(t[r], r),
                i !== s && o.push(t[r]);
            return o
        },
        map: function(t, e, i) {
            var o, r = 0, a = t.length, s = n(t), l = [];
            if (s)
                for (; a > r; r++)
                    o = e(t[r], r, i),
                    null != o && l.push(o);
            else
                for (r in t)
                    o = e(t[r], r, i),
                    null != o && l.push(o);
            return Y.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            return "string" == typeof e && (o = t[e],
            e = t,
            t = o),
            re.isFunction(t) ? (n = J.call(arguments, 2),
            i = function() {
                return t.apply(e || this, n.concat(J.call(arguments)))
            }
            ,
            i.guid = t.guid = t.guid || re.guid++,
            i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }),
    re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ce = function(t) {
        function e(t, e, n, i) {
            var o, r, a, s, l, u, d, h, m, g;
            if ((e ? e.ownerDocument || e : B) !== L && A(e),
            e = e || L,
            n = n || [],
            !t || "string" != typeof t)
                return n;
            if (1 !== (s = e.nodeType) && 9 !== s)
                return [];
            if (F && !i) {
                if (o = ye.exec(t))
                    if (a = o[1]) {
                        if (9 === s) {
                            if (r = e.getElementById(a),
                            !r || !r.parentNode)
                                return n;
                            if (r.id === a)
                                return n.push(r),
                                n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && M(e, r) && r.id === a)
                            return n.push(r),
                            n
                    } else {
                        if (o[2])
                            return Z.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((a = o[3]) && T.getElementsByClassName && e.getElementsByClassName)
                            return Z.apply(n, e.getElementsByClassName(a)),
                            n
                    }
                if (T.qsa && (!_ || !_.test(t))) {
                    if (h = d = P,
                    m = e,
                    g = 9 === s && t,
                    1 === s && "object" !== e.nodeName.toLowerCase()) {
                        for (u = f(t),
                        (d = e.getAttribute("id")) ? h = d.replace(xe, "\\$&") : e.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        l = u.length; l--; )
                            u[l] = h + p(u[l]);
                        m = be.test(t) && c(e.parentNode) || e,
                        g = u.join(",")
                    }
                    if (g)
                        try {
                            return Z.apply(n, m.querySelectorAll(g)),
                            n
                        } catch (v) {} finally {
                            d || e.removeAttribute("id")
                        }
                }
            }
            return w(t.replace(le, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > E.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[P] = !0,
            t
        }
        function o(t) {
            var e = L.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function r(t, e) {
            for (var n = t.split("|"), i = t.length; i--; )
                E.attrHandle[n[i]] = e
        }
        function a(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function s(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return i(function(e) {
                return e = +e,
                i(function(n, i) {
                    for (var o, r = t([], n.length, e), a = r.length; a--; )
                        n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function c(t) {
            return t && typeof t.getElementsByTagName !== Q && t
        }
        function d() {}
        function f(t, n) {
            var i, o, r, a, s, l, u, c = z[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = t,
            l = [],
            u = E.preFilter; s; ) {
                (!i || (o = ue.exec(s))) && (o && (s = s.slice(o[0].length) || s),
                l.push(r = [])),
                i = !1,
                (o = ce.exec(s)) && (i = o.shift(),
                r.push({
                    value: i,
                    type: o[0].replace(le, " ")
                }),
                s = s.slice(i.length));
                for (a in E.filter)
                    !(o = he[a].exec(s)) || u[a] && !(o = u[a](o)) || (i = o.shift(),
                    r.push({
                        value: i,
                        type: a,
                        matches: o
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return n ? s.length : s ? e.error(t) : z(t, l).slice(0)
        }
        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function h(t, e, n) {
            var i = e.dir
              , o = n && "parentNode" === i
              , r = W++;
            return e.first ? function(e, n, r) {
                for (; e = e[i]; )
                    if (1 === e.nodeType || o)
                        return t(e, n, r)
            }
            : function(e, n, a) {
                var s, l, u = [R, r];
                if (a) {
                    for (; e = e[i]; )
                        if ((1 === e.nodeType || o) && t(e, n, a))
                            return !0
                } else
                    for (; e = e[i]; )
                        if (1 === e.nodeType || o) {
                            if (l = e[P] || (e[P] = {}),
                            (s = l[i]) && s[0] === R && s[1] === r)
                                return u[2] = s[2];
                            if (l[i] = u,
                            u[2] = t(e, n, a))
                                return !0
                        }
            }
        }
        function m(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--; )
                    if (!t[o](e, n, i))
                        return !1;
                return !0
            }
            : t[0]
        }
        function g(t, e, n, i, o) {
            for (var r, a = [], s = 0, l = t.length, u = null != e; l > s; s++)
                (r = t[s]) && (!n || n(r, i, o)) && (a.push(r),
                u && e.push(s));
            return a
        }
        function v(t, e, n, o, r, a) {
            return o && !o[P] && (o = v(o)),
            r && !r[P] && (r = v(r, a)),
            i(function(i, a, s, l) {
                var u, c, d, f = [], p = [], h = a.length, m = i || x(e || "*", s.nodeType ? [s] : s, []), v = !t || !i && e ? m : g(m, f, t, s, l), y = n ? r || (i ? t : h || o) ? [] : a : v;
                if (n && n(v, y, s, l),
                o)
                    for (u = g(y, p),
                    o(u, [], s, l),
                    c = u.length; c--; )
                        (d = u[c]) && (y[p[c]] = !(v[p[c]] = d));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (u = [],
                            c = y.length; c--; )
                                (d = y[c]) && u.push(v[c] = d);
                            r(null, y = [], u, l)
                        }
                        for (c = y.length; c--; )
                            (d = y[c]) && (u = r ? ee.call(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else
                    y = g(y === a ? y.splice(h, y.length) : y),
                    r ? r(null, a, y, l) : Z.apply(a, y)
            })
        }
        function y(t) {
            for (var e, n, i, o = t.length, r = E.relative[t[0].type], a = r || E.relative[" "], s = r ? 1 : 0, l = h(function(t) {
                return t === e
            }, a, !0), u = h(function(t) {
                return ee.call(e, t) > -1
            }, a, !0), c = [function(t, n, i) {
                return !r && (i || n !== N) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
            }
            ]; o > s; s++)
                if (n = E.relative[t[s].type])
                    c = [h(m(c), n)];
                else {
                    if (n = E.filter[t[s].type].apply(null, t[s].matches),
                    n[P]) {
                        for (i = ++s; o > i && !E.relative[t[i].type]; i++)
                            ;
                        return v(s > 1 && m(c), s > 1 && p(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > s && y(t.slice(s, i)), o > i && y(t = t.slice(i)), o > i && p(t))
                    }
                    c.push(n)
                }
            return m(c)
        }
        function b(t, n) {
            var o = n.length > 0
              , r = t.length > 0
              , a = function(i, a, s, l, u) {
                var c, d, f, p = 0, h = "0", m = i && [], v = [], y = N, b = i || r && E.find.TAG("*", u), x = R += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (N = a !== L && a); h !== w && null != (c = b[h]); h++) {
                    if (r && c) {
                        for (d = 0; f = t[d++]; )
                            if (f(c, a, s)) {
                                l.push(c);
                                break
                            }
                        u && (R = x)
                    }
                    o && ((c = !f && c) && p--,
                    i && m.push(c))
                }
                if (p += h,
                o && h !== p) {
                    for (d = 0; f = n[d++]; )
                        f(m, v, a, s);
                    if (i) {
                        if (p > 0)
                            for (; h--; )
                                m[h] || v[h] || (v[h] = G.call(l));
                        v = g(v)
                    }
                    Z.apply(l, v),
                    u && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                }
                return u && (R = x,
                N = y),
                m
            };
            return o ? i(a) : a
        }
        function x(t, n, i) {
            for (var o = 0, r = n.length; r > o; o++)
                e(t, n[o], i);
            return i
        }
        function w(t, e, n, i) {
            var o, r, a, s, l, u = f(t);
            if (!i && 1 === u.length) {
                if (r = u[0] = u[0].slice(0),
                r.length > 2 && "ID" === (a = r[0]).type && T.getById && 9 === e.nodeType && F && E.relative[r[1].type]) {
                    if (e = (E.find.ID(a.matches[0].replace(we, Ce), e) || [])[0],
                    !e)
                        return n;
                    t = t.slice(r.shift().value.length)
                }
                for (o = he.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o],
                !E.relative[s = a.type]); )
                    if ((l = E.find[s]) && (i = l(a.matches[0].replace(we, Ce), be.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(o, 1),
                        t = i.length && p(r),
                        !t)
                            return Z.apply(n, i),
                            n;
                        break
                    }
            }
            return $(t, u)(i, e, !F, n, be.test(t) && c(e.parentNode) || e),
            n
        }
        var C, T, E, k, S, $, N, D, j, A, L, H, F, _, q, O, M, P = "sizzle" + -new Date, B = t.document, R = 0, W = 0, I = n(), z = n(), U = n(), X = function(t, e) {
            return t === e && (j = !0),
            0
        }, Q = "undefined", V = 1 << 31, J = {}.hasOwnProperty, Y = [], G = Y.pop, K = Y.push, Z = Y.push, te = Y.slice, ee = Y.indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] === t)
                    return e;
            return -1
        }
        , ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", oe = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = oe.replace("w", "w#"), ae = "\\[" + ie + "*(" + oe + ")" + ie + "*(?:([*^$|!~]?=)" + ie + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + re + ")|)|)" + ie + "*\\]", se = ":(" + oe + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ae.replace(3, 8) + ")*)|.*)\\)|)", le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$","g"), ue = new RegExp("^" + ie + "*," + ie + "*"), ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]","g"), fe = new RegExp(se), pe = new RegExp("^" + re + "$"), he = {
            ID: new RegExp("^#(" + oe + ")"),
            CLASS: new RegExp("^\\.(" + oe + ")"),
            TAG: new RegExp("^(" + oe.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ne + ")$","i"),
            needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)","i")
        }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, xe = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)","ig"), Ce = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        };
        try {
            Z.apply(Y = te.call(B.childNodes), B.childNodes),
            Y[B.childNodes.length].nodeType
        } catch (Te) {
            Z = {
                apply: Y.length ? function(t, e) {
                    K.apply(t, te.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        T = e.support = {},
        S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }
        ,
        A = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t : B, i = n.defaultView;
            return n !== L && 9 === n.nodeType && n.documentElement ? (L = n,
            H = n.documentElement,
            F = !S(n),
            i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                A()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                A()
            })),
            T.attributes = o(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            T.getElementsByTagName = o(function(t) {
                return t.appendChild(n.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            T.getElementsByClassName = ve.test(n.getElementsByClassName) && o(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>",
                t.firstChild.className = "i",
                2 === t.getElementsByClassName("i").length
            }),
            T.getById = o(function(t) {
                return H.appendChild(t).id = P,
                !n.getElementsByName || !n.getElementsByName(P).length
            }),
            T.getById ? (E.find.ID = function(t, e) {
                if (typeof e.getElementById !== Q && F) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            E.filter.ID = function(t) {
                var e = t.replace(we, Ce);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete E.find.ID,
            E.filter.ID = function(t) {
                var e = t.replace(we, Ce);
                return function(t) {
                    var n = typeof t.getAttributeNode !== Q && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ),
            E.find.TAG = T.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== Q ? e.getElementsByTagName(t) : void 0
            }
            : function(t, e) {
                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = r[o++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }
            ,
            E.find.CLASS = T.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== Q && F ? e.getElementsByClassName(t) : void 0
            }
            ,
            q = [],
            _ = [],
            (T.qsa = ve.test(n.querySelectorAll)) && (o(function(t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>",
                t.querySelectorAll("[t^='']").length && _.push("[*^$]=" + ie + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || _.push("\\[" + ie + "*(?:value|" + ne + ")"),
                t.querySelectorAll(":checked").length || _.push(":checked")
            }),
            o(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && _.push("name" + ie + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || _.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                _.push(",.*:")
            })),
            (T.matchesSelector = ve.test(O = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(t) {
                T.disconnectedMatch = O.call(t, "div"),
                O.call(t, "[s!='']:x"),
                q.push("!=", se)
            }),
            _ = _.length && new RegExp(_.join("|")),
            q = q.length && new RegExp(q.join("|")),
            e = ve.test(H.compareDocumentPosition),
            M = e || ve.test(H.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            X = e ? function(t, e) {
                if (t === e)
                    return j = !0,
                    0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                1 & i || !T.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === B && M(B, t) ? -1 : e === n || e.ownerDocument === B && M(B, e) ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0 : 4 & i ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return j = !0,
                    0;
                var i, o = 0, r = t.parentNode, s = e.parentNode, l = [t], u = [e];
                if (!r || !s)
                    return t === n ? -1 : e === n ? 1 : r ? -1 : s ? 1 : D ? ee.call(D, t) - ee.call(D, e) : 0;
                if (r === s)
                    return a(t, e);
                for (i = t; i = i.parentNode; )
                    l.unshift(i);
                for (i = e; i = i.parentNode; )
                    u.unshift(i);
                for (; l[o] === u[o]; )
                    o++;
                return o ? a(l[o], u[o]) : l[o] === B ? -1 : u[o] === B ? 1 : 0
            }
            ,
            n) : L
        }
        ,
        e.matches = function(t, n) {
            return e(t, null, null, n)
        }
        ,
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== L && A(t),
            n = n.replace(de, "='$1']"),
            !(!T.matchesSelector || !F || q && q.test(n) || _ && _.test(n)))
                try {
                    var i = O.call(t, n);
                    if (i || T.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (o) {}
            return e(n, L, null, [t]).length > 0
        }
        ,
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== L && A(t),
            M(t, e)
        }
        ,
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== L && A(t);
            var n = E.attrHandle[e.toLowerCase()]
              , i = n && J.call(E.attrHandle, e.toLowerCase()) ? n(t, e, !F) : void 0;
            return void 0 !== i ? i : T.attributes || !F ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }
        ,
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        e.uniqueSort = function(t) {
            var e, n = [], i = 0, o = 0;
            if (j = !T.detectDuplicates,
            D = !T.sortStable && t.slice(0),
            t.sort(X),
            j) {
                for (; e = t[o++]; )
                    e === t[o] && (i = n.push(o));
                for (; i--; )
                    t.splice(n[i], 1)
            }
            return D = null,
            t
        }
        ,
        k = e.getText = function(t) {
            var e, n = "", i = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += k(t)
                } else if (3 === o || 4 === o)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += k(e);
            return n
        }
        ,
        E = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, Ce),
                    t[3] = (t[4] || t[5] || "").replace(we, Ce),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[5] && t[2];
                    return he.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && fe.test(n) && (e = f(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, Ce).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = I[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && I(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Q && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : n ? (r += "",
                        "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3)
                      , a = "last" !== t.slice(-4)
                      , s = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, l) {
                        var u, c, d, f, p, h, m = r !== a ? "nextSibling" : "previousSibling", g = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !l && !s;
                        if (g) {
                            if (r) {
                                for (; m; ) {
                                    for (d = e; d = d[m]; )
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    h = m = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (c = g[P] || (g[P] = {}),
                                u = c[t] || [],
                                p = u[0] === R && u[1],
                                f = u[0] === R && u[2],
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++f && d === e) {
                                        c[t] = [R, p, f];
                                        break
                                    }
                            } else if (y && (u = (e[P] || (e[P] = {}))[t]) && u[0] === R)
                                f = u[1];
                            else
                                for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[t] = [R, f]),
                                d !== e)); )
                                    ;
                            return f -= o,
                            f === i || f % i === 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o, r = E.pseudos[t] || E.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[P] ? r(n) : r.length > 1 ? (o = [t, t, "", n],
                    E.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), a = o.length; a--; )
                            i = ee.call(t, o[a]),
                            t[i] = !(e[i] = o[a])
                    }) : function(t) {
                        return r(t, 0, o)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = []
                      , n = []
                      , o = $(t.replace(le, "$1"));
                    return o[P] ? i(function(t, e, n, i) {
                        for (var r, a = o(t, null, i, []), s = t.length; s--; )
                            (r = a[s]) && (t[s] = !(e[s] = r))
                    }) : function(t, i, r) {
                        return e[0] = t,
                        o(e, null, r, n),
                        !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(we, Ce).toLowerCase(),
                    function(e) {
                        var n;
                        do
                            if (n = F ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === H
                },
                focus: function(t) {
                    return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !E.pseudos.empty(t)
                },
                header: function(t) {
                    return ge.test(t.nodeName)
                },
                input: function(t) {
                    return me.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: u(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0; )
                        t.push(i);
                    return t
                }),
                gt: u(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        },
        E.pseudos.nth = E.pseudos.eq;
        for (C in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            E.pseudos[C] = s(C);
        for (C in {
            submit: !0,
            reset: !0
        })
            E.pseudos[C] = l(C);
        return d.prototype = E.filters = E.pseudos,
        E.setFilters = new d,
        $ = e.compile = function(t, e) {
            var n, i = [], o = [], r = U[t + " "];
            if (!r) {
                for (e || (e = f(t)),
                n = e.length; n--; )
                    r = y(e[n]),
                    r[P] ? i.push(r) : o.push(r);
                r = U(t, b(o, i))
            }
            return r
        }
        ,
        T.sortStable = P.split("").sort(X).join("") === P,
        T.detectDuplicates = !!j,
        A(),
        T.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(L.createElement("div"))
        }),
        o(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        T.attributes && o(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(ne, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
        e
    }(t);
    re.find = ce,
    re.expr = ce.selectors,
    re.expr[":"] = re.expr.pseudos,
    re.unique = ce.uniqueSort,
    re.text = ce.getText,
    re.isXMLDoc = ce.isXML,
    re.contains = ce.contains;
    var de = re.expr.match.needsContext
      , fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , pe = /^.[^:#\[\.,]*$/;
    re.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    re.fn.extend({
        find: function(t) {
            var e, n = [], i = this, o = i.length;
            if ("string" != typeof t)
                return this.pushStack(re(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (re.contains(i[e], this))
                            return !0
                }));
            for (e = 0; o > e; e++)
                re.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? re.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + t : t,
            n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && de.test(t) ? re(t) : t || [], !1).length
        }
    });
    var he, me = t.document, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ve = re.fn.init = function(t, e) {
        var n, i;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ge.exec(t),
            !n || !n[1] && e)
                return !e || e.jquery ? (e || he).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof re ? e[0] : e,
                re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : me, !0)),
                fe.test(n[1]) && re.isPlainObject(e))
                    for (n in e)
                        re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if (i = me.getElementById(n[2]),
            i && i.parentNode) {
                if (i.id !== n[2])
                    return he.find(t);
                this.length = 1,
                this[0] = i
            }
            return this.context = me,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : re.isFunction(t) ? "undefined" != typeof he.ready ? he.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector,
        this.context = t.context),
        re.makeArray(t, this))
    }
    ;
    ve.prototype = re.fn,
    he = re(me);
    var ye = /^(?:parents|prev(?:Until|All))/
      , be = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    re.extend({
        dir: function(t, e, n) {
            for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !re(o).is(n)); )
                1 === o.nodeType && i.push(o),
                o = o[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }),
    re.fn.extend({
        has: function(t) {
            var e, n = re(t, this), i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (re.contains(this, n[e]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], a = de.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? re.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    re.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return re.dir(t, "parentNode", n)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return re.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return re.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return re.sibling(t.firstChild)
        },
        contents: function(t) {
            return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
        }
    }, function(t, e) {
        re.fn[t] = function(n, i) {
            var o = re.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (o = re.filter(i, o)),
            this.length > 1 && (be[t] || (o = re.unique(o)),
            ye.test(t) && (o = o.reverse())),
            this.pushStack(o)
        }
    });
    var xe = /\S+/g
      , we = {};
    re.Callbacks = function(t) {
        t = "string" == typeof t ? we[t] || r(t) : re.extend({}, t);
        var e, n, i, o, a, s, l = [], u = !t.once && [], c = function(r) {
            for (n = t.memory && r,
            i = !0,
            a = s || 0,
            s = 0,
            o = l.length,
            e = !0; l && o > a; a++)
                if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
            e = !1,
            l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
        }, d = {
            add: function() {
                if (l) {
                    var i = l.length;
                    !function r(e) {
                        re.each(e, function(e, n) {
                            var i = re.type(n);
                            "function" === i ? t.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    }(arguments),
                    e ? o = l.length : n && (s = i,
                    c(n))
                }
                return this
            },
            remove: function() {
                return l && re.each(arguments, function(t, n) {
                    for (var i; (i = re.inArray(n, l, i)) > -1; )
                        l.splice(i, 1),
                        e && (o >= i && o--,
                        a >= i && a--)
                }),
                this
            },
            has: function(t) {
                return t ? re.inArray(t, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                o = 0,
                this
            },
            disable: function() {
                return l = u = n = void 0,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = void 0,
                n || d.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(t, n) {
                return !l || i && !u || (n = n || [],
                n = [t, n.slice ? n.slice() : n],
                e ? u.push(n) : c(n)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return d
    }
    ,
    re.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return re.Deferred(function(n) {
                        re.each(e, function(e, r) {
                            var a = re.isFunction(t[e]) && t[e];
                            o[r[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? re.extend(t, i) : i
                }
            }
              , o = {};
            return i.pipe = i.then,
            re.each(e, function(t, r) {
                var a = r[2]
                  , s = r[3];
                i[r[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock),
                o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments),
                    this
                }
                ,
                o[r[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(t) {
            var e, n, i, o = 0, r = J.call(arguments), a = r.length, s = 1 !== a || t && re.isFunction(t.promise) ? a : 0, l = 1 === s ? t : re.Deferred(), u = function(t, n, i) {
                return function(o) {
                    n[t] = this,
                    i[t] = arguments.length > 1 ? J.call(arguments) : o,
                    i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (a > 1)
                for (e = new Array(a),
                n = new Array(a),
                i = new Array(a); a > o; o++)
                    r[o] && re.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --s;
            return s || l.resolveWith(i, r),
            l.promise()
        }
    });
    var Ce;
    re.fn.ready = function(t) {
        return re.ready.promise().done(t),
        this
    }
    ,
    re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? re.readyWait++ : re.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--re.readyWait : !re.isReady) {
                if (!me.body)
                    return setTimeout(re.ready);
                re.isReady = !0,
                t !== !0 && --re.readyWait > 0 || (Ce.resolveWith(me, [re]),
                re.fn.trigger && re(me).trigger("ready").off("ready"))
            }
        }
    }),
    re.ready.promise = function(e) {
        if (!Ce)
            if (Ce = re.Deferred(),
            "complete" === me.readyState)
                setTimeout(re.ready);
            else if (me.addEventListener)
                me.addEventListener("DOMContentLoaded", s, !1),
                t.addEventListener("load", s, !1);
            else {
                me.attachEvent("onreadystatechange", s),
                t.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == t.frameElement && me.documentElement
                } catch (i) {}
                n && n.doScroll && !function o() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(o, 50)
                        }
                        a(),
                        re.ready()
                    }
                }()
            }
        return Ce.promise(e)
    }
    ;
    var Te, Ee = "undefined";
    for (Te in re(ie))
        break;
    ie.ownLast = "0" !== Te,
    ie.inlineBlockNeedsLayout = !1,
    re(function() {
        var t, e, n = me.getElementsByTagName("body")[0];
        n && (t = me.createElement("div"),
        t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
        e = me.createElement("div"),
        n.appendChild(t).appendChild(e),
        typeof e.style.zoom !== Ee && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
        (ie.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)),
        n.removeChild(t),
        t = e = null)
    }),
    function() {
        var t = me.createElement("div");
        if (null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ie.deleteExpando = !1
            }
        }
        t = null
    }(),
    re.acceptData = function(t) {
        var e = re.noData[(t.nodeName + " ").toLowerCase()]
          , n = +t.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
    }
    ;
    var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Se = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando],
            !!t && !u(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }),
    re.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0], a = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = re.data(r),
                1 === r.nodeType && !re._data(r, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        i = a[n].name,
                        0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)),
                        l(r, i, o[i]));
                    re._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                re.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                re.data(this, t, e)
            }) : r ? l(r, t, re.data(r, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                re.removeData(this, t)
            })
        }
    }),
    re.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue",
            i = re._data(t, e),
            n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = re.queue(t, e)
              , i = n.length
              , o = n.shift()
              , r = re._queueHooks(t, e)
              , a = function() {
                re.dequeue(t, e)
            };
            "inprogress" === o && (o = n.shift(),
            i--),
            o && ("fx" === e && n.unshift("inprogress"),
            delete r.stop,
            o.call(t, a, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return re._data(t, n) || re._data(t, n, {
                empty: re.Callbacks("once memory").add(function() {
                    re._removeData(t, e + "queue"),
                    re._removeData(t, n)
                })
            })
        }
    }),
    re.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = re.queue(this, t, e);
                re._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                re.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, o = re.Deferred(), r = this, a = this.length, s = function() {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; a--; )
                n = re._data(r[a], t + "queueHooks"),
                n && n.empty && (i++,
                n.empty.add(s));
            return s(),
            o.promise(e)
        }
    });
    var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ne = ["Top", "Right", "Bottom", "Left"]
      , De = function(t, e) {
        return t = e || t,
        "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
    }
      , je = re.access = function(t, e, n, i, o, r, a) {
        var s = 0
          , l = t.length
          , u = null == n;
        if ("object" === re.type(n)) {
            o = !0;
            for (s in n)
                re.access(t, e, s, n[s], !0, r, a)
        } else if (void 0 !== i && (o = !0,
        re.isFunction(i) || (a = !0),
        u && (a ? (e.call(t, i),
        e = null) : (u = e,
        e = function(t, e, n) {
            return u.call(re(t), n)
        }
        )),
        e))
            for (; l > s; s++)
                e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
        return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
    }
      , Ae = /^(?:checkbox|radio)$/i;
    !function() {
        var t = me.createDocumentFragment()
          , e = me.createElement("div")
          , n = me.createElement("input");
        if (e.setAttribute("className", "t"),
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a>",
        ie.leadingWhitespace = 3 === e.firstChild.nodeType,
        ie.tbody = !e.getElementsByTagName("tbody").length,
        ie.htmlSerialize = !!e.getElementsByTagName("link").length,
        ie.html5Clone = "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        t.appendChild(n),
        ie.appendChecked = n.checked,
        e.innerHTML = "<textarea>x</textarea>",
        ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
        t.appendChild(e),
        e.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ie.noCloneEvent = !0,
        e.attachEvent && (e.attachEvent("onclick", function() {
            ie.noCloneEvent = !1
        }),
        e.cloneNode(!0).click()),
        null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                ie.deleteExpando = !1
            }
        }
        t = e = n = null
    }(),
    function() {
        var e, n, i = me.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e,
            (ie[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"),
            ie[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Le = /^(?:input|select|textarea)$/i
      , He = /^key/
      , Fe = /^(?:mouse|contextmenu)|click/
      , _e = /^(?:focusinfocus|focusoutblur)$/
      , qe = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, a, s, l, u, c, d, f, p, h, m, g = re._data(t);
            if (g) {
                for (n.handler && (l = n,
                n = l.handler,
                o = l.selector),
                n.guid || (n.guid = re.guid++),
                (a = g.events) || (a = g.events = {}),
                (c = g.handle) || (c = g.handle = function(t) {
                    return typeof re === Ee || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
                }
                ,
                c.elem = t),
                e = (e || "").match(xe) || [""],
                s = e.length; s--; )
                    r = qe.exec(e[s]) || [],
                    p = m = r[1],
                    h = (r[2] || "").split(".").sort(),
                    p && (u = re.event.special[p] || {},
                    p = (o ? u.delegateType : u.bindType) || p,
                    u = re.event.special[p] || {},
                    d = re.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && re.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l),
                    (f = a[p]) || (f = a[p] = [],
                    f.delegateCount = 0,
                    u.setup && u.setup.call(t, i, h, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))),
                    u.add && (u.add.call(t, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    o ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                    re.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var r, a, s, l, u, c, d, f, p, h, m, g = re.hasData(t) && re._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(xe) || [""],
                u = e.length; u--; )
                    if (s = qe.exec(e[u]) || [],
                    p = m = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = re.event.special[p] || {},
                        p = (i ? d.delegateType : d.bindType) || p,
                        f = c[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = r = f.length; r--; )
                            a = f[r],
                            !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1),
                            a.selector && f.delegateCount--,
                            d.remove && d.remove.call(t, a));
                        l && !f.length && (d.teardown && d.teardown.call(t, h, g.handle) !== !1 || re.removeEvent(t, p, g.handle),
                        delete c[p])
                    } else
                        for (p in c)
                            re.event.remove(t, p + e[u], n, i, !0);
                re.isEmptyObject(c) && (delete g.handle,
                re._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, o) {
            var r, a, s, l, u, c, d, f = [i || me], p = ee.call(e, "type") ? e.type : e, h = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = i = i || me,
            3 !== i.nodeType && 8 !== i.nodeType && !_e.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            a = p.indexOf(":") < 0 && "on" + p,
            e = e[re.expando] ? e : new re.Event(p,"object" == typeof e && e),
            e.isTrigger = o ? 2 : 3,
            e.namespace = h.join("."),
            e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = i),
            n = null == n ? [e] : re.makeArray(n, [e]),
            u = re.event.special[p] || {},
            o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!o && !u.noBubble && !re.isWindow(i)) {
                    for (l = u.delegateType || p,
                    _e.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                        f.push(s),
                        c = s;
                    c === (i.ownerDocument || me) && f.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0; (s = f[d++]) && !e.isPropagationStopped(); )
                    e.type = d > 1 ? l : u.bindType || p,
                    r = (re._data(s, "events") || {})[e.type] && re._data(s, "handle"),
                    r && r.apply(s, n),
                    r = a && s[a],
                    r && r.apply && re.acceptData(s) && (e.result = r.apply(s, n),
                    e.result === !1 && e.preventDefault());
                if (e.type = p,
                !o && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && re.acceptData(i) && a && i[p] && !re.isWindow(i)) {
                    c = i[a],
                    c && (i[a] = null),
                    re.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    re.event.triggered = void 0,
                    c && (i[a] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = re.event.fix(t);
            var e, n, i, o, r, a = [], s = J.call(arguments), l = (re._data(this, "events") || {})[t.type] || [], u = re.event.special[t.type] || {};
            if (s[0] = t,
            t.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (a = re.event.handlers.call(this, t, l),
                e = 0; (o = a[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = o.elem,
                    r = 0; (i = o.handlers[r++]) && !t.isImmediatePropagationStopped(); )
                        (!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i,
                        t.data = i.data,
                        n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s),
                        void 0 !== n && (t.result = n) === !1 && (t.preventDefault(),
                        t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, a = [], s = e.delegateCount, l = t.target;
            if (s && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (o = [],
                        r = 0; s > r; r++)
                            i = e[r],
                            n = i.selector + " ",
                            void 0 === o[n] && (o[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length),
                            o[n] && o.push(i);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }),
            a
        },
        fix: function(t) {
            if (t[re.expando])
                return t;
            var e, n, i, o = t.type, r = t, a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Fe.test(o) ? this.mouseHooks : He.test(o) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            t = new re.Event(r),
            e = i.length; e--; )
                n = i[e],
                t[n] = r[n];
            return t.target || (t.target = r.srcElement || me),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            a.filter ? a.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, o, r = e.button, a = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || me,
                o = i.documentElement,
                n = i.body,
                t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0),
                t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a),
                t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = re.extend(new re.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(o, null, e) : re.event.dispatch.call(e, o),
            o.isDefaultPrevented() && n.preventDefault()
        }
    },
    re.removeEvent = me.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }
    : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === Ee && (t[i] = null),
        t.detachEvent(i, n))
    }
    ,
    re.Event = function(t, e) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault()) ? f : p) : this.type = t,
        e && re.extend(this, e),
        this.timeStamp = t && t.timeStamp || re.now(),
        void (this[re.expando] = !0)) : new re.Event(t,e)
    }
    ,
    re.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = f,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = f,
            t && (t.stopPropagation && t.stopPropagation(),
            t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = f,
            this.stopPropagation()
        }
    },
    re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, o = t.relatedTarget, r = t.handleObj;
                return (!o || o !== i && !re.contains(i, o)) && (t.type = r.origType,
                n = r.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    ie.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target
                  , n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }),
                re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble,
            this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }),
    ie.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }),
            re.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1),
                re.event.simulate("change", this, t, !0)
            })),
            !1) : void re.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Le.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
                }),
                re._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"),
            !Le.test(this.nodeName)
        }
    }),
    ie.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            re.event.simulate(e, t.target, re.event.fix(t), !0)
        };
        re.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , o = re._data(i, e);
                o || i.addEventListener(t, n, !0),
                re._data(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , o = re._data(i, e) - 1;
                o ? re._data(i, e, o) : (i.removeEventListener(t, n, !0),
                re._removeData(i, e))
            }
        }
    }),
    re.fn.extend({
        on: function(t, e, n, i, o) {
            var r, a;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e,
                e = void 0);
                for (r in t)
                    this.on(r, e, n, t[r], o);
                return this
            }
            if (null == n && null == i ? (i = e,
            n = e = void 0) : null == i && ("string" == typeof e ? (i = n,
            n = void 0) : (i = n,
            n = e,
            e = void 0)),
            i === !1)
                i = p;
            else if (!i)
                return this;
            return 1 === o && (a = i,
            i = function(t) {
                return re().off(t),
                a.apply(this, arguments)
            }
            ,
            i.guid = a.guid || (a.guid = re.guid++)),
            this.each(function() {
                re.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e,
            e = void 0),
            n === !1 && (n = p),
            this.each(function() {
                re.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? re.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Oe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Me = / jQuery\d+="(?:null|\d+)"/g
      , Pe = new RegExp("<(?:" + Oe + ")[\\s/>]","i")
      , Be = /^\s+/
      , Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , We = /<([\w:]+)/
      , Ie = /<tbody/i
      , ze = /<|&#?\w+;/
      , Ue = /<(?:script|style|link)/i
      , Xe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Qe = /^$|\/(?:java|ecma)script/i
      , Ve = /^true\/(.*)/
      , Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Ye = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , Ge = m(me)
      , Ke = Ge.appendChild(me.createElement("div"));
    Ye.optgroup = Ye.option,
    Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead,
    Ye.th = Ye.td,
    re.extend({
        clone: function(t, e, n) {
            var i, o, r, a, s, l = re.contains(t.ownerDocument, t);
            if (ie.html5Clone || re.isXMLDoc(t) || !Pe.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Ke.innerHTML = t.outerHTML,
            Ke.removeChild(r = Ke.firstChild)),
            !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (i = g(r),
                s = g(t),
                a = 0; null != (o = s[a]); ++a)
                    i[a] && T(o, i[a]);
            if (e)
                if (n)
                    for (s = s || g(t),
                    i = i || g(r),
                    a = 0; null != (o = s[a]); a++)
                        C(o, i[a]);
                else
                    C(t, r);
            return i = g(r, "script"),
            i.length > 0 && w(i, !l && g(t, "script")),
            i = s = o = null,
            r
        },
        buildFragment: function(t, e, n, i) {
            for (var o, r, a, s, l, u, c, d = t.length, f = m(e), p = [], h = 0; d > h; h++)
                if (r = t[h],
                r || 0 === r)
                    if ("object" === re.type(r))
                        re.merge(p, r.nodeType ? [r] : r);
                    else if (ze.test(r)) {
                        for (s = s || f.appendChild(e.createElement("div")),
                        l = (We.exec(r) || ["", ""])[1].toLowerCase(),
                        c = Ye[l] || Ye._default,
                        s.innerHTML = c[1] + r.replace(Re, "<$1></$2>") + c[2],
                        o = c[0]; o--; )
                            s = s.lastChild;
                        if (!ie.leadingWhitespace && Be.test(r) && p.push(e.createTextNode(Be.exec(r)[0])),
                        !ie.tbody)
                            for (r = "table" !== l || Ie.test(r) ? "<table>" !== c[1] || Ie.test(r) ? 0 : s : s.firstChild,
                            o = r && r.childNodes.length; o--; )
                                re.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                        for (re.merge(p, s.childNodes),
                        s.textContent = ""; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        p.push(e.createTextNode(r));
            for (s && f.removeChild(s),
            ie.appendChecked || re.grep(g(p, "input"), v),
            h = 0; r = p[h++]; )
                if ((!i || -1 === re.inArray(r, i)) && (a = re.contains(r.ownerDocument, r),
                s = g(f.appendChild(r), "script"),
                a && w(s),
                n))
                    for (o = 0; r = s[o++]; )
                        Qe.test(r.type || "") && n.push(r);
            return s = null,
            f
        },
        cleanData: function(t, e) {
            for (var n, i, o, r, a = 0, s = re.expando, l = re.cache, u = ie.deleteExpando, c = re.event.special; null != (n = t[a]); a++)
                if ((e || re.acceptData(n)) && (o = n[s],
                r = o && l[o])) {
                    if (r.events)
                        for (i in r.events)
                            c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o],
                    u ? delete n[s] : typeof n.removeAttribute !== Ee ? n.removeAttribute(s) : n[s] = null,
                    V.push(o))
                }
        }
    }),
    re.fn.extend({
        text: function(t) {
            return je(this, function(t) {
                return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || me).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? re.filter(t, this) : this, o = 0; null != (n = i[o]); o++)
                e || 1 !== n.nodeType || re.cleanData(g(n)),
                n.parentNode && (e && re.contains(n.ownerDocument, n) && w(g(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && re.cleanData(g(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && re.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t,
            e = null == e ? t : e,
            this.map(function() {
                return re.clone(this, t, e)
            })
        },
        html: function(t) {
            return je(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(Me, "") : void 0;
                if (!("string" != typeof t || Ue.test(t) || !ie.htmlSerialize && Pe.test(t) || !ie.leadingWhitespace && Be.test(t) || Ye[(We.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Re, "<$1></$2>");
                    try {
                        for (; i > n; n++)
                            e = this[n] || {},
                            1 === e.nodeType && (re.cleanData(g(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode,
                re.cleanData(g(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Y.apply([], t);
            var n, i, o, r, a, s, l = 0, u = this.length, c = this, d = u - 1, f = t[0], p = re.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !ie.checkClone && Xe.test(f))
                return this.each(function(n) {
                    var i = c.eq(n);
                    p && (t[0] = f.call(this, n, i.html())),
                    i.domManip(t, e)
                });
            if (u && (s = re.buildFragment(t, this[0].ownerDocument, !1, this),
            n = s.firstChild,
            1 === s.childNodes.length && (s = n),
            n)) {
                for (r = re.map(g(s, "script"), b),
                o = r.length; u > l; l++)
                    i = s,
                    l !== d && (i = re.clone(i, !0, !0),
                    o && re.merge(r, g(i, "script"))),
                    e.call(this[l], i, l);
                if (o)
                    for (a = r[r.length - 1].ownerDocument,
                    re.map(r, x),
                    l = 0; o > l; l++)
                        i = r[l],
                        Qe.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Je, "")));
                s = n = null
            }
            return this
        }
    }),
    re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        re.fn[t] = function(t) {
            for (var n, i = 0, o = [], r = re(t), a = r.length - 1; a >= i; i++)
                n = i === a ? this : this.clone(!0),
                re(r[i])[e](n),
                G.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Ze, tn = {};
    !function() {
        var t, e, n = me.createElement("div"), i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = n.getElementsByTagName("a")[0],
        t.style.cssText = "float:left;opacity:.5",
        ie.opacity = /^0.5/.test(t.style.opacity),
        ie.cssFloat = !!t.style.cssFloat,
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        ie.clearCloneStyle = "content-box" === n.style.backgroundClip,
        t = n = null,
        ie.shrinkWrapBlocks = function() {
            var t, n, o, r;
            if (null == e) {
                if (t = me.getElementsByTagName("body")[0],
                !t)
                    return;
                r = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                n = me.createElement("div"),
                o = me.createElement("div"),
                t.appendChild(n).appendChild(o),
                e = !1,
                typeof o.style.zoom !== Ee && (o.style.cssText = i + ";width:1px;padding:1px;zoom:1",
                o.innerHTML = "<div></div>",
                o.firstChild.style.width = "5px",
                e = 3 !== o.offsetWidth),
                t.removeChild(n),
                t = n = o = null
            }
            return e
        }
    }();
    var en, nn, on = /^margin/, rn = new RegExp("^(" + $e + ")(?!px)[a-z%]+$","i"), an = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (en = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    }
    ,
    nn = function(t, e, n) {
        var i, o, r, a, s = t.style;
        return n = n || en(t),
        a = n ? n.getPropertyValue(e) || n[e] : void 0,
        n && ("" !== a || re.contains(t.ownerDocument, t) || (a = re.style(t, e)),
        rn.test(a) && on.test(e) && (i = s.width,
        o = s.minWidth,
        r = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = o,
        s.maxWidth = r)),
        void 0 === a ? a : a + ""
    }
    ) : me.documentElement.currentStyle && (en = function(t) {
        return t.currentStyle
    }
    ,
    nn = function(t, e, n) {
        var i, o, r, a, s = t.style;
        return n = n || en(t),
        a = n ? n[e] : void 0,
        null == a && s && s[e] && (a = s[e]),
        rn.test(a) && !an.test(e) && (i = s.left,
        o = t.runtimeStyle,
        r = o && o.left,
        r && (o.left = t.currentStyle.left),
        s.left = "fontSize" === e ? "1em" : a,
        a = s.pixelLeft + "px",
        s.left = i,
        r && (o.left = r)),
        void 0 === a ? a : a + "" || "auto"
    }
    ),
    function() {
        function e() {
            var e, n, i = me.getElementsByTagName("body")[0];
            i && (e = me.createElement("div"),
            n = me.createElement("div"),
            e.style.cssText = u,
            i.appendChild(e).appendChild(n),
            n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
            re.swap(i, null != i.style.zoom ? {
                zoom: 1
            } : {}, function() {
                o = 4 === n.offsetWidth
            }),
            r = !0,
            a = !1,
            s = !0,
            t.getComputedStyle && (a = "1%" !== (t.getComputedStyle(n, null) || {}).top,
            r = "4px" === (t.getComputedStyle(n, null) || {
                width: "4px"
            }).width),
            i.removeChild(e),
            n = i = null)
        }
        var n, i, o, r, a, s, l = me.createElement("div"), u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = l.getElementsByTagName("a")[0],
        n.style.cssText = "float:left;opacity:.5",
        ie.opacity = /^0.5/.test(n.style.opacity),
        ie.cssFloat = !!n.style.cssFloat,
        l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        ie.clearCloneStyle = "content-box" === l.style.backgroundClip,
        n = l = null,
        re.extend(ie, {
            reliableHiddenOffsets: function() {
                if (null != i)
                    return i;
                var t, e, n, o = me.createElement("div"), r = me.getElementsByTagName("body")[0];
                if (r)
                    return o.setAttribute("className", "t"),
                    o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    t = me.createElement("div"),
                    t.style.cssText = u,
                    r.appendChild(t).appendChild(o),
                    o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    e = o.getElementsByTagName("td"),
                    e[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                    n = 0 === e[0].offsetHeight,
                    e[0].style.display = "",
                    e[1].style.display = "none",
                    i = n && 0 === e[0].offsetHeight,
                    r.removeChild(t),
                    o = r = null,
                    i
            },
            boxSizing: function() {
                return null == o && e(),
                o
            },
            boxSizingReliable: function() {
                return null == r && e(),
                r
            },
            pixelPosition: function() {
                return null == a && e(),
                a
            },
            reliableMarginRight: function() {
                var e, n, i, o;
                if (null == s && t.getComputedStyle) {
                    if (e = me.getElementsByTagName("body")[0],
                    !e)
                        return;
                    n = me.createElement("div"),
                    i = me.createElement("div"),
                    n.style.cssText = u,
                    e.appendChild(n).appendChild(i),
                    o = i.appendChild(me.createElement("div")),
                    o.style.cssText = i.style.cssText = c,
                    o.style.marginRight = o.style.width = "0",
                    i.style.width = "1px",
                    s = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight),
                    e.removeChild(n)
                }
                return s
            }
        })
    }(),
    re.swap = function(t, e, n, i) {
        var o, r, a = {};
        for (r in e)
            a[r] = t.style[r],
            t.style[r] = e[r];
        o = n.apply(t, i || []);
        for (r in e)
            t.style[r] = a[r];
        return o
    }
    ;
    var sn = /alpha\([^)]*\)/i
      , ln = /opacity\s*=\s*([^)]*)/
      , un = /^(none|table(?!-c[ea]).+)/
      , cn = new RegExp("^(" + $e + ")(.*)$","i")
      , dn = new RegExp("^([+-])=(" + $e + ")","i")
      , fn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , pn = {
        letterSpacing: 0,
        fontWeight: 400
    }
      , hn = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = nn(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, s = re.camelCase(e), l = t.style;
                if (e = re.cssProps[s] || (re.cssProps[s] = $(l, s)),
                a = re.cssHooks[e] || re.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e];
                if (r = typeof n,
                "string" === r && (o = dn.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(re.css(t, e)),
                r = "number"),
                null != n && n === n && ("number" !== r || re.cssNumber[s] || (n += "px"),
                ie.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(t, n, i)))))
                    try {
                        l[e] = "",
                        l[e] = n
                    } catch (u) {}
            }
        },
        css: function(t, e, n, i) {
            var o, r, a, s = re.camelCase(e);
            return e = re.cssProps[s] || (re.cssProps[s] = $(t.style, s)),
            a = re.cssHooks[e] || re.cssHooks[s],
            a && "get"in a && (r = a.get(t, !0, n)),
            void 0 === r && (r = nn(t, e, i)),
            "normal" === r && e in pn && (r = pn[e]),
            "" === n || n ? (o = parseFloat(r),
            n === !0 || re.isNumeric(o) ? o || 0 : r) : r
        }
    }),
    re.each(["height", "width"], function(t, e) {
        re.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? 0 === t.offsetWidth && un.test(re.css(t, "display")) ? re.swap(t, fn, function() {
                    return A(t, e, i)
                }) : A(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o = i && en(t);
                return D(t, n, i ? j(t, e, i, ie.boxSizing() && "border-box" === re.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    ie.opacity || (re.cssHooks.opacity = {
        get: function(t, e) {
            return ln.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style
              , i = t.currentStyle
              , o = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
              , r = i && i.filter || n.filter || "";
            n.zoom = 1,
            (e >= 1 || "" === e) && "" === re.trim(r.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === e || i && !i.filter) || (n.filter = sn.test(r) ? r.replace(sn, o) : r + " " + o)
        }
    }),
    re.cssHooks.marginRight = S(ie.reliableMarginRight, function(t, e) {
        return e ? re.swap(t, {
            display: "inline-block"
        }, nn, [t, "marginRight"]) : void 0
    }),
    re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        re.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    o[t + Ne[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        on.test(t) || (re.cssHooks[t + e].set = D)
    }),
    re.fn.extend({
        css: function(t, e) {
            return je(this, function(t, e, n) {
                var i, o, r = {}, a = 0;
                if (re.isArray(e)) {
                    for (i = en(t),
                    o = e.length; o > a; a++)
                        r[e[a]] = re.css(t, e[a], !1, i);
                    return r
                }
                return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return N(this, !0)
        },
        hide: function() {
            return N(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                De(this) ? re(this).show() : re(this).hide()
            })
        }
    }),
    re.Tween = L,
    L.prototype = {
        constructor: L,
        init: function(t, e, n, i, o, r) {
            this.elem = t,
            this.prop = n,
            this.easing = o || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (re.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = L.propHooks[this.prop];
            return t && t.get ? t.get(this) : L.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = L.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : L.propHooks._default.set(this),
            this
        }
    },
    L.prototype.init.prototype = L.prototype,
    L.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""),
                e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    re.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    },
    re.fx = L.prototype.init,
    re.fx.step = {};
    var mn, gn, vn = /^(?:toggle|show|hide)$/, yn = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$","i"), bn = /queueHooks$/, xn = [q], wn = {
        "*": [function(t, e) {
            var n = this.createTween(t, e)
              , i = n.cur()
              , o = yn.exec(e)
              , r = o && o[3] || (re.cssNumber[t] ? "" : "px")
              , a = (re.cssNumber[t] || "px" !== r && +i) && yn.exec(re.css(n.elem, t))
              , s = 1
              , l = 20;
            if (a && a[3] !== r) {
                r = r || a[3],
                o = o || [],
                a = +i || 1;
                do
                    s = s || ".5",
                    a /= s,
                    re.style(n.elem, t, a + r);
                while (s !== (s = n.cur() / i) && 1 !== s && --l)
            }
            return o && (a = n.start = +a || +i || 0,
            n.unit = r,
            n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]),
            n
        }
        ]
    };
    re.Animation = re.extend(M, {
        tweener: function(t, e) {
            re.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, o = t.length; o > i; i++)
                n = t[i],
                wn[n] = wn[n] || [],
                wn[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? xn.unshift(t) : xn.push(t)
        }
    }),
    re.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? re.extend({}, t) : {
            complete: n || !n && e || re.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !re.isFunction(e) && e
        };
        return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default,
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            re.isFunction(i.old) && i.old.call(this),
            i.queue && re.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    re.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(De).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = re.isEmptyObject(t)
              , r = re.speed(e, n, i)
              , a = function() {
                var e = M(this, re.extend({}, t), r);
                (o || re._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = void 0),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , o = null != t && t + "queueHooks"
                  , r = re.timers
                  , a = re._data(this);
                if (o)
                    a[o] && a[o].stop && i(a[o]);
                else
                    for (o in a)
                        a[o] && a[o].stop && bn.test(o) && i(a[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n),
                    e = !1,
                    r.splice(o, 1));
                (e || !n) && re.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var e, n = re._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = re.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                re.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; a > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    re.each(["toggle", "show", "hide"], function(t, e) {
        var n = re.fn[e];
        re.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, i, o)
        }
    }),
    re.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        re.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    re.timers = [],
    re.fx.tick = function() {
        var t, e = re.timers, n = 0;
        for (mn = re.now(); n < e.length; n++)
            t = e[n],
            t() || e[n] !== t || e.splice(n--, 1);
        e.length || re.fx.stop(),
        mn = void 0
    }
    ,
    re.fx.timer = function(t) {
        re.timers.push(t),
        t() ? re.fx.start() : re.timers.pop()
    }
    ,
    re.fx.interval = 13,
    re.fx.start = function() {
        gn || (gn = setInterval(re.fx.tick, re.fx.interval))
    }
    ,
    re.fx.stop = function() {
        clearInterval(gn),
        gn = null
    }
    ,
    re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    re.fn.delay = function(t, e) {
        return t = re.fx ? re.fx.speeds[t] || t : t,
        e = e || "fx",
        this.queue(e, function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var t, e, n, i, o = me.createElement("div");
        o.setAttribute("className", "t"),
        o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = o.getElementsByTagName("a")[0],
        n = me.createElement("select"),
        i = n.appendChild(me.createElement("option")),
        e = o.getElementsByTagName("input")[0],
        t.style.cssText = "top:1px",
        ie.getSetAttribute = "t" !== o.className,
        ie.style = /top/.test(t.getAttribute("style")),
        ie.hrefNormalized = "/a" === t.getAttribute("href"),
        ie.checkOn = !!e.value,
        ie.optSelected = i.selected,
        ie.enctype = !!me.createElement("form").enctype,
        n.disabled = !0,
        ie.optDisabled = !i.disabled,
        e = me.createElement("input"),
        e.setAttribute("value", ""),
        ie.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        ie.radioValue = "t" === e.value,
        t = e = n = i = o = null
    }();
    var Cn = /\r/g;
    re.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            {
                if (arguments.length)
                    return i = re.isFunction(t),
                    this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, re(this).val()) : t,
                        null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })),
                        e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()],
                        e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                if (o)
                    return e = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()],
                    e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value,
                    "string" == typeof n ? n.replace(Cn, "") : null == n ? "" : n)
            }
        }
    }),
    re.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = re.find.attr(t, "value");
                    return null != e ? e : re.text(t)
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                        if (n = i[l],
                        !(!n.selected && l !== o || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (e = re(n).val(),
                            r)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = re.makeArray(e), a = o.length; a--; )
                        if (i = o[a],
                        re.inArray(re.valHooks.option.get(i), r) >= 0)
                            try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    re.each(["radio", "checkbox"], function() {
        re.valHooks[this] = {
            set: function(t, e) {
                return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
            }
        },
        ie.checkOn || (re.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var Tn, En, kn = re.expr.attrHandle, Sn = /^(?:checked|selected)$/i, $n = ie.getSetAttribute, Nn = ie.input;
    re.fn.extend({
        attr: function(t, e) {
            return je(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                re.removeAttr(this, t)
            })
        }
    }),
    re.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r)
                return typeof t.getAttribute === Ee ? re.prop(t, e, n) : (1 === r && re.isXMLDoc(t) || (e = e.toLowerCase(),
                i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? En : Tn)),
                void 0 === n ? i && "get"in i && null !== (o = i.get(t, e)) ? o : (o = re.find.attr(t, e),
                null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""),
                n) : void re.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, o = 0, r = e && e.match(xe);
            if (r && 1 === t.nodeType)
                for (; n = r[o++]; )
                    i = re.propFix[n] || n,
                    re.expr.match.bool.test(n) ? Nn && $n || !Sn.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""),
                    t.removeAttribute($n ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ie.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        }
    }),
    En = {
        set: function(t, e, n) {
            return e === !1 ? re.removeAttr(t, n) : Nn && $n || !Sn.test(n) ? t.setAttribute(!$n && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    re.each(re.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = kn[e] || re.find.attr;
        kn[e] = Nn && $n || !Sn.test(e) ? function(t, e, i) {
            var o, r;
            return i || (r = kn[e],
            kn[e] = o,
            o = null != n(t, e, i) ? e.toLowerCase() : null,
            kn[e] = r),
            o
        }
        : function(t, e, n) {
            return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Nn && $n || (re.attrHooks.value = {
        set: function(t, e, n) {
            return re.nodeName(t, "input") ? void (t.defaultValue = e) : Tn && Tn.set(t, e, n)
        }
    }),
    $n || (Tn = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)),
            i.value = e += "",
            "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    },
    kn.id = kn.name = kn.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }
    ,
    re.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Tn.set
    },
    re.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Tn.set(t, "" === e ? !1 : e, n)
        }
    },
    re.each(["width", "height"], function(t, e) {
        re.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"),
                n) : void 0
            }
        }
    })),
    ie.style || (re.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Dn = /^(?:input|select|textarea|button|object)$/i
      , jn = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(t, e) {
            return je(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = re.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch (e) {}
            })
        }
    }),
    re.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, o, r, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a)
                return r = 1 !== a || !re.isXMLDoc(t),
                r && (e = re.propFix[e] || e,
                o = re.propHooks[e]),
                void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = re.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Dn.test(t.nodeName) || jn.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }),
    ie.hrefNormalized || re.each(["href", "src"], function(t, e) {
        re.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    ie.optSelected || (re.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        re.propFix[this.toLowerCase()] = this
    }),
    ie.enctype || (re.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s = 0, l = this.length, u = "string" == typeof t && t;
            if (re.isFunction(t))
                return this.each(function(e) {
                    re(this).addClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(xe) || []; l > s; s++)
                    if (n = this[s],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (r = 0; o = e[r++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = re.trim(i),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t))
                return this.each(function(e) {
                    re(this).removeClass(t.call(this, e, this.className))
                });
            if (u)
                for (e = (t || "").match(xe) || []; l > s; s++)
                    if (n = this[s],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (r = 0; o = e[r++]; )
                            for (; i.indexOf(" " + o + " ") >= 0; )
                                i = i.replace(" " + o + " ", " ");
                        a = t ? re.trim(i) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function(n) {
                re(this).toggleClass(t.call(this, n, this.className, e), e)
            }
            : function() {
                if ("string" === n)
                    for (var e, i = 0, o = re(this), r = t.match(xe) || []; e = r[i++]; )
                        o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else
                    (n === Ee || "boolean" === n) && (this.className && re._data(this, "__className__", this.className),
                    this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        }
    }),
    re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        re.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    re.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Ln = re.now()
      , Hn = /\?/
      , Fn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n, i = null, o = re.trim(e + "");
        return o && !re.trim(o.replace(Fn, function(t, e, o, r) {
            return n && e && (i = 0),
            0 === i ? t : (n = o || e,
            i += !r - !o,
            "")
        })) ? Function("return " + o)() : re.error("Invalid JSON: " + e)
    }
    ,
    re.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (i = new DOMParser,
            n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(e))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e),
        n
    }
    ;
    var _n, qn, On = /#.*$/, Mn = /([?&])_=[^&]*/, Pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rn = /^(?:GET|HEAD)$/, Wn = /^\/\//, In = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, zn = {}, Un = {}, Xn = "*/".concat("*");
    try {
        qn = location.href
    } catch (Qn) {
        qn = me.createElement("a"),
        qn.href = "",
        qn = qn.href
    }
    _n = In.exec(qn.toLowerCase()) || [],
    re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qn,
            type: "GET",
            isLocal: Bn.test(_n[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, re.ajaxSettings), e) : R(re.ajaxSettings, t)
        },
        ajaxPrefilter: P(zn),
        ajaxTransport: P(Un),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var o, c, v, y, x, C = e;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                u = void 0,
                a = i || "",
                w.readyState = t > 0 ? 4 : 0,
                o = t >= 200 && 300 > t || 304 === t,
                n && (y = W(d, w, n)),
                y = I(d, y, w, o),
                o ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"),
                x && (re.lastModified[r] = x),
                x = w.getResponseHeader("etag"),
                x && (re.etag[r] = x)),
                204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state,
                c = y.data,
                v = y.error,
                o = !v)) : (v = C,
                (t || !C) && (C = "error",
                0 > t && (t = 0))),
                w.status = t,
                w.statusText = (e || C) + "",
                o ? h.resolveWith(f, [c, C, w]) : h.rejectWith(f, [w, C, v]),
                w.statusCode(g),
                g = void 0,
                l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? c : v]),
                m.fireWith(f, [w, C]),
                l && (p.trigger("ajaxComplete", [w, d]),
                --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t,
            t = void 0),
            e = e || {};
            var i, o, r, a, s, l, u, c, d = re.ajaxSetup({}, e), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? re(f) : re.event, h = re.Deferred(), m = re.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, x = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!c)
                            for (c = {}; e = Pn.exec(a); )
                                c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return b || (t = y[n] = y[n] || t,
                    v[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return b || (d.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > b)
                            for (e in t)
                                g[e] = [g[e], t[e]];
                        else
                            w.always(t[w.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || x;
                    return u && u.abort(e),
                    n(0, e),
                    this
                }
            };
            if (h.promise(w).complete = m.add,
            w.success = w.done,
            w.error = w.fail,
            d.url = ((t || d.url || qn) + "").replace(On, "").replace(Wn, _n[1] + "//"),
            d.type = e.method || e.type || d.method || d.type,
            d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(xe) || [""],
            null == d.crossDomain && (i = In.exec(d.url.toLowerCase()),
            d.crossDomain = !(!i || i[1] === _n[1] && i[2] === _n[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (_n[3] || ("http:" === _n[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)),
            B(zn, d, e, w),
            2 === b)
                return w;
            l = d.global,
            l && 0 === re.active++ && re.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Rn.test(d.type),
            r = d.url,
            d.hasContent || (d.data && (r = d.url += (Hn.test(r) ? "&" : "?") + d.data,
            delete d.data),
            d.cache === !1 && (d.url = Mn.test(r) ? r.replace(Mn, "$1_=" + Ln++) : r + (Hn.test(r) ? "&" : "?") + "_=" + Ln++)),
            d.ifModified && (re.lastModified[r] && w.setRequestHeader("If-Modified-Since", re.lastModified[r]),
            re.etag[r] && w.setRequestHeader("If-None-Match", re.etag[r])),
            (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers)
                w.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b))
                return w.abort();
            x = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[o](d[o]);
            if (u = B(Un, d, e, w)) {
                w.readyState = 1,
                l && p.trigger("ajaxSend", [w, d]),
                d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1,
                    u.send(v, n)
                } catch (C) {
                    if (!(2 > b))
                        throw C;
                    n(-1, C)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return re.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return re.get(t, void 0, e, "script")
        }
    }),
    re.each(["get", "post"], function(t, e) {
        re[e] = function(t, n, i, o) {
            return re.isFunction(n) && (o = o || i,
            i = n,
            n = void 0),
            re.ajax({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            })
        }
    }),
    re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        re.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    re._evalUrl = function(t) {
        return re.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    re.fn.extend({
        wrapAll: function(t) {
            if (re.isFunction(t))
                return this.each(function(e) {
                    re(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(re.isFunction(t) ? function(e) {
                re(this).wrapInner(t.call(this, e))
            }
            : function() {
                var e = re(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            }
            )
        },
        wrap: function(t) {
            var e = re.isFunction(t);
            return this.each(function(n) {
                re(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    re.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }
    ,
    re.expr.filters.visible = function(t) {
        return !re.expr.filters.hidden(t)
    }
    ;
    var Vn = /%20/g
      , Jn = /\[\]$/
      , Yn = /\r?\n/g
      , Gn = /^(?:submit|button|image|reset|file)$/i
      , Kn = /^(?:input|select|textarea|keygen)/i;
    re.param = function(t, e) {
        var n, i = [], o = function(t, e) {
            e = re.isFunction(e) ? e() : null == e ? "" : e,
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional),
        re.isArray(t) || t.jquery && !re.isPlainObject(t))
            re.each(t, function() {
                o(this.name, this.value)
            });
        else
            for (n in t)
                z(n, t[n], e, o);
        return i.join("&").replace(Vn, "+")
    }
    ,
    re.fn.extend({
        serialize: function() {
            return re.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && Kn.test(this.nodeName) && !Gn.test(t) && (this.checked || !Ae.test(t))
            }).map(function(t, e) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Yn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Yn, "\r\n")
                }
            }).get()
        }
    }),
    re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || X()
    }
    : U;
    var Zn = 0
      , ti = {}
      , ei = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function() {
        for (var t in ti)
            ti[t](void 0, !0)
    }),
    ie.cors = !!ei && "withCredentials"in ei,
    ei = ie.ajax = !!ei,
    ei && re.ajaxTransport(function(t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function(n, i) {
                    var o, r = t.xhr(), a = ++Zn;
                    if (r.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            r[o] = t.xhrFields[o];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType),
                    t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n)
                        void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(t.hasContent && t.data || null),
                    e = function(n, o) {
                        var s, l, u;
                        if (e && (o || 4 === r.readyState))
                            if (delete ti[a],
                            e = void 0,
                            r.onreadystatechange = re.noop,
                            o)
                                4 !== r.readyState && r.abort();
                            else {
                                u = {},
                                s = r.status,
                                "string" == typeof r.responseText && (u.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        u && i(s, l, u, r.getAllResponseHeaders())
                    }
                    ,
                    t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = ti[a] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }),
    re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return re.globalEval(t),
                t
            }
        }
    }),
    re.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET",
        t.global = !1)
    }),
    re.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = me.head || re("head")[0] || me.documentElement;
            return {
                send: function(i, o) {
                    e = me.createElement("script"),
                    e.async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null,
                        e.parentNode && e.parentNode.removeChild(e),
                        e = null,
                        n || o(200, "success"))
                    }
                    ,
                    n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ni = []
      , ii = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ni.pop() || re.expando + "_" + Ln++;
            return this[t] = !0,
            t
        }
    }),
    re.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, a, s = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        s ? e[s] = e[s].replace(ii, "$1" + o) : e.jsonp !== !1 && (e.url += (Hn.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
        e.converters["script json"] = function() {
            return a || re.error(o + " was not called"),
            a[0]
        }
        ,
        e.dataTypes[0] = "json",
        r = t[o],
        t[o] = function() {
            a = arguments
        }
        ,
        i.always(function() {
            t[o] = r,
            e[o] && (e.jsonpCallback = n.jsonpCallback,
            ni.push(o)),
            a && re.isFunction(r) && r(a[0]),
            a = r = void 0
        }),
        "script") : void 0
    }),
    re.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e,
        e = !1),
        e = e || me;
        var i = fe.exec(t)
          , o = !n && [];
        return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, o),
        o && o.length && re(o).remove(),
        re.merge([], i.childNodes))
    }
    ;
    var oi = re.fn.load;
    re.fn.load = function(t, e, n) {
        if ("string" != typeof t && oi)
            return oi.apply(this, arguments);
        var i, o, r, a = this, s = t.indexOf(" ");
        return s >= 0 && (i = t.slice(s, t.length),
        t = t.slice(0, s)),
        re.isFunction(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (r = "POST"),
        a.length > 0 && re.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            a.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            a.each(n, o || [t.responseText, e, t])
        }
        ),
        this
    }
    ,
    re.expr.filters.animated = function(t) {
        return re.grep(re.timers, function(e) {
            return t === e.elem
        }).length
    }
    ;
    var ri = t.document.documentElement;
    re.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, a, s, l, u, c = re.css(t, "position"), d = re(t), f = {};
            "static" === c && (t.style.position = "relative"),
            s = d.offset(),
            r = re.css(t, "top"),
            l = re.css(t, "left"),
            u = ("absolute" === c || "fixed" === c) && re.inArray("auto", [r, l]) > -1,
            u ? (i = d.position(),
            a = i.top,
            o = i.left) : (a = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            re.isFunction(e) && (e = e.call(t, n, s)),
            null != e.top && (f.top = e.top - s.top + a),
            null != e.left && (f.left = e.left - s.left + o),
            "using"in e ? e.using.call(t, f) : d.css(f)
        }
    },
    re.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    re.offset.setOffset(this, t, e)
                });
            var e, n, i = {
                top: 0,
                left: 0
            }, o = this[0], r = o && o.ownerDocument;
            if (r)
                return e = r.documentElement,
                re.contains(e, o) ? (typeof o.getBoundingClientRect !== Ee && (i = o.getBoundingClientRect()),
                n = Q(r),
                {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                re.nodeName(t[0], "html") || (n = t.offset()),
                n.top += re.css(t[0], "borderTopWidth", !0),
                n.left += re.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - n.top - re.css(i, "marginTop", !0),
                    left: e.left - n.left - re.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position"); )
                    t = t.offsetParent;
                return t || ri
            })
        }
    }),
    re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        re.fn[t] = function(i) {
            return je(this, function(t, i, o) {
                var r = Q(t);
                return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void (r ? r.scrollTo(n ? re(r).scrollLeft() : o, n ? o : re(r).scrollTop()) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }),
    re.each(["top", "left"], function(t, e) {
        re.cssHooks[e] = S(ie.pixelPosition, function(t, n) {
            return n ? (n = nn(t, e),
            rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
        })
    }),
    re.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        re.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            re.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i)
                  , a = n || (i === !0 || o === !0 ? "margin" : "border");
                return je(this, function(e, n, i) {
                    var o;
                    return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                    Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? re.css(e, n, a) : re.style(e, n, i, a)
                }, e, r ? i : void 0, r, null)
            }
        })
    }),
    re.fn.size = function() {
        return this.length
    }
    ,
    re.fn.andSelf = re.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var ai = t.jQuery
      , si = t.$;
    return re.noConflict = function(e) {
        return t.$ === re && (t.$ = si),
        e && t.jQuery === re && (t.jQuery = ai),
        re
    }
    ,
    typeof e === Ee && (t.jQuery = t.$ = re),
    re
}),
function(t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function() {
            var e = t("meta[name=csrf-token]").attr("content")
              , n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        },
        fire: function(e, n, i) {
            var o = t.Event(n);
            return e.trigger(o, i),
            o.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t.attr("href")
        },
        handleRemote: function(i) {
            var o, r, a, s, l, u, c, d;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("cross-domain"),
                l = s === e ? null : s,
                u = i.data("with-credentials") || null,
                c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType,
                i.is("form")) {
                    o = i.attr("method"),
                    r = i.attr("action"),
                    a = i.serializeArray();
                    var f = i.data("ujs:submit-button");
                    f && (a.push(f),
                    i.data("ujs:submit-button", null))
                } else
                    i.is(n.inputChangeSelector) ? (o = i.data("method"),
                    r = i.data("url"),
                    a = i.serialize(),
                    i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get",
                    r = i.data("url"),
                    a = i.serialize(),
                    i.data("params") && (a = a + "&" + i.data("params"))) : (o = i.data("method"),
                    r = n.href(i),
                    a = i.data("params") || null);
                d = {
                    type: o || "GET",
                    data: a,
                    dataType: c,
                    beforeSend: function(t, o) {
                        return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script),
                        n.fire(i, "ajax:beforeSend", [t, o])
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: l
                },
                u && (d.xhrFields = {
                    withCredentials: u
                }),
                r && (d.url = r);
                var p = n.ajax(d);
                return i.trigger("ajax:send", p),
                p
            }
            return !1
        },
        handleMethod: function(i) {
            var o = n.href(i)
              , r = i.data("method")
              , a = i.attr("target")
              , s = t("meta[name=csrf-token]").attr("content")
              , l = t("meta[name=csrf-param]").attr("content")
              , u = t('<form method="post" action="' + o + '"></form>')
              , c = '<input name="_method" value="' + r + '" type="hidden" />';
            l !== e && s !== e && (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'),
            a && u.attr("target", a),
            u.hide().append(c).appendTo("body"),
            u.submit()
        },
        disableFormElements: function(e) {
            e.find(n.disableSelector).each(function() {
                var e = t(this)
                  , n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[n]()),
                e[n](e.data("disable-with")),
                e.prop("disabled", !0)
            })
        },
        enableFormElements: function(e) {
            e.find(n.enableSelector).each(function() {
                var e = t(this)
                  , n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")),
                e.prop("disabled", !1)
            })
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"), o = !1;
            return i ? (n.fire(t, "confirm") && (o = n.confirm(i),
            e = n.fire(t, "confirm:complete", [o])),
            o && e) : !0
        },
        blankInputs: function(e, n, i) {
            var o, r, a = t(), s = n || "input,textarea", l = e.find(s);
            return l.each(function() {
                if (o = t(this),
                r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(),
                !r == !i) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length)
                        return !0;
                    a = a.add(o)
                }
            }),
            a.length ? a : !1
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"),
            e.stopImmediatePropagation(),
            !1
        },
        disableElement: function(t) {
            t.data("ujs:enable-with", t.html()),
            t.html(t.data("disable-with")),
            t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")),
            t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable")
        }
    },
    n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }),
    i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(t(this))
    }),
    i.delegate(n.linkClickSelector, "click.rails", function(i) {
        var o = t(this)
          , r = o.data("method")
          , a = o.data("params")
          , s = i.metaKey || i.ctrlKey;
        if (!n.allowAction(o))
            return n.stopEverything(i);
        if (!s && o.is(n.linkDisableSelector) && n.disableElement(o),
        o.data("remote") !== e) {
            if (s && (!r || "GET" === r) && !a)
                return !0;
            var l = n.handleRemote(o);
            return l === !1 ? n.enableElement(o) : l.error(function() {
                n.enableElement(o)
            }),
            !1
        }
        return o.data("method") ? (n.handleMethod(o),
        !1) : void 0
    }),
    i.delegate(n.buttonClickSelector, "click.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i),
        !1) : n.stopEverything(e)
    }),
    i.delegate(n.inputChangeSelector, "change.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i),
        !1) : n.stopEverything(e)
    }),
    i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var o = t(this)
          , r = o.data("remote") !== e
          , a = n.blankInputs(o, n.requiredInputSelector)
          , s = n.nonBlankInputs(o, n.fileInputSelector);
        if (!n.allowAction(o))
            return n.stopEverything(i);
        if (a && o.attr("novalidate") == e && n.fire(o, "ajax:aborted:required", [a]))
            return n.stopEverything(i);
        if (r) {
            if (s) {
                setTimeout(function() {
                    n.disableFormElements(o)
                }, 13);
                var l = n.fire(o, "ajax:aborted:file", [s]);
                return l || setTimeout(function() {
                    n.enableFormElements(o)
                }, 13),
                l
            }
            return n.handleRemote(o),
            !1
        }
        setTimeout(function() {
            n.disableFormElements(o)
        }, 13)
    }),
    i.delegate(n.formInputClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i))
            return n.stopEverything(e);
        var o = i.attr("name")
          , r = o ? {
            name: o,
            value: i.val()
        } : null;
        i.closest("form").data("ujs:submit-button", r)
    }),
    i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
        this == e.target && n.disableFormElements(t(this))
    }),
    i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && n.enableFormElements(t(this))
    }),
    t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
+function(t) {
    "use strict";
    var e = function(n, i) {
        this.options = t.extend({}, e.DEFAULTS, i),
        this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(n),
        this.affixed = this.unpin = this.pinnedOffset = null,
        this.checkPosition()
    };
    e.RESET = "affix affix-top affix-bottom",
    e.DEFAULTS = {
        offset: 0
    },
    e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$window.scrollTop()
          , n = this.$element.offset();
        return this.pinnedOffset = n.top - t
    }
    ,
    e.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }
    ,
    e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = t(document).height()
              , i = this.$window.scrollTop()
              , o = this.$element.offset()
              , r = this.options.offset
              , a = r.top
              , s = r.bottom;
            "top" == this.affixed && (o.top += i),
            "object" != typeof r && (s = a = r),
            "function" == typeof a && (a = r.top(this.$element)),
            "function" == typeof s && (s = r.bottom(this.$element));
            var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != s && o.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i ? "top" : !1;
            if (this.affixed !== l) {
                this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : "")
                  , c = t.Event(u + ".bs.affix");
                this.$element.trigger(c),
                c.isDefaultPrevented() || (this.affixed = l,
                this.unpin = "bottom" == l ? this.getPinnedOffset() : null,
                this.$element.removeClass(e.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))),
                "bottom" == l && this.$element.offset({
                    top: n - s - this.$element.height()
                }))
            }
        }
    }
    ;
    var n = t.fn.affix;
    t.fn.affix = function(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.affix")
              , r = "object" == typeof n && n;
            o || i.data("bs.affix", o = new e(this,r)),
            "string" == typeof n && o[n]()
        })
    }
    ,
    t.fn.affix.Constructor = e,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = n,
        this
    }
    ,
    t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this)
              , n = e.data();
            n.offset = n.offset || {},
            n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            n.offsetTop && (n.offset.top = n.offsetTop),
            e.affix(n)
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]'
      , n = function(n) {
        t(n).on("click", e, this.close)
    };
    n.prototype.close = function(e) {
        function n() {
            r.trigger("closed.bs.alert").remove()
        }
        var i = t(this)
          , o = i.attr("data-target");
        o || (o = i.attr("href"),
        o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(o);
        e && e.preventDefault(),
        r.length || (r = i.hasClass("alert") ? i : i.parent()),
        r.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (r.removeClass("in"),
        t.support.transition && r.hasClass("fade") ? r.one(t.support.transition.end, n).emulateTransitionEnd(150) : n())
    }
    ;
    var i = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)),
            "string" == typeof e && o[e].call(i)
        })
    }
    ,
    t.fn.alert.Constructor = n,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = i,
        this
    }
    ,
    t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery),
+function(t) {
    "use strict";
    var e = function(n, i) {
        this.$element = t(n),
        this.options = t.extend({}, e.DEFAULTS, i),
        this.isLoading = !1
    };
    e.DEFAULTS = {
        loadingText: "loading..."
    },
    e.prototype.setState = function(e) {
        var n = "disabled"
          , i = this.$element
          , o = i.is("input") ? "val" : "html"
          , r = i.data();
        e += "Text",
        r.resetText || i.data("resetText", i[o]()),
        i[o](r[e] || this.options[e]),
        setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0,
            i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1,
            i.removeClass(n).removeAttr(n))
        }, this), 0)
    }
    ,
    e.prototype.toggle = function() {
        var t = !0
          , e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")),
            t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    }
    ;
    var n = t.fn.button;
    t.fn.button = function(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.button")
              , r = "object" == typeof n && n;
            o || i.data("bs.button", o = new e(this,r)),
            "toggle" == n ? o.toggle() : n && o.setState(n)
        })
    }
    ,
    t.fn.button.Constructor = e,
    t.fn.button.noConflict = function() {
        return t.fn.button = n,
        this
    }
    ,
    t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(e) {
        var n = t(e.target);
        n.hasClass("btn") || (n = n.closest(".btn")),
        n.button("toggle"),
        e.preventDefault()
    })
}(jQuery),
+function(t) {
    "use strict";
    var e = function(e, n) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
        "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    },
    e.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    e.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"),
        this.$items = this.$active.parent().children(),
        this.$items.index(this.$active)
    }
    ,
    e.prototype.to = function(e) {
        var n = this
          , i = this.getActiveIndex();
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(e)
        }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
    }
    ,
    e.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    e.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    e.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    e.prototype.slide = function(e, n) {
        var i = this.$element.find(".item.active")
          , o = n || i[e]()
          , r = this.interval
          , a = "next" == e ? "left" : "right"
          , s = "next" == e ? "first" : "last"
          , l = this;
        if (!o.length) {
            if (!this.options.wrap)
                return;
            o = this.$element.find(".item")[s]()
        }
        if (o.hasClass("active"))
            return this.sliding = !1;
        var u = t.Event("slide.bs.carousel", {
            relatedTarget: o[0],
            direction: a
        });
        return this.$element.trigger(u),
        u.isDefaultPrevented() ? void 0 : (this.sliding = !0,
        r && this.pause(),
        this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
        this.$element.one("slid.bs.carousel", function() {
            var e = t(l.$indicators.children()[l.getActiveIndex()]);
            e && e.addClass("active")
        })),
        t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e),
        o[0].offsetWidth,
        i.addClass(a),
        o.addClass(a),
        i.one(t.support.transition.end, function() {
            o.removeClass([e, a].join(" ")).addClass("active"),
            i.removeClass(["active", a].join(" ")),
            l.sliding = !1,
            setTimeout(function() {
                l.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"),
        o.addClass("active"),
        this.sliding = !1,
        this.$element.trigger("slid.bs.carousel")),
        r && this.cycle(),
        this)
    }
    ;
    var n = t.fn.carousel;
    t.fn.carousel = function(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.carousel")
              , r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n)
              , a = "string" == typeof n ? n : r.slide;
            o || i.data("bs.carousel", o = new e(this,r)),
            "number" == typeof n ? o.to(n) : a ? o[a]() : r.interval && o.pause().cycle()
        })
    }
    ,
    t.fn.carousel.Constructor = e,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n,
        this
    }
    ,
    t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var n, i = t(this), o = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), r = t.extend({}, o.data(), i.data()), a = i.attr("data-slide-to");
        a && (r.interval = !1),
        o.carousel(r),
        (a = i.attr("data-slide-to")) && o.data("bs.carousel").to(a),
        e.preventDefault()
    }),
    t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var e = t(this);
            e.carousel(e.data())
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    var e = function(n, i) {
        this.$element = t(n),
        this.options = t.extend({}, e.DEFAULTS, i),
        this.transitioning = null,
        this.options.parent && (this.$parent = t(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    e.DEFAULTS = {
        toggle: !0
    },
    e.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }
    ,
    e.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e = t.Event("show.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var i = n.data("bs.collapse");
                    if (i && i.transitioning)
                        return;
                    n.collapse("hide"),
                    i || n.data("bs.collapse", null)
                }
                var o = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[o](0),
                this.transitioning = 1;
                var r = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[o]("auto"),
                    this.transitioning = 0,
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition)
                    return r.call(this);
                var a = t.camelCase(["scroll", o].join("-"));
                this.$element.one(t.support.transition.end, t.proxy(r, this)).emulateTransitionEnd(350)[o](this.$element[0][a])
            }
        }
    }
    ,
    e.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),
                this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0,
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
            }
        }
    }
    ,
    e.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ;
    var n = t.fn.collapse;
    t.fn.collapse = function(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.collapse")
              , r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
            !o && r.toggle && "show" == n && (n = !n),
            o || i.data("bs.collapse", o = new e(this,r)),
            "string" == typeof n && o[n]()
        })
    }
    ,
    t.fn.collapse.Constructor = e,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = n,
        this
    }
    ,
    t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(e) {
        var n, i = t(this), o = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), r = t(o), a = r.data("bs.collapse"), s = a ? "toggle" : i.data(), l = i.attr("data-parent"), u = l && t(l);
        a && a.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"),
        i[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
        r.collapse(s)
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        t(i).remove(),
        t(o).each(function() {
            var i = n(t(this))
              , o = {
                relatedTarget: this
            };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)),
            e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", o))
        })
    }
    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"),
        n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }
    var i = ".dropdown-backdrop"
      , o = "[data-toggle=dropdown]"
      , r = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    r.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = n(o)
              , a = r.hasClass("open");
            if (e(),
            !a) {
                "ontouchstart"in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", s)),
                i.isDefaultPrevented())
                    return;
                r.toggleClass("open").trigger("shown.bs.dropdown", s),
                o.focus()
            }
            return !1
        }
    }
    ,
    r.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var i = t(this);
            if (e.preventDefault(),
            e.stopPropagation(),
            !i.is(".disabled, :disabled")) {
                var r = n(i)
                  , a = r.hasClass("open");
                if (!a || a && 27 == e.keyCode)
                    return 27 == e.which && r.find(o).focus(),
                    i.click();
                var s = " li:not(.divider):visible a"
                  , l = r.find("[role=menu]" + s + ", [role=listbox]" + s);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--,
                    40 == e.keyCode && u < l.length - 1 && u++,
                    ~u || (u = 0),
                    l.eq(u).focus()
                }
            }
        }
    }
    ;
    var a = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var n = t(this)
              , i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)),
            "string" == typeof e && i[e].call(n)
        })
    }
    ,
    t.fn.dropdown.Constructor = r,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a,
        this
    }
    ,
    t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ", [role=menu], [role=listbox]", r.prototype.keydown)
}(jQuery),
+function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype.show = function() {
        var e = this.element
          , n = e.closest("ul:not(.dropdown-menu)")
          , i = e.data("target");
        if (i || (i = e.attr("href"),
        i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a")[0]
              , r = t.Event("show.bs.tab", {
                relatedTarget: o
            });
            if (e.trigger(r),
            !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.parent("li"), n),
                this.activate(a, a.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o
                    })
                })
            }
        }
    }
    ,
    e.prototype.activate = function(e, n, i) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
            e.addClass("active"),
            a ? (e[0].offsetWidth,
            e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"),
            i && i()
        }
        var r = n.find("> .active")
          , a = i && t.support.transition && r.hasClass("fade");
        a ? r.one(t.support.transition.end, o).emulateTransitionEnd(150) : o(),
        r.removeClass("in")
    }
    ;
    var n = t.fn.tab;
    t.fn.tab = function(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.tab");
            o || i.data("bs.tab", o = new e(this)),
            "string" == typeof n && o[n]()
        })
    }
    ,
    t.fn.tab.Constructor = e,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = n,
        this
    }
    ,
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(),
        t(this).tab("show")
    })
}(jQuery),
+function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap")
          , e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)
            if (void 0 !== t.style[n])
                return {
                    end: e[n]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1
          , i = this;
        t(this).one(t.support.transition.end, function() {
            n = !0
        });
        var o = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e),
        this
    }
    ,
    t(function() {
        t.support.transition = e()
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(n, i) {
        var o, r = t.proxy(this.process, this);
        this.$element = t(t(n).is("body") ? window : n),
        this.$body = t("body"),
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", r),
        this.options = t.extend({}, e.DEFAULTS, i),
        this.selector = (this.options.target || (o = t(n).attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.offsets = t([]),
        this.targets = t([]),
        this.activeTarget = null,
        this.refresh(),
        this.process()
    }
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.refresh = function() {
        var e = this.$element[0] == window ? "offset" : "position";
        this.offsets = t([]),
        this.targets = t([]);
        {
            var n = this;
            this.$body.find(this.selector).map(function() {
                var i = t(this)
                  , o = i.data("target") || i.attr("href")
                  , r = /^#./.test(o) && t(o);
                return r && r.length && r.is(":visible") && [[r[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), o]] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                n.offsets.push(this[0]),
                n.targets.push(this[1])
            })
        }
    }
    ,
    e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, i = n - this.$scrollElement.height(), o = this.offsets, r = this.targets, a = this.activeTarget;
        if (e >= i)
            return a != (t = r.last()[0]) && this.activate(t);
        if (a && e <= o[0])
            return a != (t = r[0]) && this.activate(t);
        for (t = o.length; t--; )
            a != r[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(r[t])
    }
    ,
    e.prototype.activate = function(e) {
        this.activeTarget = e,
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
          , i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
        i.trigger("activate.bs.scrollspy")
    }
    ;
    var n = t.fn.scrollspy;
    t.fn.scrollspy = function(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.scrollspy")
              , r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this,r)),
            "string" == typeof n && o[n]()
        })
    }
    ,
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n,
        this
    }
    ,
    t(window).on("load", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    var e = function(e, n) {
        this.options = n,
        this.$element = t(e),
        this.$backdrop = this.isShown = null,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    e.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    e.prototype.toggle = function(t) {
        return this[this.isShown ? "hide" : "show"](t)
    }
    ,
    e.prototype.show = function(e) {
        var n = this
          , i = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(i),
        this.isShown || i.isDefaultPrevented() || (this.isShown = !0,
        this.escape(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
        this.backdrop(function() {
            var i = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(document.body),
            n.$element.show().scrollTop(0),
            i && n.$element[0].offsetWidth,
            n.$element.addClass("in").attr("aria-hidden", !1),
            n.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? n.$element.find(".modal-dialog").one(t.support.transition.end, function() {
                n.$element.focus().trigger(o)
            }).emulateTransitionEnd(300) : n.$element.focus().trigger(o)
        }))
    }
    ,
    e.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        t(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
        t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }
    ,
    e.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.focus()
        }, this))
    }
    ,
    e.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }
    ,
    e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.removeBackdrop(),
            t.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    e.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    e.prototype.backdrop = function(e) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = t.support.transition && n;
            if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body),
            this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)),
            i && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
                return;
            i ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
        } else
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
    }
    ;
    var n = t.fn.modal;
    t.fn.modal = function(n, i) {
        return this.each(function() {
            var o = t(this)
              , r = o.data("bs.modal")
              , a = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
            r || o.data("bs.modal", r = new e(this,a)),
            "string" == typeof n ? r[n](i) : a.show && r.show(i)
        })
    }
    ,
    t.fn.modal.Constructor = e,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = n,
        this
    }
    ,
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var n = t(this)
          , i = n.attr("href")
          , o = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""))
          , r = o.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(i) && i
        }, o.data(), n.data());
        n.is("a") && e.preventDefault(),
        o.modal(r, this).one("hide", function() {
            n.is(":visible") && n.focus()
        })
    }),
    t(document).on("show.bs.modal", ".modal", function() {
        t(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        t(document.body).removeClass("modal-open")
    })
}(jQuery),
+function(t) {
    "use strict";
    var e = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", t, e)
    };
    e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    e.prototype.init = function(e, n, i) {
        this.enabled = !0,
        this.type = e,
        this.$element = t(n),
        this.options = this.getOptions(i);
        for (var o = this.options.trigger.split(" "), r = o.length; r--; ) {
            var a = o[r];
            if ("click" == a)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin"
                  , l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }
    ,
    e.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e),
        e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    }
    ,
    e.prototype.getDelegateOptions = function() {
        var e = {}
          , n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }),
        e
    }
    ,
    e.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout),
        n.hoverState = "in",
        n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }
    ,
    e.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout),
        n.hoverState = "out",
        n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }
    ,
    e.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e),
            e.isDefaultPrevented())
                return;
            var n = this
              , i = this.tip();
            this.setContent(),
            this.options.animation && i.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement
              , r = /\s?auto?\s?/i
              , a = r.test(o);
            a && (o = o.replace(r, "") || "top"),
            i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o),
            this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var s = this.getPosition()
              , l = i[0].offsetWidth
              , u = i[0].offsetHeight;
            if (a) {
                var c = this.$element.parent()
                  , d = o
                  , f = document.documentElement.scrollTop || document.body.scrollTop
                  , p = "body" == this.options.container ? window.innerWidth : c.outerWidth()
                  , h = "body" == this.options.container ? window.innerHeight : c.outerHeight()
                  , m = "body" == this.options.container ? 0 : c.offset().left;
                o = "bottom" == o && s.top + s.height + u - f > h ? "top" : "top" == o && s.top - f - u < 0 ? "bottom" : "right" == o && s.right + l > p ? "left" : "left" == o && s.left - l < m ? "right" : o,
                i.removeClass(d).addClass(o)
            }
            var g = this.getCalculatedOffset(o, s, l, u);
            this.applyPlacement(g, o),
            this.hoverState = null;
            var v = function() {
                n.$element.trigger("shown.bs." + n.type)
            };
            t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, v).emulateTransitionEnd(150) : v()
        }
    }
    ,
    e.prototype.applyPlacement = function(e, n) {
        var i, o = this.tip(), r = o[0].offsetWidth, a = o[0].offsetHeight, s = parseInt(o.css("margin-top"), 10), l = parseInt(o.css("margin-left"), 10);
        isNaN(s) && (s = 0),
        isNaN(l) && (l = 0),
        e.top = e.top + s,
        e.left = e.left + l,
        t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0),
        o.addClass("in");
        var u = o[0].offsetWidth
          , c = o[0].offsetHeight;
        if ("top" == n && c != a && (i = !0,
        e.top = e.top + a - c),
        /bottom|top/.test(n)) {
            var d = 0;
            e.left < 0 && (d = -2 * e.left,
            e.left = 0,
            o.offset(e),
            u = o[0].offsetWidth,
            c = o[0].offsetHeight),
            this.replaceArrow(d - r + u, u, "left")
        } else
            this.replaceArrow(c - a, c, "top");
        i && o.offset(e)
    }
    ,
    e.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }
    ,
    e.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
        t.removeClass("fade in top bottom left right")
    }
    ,
    e.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && i.detach(),
            n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this
          , i = this.tip()
          , o = t.Event("hide.bs." + this.type);
        return this.$element.trigger(o),
        o.isDefaultPrevented() ? void 0 : (i.removeClass("in"),
        t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(),
        this.hoverState = null,
        this)
    }
    ,
    e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }
    ,
    e.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    e.prototype.getPosition = function() {
        var e = this.$element[0];
        return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }, this.$element.offset())
    }
    ,
    e.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }
    ,
    e.prototype.getTitle = function() {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }
    ,
    e.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }
    ,
    e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    e.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(),
        this.$element = null,
        this.options = null)
    }
    ,
    e.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    e.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    e.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    e.prototype.toggle = function(e) {
        var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    e.prototype.destroy = function() {
        clearTimeout(this.timeout),
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    }
    ;
    var n = t.fn.tooltip;
    t.fn.tooltip = function(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.tooltip")
              , r = "object" == typeof n && n;
            (o || "destroy" != n) && (o || i.data("bs.tooltip", o = new e(this,r)),
            "string" == typeof n && o[n]())
        })
    }
    ,
    t.fn.tooltip.Constructor = e,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n,
        this
    }
}(jQuery),
+function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
    e.prototype.constructor = e,
    e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }
    ,
    e.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle()
          , n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
        t.find(".popover-content")[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    }
    ,
    e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    e.prototype.getContent = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }
    ,
    e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ,
    e.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)),
        this.$tip
    }
    ;
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.popover")
              , r = "object" == typeof n && n;
            (o || "destroy" != n) && (o || i.data("bs.popover", o = new e(this,r)),
            "string" == typeof n && o[n]())
        })
    }
    ,
    t.fn.popover.Constructor = e,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = n,
        this
    }
}(jQuery),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    function e(t) {
        window.console && console.warn && console.warn(t)
    }
    var n = function(e, i) {
        n._registry.push(this),
        this.$textarea = e,
        this.$textCopy = t("<span />"),
        this.$clone = t("<pre class='expanding-clone'><br /></pre>").prepend(this.$textCopy),
        this._resetStyles(),
        this._setCloneStyles(),
        this._setTextareaStyles(),
        e.wrap(t("<div class='expanding-wrapper' style='position:relative' />")).after(this.$clone),
        this.attach(),
        this.update(),
        i.update && e.bind("update.expanding", i.update)
    };
    n._registry = [],
    n.getExpandingInstance = function(e) {
        var i = t.map(n._registry, function(t) {
            return t.$textarea[0]
        })
          , o = t.inArray(e, i);
        return o > -1 ? n._registry[o] : null
    }
    ;
    var i = function() {
        var t = -1;
        if ("Microsoft Internet Explorer" === navigator.appName) {
            var e = navigator.userAgent
              , n = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
            null !== n.exec(e) && (t = parseFloat(RegExp.$1))
        }
        return t
    }()
      , o = "oninput"in document.createElement("input") && 9 !== i;
    n.prototype = {
        attach: function() {
            var t = "input.expanding change.expanding"
              , e = this;
            o || (t += " keyup.expanding"),
            this.$textarea.bind(t, function() {
                e.update()
            })
        },
        update: function() {
            this.$textCopy.text(this.$textarea.val().replace(/\r\n/g, "\n")),
            this.$textarea.triggerHandler("update.expanding")
        },
        destroy: function() {
            this.$clone.remove(),
            this.$textarea.unwrap().attr("style", this._oldTextareaStyles || ""),
            delete this._oldTextareaStyles;
            var e = t.inArray(this, n._registry);
            e > -1 && n._registry.splice(e, 1),
            this.$textarea.unbind("input.expanding change.expanding keyup.expanding update.expanding")
        },
        _resetStyles: function() {
            this._oldTextareaStyles = this.$textarea.attr("style"),
            this.$textarea.add(this.$clone).css({
                margin: 0,
                webkitBoxSizing: "border-box",
                mozBoxSizing: "border-box",
                boxSizing: "border-box",
                width: "100%"
            })
        },
        _setCloneStyles: function() {
            var t = {
                display: "block",
                border: "0 solid",
                visibility: "hidden",
                minHeight: this.$textarea.outerHeight()
            };
            "off" === this.$textarea.attr("wrap") ? t.overflowX = "scroll" : t.whiteSpace = "pre-wrap",
            this.$clone.css(t),
            this._copyTextareaStylesToClone()
        },
        _copyTextareaStylesToClone: function() {
            var e = this
              , n = ["lineHeight", "textDecoration", "letterSpacing", "fontSize", "fontFamily", "fontStyle", "fontWeight", "textTransform", "textAlign", "direction", "wordSpacing", "fontSizeAdjust", "wordWrap", "word-break", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "maxHeight"];
            t.each(n, function(t, n) {
                var i = e.$textarea.css(n);
                e.$clone.css(n) !== i && (e.$clone.css(n, i),
                "maxHeight" === n && "none" !== i && e.$clone.css("overflow", "hidden"))
            })
        },
        _setTextareaStyles: function() {
            this.$textarea.css({
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                resize: "none",
                overflow: "auto"
            })
        }
    },
    t.expanding = t.extend({
        autoInitialize: !0,
        initialSelector: "textarea.expanding",
        opts: {
            update: function() {}
        }
    }, t.expanding || {}),
    t.fn.expanding = function(i) {
        if ("destroy" === i)
            return this.each(function() {
                var t = n.getExpandingInstance(this);
                t && t.destroy()
            }),
            this;
        if ("active" === i)
            return !!this.filter(function() {
                return !!n.getExpandingInstance(this)
            }).length;
        var o = t.extend({}, t.expanding.opts, i);
        return this.filter("textarea").each(function() {
            var i = this.offsetWidth > 0 || this.offsetHeight > 0
              , r = n.getExpandingInstance(this);
            i && !r ? new n(t(this),o) : (i || e("ExpandingTextareas: attempt to initialize an invisible textarea. Call expanding() again once it has been inserted into the page and/or is visible."),
            r && e("ExpandingTextareas: attempt to initialize a textarea that has already been initialized. Subsequent calls are ignored."))
        }),
        this
    }
    ,
    t(function() {
        t.expanding.autoInitialize && t(t.expanding.initialSelector).expanding()
    })
}),
jQuery.fn.extend({
    insertAtCaret: function(t) {
        return this.each(function() {
            if (document.selection) {
                this.focus();
                var e = document.selection.createRange();
                e.text = t,
                this.focus()
            } else if (this.selectionStart || "0" == this.selectionStart) {
                var n = this.selectionStart
                  , i = this.selectionEnd
                  , o = this.scrollTop;
                this.value = this.value.substring(0, n) + t + this.value.substring(i, this.value.length),
                this.focus(),
                this.selectionStart = n + t.length,
                this.selectionEnd = n + t.length,
                this.scrollTop = o
            } else
                this.value += t,
                this.focus()
        })
    }
}),
function() {
    $(document).on("paste", "textarea[data-paste-format]", function(t) {
        var e, n, i, o;
        return t.preventDefault(),
        e = $(this),
        i = t.originalEvent.clipboardData.getData("text/plain"),
        n = function() {
            switch (e.data("paste-format")) {
            case "ul":
                return o = i.replace(/(\r\n|\n|\r)([^-])/gm, "\n- $2"),
                /^[^-]/.test(o) ? "- " + o : o;
            case "ol":
                return o = i.replace(/(\r\n|\n|\r)([^(\d\.)])/gm, "\n1. $2"),
                /^[^(\d\.)]/.test(o) ? "1. " + o : o
            }
        }(),
        $(this).insertAtCaret(n).change()
    })
}
.call(this),
function() {
    $("body.recipes-show")[0] && $("a.btn-fork").tooltip({
        placement: "bottom"
    }),
    $("table.recipes")[0] && $("a[title]").tooltip({
        placement: "right"
    })
}
.call(this);
