webpackHotUpdate('static/development/pages/index.js', {
  /***/ './components/Layout.tsx': false,

  /***/ './layouts/Main.tsx':
    /*!**************************!*\
  !*** ./layouts/Main.tsx ***!
  \**************************/
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

      var MainLayout = function MainLayout(_ref) {
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
                  className: ''.concat(className, ' nav-title'),
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
                  href: '/about',
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
          globalStyle,
          styles,
        );
      };

      var _styles$className = {
          styles: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a,
            {
              id: '4242595682',
            },
            '.nav-fixed.jsx-4242595682{position:fixed;z-index:2;width:100%;background-color:rgba(240,242,245,0.95);height:auto;padding:12px 36px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-logo.jsx-4242595682{height:2.5rem;}.nav-title.jsx-4242595682{line-height:2.5rem;display:inline-block;font-size:15px;margin-left:10px;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);}',
          ),
          className: 'jsx-4242595682',
        },
        styles = _styles$className.styles,
        className = _styles$className.className;
      var globalStyle = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a,
        {
          id: '1880338027',
        },
        'h1{font-weight:400 !important;font-size:2.5rem;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;margin-top:12px;}p{font-size:20px;}@media only screen and (max-width:768px){h1{font-size:1.5rem;-webkit-letter-spacing:inherit;-moz-letter-spacing:inherit;-ms-letter-spacing:inherit;letter-spacing:inherit;}p{font-weight:300;font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvbGF5b3V0cy9NYWluLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R21DLEFBR2tDLEFBTVosQUFJSSxBQUlELGVBUHBCLENBUW1CLENBSlEsVUFWUixJQWVqQixhQWRzQixrRkFVdEIsdUJBVGdCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvdHNlL0NvZGUvVmlzdWFsbHlMYWIvQmlpTWUtc3RvcmUtd2ViL2xheW91dHMvTWFpbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcbmltcG9ydCB7IENvbCwgTGF5b3V0LCBSb3cgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGUubGVzcyc7XG5pbXBvcnQge1xuICBTSVRFX1RJVExFLFxuICBTSVRFX0RFU0MsXG4gIE5BVl9USVRMRSxcbiAgRkFWSUNPTl9QQVRILFxuICBMQVJHRV9JQ09OX1BBVEgsXG4gIFNJVEVfVVJMLFxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmNvbnN0IE1haW5MYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUgPSBTSVRFX1RJVExFLFxufSkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJsYW5ndWFnZVwiIGNvbnRlbnQ9XCJlblwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtTSVRFX0RFU0N9IC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9e0ZBVklDT05fUEFUSH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPXtMQVJHRV9JQ09OX1BBVEh9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e1NJVEVfVVJMfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e1NJVEVfVElUTEV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17U0lURV9ERVNDfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e0xBUkdFX0lDT05fUEFUSH0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZVwiIGNvbnRlbnQ9XCJibGFja1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxMYXlvdXQuSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBuYXYtZml4ZWRgfT5cbiAgICAgIDxzcGFuPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3N0YXRpYy9sb2dvLnN2Z1wiXG4gICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IG5hdi1sb2dvYH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IG5hdi10aXRsZWB9PntOQVZfVElUTEV9PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7JyB8ICd9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zcGFuPlxuICAgIDwvTGF5b3V0LkhlYWRlcj5cbiAgICA8TGF5b3V0LkNvbnRlbnQ+XG4gICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8Q29sIHhzPXsyMH0gbGc9ezEyfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9MYXlvdXQuQ29udGVudD5cbiAgICA8TGF5b3V0LkZvb3Rlcj4gRm9vdGVyIGlzIGhlcmUgPC9MYXlvdXQuRm9vdGVyPlxuICAgIHtnbG9iYWxTdHlsZX1cbiAgICB7c3R5bGVzfVxuICA8L0xheW91dD5cbik7XG5cbmNvbnN0IHsgc3R5bGVzLCBjbGFzc05hbWUgfSA9IGNzcy5yZXNvbHZlYFxuICAubmF2LWZpeGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQyLCAyNDUsIDAuOTUpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMnB4IDM2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubmF2LWxvZ28ge1xuICAgIGhlaWdodDogMi41cmVtO1xuICB9XG5cbiAgLm5hdi10aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICB9XG5cbmA7XG5cbmNvbnN0IGdsb2JhbFN0eWxlID0gKFxuICA8c3R5bGUganN4PXt0cnVlfSBnbG9iYWw9e3RydWV9PntgXG4gICAgaDEge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIGB9PC9zdHlsZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/layouts/Main.tsx */',
      );
      /* harmony default export */ __webpack_exports__['default'] = MainLayout;

      /***/
    },

  /***/ './pages/index.tsx':
    /*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/regenerator */ './node_modules/@babel/runtime-corejs2/regenerator/index.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ './node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ './node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/createClass */ './node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ './node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ './node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ './node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/inherits */ './node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ './node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../components/Section */ './components/Section.tsx',
      );
      /* harmony import */ var _layouts_Main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../layouts/Main */ './layouts/Main.tsx',
      );

      var Index =
        /*#__PURE__*/
        (function(_React$Component) {
          Object(
            _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[
              'default'
            ],
          )(Index, _React$Component);

          function Index() {
            var _getPrototypeOf2;

            var _this;

            Object(
              _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[
                'default'
              ],
            )(this, Index);

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            _this = Object(
              _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[
                'default'
              ],
            )(
              this,
              (_getPrototypeOf2 = Object(
                _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[
                  'default'
                ],
              )(Index)).call.apply(_getPrototypeOf2, [this].concat(args)),
            );

            Object(
              _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[
                'default'
              ],
            )(
              Object(
                _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[
                  'default'
                ],
              )(_this),
              'state',
              {
                user: {
                  gender: '',
                  name: '',
                  region: '',
                  surname: '',
                  photo: '',
                },
              },
            );

            return _this;
          }

          Object(
            _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[
              'default'
            ],
          )(Index, [
            {
              key: 'componentDidMount',
              value: (function() {
                var _componentDidMount = Object(
                  _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[
                    'default'
                  ],
                )(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                    function _callee() {
                      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                alert('yo');

                              case 1:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this,
                      );
                    },
                  ),
                );

                function componentDidMount() {
                  return _componentDidMount.apply(this, arguments);
                }

                return componentDidMount;
              })(),
            },
            {
              key: 'render',
              value: function render() {
                return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                  _layouts_Main__WEBPACK_IMPORTED_MODULE_11__['default'],
                  null,
                  react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
                    _components_Section__WEBPACK_IMPORTED_MODULE_10__[
                      'default'
                    ],
                    {
                      fullscreen: true,
                    },
                    'Yo',
                  ),
                );
              },
            },
          ]);

          return Index;
        })(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

      /* harmony default export */ __webpack_exports__['default'] = Index;

      /***/
    },
});
//# sourceMappingURL=index.js.91c7fc4540130a166ba5.hot-update.js.map
