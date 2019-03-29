(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    181: function(e, t, a) {
      e.exports = a(375);
    },
    323: function(e, t) {
      e.exports =
        '/BiiMe-store-web//_next/static/images/logo-c7131753c7c06060b8193082f9bbf779.svg';
    },
    374: function(e, t, a) {
      __NEXT_REGISTER_PAGE('/', function() {
        return (e.exports = a(388)), { page: e.exports.default };
      });
    },
    375: function(e, t, a) {
      'use strict';
      var n = a(43),
        r = a(16);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var l = r(a(376)),
        o = r(a(99)),
        i = r(a(21)),
        c = r(a(22)),
        s = r(a(36)),
        p = r(a(37)),
        f = r(a(38)),
        u = r(a(101)),
        m = r(a(32)),
        d = a(213),
        h = n(a(1)),
        w = (r(a(2)), n(a(98))),
        g = a(49);
      var x = (function(e) {
        function t() {
          var e, a, n, r, l, c;
          (0, i.default)(this, t);
          for (var f = arguments.length, h = new Array(f), x = 0; x < f; x++)
            h[x] = arguments[x];
          return (
            (a = (0, s.default)(
              this,
              (e = (0, p.default)(t)).call.apply(e, [this].concat(h)),
            )),
            (0, m.default)(
              (0, u.default)((0, u.default)(a)),
              'formatUrls',
              ((n = function(e, t) {
                return {
                  href:
                    e && 'object' === (0, o.default)(e) ? (0, d.format)(e) : e,
                  as:
                    t && 'object' === (0, o.default)(t) ? (0, d.format)(t) : t,
                };
              }),
              (r = null),
              (l = null),
              (c = null),
              function(e, t) {
                if (e === r && t === l) return c;
                var a = n(e, t);
                return (r = e), (l = t), (c = a), a;
              }),
            ),
            (0, m.default)(
              (0, u.default)((0, u.default)(a)),
              'linkClicked',
              function(e) {
                var t = e.currentTarget,
                  n = t.nodeName,
                  r = t.target;
                if (
                  'A' !== n ||
                  !(
                    (r && '_self' !== r) ||
                    e.metaKey ||
                    e.ctrlKey ||
                    e.shiftKey ||
                    (e.nativeEvent && 2 === e.nativeEvent.which)
                  )
                ) {
                  var l = a.formatUrls(a.props.href, a.props.as),
                    o = l.href,
                    i = l.as;
                  if (
                    (function(e) {
                      var t = (0, d.parse)(e, !1, !0),
                        a = (0, d.parse)((0, g.getLocationOrigin)(), !1, !0);
                      return (
                        !t.host ||
                        (t.protocol === a.protocol && t.host === a.host)
                      );
                    })(o)
                  ) {
                    var c = window.location.pathname;
                    (o = (0, d.resolve)(c, o)),
                      (i = i ? (0, d.resolve)(c, i) : o),
                      e.preventDefault();
                    var s = a.props.scroll;
                    null == s && (s = i.indexOf('#') < 0);
                    var p = a.props.replace ? 'replace' : 'push';
                    w.default[p](o, i, { shallow: a.props.shallow })
                      .then(function(e) {
                        e &&
                          s &&
                          (window.scrollTo(0, 0), document.body.focus());
                      })
                      .catch(function(e) {
                        a.props.onError && a.props.onError(e);
                      });
                  }
                }
              },
            ),
            a
          );
        }
        return (
          (0, f.default)(t, e),
          (0, c.default)(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.prefetch();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function(e) {
                (0, l.default)(this.props.href) !== (0, l.default)(e.href) &&
                  this.prefetch();
              },
            },
            {
              key: 'prefetch',
              value: function() {
                if (this.props.prefetch && 'undefined' != typeof window) {
                  var e = window.location.pathname,
                    t = this.formatUrls(this.props.href, this.props.as).href,
                    a = (0, d.resolve)(e, t);
                  w.default.prefetch(a);
                }
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props.children,
                  a = this.formatUrls(this.props.href, this.props.as),
                  n = a.href,
                  r = a.as;
                'string' == typeof t &&
                  (t = h.default.createElement('a', null, t));
                var l = h.Children.only(t),
                  o = {
                    onClick: function(t) {
                      l.props &&
                        'function' == typeof l.props.onClick &&
                        l.props.onClick(t),
                        t.defaultPrevented || e.linkClicked(t);
                    },
                  };
                return (
                  (!this.props.passHref &&
                    ('a' !== l.type || 'href' in l.props)) ||
                    (o.href = r || n),
                  o.href &&
                    'undefined' != typeof __NEXT_DATA__ &&
                    __NEXT_DATA__.nextExport &&
                    (o.href = (0, w._rewriteUrlForNextExport)(o.href)),
                  h.default.cloneElement(l, o)
                );
              },
            },
          ]),
          t
        );
      })(h.Component);
      t.default = x;
    },
    376: function(e, t, a) {
      e.exports = a(377);
    },
    377: function(e, t, a) {
      var n = a(12),
        r = n.JSON || (n.JSON = { stringify: JSON.stringify });
      e.exports = function(e) {
        return r.stringify.apply(r, arguments);
      };
    },
    388: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        r = a.n(n),
        l = (a(75), a(40)),
        o = a.n(l),
        i = (a(76), a(41)),
        c = a.n(i),
        s = (a(146), a(23)),
        p = a.n(s),
        f = a(5),
        u = a.n(f),
        m = a(59),
        d = a.n(m),
        h = a(181),
        w = a.n(h),
        g = (a(147), a(11)),
        x = a(323),
        E = a.n(x),
        v = {
          styles: r.a.createElement(u.a, {
            styleId: '4242595682',
            css: [
              '.nav-fixed.jsx-4242595682{position:fixed;z-index:2;width:100%;background-color:rgba(240,242,245,0.95);height:auto;padding:12px 36px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}',
              '.nav-logo.jsx-4242595682{height:2.5rem;}',
              '.nav-title.jsx-4242595682{line-height:2.5rem;display:inline-block;font-size:15px;margin-left:10px;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}',
            ],
          }),
          className: 'jsx-4242595682',
        },
        y = v.styles,
        b = v.className,
        k = r.a.createElement(u.a, {
          styleId: '1880338027',
          css: [
            'h1{font-weight:400 !important;font-size:2.5rem;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;margin-top:12px;}',
            'p{font-size:20px;}',
            '@media only screen and (max-width:768px){h1{font-size:1.5rem;-webkit-letter-spacing:inherit;-moz-letter-spacing:inherit;-ms-letter-spacing:inherit;letter-spacing:inherit;}p{font-weight:300;font-size:20px;}}',
          ],
        }),
        _ = function(e) {
          var t = e.children,
            a = e.title,
            n = void 0 === a ? g.e : a;
          return r.a.createElement(
            p.a,
            null,
            r.a.createElement(
              d.a,
              null,
              r.a.createElement('title', null, n),
              r.a.createElement('meta', { charSet: 'utf-8' }),
              r.a.createElement('meta', {
                name: 'viewport',
                content: 'initial-scale=1.0, width=device-width',
              }),
              r.a.createElement('meta', { name: 'language', content: 'en' }),
              r.a.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0',
              }),
              r.a.createElement('meta', { name: 'description', content: g.d }),
              r.a.createElement('link', {
                rel: 'icon',
                type: 'image/x-icon',
                href: g.a,
              }),
              r.a.createElement('link', { rel: 'apple-touch-icon', href: g.b }),
              r.a.createElement('meta', { property: 'og:url', content: g.f }),
              r.a.createElement('meta', { property: 'og:title', content: g.e }),
              r.a.createElement('meta', {
                property: 'og:description',
                content: g.d,
              }),
              r.a.createElement('meta', { property: 'og:image', content: g.b }),
              r.a.createElement('meta', {
                name: 'apple-mobile-web-app-capable',
                content: 'yes',
              }),
              r.a.createElement('meta', {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black',
              }),
            ),
            r.a.createElement(
              p.a.Header,
              { className: ''.concat(b, ' nav-fixed') },
              r.a.createElement(
                'span',
                null,
                r.a.createElement('img', {
                  src: E.a,
                  alt: 'logo',
                  className: ''.concat(b, ' nav-logo'),
                }),
                r.a.createElement(
                  'span',
                  { className: ''.concat(b, ' nav-title') },
                  g.c,
                ),
              ),
              r.a.createElement(
                'span',
                null,
                r.a.createElement(
                  w.a,
                  { href: '/' },
                  r.a.createElement('a', null, 'Home'),
                ),
                ' | ',
                r.a.createElement(
                  w.a,
                  { href: '/about' },
                  r.a.createElement('a', null, 'About'),
                ),
              ),
            ),
            r.a.createElement(
              p.a.Content,
              null,
              r.a.createElement(
                o.a,
                { type: 'flex', justify: 'center' },
                r.a.createElement(c.a, { xs: 20, lg: 12 }, t),
              ),
            ),
            r.a.createElement(p.a.Footer, null, ' Footer is here '),
            k,
            y,
          );
        },
        N = a(60);
      t.default = function() {
        return r.a.createElement(
          _,
          null,
          r.a.createElement(N.a, { fullscreen: !0 }, 'Yo! Store Web!'),
        );
      };
    },
  },
  [[374, 1, 0, 2]],
]);
