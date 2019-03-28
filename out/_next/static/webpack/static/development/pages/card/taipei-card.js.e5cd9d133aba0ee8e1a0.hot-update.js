webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './layouts/Card.tsx':
    /*!**************************!*\
  !*** ./layouts/Card.tsx ***!
  \**************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! antd/lib/layout/style */ './node_modules/antd/lib/layout/style/index.js',
      );
      /* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! antd/lib/layout */ './node_modules/antd/lib/layout/index.js',
      );
      /* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! antd/lib/row/style */ './node_modules/antd/lib/row/style/index.js',
      );
      /* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! antd/lib/row */ './node_modules/antd/lib/row/index.js',
      );
      /* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_row__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! antd/lib/col/style */ './node_modules/antd/lib/col/style/index.js',
      );
      /* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! antd/lib/col */ './node_modules/antd/lib/col/index.js',
      );
      /* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        antd_lib_col__WEBPACK_IMPORTED_MODULE_5__,
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
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../assets/style.less */ './assets/style.less',
      );
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_style_less__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../constants */ './constants/index.ts',
      );

      var MyLayout = function MyLayout(_ref) {
        var children = _ref.children,
          _ref$title = _ref.title,
          title =
            _ref$title === void 0
              ? _constants__WEBPACK_IMPORTED_MODULE_10__['SITE_TITLE']
              : _ref$title;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a,
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
              content: _constants__WEBPACK_IMPORTED_MODULE_10__['SITE_DESC'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('link', {
              rel: 'icon',
              type: 'image/x-icon',
              href: _constants__WEBPACK_IMPORTED_MODULE_10__['FAVICON_PATH'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('link', {
              rel: 'apple-touch-icon',
              href: _constants__WEBPACK_IMPORTED_MODULE_10__['LARGE_ICON_PATH'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:url',
              content: _constants__WEBPACK_IMPORTED_MODULE_10__['SITE_URL'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:title',
              content: _constants__WEBPACK_IMPORTED_MODULE_10__['SITE_TITLE'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:description',
              content: _constants__WEBPACK_IMPORTED_MODULE_10__['SITE_DESC'],
            }),
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('meta', {
              property: 'og:image',
              content:
                _constants__WEBPACK_IMPORTED_MODULE_10__['LARGE_ICON_PATH'],
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
            antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Content,
            null,
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
              antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a,
              {
                type: 'flex',
                justify: 'center',
              },
              react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a,
                {
                  xs: 20,
                  lg: 12,
                },
                children,
              ),
            ),
          ),
          globalStyles,
        );
      };

      var globalStyles = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a,
        {
          id: '996206345',
        },
        'h1{font-weight:400;font-size:2.5rem;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;margin-top:12px;}p{font-size:20px;}@media only screen and (max-width:768px){h1{font-size:1.5rem;-webkit-letter-spacing:inherit;-moz-letter-spacing:inherit;-ms-letter-spacing:inherit;letter-spacing:inherit;}p{font-weight:300;font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvbGF5b3V0cy9DYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRG1DLEFBR3VCLEFBTUQsQUFJSSxBQUlELGVBUHBCLENBTm1CLEFBY0EsQ0FKUSxjQUt6QixFQWRzQiw2RkFVdEIsWUFUZ0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvbGF5b3V0cy9DYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ29sLCBMYXlvdXQsIFJvdyB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZS5sZXNzJztcbmltcG9ydCB7XG4gIFNJVEVfVElUTEUsXG4gIFNJVEVfREVTQyxcbiAgRkFWSUNPTl9QQVRILFxuICBMQVJHRV9JQ09OX1BBVEgsXG4gIFNJVEVfVVJMLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG50eXBlIFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgTXlMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9IFNJVEVfVElUTEUsXG59KSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImxhbmd1YWdlXCIgY29udGVudD1cImVuXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e1NJVEVfREVTQ30gLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj17RkFWSUNPTl9QQVRIfSAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9e0xBUkdFX0lDT05fUEFUSH0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17U0lURV9VUkx9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17U0lURV9USVRMRX0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtTSVRFX0RFU0N9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17TEFSR0VfSUNPTl9QQVRIfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXCIgY29udGVudD1cImJsYWNrXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPExheW91dC5Db250ZW50PlxuICAgICAgPFJvdyB0eXBlPVwiZmxleFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgPENvbCB4cz17MjB9IGxnPXsxMn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvTGF5b3V0LkNvbnRlbnQ+XG4gICAge2dsb2JhbFN0eWxlc31cbiAgPC9MYXlvdXQ+XG4pO1xuXG5jb25zdCBnbG9iYWxTdHlsZXMgPSAoXG4gIDxzdHlsZSBqc3g9e3RydWV9IGdsb2JhbD17dHJ1ZX0+e2BcbiAgICBoMSB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIGB9PC9zdHlsZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE15TGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/layouts/Card.tsx */',
      );
      /* harmony default export */ __webpack_exports__['default'] = MyLayout;

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.e5cd9d133aba0ee8e1a0.hot-update.js.map
