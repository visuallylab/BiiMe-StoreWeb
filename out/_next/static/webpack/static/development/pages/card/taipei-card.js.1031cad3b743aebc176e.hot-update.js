webpackHotUpdate('static/development/pages/card/taipei-card.js', {
  /***/ './layouts/Card.tsx':
    /*!**************************!*\
  !*** ./layouts/Card.tsx ***!
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
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../assets/style.less */ './assets/style.less',
      );
      /* harmony import */ var _assets_style_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_style_less__WEBPACK_IMPORTED_MODULE_9__,
      );
      /* harmony import */ var _assets_card_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../assets/card.less */ './assets/card.less',
      );
      /* harmony import */ var _assets_card_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        _assets_card_less__WEBPACK_IMPORTED_MODULE_10__,
      );
      /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! ../constants */ './constants/index.ts',
      );

      var CardLayout = function CardLayout(_ref) {
        var children = _ref.children,
          _ref$title = _ref.title,
          title =
            _ref$title === void 0
              ? _constants__WEBPACK_IMPORTED_MODULE_11__['SITE_TITLE']
              : _ref$title,
          style = _ref.style;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a,
          {
            style: style,
          },
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
              style: {
                background: 'rgb(22, 28, 53)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('img', {
              src: '/static/logo_BiiMe.png',
              alt: 'logo',
              style: {
                height: '100%',
              },
            }),
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
          globalStyles,
        );
      };

      var globalStyles = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a,
        {
          id: '3949631075',
        },
        'h1{font-weight:400;font-size:2.5rem;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;margin-top:12px;}p{font-size:20px;}@media only screen and (max-width:768px){h1{font-size:1.5rem;-webkit-letter-spacing:inherit;-moz-letter-spacing:inherit;-ms-letter-spacing:inherit;letter-spacing:inherit;}p{font-weight:300;font-size:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvbGF5b3V0cy9DYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRXFCLEFBR3VCLEFBTUQsQUFLSSxBQUlELGVBUnBCLENBTm1CLEFBZUEsQ0FKUSxjQUt6QixFQWZzQiw2RkFXdEIsWUFWZ0IsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy90c2UvQ29kZS9WaXN1YWxseUxhYi9CaWlNZS1zdG9yZS13ZWIvbGF5b3V0cy9DYXJkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ29sLCBMYXlvdXQsIFJvdyB9IGZyb20gJ2FudGQnO1xuXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZS5sZXNzJztcbmltcG9ydCAnLi4vYXNzZXRzL2NhcmQubGVzcyc7XG5pbXBvcnQge1xuICBTSVRFX1RJVExFLFxuICBTSVRFX0RFU0MsXG4gIEZBVklDT05fUEFUSCxcbiAgTEFSR0VfSUNPTl9QQVRILFxuICBTSVRFX1VSTCxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxudHlwZSBUUHJvcHMgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG59XG5cbmNvbnN0IENhcmRMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFRQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUgPSBTSVRFX1RJVExFLFxuICBzdHlsZSxcbn0pID0+IChcbiAgPExheW91dCBzdHlsZT17c3R5bGV9PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJsYW5ndWFnZVwiIGNvbnRlbnQ9XCJlblwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtTSVRFX0RFU0N9IC8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9e0ZBVklDT05fUEFUSH0gLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPXtMQVJHRV9JQ09OX1BBVEh9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e1NJVEVfVVJMfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e1NJVEVfVElUTEV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17U0lURV9ERVNDfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e0xBUkdFX0lDT05fUEFUSH0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZVwiIGNvbnRlbnQ9XCJibGFja1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxMYXlvdXQuSGVhZGVyIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAncmdiKDIyLCAyOCwgNTMpJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH19PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvc3RhdGljL2xvZ29fQmlpTWUucG5nXCJcbiAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19XG4gICAgICAvPlxuICAgIDwvTGF5b3V0LkhlYWRlcj5cbiAgICA8TGF5b3V0LkNvbnRlbnQ+XG4gICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICA8Q29sIHhzPXsyMH0gbGc9ezEyfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9MYXlvdXQuQ29udGVudD5cbiAgICB7Z2xvYmFsU3R5bGVzfVxuICA8L0xheW91dD5cbik7XG5cbmNvbnN0IGdsb2JhbFN0eWxlcyA9IChcbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICBoMSB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgYH08L3N0eWxlPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/tse/Code/VisuallyLab/BiiMe-store-web/layouts/Card.tsx */',
      );
      /* harmony default export */ __webpack_exports__['default'] = CardLayout;

      /***/
    },
});
//# sourceMappingURL=taipei-card.js.1031cad3b743aebc176e.hot-update.js.map
