webpackHotUpdate('static/development/pages/index.js', {
  /***/ './components/Layout.tsx':
    /*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! antd/lib/row/style */ './node_modules/antd/lib/row/style/index.js',
      );
      /* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! antd/lib/row */ './node_modules/antd/lib/row/index.js',
      );
      /* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_row__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! antd/lib/col/style */ './node_modules/antd/lib/col/style/index.js',
      );
      /* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! antd/lib/col */ './node_modules/antd/lib/col/index.js',
      );
      /* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_col__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! antd/lib/layout/style */ './node_modules/antd/lib/layout/style/index.js',
      );
      /* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! antd/lib/layout */ './node_modules/antd/lib/layout/index.js',
      );
      /* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! styled-jsx/style */ './node_modules/styled-jsx/style.js',
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! next-server/head */ './node_modules/next-server/head.js',
      );
      /* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        next_server_head__WEBPACK_IMPORTED_MODULE_8__,
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! next/link */ './node_modules/next/link.js',
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        next_link__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../assets/style.less */ './assets/style.less',
      );
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_style_less__WEBPACK_IMPORTED_MODULE_10__,
      );
      /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../constants */ './constants/index.ts',
      );

      var MyLayout = function MyLayout(_ref) {
        var children = _ref.children,
          _ref$title = _ref.title,
          title =
            _ref$title === void 0
              ? _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_TITLE']
              : _ref$title;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a,
          null,
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            next_server_head__WEBPACK_IMPORTED_MODULE_8___default.a,
            null,
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'title',
              null,
              title,
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              charSet: 'utf-8',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'viewport',
              content: 'initial-scale=1.0, width=device-width',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'language',
              content: 'en',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'description',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_DESC'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('link', {
              rel: 'icon',
              type: 'image/x-icon',
              href: _constants__WEBPACK_IMPORTED_MODULE_11__['FAVICON_PATH'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('link', {
              rel: 'apple-touch-icon',
              href: _constants__WEBPACK_IMPORTED_MODULE_11__['LARGE_ICON_PATH'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:url',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_URL'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:title',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_TITLE'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:description',
              content: _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_DESC'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:image',
              content:
                _constants__WEBPACK_IMPORTED_MODULE_11__['LARGE_ICON_PATH'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              name: 'apple-mobile-web-app-status-bar-style',
              content: 'black',
            }),
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
            {
              className: ''.concat(className, ' nav-fixed'),
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'span',
              null,
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'img',
                {
                  src: '/static/logo.svg',
                  alt: 'logo',
                  className: ''.concat(className, ' nav-logo'),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                'span',
                {
                  className: 'nav-title',
                },
                _constants__WEBPACK_IMPORTED_MODULE_11__['NAV_TITLE'],
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              'span',
              null,
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                next_link__WEBPACK_IMPORTED_MODULE_9___default.a,
                {
                  href: '/',
                },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'a',
                  null,
                  'Home',
                ),
              ),
              ' | ',
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                next_link__WEBPACK_IMPORTED_MODULE_9___default.a,
                {
                  href: '/about/a',
                },
                react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  'a',
                  null,
                  'About',
                ),
              ),
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Content,
            null,
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                type: 'flex',
                justify: 'center',
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a,
                {
                  xs: 20,
                  lg: 12,
                },
                children,
              ),
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Footer,
            null,
            ' Footer is here ',
          ),
          styles,
        );
      };

      var _styles$className = {
          styles: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a,
            {
              id: '2471195811',
            },
            '.nav-fixed.jsx-2471195811{position:fixed;z-index:2;width:100%;background-color:rgba(240,242,245,0.95);height:auto;padding:12px 36px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-logo.jsx-2471195811{height:2.5rem;}.nav-title.jsx-2471195811{line-height:2.5rem;display:inline-block;font-size:90px;margin-left:10px;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}',
          ),
          className: 'jsx-2471195811',
        },
        styles = _styles$className.styles,
        className = _styles$className.className;
      /* harmony default export */ __webpack_exports__['default'] = MyLayout;

      /***/
    },
});
//# sourceMappingURL=index.js.6067460d0956c616a2f1.hot-update.js.map
